import PptxGenJS from "pptxgenjs";
import { leadershipQA, leadershipDecisions } from "../src/data/ra-plus-board-qa";
import * as fs from "fs";
import * as path from "path";

const C = {
  bg: "FFFFFF",
  card: "F7F8F7",
  text: "1E2420",
  muted: "5A625C",
  border: "E2E6E2",
  primary: "3DCD58",
  secondary: "005730",
  accent: "007A27",
  softGreen: "EAF8ED",
  softGray: "F1F3F2",
  white: "FFFFFF",
};

const W = 13.333;
const M = 0.68;

function addTopRule(slide: PptxGenJS.Slide) {
  slide.addShape("rect", { x: 0, y: 0, w: W, h: 0.09, fill: { color: C.primary }, line: { color: C.primary } });
  slide.addShape("rect", { x: 0, y: 0.09, w: W, h: 0.015, fill: { color: C.secondary }, line: { color: C.secondary } });
}

function addFooter(slide: PptxGenJS.Slide, page: number, total: number) {
  slide.addText("RA+ Strategy & Roadmap · Confidential", {
    x: M, y: 7.25, w: 6, h: 0.24, fontFace: "Calibri", fontSize: 8.5, color: C.muted, valign: "middle",
  });
  slide.addText(`${page} / ${total}`, {
    x: W - M - 1, y: 7.25, w: 1, h: 0.24, fontFace: "Calibri", fontSize: 8.5, color: C.muted, valign: "middle", align: "right",
  });
}

async function fixDuplicateShapeIds(pptxBuffer: Buffer): Promise<Buffer> {
  const JSZip = (await import("jszip")).default;
  const zip = await JSZip.loadAsync(pptxBuffer);
  const slideFiles = Object.keys(zip.files).filter((n) => n.startsWith("ppt/slides/slide") && n.endsWith(".xml"));
  for (const file of slideFiles) {
    let xml = await zip.file(file)!.async("text");
    let nextId = 1;
    xml = xml.replace(/(<a:cNvPr[^>]*\sid=")(\d+)(")/g, (match, prefix) => {
      return `${prefix}${nextId++}${'"'}`;
    });
    zip.file(file, xml);
  }
  return zip.generateAsync({ type: "nodebuffer", compression: "DEFLATE", compressionOptions: { level: 9 } });
}

