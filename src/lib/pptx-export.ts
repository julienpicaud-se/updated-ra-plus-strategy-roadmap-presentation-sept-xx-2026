import PptxGenJS from "pptxgenjs";
import { cpDeck, CPSlide } from "@/data/cp-roadmap-deck";

const C = {
  bg: "FFFFFF",
  card: "F7F8F7",
  text: "1E2420",
  muted: "5A625C",
  border: "E2E6E2",
  primary: "3DCD58",
  secondary: "005730",
  accent: "007A27",
  warn: "FFB04C",
  blue: "275B7F",
  softGreen: "EAF8ED",
  softBlue: "EAF1F5",
  softAmber: "FFF4E3",
  softGray: "F1F3F2",
  graphite: "303634",
  white: "FFFFFF",
  inkSoft: "3A423C",
};

const tone = (t?: string) =>
  t === "accent" ? C.accent : t === "warn" ? C.warn : t === "muted" ? C.blue : C.primary;

// The live deck uses Inter. PowerPoint keeps the text editable and uses Aptos
// as a predictable fallback on machines where Inter is not installed.
const HEAD = "Inter";
const BODY = "Inter";

const W = 13.333;
const M = 0.68;

/**
 * Pick the largest font size (from a preferred range) at which the given text
 * blocks still fit inside a box of w x h inches. Prevents bullet overflow.
 */
function fitFontSize(
  lines: string[],
  w: number,
  h: number,
  max = 11,
  min = 9,
  bulletIndent = 0.18,
): number {
  const usableW = Math.max(0.5, w - bulletIndent);
  for (let fs = max; fs >= min; fs -= 0.5) {
    // Calibri average glyph width ~0.48em; convert pt -> inches (1pt = 1/72in)
    const charW = (fs * 0.48) / 72;
    const lineH = (fs * 1.32) / 72;
    let total = 0;
    for (const t of lines) {
      const perLine = Math.max(1, Math.floor(usableW / charW));
      total += Math.max(1, Math.ceil(t.length / perLine));
    }
    if (total * lineH <= h) return fs;
  }
  return min;
}

function addTopRule(slide: PptxGenJS.Slide) {
  slide.addShape("rect", { x: 0, y: 0, w: W, h: 0.09, fill: { color: C.primary }, line: { color: C.primary } });
  slide.addShape("rect", { x: 0, y: 0.09, w: W, h: 0.015, fill: { color: C.secondary }, line: { color: C.secondary } });
}

function header(slide: PptxGenJS.Slide, eyebrow: string, title: string, subtitle?: string) {
  // Mirrors CPSlideFrame at the fixed 1280 × 720 capture breakpoint.
  slide.addShape("line", { x: M, y: 0.48, w: 0.33, h: 0, line: { color: C.primary, width: 1 } });
  slide.addText(eyebrow.toUpperCase(), {
    x: M + 0.46, y: 0.36, w: 5.5, h: 0.24, fontFace: BODY, fontSize: 9, bold: false, color: C.muted, charSpacing: 1.8, margin: 0, valign: "middle", wrap: false,
  });
  const longTitle = title.length > 56;
  const veryLongTitle = title.length > 74;
  slide.addText(title, {
    x: M, y: 0.72, w: 10.45, h: veryLongTitle ? 0.92 : longTitle ? 0.78 : 0.64, fontFace: HEAD,
    fontSize: veryLongTitle ? 24 : longTitle ? 25.5 : 27,
    bold: true, color: C.text, valign: "top", fit: "shrink", margin: 0,
  });
  const subY = veryLongTitle ? 1.72 : longTitle ? 1.55 : 1.43;
  if (subtitle) {
    slide.addText(subtitle, {
      x: M, y: subY, w: 9.4, h: 0.34, fontFace: BODY, fontSize: 12, color: C.muted, valign: "top",
      fit: "shrink", margin: 0,
    });
  }
}

function footer(slide: PptxGenJS.Slide, note?: string) {
  if (note) {
    slide.addShape("roundRect", {
      x: M, y: 6.18, w: W - M * 2, h: 0.64, fill: { color: C.softGreen }, line: { color: C.primary, transparency: 60, width: 1 }, rectRadius: 0.12,
    });
    slide.addText(note, {
      x: M + 0.2, y: 6.18, w: W - M * 2 - 0.4, h: 0.64, fontFace: BODY,
      fontSize: note.length > 150 ? 9.5 : 10.5, color: C.inkSoft, valign: "middle", fit: "shrink", margin: 0,
    });
  }
  slide.addShape("line", { x: M, y: 7.02, w: W - M * 2, h: 0, line: { color: C.border, transparency: 70, width: 0.6 } });
  slide.addText("Carbon Performance, RA+ Enterprise Sustainability", {
    x: M, y: 7.13, w: 5.8, h: 0.18, fontFace: BODY, fontSize: 8, color: C.muted, margin: 0,
  });
  slide.addText([
    { text: "SE", options: { bold: true, color: C.primary } },
    { text: "  SUSTAINABILITY BUSINESS", options: { color: C.text } },
  ], { x: W - M - 3.35, y: 7.1, w: 3.35, h: 0.22, fontFace: BODY, fontSize: 8, align: "right", margin: 0 });
}


function card(slide: PptxGenJS.Slide, x: number, y: number, w: number, h: number, color = C.border, fill = C.card) {
  slide.addShape("roundRect", {
    x, y, w, h, fill: { color: fill }, line: { color, width: 0.75 }, rectRadius: Math.min(0.17, h / 2),
  });
}

/** Rich bullet runs with a green marker instead of the plain round bullet. */
function bulletRuns(items: string[], color = C.primary) {
  return items.flatMap((t) => [
    { text: "▪ ", options: { color, bold: true } },
    { text: t, options: { breakLine: true } },
  ]);
}

const paleTone = (t?: string) =>
  t === "warn" ? C.softAmber : t === "muted" ? C.softBlue : t === "accent" ? C.softGreen : C.softGreen;

const bodyTop = (s: { subtitle?: string; title?: string }) =>
  s.subtitle ? ((s.title?.length ?? 0) > 74 ? 2.22 : 2.04) : 1.58;

