import { Link } from "react-router-dom";
import { cpDeck } from "@/data/cp-roadmap-deck";

type TimelineSlide = Extract<(typeof cpDeck)[number], { kind: "timeline" }>;

const roadmap = cpDeck.find(
  (s): s is TimelineSlide =>
    s.kind === "timeline" && s.title === "One platform, three years of converging value",
);

const QUARTERS = ["Q1", "Q2", "Q3", "Q4"];

// Investment and expected value per product. Monetary figures stay Finance placeholders
// until Finance validates them, consistent with the deck's guardrails.
const economics: Record<string, { investment: string; value: string }> = {
  "RA+ Carbon Performance": {
    investment: "[FINANCE: FY26–28 investment pool] · Highest share of sustainability capacity",
    value: "Consultant-grade and AI driven inventory, the product every other product consumes. Anchor of the Enterprise tier.",
  },
  "RA+ Supply Chain": {
    investment: "[FINANCE: FY26–28 investment pool] · Builds on the Zeigo Hub supplier network",
    value: "Category 1 and 4 depth, supplier abatement at scale. Second product in the Land → Expand journey.",
  },
  "RA+ Climate Risk": {
    investment: "[FINANCE: FY26–28 investment pool] · ClimVar value at risk engine",
    value: "Priced climate risk and funded adaptation. A capability no supply-chain risk rival combines today.",
  },
  "RA+ Reporting & Compliance": {
    investment: "[FINANCE: FY26–28 investment pool] · Migration-led, CSRD deadline driven",
    value: "SE migration and the 2027 CSRD cycle in RA+. Disclosure hub on the shared inventory.",
  },
  "Core Platform": {
    investment: "[FINANCE: FY26–28 investment pool] · Roughly one-third of total capacity",
    value: "Shared hierarchy, factors and calculation logic. The platform moat that compounds across products.",
  },
  "Metering & Interval Data": {
    investment: "[FINANCE: FY27–28 investment pool] · Energy & Efficiency data spine",
    value: "Hourly emissions and granular baselines feeding carbon, efficiency and cost products.",
  },
  "Energy Efficiency": {
    investment: "[FINANCE: FY27–28 investment pool] · Advanced ECM library",
    value: "Energy and carbon cobenefits at recommendation level, market leading at launch.",
  },
  "Utility Data Management": {
    investment: "[FINANCE: FY27–28 investment pool] · Invoice capture and validation",
    value: "Cost and variance explained, budgets and reforecasts on the same data spine.",
  },
  "Budget & Tariff Intelligence": {
    investment: "[FINANCE: FY27–28 investment pool] · Tariff and budget engine",
    value: "Tariff aware budgets, variance analysis and reforecasting.",
  },
  "Energy Portfolio Management": {
    investment: "[FINANCE: FY28 investment pool] · Extends utility data",
    value: "Scenario budgets and reforecasting, energy spend under management.",
  },
  "Capital Asset Planning": {
    investment: "[FINANCE: FY28 investment pool] · Asset register and planning",
    value: "Prioritised capital plans linked to energy and carbon outcomes.",
  },
  "Sourcing & Procurement": {
    investment: "[FINANCE: FY28 investment pool] · Capability on the platform",
    value: "Sourcing decisions informed by efficiency and carbon signals.",
  },
  "PPAs & EACs": {
    investment: "[FINANCE: FY28 investment pool] · Instrument register and assurance",
    value: "Contract and certificate matching evidenced against the shared inventory.",
  },

};

const toneBar: Record<string, { build: string; mvp: string; ga: string; cont: string; text: string; chip: string }> = {
  primary: {
    build: "bg-primary/30",
    mvp: "bg-primary/60",
    ga: "bg-primary",
    cont: "bg-primary/15",
    text: "text-primary",
    chip: "border-primary/30 bg-primary/10 text-primary",
  },
  muted: {
    build: "bg-foreground/20",
    mvp: "bg-foreground/40",
    ga: "bg-foreground/70",
    cont: "bg-foreground/10",
    text: "text-foreground",
    chip: "border-foreground/25 bg-foreground/5 text-foreground/70",
  },
  warn: {
    build: "bg-secondary/30",
    mvp: "bg-secondary/60",
    ga: "bg-secondary",
    cont: "bg-secondary/15",
    text: "text-secondary",
    chip: "border-secondary/30 bg-secondary/10 text-secondary",
  },
  accent: {
    build: "bg-accent/40",
    mvp: "bg-accent/70",
    ga: "bg-accent",
    cont: "bg-accent/20",
    text: "text-accent-foreground",
    chip: "border-accent/40 bg-accent/10 text-accent-foreground",
  },
};

const TOTAL_QUARTERS = 12;

const toPct = (q: number) => `${(q / TOTAL_QUARTERS) * 100}%`;

const Segment = ({
  from,
  to,
  className,
}: {
  from: number;
  to: number;
  className: string;
}) => (
  <div
    className={`absolute top-1/2 h-4 -translate-y-1/2 rounded-full ${className}`}
    style={{ left: toPct(from), width: `calc(${((to - from) / TOTAL_QUARTERS) * 100}% - 2px)` }}
  />
);

