import { mkdirSync, writeFileSync } from "node:fs";
import PptxGenJS from "pptxgenjs";
import { cpDeck, CPSlide } from "../src/data/cp-roadmap-deck";
import { patchPptxCompatibility } from "../src/lib/pptx-export";

const OUT_DIR = process.argv[2] ?? "/mnt/documents";
const W = 13.333;
const H = 7.5;
const HEAD = "Inter";
const BODY = "Inter";

type Theme = {
  id: "signal" | "editorial" | "night";
  name: string;
  file: string;
  bg: string;
  paper: string;
  ink: string;
  muted: string;
  primary: string;
  deep: string;
  accent: string;
  line: string;
};

const themes: Theme[] = [
  { id: "signal", name: "SIGNAL FIELD", file: "RA-Plus-Creative-Direction-Signal-Field.pptx", bg: "ECFF62", paper: "F8FFE0", ink: "11281B", muted: "496052", primary: "00A63D", deep: "003D26", accent: "FF704D", line: "A8C861" },
  { id: "editorial", name: "EDITORIAL PRECISION", file: "RA-Plus-Creative-Direction-Editorial-Precision.pptx", bg: "F4F2EC", paper: "FFFFFF", ink: "181A18", muted: "686A66", primary: "3DCD58", deep: "005730", accent: "FFB04C", line: "C9CBC6" },
  { id: "night", name: "NIGHT OPERATIONS", file: "RA-Plus-Creative-Direction-Night-Operations.pptx", bg: "101613", paper: "19211D", ink: "F4F7F4", muted: "A5B0A9", primary: "45EA6A", deep: "005730", accent: "FFC15B", line: "33443A" },
];

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

function addText(slide: PptxGenJS.Slide, text: string, x: number, y: number, w: number, h: number, size: number, color: string, bold = false, align: "left" | "center" | "right" = "left") {
  slide.addText(text, { x, y, w, h, fontFace: bold ? HEAD : BODY, fontSize: size, bold, color, align, margin: 0, fit: "shrink", valign: "mid" });
}

function footer(slide: PptxGenJS.Slide, t: Theme, page: string) {
  addText(slide, `RA+  /  ${t.name}`, 0.55, 7.12, 5.2, 0.17, 6.5, t.muted, true);
  addText(slide, page, 12.2, 7.08, 0.55, 0.2, 7.5, t.primary, true, "right");
}

function eyebrow(slide: PptxGenJS.Slide, t: Theme, text: string, x = 0.62, y = 0.5) {
  if (t.id === "signal") {
    slide.addShape("rect", { x, y, w: 0.18, h: 0.22, fill: { color: t.deep }, line: { color: t.deep } });
    addText(slide, text.toUpperCase(), x + 0.33, y, 4.8, 0.22, 7.5, t.deep, true);
  } else if (t.id === "editorial") {
    addText(slide, text.toUpperCase(), x, y, 4.8, 0.22, 7, t.muted, true);
    slide.addShape("line", { x: x + 4.95, y: y + 0.1, w: 1.65, h: 0, line: { color: t.primary, width: 1.2 } });
  } else {
    slide.addShape("ellipse", { x, y: y + 0.04, w: 0.12, h: 0.12, fill: { color: t.primary }, line: { color: t.primary } });
    addText(slide, text.toUpperCase(), x + 0.3, y, 4.8, 0.22, 7.2, t.muted, true);
  }
}