function renderSlide(pptx: PptxGenJS, s: CPSlide) {
  const slide = pptx.addSlide();
  slide.background = { color: C.bg };

  switch (s.kind) {
    case "title": {
      slide.addShape("line", { x: 1.0, y: 1.13, w: 0.42, h: 0, line: { color: C.primary, width: 1 } });
      slide.addText(s.eyebrow.toUpperCase(), {
        x: 1.55, y: 1.01, w: 7.4, h: 0.26, fontFace: BODY, fontSize: 9, color: C.muted, charSpacing: 2.2, margin: 0,
      });
      slide.addText(s.title, {
        x: 1.0, y: 1.52, w: 10.4, h: 1.35, fontFace: HEAD, fontSize: 50, bold: true, color: C.text, margin: 0, fit: "shrink",
      });
      slide.addText(s.subtitle, {
        x: 1.0, y: 3.0, w: 8.1, h: 0.65, fontFace: BODY, fontSize: 15, color: C.muted, valign: "top", margin: 0,
      });
      let metaX = 1.0;
      s.meta.forEach((item) => {
        const mw = Math.max(1.1, 0.19 * item.length + 0.35);
        slide.addShape("roundRect", { x: metaX, y: 3.85, w: mw, h: 0.34, fill: { color: C.card }, line: { color: C.border, width: 0.65 }, rectRadius: 0.17 });
        slide.addText(item, { x: metaX + 0.16, y: 3.85, w: mw - 0.32, h: 0.34, fontFace: BODY, fontSize: 9, color: C.inkSoft, valign: "middle", margin: 0 });
        metaX += mw + 0.14;
      });
      const cw = (8.7 - 0.4) / 3;
      s.stats.forEach((st, i) => {
        const x = 1.0 + i * (cw + 0.3);
        card(slide, x, 4.72, cw, 1.28, C.border, C.card);
        slide.addText(st.value, {
          x: x + 0.22, y: 4.92, w: cw - 0.4, h: 0.5, fontFace: HEAD, fontSize: 27, bold: true, color: C.primary, margin: 0,
        });
        slide.addText(st.label, {
          x: x + 0.22, y: 5.48, w: cw - 0.4, h: 0.32, fontFace: BODY, fontSize: 10, color: C.muted, valign: "top", fit: "shrink", margin: 0,
        });
      });
      break;
    }

    case "section": {
      slide.background = { color: C.secondary };
      slide.addText(s.eyebrow.toUpperCase(), {
        x: 1.0, y: 1.44, w: 7.8, h: 0.3, fontFace: BODY, fontSize: 9, color: "BFD9C9", charSpacing: 2.2, margin: 0,
      });
      slide.addText(s.number, {
        x: 1.0, y: 1.82, w: 2.5, h: 0.9, fontFace: HEAD, fontSize: 60, bold: true, color: C.primary, transparency: 30, margin: 0,
      });
      slide.addText(s.title, {
        x: 1.0, y: 2.9, w: 9.2, h: 1.2, fontFace: HEAD, fontSize: 42, bold: true, color: C.white, valign: "top", fit: "shrink", margin: 0,
      });
      slide.addText(s.subtitle, {
        x: 1.0, y: 4.38, w: 8.1, h: 0.72, fontFace: BODY, fontSize: 15, color: "D6EADF", valign: "top", fit: "shrink", margin: 0,
      });

      break;
    }

    case "columns": {
      header(slide, s.eyebrow, s.title, s.subtitle);
      const n = s.columns.length;
      const gap = 0.3;
      const cw = (W - M * 2 - gap * (n - 1)) / n;
      const top = bodyTop(s);
      const h = (s.note ? 6.02 : 6.85) - top;
      const innerW = cw - 0.4;

      // one shared bullet size across all columns, driven by the densest one
      const bulletTop = (c: (typeof s.columns)[number]) => top + (c.label ? 1.05 : 0.85) + (c.line ? 0.8 : 0);
      const fs = Math.min(
        ...s.columns.map((c) =>
          fitFontSize(c.items, innerW, top + h - bulletTop(c) - 0.2, 11, 9),
        ),
      );

      s.columns.forEach((c, i) => {
        const x = M + i * (cw + gap);
        const tc = tone(c.tone);
        card(slide, x, top, cw, h, C.border, C.white);
        slide.addShape("rect", { x, y: top, w: cw, h: 0.08, fill: { color: tc }, line: { color: tc } });
        if (c.label) {
          slide.addText(c.label.toUpperCase(), {
            x: x + 0.22, y: top + 0.22, w: innerW, h: 0.23, fontFace: BODY, fontSize: 9, bold: true, color: tc, charSpacing: 1.2, margin: 0,
          });
        }
        slide.addText(c.title, {
          x: x + 0.22, y: top + (c.label ? 0.53 : 0.3), w: innerW, h: 0.55, fontFace: HEAD,
          fontSize: c.title.length > 26 ? 14 : 16, bold: true, color: C.text, valign: "top", fit: "shrink", margin: 0,
        });
        let y = bulletTop(c);
        if (c.line) {
          slide.addText(c.line, {
            x: x + 0.2, y: y - 0.8, w: innerW, h: 0.7, fontFace: BODY, fontSize: 11, color: C.muted, valign: "top",
            fit: "shrink", margin: 0,
          });
        }
        slide.addText(
          bulletRuns(c.items, tone(c.tone)),
          {
            x: x + 0.22, y, w: innerW, h: top + h - y - 0.24, fontFace: BODY, fontSize: fs,
            color: C.inkSoft, valign: "top", lineSpacingMultiple: 1.18, paraSpaceAfter: 3, fit: "shrink", margin: 0,
          },
        );
      });
      footer(slide, s.note);
      break;
    }


    case "board": {
      header(slide, s.eyebrow, s.title, s.subtitle);
      const n = s.lanes.length;
      const gap = 0.28;
      const cw = (W - M * 2 - gap * (n - 1)) / n;
      const top = bodyTop(s);
      const h = (s.note ? 6.02 : 6.85) - top;
      const itemsTop = top + 0.95;
      const avail = top + h - 0.18 - itemsTop;
      const maxCount = Math.max(1, ...s.lanes.map((l) => l.items.length));
      // one card height for every lane so rows line up across the board
      const itemH = Math.max(0.36, Math.min(0.95, avail / maxCount - 0.08));

      s.lanes.forEach((lane, i) => {
        const x = M + i * (cw + gap);
        const tc = tone(lane.tone);
        card(slide, x, top, cw, h, C.border, C.white);
        slide.addShape("rect", { x, y: top, w: cw, h: 0.78, fill: { color: paleTone(lane.tone) }, line: { color: paleTone(lane.tone) } });
        slide.addShape("rect", { x, y: top, w: 0.06, h: h, fill: { color: tc }, line: { color: tc } });
        slide.addText(lane.label.toUpperCase(), {
          x: x + 0.2, y: top + 0.1, w: cw - 0.36, h: 0.22, fontFace: BODY, fontSize: 8.5, bold: true, color: tc, charSpacing: 1.3, margin: 0,
        });
        slide.addText(lane.period, {
          x: x + 0.2, y: top + 0.37, w: cw - 0.36, h: 0.3, fontFace: HEAD, fontSize: 14, bold: true, color: C.text, margin: 0, fit: "shrink",
        });
        let y = itemsTop;
        lane.items.forEach((it) => {
          slide.addShape("roundRect", {
            x: x + 0.15, y, w: cw - 0.3, h: itemH, fill: { color: C.card }, line: { color: C.card, width: 0.4 }, rectRadius: 0.03,
          });
          const nameFs = it.name.length > 46 ? 9 : it.name.length > 32 ? 9.5 : 10;
          slide.addText(
            [
              { text: it.name, options: { fontSize: nameFs, bold: true, color: C.text, breakLine: !!it.note } },
              ...(it.note ? [{ text: it.note, options: { fontSize: nameFs - 1.5, color: C.muted } }] : []),
            ],
            { x: x + 0.22, y, w: cw - 0.44, h: itemH, fontFace: BODY, valign: "middle", margin: 0.03, fit: "shrink", lineSpacingMultiple: 0.95 },
          );
          y += itemH + 0.08;
        });
      });
      footer(slide, s.note);
      break;
    }


    case "stats": {
      header(slide, s.eyebrow, s.title, s.subtitle);
      const top = bodyTop(s);
      const n = s.stats.length;
      const gap = 0.3;
      const cw = (W - M * 2 - gap * (n - 1)) / n;
      s.stats.forEach((st, i) => {
        const x = M + i * (cw + gap);
        card(slide, x, top, cw, 2.05, C.border, C.white);
        slide.addShape("rect", { x, y: top, w: 0.06, h: 2.05, fill: { color: C.primary }, line: { color: C.primary } });
        slide.addText(st.value, {
          x: x + 0.28, y: top + 0.18, w: cw - 0.5, h: 0.62, fontFace: HEAD, fontSize: 34, bold: true, color: C.accent, margin: 0,
        });
        slide.addText(st.label, {
          x: x + 0.25, y: top + 0.88, w: cw - 0.5, h: 0.55, fontFace: BODY, fontSize: 12, bold: true, color: C.text, valign: "top",
        });
        if (st.sub) {
          slide.addText(st.sub, {
            x: x + 0.25, y: top + 1.46, w: cw - 0.5, h: 0.5, fontFace: BODY, fontSize: 10, color: C.muted, valign: "top",
          });
        }
      });
      if (s.bullets) {
        const by = top + 2.35;

        const bh = (s.note ? 6.05 : 6.85) - by;
        const bn = s.bullets.length;
        const bw = (W - M * 2 - gap * (bn - 1)) / bn;
        s.bullets.forEach((b, i) => {
          const x = M + i * (bw + gap);
          card(slide, x, by, bw, bh, C.border, C.card);
          slide.addText(b.title, {
            x: x + 0.25, y: by + 0.18, w: bw - 0.5, h: 0.4, fontFace: HEAD, fontSize: 14, bold: true, color: C.text,
          });
          slide.addText(b.line, {
            x: x + 0.25, y: by + 0.62, w: bw - 0.5, h: bh - 0.8, fontFace: BODY, fontSize: 12, color: C.muted, valign: "top",
          });
        });
      }
      footer(slide, s.note);
      break;
    }

    case "table": {
      const headerRow = s.headers.map((h) => ({
        text: h.toUpperCase(),
        options: { bold: true, color: C.muted, fontSize: 8.5, fill: { color: C.softGray }, margin: 0.1 },
      }));
      const mapRow = (r: string[]) => {
        if (r[0] === "") {
          return [
            {
              text: r[1],
              options: { colspan: s.headers.length, bold: true, color: "8A5A10", fill: { color: "FFF1DC" }, fontSize: 10 },
            },
          ];
        }
        return r.map((cell, j) => ({
          text: cell,
          options: { fontSize: 10, bold: j === 0, color: j === 0 ? C.accent : C.text },
        }));
      };

      const nCols = s.headers.length;
      const first = Math.min(2.25, Math.max(1.45, (W - M * 2) / nCols * 0.78));
      const rest = (W - M * 2 - first) / (nCols - 1);
      const colW = [first, ...Array(nCols - 1).fill(rest)];
      header(slide, s.eyebrow, s.title, s.subtitle);
      const y = bodyTop(s);
      const bottom = s.note ? 6.02 : 6.85;
      const rows = [headerRow, ...s.rows.map(mapRow)];
      const rowH = Math.max(0.28, Math.min(0.56, (bottom - y - 0.12) / rows.length));
      const denseFont = s.rows.length > 9 ? 7.4 : s.headers.length > 5 ? 8 : 9.5;
      rows.slice(1).forEach((r, ri) => {
        r.forEach((cell) => {
          const options = cell.options as { fill?: { color: string }; fontSize?: number; margin?: number };
          options.fontSize = denseFont;
          options.margin = rowH < 0.38 ? 0.045 : 0.08;
          if (!options.fill) options.fill = { color: ri % 2 ? C.card : C.white };
        });
      });
      slide.addShape("roundRect", { x: M, y, w: W - M * 2, h: rowH * rows.length, fill: { color: C.card }, line: { color: C.border, width: 0.6 }, rectRadius: 0.16 });
      slide.addTable(rows, {
        x: M, y, w: W - M * 2, colW, fontFace: BODY,
        border: { type: "solid", color: C.border, pt: 0.35 },
        valign: "middle", rowH, margin: 0.08,
      });
      footer(slide, s.note);

      break;
    }


    case "bets": {
      header(slide, s.eyebrow, s.title, s.subtitle);
      const top = bodyTop(s);
      const n = Math.min(s.bets.length, 3);
      const gap = 0.3;
      const cols = n;
      const cw = (W - M * 2 - gap * (cols - 1)) / cols;
      const rowsCount = Math.ceil(s.bets.length / cols);
      const totalH = (s.note ? 6.02 : 6.85) - top;
      const ch = (totalH - gap * (rowsCount - 1)) / rowsCount;
      const fs = Math.min(
        ...s.bets.map((b) => fitFontSize(b.items, cw - 0.5, ch - 1.95, 11, 9)),
      );
      s.bets.forEach((b, i) => {
        const x = M + (i % cols) * (cw + gap);
        const y = top + Math.floor(i / cols) * (ch + gap);
        card(slide, x, y, cw, ch, C.border, C.white);
        slide.addShape("rect", { x, y, w: 0.07, h: ch, fill: { color: C.primary }, line: { color: C.primary } });
        slide.addShape("ellipse", {
          x: x + 0.27, y: y + 0.22, w: 0.48, h: 0.48, fill: { color: C.softGreen }, line: { color: C.softGreen },
        });
        slide.addText(String(i + 1).padStart(2, "0"), {
          x: x + 0.27, y: y + 0.22, w: 0.48, h: 0.48, fontFace: BODY, fontSize: 12, bold: true, color: C.accent, align: "center", valign: "middle", margin: 0,
        });
        slide.addText(b.title, {
          x: x + 0.85, y: y + 0.2, w: cw - 1.1, h: 0.55, fontFace: HEAD, fontSize: 15, bold: true, color: C.text, valign: "middle", fit: "shrink", margin: 0,
        });
        slide.addText(b.line, {
          x: x + 0.25, y: y + 0.85, w: cw - 0.5, h: 0.85, fontFace: BODY, fontSize: 11, color: C.muted, valign: "top", fit: "shrink", margin: 0,
        });
        slide.addText(
          bulletRuns(b.items),
          { x: x + 0.25, y: y + 1.75, w: cw - 0.5, h: ch - 1.95, fontFace: BODY, fontSize: fs, color: C.inkSoft, valign: "top", lineSpacingMultiple: 1.1, paraSpaceAfter: 2, fit: "shrink", margin: 0 },
        );
      });
      footer(slide, s.note);
      break;
    }

    case "timeline": {
      header(slide, s.eyebrow, s.title, s.subtitle);
      const left = M;
      const groupW = 0.45;
      const labelW = 2.65;
      const chartX = left + groupW + labelW;
      const chartW = W - M - chartX;
      const top = 2.05;
      const headerH = 0.50;
      const totalQ = s.years.length * 4;
      const totalRows = s.groups.reduce((sum, group) => sum + group.rows.length, 0);
      const hasMilestones = s.groups.some((group) =>
        group.rows.some((item) => item.mvp !== undefined || item.ga !== undefined || item.continuous),
      );
      const rowH = Math.min(0.45, (6.45 - top - headerH) / totalRows);
      const quarterW = chartW / totalQ;
      const chartBottom = top + headerH + totalRows * rowH;

      slide.addShape("rect", { x: left, y: top, w: groupW + labelW + chartW, h: headerH, fill: { color: C.softGray }, line: { color: C.border, width: 0.5 } });
      slide.addText("CAPABILITY", { x: left + 0.14, y: top + 0.16, w: groupW + labelW - 0.25, h: 0.18, fontFace: BODY, fontSize: 8.5, bold: true, color: C.muted, charSpacing: 1, margin: 0 });
      s.years.forEach((year, yi) => {
        slide.addText(year, { x: chartX + yi * quarterW * 4, y: top + 0.03, w: quarterW * 4, h: 0.22, fontFace: HEAD, fontSize: 12, bold: true, color: C.text, align: "center", margin: 0 });
        ["Q1", "Q2", "Q3", "Q4"].forEach((quarter, qi) => {
          slide.addText(quarter, { x: chartX + (yi * 4 + qi) * quarterW, y: top + 0.27, w: quarterW, h: 0.15, fontFace: BODY, fontSize: 8, color: C.muted, align: "center", margin: 0 });
        });
      });

      for (let q = 0; q <= totalQ; q += 1) {
        slide.addShape("line", { x: chartX + q * quarterW, y: top + 0.25, w: 0, h: chartBottom - top - 0.25, line: { color: q % 4 === 0 ? "C8CECA" : C.border, width: q % 4 === 0 ? 0.9 : 0.35 } });
      }

      let row = 0;
      s.groups.forEach((group) => {
        const tc = tone(group.tone);
        const fill = paleTone(group.tone);
        const groupY = top + headerH + row * rowH;
        const groupH = group.rows.length * rowH;
        slide.addShape("rect", { x: left, y: groupY, w: groupW, h: groupH, fill: { color: tc }, line: { color: C.white, width: 0.6 } });
        const stackedLabel = groupH >= 0.7;
        slide.addText(group.label.toUpperCase(), { x: left + 0.03, y: groupY + 0.02, w: groupW - 0.06, h: groupH - 0.04, fontFace: BODY, fontSize: stackedLabel ? 7.5 : 5.5, bold: true, color: C.white, vert: stackedLabel ? "vert270" : undefined, align: "center", valign: "middle", fit: "shrink", margin: 0 });

        group.rows.forEach((item) => {
          const y = top + headerH + row * rowH;
          const cy = y + rowH / 2;
          if (row % 2 === 1) {
            slide.addShape("rect", { x: left + groupW, y, w: labelW, h: rowH, fill: { color: C.softGray, transparency: 45 }, line: { color: C.softGray, transparency: 100 } });
          }
          slide.addShape("line", { x: left + groupW, y: y + rowH, w: labelW + chartW, h: 0, line: { color: C.border, width: 0.35 } });
          // left accent bar
          slide.addShape("roundRect", { x: left + groupW + 0.12, y: cy - 0.12, w: 0.05, h: 0.24, fill: { color: tc }, line: { color: tc }, rectRadius: 0.03 });
          slide.addText(item.title, { x: left + groupW + 0.23, y: cy - 0.16, w: labelW - 0.38, h: 0.32, fontFace: BODY, fontSize: Math.min(9.5, rowH * 36), color: C.text, valign: "middle", fit: "shrink", margin: 0 });

          const barH = Math.min(0.14, rowH * 0.34);
          const barY = cy - barH / 2;
          const end = item.ga ?? item.end ?? item.mvp ?? totalQ;
          slide.addShape("roundRect", { x: chartX + item.start * quarterW, y: barY, w: Math.max(0.1, (end - item.start) * quarterW), h: barH, fill: { color: tc }, line: { color: tc, width: 0.4 }, rectRadius: 0.04 });
          if (item.continuous && end < totalQ) {
            const hatchX = chartX + end * quarterW;
            const hatchW = Math.max(0.1, (totalQ - end) * quarterW);
            slide.addShape("roundRect", { x: hatchX, y: barY, w: hatchW, h: barH, fill: { color: tc, transparency: 94 }, line: { color: tc, transparency: 40, width: 0.5 }, rectRadius: 0.025 });
            const hatchStep = 0.3;
            for (let hx = hatchX + 0.08; hx < hatchX + hatchW - 0.03; hx += hatchStep) {
              const lineW = Math.min(barH * 0.68, hatchX + hatchW - hx);
              slide.addShape("line", {
                x: hx,
                y: barY + barH - 0.01,
                w: lineW,
                h: -Math.min(barH - 0.02, lineW),
                line: { color: tc, transparency: 16, width: 0.75 },
              });
            }
          }
          if (item.mvp !== undefined) {
            slide.addShape("ellipse", { x: chartX + item.mvp * quarterW - 0.07, y: cy - 0.07, w: 0.14, h: 0.14, fill: { color: C.warn }, line: { color: C.white, width: 1 } });
          }
          if (item.ga !== undefined) {
            slide.addShape("ellipse", { x: chartX + item.ga * quarterW - 0.07, y: cy - 0.07, w: 0.14, h: 0.14, fill: { color: C.accent }, line: { color: C.white, width: 1 } });
          }
          row += 1;
        });
      });

      if (hasMilestones) {
        const legendY = Math.min(6.65, chartBottom + 0.22);
        slide.addShape("ellipse", { x: 8.0, y: legendY, w: 0.16, h: 0.16, fill: { color: C.warn }, line: { color: C.white, width: 0.8 } });
        slide.addText("MVP", { x: 8.24, y: legendY - 0.01, w: 0.55, h: 0.18, fontFace: BODY, fontSize: 8.5, color: C.muted, margin: 0 });
        slide.addShape("ellipse", { x: 8.95, y: legendY, w: 0.16, h: 0.16, fill: { color: C.accent }, line: { color: C.white, width: 0.8 } });
        slide.addText("Full GA", { x: 9.19, y: legendY - 0.01, w: 0.8, h: 0.18, fontFace: BODY, fontSize: 8.5, color: C.muted, margin: 0 });
        slide.addShape("roundRect", { x: 10.2, y: legendY + 0.02, w: 0.5, h: 0.12, fill: { color: C.primary, transparency: 94 }, line: { color: C.primary, transparency: 40, width: 0.5 }, rectRadius: 0.025 });
        [10.27, 10.47, 10.67].forEach((x) => {
          slide.addShape("line", { x, y: legendY + 0.115, w: 0.07, h: -0.07, line: { color: C.primary, transparency: 16, width: 0.75 } });
        });
        slide.addText("Continuous investment after GA", { x: 10.78, y: legendY - 0.01, w: 1.9, h: 0.18, fontFace: BODY, fontSize: 8.5, color: C.muted, margin: 0 });
      }
      footer(slide, s.note);
      break;
    }


    case "spine": {
      slide.background = { color: C.white };
      slide.addShape("rect", { x: 0, y: 0, w: W / 2, h: 0.08, fill: { color: C.primary }, line: { color: C.primary, transparency: 100 } });
      slide.addText(s.title, {
        x: M, y: 0.7, w: W - M * 2, h: 1.15, fontFace: HEAD, fontSize: 34, bold: true, color: C.text,
        align: "center", valign: "middle", fit: "shrink", margin: 0,
      });
      slide.addText(s.body, {
        x: W / 2 - 4.6, y: 1.95, w: 9.2, h: 0.9, fontFace: BODY, fontSize: 12.5, color: C.muted,
        align: "center", valign: "top", fit: "shrink", margin: 0,
      });
      const rowH = 1.05;
      const rowGap = 0.24;
      const rowW = 9.2;
      const rowX = W / 2 - rowW / 2;
      s.rows.forEach((row, i) => {
        const y = 3.15 + i * (rowH + rowGap);
        slide.addShape("roundRect", {
          x: rowX, y, w: rowW, h: rowH, fill: { color: C.card }, line: { color: C.border, width: 0.8 }, rectRadius: 0.06,
        });
        slide.addShape("roundRect", {
          x: rowX + 0.3, y: y + 0.22, w: 0.62, h: 0.62, fill: { color: C.softGreen }, line: { color: C.softGreen }, rectRadius: 0.06,
        });
        slide.addText(row.icon, {
          x: rowX + 0.3, y: y + 0.22, w: 0.62, h: 0.62, fontFace: HEAD, fontSize: 18, bold: true, color: C.primary,
          align: "center", valign: "middle", margin: 0,
        });
        slide.addText(row.title, {
          x: rowX + 1.1, y: y + 0.16, w: rowW - 1.4, h: 0.36, fontFace: HEAD, fontSize: 17, bold: true, color: C.text,
          valign: "middle", fit: "shrink", margin: 0,
        });
        slide.addText(row.items.join("   ·   "), {
          x: rowX + 1.1, y: y + 0.55, w: rowW - 1.4, h: 0.34, fontFace: BODY, fontSize: 12, color: C.muted,
          valign: "middle", fit: "shrink", margin: 0,
        });
      });
      slide.slideNumber = {
        x: W - M - 0.7, y: 7.1, w: 0.7, h: 0.2, align: "right", fontFace: BODY, fontSize: 8, bold: true, color: C.accent,
      };
      break;
    }

    case "spinehub": {
      slide.background = { color: C.white };
      slide.addShape("rect", { x: 0, y: 0, w: W / 2, h: 0.08, fill: { color: C.primary }, line: { color: C.primary, transparency: 100 } });
      slide.addShape("roundRect", {
        x: W / 2 - 1.2, y: 0.55, w: 2.4, h: 0.36, fill: { color: C.softGreen }, line: { color: C.softGreen }, rectRadius: 0.18,
      });
      slide.addText(s.eyebrow.toUpperCase(), {
        x: W / 2 - 1.2, y: 0.55, w: 2.4, h: 0.36, fontFace: HEAD, fontSize: 10, bold: true, color: C.primary,
        align: "center", valign: "middle", charSpacing: 1, margin: 0,
      });
      slide.addText(s.title, {
        x: M, y: 1.1, w: W - M * 2, h: 0.95, fontFace: HEAD, fontSize: 32, bold: true, color: C.text,
        align: "center", valign: "middle", fit: "shrink", margin: 0,
      });
      if (s.subtitle) {
        slide.addText(s.subtitle, {
          x: W / 2 - 4.6, y: 2.05, w: 9.2, h: 0.5, fontFace: BODY, fontSize: 12.5, color: C.muted,
          align: "center", valign: "top", fit: "shrink", margin: 0,
        });
      }

      const centerW = 3.2;
      const centerH = 2.6;
      const centerX = M;
      const centerY = 3.0;
      slide.addShape("roundRect", {
        x: centerX, y: centerY, w: centerW, h: centerH, fill: { color: C.softGreen }, line: { color: C.primary, width: 1.5 }, rectRadius: 0.12,
      });
      slide.addText("DATA SPINE", {
        x: centerX, y: centerY + 0.2, w: centerW, h: 0.3, fontFace: HEAD, fontSize: 10, bold: true, color: C.primary,
        align: "center", valign: "middle", charSpacing: 1, margin: 0,
      });
      slide.addText(s.center.title, {
        x: centerX, y: centerY + 0.55, w: centerW, h: 0.55, fontFace: HEAD, fontSize: 17, bold: true, color: C.text,
        align: "center", valign: "middle", fit: "shrink", margin: 0,
      });
      slide.addText(s.center.items.join("\n"), {
        x: centerX + 0.2, y: centerY + 1.15, w: centerW - 0.4, h: 1.2, fontFace: BODY, fontSize: 11, color: C.muted,
        align: "center", valign: "middle", lineSpacingMultiple: 1.35, margin: 0,
      });

      const arrowY = centerY + centerH / 2;
      slide.addShape("line", {
        x: centerX + centerW + 0.15, y: arrowY, w: 0.7, h: 0,
        line: { color: C.primary, width: 1.5, endArrowType: "arrow" },
      });

      const spokeW = 4.5;
      const spokeH = 1.15;
      const spokeX = centerX + centerW + 1.0;
      const startY = 2.55;
      const gap = 0.22;
      s.spokes.forEach((spoke, i) => {
        const y = startY + i * (spokeH + gap);
        slide.addShape("roundRect", {
          x: spokeX, y, w: spokeW, h: spokeH, fill: { color: C.card }, line: { color: C.border, width: 0.8 }, rectRadius: 0.08,
        });
        slide.addText(spoke.title, {
          x: spokeX + 0.2, y: y + 0.12, w: spokeW - 0.4, h: 0.32, fontFace: HEAD, fontSize: 13, bold: true, color: C.text,
          valign: "middle", fit: "shrink", margin: 0,
        });
        slide.addText(spoke.items.join("   ·   "), {
          x: spokeX + 0.2, y: y + 0.5, w: spokeW - 0.4, h: 0.48, fontFace: BODY, fontSize: 10.5, color: C.muted,
          valign: "middle", fit: "shrink", margin: 0,
        });
        slide.addShape("line", {
          x: centerX + centerW + 0.85,
          y: arrowY,
          w: spokeX - 0.05 - (centerX + centerW + 0.85),
          h: y + spokeH / 2 - arrowY,
          line: { color: C.primary, width: 1, dashType: "dash" },
        });
      });

      slide.slideNumber = {
        x: W - M - 0.7, y: 7.1, w: 0.7, h: 0.2, align: "right", fontFace: BODY, fontSize: 8, bold: true, color: C.accent,
      };
      break;
    }

    case "hero": {

      const H = 7.5;
      slide.background = { color: C.white };
      slide.addShape("rect", { x: 0, y: 0, w: W / 2, h: 0.08, fill: { color: C.primary }, line: { color: C.primary, transparency: 100 } });
      slide.addShape("roundRect", {
        x: W / 2 - 1.5, y: 0.75, w: 3, h: 0.42, fill: { color: C.softGreen }, line: { color: C.softGreen }, rectRadius: 0.21,
      });
      slide.addText(`✦  ${s.badge.toUpperCase()}`, {
        x: W / 2 - 1.5, y: 0.75, w: 3, h: 0.42, fontFace: HEAD, fontSize: 12, bold: true, color: C.primary,
        align: "center", valign: "middle", charSpacing: 1, margin: 0,
      });
      slide.addText(s.titleDark, {
        x: M, y: 1.7, w: W - M * 2, h: 1.0, fontFace: HEAD, fontSize: 44, bold: true, color: C.text,
        align: "center", valign: "middle", fit: "shrink", margin: 0,
      });
      slide.addText(s.titleGreen, {
        x: M, y: 2.75, w: W - M * 2, h: 1.05, fontFace: HEAD, fontSize: 44, bold: true, color: C.primary,
        align: "center", valign: "middle", fit: "shrink", margin: 0,
      });
      slide.addText(s.tagline, {
        x: M, y: 4.05, w: W - M * 2, h: 0.45, fontFace: HEAD, fontSize: 20, bold: true, color: C.primary,
        align: "center", valign: "middle", margin: 0,
      });
      slide.addText(s.body, {
        x: W / 2 - 4.1, y: 4.6, w: 8.2, h: 0.85, fontFace: BODY, fontSize: 13, color: C.muted,
        align: "center", valign: "top", fit: "shrink", margin: 0,
      });
      const chipW = 1.7;
      const chipGap = 0.25;
      const chipsW = s.chips.length * chipW + (s.chips.length - 1) * chipGap;
      s.chips.forEach((chip, ci) => {
        const cx = W / 2 - chipsW / 2 + ci * (chipW + chipGap);
        slide.addShape("roundRect", {
          x: cx, y: 5.75, w: chipW, h: 0.42, fill: { color: C.white }, line: { color: C.border, width: 1 }, rectRadius: 0.21,
        });
        slide.addText(chip, {
          x: cx, y: 5.75, w: chipW, h: 0.42, fontFace: BODY, fontSize: 13, bold: true, color: C.text,
          align: "center", valign: "middle", margin: 0,
        });
      });
      slide.addText("Property of Schneider Electric", {
        x: M, y: H - 0.4, w: 3.5, h: 0.22, fontFace: BODY, fontSize: 8.5, color: C.muted, margin: 0,
      });
      slide.addText("General", {
        x: W / 2 - 1, y: H - 0.4, w: 2, h: 0.22, fontFace: BODY, fontSize: 8.5, color: C.muted, align: "center", margin: 0,
      });
      slide.addText(
        [
          { text: "SE ", options: { bold: true, color: C.primary } },
          { text: "ADVISORY SERVICES", options: { bold: true, color: C.muted } },
        ],
        { x: W - M - 3.4, y: H - 0.45, w: 3.4, h: 0.3, fontFace: HEAD, fontSize: 13, align: "right", valign: "middle", margin: 0 },
      );
      slide.slideNumber = {
        x: W - M - 0.7, y: H - 0.75, w: 0.7, h: 0.2, align: "right", fontFace: BODY, fontSize: 8, bold: true, color: C.primary,
      };
      break;
    }

    case "familymap": {
      const H = 7.5;
      const DARK = C.secondary;
      slide.background = { color: DARK };
      slide.addText(
        [
          { text: `${s.titleLead} `, options: { color: C.primary } },
          { text: s.titleHighlight, options: { color: C.white } },
          { text: ` ${s.titleRest}`, options: { color: C.primary } },
        ],
        { x: M, y: 0.5, w: W - M * 2, h: 0.95, fontFace: HEAD, fontSize: 26, bold: true, align: "center", valign: "middle", fit: "shrink", margin: 0 },
      );
      slide.addText(
        [
          { text: `${s.brandLead} `, options: { bold: false } },
          { text: s.brandStrong, options: { bold: true } },
          { text: "+", options: { bold: true, superscript: true } },
        ],
        { x: M, y: 1.6, w: W - M * 2, h: 0.6, fontFace: HEAD, fontSize: 27, color: C.white, align: "center", valign: "middle", charSpacing: 1, margin: 0 },
      );

      const famGap = 0.55;
      const famW = (W - M * 2 - famGap * (s.families.length - 1)) / s.families.length;
      const boxGap = 0.16;
      const boxW = (famW - boxGap) / 2;
      const boxH = 1.35;
      const gridTop = 3.0;

      const famColor = (t: string) =>
        t === "primary" ? "CDFC57" : t === "accent" ? "3DCD58" : t === "warn" ? C.warn : "A0E7EE";

      s.families.forEach((family, fi) => {
        const fx = M + fi * (famW + famGap);
        const tc = famColor(family.tone);
        slide.addText(family.label, {
          x: fx, y: 2.45, w: famW, h: 0.26, fontFace: HEAD, fontSize: 13, bold: true, color: tc, align: "center", margin: 0,
        });
        slide.addText("product family", {
          x: fx, y: 2.71, w: famW, h: 0.2, fontFace: BODY, fontSize: 10, color: "BFD9C9", align: "center", margin: 0,
        });
        if (family.subfamilies) {
          const subGap = 0.14;
          const gridBottom = s.sharedCapabilities?.length ? 5.8 : 6.0;
          const subH = (gridBottom - gridTop - subGap * (family.subfamilies.length - 1)) / family.subfamilies.length;
          family.subfamilies.forEach((sub, si) => {
            const sy = gridTop + si * (subH + subGap);
            slide.addShape("roundRect", {
              x: fx, y: sy, w: famW, h: subH, fill: { color: "0C3B25" }, line: { color: tc, width: 0.8 }, rectRadius: 0.04,
            });
            slide.addText(sub.label.toUpperCase(), {
              x: fx + 0.12, y: sy + 0.06, w: famW - 0.24, h: 0.2, fontFace: BODY, fontSize: 9, bold: true, color: tc,
              align: "center", valign: "middle", charSpacing: 0.6, fit: "shrink", margin: 0,
            });
            const cols = 2;
            const rows = Math.ceil(sub.products.length / cols);
            const bw = (famW - 0.24 - boxGap * (cols - 1)) / cols;
            const bh = Math.min(0.62, (subH - 0.36 - boxGap * (rows - 1)) / rows);
            sub.products.forEach((product, pi) => {
              const x = fx + 0.12 + (pi % cols) * (bw + boxGap);
              const y = sy + 0.3 + Math.floor(pi / cols) * (bh + boxGap);
              slide.addShape("roundRect", {
                x, y, w: bw, h: bh, fill: { color: "0F4A2E" }, line: { color: tc, width: 1.1 }, rectRadius: 0.04,
              });
              slide.addText(product.toUpperCase(), {
                x: x + 0.06, y, w: bw - 0.12, h: bh, fontFace: BODY, fontSize: 9, bold: true, color: C.white,
                align: "center", valign: "middle", charSpacing: 0.4, fit: "shrink", margin: 0,
              });
            });
          });
        } else {
          const products = family.products ?? [];
          const single = products.length <= 2;
          products.forEach((product, pi) => {
            const many = products.length > 6;
            const cols = single ? 1 : many ? 3 : 2;
            const rows = Math.ceil(products.length / cols);
            const gridBottom = s.sharedCapabilities?.length ? 5.8 : 6.0;
            const maxBh = (gridBottom - gridTop - boxGap * (rows - 1)) / rows;
            const bw = many ? (famW - boxGap * (cols - 1)) / cols : boxW;
            const bh = Math.min(many ? 0.82 : boxH, maxBh);
            const x = single ? fx + (famW - bw) / 2 : fx + (pi % cols) * (bw + boxGap);
            const y = gridTop + (single ? pi : Math.floor(pi / cols)) * (bh + boxGap);
            slide.addShape("roundRect", {
              x, y, w: bw, h: bh, fill: { color: "0F4A2E" }, line: { color: tc, width: 1.1 }, rectRadius: 0.04,
            });
            slide.addText(product.toUpperCase(), {
              x: x + 0.08, y, w: bw - 0.16, h: bh, fontFace: BODY, fontSize: many ? 9 : 11, bold: true, color: C.white,
              align: "center", valign: "middle", charSpacing: 0.4, fit: "shrink", margin: 0,
            });
          });
        }
      });

      const hasCaps = !!s.sharedCapabilities?.length;
      if (s.sharedCapabilities?.length) {
        const plY = 5.95;
        const plH = 0.72;
        slide.addShape("roundRect", {
          x: M, y: plY, w: W - M * 2, h: plH, fill: { color: "1A4A2E" }, line: { color: "CDFC57", width: 1 }, rectRadius: 0.08,
        });
        slide.addText("ALL ARE SHARED CAPABILITIES", {
          x: M, y: plY + 0.05, w: W - M * 2, h: 0.2, fontFace: BODY, fontSize: 8, bold: true, color: "CDFC57",
          align: "center", charSpacing: 2, margin: 0,
        });
        const pillY = plY + 0.28;
        const pillH = 0.36;
        const gap = 0.1;
        const pillW = (W - M * 2 - 0.24 - gap * (s.sharedCapabilities.length - 1)) / s.sharedCapabilities.length;
        s.sharedCapabilities.forEach((cap, i) => {
          const px = M + 0.12 + i * (pillW + gap);
          slide.addShape("roundRect", {
            x: px, y: pillY, w: pillW, h: pillH, fill: { color: "0F3B24" }, line: { color: C.primary, width: 0.75 }, rectRadius: 0.18,
          });
          slide.addText(cap, {
            x: px + 0.04, y: pillY, w: pillW - 0.08, h: pillH, fontFace: BODY, fontSize: 7, bold: true, color: C.white,
            align: "center", valign: "middle", fit: "shrink", margin: 0,
          });
        });
      }

      slide.addText(
        [
          { text: "SE ", options: { bold: true, color: C.primary } },
          { text: "ADVISORY SERVICES", options: { color: C.white } },
        ],
        { x: W - M - 3.4, y: hasCaps ? 6.82 : H - 0.85, w: 3.4, h: 0.3, fontFace: HEAD, fontSize: 14, align: "right", valign: "middle", margin: 0 },
      );
      slide.slideNumber = {
        x: W - M - 0.7, y: 7.1, w: 0.7, h: 0.2, align: "right", fontFace: BODY, fontSize: 8, bold: true, color: C.primary,
      };
      break;
    }


    case "vision": {
      const H = 7.5;
      const DARK = C.secondary;
      const HI = "CDFC57";
      const SOFT = "BFD9C9";
      slide.background = { color: DARK };

      slide.addShape("roundRect", {
        x: W / 2 - 1.05, y: 0.55, w: 2.1, h: 0.34, fill: { color: DARK }, line: { color: HI, width: 1 }, rectRadius: 0.17,
      });
      slide.addText(s.badge, {
        x: W / 2 - 1.05, y: 0.55, w: 2.1, h: 0.34, fontFace: HEAD, fontSize: 10, bold: true, color: HI,
        align: "center", valign: "middle", charSpacing: 3, margin: 0,
      });

      slide.addText(
        [
          { text: `${s.titleLead} `, options: { color: C.white } },
          { text: s.titleHighlight, options: { color: HI } },
          ...(s.titleRest ? [{ text: ` ${s.titleRest}`, options: { color: C.white } }] : []),
        ],
        { x: M, y: 1.1, w: W - M * 2, h: 0.95, fontFace: HEAD, fontSize: 30, bold: true, align: "center", valign: "middle", fit: "shrink", margin: 0 },
      );

      slide.addText(s.manifesto, {
        x: W / 2 - 4.3, y: 2.15, w: 8.6, h: 1.05, fontFace: BODY, fontSize: 12, color: SOFT,
        align: "center", valign: "top", lineSpacingMultiple: 1.25, fit: "shrink", margin: 0,
      });

      const gap = 0.4;
      const cw = (W - M * 2 - gap * (s.promises.length - 1)) / s.promises.length;
      const cardY = 3.55;
      const cardH = 2.0;
      s.promises.forEach((promise, i) => {
        const x = M + i * (cw + gap);
        slide.addShape("roundRect", {
          x, y: cardY, w: cw, h: cardH, fill: { color: "0F4A2E" }, line: { color: HI, width: 0.75 }, rectRadius: 0.06,
        });
        slide.addText(promise.title, {
          x: x + 0.25, y: cardY + 0.22, w: cw - 0.5, h: 0.4, fontFace: HEAD, fontSize: 15, bold: true, color: HI,
          align: "center", valign: "middle", fit: "shrink", margin: 0,
        });
        slide.addText(promise.line, {
          x: x + 0.25, y: cardY + 0.7, w: cw - 0.5, h: cardH - 0.95, fontFace: BODY, fontSize: 10.5, color: SOFT,
          align: "center", valign: "top", lineSpacingMultiple: 1.2, fit: "shrink", margin: 0,
        });
      });

      slide.addText(s.tagline, {
        x: M, y: 6.05, w: W - M * 2, h: 0.5, fontFace: HEAD, fontSize: 18, color: C.white,
        align: "center", valign: "middle", charSpacing: 1, margin: 0,
      });

      slide.addText(
        [
          { text: "SE ", options: { bold: true, color: C.primary } },
          { text: "ADVISORY SERVICES", options: { color: C.white } },
        ],
        { x: W - M - 3.4, y: H - 0.55, w: 3.4, h: 0.3, fontFace: HEAD, fontSize: 13, align: "right", valign: "middle", margin: 0 },
      );
      slide.slideNumber = {
        x: W - M - 0.7, y: H - 0.85, w: 0.7, h: 0.2, align: "right", fontFace: BODY, fontSize: 8, bold: true, color: C.primary,
      };
      break;
    }

    case "strategicroadmap": {
      const H = 7.5;
      const DARK = C.secondary;
      const HI = "CDFC57";
      const SOFT = "BFD9C9";
      const horizonColors = { primary: C.primary, accent: HI, warn: C.warn };
      slide.background = { color: DARK };

      slide.addShape("roundRect", {
        x: M, y: 0.42, w: 2.75, h: 0.34, fill: { color: DARK }, line: { color: HI, width: 1 }, rectRadius: 0.17,
      });
      slide.addText(s.badge, {
        x: M, y: 0.42, w: 2.75, h: 0.34, fontFace: HEAD, fontSize: 9, bold: true, color: HI,
        align: "center", valign: "middle", charSpacing: 1.8, margin: 0,
      });
      slide.addText(s.title, {
        x: M, y: 0.93, w: W - M * 2, h: 0.78, fontFace: HEAD, fontSize: 27, bold: true, color: C.white,
        valign: "middle", fit: "shrink", margin: 0,
      });
      slide.addText(s.subtitle, {
        x: M, y: 1.78, w: 10.8, h: 0.48, fontFace: BODY, fontSize: 11.5, color: SOFT,
        valign: "top", fit: "shrink", margin: 0,
      });

      const gap = 0.42;
      const cw = (W - M * 2 - gap * 2) / 3;
      const top = 2.48;
      s.horizons.forEach((horizon, i) => {
        const x = M + i * (cw + gap);
        const hc = horizonColors[horizon.tone];
        slide.addShape("line", { x, y: top, w: cw, h: 0, line: { color: "5E806E", width: 0.8 } });
        if (i < s.horizons.length - 1) {
          slide.addText("›", { x: x + cw + 0.11, y: top - 0.13, w: 0.2, h: 0.25, fontFace: HEAD, fontSize: 17, color: "769585", align: "center", margin: 0 });
        }
        slide.addShape("roundRect", { x, y: top + 0.18, w: 0.8, h: 0.32, fill: { color: DARK }, line: { color: hc, width: 1 }, rectRadius: 0.04 });
        slide.addText(horizon.period, { x, y: top + 0.18, w: 0.8, h: 0.32, fontFace: HEAD, fontSize: 10, bold: true, color: hc, align: "center", valign: "middle", margin: 0 });
        slide.addText(horizon.title, { x, y: top + 0.68, w: cw, h: 0.42, fontFace: HEAD, fontSize: 16, bold: true, color: C.white, fit: "shrink", margin: 0 });
        slide.addText(horizon.thesis, { x, y: top + 1.14, w: cw, h: 0.65, fontFace: BODY, fontSize: 10, color: SOFT, valign: "top", fit: "shrink", margin: 0 });
        horizon.milestones.forEach((milestone, j) => {
          const my = top + 1.96 + j * 0.51;
          slide.addShape("line", { x, y: my - 0.09, w: cw, h: 0, line: { color: "315D47", width: 0.5 } });
          slide.addShape("ellipse", { x, y: my + 0.06, w: 0.06, h: 0.06, fill: { color: C.primary }, line: { color: C.primary } });
          slide.addText(milestone, { x: x + 0.16, y: my, w: cw - 0.16, h: 0.32, fontFace: BODY, fontSize: 9, color: C.white, valign: "top", fit: "shrink", margin: 0 });
        });
      });

      slide.addShape("line", { x: M, y: 5.77, w: W - M * 2, h: 0, line: { color: "5E806E", width: 0.8 } });
      slide.addText("STRATEGIC DRIVERS", { x: M, y: 5.91, w: 2, h: 0.22, fontFace: HEAD, fontSize: 9, bold: true, color: HI, charSpacing: 1.8, margin: 0 });
      const driverW = (W - M * 2 - 0.9) / 4;
      s.drivers.forEach((driver, i) => {
        const x = M + i * (driverW + 0.3);
        slide.addText(driver.title, { x, y: 6.2, w: driverW, h: 0.25, fontFace: HEAD, fontSize: 11, bold: true, color: C.white, fit: "shrink", margin: 0 });
        slide.addText(driver.line, { x, y: 6.49, w: driverW, h: 0.4, fontFace: BODY, fontSize: 8.5, color: SOFT, valign: "top", fit: "shrink", margin: 0 });
      });
      slide.addText(s.note, { x: M, y: 7.07, w: 10.8, h: 0.2, fontFace: BODY, fontSize: 7, italic: true, color: "769585", fit: "shrink", margin: 0 });
      slide.slideNumber = { x: W - M - 0.7, y: H - 0.4, w: 0.7, h: 0.2, align: "right", fontFace: BODY, fontSize: 8, bold: true, color: C.primary };
      break;
    }

    case "roadmap2028": {
      const H = 7.5;
      const DARK = C.secondary;
      const HI = "CDFC57";
      const SOFT = "BFD9C9";
      const laneDotColors = { primary: C.primary, accent: HI, warn: C.warn, muted: C.muted };
      slide.background = { color: DARK };

      slide.addShape("roundRect", {
        x: M, y: 0.35, w: 2.9, h: 0.32, fill: { color: DARK }, line: { color: HI, width: 1 }, rectRadius: 0.16,
      });
      slide.addText(s.badge, {
        x: M, y: 0.35, w: 2.9, h: 0.32, fontFace: HEAD, fontSize: 9, bold: true, color: HI,
        align: "center", valign: "middle", charSpacing: 1.8, margin: 0,
      });
      slide.addText(s.title, {
        x: M, y: 0.8, w: W - M * 2, h: 0.55, fontFace: HEAD, fontSize: 23, bold: true, color: C.white,
        valign: "middle", fit: "shrink", margin: 0,
      });
      slide.addText(s.subtitle, {
        x: M, y: 1.4, w: 11.4, h: 0.4, fontFace: BODY, fontSize: 10.5, color: SOFT,
        valign: "top", fit: "shrink", margin: 0,
      });

      const labelW = 1.85;
      const colGap = 0.28;
      const colW = (W - M * 2 - labelW - colGap * 4) / 3;
      const headerY = 1.95;
      s.horizons.forEach((horizon, i) => {
        const x = M + labelW + colGap + i * (colW + colGap);
        slide.addShape("line", { x, y: headerY + 0.42, w: colW, h: 0, line: { color: "5E806E", width: 0.8 } });
        slide.addShape("roundRect", { x, y: headerY, w: 0.78, h: 0.3, fill: { color: DARK }, line: { color: HI, width: 1 }, rectRadius: 0.04 });
        slide.addText(horizon.period, { x, y: headerY, w: 0.78, h: 0.3, fontFace: HEAD, fontSize: 9.5, bold: true, color: HI, align: "center", valign: "middle", margin: 0 });
        slide.addText(horizon.title, { x: x + 0.9, y: headerY, w: colW - 0.9, h: 0.3, fontFace: HEAD, fontSize: 11.5, bold: true, color: C.white, valign: "middle", fit: "shrink", margin: 0 });
      });

      const rowsTop = 2.48;
      const rowH = 0.5;
      const rowGap = 0.1;
      s.lanes.forEach((lane, i) => {
        const y = rowsTop + i * (rowH + rowGap);
        slide.addShape("ellipse", { x: M + 0.02, y: y + rowH / 2 - 0.05, w: 0.1, h: 0.1, fill: { color: laneDotColors[lane.tone] }, line: { color: laneDotColors[lane.tone] } });
        slide.addText(lane.label, {
          x: M + 0.2, y, w: labelW - 0.2, h: rowH, fontFace: HEAD, fontSize: 10, bold: true, color: C.white,
          valign: "middle", fit: "shrink", margin: 0,
        });
        lane.milestones.forEach((milestone, j) => {
          const x = M + labelW + colGap + j * (colW + colGap);
          slide.addShape("roundRect", {
            x, y, w: colW, h: rowH, fill: { color: "124A30" }, line: { color: "315D47", width: 0.75 }, rectRadius: 0.05,
          });
          slide.addText(milestone, {
            x: x + 0.14, y, w: colW - 0.28, h: rowH, fontFace: BODY, fontSize: 8.5, color: C.white,
            valign: "middle", fit: "shrink", lineSpacingMultiple: 1.1, margin: 0,
          });
        });
      });

      const driversTop = rowsTop + s.lanes.length * (rowH + rowGap) + 0.14;
      slide.addShape("line", { x: M, y: driversTop, w: W - M * 2, h: 0, line: { color: "5E806E", width: 0.8 } });
      slide.addText("STRATEGIC DRIVERS", { x: M, y: driversTop + 0.1, w: 2.4, h: 0.2, fontFace: HEAD, fontSize: 9, bold: true, color: HI, charSpacing: 1.8, margin: 0 });
      const driverW = (W - M * 2 - 0.9) / 4;
      s.drivers.forEach((driver, i) => {
        const x = M + i * (driverW + 0.3);
        slide.addText(driver.title, { x, y: driversTop + 0.34, w: driverW, h: 0.22, fontFace: HEAD, fontSize: 10, bold: true, color: C.white, fit: "shrink", margin: 0 });
        slide.addText(driver.line, { x, y: driversTop + 0.58, w: driverW, h: 0.3, fontFace: BODY, fontSize: 8, color: SOFT, valign: "top", fit: "shrink", margin: 0 });
      });
      slide.addText(s.note, { x: M, y: H - 0.28, w: 11, h: 0.18, fontFace: BODY, fontSize: 7, italic: true, color: "769585", fit: "shrink", margin: 0 });
      slide.slideNumber = { x: W - M - 0.7, y: H - 0.3, w: 0.7, h: 0.2, align: "right", fontFace: BODY, fontSize: 8, bold: true, color: C.primary };
      break;
    }

    case "valuecase": {
      const DARK = C.secondary;
      const HI = "CDFC57";
      const SOFT = "BFD9C9";
      addTopRule(slide);

      slide.addShape("roundRect", {
        x: M, y: 0.42, w: 1.92, h: 0.34, fill: { color: C.softGreen }, line: { color: C.softGreen }, rectRadius: 0.17,
      });
      slide.addText(s.badge, {
        x: M, y: 0.42, w: 1.92, h: 0.34, fontFace: HEAD, fontSize: 9, bold: true, color: C.accent,
        align: "center", valign: "middle", charSpacing: 1.7, margin: 0,
      });
      slide.addText(
        [
          { text: `${s.titleLead} `, options: { color: C.text } },
          { text: s.titleHighlight, options: { color: C.accent } },
        ],
        { x: M, y: 0.94, w: W - M * 2, h: 0.72, fontFace: HEAD, fontSize: 28, bold: true, valign: "top", fit: "shrink", margin: 0 },
      );
      slide.addText(s.thesis, {
        x: M, y: 1.72, w: W - M * 2, h: 0.5, fontFace: BODY, fontSize: 11.5, color: C.muted,
        valign: "top", fit: "shrink", margin: 0,
      });

      const leftX = M;
      const top = 2.42;
      const leftW = 5.25;
      const bodyH = 3.88;
      slide.addShape("roundRect", {
        x: leftX, y: top, w: leftW, h: bodyH, fill: { color: DARK }, line: { color: DARK }, rectRadius: 0.05,
      });
      slide.addText("FINANCIAL IMPACT TO VALIDATE", {
        x: leftX + 0.28, y: top + 0.23, w: leftW - 0.56, h: 0.24, fontFace: BODY, fontSize: 9, bold: true,
        color: HI, charSpacing: 1.4, margin: 0,
      });
      const financeTop = top + 0.64;
      const financeH = 1.0;
      s.financials.forEach((item, i) => {
        const y = financeTop + i * 1.02;
        if (i > 0) slide.addShape("line", { x: leftX + 0.28, y: y - 0.12, w: leftW - 0.56, h: 0, line: { color: "32654B", width: 0.6 } });
        slide.addText(item.label.toUpperCase(), {
          x: leftX + 0.28, y, w: 1.48, h: 0.2, fontFace: BODY, fontSize: 7.5, bold: true, color: SOFT, charSpacing: 0.8, margin: 0,
        });
        slide.addText(item.value, {
          x: leftX + 1.62, y: y - 0.03, w: leftW - 1.9, h: 0.3, fontFace: HEAD, fontSize: 14, bold: true, color: HI, fit: "shrink", margin: 0,
        });
        slide.addText(item.line, {
          x: leftX + 0.28, y: y + 0.31, w: leftW - 0.56, h: financeH - 0.38, fontFace: BODY, fontSize: 8.5,
          color: SOFT, valign: "top", fit: "shrink", margin: 0,
        });
      });

      const rightX = leftX + leftW + 0.34;
      const rightW = W - M - rightX;
      const gap = 0.22;
      const cw = (rightW - gap) / 2;
      const ch = (bodyH - gap) / 2;
      s.outcomes.forEach((outcome, i) => {
        const x = rightX + (i % 2) * (cw + gap);
        const y = top + Math.floor(i / 2) * (ch + gap);
        card(slide, x, y, cw, ch, C.border, C.white);
        slide.addShape("rect", { x, y, w: 0.06, h: ch, fill: { color: C.primary }, line: { color: C.primary } });
        slide.addText(`0${i + 1}`, {
          x: x + 0.22, y: y + 0.18, w: 0.42, h: 0.22, fontFace: HEAD, fontSize: 9, bold: true, color: C.accent, margin: 0,
        });
        slide.addText(outcome.title, {
          x: x + 0.22, y: y + 0.5, w: cw - 0.44, h: 0.35, fontFace: HEAD, fontSize: 14, bold: true, color: C.text, fit: "shrink", margin: 0,
        });
        slide.addText(outcome.line, {
          x: x + 0.22, y: y + 0.93, w: cw - 0.44, h: ch - 1.12, fontFace: BODY, fontSize: 9.2, color: C.muted,
          valign: "top", fit: "shrink", margin: 0,
        });
      });

      slide.addShape("rect", { x: M, y: 6.5, w: W - M * 2, h: 0.44, fill: { color: C.softGreen }, line: { color: C.softGreen } });
      slide.addShape("rect", { x: M, y: 6.5, w: 0.07, h: 0.44, fill: { color: C.primary }, line: { color: C.primary } });
      slide.addText(s.validation, {
        x: M + 0.2, y: 6.5, w: W - M * 2 - 0.4, h: 0.44, fontFace: BODY, fontSize: 9.5, bold: true, color: C.text,
        valign: "middle", fit: "shrink", margin: 0,
      });
      footer(slide);
      break;
    }

    case "costbenefit": {
      const DARK = C.secondary;
      const HI = "CDFC57";
      const SOFT = "BFD9C9";
      header(slide, s.eyebrow, s.title, s.subtitle);

      const top = 2.08;
      const panelH = 3.18;
      const leftX = M;
      const leftW = 5.35;
      const bridgeW = 0.72;
      const rightX = leftX + leftW + bridgeW;
      const rightW = W - M - rightX;

      card(slide, leftX, top, leftW, panelH, C.border, C.white);
      slide.addText("INCREMENTAL INVESTMENT TO 2027", {
        x: leftX + 0.24, y: top + 0.2, w: leftW - 0.48, h: 0.22, fontFace: BODY, fontSize: 8.5,
        bold: true, color: C.muted, charSpacing: 1.1, margin: 0,
      });
      s.costs.forEach((cost, i) => {
        const y = top + 0.58 + i * 0.82;
        if (i > 0) slide.addShape("line", { x: leftX + 0.24, y: y - 0.11, w: leftW - 0.48, h: 0, line: { color: C.border, width: 0.5 } });
        slide.addText(`0${i + 1}  ${cost.label}`, {
          x: leftX + 0.24, y, w: 3.15, h: 0.22, fontFace: HEAD, fontSize: 10.5, bold: true, color: C.text, fit: "shrink", margin: 0,
        });
        slide.addText(cost.value, {
          x: leftX + 3.45, y, w: leftW - 3.69, h: 0.22, fontFace: HEAD, fontSize: 10.5, bold: true, color: C.text, align: "right", fit: "shrink", margin: 0,
        });
        slide.addText(cost.items.join("  •  "), {
          x: leftX + 0.24, y: y + 0.29, w: leftW - 0.48, h: 0.3, fontFace: BODY, fontSize: 7.8, color: C.muted, fit: "shrink", margin: 0,
        });
      });

      slide.addShape("line", { x: leftX + leftW + 0.08, y: top + 1.37, w: bridgeW - 0.16, h: 0, line: { color: C.primary, width: 2, beginArrowType: "none", endArrowType: "triangle" } });
      slide.addText("VALUE\nCONVERSION", {
        x: leftX + leftW + 0.04, y: top + 1.55, w: bridgeW - 0.08, h: 0.45, fontFace: BODY, fontSize: 6.2,
        bold: true, color: C.accent, align: "center", valign: "middle", fit: "shrink", margin: 0,
      });

      slide.addShape("roundRect", { x: rightX, y: top, w: rightW, h: panelH, fill: { color: DARK }, line: { color: DARK }, rectRadius: 0.05 });
      slide.addText("VALUE POOLS FROM THE VALUE CASE", {
        x: rightX + 0.24, y: top + 0.2, w: rightW - 0.48, h: 0.22, fontFace: BODY, fontSize: 8.5,
        bold: true, color: HI, charSpacing: 1.1, margin: 0,
      });
      s.valuePools.forEach((pool, i) => {
        const y = top + 0.58 + i * 0.82;
        if (i > 0) slide.addShape("line", { x: rightX + 0.24, y: y - 0.11, w: rightW - 0.48, h: 0, line: { color: "32654B", width: 0.5 } });
        slide.addText(`0${i + 1}  ${pool.label.toUpperCase()}`, {
          x: rightX + 0.24, y, w: 1.75, h: 0.18, fontFace: BODY, fontSize: 7, bold: true, color: SOFT, charSpacing: 0.5, fit: "shrink", margin: 0,
        });
        slide.addText(pool.value, {
          x: rightX + 2.02, y: y - 0.02, w: rightW - 2.26, h: 0.24, fontFace: HEAD, fontSize: 11.5, bold: true, color: HI, align: "right", fit: "shrink", margin: 0,
        });
        slide.addText(pool.line, {
          x: rightX + 0.24, y: y + 0.28, w: rightW - 0.48, h: 0.31, fontFace: BODY, fontSize: 7.8, color: SOFT, fit: "shrink", margin: 0,
        });
      });

      slide.addShape("roundRect", { x: M, y: 5.46, w: W - M * 2, h: 0.48, fill: { color: C.softGreen }, line: { color: C.primary, transparency: 55, width: 0.7 }, rectRadius: 0.04 });
      slide.addText(s.equation, { x: M + 0.2, y: 5.46, w: W - M * 2 - 0.4, h: 0.48, fontFace: HEAD, fontSize: 10.5, bold: true, color: C.text, align: "center", valign: "middle", fit: "shrink", margin: 0 });

      const gateY = 6.1;
      const gateW = (W - M * 2) / s.gates.length;
      s.gates.forEach((gate, i) => {
        const x = M + i * gateW;
        slide.addShape("rect", { x, y: gateY, w: gateW, h: 0.36, fill: { color: i % 2 ? C.softGray : C.white }, line: { color: C.border, width: 0.4 } });
        slide.addShape("rect", { x, y: gateY, w: 0.05, h: 0.36, fill: { color: C.primary }, line: { color: C.primary } });
        slide.addText(`0${i + 1}  ${gate}`, { x: x + 0.14, y: gateY, w: gateW - 0.24, h: 0.36, fontFace: BODY, fontSize: 8, bold: true, color: C.text, valign: "middle", fit: "shrink", margin: 0 });
      });

      slide.addShape("roundRect", { x: M, y: 6.61, w: W - M * 2, h: 0.48, fill: { color: C.secondary }, line: { color: C.secondary }, rectRadius: 0.04 });
      slide.addShape("rect", { x: M, y: 6.61, w: 1.5, h: 0.48, fill: { color: C.primary }, line: { color: C.primary } });
      slide.addText("BOARD DECISION", { x: M + 0.12, y: 6.61, w: 1.26, h: 0.48, fontFace: BODY, fontSize: 7.5, bold: true, color: C.secondary, align: "center", valign: "middle", margin: 0 });
      slide.addText(s.decision, { x: M + 1.7, y: 6.66, w: W - M * 2 - 1.9, h: 0.38, fontFace: BODY, fontSize: 8.5, bold: true, color: C.white, valign: "middle", fit: "shrink", margin: 0 });
      footer(slide);
      break;
    }

    case "competitor": {
      addTopRule(slide);
      slide.addText(s.eyebrow.toUpperCase(), {
        x: M, y: 0.35, w: 7.8, h: 0.25, fontFace: BODY, fontSize: 9, bold: true, color: C.accent, charSpacing: 1.5, margin: 0,
      });
      slide.addText(s.title, {
        x: M, y: 0.74, w: W - M * 2, h: 0.72, fontFace: HEAD, fontSize: 27, bold: true, color: C.text, fit: "shrink", margin: 0,
      });
      slide.addText(s.subtitle, {
        x: M, y: 1.48, w: W - M * 2, h: 0.5, fontFace: BODY, fontSize: 11, color: C.muted, fit: "shrink", margin: 0,
      });

      const tableX = M;
      const tableY = 2.15;
      const tableW = W - M * 2;
      const widths = [1.15, 1.55, 4.1, 1.45, 4.0];
      const headerH = 0.43;
      const rowH = 0.62;
      let x = tableX;
      s.headers.forEach((label, i) => {
        slide.addShape("rect", { x, y: tableY, w: widths[i], h: headerH, fill: { color: C.secondary }, line: { color: "397257", width: 0.45 } });
        slide.addText(label.toUpperCase(), { x: x + 0.1, y: tableY, w: widths[i] - 0.2, h: headerH, fontFace: BODY, fontSize: 7.6, bold: true, color: C.white, charSpacing: 0.7, valign: "middle", fit: "shrink", margin: 0 });
        x += widths[i];
      });
      s.rows.forEach((row, ri) => {
        const y = tableY + headerH + ri * rowH;
        const fill = row.featured ? C.softGreen : ri % 2 ? C.softGray : C.white;
        const values = [row.company, row.price, row.scope, row.ai, row.position];
        let cellX = tableX;
        values.forEach((value, ci) => {
          slide.addShape("rect", { x: cellX, y, w: widths[ci], h: rowH, fill: { color: fill }, line: { color: C.border, width: 0.45 } });
          if (ci === 3) {
            const badgeColor = value === "Advanced" ? C.warn : C.primary;
            slide.addShape("roundRect", { x: cellX + 0.12, y: y + 0.18, w: widths[ci] - 0.24, h: 0.27, fill: { color: value === "Advanced" ? C.softAmber : C.softGreen }, line: { color: badgeColor, transparency: 55, width: 0.5 }, rectRadius: 0.12 });
            slide.addText(value, { x: cellX + 0.12, y: y + 0.18, w: widths[ci] - 0.24, h: 0.27, fontFace: BODY, fontSize: 7.7, bold: true, color: value === "Advanced" ? "A65B00" : C.accent, align: "center", valign: "middle", fit: "shrink", margin: 0 });
          } else {
            slide.addText(value, { x: cellX + 0.1, y: y + 0.08, w: widths[ci] - 0.2, h: rowH - 0.16, fontFace: BODY, fontSize: ci === 0 ? 9.2 : 8.1, bold: ci === 0 || ci === 4, color: row.featured && ci === 0 ? C.accent : C.text, valign: "middle", fit: "shrink", margin: 0 });
          }
          cellX += widths[ci];
        });
      });

      const calloutY = 5.88;
      slide.addShape("roundRect", { x: M, y: calloutY, w: W - M * 2, h: 0.67, fill: { color: C.secondary }, line: { color: C.secondary }, rectRadius: 0.04 });
      slide.addShape("rect", { x: M, y: calloutY, w: 1.65, h: 0.67, fill: { color: C.primary }, line: { color: C.primary } });
      slide.addText("BOARD IMPLICATION", { x: M + 0.13, y: calloutY, w: 1.39, h: 0.67, fontFace: BODY, fontSize: 8, bold: true, color: C.secondary, charSpacing: 0.7, align: "center", valign: "middle", fit: "shrink", margin: 0 });
      slide.addText(s.takeaway, { x: M + 1.86, y: calloutY + 0.08, w: W - M * 2 - 2.08, h: 0.51, fontFace: BODY, fontSize: 9.5, bold: true, color: C.white, valign: "middle", fit: "shrink", margin: 0 });
      slide.addText(s.source, { x: M, y: 6.65, w: W - M * 2, h: 0.25, fontFace: BODY, fontSize: 7.2, color: C.muted, fit: "shrink", margin: 0 });
      footer(slide);
      break;
    }

    case "pricing": {
      addTopRule(slide);
      slide.addText(s.eyebrow.toUpperCase(), {
        x: M, y: 0.35, w: 7.8, h: 0.25, fontFace: BODY, fontSize: 9, bold: true, color: C.accent, charSpacing: 1.5, margin: 0,
      });
      slide.addText(s.title, {
        x: M, y: 0.74, w: W - M * 2, h: 0.7, fontFace: HEAD, fontSize: 27, bold: true, color: C.text, fit: "shrink", margin: 0,
      });
      slide.addText(s.subtitle, {
        x: M, y: 1.47, w: W - M * 2, h: 0.48, fontFace: BODY, fontSize: 10.5, color: C.muted, fit: "shrink", margin: 0,
      });

      const leftX = M;
      const top = 2.08;
      const leftW = 8.1;
      const rightX = leftX + leftW + 0.28;
      const rightW = W - M - rightX;
      const tierGap = 0.16;
      const tierW = (leftW - tierGap * 2) / 3;
      const tierH = 2.7;
      s.tiers.forEach((tier, i) => {
        const x = leftX + i * (tierW + tierGap);
        const fill = tier.featured ? C.secondary : C.white;
        const ink = tier.featured ? C.white : C.text;
        const soft = tier.featured ? "BFD9C9" : C.muted;
        card(slide, x, top, tierW, tierH, tier.featured ? C.primary : C.border, fill);
        slide.addShape("rect", { x, y: top, w: tierW, h: 0.07, fill: { color: C.primary }, line: { color: C.primary } });
        slide.addText(`TIER 0${i + 1}`, { x: x + 0.18, y: top + 0.17, w: 0.75, h: 0.2, fontFace: BODY, fontSize: 7.5, bold: true, color: tier.featured ? "CDFC57" : C.accent, charSpacing: 0.8, margin: 0 });
        if (tier.featured) slide.addText("RECOMMENDED", { x: x + tierW - 1.05, y: top + 0.17, w: 0.87, h: 0.2, fontFace: BODY, fontSize: 6.5, bold: true, color: "CDFC57", align: "right", margin: 0 });
        slide.addText(tier.name, { x: x + 0.18, y: top + 0.45, w: tierW - 0.36, h: 0.35, fontFace: HEAD, fontSize: 15, bold: true, color: ink, fit: "shrink", margin: 0 });
        slide.addText(tier.buyer, { x: x + 0.18, y: top + 0.83, w: tierW - 0.36, h: 0.42, fontFace: BODY, fontSize: 8.3, color: soft, valign: "top", fit: "shrink", margin: 0 });
        slide.addShape("line", { x: x + 0.18, y: top + 1.35, w: tierW - 0.36, h: 0, line: { color: tier.featured ? "397257" : C.border, width: 0.6 } });
        slide.addText(tier.price, { x: x + 0.18, y: top + 1.48, w: tierW - 0.36, h: 0.32, fontFace: HEAD, fontSize: 11.5, bold: true, color: tier.featured ? "CDFC57" : C.text, fit: "shrink", margin: 0 });
        const bullets = tier.includes.map((item) => ({ text: item, options: { bullet: { indent: 9 }, hanging: 3, breakLine: true } }));
        slide.addText(bullets, { x: x + 0.18, y: top + 1.91, w: tierW - 0.36, h: 0.62, fontFace: BODY, fontSize: 7.8, color: soft, breakLine: false, paraSpaceAfter: 4, valign: "top", fit: "shrink", margin: 0 });
      });

      const scaleY = top + tierH + 0.16;
      const scaleW = leftW / 4;
      s.scaleUnits.forEach((unit, i) => {
        const x = leftX + i * scaleW;
        slide.addShape("rect", { x, y: scaleY, w: scaleW, h: 0.74, fill: { color: i % 2 ? C.softGray : C.card }, line: { color: C.border, width: 0.45 } });
        slide.addText(unit.label.toUpperCase(), { x: x + 0.12, y: scaleY + 0.12, w: scaleW - 0.24, h: 0.16, fontFace: BODY, fontSize: 6.7, bold: true, color: C.accent, charSpacing: 0.5, fit: "shrink", margin: 0 });
        slide.addText(unit.value, { x: x + 0.12, y: scaleY + 0.36, w: scaleW - 0.24, h: 0.25, fontFace: BODY, fontSize: 7.8, bold: true, color: C.text, fit: "shrink", margin: 0 });
      });

      slide.addShape("roundRect", { x: rightX, y: top, w: rightW, h: 3.6, fill: { color: C.white }, line: { color: C.border, width: 0.7 }, rectRadius: 0.04 });
      slide.addShape("rect", { x: rightX, y: top, w: rightW, h: 0.43, fill: { color: C.secondary }, line: { color: C.secondary } });
      slide.addText("BUYING-MODEL BENCHMARK", { x: rightX + 0.16, y: top, w: rightW - 0.32, h: 0.43, fontFace: BODY, fontSize: 7.5, bold: true, color: C.white, charSpacing: 0.8, valign: "middle", margin: 0 });
      const benchmarkH = (3.6 - 0.43) / s.competitors.length;
      s.competitors.forEach((item, i) => {
        const y = top + 0.43 + i * benchmarkH;
        slide.addShape("rect", { x: rightX, y, w: rightW, h: benchmarkH, fill: { color: item.company === "RA+" ? C.softGreen : i % 2 ? C.softGray : C.white }, line: { color: C.border, width: 0.35 } });
        slide.addText(item.company, { x: rightX + 0.15, y: y + 0.1, w: 0.78, h: 0.2, fontFace: HEAD, fontSize: 8.8, bold: true, color: item.company === "RA+" ? C.accent : C.text, fit: "shrink", margin: 0 });
        slide.addText(item.transparency, { x: rightX + 1.0, y: y + 0.1, w: rightW - 1.15, h: 0.18, fontFace: BODY, fontSize: 6.8, bold: true, color: C.muted, align: "right", fit: "shrink", margin: 0 });
        slide.addText(item.model, { x: rightX + 0.15, y: y + 0.34, w: rightW - 0.3, h: benchmarkH - 0.4, fontFace: BODY, fontSize: 7.5, color: C.text, fit: "shrink", margin: 0 });
      });

      const calloutY = 6.03;
      slide.addShape("roundRect", { x: M, y: calloutY, w: W - M * 2, h: 0.55, fill: { color: C.secondary }, line: { color: C.secondary }, rectRadius: 0.04 });
      slide.addShape("rect", { x: M, y: calloutY, w: 1.5, h: 0.55, fill: { color: C.primary }, line: { color: C.primary } });
      slide.addText("BOARD DECISION", { x: M + 0.12, y: calloutY, w: 1.26, h: 0.55, fontFace: BODY, fontSize: 7.5, bold: true, color: C.secondary, align: "center", valign: "middle", margin: 0 });
      slide.addText(s.decision, { x: M + 1.7, y: calloutY + 0.07, w: W - M * 2 - 1.9, h: 0.41, fontFace: BODY, fontSize: 8.8, bold: true, color: C.white, valign: "middle", fit: "shrink", margin: 0 });
      slide.addText(s.source, { x: M, y: 6.68, w: W - M * 2, h: 0.2, fontFace: BODY, fontSize: 6.8, color: C.muted, fit: "shrink", margin: 0 });
      footer(slide);
      break;
    }


    case "features": {
      header(slide, s.eyebrow, s.title, s.subtitle);
      const heads = ["Capability", "What RA+ delivers", "Expected Position", "Market benchmark"];
      const widths = [2.2, 4.15, 1.5, 4.12];
      const tX = M;
      const tY = bodyTop(s);
      const headerH = 0.4;
      const rowH = Math.min(0.58, (5.75 - tY - headerH) / Math.max(1, s.rows.length));
      let hx = tX;
      heads.forEach((label, i) => {
        slide.addShape("rect", { x: hx, y: tY, w: widths[i], h: headerH, fill: { color: C.secondary }, line: { color: "397257", width: 0.45 } });
        slide.addText(label.toUpperCase(), { x: hx + 0.1, y: tY, w: widths[i] - 0.2, h: headerH, fontFace: BODY, fontSize: 7.6, bold: true, color: C.white, charSpacing: 0.7, valign: "middle", fit: "shrink", margin: 0 });
        hx += widths[i];
      });
      s.rows.forEach((row, ri) => {
        const y = tY + headerH + ri * rowH;
        const fill = ri % 2 ? C.softGray : C.white;
        const values = [row.capability, row.detail, row.position, row.benchmark];
        let cx = tX;
        values.forEach((value, ci) => {
          slide.addShape("rect", { x: cx, y, w: widths[ci], h: rowH, fill: { color: fill }, line: { color: C.border, width: 0.45 } });
          if (ci === 2) {
            const lead = value === "Market leading";
            const gap = value === "Closing gap" || value === "Behind";
            slide.addShape("roundRect", { x: cx + 0.08, y: y + (rowH - 0.26) / 2, w: widths[ci] - 0.16, h: 0.26, fill: { color: lead ? C.softGreen : gap ? C.softAmber : C.softGray }, line: { color: lead ? C.primary : gap ? C.warn : C.border, width: 0.5 }, rectRadius: 0.12 });
            slide.addText(value, { x: cx + 0.08, y: y + (rowH - 0.26) / 2, w: widths[ci] - 0.16, h: 0.26, fontFace: BODY, fontSize: 7.4, bold: true, color: lead ? C.accent : gap ? "A65B00" : C.muted, align: "center", valign: "middle", fit: "shrink", margin: 0 });
          } else {
            slide.addText(value, { x: cx + 0.1, y: y + 0.05, w: widths[ci] - 0.2, h: rowH - 0.1, fontFace: BODY, fontSize: ci === 0 ? 9 : 8, bold: ci === 0, color: ci === 3 ? C.muted : C.text, valign: "middle", fit: "shrink", margin: 0 });
          }
          cx += widths[ci];
        });
      });
      const cY = 5.95;
      slide.addShape("roundRect", { x: M, y: cY, w: W - M * 2, h: 0.6, fill: { color: C.secondary }, line: { color: C.secondary }, rectRadius: 0.04 });
      slide.addShape("rect", { x: M, y: cY, w: 1.65, h: 0.6, fill: { color: C.primary }, line: { color: C.primary } });
      slide.addText("BOARD IMPLICATION", { x: M + 0.13, y: cY, w: 1.39, h: 0.6, fontFace: BODY, fontSize: 8, bold: true, color: C.secondary, charSpacing: 0.7, align: "center", valign: "middle", fit: "shrink", margin: 0 });
      slide.addText(s.takeaway, { x: M + 1.86, y: cY + 0.06, w: W - M * 2 - 2.08, h: 0.48, fontFace: BODY, fontSize: 9.5, bold: true, color: C.white, valign: "middle", fit: "shrink", margin: 0 });
      slide.addText(s.source, { x: M, y: 6.62, w: W - M * 2, h: 0.25, fontFace: BODY, fontSize: 7.2, color: C.muted, fit: "shrink", margin: 0 });
      footer(slide);
      break;
    }

    case "journey": {
      header(slide, s.eyebrow, s.title, s.subtitle);
      const top = bodyTop(s);
      const DARK = C.secondary;
      const HI = "CDFC57";
      const n = s.stages.length;
      const gap = 0.24;
      const cw = (W - M * 2 - gap * (n - 1)) / n;
      // Estimate wrapped line counts so each label/text block gets the height it needs (no overlap).
      // If content is too tall for the available space, scale the body font down instead of clipping.
      const rowsOf = (st: (typeof s.stages)[number]): [string, string][] => [
        ["Buyer moment", st.buyer],
        ["Products", st.products],
        ["Value", st.value],
        ["Expansion trigger", st.trigger],
      ];
      const heightsAt = (font: number) => {
        const charsPerLine = Math.max(18, (cw - 0.5) / (font * 0.0082));
        const lineH = (font * 1.18) / 72;
        return s.stages.map((st) => rowsOf(st).map(([, text]) => 0.2 + Math.ceil(text.length / charsPerLine) * lineH + 0.07));
      };
      const hasProof = Array.isArray(s.proof) && s.proof.length > 0;
      const proofReserve = hasProof ? 1.24 : 0.5; // reserve proof row + takeaway bar + gaps, or just takeaway gap
      const availH = 6.8 - top - proofReserve;
      let bodyFont = 8;
      let heights = heightsAt(bodyFont);
      let contentH = Math.max(...heights.map((h) => h.reduce((a, b) => a + b, 0)));
      if (1.0 + contentH + 0.14 > availH) {
        bodyFont = Math.max(6.5, 8 * (availH - 1.14) / contentH);
        heights = heightsAt(bodyFont);
        contentH = Math.max(...heights.map((h) => h.reduce((a, b) => a + b, 0)));
      }
      const stageH = Math.min(1.0 + contentH + 0.14, availH);
      s.stages.forEach((st, i) => {
        const x = M + i * (cw + gap);
        const dark = st.tone === "accent";
        slide.addShape("roundRect", {
          x, y: top, w: cw, h: stageH, fill: { color: dark ? DARK : C.white },
          line: { color: dark ? DARK : C.border, width: 0.8 }, rectRadius: 0.04,
        });
        slide.addShape("rect", { x, y: top, w: 0.07, h: stageH, fill: { color: dark ? HI : C.primary }, line: { color: dark ? HI : C.primary } });
        const headCol = dark ? HI : C.accent;
        const textCol = dark ? "DCE9E1" : C.text;
        const mutedCol = dark ? "BFD9C9" : C.muted;
        slide.addText(st.stage.toUpperCase(), {
          x: x + 0.24, y: top + 0.16, w: cw - 0.48, h: 0.26, fontFace: BODY, fontSize: 8.5, bold: true, color: headCol, charSpacing: 1.2, fit: "shrink", margin: 0,
        });
        slide.addText(st.title, {
          x: x + 0.24, y: top + 0.44, w: cw - 0.48, h: 0.5, fontFace: HEAD, fontSize: 13.5, bold: true, color: dark ? C.white : C.text, valign: "top", fit: "shrink", margin: 0,
        });
        const heightsFor = heights[i];
        let y = top + 1.02;
        rowsOf(st).forEach(([label, text], j) => {
          slide.addText(label.toUpperCase(), {
            x: x + 0.24, y, w: cw - 0.48, h: 0.15, fontFace: BODY, fontSize: 7, bold: true, color: headCol, charSpacing: 0.8, margin: 0,
          });
          slide.addText(text, {
            x: x + 0.24, y: y + 0.16, w: cw - 0.48, h: heightsFor[j] - 0.23, fontFace: BODY, fontSize: bodyFont,
            color: j === 0 ? textCol : mutedCol, valign: "top", fit: "shrink", lineSpacingMultiple: 1.05, margin: 0,
          });
          y += heightsFor[j];
        });
        if (i < n - 1) {
          slide.addText("→", { x: x + cw - 0.02, y: top + stageH / 2 - 0.15, w: gap + 0.06, h: 0.3, fontFace: BODY, fontSize: 14, bold: true, color: C.primary, align: "center", valign: "middle", margin: 0 });
        }
      });

      let takeY = top + stageH + 0.16;
      if (hasProof) {
        const proofTop = top + stageH + 0.16;
        const proofH = 0.6;
        s.proof.forEach((p, i) => {
          const x = M + i * (cw + gap);
          slide.addShape("roundRect", { x, y: proofTop, w: cw, h: proofH, fill: { color: C.softGreen }, line: { color: C.softGreen }, rectRadius: 0.03 });
          slide.addText(p.label.toUpperCase(), {
            x: x + 0.18, y: proofTop + 0.08, w: cw - 0.36, h: 0.16, fontFace: BODY, fontSize: 7.5, bold: true, color: C.accent, charSpacing: 1, margin: 0,
          });
          slide.addText(p.value, {
            x: x + 0.18, y: proofTop + 0.26, w: cw - 0.36, h: proofH - 0.34, fontFace: BODY, fontSize: 7.5, color: C.text, valign: "top", fit: "shrink", margin: 0,
          });
        });
        takeY = proofTop + proofH + 0.14;
      }
      slide.addShape("rect", { x: M, y: takeY, w: W - M * 2, h: 0.36, fill: { color: C.softGreen }, line: { color: C.softGreen } });
      slide.addShape("rect", { x: M, y: takeY, w: 0.07, h: 0.36, fill: { color: C.primary }, line: { color: C.primary } });
      slide.addText(s.takeaway, {
        x: M + 0.2, y: takeY, w: W - M * 2 - 0.4, h: 0.36, fontFace: BODY, fontSize: 10, bold: true, color: C.text,
        valign: "middle", fit: "shrink", margin: 0,
      });
      footer(slide);
      break;
    }

    case "closing": {
      header(slide, s.eyebrow, s.title, s.subtitle);
      const top = bodyTop(s);
      const n = s.asks.length;
      const gap = 0.3;
      const cw = (W - M * 2 - gap * (n - 1)) / n;
      const maxLine = Math.max(...s.asks.map((a) => a.line.length));
      const lineRows = Math.ceil(maxLine / Math.max(28, cw * 20));
      const h = Math.min(3.0, Math.max(1.9, 1.35 + lineRows * 0.3), 6.85 - top);
      const bandTop = top + Math.max(0, (6.6 - top - h) / 2.4);
      s.asks.forEach((a, i) => {
        const x = M + i * (cw + gap);
        slide.addShape("roundRect", {
          x, y: bandTop, w: cw, h, fill: { color: C.white }, line: { color: C.border, width: 0.8 }, rectRadius: 0.04,
        });
        slide.addShape("rect", { x, y: bandTop, w: 0.07, h, fill: { color: C.primary }, line: { color: C.primary } });
        slide.addText(`DECISION ${String(i + 1).padStart(2, "0")}`, {
          x: x + 0.25, y: bandTop + 0.22, w: cw - 0.5, h: 0.3, fontFace: BODY, fontSize: 10, bold: true, color: C.accent, charSpacing: 1.5, margin: 0,
        });
        slide.addText(a.title, {
          x: x + 0.25, y: bandTop + 0.56, w: cw - 0.5, h: 0.5, fontFace: HEAD, fontSize: 16, bold: true, color: C.text, valign: "top", fit: "shrink", margin: 0,
        });
        slide.addText(a.line, {
          x: x + 0.25, y: bandTop + 1.1, w: cw - 0.5, h: h - 1.32, fontFace: BODY, fontSize: 12.5, color: C.text, valign: "top", fit: "shrink", margin: 0,
        });
      });

      footer(slide);
      break;
    }
  }
}

