// Regenerates the static roadmap PowerPoint from the live deck data using
// pptxgenjs' native writer (no manual ZIP rewriting, which breaks PowerPoint).
import { exportDeckToPptx } from "../src/lib/pptx-export";

const out = "public/RA-Plus-Strategy-and-Roadmap-PowerPoint-Compatible.pptx";
const res = await exportDeckToPptx(out);
console.log("Generated", res.fileName, "with", res.slides, "slides");
