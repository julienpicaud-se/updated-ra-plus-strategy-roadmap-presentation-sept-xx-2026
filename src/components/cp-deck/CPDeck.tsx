import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Download, FileQuestion, Loader2, X } from "lucide-react";
import { cpDeck } from "@/data/cp-roadmap-deck";
import { CPSlideRenderer } from "./CPSlideRenderer";
import { getDeckParts } from "@/lib/pptx-export";
import {
  exportScreenPartToPptx,
  exportScreensToPptx,
  type PreparedPptx,
} from "@/lib/pptx-screen-export";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

const QA_FILE = "/RA-Plus-Board-QA-2026-2027.pptx";
export const CPDeck = () => {
  const [index, setIndex] = useState(0);
  const [downloadingQa, setDownloadingQa] = useState(false);
  const [downloadingDeck, setDownloadingDeck] = useState(false);
  const [exportProgress, setExportProgress] = useState<string | null>(null);
  const [busyPart, setBusyPart] = useState<string | null>(null);
  const [preparedExport, setPreparedExport] = useState<PreparedPptx | null>(null);
  const [preparedUrl, setPreparedUrl] = useState<string | null>(null);
  const [exportSummary, setExportSummary] = useState<{
    label: string;
    fileName: string;
    slideCount: number;
    coverage: string[];
  } | null>(null);
  const parts = useMemo(() => getDeckParts(), []);
  const total = cpDeck.length;

  const downloadPart = useCallback(async (id: string, label: string) => {
    setBusyPart(id);
    try {
      const part = getDeckParts().find((candidate) => candidate.id === id);
      if (!part) throw new Error(`Unknown deck part: ${id}`);
      const selected = cpDeck.slice(part.start, part.end);
      const cover = cpDeck[0];
      const slides = part.start === 0 || cover.kind !== "title" ? selected : [cover, ...selected];
      setPreparedExport(null);
      const prepared = await exportScreenPartToPptx(slides, part.fileName, (done, total) => {
        setExportProgress(`${done} / ${total}`);
      });
      setPreparedExport(prepared);
      setExportSummary({
        label,
        fileName: part.fileName,
        slideCount: prepared.slideCount,
        coverage: [
          `Slides ${part.start + 1} to ${part.end} of ${cpDeck.length}`,
          part.description,
        ],
      });
      toast.success(`${label} is ready. Tap Download.`, { duration: 3000 });
    } catch (e) {
      console.error("Part export failed", e);
      toast.error("Export failed, please retry");
    } finally {
      setBusyPart(null);
      setExportProgress(null);
    }
  }, []);

  const downloadFile = useCallback(async (path: string, name: string, label: string) => {
    const res = await fetch(`${path}?v=${Date.now()}`, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buffer = await res.arrayBuffer();
    const url = URL.createObjectURL(
      new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10000);
    toast.success(`${label} downloaded`);
  }, []);

  const downloadQa = useCallback(async () => {
    setDownloadingQa(true);
    try {
      await downloadFile(QA_FILE, "RA-Plus-Board-QA-2026-2027.pptx", "Leadership Q&A PowerPoint");
    } catch (e) {
      console.error("Q&A download failed", e);
      toast.error("Download failed, please retry");
    } finally {
      setDownloadingQa(false);
    }
  }, [downloadFile]);

  const downloadDeck = useCallback(async () => {
    setDownloadingDeck(true);
    try {
      const prepared = await exportScreensToPptx((done, total) => setExportProgress(`${done} / ${total}`));
      setPreparedExport(prepared);
      setExportSummary({
        label: "Full deck",
        fileName: prepared.fileName,
        slideCount: prepared.slideCount,
        coverage: getDeckParts().map(
          (p) => `${p.label}: slides ${p.start + 1}-${p.end} (${p.end - p.start} slides)`,
        ),
      });
      toast.success("PowerPoint is ready. Tap Download.", { duration: 3000 });
    } catch (e) {
      console.error("Deck download failed", e);
      toast.error("Download failed, please retry");
    } finally {
      setDownloadingDeck(false);
      setExportProgress(null);
    }
  }, []);

  useEffect(() => {
    if (!preparedExport) {
      setPreparedUrl(null);
      return;
    }
    const url = URL.createObjectURL(preparedExport.blob);
    setPreparedUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [preparedExport]);



  const next = useCallback(() => setIndex((i) => Math.min(i + 1, total - 1)), [total]);
  const prev = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), []);


  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const touchStart = useRef<{ x: number; y: number } | null>(null);

  return (
    <div
      className="min-h-screen bg-background overflow-hidden touch-pan-y"
      onTouchStart={(e) => {
        touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }}
      onTouchEnd={(e) => {
        if (!touchStart.current) return;
        const dx = e.changedTouches[0].clientX - touchStart.current.x;
        const dy = e.changedTouches[0].clientY - touchStart.current.y;
        touchStart.current = null;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
          dx < 0 ? next() : prev();
        }
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.3 }}
        >
          <CPSlideRenderer slide={cpDeck[index]} />
        </motion.div>
      </AnimatePresence>

      {exportSummary && (
        <div
          role="status"
          aria-label="Export summary"
          className="fixed bottom-20 right-5 w-80 rounded-xl border border-border bg-card/95 backdrop-blur p-4 shadow-lg"
        >
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-sm font-semibold text-foreground">{exportSummary.label} ready</p>
              <p className="text-xs text-muted-foreground break-all">{exportSummary.fileName}</p>
            </div>
            <button
              onClick={() => setExportSummary(null)}
              aria-label="Dismiss export summary"
              className="p-1 rounded-full hover:bg-muted/20"
            >
              <X className="w-3.5 h-3.5 text-muted-foreground" />
            </button>
          </div>
          <p className="mt-2 text-xs font-medium text-foreground">
            {exportSummary.slideCount} slides in this file
          </p>
          <ul className="mt-1 space-y-0.5">
            {exportSummary.coverage.map((line) => (
              <li key={line} className="text-xs text-muted-foreground">
                {line}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="fixed bottom-5 right-5 flex items-center gap-3 rounded-full border border-border bg-card/95 backdrop-blur px-3 py-2 shadow-lg">
        <button
          onClick={prev}
          disabled={index === 0}
          aria-label="Previous slide"
          className="p-2 rounded-full hover:bg-muted/20 disabled:opacity-30"
        >
          <ChevronLeft className="w-4 h-4 text-foreground" />
        </button>
        <span className="text-xs font-medium text-muted-foreground tabular-nums">
          {index + 1} / {total}
        </span>
        <button
          onClick={next}
          disabled={index === total - 1}
          aria-label="Next slide"
          className="p-2 rounded-full hover:bg-muted/20 disabled:opacity-30"
        >
          <ChevronRight className="w-4 h-4 text-foreground" />
        </button>
        <span className="h-5 w-px bg-border" />
        {preparedExport && preparedUrl ? (
          <a
            href={preparedUrl}
            download={preparedExport.fileName}
            aria-label="Export deck as PowerPoint"
            onClick={() => toast.success("PowerPoint download started")}
            className="flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:opacity-90"
          >
            <Download className="w-3.5 h-3.5" />
            Download
          </a>
        ) : (
          <button
            onClick={downloadDeck}
            disabled={downloadingDeck}
            aria-label="Export deck as PowerPoint"
            className="flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50"
          >
            {downloadingDeck ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Download className="w-3.5 h-3.5" />}
            {exportProgress ?? "PPTX"}
          </button>
        )}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              aria-label="Download deck by section"
              className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted/20 disabled:opacity-50"
              disabled={busyPart !== null}
            >
              {busyPart ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Download className="w-3.5 h-3.5" />}
              By section
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" side="top" className="w-72 bg-popover z-50">
            <DropdownMenuLabel>Download a lighter part</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {parts.map((p) => (
              <DropdownMenuItem
                key={p.id}
                onSelect={() => {
                  downloadPart(p.id, p.label);
                }}
                className="flex flex-col items-start gap-0.5"
              >
                <span className="text-sm font-medium">{p.label}</span>
                <span className="text-xs text-muted-foreground">
                  {p.description} · {p.end - p.start} slides
                </span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>




        <button
          onClick={downloadQa}
          disabled={downloadingQa}
          aria-label="Download Board Q&A PowerPoint"
          title="Download Board Q&A PowerPoint"
          className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted/20 disabled:opacity-50"
        >
          {downloadingQa ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <FileQuestion className="w-3.5 h-3.5" />}
          Board Q&amp;A
        </button>


      </div>

      <div className="fixed bottom-0 left-0 h-1 bg-primary transition-all" style={{ width: `${((index + 1) / total) * 100}%` }} />
    </div>
  );
};