/**
 * PptxGenJS compatibility repairs for strict desktop PowerPoint:
 *  - PptxGenJS 4.0.1 emits notes parts even when the deck has no speaker notes.
 *    Those generated notes-master placeholders are rejected by some desktop
 *    PowerPoint versions, so remove the unused notes graph completely.
 *  - PptxGenJS 4.0.1 declares JPEG files as the non-standard `image/jpg`.
 *    Desktop Office expects the registered `image/jpeg` content type.
 *  - the slide-number placeholder can reuse a shape id already used on the same
 *    slide, so duplicate shape-tree ids are renumbered per slide.
 */
export async function patchPptxCompatibility(data: ArrayBuffer | Uint8Array) {
  const { default: JSZip } = await import("jszip");
  const zip = await JSZip.loadAsync(data);

  const entry = zip.file("ppt/presentation.xml");
  if (entry) {
    const xml = await entry.async("text");
    zip.file(
      "ppt/presentation.xml",
      xml.replace(/<p:notesMasterIdLst>[\s\S]*?<\/p:notesMasterIdLst>/g, ""),
    );
  }

  const presentationRelsEntry = zip.file("ppt/_rels/presentation.xml.rels");
  if (presentationRelsEntry) {
    const xml = await presentationRelsEntry.async("text");
    zip.file(
      "ppt/_rels/presentation.xml.rels",
      xml.replace(/<Relationship\b(?=[^>]*relationships\/notesMaster)[^>]*\/>/g, ""),
    );
  }

  const contentTypesEntry = zip.file("[Content_Types].xml");
  if (contentTypesEntry) {
    const xml = await contentTypesEntry.async("text");
    const existingParts = new Set(
      Object.keys(zip.files)
        .filter((name) => !zip.files[name]?.dir)
        .map((name) => `/${name}`),
    );
    zip.file(
      "[Content_Types].xml",
      xml
        .replace(/ContentType="image\/jpg"/g, 'ContentType="image/jpeg"')
        .replace(/<Override\b[^>]*PartName="([^"]+)"[^>]*\/>/g, (override, partName) =>
          existingParts.has(partName) && !partName.startsWith("/ppt/notesMasters/") && !partName.startsWith("/ppt/notesSlides/")
            ? override
            : "",
        ),
    );
  }

  for (const name of Object.keys(zip.files)) {
    if (/^ppt\/notes(?:Masters|Slides)\//.test(name)) zip.remove(name);
  }

  const slideNames = Object.keys(zip.files).filter((n) => /^ppt\/slides\/slide\d+\.xml$/.test(n));
  for (const name of slideNames) {
    const slideEntry = zip.file(name);
    if (!slideEntry) continue;
    const xml = await slideEntry.async("text");
    const seen = new Set<string>();
    let next = 1;
    const uniqueIds = xml.replace(/(<p:cNvPr[^>]*\sid=")(\d+)(")/g, (_m, pre, id, post) => {
      if (!seen.has(id)) {
        seen.add(id);
        next = Math.max(next, Number(id));
        return `${pre}${id}${post}`;
      }
      next += 1;
      while (seen.has(String(next))) next += 1;
      seen.add(String(next));
      return `${pre}${next}${post}`;
    });
    // PptxGenJS emits runs such as "▪ " and "SE " without xml:space.
    // Desktop PowerPoint repairs those runs, so preserve edge whitespace here.
    const fixed = uniqueIds.replace(
      /<a:t(?![^>]*\bxml:space=)([^>]*)>([\s\S]*?)<\/a:t>/g,
      (run, attrs, text) => (/^\s|\s$/.test(text) ? `<a:t xml:space="preserve"${attrs}>${text}</a:t>` : run),
    );
    if (fixed !== xml) zip.file(name, fixed);

    const relsName = name.replace("ppt/slides/", "ppt/slides/_rels/") + ".rels";
    const relsEntry = zip.file(relsName);
    if (relsEntry) {
      const rels = await relsEntry.async("text");
      zip.file(
        relsName,
        rels.replace(/<Relationship\b(?=[^>]*relationships\/notesSlide)[^>]*\/>/g, ""),
      );
    }
  }

  return zip.generateAsync({ type: "uint8array", compression: "DEFLATE" });
}