async function main() {
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_16x9";
  pptx.defineSlideMaster({
    title: "MASTER_SLIDE",
    background: { color: C.bg },
  });

  const sections = ["Roadmap", "Competition", "Value case", "Go to market", "Trust", "Beyond 2027"];
  const qaBySection: Record<string, typeof leadershipQA> = {};
  for (const s of sections) qaBySection[s] = [];
  for (const qa of leadershipQA) {
    if (!qaBySection[qa.section]) qaBySection[qa.section] = [];
    qaBySection[qa.section].push(qa);
  }

  const totalSlides = 1 + sections.length + leadershipQA.length + 1;
  let page = 1;

  // Cover
  const cover = pptx.addSlide();
  addTopRule(cover);
  cover.addText("LEADERSHIP Q&A", {
    x: M, y: 2.4, w: W - M * 2, h: 1.1, fontFace: "Calibri", fontSize: 54, bold: true, color: C.text, valign: "middle",
  });
  cover.addText("RA+ 2026 and 2027 roadmap", {
    x: M, y: 3.6, w: W - M * 2, h: 0.6, fontFace: "Calibri", fontSize: 24, color: C.accent, valign: "middle",
  });
  cover.addText("The questions leadership will ask, the evidence behind each answer, and the implication for the decision.", {
    x: M, y: 4.4, w: W - M * 2, h: 0.8, fontFace: "Calibri", fontSize: 16, color: C.muted, valign: "top",
  });
  addFooter(cover, page++, totalSlides);

  // Section dividers + Q&A
  for (const section of sections) {
    const items = qaBySection[section] || [];
    if (items.length === 0) continue;

    const divider = pptx.addSlide();
    addTopRule(divider);
    divider.addShape("roundRect", {
      x: M, y: 2.7, w: 2.8, h: 0.5, fill: { color: C.softGreen }, line: { color: C.softGreen }, rectRadius: 0.25,
    });
    divider.addText(section.toUpperCase(), {
      x: M + 0.22, y: 2.75, w: 2.5, h: 0.4, fontFace: "Calibri", fontSize: 14, bold: true, color: C.accent, valign: "middle",
    });
    divider.addText("Leadership Q&A", {
      x: M, y: 3.5, w: W - M * 2, h: 0.8, fontFace: "Calibri", fontSize: 40, bold: true, color: C.text, valign: "top",
    });
    addFooter(divider, page++, totalSlides);

    for (const qa of items) {
      const slide = pptx.addSlide();
      addTopRule(slide);
      const pillW = Math.min(3.5, 0.55 + qa.section.length * 0.115);
      slide.addShape("roundRect", {
        x: M, y: 0.34, w: pillW, h: 0.32, fill: { color: C.softGreen }, line: { color: C.softGreen }, rectRadius: 0.16,
      });
      slide.addText(qa.section.toUpperCase(), {
        x: M + 0.18, y: 0.36, w: pillW - 0.32, h: 0.28, fontFace: "Calibri", fontSize: 9.5, bold: true, color: C.accent, valign: "middle", wrap: false,
      });
      slide.addText(qa.question, {
        x: M, y: 0.84, w: W - M * 2, h: 0.9, fontFace: "Calibri", fontSize: 28, bold: true, color: C.text, valign: "top", fit: "shrink",
      });
      slide.addText(qa.answer, {
        x: M, y: 1.85, w: W - M * 2, h: 0.95, fontFace: "Calibri", fontSize: 13, color: C.text, valign: "top",
      });
      const proofText = qa.proof.map((p) => `• ${p}`).join("\n");
      slide.addText(proofText, {
        x: M + 0.1, y: 2.95, w: W - M * 2 - 0.2, h: 1.5, fontFace: "Calibri", fontSize: 11.5, color: C.muted, valign: "top", bullet: true,
      });
      const caution = qa.caution ? `Caution: ${qa.caution}` : "";
      const implicationText = `Implication: ${qa.implication}${caution ? "\n" + caution : ""}`;
      slide.addText(implicationText, {
        x: M, y: 4.65, w: W - M * 2, h: 1.1, fontFace: "Calibri", fontSize: 11.5, color: C.accent, valign: "top", italic: true,
      });
      addFooter(slide, page++, totalSlides);
    }
  }

  // Decisions slide
  const decisions = pptx.addSlide();
  addTopRule(decisions);
  decisions.addText("Decisions for leadership", {
    x: M, y: 0.5, w: W - M * 2, h: 0.7, fontFace: "Calibri", fontSize: 34, bold: true, color: C.text, valign: "top",
  });
  const cardH = 1.05;
  const cardGap = 0.18;
  const startY = 1.45;
  leadershipDecisions.forEach((d, i) => {
    const y = startY + i * (cardH + cardGap);
    decisions.addShape("roundRect", {
      x: M, y, w: W - M * 2, h: cardH, fill: { color: C.card }, line: { color: C.border }, rectRadius: 0.12,
    });
    decisions.addText(`${i + 1}. ${d.title}`, {
      x: M + 0.18, y: y + 0.12, w: W - M * 2 - 0.36, h: 0.32, fontFace: "Calibri", fontSize: 14, bold: true, color: C.text, valign: "top",
    });
    decisions.addText(d.line, {
      x: M + 0.18, y: y + 0.48, w: W - M * 2 - 0.36, h: 0.48, fontFace: "Calibri", fontSize: 11.5, color: C.muted, valign: "top",
    });
  });
  addFooter(decisions, page++, totalSlides);

  const buffer = await pptx.write({ outputType: "nodebuffer" }) as Buffer;
  const fixed = await fixDuplicateShapeIds(buffer);
  const outPath = path.resolve(__dirname, "../public/RA-Plus-Board-QA-2026-2027.pptx");
  fs.writeFileSync(outPath, fixed);
  console.log(`Wrote ${outPath} (${fixed.length} bytes, ${leadershipQA.length + 2 + sections.length} slides)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
