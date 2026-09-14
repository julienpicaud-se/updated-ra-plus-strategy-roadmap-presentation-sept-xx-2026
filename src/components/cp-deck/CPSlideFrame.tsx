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
      <div className="px-8 lg:px-16 pt-10 pb-4">
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
            className="text-3xl lg:text-4xl font-bold text-foreground leading-tight max-w-5xl"
          >
            {title}
          </motion.h2>
        )}
        {subtitle && (
          <p className="text-sm lg:text-base text-muted-foreground mt-2 max-w-4xl">{subtitle}</p>
        )}
      </div>
    )}

    <div className="flex-1 px-8 lg:px-16 pb-4 flex flex-col justify-center">{children}</div>

    {note && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="px-8 lg:px-16 pb-4"
      >
        <div className="rounded-xl border border-primary/40 bg-primary/5 px-5 py-3 text-sm text-foreground/90">
          {note}
        </div>
      </motion.div>
    )}

    <div className="mt-auto px-8 lg:px-16 py-4 pr-40 lg:pr-52 border-t border-border/30 flex justify-between items-center">
      <span className="text-xs lg:text-sm text-muted-foreground">
        Carbon Performance, RA+ Enterprise Sustainability
      </span>
      <div className="flex items-center gap-2">
        <span className="text-primary font-bold">SE</span>
        <span className="text-foreground font-light text-xs lg:text-sm">SUSTAINABILITY BUSINESS</span>
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
