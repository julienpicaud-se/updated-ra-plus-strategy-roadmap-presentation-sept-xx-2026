import { mkdirSync, writeFileSync } from "node:fs";
import PptxGenJS from "pptxgenjs";
import { cpDeck } from "../src/data/cp-roadmap-deck";
import { patchPptxCompatibility } from "../src/lib/pptx-export";

const OUT_DIR = process.argv[2] ?? "/mnt/documents";
const W = 13.333;
const H = 7.5;
const FONT = "Inter";

const C = {
  canvas: "F7F9F7",
  white: "FFFFFF",
  ink: "17251E",
  muted: "536057",
  deep: "143F30",
  green: "008F45",
  bright: "3DCD58",
  orange: "F47B20",
  border: "D4DDD7",
  pale: "E8F3EC",
  peach: "FDF0E7",
};

function heroSource() {
  const found = cpDeck.find((slide) => slide.kind === "hero" && slide.titleDark === "One platform.");
  if (!found || found.kind !== "hero") throw new Error("Missing hero source slide");
  return found;
}

function architectureSource() {
  const found = cpDeck.find((slide) => slide.kind === "familymap" && slide.eyebrow === "Platform architecture");
  if (!found || found.kind !== "familymap") throw new Error("Missing architecture source slide");
  return found;
}

function decisionSource() {
  const found = cpDeck.find((slide) => slide.kind === "columns" && slide.title === "Six decisions create one shared certainty contract");
  if (!found || found.kind !== "columns") throw new Error("Missing decision source slide");
  return found;
}

function text(
  slide: PptxGenJS.Slide,
  value: string,
  x: number,
  y: number,
  w: number,
  h: number,
  fontSize: number,
  color = C.ink,
  bold = false,
  align: "left" | "center" | "right" = "left",
  valign: "top" | "mid" | "bottom" = "mid",
) {
  slide.addText(value, {
    x,
    y,
    w,
    h,
    fontFace: FONT,
    fontSize,
    color,
    bold,
    align,
    valign,
    margin: 0,
    fit: "shrink",
    breakLine: false,
  });
}

function addHeader(slide: PptxGenJS.Slide, eyebrow: string, title: string, subtitle?: string) {
  slide.background = { color: C.canvas };
  slide.addShape("rect", { x: 0, y: 0, w: W, h: 0.07, fill: { color: C.green }, line: { color: C.green } });
  text(slide, "SUSTAINABILITY BUSINESS  |  RA+ PLATFORM", 0.44, 0.17, 6.1, 0.2, 7.6, C.green, true);
  text(slide, eyebrow.toUpperCase(), 0.44, 0.49, 5.4, 0.2, 7.2, C.green, true);
  text(slide, title, 0.44, 0.73, 12.0, 0.58, 27, C.ink, true);
  if (subtitle) text(slide, subtitle, 0.44, 1.33, 12.0, 0.36, 10.6, C.muted);
}

function addFooter(slide: PptxGenJS.Slide, page: number) {
  text(slide, "RA+ strategy and roadmap | Executive working draft", 0.44, 7.2, 5.7, 0.12, 5.7, C.muted);
  text(slide, String(page), 12.62, 7.2, 0.25, 0.12, 5.7, C.muted, false, "right");
}

function card(slide: PptxGenJS.Slide, x: number, y: number, w: number, h: number, fill = C.white, border = C.border) {
  slide.addShape("roundRect", {
    x,
    y,
    w,
    h,
    fill: { color: fill },
    line: { color: border, width: 0.7 },
    rectRadius: 0.05,
  });
}

