import { motion } from "framer-motion";
import { CPSlide } from "@/data/cp-roadmap-deck";
import { CPSlideFrame, toneClasses } from "./CPSlideFrame";

const fadeUp = (i: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay: 0.08 + i * 0.08 },
});

const toneHatch: Record<string, string> = {
  primary: "--primary",
  accent: "--accent",
  warn: "--se-quartz-orange",
  muted: "--se-quartz-blue",
};

export const CPSlideRenderer = ({ slide }: { slide: CPSlide }) => {
  switch (slide.kind) {
    case "title":
      return (
        <div className="min-h-screen flex flex-col justify-center bg-background px-8 lg:px-24 py-16">
          <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-primary" />
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground">
              {slide.eyebrow}
            </span>
          </motion.div>
          <motion.h1
            {...fadeUp(1)}
            className="text-5xl lg:text-7xl font-bold text-foreground leading-[1.05] max-w-5xl"
          >
            {slide.title}
          </motion.h1>
          <motion.p {...fadeUp(2)} className="mt-6 text-base lg:text-xl text-muted-foreground max-w-3xl">
            {slide.subtitle}
          </motion.p>
          <motion.div {...fadeUp(3)} className="mt-8 flex flex-wrap gap-3">
            {slide.meta.map((m) => (
              <span
                key={m}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-xs lg:text-sm text-foreground/80 whitespace-nowrap"
              >
                {m}
              </span>
            ))}
          </motion.div>
          <motion.div {...fadeUp(4)} className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl">
            {slide.stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card p-5">
                <div className="text-3xl lg:text-4xl font-bold text-primary">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      );

    case "section":
      return (
        <div className="min-h-screen flex flex-col justify-center bg-secondary px-8 lg:px-24 py-16">
          <motion.span {...fadeUp(0)} className="text-xs tracking-[0.25em] uppercase text-primary-foreground/75">
            {slide.eyebrow}
          </motion.span>
          <motion.div {...fadeUp(1)} className="text-7xl lg:text-8xl font-bold text-primary/70 mt-4">
            {slide.number}
          </motion.div>
          <motion.h2
            {...fadeUp(2)}
            className="text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight mt-4 max-w-4xl"
          >
            {slide.title}
          </motion.h2>
          <motion.p {...fadeUp(3)} className="text-base lg:text-xl text-primary-foreground/80 mt-4 max-w-3xl">
            {slide.subtitle}
          </motion.p>
        </div>
      );

    case "columns":
      return (
        <CPSlideFrame eyebrow={slide.eyebrow} title={slide.title} subtitle={slide.subtitle} note={slide.note}>
          <div
            className={`grid grid-cols-1 gap-5 ${
              slide.columns.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
            }`}
          >
            {slide.columns.map((c, i) => {
              const tone = toneClasses[c.tone ?? "primary"];
              return (
                <motion.div
                  key={c.title}
                  {...fadeUp(i)}
                  className="rounded-2xl border border-border bg-card p-5 flex flex-col"
                >
                  {c.label && (
                    <span className={`text-[11px] font-bold uppercase tracking-widest ${tone.text}`}>{c.label}</span>
                  )}
                  <div className={`text-lg font-bold text-foreground leading-tight ${c.label ? "mt-2" : ""}`}>{c.title}</div>
                  {c.line && <p className="text-sm text-muted-foreground leading-relaxed mt-2">{c.line}</p>}
                  <ul className="mt-4 pt-3 border-t border-border/50 space-y-1.5">
                    {c.items.map((it) => (
                      <li key={it} className="text-sm text-foreground/85 flex gap-2">
                        <span className={`mt-2 h-1.5 w-1.5 rounded-full shrink-0 ${tone.dot}`} />
                        {it}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </CPSlideFrame>
      );

    case "board":
      return (
        <CPSlideFrame eyebrow={slide.eyebrow} title={slide.title} subtitle={slide.subtitle} note={slide.note}>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
            {slide.lanes.map((lane, i) => {
              const tone = toneClasses[lane.tone];
              return (
                <motion.div
                  key={lane.label + lane.period}
                  {...fadeUp(i)}
                  className={`rounded-2xl border ${tone.border} bg-card overflow-hidden flex flex-col`}
                >
                  <div className={`${tone.bg} px-5 py-3`}>
                    <div className={`text-[11px] font-bold uppercase tracking-widest ${tone.text}`}>{lane.label}</div>
                    <div className="text-base font-bold text-foreground">{lane.period}</div>
                  </div>
                  <div className="p-4 space-y-2.5">
                    {lane.items.map((it) => (
                      <div key={it.name} className="rounded-lg border border-border/60 bg-background px-3 py-2">
                        <div className="text-sm font-semibold text-foreground leading-snug">{it.name}</div>
                        {it.note && <div className="text-xs text-muted-foreground mt-0.5">{it.note}</div>}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </CPSlideFrame>
      );

    case "stats":
      return (
        <CPSlideFrame eyebrow={slide.eyebrow} title={slide.title} subtitle={slide.subtitle} note={slide.note}>
          <div className={`grid grid-cols-2 gap-5 ${slide.stats.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
            {slide.stats.map((s, i) => (
              <motion.div key={s.label} {...fadeUp(i)} className="rounded-2xl border border-border bg-card p-5">
                <div className="text-4xl lg:text-5xl font-bold text-primary leading-none">{s.value}</div>
                <div className="text-sm font-semibold text-foreground mt-3">{s.label}</div>
                {s.sub && <div className="text-xs text-muted-foreground mt-1">{s.sub}</div>}
              </motion.div>
            ))}
          </div>
          {slide.bullets && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
              {slide.bullets.map((b, i) => (
                <motion.div
                  key={b.title}
                  {...fadeUp(i + slide.stats.length)}
                  className="rounded-2xl border border-border bg-card p-5"
                >
                  <div className="text-base font-bold text-foreground">{b.title}</div>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{b.line}</p>
                </motion.div>
              ))}
            </div>
          )}
        </CPSlideFrame>
      );

    case "table":
      return (
        <CPSlideFrame eyebrow={slide.eyebrow} title={slide.title} subtitle={slide.subtitle} note={slide.note}>
          <motion.div {...fadeUp(0)} className="rounded-2xl border border-border bg-card overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-muted/10">
                  {slide.headers.map((h) => (
                    <th
                      key={h}
                      className="px-4 py-3 text-[11px] font-bold uppercase tracking-widest text-muted-foreground"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {slide.rows.map((row, i) => {
                  const isCutLine = row[0] === "";
                  return (
                    <tr
                      key={i}
                      className={
                        isCutLine
                          ? "bg-[hsl(var(--se-quartz-orange))]/10"
                          : "border-t border-border/40"
                      }
                    >
                      {isCutLine ? (
                        <td
                          colSpan={slide.headers.length}
                          className="px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[hsl(var(--se-quartz-orange))]"
                        >
                          {row[1]}
                        </td>
                      ) : (
                        row.map((cell, j) => (
                          <td
                            key={j}
                            className={`px-4 py-2.5 text-sm ${
                              j === 0 ? "font-bold text-primary" : "text-foreground/85"
                            }`}
                          >
                            {cell}
                          </td>
                        ))
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </motion.div>
        </CPSlideFrame>
      );

    case "bets":
      return (
        <CPSlideFrame eyebrow={slide.eyebrow} title={slide.title} subtitle={slide.subtitle} note={slide.note}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {slide.bets.map((b, i) => (
              <motion.div
                key={b.title}
                {...fadeUp(i)}
                className="rounded-2xl border border-border bg-card p-6 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="text-lg font-bold text-foreground leading-tight">{b.title}</div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{b.line}</p>
                <ul className="mt-4 pt-3 border-t border-border/50 space-y-1.5">
                  {b.items.map((it) => (
                    <li key={it} className="text-sm text-foreground/85 flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </CPSlideFrame>
      );

    case "timeline": {
      const quarters = slide.years.flatMap((year) => ["Q1", "Q2", "Q3", "Q4"].map((quarter) => ({ year, quarter })));
      const totalQ = slide.years.length * 4;
      const hasMilestones = slide.groups.some((group) =>
        group.rows.some((row) => row.mvp !== undefined || row.ga !== undefined || row.continuous),
      );
      let rowIndex = 0;
      const qCols = `repeat(${totalQ}, minmax(3.5rem, 1fr))`;

      return (
        <CPSlideFrame eyebrow={slide.eyebrow} title={slide.title} subtitle={slide.subtitle} note={slide.note}>
          <motion.div {...fadeUp(0)} className="w-full overflow-hidden border border-border bg-card">
            <div
              className="grid border-b border-border bg-background/80"
              style={{ gridTemplateColumns: `minmax(17rem, 1.75fr) ${qCols}` }}
            >
              <div className="px-5 py-3 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Capability</div>
              {quarters.map(({ year, quarter }, index) => (
                <div key={`${year}-${quarter}`} className="border-l border-border/60 px-1 py-2 text-center">
                  {index % 4 === 0 && <div className="text-xs font-bold text-foreground">{year}</div>}
                  <div className="text-[11px] font-semibold text-muted-foreground">{quarter}</div>
                </div>
              ))}
            </div>

            {slide.groups.map((group) => {
              const groupTone = toneClasses[group.tone];
              return (
                <div key={group.label} className="grid grid-cols-[3.25rem_1fr] border-b border-border last:border-b-0">
                  <div className={`${groupTone.bg} flex items-center justify-center border-r border-border`}>
                    <span className={`-rotate-90 whitespace-nowrap text-[10px] font-bold uppercase tracking-widest ${groupTone.text}`}>
                      {group.label}
                    </span>
                  </div>
                  <div>
                    {group.rows.map((row) => {
                      const currentRow = rowIndex++;
                      const solidEnd = row.ga ?? row.end ?? row.mvp ?? totalQ;
                      const width = Math.max(0.3, solidEnd - row.start);
                      const hatchColor = toneHatch[group.tone];
                      return (
                        <motion.div
                          key={row.title}
                          {...fadeUp(currentRow + 1)}
                          className="grid min-h-[2.5rem] items-center border-b border-border/40 last:border-b-0 hover:bg-muted/20 transition-colors"
                          style={{ gridTemplateColumns: `minmax(16rem, 1.6fr) ${qCols}` }}
                        >
                          <div className="flex items-center gap-3 px-4 py-2">
                            <div className={`h-5 w-1 shrink-0 rounded-full ${groupTone.dot}`} />
                            <div className="text-xs font-semibold text-foreground leading-snug">{row.title}</div>
                          </div>
                          <div
                            className="relative h-full min-h-[2.5rem] border-l border-border/60 bg-[linear-gradient(to_right,hsl(var(--border)/0.45)_1px,transparent_1px)]"
                            style={{ gridColumn: `span ${totalQ} / span ${totalQ}`, backgroundSize: `${100 / totalQ}% 100%` }}
                          >
                            <div
                              className={`absolute top-1/2 h-3.5 -translate-y-1/2 rounded-[3px] ${groupTone.dot}`}
                              style={{ left: `${(row.start / totalQ) * 100}%`, width: `${(width / totalQ) * 100}%` }}
                            />
                            {row.continuous && solidEnd < totalQ && (
                              <div
                                aria-label="Continuous investment"
                                className="absolute top-1/2 h-3.5 -translate-y-1/2 rounded-[3px] border"
                                style={{
                                  left: `${(solidEnd / totalQ) * 100}%`,
                                  width: `${((totalQ - solidEnd) / totalQ) * 100}%`,
                                  borderColor: `hsl(var(${hatchColor}) / 0.55)`,
                                  backgroundColor: `hsl(var(${hatchColor}) / 0.055)`,
                                  backgroundImage: `repeating-linear-gradient(135deg, transparent 0, transparent 14px, hsl(var(${hatchColor}) / 0.78) 14px, hsl(var(${hatchColor}) / 0.78) 15.5px, transparent 15.5px, transparent 25px)`,
                                }}
                              />
                            )}
                            {row.mvp !== undefined && (
                              <span
                                aria-label="MVP"
                                className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-card bg-[hsl(var(--se-quartz-orange))]"
                                style={{ left: `${(row.mvp / totalQ) * 100}%` }}
                              />
                            )}
                            {row.ga !== undefined && (
                              <span
                                aria-label="Full GA"
                                className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-card bg-accent"
                                style={{ left: `${(row.ga / totalQ) * 100}%` }}
                              />
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </motion.div>
          {hasMilestones && (
            <div className="mt-4 flex justify-end gap-6 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-2"><i className="h-3.5 w-3.5 rounded-full bg-[hsl(var(--se-quartz-orange))]" />MVP</span>
              <span className="flex items-center gap-2"><i className="h-3.5 w-3.5 rounded-full bg-accent" />Full GA</span>
              <span className="flex items-center gap-2"><i className="h-3 w-8 rounded-[2px] border border-primary/55 bg-primary/5 bg-[repeating-linear-gradient(135deg,transparent_0,transparent_7px,hsl(var(--primary)/0.78)_7px,hsl(var(--primary)/0.78)_8px,transparent_8px,transparent_13px)]" />Continuous investment after GA</span>
            </div>
          )}
        </CPSlideFrame>
      );
    }

    case "spine": {
      return (
        <div className="min-h-screen flex flex-col bg-background">
          <div className="h-1.5 w-1/2 bg-primary" />
          <div className="flex-1 flex flex-col justify-center px-8 lg:px-24 py-14">
            <motion.h2
              {...fadeUp(0)}
              className="text-center text-3xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight max-w-5xl mx-auto"
            >
              {slide.title}
            </motion.h2>
            <motion.p
              {...fadeUp(1)}
              className="mt-6 mx-auto max-w-4xl text-center text-sm lg:text-base text-muted-foreground leading-relaxed"
            >
              {slide.body}
            </motion.p>
            <div className="mt-10 mx-auto w-full max-w-4xl space-y-5">
              {slide.rows.map((row, i) => (
                <motion.div
                  key={row.title}
                  {...fadeUp(i + 2)}
                  className="rounded-2xl border border-border bg-card/60 px-6 py-5 flex items-center gap-6"
                >
                  <div className="h-14 w-14 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-2xl">
                    {row.icon}
                  </div>
                  <div>
                    <div className="text-xl lg:text-2xl font-bold text-foreground">{row.title}</div>
                    <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm lg:text-base text-muted-foreground">
                      {row.items.map((it, k) => (
                        <span key={it} className="flex items-center gap-3">
                          {k > 0 && <span className="text-border">·</span>}
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    case "spinehub": {
      return (
        <div className="min-h-screen flex flex-col bg-background">
          <div className="h-1.5 w-1/2 bg-primary" />
          <div className="flex-1 flex flex-col justify-center px-8 lg:px-20 py-14">
            <motion.div {...fadeUp(0)} className="text-center">
              <span className="rounded-full bg-primary/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-primary">
                {slide.eyebrow}
              </span>
            </motion.div>
            <motion.h2
              {...fadeUp(1)}
              className="mt-6 text-center text-3xl lg:text-5xl font-bold text-foreground tracking-tight max-w-5xl mx-auto"
            >
              {slide.title}
            </motion.h2>
            {slide.subtitle ? (
              <motion.p {...fadeUp(2)} className="mt-4 mx-auto max-w-4xl text-center text-sm lg:text-base text-muted-foreground leading-relaxed">
                {slide.subtitle}
              </motion.p>
            ) : null}

            <div className="mt-12 mx-auto w-full max-w-6xl flex flex-col lg:flex-row items-stretch gap-8 lg:gap-10">
              <motion.div {...fadeUp(3)} className="lg:w-[34%] flex">
                <div className="flex-1 rounded-2xl border-2 border-primary bg-primary/5 px-6 py-8 flex flex-col justify-center text-center">
                  <div className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Data spine</div>
                  <div className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">{slide.center.title}</div>
                  <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                    {slide.center.items.map((item) => (
                      <li key={item} className="flex items-center justify-center gap-2">
                        <span className="text-primary">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <div className="hidden lg:flex items-center justify-center">
                <div className="h-px w-12 bg-primary/40" />
                <span className="mx-2 text-primary text-2xl">›</span>
                <div className="h-px w-12 bg-primary/40" />
              </div>

              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {slide.spokes.map((spoke, i) => (
                  <motion.div
                    key={spoke.title}
                    {...fadeUp(i + 4)}
                    className="rounded-xl border border-border bg-card/60 px-5 py-5"
                  >
                    <div className="text-base lg:text-lg font-bold text-foreground">{spoke.title}</div>
                    <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                      {spoke.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 text-primary text-[10px]">▪</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    case "hero": {

      return (
        <div className="min-h-screen flex flex-col bg-background relative">
          <div className="h-1.5 w-1/2 bg-primary" />
          <div className="flex-1 flex flex-col items-center justify-center text-center px-8 py-14">
            <motion.div
              {...fadeUp(0)}
              className="rounded-full bg-primary/10 px-5 py-2 text-[11px] lg:text-xs font-bold uppercase tracking-widest text-primary"
            >
              ✦ {slide.badge}
            </motion.div>
            <motion.h2 {...fadeUp(1)} className="mt-8 text-4xl lg:text-6xl font-bold text-foreground tracking-tight">
              {slide.titleDark}
            </motion.h2>
            <motion.h2 {...fadeUp(2)} className="mt-2 text-4xl lg:text-6xl font-bold text-primary tracking-tight max-w-5xl">
              {slide.titleGreen}
            </motion.h2>
            <motion.p {...fadeUp(3)} className="mt-6 text-lg lg:text-2xl font-semibold text-primary">
              {slide.tagline}
            </motion.p>
            <motion.p {...fadeUp(4)} className="mt-5 max-w-3xl text-sm lg:text-base text-muted-foreground leading-relaxed">
              {slide.body}
            </motion.p>
            <motion.div {...fadeUp(5)} className="mt-8 flex flex-wrap justify-center gap-3">
              {slide.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-border bg-background px-7 py-2.5 text-xs lg:text-sm font-semibold text-foreground"
                >
                  {chip}
                </span>
              ))}
            </motion.div>
          </div>
          <div className="flex items-center justify-between px-8 lg:px-16 pb-6 text-[11px] text-muted-foreground">
            <span>Property of Schneider Electric</span>
            <span>General</span>
            <span className="flex items-center gap-1.5">
              <span className="text-primary font-bold text-sm">SE</span>
              <span className="font-semibold tracking-wide text-foreground/70">ADVISORY SERVICES</span>
            </span>
          </div>
        </div>
      );
    }

    case "familymap": {
      const borders = {
        primary: "border-[hsl(var(--se-highlighter))]",
        accent: "border-primary",
        warn: "border-[hsl(var(--se-quartz-orange))]",
        muted: "border-[hsl(var(--se-turquoise))]",
      } as const;
      const labels = {
        primary: "text-[hsl(var(--se-highlighter))]",
        accent: "text-primary",
        warn: "text-[hsl(var(--se-quartz-orange))]",
        muted: "text-[hsl(var(--se-turquoise))]",
      } as const;


      return (
        <div className="min-h-screen flex flex-col justify-center bg-secondary px-8 lg:px-20 py-14 relative overflow-hidden">
          <motion.h2 {...fadeUp(0)} className="text-center text-2xl lg:text-4xl font-bold leading-tight text-primary">
            {slide.titleLead} <span className="text-primary-foreground">{slide.titleHighlight}</span> {slide.titleRest}
          </motion.h2>

          <motion.div {...fadeUp(1)} className="mt-10 text-center text-primary-foreground text-2xl lg:text-4xl font-light tracking-wide">
            {slide.brandLead} <span className="font-bold">{slide.brandStrong}</span>
            <sup className="text-xl lg:text-2xl">+</sup>
          </motion.div>

          <div className={`mt-10 grid grid-cols-1 gap-8 lg:gap-10 ${slide.families.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}>
            {slide.families.map((family, fi) => (
              <motion.div key={family.label} {...fadeUp(fi + 2)}>
                <div className="text-center">
                  <div className={`text-sm lg:text-base font-bold ${labels[family.tone]}`}>{family.label}</div>
                  <div className="text-xs text-primary-foreground/70">product family</div>
                </div>
                {family.subfamilies ? (
                  <div className="mt-4 grid grid-cols-1 gap-4">
                    {family.subfamilies.map((sub) => (
                      <div key={sub.label} className={`rounded-md border ${borders[family.tone]} bg-secondary/40 px-4 py-3`}>
                        <div className={`text-[11px] lg:text-xs font-bold uppercase tracking-wider ${labels[family.tone]}`}>{sub.label}</div>
                        <div className="mt-2 grid grid-cols-2 gap-2">
                          {sub.products.map((product) => (
                            <div
                              key={product}
                              className={`rounded-md border ${borders[family.tone]} bg-secondary/60 px-3 py-3 text-[10px] lg:text-[11px] text-center font-semibold uppercase tracking-wide text-primary-foreground leading-snug`}
                            >
                              {product}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={`mt-4 grid ${(family.products?.length ?? 0) <= 2 ? "grid-cols-1 max-w-[52%] mx-auto gap-4" : (family.products?.length ?? 0) > 6 ? "grid-cols-3 gap-3" : "grid-cols-2 gap-4"}`}>
                    {(family.products ?? []).map((product) => (
                      <div
                        key={product}
                        className={`rounded-md border ${borders[family.tone]} bg-secondary/60 px-3 ${(family.products?.length ?? 0) > 6 ? "py-4 text-[10px] lg:text-[11px]" : (family.products?.length ?? 0) > 4 ? "py-4 text-[10px] lg:text-xs" : "py-6 text-[11px] lg:text-xs"} text-center font-semibold uppercase tracking-wide text-primary-foreground leading-snug`}
                      >
                        {product}
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {slide.platformLayer ? (
            <motion.div {...fadeUp(slide.families.length + 2)} className="mt-8">
              <div className="rounded-lg border border-[hsl(var(--se-highlighter))]/50 bg-[hsl(var(--se-highlighter))]/10 px-6 py-3 text-center">
                <span className="text-sm lg:text-base font-semibold text-[hsl(var(--se-highlighter))]">{slide.platformLayer}</span>
              </div>
            </motion.div>
          ) : null}

          <div className="mt-12 flex justify-end items-center gap-2">
            <span className="text-primary font-bold">SE</span>
            <span className="text-primary-foreground font-light text-xs lg:text-sm">ADVISORY SERVICES</span>
          </div>
        </div>
      );
    }


    case "vision": {
      return (
        <div className="min-h-screen flex flex-col justify-center bg-secondary px-8 lg:px-24 py-16 relative overflow-hidden">
          <motion.div {...fadeUp(0)} className="flex justify-center">
            <span className="rounded-full border border-[hsl(var(--se-highlighter))] px-4 py-1 text-[11px] font-bold tracking-[0.25em] text-[hsl(var(--se-highlighter))]">
              {slide.badge}
            </span>
          </motion.div>

          <motion.h2 {...fadeUp(1)} className="mt-8 text-center text-3xl lg:text-5xl font-bold leading-tight">
            <span className="text-primary-foreground">{slide.titleLead} </span>
            <span className="text-[hsl(var(--se-highlighter))]">{slide.titleHighlight}</span>
            {slide.titleRest ? <span className="text-primary-foreground"> {slide.titleRest}</span> : null}
          </motion.h2>

          <motion.p {...fadeUp(2)} className="mx-auto mt-8 max-w-3xl text-center text-sm lg:text-base leading-relaxed text-primary-foreground/75">
            {slide.manifesto}
          </motion.p>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {slide.promises.map((promise, i) => (
              <motion.div
                key={promise.title}
                {...fadeUp(i + 3)}
                className="rounded-xl border border-[hsl(var(--se-highlighter))]/40 bg-secondary/60 px-6 py-7 text-center"
              >
                <div className="text-lg lg:text-xl font-bold text-[hsl(var(--se-highlighter))]">{promise.title}</div>
                <p className="mt-3 text-xs lg:text-sm leading-relaxed text-primary-foreground/75">{promise.line}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(6)} className="mt-12 text-center text-primary-foreground text-xl lg:text-2xl font-light tracking-wide">
            {slide.tagline}
          </motion.div>

          <div className="mt-10 flex justify-end items-center gap-2">
            <span className="text-primary font-bold">SE</span>
            <span className="text-primary-foreground font-light text-xs lg:text-sm">ADVISORY SERVICES</span>
          </div>
        </div>
      );
    }

    case "strategicroadmap": {
      const toneStyles = {
        primary: "border-primary bg-primary/10 text-primary",
        accent: "border-[hsl(var(--se-highlighter))] bg-[hsl(var(--se-highlighter))]/10 text-[hsl(var(--se-highlighter))]",
        warn: "border-[hsl(var(--se-quartz-orange))] bg-[hsl(var(--se-quartz-orange))]/10 text-[hsl(var(--se-quartz-orange))]",
      };
      return (
        <div className="min-h-screen flex flex-col bg-secondary px-8 lg:px-20 py-12 lg:py-14 relative overflow-hidden">
          <motion.div {...fadeUp(0)}>
            <span className="rounded-full border border-[hsl(var(--se-highlighter))] px-4 py-1 text-[11px] font-bold tracking-[0.2em] text-[hsl(var(--se-highlighter))]">
              {slide.badge}
            </span>
          </motion.div>
          <motion.h2 {...fadeUp(1)} className="mt-5 max-w-6xl text-3xl lg:text-5xl font-bold leading-tight text-primary-foreground">
            {slide.title}
          </motion.h2>
          <motion.p {...fadeUp(2)} className="mt-4 max-w-5xl text-sm lg:text-base leading-relaxed text-primary-foreground/70">
            {slide.subtitle}
          </motion.p>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
            {slide.horizons.map((horizon, i) => (
              <motion.div key={horizon.period} {...fadeUp(i + 3)} className="relative border-t border-primary-foreground/25 pt-5">
                {i < slide.horizons.length - 1 ? <div className="hidden lg:block absolute top-[-3px] right-[-22px] text-primary-foreground/35 text-xl">›</div> : null}
                <div className={`inline-flex rounded-md border px-3 py-1 text-xs font-bold tracking-widest ${toneStyles[horizon.tone]}`}>
                  {horizon.period}
                </div>
                <div className="mt-4 text-xl font-bold text-primary-foreground">{horizon.title}</div>
                <p className="mt-2 min-h-14 text-xs lg:text-sm leading-relaxed text-primary-foreground/70">{horizon.thesis}</p>
                <div className="mt-5 space-y-3">
                  {horizon.milestones.map((milestone) => (
                    <div key={milestone} className="flex gap-3 border-t border-primary-foreground/15 pt-3 text-xs lg:text-sm leading-snug text-primary-foreground/90">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{milestone}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(6)} className="mt-8 border-t border-primary-foreground/25 pt-5">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--se-highlighter))]">Strategic drivers</div>
            <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {slide.drivers.map((driver) => (
                <div key={driver.title}>
                  <div className="text-sm font-bold text-primary-foreground">{driver.title}</div>
                  <div className="mt-1 text-[11px] leading-snug text-primary-foreground/65">{driver.line}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="mt-auto pt-6 text-[10px] text-primary-foreground/50">{slide.note}</div>
        </div>
      );
    }

    case "roadmap2028": {
      const laneDot = {
        primary: "bg-primary",
        accent: "bg-[hsl(var(--se-highlighter))]",
        warn: "bg-[hsl(var(--se-quartz-orange))]",
        muted: "bg-[hsl(var(--se-quartz-blue))]",
      };
      return (
        <div className="min-h-screen flex flex-col bg-secondary px-8 lg:px-20 py-12 lg:py-14 relative overflow-hidden">
          <motion.div {...fadeUp(0)}>
            <span className="rounded-full border border-[hsl(var(--se-highlighter))] px-4 py-1 text-[11px] font-bold tracking-[0.2em] text-[hsl(var(--se-highlighter))]">
              {slide.badge}
            </span>
          </motion.div>
          <motion.h2 {...fadeUp(1)} className="mt-5 max-w-6xl text-3xl lg:text-4xl font-bold leading-tight text-primary-foreground">
            {slide.title}
          </motion.h2>
          <motion.p {...fadeUp(2)} className="mt-3 max-w-5xl text-sm lg:text-base leading-relaxed text-primary-foreground/70">
            {slide.subtitle}
          </motion.p>

          <motion.div {...fadeUp(3)} className="mt-7 hidden lg:grid grid-cols-[190px_repeat(3,1fr)] gap-x-5">
            <div />
            {slide.horizons.map((horizon) => (
              <div key={horizon.period} className="flex items-baseline gap-3 border-b border-primary-foreground/25 pb-3">
                <span className="rounded-md border border-[hsl(var(--se-highlighter))] px-2.5 py-0.5 text-[11px] font-bold tracking-widest text-[hsl(var(--se-highlighter))]">
                  {horizon.period}
                </span>
                <span className="text-sm font-bold text-primary-foreground">{horizon.title}</span>
              </div>
            ))}
          </motion.div>

          <div className="mt-4 space-y-2.5">
            {slide.lanes.map((lane, i) => (
              <motion.div
                key={lane.label}
                {...fadeUp(i + 4)}
                className="grid grid-cols-1 lg:grid-cols-[190px_repeat(3,1fr)] gap-x-5 gap-y-2 items-stretch"
              >
                <div className="flex items-center gap-2.5">
                  <span className={`size-2 shrink-0 rounded-full ${laneDot[lane.tone]}`} />
                  <span className="text-sm font-bold text-primary-foreground">{lane.label}</span>
                </div>
                {lane.milestones.map((milestone, j) => (
                  <div
                    key={milestone}
                    className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-2.5 text-xs leading-snug text-primary-foreground/90 flex items-center gap-2.5"
                  >
                    <span className="lg:hidden shrink-0 rounded border border-[hsl(var(--se-highlighter))] px-1.5 py-px text-[9px] font-bold text-[hsl(var(--se-highlighter))]">
                      {slide.horizons[j].period}
                    </span>
                    <span>{milestone}</span>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(10)} className="mt-7 border-t border-primary-foreground/25 pt-4">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--se-highlighter))]">Strategic drivers</div>
            <div className="mt-3 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {slide.drivers.map((driver) => (
                <div key={driver.title}>
                  <div className="text-sm font-bold text-primary-foreground">{driver.title}</div>
                  <div className="mt-1 text-[11px] leading-snug text-primary-foreground/65">{driver.line}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="mt-auto pt-5 text-[10px] text-primary-foreground/50">{slide.note}</div>
        </div>
      );
    }

    case "valuecase": {
      return (
        <div className="min-h-screen flex flex-col bg-background px-8 lg:px-20 py-12 lg:py-14 relative overflow-hidden">
          <motion.div {...fadeUp(0)} className="flex items-center gap-3">
            <span className="rounded-full bg-primary/10 px-4 py-1.5 text-[11px] font-bold tracking-widest text-primary">
              {slide.badge}
            </span>
          </motion.div>
          <motion.h2 {...fadeUp(1)} className="mt-6 max-w-5xl text-3xl lg:text-5xl font-bold leading-tight text-foreground">
            {slide.titleLead} <span className="text-primary">{slide.titleHighlight}</span>
          </motion.h2>
          <motion.p {...fadeUp(2)} className="mt-4 max-w-5xl text-sm lg:text-base leading-relaxed text-muted-foreground">
            {slide.thesis}
          </motion.p>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-6">
            <motion.div {...fadeUp(3)} className="rounded-xl bg-secondary px-6 py-6 text-primary-foreground">
              <div className="text-[11px] font-bold uppercase tracking-widest text-[hsl(var(--se-highlighter))]">Financial impact to validate</div>
              <div className="mt-5 space-y-5">
                {slide.financials.map((item) => (
                  <div key={item.label} className="border-t border-primary-foreground/20 pt-4 first:border-t-0 first:pt-0">
                    <div className="text-xs font-bold uppercase tracking-wide text-primary-foreground/65">{item.label}</div>
                    <div className="mt-1 text-xl lg:text-2xl font-bold text-[hsl(var(--se-highlighter))]">{item.value}</div>
                    <p className="mt-1.5 text-xs lg:text-sm leading-relaxed text-primary-foreground/75">{item.line}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {slide.outcomes.map((outcome, i) => (
                <motion.div key={outcome.title} {...fadeUp(i + 4)} className="rounded-xl border border-border bg-card p-5">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-primary">0{i + 1}</div>
                  <div className="mt-2 text-base lg:text-lg font-bold text-foreground">{outcome.title}</div>
                  <p className="mt-2 text-xs lg:text-sm leading-relaxed text-muted-foreground">{outcome.line}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div {...fadeUp(8)} className="mt-6 border-l-4 border-primary bg-primary/5 px-5 py-3 text-xs lg:text-sm font-semibold text-foreground">
            {slide.validation}
          </motion.div>
        </div>
      );
    }

    case "costbenefit": {
      return (
        <div className="min-h-screen flex flex-col bg-background px-8 lg:px-20 py-10 lg:py-12 overflow-hidden">
          <motion.div {...fadeUp(0)} className="text-[11px] font-bold uppercase tracking-widest text-primary">
            {slide.eyebrow}
          </motion.div>
          <motion.h2 {...fadeUp(1)} className="mt-4 max-w-6xl text-3xl lg:text-5xl font-bold leading-tight text-foreground">
            {slide.title}
          </motion.h2>
          <motion.p {...fadeUp(2)} className="mt-3 max-w-6xl text-sm lg:text-base leading-relaxed text-muted-foreground">
            {slide.subtitle}
          </motion.p>

          <div className="mt-7 grid grid-cols-1 lg:grid-cols-[0.92fr_auto_1.08fr] gap-4 lg:gap-5 items-stretch">
            <motion.div {...fadeUp(3)} className="rounded-lg border border-border bg-card p-5">
              <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Incremental investment to 2027</div>
              <div className="mt-4 space-y-3">
                {slide.costs.map((cost, i) => (
                  <div key={cost.label} className="border-t border-border pt-3 first:border-t-0 first:pt-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="text-sm font-bold text-foreground">{cost.label}</div>
                      <div className="shrink-0 text-sm font-bold text-foreground">{cost.value}</div>
                    </div>
                    <div className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{cost.items.join(" • ")}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp(4)} className="hidden lg:flex flex-col items-center justify-center gap-2 px-1 text-primary">
              <div className="h-px w-12 bg-primary" />
              <div className="text-2xl font-bold">→</div>
              <div className="text-[9px] font-bold uppercase tracking-widest [writing-mode:vertical-rl] rotate-180">Value conversion</div>
            </motion.div>

            <motion.div {...fadeUp(5)} className="rounded-lg bg-secondary p-5 text-primary-foreground">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[hsl(var(--se-highlighter))]">Value pools from the value case</div>
              <div className="mt-4 grid grid-cols-1 gap-3">
                {slide.valuePools.map((pool, i) => (
                  <div key={pool.label} className="border-t border-primary-foreground/20 pt-3 first:border-t-0 first:pt-0">
                    <div className="text-[10px] font-bold uppercase tracking-wide text-primary-foreground/65">0{i + 1} {pool.label}</div>
                    <div className="mt-1 text-lg font-bold text-[hsl(var(--se-highlighter))]">{pool.value}</div>
                    <div className="mt-1 text-[11px] leading-relaxed text-primary-foreground/75">{pool.line}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div {...fadeUp(6)} className="mt-5 rounded-lg border border-primary/30 bg-primary/5 px-5 py-3 text-center text-sm font-bold text-foreground">
            {slide.equation}
          </motion.div>
          <motion.div {...fadeUp(7)} className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-2">
            {slide.gates.map((gate, i) => (
              <div key={gate} className="border-l-2 border-primary bg-card px-3 py-2 text-xs font-semibold text-foreground">0{i + 1} {gate}</div>
            ))}
          </motion.div>
          <motion.div {...fadeUp(8)} className="mt-4 grid grid-cols-[auto_1fr] overflow-hidden rounded-lg bg-secondary">
            <div className="flex items-center bg-primary px-4 text-[10px] font-bold uppercase tracking-widest text-secondary">Board decision</div>
            <div className="px-5 py-3 text-sm font-semibold leading-relaxed text-primary-foreground">{slide.decision}</div>
          </motion.div>
        </div>
      );
    }

    case "competitor": {
      return (
        <div className="min-h-screen flex flex-col bg-background px-8 lg:px-20 py-10 lg:py-12 overflow-hidden">
          <motion.div {...fadeUp(0)} className="text-[11px] font-bold uppercase tracking-widest text-primary">
            {slide.eyebrow}
          </motion.div>
          <motion.h2 {...fadeUp(1)} className="mt-4 max-w-6xl text-3xl lg:text-5xl font-bold leading-tight text-foreground">
            {slide.title}
          </motion.h2>
          <motion.p {...fadeUp(2)} className="mt-3 max-w-6xl text-sm lg:text-base leading-relaxed text-muted-foreground">
            {slide.subtitle}
          </motion.p>

          <motion.div {...fadeUp(3)} className="mt-7 overflow-hidden rounded-lg border border-border bg-card">
            <div className="grid grid-cols-[0.72fr_0.9fr_2.2fr_0.9fr_1.65fr] bg-secondary text-primary-foreground">
              {slide.headers.map((header) => (
                <div key={header} className="border-r border-primary-foreground/15 px-3 py-3 text-[10px] font-bold uppercase tracking-widest last:border-r-0">
                  {header}
                </div>
              ))}
            </div>
            {slide.rows.map((row, i) => (
              <motion.div
                key={row.company}
                {...fadeUp(i + 4)}
                className={`grid grid-cols-[0.72fr_0.9fr_2.2fr_0.9fr_1.65fr] border-t border-border first:border-t-0 ${row.featured ? "bg-primary/10" : i % 2 ? "bg-muted/10" : "bg-card"}`}
              >
                <div className={`px-3 py-3 text-sm font-bold ${row.featured ? "text-primary" : "text-foreground"}`}>{row.company}</div>
                <div className="px-3 py-3 text-xs leading-snug text-foreground/80">{row.price}</div>
                <div className="px-3 py-3 text-xs leading-snug text-foreground/80">{row.scope}</div>
                <div className="px-3 py-3">
                  <span className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold ${row.ai === "Advanced" ? "bg-[hsl(var(--se-quartz-orange))]/15 text-[hsl(var(--se-quartz-orange))]" : "bg-primary/10 text-primary"}`}>
                    {row.ai}
                  </span>
                </div>
                <div className="px-3 py-3 text-xs font-medium leading-snug text-foreground">{row.position}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeUp(9)} className="mt-6 grid grid-cols-[auto_1fr] items-stretch overflow-hidden rounded-lg border border-primary/30 bg-secondary">
            <div className="flex items-center bg-primary px-5 text-xs font-bold uppercase tracking-widest text-secondary">Board implication</div>
            <div className="px-5 py-4 text-sm font-semibold leading-relaxed text-primary-foreground">{slide.takeaway}</div>
          </motion.div>
          <p className="mt-3 text-[10px] leading-relaxed text-muted-foreground">{slide.source}</p>
        </div>
      );
    }

    case "pricing": {
      return (
        <div className="min-h-screen flex flex-col bg-background px-8 lg:px-20 py-10 lg:py-12 overflow-hidden">
          <motion.div {...fadeUp(0)} className="text-[11px] font-bold uppercase tracking-widest text-primary">
            {slide.eyebrow}
          </motion.div>
          <motion.h2 {...fadeUp(1)} className="mt-4 max-w-6xl text-3xl lg:text-5xl font-bold leading-tight text-foreground">
            {slide.title}
          </motion.h2>
          <motion.p {...fadeUp(2)} className="mt-3 max-w-6xl text-sm lg:text-base leading-relaxed text-muted-foreground">
            {slide.subtitle}
          </motion.p>

          <div className="mt-7 grid grid-cols-1 lg:grid-cols-[1.65fr_0.85fr] gap-5">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {slide.tiers.map((tier, i) => (
                  <motion.div
                    key={tier.name}
                    {...fadeUp(i + 3)}
                    className={`relative rounded-lg border p-5 ${tier.featured ? "border-primary bg-secondary text-primary-foreground" : "border-border bg-card"}`}
                  >
                    {tier.featured && <div className="absolute right-3 top-3 text-[9px] font-bold uppercase tracking-widest text-[hsl(var(--se-highlighter))]">Recommended</div>}
                    <div className={`text-[10px] font-bold uppercase tracking-widest ${tier.featured ? "text-primary-foreground/65" : "text-primary"}`}>Tier 0{i + 1}</div>
                    <div className="mt-2 text-xl font-bold">{tier.name}</div>
                    <div className={`mt-1 min-h-10 text-xs leading-snug ${tier.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{tier.buyer}</div>
                    <div className={`mt-4 border-y py-3 text-sm lg:text-base font-bold leading-tight ${tier.featured ? "border-primary-foreground/20 text-[hsl(var(--se-highlighter))]" : "border-border text-foreground"}`}>{tier.price}</div>
                    <ul className={`mt-4 space-y-2 text-xs leading-snug ${tier.featured ? "text-primary-foreground/80" : "text-foreground/80"}`}>
                      {tier.includes.map((item) => <li key={item}>• {item}</li>)}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <motion.div {...fadeUp(6)} className="mt-4 grid grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-lg border border-border bg-card">
                {slide.scaleUnits.map((unit) => (
                  <div key={unit.label} className="border-r border-border p-3 last:border-r-0">
                    <div className="text-[9px] font-bold uppercase tracking-widest text-primary">{unit.label}</div>
                    <div className="mt-1 text-xs font-semibold leading-snug text-foreground">{unit.value}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div {...fadeUp(7)} className="overflow-hidden rounded-lg border border-border bg-card">
              <div className="bg-secondary px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">Buying-model benchmark</div>
              {slide.competitors.map((item) => (
                <div key={item.company} className={`border-t border-border px-4 py-3 ${item.company === "RA+" ? "bg-primary/10" : ""}`}>
                  <div className="flex items-center justify-between gap-3">
                    <span className={`text-sm font-bold ${item.company === "RA+" ? "text-primary" : "text-foreground"}`}>{item.company}</span>
                    <span className="text-[9px] font-bold text-muted-foreground">{item.transparency}</span>
                  </div>
                  <div className="mt-1 text-[11px] leading-snug text-foreground/75">{item.model}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div {...fadeUp(8)} className="mt-5 grid grid-cols-[auto_1fr] overflow-hidden rounded-lg bg-secondary">
            <div className="flex items-center bg-primary px-5 text-[10px] font-bold uppercase tracking-widest text-secondary">Board decision</div>
            <div className="px-5 py-3 text-sm font-semibold leading-relaxed text-primary-foreground">{slide.decision}</div>
          </motion.div>
          <p className="mt-2 text-[10px] leading-relaxed text-muted-foreground">{slide.source}</p>
        </div>
      );
    }

    case "features": {
      const posStyle = (p: string) =>
        p === "Market leading"
          ? "bg-primary/15 text-primary border-primary/40"
          : p === "On parity"
            ? "bg-muted/20 text-foreground/80 border-border"
            : p === "Closing gap"
              ? "bg-[hsl(var(--se-quartz-orange))]/15 text-[hsl(var(--se-quartz-orange))] border-[hsl(var(--se-quartz-orange))]/40"
              : "bg-destructive/10 text-destructive border-destructive/30";
      return (
        <CPSlideFrame eyebrow={slide.eyebrow} title={slide.title} subtitle={slide.subtitle}>
          <motion.div {...fadeUp(0)} className="overflow-hidden rounded-lg border border-border bg-card">
            <div className="grid grid-cols-[1.5fr_2.4fr_1fr_2fr] bg-secondary text-primary-foreground">
              {["Capability", "What RA+ delivers", "Expected Position", "Market benchmark"].map((h) => (
                <div key={h} className="border-r border-primary-foreground/15 px-3 py-2.5 text-[10px] font-bold uppercase tracking-widest last:border-r-0">
                  {h}
                </div>
              ))}
            </div>
            {slide.rows.map((row, i) => (
              <motion.div
                key={row.capability}
                {...fadeUp(i + 1)}
                className={`grid grid-cols-[1.5fr_2.4fr_1fr_2fr] border-t border-border ${i % 2 ? "bg-muted/10" : "bg-card"}`}
              >
                <div className="px-3 py-2.5 text-sm font-bold text-foreground">{row.capability}</div>
                <div className="px-3 py-2.5 text-xs leading-snug text-foreground/80">{row.detail}</div>
                <div className="px-3 py-2.5">
                  <span className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-bold ${posStyle(row.position)}`}>
                    {row.position}
                  </span>
                </div>
                <div className="px-3 py-2.5 text-xs leading-snug text-muted-foreground">{row.benchmark}</div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div {...fadeUp(9)} className="mt-5 rounded-lg border border-primary/30 bg-secondary px-5 py-3">
            <div className="text-[10px] font-bold uppercase tracking-widest text-primary">Board implication</div>
            <p className="mt-1 text-sm font-semibold text-primary-foreground">{slide.takeaway}</p>
          </motion.div>
          <p className="mt-3 text-[11px] text-muted-foreground">{slide.source}</p>
        </CPSlideFrame>
      );
    }

    case "journey": {
      const toneMap = {
        muted: "border-border bg-card",
        primary: "border-primary/40 bg-primary/5",
        accent: "border-primary bg-primary text-primary-foreground",
        warn: "border-border bg-card",
      } as const;
      const badgeTone = {
        muted: "text-muted-foreground",
        primary: "text-primary",
        accent: "text-[hsl(var(--se-highlighter))]",
        warn: "text-muted-foreground",
      } as const;
      const textTone = {
        muted: "text-muted-foreground",
        primary: "text-muted-foreground",
        accent: "text-primary-foreground/80",
        warn: "text-muted-foreground",
      } as const;
      const titleTone = {
        muted: "text-foreground",
        primary: "text-foreground",
        accent: "text-primary-foreground",
        warn: "text-foreground",
      } as const;
      return (
        <CPSlideFrame eyebrow={slide.eyebrow} title={slide.title} subtitle={slide.subtitle}>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {slide.stages.map((st, i) => (
              <motion.div
                key={st.stage}
                {...fadeUp(i)}
                className={`relative rounded-2xl border p-5 flex flex-col ${toneMap[st.tone]}`}
              >
                {i < slide.stages.length - 1 && (
                  <div className="hidden xl:block absolute top-1/2 -right-3 text-primary font-bold">→</div>
                )}
                <div className={`text-[10px] font-bold uppercase tracking-widest ${badgeTone[st.tone]}`}>{st.stage}</div>
                <div className={`mt-1.5 text-lg font-bold leading-tight ${titleTone[st.tone]}`}>{st.title}</div>
                <dl className="mt-3 space-y-2.5 text-xs leading-relaxed">
                  <div>
                    <dt className={`font-bold uppercase tracking-wide text-[9px] ${badgeTone[st.tone]}`}>Buyer moment</dt>
                    <dd className={textTone[st.tone]}>{st.buyer}</dd>
                  </div>
                  <div>
                    <dt className={`font-bold uppercase tracking-wide text-[9px] ${badgeTone[st.tone]}`}>Products</dt>
                    <dd className={textTone[st.tone]}>{st.products}</dd>
                  </div>
                  <div>
                    <dt className={`font-bold uppercase tracking-wide text-[9px] ${badgeTone[st.tone]}`}>Value</dt>
                    <dd className={textTone[st.tone]}>{st.value}</dd>
                  </div>
                  <div>
                    <dt className={`font-bold uppercase tracking-wide text-[9px] ${badgeTone[st.tone]}`}>Expansion trigger</dt>
                    <dd className={textTone[st.tone]}>{st.trigger}</dd>
                  </div>
                </dl>
              </motion.div>
            ))}
          </div>
          {slide.proof && slide.proof.length > 0 && (
            <motion.div {...fadeUp(5)} className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {slide.proof.map((p) => (
                <div key={p.label} className="rounded-xl border border-border bg-secondary/40 px-4 py-3">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-primary">{p.label}</div>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{p.value}</p>
                </div>
              ))}
            </motion.div>
          )}
          <motion.div {...fadeUp(6)} className="mt-5 border-l-4 border-primary bg-primary/5 px-5 py-3 text-sm font-semibold text-foreground">
            {slide.takeaway}
          </motion.div>
        </CPSlideFrame>
      );
    }

    case "closing":

      return (
        <CPSlideFrame eyebrow={slide.eyebrow} title={slide.title} subtitle={slide.subtitle}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {slide.asks.map((a, i) => (
              <motion.div
                key={a.title}
                {...fadeUp(i)}
                className="rounded-2xl border border-primary/40 bg-primary/5 p-6"
              >
                <div className="text-[11px] font-bold uppercase tracking-widest text-primary">
                  Decision {String(i + 1).padStart(2, "0")}
                </div>
                <div className="text-lg font-bold text-foreground mt-2 leading-tight">{a.title}</div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{a.line}</p>
              </motion.div>
            ))}
          </div>
        </CPSlideFrame>
      );
  }
};
