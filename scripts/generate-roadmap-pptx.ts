// Regenerates the static roadmap PowerPoint from the live deck data, using the
// same writer (and PowerPoint-compatibility patch) as the in-app exports.
import { writeFileSync } from "node:fs";
import { exportDeckToPptx } from "../src/lib/pptx-export";

const out = "public/RA-Plus-Strategy-and-Roadmap-PowerPoint-Compatible.pptx";
const res = await exportDeckToPptx(out);
writeFileSync(out, res.bytes);
console.log("Generated", res.fileName, "with", res.slides, "slides");