function addCover(pptx: PptxGenJS) {
  const source = heroSource();
  const slide = pptx.addSlide();
  slide.background = { color: C.deep };
  slide.addShape("rect", { x: 0.72, y: 0.54, w: 0.08, h: 6.08, fill: { color: C.orange }, line: { color: C.orange } });
  text(slide, "RA+ PLATFORM", 1.08, 1.45, 5.8, 0.28, 10, C.bright, true);
  text(slide, source.titleDark.toUpperCase(), 1.08, 1.84, 7.5, 0.68, 36, C.white, true);
  text(slide, source.titleGreen.toUpperCase(), 1.08, 2.48, 8.1, 1.08, 35, C.bright, true);
  text(slide, source.tagline, 1.08, 3.72, 7.0, 0.52, 17, C.white, true);
  text(slide, source.body, 1.08, 4.45, 6.45, 0.72, 12.2, "D9E6DE");
  text(slide, "EXECUTIVE DESIGN STUDY", 1.08, 5.72, 3.2, 0.22, 7.5, C.white, true);
  text(slide, "SUSTAINABILITY BUSINESS", 9.45, 6.61, 2.8, 0.22, 8.3, C.white, true, "right");
  slide.addShape("arc", { x: 10.65, y: 0.62, w: 1.7, h: 1.7, adjustPoint: 0.33, rotate: 12, fill: { color: C.deep, transparency: 100 }, line: { color: C.bright, transparency: 26, width: 1.4 } });
  slide.addShape("arc", { x: 10.76, y: 1.23, w: 1.25, h: 1.25, adjustPoint: 0.33, rotate: 12, fill: { color: C.deep, transparency: 100 }, line: { color: C.orange, width: 1.4 } });
}

function addAtAGlance(pptx: PptxGenJS) {
  const source = architectureSource();
  const slide = pptx.addSlide();
  addHeader(slide, source.eyebrow, "One platform at a glance", "Three product families, connected by a reusable platform foundation.");

  const productCounts = source.families.map((family) => (family.products ?? []).length + (family.subfamilies ?? []).reduce((sum, group) => sum + group.products.length, 0));
  const stats = [
    { value: "3", label: "product families", warn: false },
    { value: String(productCounts.reduce((a, b) => a + b, 0)), label: "named products", warn: false },
    { value: String(source.sharedCapabilities?.length ?? 0), label: "shared capabilities", warn: false },
    { value: "1", label: "common platform", warn: true },
  ];
  stats.forEach((stat, i) => {
    const x = 0.44 + i * 3.12;
    card(slide, x, 1.84, 2.88, 0.98, stat.warn ? C.peach : C.pale, stat.warn ? "F6B17A" : "C9DDD0");
    text(slide, stat.value, x, 2.0, 2.88, 0.38, 24, stat.warn ? C.orange : C.green, true, "center");
    text(slide, stat.label, x, 2.42, 2.88, 0.19, 7.2, C.muted, false, "center");
  });

  text(slide, "Product families", 0.44, 3.16, 5.8, 0.28, 14, C.green, true);
  const familyW = 2.4;
  source.families.forEach((family, i) => {
    const x = 0.44 + i * 2.56;
    card(slide, x, 3.53, familyW, 2.27);
    slide.addShape("rect", { x, y: 3.53, w: 0.07, h: 2.27, fill: { color: i === 1 ? C.orange : C.green }, line: { color: i === 1 ? C.orange : C.green } });
    text(slide, family.label.toUpperCase(), x + 0.24, 3.78, 1.92, 0.4, 12, i === 1 ? C.orange : C.green, true);
    const products = [
      ...(family.products ?? []),
      ...(family.subfamilies ?? []).flatMap((group) => group.products),
    ];
    products.slice(0, 5).forEach((product, j) => {
      slide.addShape("ellipse", { x: x + 0.24, y: 4.36 + j * 0.27, w: 0.09, h: 0.09, fill: { color: i === 1 ? C.orange : C.bright }, line: { color: i === 1 ? C.orange : C.bright } });
      text(slide, product, x + 0.43, 4.27 + j * 0.27, 1.68, 0.23, 7.2, C.ink);
    });
  });

  text(slide, "Shared platform foundation", 8.3, 3.16, 4.15, 0.28, 14, C.green, true);
  card(slide, 8.3, 3.53, 4.58, 2.27);
  (source.sharedCapabilities ?? []).forEach((capability, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 8.55 + col * 2.05;
    const y = 3.83 + row * 0.39;
    slide.addShape("roundRect", { x, y, w: 1.82, h: 0.29, fill: { color: i === 1 ? C.peach : C.pale }, line: { color: i === 1 ? "F5C39C" : "D5E6DA", width: 0.45 }, rectRadius: 0.04 });
    text(slide, capability, x + 0.08, y, 1.66, 0.29, 6.6, i === 1 ? C.orange : C.green, true, "center");
  });
  slide.addShape("rect", { x: 0.44, y: 6.1, w: 12.44, h: 0.56, fill: { color: C.green }, line: { color: C.green } });
  text(slide, "The opportunity is to turn distinct products and shared capabilities into one coherent client experience.", 0.72, 6.22, 11.88, 0.25, 11, C.white, true, "center");
  addFooter(slide, 2);
}

