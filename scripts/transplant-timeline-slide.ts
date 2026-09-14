// Regenerates the deck with pptxgenjs, then transplants ONLY the requested
// slide XML into the validated PowerPoint-compatible package, keeping its
// package structure (content types, rels, masters) untouched.
import JSZip from "jszip";
import { readFileSync, writeFileSync } from "node:fs";
import { exportDeckToPptx } from "../src/lib/pptx-export";
import { cpDeck } from "../src/data/cp-roadmap-deck";

const TARGET = "public/RA-Plus-Strategy-and-Roadmap-PowerPoint-Compatible.pptx";
const MIRROR = "public/RA-Plus-Strategy-and-Roadmap.pptx";
const TMP = "/tmp/regen-roadmap.pptx";

const titles = process.argv.slice(2);
if (titles.length === 0) throw new Error("Pass slide titles to transplant");

await exportDeckToPptx(TMP);
const fresh = await JSZip.loadAsync(readFileSync(TMP));
const target = await JSZip.loadAsync(readFileSync(TARGET));

const deckIndexOf = (title: string) =>
  cpDeck.findIndex((s) => (s as { title?: string }).title === title);

for (const title of titles) {
  const i = deckIndexOf(title);
  if (i < 0) throw new Error(`Slide not found in deck data: ${title}`);
  // export adds a cover slide at position 1
  const n = i + 2;
  const path = `ppt/slides/slide${n}.xml`;
  const xml = await fresh.file(path)?.async("text");
  if (!xml) throw new Error(`No regenerated ${path}`);
  if (!target.file(path)) throw new Error(`Target has no ${path}`);
  let nextId = 2;
  const unique = xml.replace(/(<[ap]:cNvPr\b[^>]*\sid=")\d+(")/g, (_m, a, b) => `${a}${nextId++}${b}`);
  target.file(path, unique);
  console.log(`Transplanted ${path} <- "${title}"`);
}

const out = await target.generateAsync({ type: "nodebuffer", compression: "DEFLATE" });
writeFileSync(TARGET, out);
writeFileSync(MIRROR, out);
console.log("Wrote", out.length, "bytes");