function addThesis(pptx: PptxGenJS, t: Theme) {
  const s = heroSource();
  const slide = pptx.addSlide();
  slide.background = { color: t.bg };
  if (t.id === "signal") {
    slide.addShape("rect", { x: 9.85, y: 0, w: 3.48, h: H, fill: { color: t.deep }, line: { color: t.deep } });
    for (let i = 0; i < 9; i++) slide.addShape("line", { x: 0.7 + i * 1.1, y: 0.35, w: 0, h: 6.4, line: { color: t.line, transparency: 42, width: 0.4 } });
    eyebrow(slide, t, s.badge);
    addText(slide, "ONE", 0.56, 1.08, 5.6, 1.55, 101, t.deep, true);
    addText(slide, "PLATFORM", 0.66, 2.53, 7.9, 0.72, 40, t.ink, true);
    slide.addShape("rect", { x: 0.66, y: 3.48, w: 8.2, h: 0.14, fill: { color: t.accent }, line: { color: t.accent } });
    addText(slide, s.titleGreen, 0.66, 3.83, 7.95, 1.15, 30, t.deep, true);
    addText(slide, s.tagline, 10.28, 0.72, 2.35, 1.25, 23, t.paper, true);
    s.chips.forEach((chip, i) => {
      addText(slide, `${i + 1}`.padStart(2, "0"), 10.28, 2.44 + i * 0.68, 0.4, 0.25, 7.5, t.primary, true);
      addText(slide, chip, 10.9, 2.38 + i * 0.68, 1.82, 0.38, 12, t.paper, true);
    });
  } else if (t.id === "editorial") {
    slide.addShape("rect", { x: 0, y: 0, w: 0.22, h: H, fill: { color: t.primary }, line: { color: t.primary } });
    eyebrow(slide, t, s.badge, 0.72, 0.58);
    addText(slide, "One", 0.7, 1.08, 5.2, 1.3, 78, t.ink, true);
    addText(slide, "platform.", 4.54, 1.32, 4.45, 1.0, 46, t.deep, true);
    addText(slide, s.titleGreen, 0.72, 2.72, 8.3, 1.3, 33, t.primary, true);
    addText(slide, s.body, 0.72, 4.48, 5.9, 1.0, 13, t.ink);
    slide.addShape("line", { x: 7.04, y: 0.64, w: 0, h: 5.96, line: { color: t.line, width: 0.8 } });
    addText(slide, s.tagline, 9.2, 0.84, 3.05, 1.42, 22, t.deep, true);
    s.chips.forEach((chip, i) => {
      addText(slide, `0${i + 1}`, 7.46, 2.64 + i * 0.63, 0.48, 0.24, 8, t.primary, true);
      slide.addShape("line", { x: 8.02, y: 2.75 + i * 0.63, w: 0.65, h: 0, line: { color: t.line, width: 0.7 } });
      addText(slide, chip, 8.89, 2.57 + i * 0.63, 3.25, 0.36, 13.2, t.ink, true);
    });
  } else {
    for (let r = 0; r < 5; r++) for (let c = 0; c < 8; c++) slide.addShape("ellipse", { x: 8.1 + c * 0.55, y: 0.75 + r * 0.55, w: 0.035, h: 0.035, fill: { color: t.primary, transparency: 35 + r * 8 }, line: { color: t.primary, transparency: 100 } });
    eyebrow(slide, t, s.badge);
    addText(slide, "ONE PLATFORM", 0.62, 1.16, 7.1, 0.86, 47, t.ink, true);
    addText(slide, s.titleGreen, 0.62, 2.18, 7.3, 1.24, 33, t.primary, true);
    addText(slide, s.body, 0.62, 4.04, 6.55, 0.9, 13, t.muted);
    slide.addShape("roundRect", { x: 8.1, y: 3.92, w: 4.56, h: 2.1, fill: { color: t.paper }, line: { color: t.line, width: 0.8 }, rectRadius: 0.08 });
    addText(slide, "PLATFORM SIGNALS", 8.46, 4.22, 2.2, 0.22, 7.4, t.primary, true);
    s.chips.forEach((chip, i) => addText(slide, `0${i + 1}  ${chip}`, 8.46, 4.66 + i * 0.42, 3.72, 0.27, 10.5, i === 1 ? t.accent : t.ink, true));
  }
  footer(slide, t, "01");
}

