import { mkdirSync, writeFileSync } from "node:fs";
import { cpDeck } from "../src/data/cp-roadmap-deck";
import { buildEditablePptx } from "../src/lib/pptx-export";

const outDir = process.argv[2] ?? "/mnt/documents";
mkdirSync(outDir, { recursive: true });
const fileName = "RA-Plus-Strategy-and-Roadmap-Editable-v10.pptx";
const prepared = await buildEditablePptx(cpDeck, fileName);
writeFileSync(`${outDir}/${fileName}`, new Uint8Array(await prepared.blob.arrayBuffer()));
console.log(`Generated ${fileName} with ${prepared.slideCount} editable slides`);