import { writeFileSync } from "node:fs";
import PptxGenJS from "pptxgenjs";
import { cpDeck, CPSlide } from "../src/data/cp-roadmap-deck";
import { patchPptxCompatibility } from "../src/lib/pptx-export";

const OUT = process.argv[2] ?? "/mnt/documents/RA-Plus-Creative-Editable-Slides-v1.pptx";
const W = 13.333;
const H = 7.5;
const C = {
  green: "3DCD58",
  deep: "005730",
  forest: "073B26",
  lime: "CDFC57",
  amber: "FFB04C",
  graphite: "242725",
  ink: "363B37",
  muted: "6B716D",
  line: "D8DEDA",
  mist: "F3F6F4",
  pale: "EAF8ED",
  white: "FFFFFF",
};
const HEAD = "Inter";
const BODY = "Inter";

const pptx = new PptxGenJS();
pptx.layout = "LAYOUT_WIDE";
pptx.author = "Schneider Electric, Sustainability Business";
pptx.subject = "Creative editable PowerPoint design concepts";
pptx.title = "RA+ Creative Editable Slide Concepts";
pptx.company = "Schneider Electric";
pptx.lang = "en-US";

function getSlide<T extends CPSlide["kind"]>(kind: T, title: string): Extract<CPSlide, { kind: T }> {
  const found = cpDeck.find((slide) => slide.kind === kind && ("title" in slide ? slide.title === title : false));
  if (!found || found.kind !== kind) throw new Error(`Missing source slide: ${title}`);
  return found as Extract<CPSlide, { kind: T }>;
}

function footer(slide: PptxGenJS.Slide, page: string, dark = false) {
  const color = dark ? "BFD9C9" : C.muted;
  slide.addText("RA+  /  CREATIVE EDITABLE STUDY", {
    x: 0.58, y: 7.14, w: 4.2, h: 0.16, fontFace: BODY, fontSize: 6.5,
    bold: true, color, charSpacing: 1.3, margin: 0,
  });
  slide.addText(page, {
    x: 12.15, y: 7.1, w: 0.58, h: 0.2, fontFace: BODY, fontSize: 7.5,
    bold: true, color: dark ? C.green : C.deep, align: "right", margin: 0,
  });
}

function label(slide: PptxGenJS.Slide, text: string, x: number, y: number, color = C.deep, dark = false) {
  slide.addShape("line", { x, y: y + 0.1, w: 0.28, h: 0, line: { color: dark ? C.green : color, width: 1.1 } });
  slide.addText(text.toUpperCase(), {
    x: x + 0.4, y, w: 4.5, h: 0.22, fontFace: BODY, fontSize: 7.5, bold: true,
    color: dark ? "BFD9C9" : C.muted, charSpacing: 1.8, margin: 0,
  });
}