function addDecisions(pptx: PptxGenJS) {
  const source = decisionSource();
  const slide = pptx.addSlide();
  addHeader(slide, source.eyebrow, source.title, source.subtitle);
  const xs = [0.44, 4.51, 8.58];
  source.columns.forEach((column, i) => {
    const accent = i === 1 ? C.orange : C.green;
    card(slide, xs[i], 1.84, 3.75, 3.9);
    slide.addShape("rect", { x: xs[i], y: 1.84, w: 0.08, h: 3.9, fill: { color: accent }, line: { color: accent } });
    text(slide, `0${i + 1}`, xs[i] + 0.23, 2.08, 0.48, 0.26, 9.5, accent, true);
    text(slide, column.label.toUpperCase(), xs[i] + 0.23, 2.44, 3.05, 0.3, 10, accent, true);
    text(slide, column.title, xs[i] + 0.23, 2.86, 3.05, 0.67, 16.5, C.ink, true);
    if (column.line) text(slide, column.line, xs[i] + 0.23, 3.56, 3.05, 0.48, 8.6, C.muted);
    column.items.slice(0, 4).forEach((item, j) => {
      slide.addShape("ellipse", { x: xs[i] + 0.23, y: 4.15 + j * 0.35, w: 0.12, h: 0.12, fill: { color: accent }, line: { color: accent } });
      text(slide, item, xs[i] + 0.46, 4.06 + j * 0.35, 2.87, 0.27, 8.2, C.ink);
    });
    slide.addShape("roundRect", { x: xs[i] + 0.2, y: 5.16, w: 3.35, h: 0.38, fill: { color: i === 1 ? C.peach : C.pale }, line: { color: i === 1 ? C.peach : C.pale }, rectRadius: 0.04 });
    text(slide, i === 0 ? "CLARIFY" : i === 1 ? "DECIDE" : "GOVERN", xs[i] + 0.2, 5.16, 3.35, 0.38, 8.2, accent, true, "center");
  });
  slide.addShape("rect", { x: 0.44, y: 6.02, w: 12.44, h: 0.62, fill: { color: C.deep }, line: { color: C.deep } });
  text(slide, source.note ?? "One shared certainty contract connects choices, ownership and delivery.", 0.74, 6.17, 11.84, 0.26, 10.8, C.white, true, "center");
  addFooter(slide, 3);
}