const RoadmapTimeline = () => {
  if (!roadmap) return null;
  const years = roadmap.years;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-10 flex items-center justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            {roadmap.eyebrow} | Roadmap timeline
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <Link
              to="/energy-products"
              className="rounded-md border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-secondary transition-colors hover:bg-primary/20"
            >
              Energy &amp; Efficiency product pages →
            </Link>
            <Link
              to="/"
              className="rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Back to the deck
            </Link>
          </div>

        </div>

        <div className="h-1 w-24 rounded-full bg-primary" />
        <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          {roadmap.title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {roadmap.subtitle} Each product shows its build phase, MVP and GA timing, and the
          investment and expected value attached to it.
        </p>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="h-3 w-8 rounded-full bg-primary/30" /> Build
          </span>
          <span className="flex items-center gap-2">
            <span className="h-3 w-8 rounded-full bg-primary/60" /> To MVP
          </span>
          <span className="flex items-center gap-2">
            <span className="h-3 w-8 rounded-full bg-primary" /> To Full GA
          </span>
          <span className="flex items-center gap-2">
            <span className="h-3 w-8 rounded-full border border-primary/40 bg-primary/15" /> Continuous investment
          </span>
        </div>

        {/* Timeline header */}
        <div className="mt-10 hidden lg:grid lg:grid-cols-[16rem_1fr_16rem_18rem] lg:gap-6">
          <div />
          <div>
            <div className="grid" style={{ gridTemplateColumns: `repeat(${years.length}, 1fr)` }}>
              {years.map((y) => (
                <p key={y} className="text-center text-sm font-bold text-foreground">
                  {y}
                </p>
              ))}
            </div>
            <div className="mt-1 grid" style={{ gridTemplateColumns: `repeat(${TOTAL_QUARTERS}, 1fr)` }}>
              {Array.from({ length: TOTAL_QUARTERS }).map((_, i) => (
                <p key={i} className="text-center text-[10px] uppercase tracking-wide text-muted-foreground">
                  {QUARTERS[i % 4]}
                </p>
              ))}
            </div>
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">Investment</p>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">Expected value</p>
        </div>

        {/* Groups */}
        <div className="mt-6 space-y-10">
          {roadmap.groups.map((group) => {
            const tone = toneBar[group.tone] ?? toneBar.primary;
            return (
              <section key={group.label}>
                <span className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold ${tone.chip}`}>
                  {group.label}
                </span>
                <div className="mt-4 space-y-3">
                  {group.rows.map((row) => {
                    const eco = economics[row.title] ?? {
                      investment: "[FINANCE: investment pool]",
                      value: "Value narrative to be validated.",
                    };
                    const gaPoint = row.ga ?? row.mvp ?? row.start;
                    return (
                      <article
                        key={row.title}
                        className="grid gap-4 rounded-xl border border-border bg-card p-4 lg:grid-cols-[16rem_1fr_16rem_18rem] lg:items-center lg:gap-6"
                      >
                        <div>
                          <p className="text-sm font-semibold leading-snug">{row.title}</p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {row.mvp !== undefined && `MVP · ${years[Math.floor(row.mvp / 4)] ?? "2028+"} ${QUARTERS[Math.round(row.mvp) % 4]}`}
                            {row.mvp !== undefined && row.ga !== undefined && " · "}
                            {row.ga !== undefined && `GA · ${years[Math.floor(row.ga / 4)] ?? "2028+"} ${QUARTERS[Math.round(row.ga) % 4]}`}
                            {row.mvp === undefined && row.ga === undefined && "Continuous"}
                          </p>
                        </div>

                        {/* Bar */}
                        <div className="relative h-8 rounded-md bg-muted/50">
                          <div
                            className="pointer-events-none absolute inset-0 grid"
                            style={{ gridTemplateColumns: `repeat(${TOTAL_QUARTERS}, 1fr)` }}
                          >
                            {Array.from({ length: TOTAL_QUARTERS }).map((_, i) => (
                              <div key={i} className={`border-l border-border/60 ${i % 4 === 0 ? "border-l-foreground/20" : ""}`} />
                            ))}
                          </div>
                          <Segment from={row.start} to={row.mvp ?? row.ga ?? TOTAL_QUARTERS} className={tone.build} />
                          {row.mvp !== undefined && row.ga !== undefined && (
                            <Segment from={row.mvp} to={row.ga} className={tone.mvp} />
                          )}
                          {row.ga !== undefined && (
                            <Segment from={row.ga} to={row.ga + 0.6} className={tone.ga} />
                          )}
                          {row.continuous && gaPoint < TOTAL_QUARTERS && (
                            <Segment from={gaPoint + 0.6} to={TOTAL_QUARTERS} className={tone.cont} />
                          )}
                          {row.mvp !== undefined && (
                            <div
                              className={`absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-background ${tone.ga}`}
                              style={{ left: toPct(row.mvp) }}
                              title="MVP"
                            />
                          )}
                          {row.ga !== undefined && (
                            <div
                              className={`absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border-2 border-background ${tone.ga}`}
                              style={{ left: toPct(row.ga) }}
                              title="Full GA"
                            />
                          )}
                        </div>

                        <p className="text-xs leading-relaxed text-muted-foreground">{eco.investment}</p>
                        <p className="text-xs leading-relaxed text-foreground">{eco.value}</p>
                      </article>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        <p className="mt-12 rounded-lg border border-border bg-muted/40 p-4 text-xs leading-relaxed text-muted-foreground">
          Investment figures are Finance placeholders pending validation. Dates follow the
          three-year roadmap slide: MVP and GA markers are indicative quarter positions, and
          continuous investment continues beyond the horizon shown.
        </p>
      </div>
    </main>
  );
};

export default RoadmapTimeline;