function addThesisSlide() {
  const s = cpDeck.find((slide) => slide.kind === "hero" && slide.titleDark === "One platform.");
  if (!s || s.kind !== "hero") throw new Error("Missing hero source slide");
  const slide = pptx.addSlide();
  slide.background = { color: C.white };
  slide.addShape("rect", { x: 8.95, y: 0, w: W - 8.95, h: H, fill: { color: C.deep }, line: { color: C.deep } });
  slide.addShape("rect", { x: 8.95, y: 0, w: 0.13, h: H, fill: { color: C.green }, line: { color: C.green } });
  label(slide, s.badge, 0.7, 0.6);
  slide.addText("ONE", {
    x: 0.62, y: 1.12, w: 3.4, h: 1.35, fontFace: HEAD, fontSize: 78, bold: true,
    color: C.deep, margin: 0, breakLine: false, fit: "shrink",
  });
  slide.addText("platform.", {
    x: 3.53, y: 1.63, w: 4.9, h: 0.85, fontFace: HEAD, fontSize: 41, bold: true,
    color: C.graphite, margin: 0, fit: "shrink",
  });
  slide.addText(s.titleGreen, {
    x: 0.7, y: 2.75, w: 7.6, h: 1.12, fontFace: HEAD, fontSize: 35, bold: true,
    color: C.green, margin: 0, fit: "shrink",
  });
  slide.addShape("line", { x: 0.7, y: 4.12, w: 7.38, h: 0, line: { color: C.line, width: 0.8 } });
  slide.addText(s.body, {
    x: 0.7, y: 4.42, w: 7.1, h: 1.08, fontFace: BODY, fontSize: 14.5,
    color: C.ink, margin: 0, breakLine: false, valign: "top", fit: "shrink", lineSpacingMultiple: 1.12,
  });
  slide.addText(s.tagline, {
    x: 9.42, y: 1.05, w: 3.0, h: 1.55, fontFace: HEAD, fontSize: 26, bold: true,
    color: C.white, margin: 0, fit: "shrink", valign: "middle",
  });
  s.chips.forEach((chip, i) => {
    const y = 3.37 + i * 0.74;
    slide.addText(`0${i + 1}`, { x: 9.42, y, w: 0.42, h: 0.3, fontFace: BODY, fontSize: 8, bold: true, color: C.green, margin: 0, valign: "middle" });
    slide.addShape("line", { x: 9.92, y: y + 0.15, w: 0.48, h: 0, line: { color: C.green, transparency: 48, width: 0.8 } });
    slide.addText(chip, { x: 10.58, y: y - 0.02, w: 1.9, h: 0.36, fontFace: HEAD, fontSize: 15, bold: true, color: C.lime, margin: 0, valign: "middle" });
  });
  slide.addText("RA+", { x: 9.42, y: 6.18, w: 2.8, h: 0.55, fontFace: HEAD, fontSize: 28, bold: true, color: C.green, margin: 0 });
  footer(slide, "01");
}

function addArchitectureSlide() {
  const s = cpDeck.find((slide) => slide.kind === "familymap" && slide.eyebrow === "Platform architecture");
  if (!s || s.kind !== "familymap") throw new Error("Missing platform architecture source slide");
  const slide = pptx.addSlide();
  slide.background = { color: C.forest };
  for (let x = 0.62; x < W; x += 0.44) slide.addShape("line", { x, y: 0.36, w: 0, h: 6.55, line: { color: "2A5A43", transparency: 72, width: 0.35 } });
  for (let y = 0.36; y < 6.95; y += 0.44) slide.addShape("line", { x: 0.62, y, w: 12.1, h: 0, line: { color: "2A5A43", transparency: 72, width: 0.35 } });
  label(slide, s.eyebrow, 0.7, 0.46, C.green, true);
  slide.addText([
    { text: `${s.titleLead} `, options: { color: C.white } },
    { text: `${s.titleHighlight} `, options: { color: C.lime } },
    { text: s.titleRest, options: { color: C.white } },
  ], { x: 0.7, y: 0.92, w: 11.9, h: 0.7, fontFace: HEAD, fontSize: 27, bold: true, margin: 0, fit: "shrink" });
  const zoneY = 2.0;
  const zoneW = [4.55, 4.55, 2.45];
  const zoneX = [0.7, 5.48, 10.26];
  s.families.forEach((family, i) => {
    const x = zoneX[i];
    const w = zoneW[i];
    const color = i === 0 ? C.green : i === 1 ? C.lime : "7CC4A2";
    slide.addShape("rect", { x, y: zoneY, w, h: 2.95, fill: { color: C.forest, transparency: 100 }, line: { color, transparency: 18, width: i === 0 ? 1.35 : 0.8, dash: i === 2 ? "dash" : "solid" } });
    slide.addText(`ZONE 0${i + 1}`, { x: x + 0.2, y: zoneY + 0.18, w: 1.0, h: 0.2, fontFace: BODY, fontSize: 7, bold: true, color, charSpacing: 1.2, margin: 0 });
    slide.addText(family.label.toUpperCase(), { x: x + 0.2, y: zoneY + 0.55, w: w - 0.4, h: 0.35, fontFace: HEAD, fontSize: 17, bold: true, color: C.white, margin: 0, fit: "shrink" });
    (family.products ?? []).forEach((product, j) => {
      const py = zoneY + 1.18 + j * 0.38;
      slide.addShape("rect", { x: x + 0.2, y: py + 0.08, w: 0.07, h: 0.07, fill: { color }, line: { color } });
      slide.addText(product, { x: x + 0.4, y: py, w: w - 0.6, h: 0.24, fontFace: BODY, fontSize: 9.2, color: "DDEBE3", margin: 0, fit: "shrink" });
    });
  });
  slide.addShape("rect", { x: 0.7, y: 5.28, w: 12.0, h: 1.27, fill: { color: "0B4A2E" }, line: { color: C.green, width: 1.25 } });
  slide.addText("SHARED PLATFORM FOUNDATION", { x: 0.94, y: 5.5, w: 2.45, h: 0.22, fontFace: BODY, fontSize: 8, bold: true, color: C.lime, charSpacing: 1.3, margin: 0 });
  const caps = s.sharedCapabilities ?? [];
  caps.forEach((cap, i) => {
    const col = i % 5;
    const row = Math.floor(i / 5);
    const x = 3.55 + col * 1.78;
    const y = 5.43 + row * 0.48;
    slide.addShape("roundRect", { x, y, w: 1.56, h: 0.31, fill: { color: C.deep }, line: { color: C.green, transparency: 52, width: 0.55 }, rectRadius: 0.04 });
    slide.addText(cap, { x: x + 0.08, y, w: 1.4, h: 0.31, fontFace: BODY, fontSize: 6.9, bold: true, color: C.white, align: "center", valign: "middle", margin: 0, fit: "shrink" });
  });
  slide.addText(`${s.brandLead} ${s.brandStrong}`, { x: 9.55, y: 6.72, w: 3.15, h: 0.25, fontFace: HEAD, fontSize: 11, bold: true, color: C.white, align: "right", margin: 0 });
  footer(slide, "02", true);
}

