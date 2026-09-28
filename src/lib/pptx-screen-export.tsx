import PptxGenJS from "pptxgenjs";
import { toJpeg } from "html-to-image";
import { cpDeck, type CPSlide } from "@/data/cp-roadmap-deck";
import { patchPptxCompatibility } from "@/lib/pptx-export";

const CAPTURE_WIDTH = 1280;
const CAPTURE_HEIGHT = 720;
const PPTX_WIDTH = 13.333;
const PPTX_HEIGHT = 7.5;

export type PreparedPptx = {
  blob: Blob;
  fileName: string;
  slideCount: number;
};

function withTimeout<T>(promise: Promise<T>, ms: number, message: string) {
  return new Promise<T>((resolve, reject) => {
    const t = window.setTimeout(() => reject(new Error(message)), ms);
    promise.then((v) => { window.clearTimeout(t); resolve(v); }, (e) => { window.clearTimeout(t); reject(e); });
  });
}
const wait = (ms: number) => new Promise<void>((r) => window.setTimeout(r, ms));

async function createCaptureFrame() {
  const frame = document.createElement("iframe");
  frame.className = "pptx-capture-frame";
  frame.setAttribute("aria-hidden", "true");
  frame.src = "/slide-capture?index=0";
  const loaded = new Promise<void>((resolve, reject) => {
    frame.addEventListener("load", () => resolve(), { once: true });
    frame.addEventListener("error", () => reject(new Error("Could not start PowerPoint capture")), { once: true });
  });
  document.body.appendChild(frame);
  await withTimeout(loaded, 30_000, "The slide renderer did not start. Please reload the page and try again.");
  for (let i = 0; i < 100 && !frame.contentDocument?.querySelector("[data-pptx-slide='ready']"); i += 1) await wait(100);
  return frame;
}

async function captureSlide(frame: HTMLIFrameElement, index: number) {
  const window = frame.contentWindow;
  if (!window) throw new Error("PowerPoint capture frame is unavailable");
  window.history.replaceState({}, "", `/slide-capture?index=${index}`);
  window.dispatchEvent(new PopStateEvent("popstate"));
  await wait(120);
  const frameDocument = frame.contentDocument;
  const stage = frameDocument?.querySelector<HTMLElement>("[data-pptx-slide='ready']");
  if (!frameDocument || !stage) throw new Error(`Slide ${index + 1} did not render`);
  await Promise.race([frameDocument.fonts.ready, wait(3000)]);
  const capture = () => toJpeg(stage, {
      width: CAPTURE_WIDTH,
      height: CAPTURE_HEIGHT,
      canvasWidth: CAPTURE_WIDTH,
      canvasHeight: CAPTURE_HEIGHT,
      pixelRatio: 1,
      cacheBust: false,
      fontEmbedCSS: "",
      quality: 0.94,
      skipAutoScale: true,
      backgroundColor: "#ffffff",
    });
  try {
    return await withTimeout(capture(), 20_000, `Slide ${index + 1} timed out`);
  } catch {
    return withTimeout(capture(), 30_000, `Slide ${index + 1} could not be captured. Please try again.`);
  }
}

async function prepareSlides(slides: CPSlide[], fileName: string, onProgress?: (done: number, total: number) => void) {
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_WIDE";
  pptx.author = "Schneider Electric, Sustainability Business";
  pptx.subject = "Pixel-faithful export of the RA+ roadmap screens";
  pptx.title = "RA+ Platform Roadmap 2026 and 2027";
  pptx.company = "Schneider Electric";
  const frame = await createCaptureFrame();
  try {
    for (let index = 0; index < slides.length; index += 1) {
      const sourceIndex = cpDeck.indexOf(slides[index]);
      if (sourceIndex < 0) throw new Error(`Slide ${index + 1} is not part of the live deck`);
      const image = await captureSlide(frame, sourceIndex);
      const slide = pptx.addSlide();
      slide.background = { color: "FFFFFF" };
      slide.addImage({ data: image, x: 0, y: 0, w: PPTX_WIDTH, h: PPTX_HEIGHT });
      onProgress?.(index + 1, slides.length);
    }
  } finally {
    frame.remove();
  }

  const raw = (await pptx.write({ outputType: "arraybuffer", compression: true })) as ArrayBuffer;
  const bytes = await patchPptxCompatibility(raw);
  return {
    blob: new Blob([bytes as BlobPart], {
      type: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    }),
    fileName,
    slideCount: slides.length,
  } satisfies PreparedPptx;
}

export function downloadPreparedPptx({ blob, fileName }: PreparedPptx) {
  const url = URL.createObjectURL(
    blob,
  );
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  document.body.appendChild(anchor);
  anchor.click();
  window.setTimeout(() => {
    anchor.remove();
    URL.revokeObjectURL(url);
  }, 60_000);
}

export async function exportScreensToPptx(onProgress?: (done: number, total: number) => void) {
  return prepareSlides(cpDeck, "RA-Plus-Strategy-and-Roadmap-PowerPoint-Compatible-v4.pptx", onProgress);
}

export async function exportScreenPartToPptx(
  slides: CPSlide[],
  fileName: string,
  onProgress?: (done: number, total: number) => void,
) {
  return prepareSlides(slides, fileName, onProgress);
}