function addArchitecture(pptx: PptxGenJS, t: Theme) {
  const s = architectureSource();
  const slide = pptx.addSlide();
  slide.background = { color: t.id === "night" ? t.bg : t.paper };
  eyebrow(slide, t, s.eyebrow);
  addText(slide, `${s.titleLead} ${s.titleHighlight} ${s.titleRest}`, 0.62, 0.88, 11.8, 0.65, 27, t.ink, true);
  if (t.id === "signal") {
    const ys = [1.92, 3.12, 4.32];
    s.families.forEach((family, i) => {
      const h = i === 1 ? 1.0 : 0.86;
      slide.addShape("rect", { x: 0.62, y: ys[i], w: 8.2 + i * 1.15, h, fill: { color: i === 0 ? t.deep : i === 1 ? t.primary : t.accent }, line: { color: t.ink, transparency: 100 } });
      addText(slide, `0${i + 1}`, 0.9, ys[i] + 0.18, 0.55, 0.34, 14, i === 0 ? t.primary : t.deep, true);
      addText(slide, family.label, 1.68, ys[i] + 0.13, 2.25, 0.42, 17, i === 0 ? t.paper : t.deep, true);
      addText(slide, (family.products ?? []).join("  /  "), 4.22, ys[i] + 0.18, 5.2, 0.32, 9, i === 0 ? t.paper : t.deep, true);
    });
    slide.addShape("rect", { x: 9.85, y: 1.92, w: 2.83, h: 3.92, fill: { color: t.bg }, line: { color: t.deep, width: 1.1 } });
    addText(slide, "SHARED\nCAPABILITY\nFIELD", 10.2, 2.23, 2.18, 1.25, 21, t.deep, true);
    (s.sharedCapabilities ?? []).forEach((cap, i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      addText(slide, `+ ${cap}`, 10.16 + col * 1.18, 3.82 + row * 0.38, 1.08, 0.26, 6.4, t.ink, true);
    });
  } else if (t.id === "editorial") {
    const xs = [0.62, 4.66, 8.7];
    s.families.forEach((family, i) => {
      addText(slide, `${i + 1}`.padStart(2, "0"), xs[i], 1.88, 0.7, 0.52, 24, i === 1 ? t.primary : t.line, true);
      slide.addShape("line", { x: xs[i], y: 2.57, w: 3.45, h: 0, line: { color: i === 1 ? t.primary : t.line, width: i === 1 ? 1.6 : 0.8 } });
      addText(slide, family.label, xs[i], 2.82, 3.4, 0.55, 19, t.ink, true);
      (family.products ?? []).forEach((product, j) => addText(slide, product, xs[i], 3.66 + j * 0.44, 3.34, 0.27, 9.7, t.muted));
    });
    slide.addShape("rect", { x: 0.62, y: 5.44, w: 11.58, h: 0.86, fill: { color: t.deep }, line: { color: t.deep } });
    addText(slide, "SHARED PLATFORM FOUNDATION", 0.92, 5.7, 2.45, 0.28, 9, t.primary, true);
    addText(slide, (s.sharedCapabilities ?? []).join("  ·  "), 3.52, 5.64, 8.25, 0.4, 8.3, t.paper, true);
  } else {
    const centers = [[2.35, 3.2], [6.66, 3.2], [10.92, 3.2]];
    centers.forEach(([x, y], i) => {
      slide.addShape("ellipse", { x: x - 1.38, y: y - 1.38, w: 2.76, h: 2.76, fill: { color: t.paper, transparency: 18 }, line: { color: i === 1 ? t.primary : t.line, width: i === 1 ? 1.6 : 0.8 } });
      addText(slide, `0${i + 1}`, x - 0.22, y - 0.93, 0.44, 0.28, 10, i === 2 ? t.accent : t.primary, true, "center");
      addText(slide, s.families[i].label, x - 1.02, y - 0.42, 2.04, 0.72, 16, t.ink, true, "center");
      addText(slide, (s.families[i].products ?? []).join("\n"), x - 0.94, y + 0.42, 1.88, 0.75, 8.3, t.muted, false, "center");
    });
    slide.addShape("line", { x: 2.35, y: 4.58, w: 8.57, h: 0, line: { color: t.primary, transparency: 30, width: 1.2 } });
    slide.addShape("roundRect", { x: 2.0, y: 5.16, w: 9.32, h: 0.9, fill: { color: t.deep }, line: { color: t.primary, width: 1 }, rectRadius: 0.08 });
    addText(slide, "SHARED PLATFORM FOUNDATION", 2.28, 5.42, 2.5, 0.28, 8.5, t.primary, true);
    addText(slide, (s.sharedCapabilities ?? []).join("  /  "), 4.8, 5.34, 6.12, 0.42, 8, t.ink, true);
  }
  footer(slide, t, "02");
}