function addEvolution(pptx: PptxGenJS) {
  const source = architectureSource();
  const slide = pptx.addSlide();
  addHeader(slide, "Platform evolution", "What comes next: from product families to one platform", "The next phase connects proven product depth through a common operating and capability model.");
  const stages = [
    {
      label: "TODAY",
      title: "Strong product families",
      items: source.families.map((family) => family.label),
      fill: C.white,
      line: C.border,
      accent: C.green,
      ink: C.ink,
    },
    {
      label: "NEXT WAVE",
      title: "Scale the shared foundation",
      items: (source.sharedCapabilities ?? []).slice(0, 5),
      fill: C.peach,
      line: "F3B47F",
      accent: C.orange,
      ink: C.ink,
    },
    {
      label: "END STATE",
      title: "One coherent platform",
      items: ["Connected journeys", "Reusable intelligence", "Shared governance", "Compounding value"],
      fill: C.deep,
      line: C.deep,
      accent: C.bright,
      ink: C.white,
    },
  ];
  const xs = [0.44, 4.95, 9.62];
  const widths = [3.38, 4.02, 3.26];
  stages.forEach((stage, i) => {
    card(slide, xs[i], 1.88, widths[i], 4.48, stage.fill, stage.line);
    text(slide, stage.label, xs[i] + 0.28, 2.18, widths[i] - 0.56, 0.22, 8.6, stage.accent, true);
    text(slide, stage.title, xs[i] + 0.28, 2.58, widths[i] - 0.56, 0.72, 18, stage.ink, true, i === 2 ? "center" : "left");
    stage.items.forEach((item, j) => {
      const y = 3.48 + j * 0.55;
      if (i === 0) {
        slide.addShape("roundRect", { x: xs[i] + 0.28, y, w: widths[i] - 0.56, h: 0.38, fill: { color: C.pale }, line: { color: C.pale }, rectRadius: 0.04 });
        text(slide, item, xs[i] + 0.42, y, widths[i] - 0.84, 0.38, 8.3, C.green, true, "center");
      } else {
        slide.addShape(i === 2 ? "chevron" : "ellipse", { x: xs[i] + 0.31, y: y + 0.1, w: i === 2 ? 0.12 : 0.13, h: 0.13, fill: { color: stage.accent }, line: { color: stage.accent } });
        text(slide, item, xs[i] + 0.58, y, widths[i] - 0.86, 0.34, 8.9, stage.ink, true);
      }
    });
    if (i === 1) {
      slide.addShape("roundRect", { x: xs[i] + 0.26, y: 5.67, w: widths[i] - 0.52, h: 0.42, fill: { color: "F9D3B4" }, line: { color: "F9D3B4" }, rectRadius: 0.04 });
      text(slide, "Design once  ·  Reuse  ·  Govern  ·  Scale", xs[i] + 0.26, 5.67, widths[i] - 0.52, 0.42, 8.2, C.orange, true, "center");
    }
  });
  [4.08, 8.32].forEach((x) => slide.addShape("chevron", { x, y: 3.46, w: 0.58, h: 1.22, fill: { color: C.bright }, line: { color: C.bright } }));
  slide.addShape("rect", { x: 0.44, y: 6.62, w: 12.44, h: 0.37, fill: { color: C.green }, line: { color: C.green } });
  text(slide, "The platform creates leverage by connecting what already exists, not by rebuilding from zero.", 0.72, 6.62, 11.88, 0.37, 9.5, C.white, true, "center");
  addFooter(slide, 4);
}

async function main() {
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_WIDE";
  pptx.author = "Schneider Electric, Sustainability Business";
  pptx.company = "Schneider Electric";
  pptx.subject = "Reference-led editable PowerPoint design study";
  pptx.title = "RA+ Reference-Led Executive Design";
  pptx.lang = "en-US";
  addCover(pptx);
  addAtAGlance(pptx);
  addDecisions(pptx);
  addEvolution(pptx);
  const raw = (await pptx.write({ outputType: "arraybuffer" })) as ArrayBuffer;
  const bytes = await patchPptxCompatibility(raw);
  mkdirSync(OUT_DIR, { recursive: true });
  const path = `${OUT_DIR}/RA-Plus-Creative-Direction-Executive-Energy-v1.pptx`;
  writeFileSync(path, bytes);
  console.log(`Generated ${path} with 4 editable slides`);
}

await main();