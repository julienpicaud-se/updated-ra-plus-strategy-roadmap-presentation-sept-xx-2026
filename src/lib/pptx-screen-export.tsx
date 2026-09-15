import PptxGenJS from "pptxgenjs";
import { toJpeg } from "html-to-image";
import { cpDeck, type CPSlide } from "@/data/cp-roadmap-deck";

const CAPTURE_WIDTH = 1280;
const CAPTURE_HEIGHT = 720;
const PPTX_WIDTH = 13.333;
const PPTX_HEIGHT = 7.5;

async function createCaptureFrame() {
  const frame = document.createElement("iframe");
  frame.className = "pptx-capture-frame";
  frame.setAttribute("aria-hidden", "true");
  frame.src = "/slide-capture?index=0";
  document.body.appendChild(frame);
  await new Promise<void>((resolve, reject) => {
    frame.addEventListener("load", () => resolve(), { once: true });
    frame.addEventListener("error", () => reject(new Error("Could not start PowerPoint capture")), { once: true });
  });
  return frame;
}

async function captureSlide(frame: HTMLIFrameElement, index: number) {
  const window = frame.contentWindow;
  if (!window) throw new Error("PowerPoint capture frame is unavailable");
  window.history.replaceState({}, "", `/slide-capture?index=${index}`);
  window.dispatchEvent(new PopStateEvent("popstate"));
  await new Promise<void>((resolve) => window.requestAnimationFrame(() => window.requestAnimationFrame(() => resolve())));
  const frameDocument = frame.contentDocument;
  const stage = frameDocument?.querySelector<HTMLElement>("[data-pptx-slide='ready']");
  if (!frameDocument || !stage) throw new Error(`Slide ${index + 1} did not render`);
  await frameDocument.fonts.ready;
  return toJpeg(stage, {
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
}

async function downloadSlides(slides: CPSlide[], fileName: string, onProgress?: (done: number, total: number) => void) {
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_WIDE";
  pptx.author = "Schneider Electric, Sustainability Business";
  pptx.subject = "Pixel-faithful export of the RA+ roadmap screens";
  pptx.title = "RA+ Platform Roadmap 2026 and 2027";
  pptx.company = "Schneider Electric";
  pptx.defineSlideMaster({
    title: "SCREEN",
    background: { color: "FFFFFF" },
    objects: [],
    slideNumber: undefined,
  });

  const frame = await createCaptureFrame();
  try {
    for (let index = 0; index < slides.length; index += 1) {
      const sourceIndex = cpDeck.indexOf(slides[index]);
      if (sourceIndex < 0) throw new Error(`Slide ${index + 1} is not part of the live deck`);
      const image = await captureSlide(frame, sourceIndex);
      const slide = pptx.addSlide("SCREEN");
      slide.addImage({ data: image, x: 0, y: 0, w: PPTX_WIDTH, h: PPTX_HEIGHT });
      onProgress?.(index + 1, slides.length);
    }
  } finally {
    frame.remove();
  }

  const raw = (await pptx.write({ outputType: "arraybuffer", compression: true })) as ArrayBuffer;
  const url = URL.createObjectURL(
    new Blob([raw], { type: "application/vnd.openxmlformats-officedocument.presentationml.presentation" }),
  );
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10_000);
}

export async function exportScreensToPptx(onProgress?: (done: number, total: number) => void) {
  return downloadSlides(cpDeck, "RA-Plus-Strategy-and-Roadmap-PowerPoint-Compatible.pptx", onProgress);
}

export async function exportScreenPartToPptx(
  slides: CPSlide[],
  fileName: string,
  onProgress?: (done: number, total: number) => void,
) {
  return downloadSlides(slides, fileName, onProgress);
}