function addRoadmap(pptx: PptxGenJS, t: Theme) {
  const slide = pptx.addSlide();
  slide.background = { color: t.id === "night" ? t.bg : t.paper };
  eyebrow(slide, t, "Visual roadmap");
  addText(slide, "One platform, three years of compounding value", 0.62, 0.86, 9.7, 0.64, 27, t.ink, true);
  const lanes = [
    ["CORE PLATFORM", "Hierarchy + factors", "Data quality", "Audit trail", "AI services"],
    ["SUSTAINABILITY", "Carbon Performance", "Supply chain + PCF", "Configure + disclose", "Climate risk"],
    ["CONVERGENCE", "Plan to execution", "Energy + carbon", "Decision support"],
  ];
  if (t.id === "signal") {
    ["2026", "2027", "2028"].forEach((year, i) => addText(slide, year, 4.1 + i * 2.76, 1.76, 2.3, 0.46, 17, i === 0 ? t.deep : t.muted, true));
    lanes.forEach((lane, i) => {
      const y = 2.48 + i * 1.33;
      addText(slide, lane[0], 0.62, y, 2.55, 0.3, 8, i === 2 ? t.accent : t.deep, true);
      lane.slice(1).forEach((item, j) => {
        const x = 3.12 + (j % 3) * 2.72 + i * 0.34;
        const iy = y + 0.04 + Math.floor(j / 3) * 0.44;
        slide.addShape("roundRect", { x, y: iy, w: 2.28, h: 0.31, fill: { color: i === 0 ? t.deep : i === 1 ? t.primary : t.accent }, line: { color: t.ink, transparency: 100 }, rectRadius: 0.04 });
        addText(slide, item, x + 0.12, iy, 2.04, 0.31, 8.2, i === 0 ? t.paper : t.deep, true);
      });
      slide.addShape("line", { x: 0.62, y: y + 1.02, w: 11.9, h: 0, line: { color: t.line, width: 0.7 } });
    });
  } else if (t.id === "editorial") {
    ["2026", "2027", "2028"].forEach((year, i) => {
      addText(slide, year, 3.12 + i * 3.15, 1.76, 2.6, 0.55, 22, i === 0 ? t.primary : t.ink, true);
      slide.addShape("line", { x: 3.12 + i * 3.15, y: 2.43, w: 2.62, h: 0, line: { color: i === 0 ? t.primary : t.line, width: i === 0 ? 1.5 : 0.7 } });
    });
    lanes.forEach((lane, i) => {
      const y = 2.7 + i * 1.16;
      addText(slide, lane[0], 0.62, y, 2.15, 0.31, 7.5, t.muted, true);
      lane.slice(1).forEach((item, j) => {
        const x = 3.12 + j * 2.0 + i * 0.48;
        slide.addShape("line", { x, y: y + 0.16, w: 1.64, h: 0, line: { color: i === 2 ? t.accent : t.primary, width: 3.5, beginArrowType: "none", endArrowType: "triangle" } });
        addText(slide, item, x, y + 0.33, 1.78, 0.4, 8.2, t.ink, true);
      });
    });
    addText(slide, "COMPOUND", 8.88, 5.95, 3.35, 0.48, 24, t.line, true, "right");
  } else {
    for (let q = 0; q <= 12; q++) slide.addShape("line", { x: 3.18 + q * 0.75, y: 1.86, w: 0, h: 4.46, line: { color: t.line, transparency: q % 4 === 0 ? 5 : 52, width: q % 4 === 0 ? 0.8 : 0.35 } });
    ["2026", "2027", "2028"].forEach((year, i) => addText(slide, year, 3.18 + i * 3.0, 1.62, 2.5, 0.3, 11, i === 0 ? t.primary : t.muted, true));
    lanes.forEach((lane, i) => {
      const y = 2.25 + i * 1.36;
      addText(slide, lane[0], 0.62, y, 2.1, 0.28, 7.6, i === 2 ? t.accent : t.primary, true);
      lane.slice(1).forEach((item, j) => {
        const x = 3.18 + (j + i) * 1.48;
        slide.addShape("roundRect", { x, y: y + 0.08 + j * 0.18, w: 2.1, h: 0.19, fill: { color: i === 2 ? t.accent : t.primary, transparency: 5 + j * 8 }, line: { color: t.primary, transparency: 100 }, rectRadius: 0.05 });
        addText(slide, item, x, y + 0.35 + j * 0.18, 2.1, 0.24, 7.8, t.ink, true);
      });
    });
  }
  footer(slide, t, "03");
}

