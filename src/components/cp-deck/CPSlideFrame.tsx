import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  note?: string;
  children: ReactNode;
}

export const CPSlideFrame = ({ eyebrow, title, subtitle, note, children }: Props) => (
  <div className="min-h-screen flex flex-col bg-background">
    {(eyebrow || title) && (
      <div className="px-8 lg:px-16 pt-9 pb-3">
        {eyebrow && (
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-primary" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
              {eyebrow}
            </span>
          </div>
        )}
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`font-bold text-foreground leading-tight max-w-5xl ${
              title && title.length > 74 ? "text-2xl lg:text-[34px]" : title && title.length > 56 ? "text-3xl lg:text-[36px]" : "text-3xl lg:text-4xl"
            }`}
          >
            {title}
          </motion.h2>
        )}
        {subtitle && (
          <p className="text-sm lg:text-base text-muted-foreground mt-2 max-w-4xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    )}

    <div className="flex-1 px-8 lg:px-16 pb-3 flex flex-col justify-center">{children}</div>

    {note && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="px-8 lg:px-16 pb-3"
      >
        <div className="relative overflow-hidden rounded-lg border border-primary/40 bg-primary/5 px-5 py-3 text-sm text-foreground/90">
          <span className="absolute inset-y-2.5 left-3 w-1 rounded-full bg-primary" />
          <span className="block pl-3">{note}</span>
        </div>
      </motion.div>
    )}

    <div className="mt-auto px-8 lg:px-16 py-3 border-t border-border/30 flex justify-between items-center gap-8">
      <span className="text-xs text-muted-foreground">
        Carbon Performance, RA+ Enterprise Sustainability
      </span>
      <div className="flex items-center gap-2">
        <span className="text-primary font-bold">SE</span>
        <span className="text-foreground font-light text-xs">SUSTAINABILITY BUSINESS</span>
      </div>
    </div>
  </div>
);

export const toneClasses = {
  primary: { text: "text-primary", bg: "bg-primary/10", border: "border-primary/40", dot: "bg-primary" },
  accent: { text: "text-accent", bg: "bg-accent/10", border: "border-accent/40", dot: "bg-accent" },
  warn: {
    text: "text-[hsl(var(--se-quartz-orange))]",
    bg: "bg-[hsl(var(--se-quartz-orange))]/10",
    border: "border-[hsl(var(--se-quartz-orange))]/40",
    dot: "bg-[hsl(var(--se-quartz-orange))]",
  },
  muted: {
    text: "text-[hsl(var(--se-quartz-blue))]",
    bg: "bg-[hsl(var(--se-quartz-blue))]/10",
    border: "border-[hsl(var(--se-quartz-blue))]/40",
    dot: "bg-[hsl(var(--se-quartz-blue))]",
  },
} as const;