function addRoadmapSlide() {
  const s: Extract<CPSlide, { kind: "timeline" }> = {
    kind: "timeline",
    eyebrow: "Visual roadmap",
    title: "One platform, three years of compounding value",
    subtitle: "High level shape of the strategy. Dates are firm through 2026, directional beyond.",
    years: ["2026", "2027", "2028"],
    groups: [
      {
        label: "Core platform", tone: "primary", rows: [
          { title: "Shared hierarchy and factors", start: 2, end: 5, ga: 5, continuous: true },
          { title: "Ingestion and data quality", start: 3, end: 7, mvp: 4, continuous: true },
          { title: "Lineage, evidence and audit trail", start: 5, end: 9, continuous: true },
          { title: "Enterprise scale and AI services", start: 8, continuous: true },
        ],
      },
      {
        label: "Sustainability products", tone: "accent", rows: [
          { title: "Carbon Performance inventory", start: 2, end: 6, mvp: 3, ga: 6, continuous: true },
          { title: "Supply chain and PCF", start: 3, end: 8, ga: 8, continuous: true },
          { title: "Configure, collect, disclose", start: 3, end: 7, mvp: 5, continuous: true },
          { title: "Climate risk to value at risk", start: 4, end: 9, mvp: 6, continuous: true },
        ],
      },
      {
        label: "Convergence", tone: "warn", rows: [
          { title: "Plan to execution", start: 5, end: 9, continuous: true },
          { title: "Energy and carbon converged", start: 7, end: 11, continuous: true },
          { title: "Autonomous decision support", start: 9, continuous: true },
        ],
      },
    ],
  };
  const slide = pptx.addSlide();
  slide.background = { color: C.white };
  label(slide, s.eyebrow, 0.65, 0.42);
  slide.addText(s.title, { x: 0.65, y: 0.82, w: 8.8, h: 0.58, fontFace: HEAD, fontSize: 27, bold: true, color: C.graphite, margin: 0, fit: "shrink" });
  slide.addText(s.subtitle, { x: 0.65, y: 1.46, w: 8.6, h: 0.34, fontFace: BODY, fontSize: 10.5, color: C.muted, margin: 0, fit: "shrink" });
  slide.addText("COMPOUND", { x: 9.45, y: 0.58, w: 3.2, h: 0.72, fontFace: HEAD, fontSize: 31, bold: true, color: C.pale, align: "right", margin: 0 });
  const x0 = 3.04;
  const chartW = 9.61;
  const unit = chartW / 12;
  s.years.forEach((year, i) => {
    const x = x0 + i * 4 * unit;
    slide.addText(year, { x, y: 1.95, w: 4 * unit, h: 0.28, fontFace: HEAD, fontSize: 12, bold: true, color: i === 0 ? C.deep : C.muted, margin: 0 });
    slide.addShape("line", { x, y: 2.31, w: 4 * unit, h: 0, line: { color: i === 0 ? C.green : C.line, width: i === 0 ? 1.3 : 0.7 } });
  });
  for (let q = 0; q <= 12; q++) {
    const x = x0 + q * unit;
    slide.addShape("line", { x, y: 2.38, w: 0, h: 3.9, line: { color: C.line, transparency: q % 4 === 0 ? 12 : 58, width: q % 4 === 0 ? 0.7 : 0.35 } });
  }
  let y = 2.48;
  s.groups.forEach((group, gi) => {
    const gc = group.tone === "warn" ? C.amber : group.tone === "accent" ? C.deep : C.green;
    slide.addText(group.label.toUpperCase(), { x: 0.65, y, w: 2.05, h: 0.24, fontFace: BODY, fontSize: 7.2, bold: true, color: gc, charSpacing: 1, margin: 0, fit: "shrink" });
    slide.addShape("line", { x: 0.65, y: y + 0.25, w: 11.98, h: 0, line: { color: C.line, transparency: 35, width: 0.5 } });
    y += 0.31;
    group.rows.forEach((row) => {
      slide.addText(row.title, { x: 0.65, y, w: 2.16, h: 0.22, fontFace: BODY, fontSize: 7.7, color: C.ink, margin: 0, fit: "shrink", valign: "middle" });
      const startX = x0 + row.start * unit;
      const end = row.end ?? 12;
      const barW = Math.max(0.26, (end - row.start) * unit);
      slide.addShape("roundRect", { x: startX, y: y + 0.035, w: barW, h: 0.15, fill: { color: gc, transparency: gi === 0 ? 0 : 12 }, line: { color: gc, transparency: 100 }, rectRadius: 0.075 });
      if (row.continuous) slide.addShape("chevron", { x: startX + barW - 0.1, y: y + 0.035, w: 0.16, h: 0.15, fill: { color: gc }, line: { color: gc } });
      if (row.mvp !== undefined) {
        const mx = x0 + row.mvp * unit;
        slide.addShape("ellipse", { x: mx - 0.05, y: y + 0.06, w: 0.1, h: 0.1, fill: { color: C.white }, line: { color: C.deep, width: 1 } });
      }
      if (row.ga !== undefined) {
        const gx = x0 + row.ga * unit;
        slide.addShape("ellipse", { x: gx - 0.06, y: y + 0.05, w: 0.12, h: 0.12, fill: { color: C.deep }, line: { color: C.white, width: 0.8 } });
      }
      y += 0.245;
    });
    y += 0.07;
  });
  slide.addShape("roundRect", { x: 9.55, y: 1.42, w: 3.1, h: 0.38, fill: { color: C.deep }, line: { color: C.deep }, rectRadius: 0.08 });
  slide.addText("2026 COMMITTED  /  2027+ DIRECTIONAL", { x: 9.67, y: 1.42, w: 2.86, h: 0.38, fontFace: BODY, fontSize: 7.2, bold: true, color: C.lime, align: "center", valign: "middle", margin: 0 });
  footer(slide, "03");
}

