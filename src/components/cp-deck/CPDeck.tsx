import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, ChevronLeft, ChevronRight, Download, FileQuestion, Loader2, RotateCcw, X } from "lucide-react";
import { cpDeck } from "@/data/cp-roadmap-deck";
import { CPSlideRenderer } from "./CPSlideRenderer";
import { buildEditablePptx, getDeckParts } from "@/lib/pptx-export";
import {
  exportScreenPartToPptx,
  exportScreensToPptx,
  downloadPreparedPptx,
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

type ExportJob = { id: string; label: string; editable?: boolean };
type ExportStatus =
  | { phase: "preparing"; job: ExportJob; done: number; total: number }
  | { phase: "packaging"; job: ExportJob; total: number }
  | { phase: "ready"; job: ExportJob; coverage: string[]; autoSaveFailed: boolean }
  | { phase: "error"; job: ExportJob; message: string };

export const CPDeck = () => {
  const [index, setIndex] = useState(0);
  const [downloadingQa, setDownloadingQa] = useState(false);
  const [status, setStatus] = useState<ExportStatus | null>(null);
  const [preparedExport, setPreparedExport] = useState<PreparedPptx | null>(null);
  const [preparedUrl, setPreparedUrl] = useState<string | null>(null);
  const parts = useMemo(() => getDeckParts(), []);
  const total = cpDeck.length;
  const busy = status?.phase === "preparing" || status?.phase === "packaging";

  const runExport = useCallback(async (job: ExportJob) => {
    setPreparedExport(null);
    const part = job.id === "full" ? null : getDeckParts().find((p) => p.id === job.id);
    const slides = part ? cpDeck.slice(part.start, part.end) : cpDeck;
    setStatus({ phase: "preparing", job, done: 0, total: slides.length });
    try {
      if (job.id !== "full" && !part) throw new Error(`Unknown deck part: ${job.id}`);
      const onProgress = (done: number, count: number) => {
        if (done >= count) setStatus({ phase: "packaging", job, total: count });
        else setStatus({ phase: "preparing", job, done, total: count });
      };
      const editableName = (part ? part.fileName : "RA-Plus-Strategy-and-Roadmap.pptx").replace(/\.pptx$/, "-Editable-Layout-Corrected-v8.pptx");
      if (job.editable) setStatus({ phase: "packaging", job, total: slides.length });
      const prepared = job.editable
        ? await buildEditablePptx(slides, editableName)
        : part
        ? await exportScreenPartToPptx(slides, part.fileName, onProgress)
        : await exportScreensToPptx(onProgress);
      setPreparedExport(prepared);
      const coverage = part
        ? [`Slides ${part.start + 1} to ${part.end} of ${cpDeck.length}`, part.description]
        : getDeckParts().map((p) => `${p.label}: slides ${p.start + 1}-${p.end}`);
      let autoSaveFailed = false;
      try {
        downloadPreparedPptx(prepared);
      } catch (err) {
        console.warn("Auto download blocked", err);
        autoSaveFailed = true;
      }
      setStatus({ phase: "ready", job, coverage, autoSaveFailed });
      toast.success(`${job.label} is ready`, { duration: 3000 });
    } catch (e) {
      console.error("PowerPoint export failed", e);
      setStatus({
        phase: "error",
        job,
        message: e instanceof Error ? e.message : "Something went wrong while building the file.",
      });
    }
  }, []);

  const downloadQa = useCallback(async () => {
    setDownloadingQa(true);
    try {
      const res = await fetch(`${QA_FILE}?v=${Date.now()}`, { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const blob = new Blob([await res.arrayBuffer()], {
        type: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      });
      downloadPreparedPptx({ blob, fileName: "RA-Plus-Board-QA-2026-2027.pptx", slideCount: 0 });
      toast.success("Leadership Q&A PowerPoint downloaded");
    } catch (e) {
      console.error("Q&A download failed", e);
      toast.error("Download failed, please retry");
    } finally {
      setDownloadingQa(false);
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
  const dismiss = () => {
    setStatus(null);
    setPreparedExport(null);
  };

  const pct =
    status?.phase === "preparing"
      ? Math.round((status.done / Math.max(status.total, 1)) * 95)
      : status?.phase === "packaging"
        ? 97
        : 100;

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

      {status && (
        <div
          role="status"
          aria-live="polite"
          aria-label="Export summary"
          className="fixed bottom-20 right-5 w-80 max-w-[calc(100vw-2.5rem)] rounded-xl border border-border bg-card/95 backdrop-blur p-4 shadow-lg"
        >
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-start gap-2">
              {busy && <Loader2 className="mt-0.5 w-4 h-4 animate-spin text-primary" />}
              {status.phase === "ready" && <CheckCircle2 className="mt-0.5 w-4 h-4 text-primary" />}
              {status.phase === "error" && <AlertTriangle className="mt-0.5 w-4 h-4 text-destructive" />}
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {status.phase === "preparing" && `Preparing ${status.job.label}`}
                  {status.phase === "packaging" && `Building the PowerPoint file`}
                  {status.phase === "ready" && `${status.job.label} ready`}
                  {status.phase === "error" && `Export failed`}
                </p>
                <p className="text-xs text-muted-foreground">
                  {status.phase === "preparing" && `Slide ${status.done} of ${status.total}. Keep this tab open.`}
                  {status.phase === "packaging" && `${status.total} slides captured, finishing up.`}
                  {status.phase === "ready" && preparedExport && (
                    <span className="break-all">{preparedExport.fileName}</span>
                  )}
                  {status.phase === "error" && status.message}
                </p>
              </div>
            </div>
            {!busy && (
              <button onClick={dismiss} aria-label="Dismiss export summary" className="p-1 rounded-full hover:bg-muted/20">
                <X className="w-3.5 h-3.5 text-muted-foreground" />
              </button>
            )}
          </div>

          {busy && (
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full bg-primary transition-all" style={{ width: `${pct}%` }} />
            </div>
          )}

          {status.phase === "ready" && preparedExport && (
            <>
              <p className="mt-2 text-xs font-medium text-foreground">{preparedExport.slideCount} slides in this file</p>
              <ul className="mt-1 max-h-28 overflow-auto space-y-0.5">
                {status.coverage.map((line) => (
                  <li key={line} className="text-xs text-muted-foreground">{line}</li>
                ))}
              </ul>
              <p className="mt-2 text-xs text-muted-foreground">
                {status.autoSaveFailed
                  ? "Your browser blocked saving. Tap Save file below."
                  : "Download started. If nothing was saved, tap Save file."}
              </p>
              <div className="mt-2 flex gap-2">
                {preparedUrl && (
                  <a
                    href={preparedUrl}
                    download={preparedExport.fileName}
                    target="_blank"
                    rel="noopener"
                    onClick={() => toast.success("PowerPoint download started")}
                    className="flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:opacity-90"
                  >
                    <Download className="w-3.5 h-3.5" /> Save file
                  </a>
                )}
                <button
                  onClick={() => runExport(status.job)}
                  className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted/20"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Rebuild
                </button>
              </div>
            </>
          )}

          {status.phase === "error" && (
            <button
              onClick={() => runExport(status.job)}
              className="mt-3 flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:opacity-90"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Try again
            </button>
          )}
        </div>
      )}

      <div className="fixed bottom-5 right-5 flex items-center gap-3 rounded-full border border-border bg-card/95 backdrop-blur px-3 py-2 shadow-lg">
        <button onClick={prev} disabled={index === 0} aria-label="Previous slide" className="p-2 rounded-full hover:bg-muted/20 disabled:opacity-30">
          <ChevronLeft className="w-4 h-4 text-foreground" />
        </button>
        <span className="text-xs font-medium text-muted-foreground tabular-nums">
          {index + 1} / {total}
        </span>
        <button onClick={next} disabled={index === total - 1} aria-label="Next slide" className="p-2 rounded-full hover:bg-muted/20 disabled:opacity-30">
          <ChevronRight className="w-4 h-4 text-foreground" />
        </button>
        <span className="h-5 w-px bg-border" />
        <button
          onClick={() => runExport({ id: "full", label: "Full deck" })}
          disabled={busy}
          aria-label="Export deck as PowerPoint"
          className="flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50"
        >
          {busy ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Download className="w-3.5 h-3.5" />}
          {busy ? `${pct}%` : "PPTX"}
        </button>

        <button
          onClick={() => runExport({ id: "full", label: "Editable deck", editable: true })}
          disabled={busy}
          aria-label="Export editable PowerPoint"
          title="Editable PowerPoint with real text and shapes"
          className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted/20 disabled:opacity-50"
        >
          <Download className="w-3.5 h-3.5" />
          Editable
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              aria-label="Download deck by section"
              className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted/20 disabled:opacity-50"
              disabled={busy}
            >
              <Download className="w-3.5 h-3.5" />
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
                  runExport({ id: p.id, label: p.label });
                }}
                className="flex flex-col items-start gap-0.5"
              >
                <span className="text-sm font-medium">{p.label}</span>
                <span className="text-xs text-muted-foreground">
                  {p.description} · {p.end - p.start} slides
                </span>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Editable sections</DropdownMenuLabel>
            {parts.map((p) => (
              <DropdownMenuItem
                key={`${p.id}-editable`}
                onSelect={() => runExport({ id: p.id, label: `${p.label} (editable)`, editable: true })}
              >
                <span className="text-sm">{p.label} (editable)</span>
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
