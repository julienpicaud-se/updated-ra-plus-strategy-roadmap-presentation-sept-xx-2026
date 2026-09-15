import JSZip from "jszip";
import { readFileSync, readdirSync } from "node:fs";
import { basename, resolve } from "node:path";

const publicDir = resolve(process.cwd(), "public");
const files = readdirSync(publicDir)
  .filter((name) => name === "RA-Plus-Strategy-and-Roadmap-PowerPoint-Compatible.pptx")
  .map((name) => resolve(publicDir, name));

if (files.length === 0) throw new Error("No static PowerPoint files found");

for (const file of files) {
  const zip = await JSZip.loadAsync(readFileSync(file), { checkCRC32: true });
  const required = ["[Content_Types].xml", "_rels/.rels", "ppt/presentation.xml", "ppt/_rels/presentation.xml.rels"];
  for (const entry of required) {
    if (!zip.file(entry)) throw new Error(`${basename(file)} is missing ${entry}`);
  }

  const presentation = await zip.file("ppt/presentation.xml")?.async("text");
  if (!presentation) throw new Error(`${basename(file)} has no readable presentation.xml`);

  const slideMaster = presentation.indexOf("<p:sldMasterIdLst>");
  const slideList = presentation.indexOf("<p:sldIdLst>");
  const notesMaster = presentation.indexOf("<p:notesMasterIdLst>");
  const slideSize = presentation.indexOf("<p:sldSz");
  if (slideMaster < 0 || slideList < 0 || slideSize < 0 || slideMaster > slideList || slideList > slideSize) {
    throw new Error(`${basename(file)} has an invalid presentation element order`);
  }
  if (notesMaster >= 0 && (notesMaster < slideMaster || notesMaster > slideList)) {
    throw new Error(`${basename(file)} has a PowerPoint-incompatible notes master position`);
  }

  const slideFiles = Object.keys(zip.files).filter(
    (name) => /^ppt\/slides\/slide\d+\.xml$/.test(name),
  );
  if (slideFiles.length === 0) throw new Error(`${basename(file)} contains no slides`);

  const contentTypes = await zip.file("[Content_Types].xml")?.async("text");
  if (!contentTypes) throw new Error(`${basename(file)} has no readable [Content_Types].xml`);
  const overrides = [...contentTypes.matchAll(/<Override\b[^>]*PartName="([^"]+)"/g)].map((m) => m[1]);
  // Every XML part that PowerPoint resolves by content type must be declared.
  const mustDeclare = Object.keys(zip.files).filter((name) =>
    /^ppt\/(slides|notesSlides|slideLayouts|slideMasters|notesMasters)\/[^/]+\.xml$/.test(name),
  );
  const missing = mustDeclare.filter((name) => !overrides.includes(`/${name}`));
  if (missing.length > 0) {
    throw new Error(
      `${basename(file)} is missing content-type overrides for: ${missing.slice(0, 5).join(", ")}`,
    );
  }


  const slideMasters = Object.keys(zip.files).filter(
    (name) => /^ppt\/slideMasters\/slideMaster\d+\.xml$/.test(name),
  );
  if (slideMasters.length !== 1) {
    throw new Error(`${basename(file)} has ${slideMasters.length} slide masters; expected the single-master compatible package`);
  }

  for (const slideFile of slideFiles) {
    const xml = await zip.file(slideFile)?.async("text");
    if (!xml) throw new Error(`${basename(file)} contains an unreadable ${slideFile}`);
    // Only shape-tree IDs must be unique; nested a:cNvPr ids live in their own scope.
    const ids = [...xml.matchAll(/<p:cNvPr[^>]*\sid="(\d+)"/g)].map((match) => match[1]);

    if (new Set(ids).size !== ids.length) {
      throw new Error(`${basename(file)} contains duplicate shape IDs in ${slideFile}`);
    }
  }

  console.log(
    `Validated ${basename(file)}: ${slideFiles.length} slides, ${overrides.length} overrides, ` +
      `${slideMasters.length} masters, CRC and strict compatible structure OK`,
  );
}