function addDecisionSlide() {
  const s = getSlide("columns", "Six decisions create one shared certainty contract");
  const slide = pptx.addSlide();
  slide.background = { color: C.graphite };
  slide.addShape("rect", { x: 0, y: 0, w: 4.05, h: H, fill: { color: C.deep }, line: { color: C.deep } });
  slide.addShape("rect", { x: 3.92, y: 0, w: 0.13, h: H, fill: { color: C.green }, line: { color: C.green } });
  label(slide, s.eyebrow, 0.62, 0.55, C.green, true);
  slide.addText("06", { x: 0.55, y: 1.02, w: 2.7, h: 1.6, fontFace: HEAD, fontSize: 95, bold: true, color: C.green, transparency: 12, margin: 0 });
  slide.addText("DECISIONS", { x: 0.62, y: 2.54, w: 2.95, h: 0.48, fontFace: BODY, fontSize: 13, bold: true, color: C.lime, charSpacing: 2.7, margin: 0 });
  slide.addText("ONE SHARED\nCERTAINTY\nCONTRACT", { x: 0.62, y: 3.16, w: 2.9, h: 2.0, fontFace: HEAD, fontSize: 28, bold: true, color: C.white, margin: 0, breakLine: false, fit: "shrink", valign: "top" });
  slide.addText(s.subtitle, { x: 0.62, y: 5.54, w: 2.88, h: 0.72, fontFace: BODY, fontSize: 10.5, color: "BFD9C9", margin: 0, fit: "shrink" });
  const starts = [4.65, 7.48, 10.31];
  s.columns.forEach((column, i) => {
    const x = starts[i];
    const color = i === 1 ? C.amber : i === 2 ? C.lime : C.green;
    slide.addText(`0${i + 1}`, { x, y: 0.76, w: 0.55, h: 0.42, fontFace: HEAD, fontSize: 18, bold: true, color, margin: 0 });
    slide.addShape("line", { x, y: 1.32, w: 2.15, h: 0, line: { color, width: 1.1 } });
    slide.addText(column.label.toUpperCase(), { x, y: 1.58, w: 2.15, h: 0.34, fontFace: BODY, fontSize: 7.5, bold: true, color, charSpacing: 1.2, margin: 0, fit: "shrink" });
    slide.addText(column.title, { x, y: 2.1, w: 2.18, h: 0.82, fontFace: HEAD, fontSize: 17.5, bold: true, color: C.white, margin: 0, fit: "shrink", valign: "top" });
    slide.addText(column.line ?? "", { x, y: 3.08, w: 2.18, h: 0.86, fontFace: BODY, fontSize: 10, color: "C9CECB", margin: 0, fit: "shrink", valign: "top" });
    column.items.forEach((item, j) => {
      const iy = 4.28 + j * 0.72;
      slide.addShape("rect", { x, y: iy + 0.08, w: 0.08, h: 0.08, fill: { color }, line: { color } });
      slide.addText(item, { x: x + 0.22, y: iy, w: 1.96, h: 0.46, fontFace: BODY, fontSize: 9.2, bold: true, color: C.white, margin: 0, fit: "shrink", valign: "top" });
    });
  });
  slide.addShape("roundRect", { x: 4.65, y: 6.2, w: 7.84, h: 0.55, fill: { color: C.green }, line: { color: C.green }, rectRadius: 0.06 });
  slide.addText(s.note ?? "", { x: 4.92, y: 6.2, w: 7.3, h: 0.55, fontFace: HEAD, fontSize: 13, bold: true, color: C.deep, align: "center", valign: "middle", margin: 0, fit: "shrink" });
  footer(slide, "04", true);
}

addThesisSlide();
addArchitectureSlide();
addRoadmapSlide();
addDecisionSlide();

const raw = (await pptx.write({ outputType: "arraybuffer" })) as ArrayBuffer;
const bytes = await patchPptxCompatibility(raw);
writeFileSync(OUT, bytes);
console.log(`Generated ${OUT} with 4 editable slides`);