function addDecision(pptx: PptxGenJS, t: Theme) {
  const s = decisionSource();
  const slide = pptx.addSlide();
  slide.background = { color: t.id === "editorial" ? t.paper : t.bg };
  eyebrow(slide, t, s.eyebrow);
  if (t.id === "signal") {
    addText(slide, "06", 0.48, 0.98, 3.0, 1.5, 92, t.deep, true);
    addText(slide, "DECISIONS", 0.65, 2.44, 3.0, 0.42, 13, t.accent, true);
    addText(slide, "ONE SHARED\nCERTAINTY\nCONTRACT", 0.65, 3.06, 3.1, 1.75, 27, t.deep, true);
    s.columns.forEach((column, i) => {
      const x = 4.38 + i * 2.78;
      slide.addShape("rect", { x, y: 1.02, w: 2.38, h: 4.94, fill: { color: i === 1 ? t.deep : t.paper }, line: { color: t.deep, width: 0.9 } });
      slide.addShape("rect", { x, y: 1.02, w: 2.38, h: 0.14, fill: { color: i === 2 ? t.accent : t.primary }, line: { color: i === 2 ? t.accent : t.primary } });
      addText(slide, `0${i + 1}`, x + 0.22, 1.42, 0.45, 0.3, 12, i === 1 ? t.primary : t.deep, true);
      addText(slide, column.title, x + 0.22, 2.02, 1.94, 0.82, 16, i === 1 ? t.paper : t.deep, true);
      column.items.forEach((item, j) => addText(slide, `+ ${item}`, x + 0.22, 3.28 + j * 0.67, 1.92, 0.42, 8.6, i === 1 ? t.paper : t.ink, true));
    });
  } else if (t.id === "editorial") {
    addText(slide, "Six decisions create", 0.62, 0.98, 8.9, 0.72, 35, t.ink, true);
    addText(slide, "one shared certainty contract", 0.62, 1.72, 10.5, 0.72, 35, t.primary, true);
    s.columns.forEach((column, i) => {
      const x = 0.62 + i * 4.05;
      slide.addShape("line", { x, y: 3.08, w: 3.55, h: 0, line: { color: i === 1 ? t.primary : t.line, width: i === 1 ? 1.6 : 0.8 } });
      addText(slide, `0${i + 1}`, x, 3.34, 0.5, 0.35, 15, i === 2 ? t.accent : t.primary, true);
      addText(slide, column.title, x + 0.76, 3.28, 2.78, 0.62, 17, t.ink, true);
      addText(slide, column.line ?? "", x + 0.76, 4.04, 2.72, 0.62, 9.6, t.muted);
      addText(slide, column.items.join("\n"), x + 0.76, 4.87, 2.72, 1.02, 9, t.ink, true);
    });
  } else {
    slide.addShape("ellipse", { x: 0.62, y: 1.2, w: 3.25, h: 3.25, fill: { color: t.paper }, line: { color: t.primary, width: 1.3 } });
    addText(slide, "06", 1.22, 1.68, 2.0, 1.15, 66, t.primary, true, "center");
    addText(slide, "DECISIONS", 1.22, 3.05, 2.0, 0.28, 9, t.accent, true, "center");
    addText(slide, "ONE CONTRACT", 1.02, 3.47, 2.4, 0.38, 14, t.ink, true, "center");
    s.columns.forEach((column, i) => {
      const y = 1.18 + i * 1.72;
      slide.addShape("roundRect", { x: 4.5, y, w: 8.14, h: 1.32, fill: { color: t.paper }, line: { color: i === 1 ? t.accent : t.line, width: i === 1 ? 1.1 : 0.7 }, rectRadius: 0.06 });
      addText(slide, `0${i + 1}`, 4.8, y + 0.25, 0.48, 0.28, 11, i === 1 ? t.accent : t.primary, true);
      addText(slide, column.title, 5.5, y + 0.19, 2.95, 0.44, 15, t.ink, true);
      addText(slide, column.items.join("  /  "), 8.62, y + 0.18, 3.52, 0.62, 8.6, t.muted, true);
    });
    addText(slide, s.note ?? "", 4.5, 6.45, 8.12, 0.32, 9.5, t.primary, true, "right");
  }
  footer(slide, t, "04");
}

async function build(t: Theme) {
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_WIDE";
  pptx.author = "Schneider Electric, Sustainability Business";
  pptx.subject = `${t.name} editable design direction`;
  pptx.title = `RA+ ${t.name}`;
  pptx.company = "Schneider Electric";
  pptx.lang = "en-US";
  addThesis(pptx, t);
  addArchitecture(pptx, t);
  addRoadmap(pptx, t);
  addDecision(pptx, t);
  const raw = (await pptx.write({ outputType: "arraybuffer" })) as ArrayBuffer;
  const bytes = await patchPptxCompatibility(raw);
  const path = `${OUT_DIR}/${t.file}`;
  writeFileSync(path, bytes);
  console.log(`Generated ${path} with 4 editable slides`);
}

mkdirSync(OUT_DIR, { recursive: true });
for (const theme of themes) await build(theme);