async function writeDeck(slides: CPSlide[], fileName: string, title: string) {
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_WIDE";
  pptx.author = "Schneider Electric, Sustainability Business";
  pptx.title = title;

  slides.forEach((s) => renderSlide(pptx, s));

  const raw = (await pptx.write({ outputType: "arraybuffer" })) as ArrayBuffer;
  const bytes = await patchPptxCompatibility(raw);

  if (typeof document !== "undefined") {
    const url = URL.createObjectURL(
      new Blob([bytes as BlobPart], {
        type: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName.split("/").pop() ?? fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10000);
  }

  return { slides: slides.length, fileName, bytes };
}


/** Native, editable PowerPoint (real text boxes and shapes) for a list of slides. */
export async function buildEditablePptx(slides: CPSlide[], fileName: string) {
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_WIDE";
  pptx.author = "Schneider Electric, Sustainability Business";
  pptx.title = "RA+ Platform Roadmap 2026 and 2027 (editable)";
  slides.forEach((s) => renderSlide(pptx, s));
  const raw = (await pptx.write({ outputType: "arraybuffer" })) as ArrayBuffer;
  const bytes = await patchPptxCompatibility(raw);
  return {
    blob: new Blob([bytes as BlobPart], {
      type: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    }),
    fileName,
    slideCount: slides.length,
  };
}

export async function exportDeckToPptx(fileName = "RA-Plus-Strategy-and-Roadmap.pptx") {
  return writeDeck(cpDeck, fileName, "Carbon Performance Roadmap 2026 and 2027");
}

/** Index of the section divider carrying the given number, or -1. */
const sectionIndex = (num: string) =>
  cpDeck.findIndex((s) => s.kind === "section" && s.number === num);

export type DeckPart = {
  id: string;
  label: string;
  description: string;
  fileName: string;
  start: number;
  end: number;
};

/**
 * The deck is split at its main section dividers so each download stays light
 * enough to open and email. Boundaries fall back gracefully if a divider moves.
 */
export function getDeckParts(): DeckPart[] {
  const total = cpDeck.length;
  const clamp = (i: number, fallback: number) => (i > 0 ? i : fallback);
  const introEnd = clamp(sectionIndex("01"), 16);
  const b1 = clamp(sectionIndex("02"), Math.round(total * 0.25));
  const organizationStart = clamp(sectionIndex("04A"), Math.round(total * 0.4));
  const collaborationStart = clamp(sectionIndex("04B"), Math.round(total * 0.45));
  const b2 = clamp(sectionIndex("A"), Math.round(total * 0.5));
  const b3 = clamp(sectionIndex("05"), Math.round(total * 0.75));

  return [
    {
      id: "roadmap-foundations",
      label: "1. Roadmap foundations",
      description: "What a roadmap is, why it matters and how certainty works",
      fileName: "RA-Plus-Roadmap-1-Foundations.pptx",
      start: 0,
      end: introEnd,
    },
    {
      id: "part1",
      label: "2. Platform",
      description: "The RA+ platform, data spine and convergence",
      fileName: "RA-Plus-Roadmap-2-Platform.pptx",
      start: introEnd,
      end: b1,
    },
    {
      id: "part2",
      label: "3. Market & roadmap",
      description: "Competition, positioning and the roadmap boards",
      fileName: "RA-Plus-Roadmap-3-Market-and-Roadmap.pptx",
      start: b1,
      end: organizationStart,
    },
    {
      id: "product-team-organization",
      label: "4. Product team organization",
      description: "Product ownership, shared platform areas, Sera and leadership",
      fileName: "RA-Plus-Roadmap-4-Product-Team-Organization.pptx",
      start: organizationStart,
      end: collaborationStart,
    },
    {
      id: "collaboration-governance",
      label: "5. Product collaboration & governance",
      description: "Planning governance, GSP linkage, regional testing and cross-team alignment",
      fileName: "RA-Plus-Roadmap-5-Product-Collaboration-and-Governance.pptx",
      start: collaborationStart,
      end: b2,
    },
    {
      id: "part3",
      label: "6. Product detail (appendix)",
      description: "Q4 2026 product by product plans",
      fileName: "RA-Plus-Roadmap-6-Product-Detail.pptx",
      start: b2,
      end: b3,
    },
    {
      id: "part4",
      label: "7. 2027 direction",
      description: "2027 product bets and the long-term platform path",
      fileName: "RA-Plus-Roadmap-7-2027-Direction.pptx",
      start: b3,
      end: total,
    },
  ].filter((p) => p.end > p.start);
}

export async function exportDeckPartToPptx(partId: string) {
  const part = getDeckParts().find((p) => p.id === partId);
  if (!part) throw new Error(`Unknown deck part: ${partId}`);
  const slides = cpDeck.slice(part.start, part.end);
  // Keep the deck cover in front of every part for context.
  const cover = cpDeck[0];
  const withCover = part.start === 0 || cover.kind !== "title" ? slides : [cover, ...slides];
  return writeDeck(withCover, part.fileName, `RA+ Roadmap, ${part.label}`);
}
