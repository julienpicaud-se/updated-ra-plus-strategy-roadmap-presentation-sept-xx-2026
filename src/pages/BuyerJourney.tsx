import { Link } from "react-router-dom";
import { cpDeck } from "@/data/cp-roadmap-deck";

const journey = cpDeck.find((s) => s.kind === "journey") as Extract<
  (typeof cpDeck)[number],
  { kind: "journey" }
> | undefined;

const accounts = [
  {
    name: "Accor",
    stage: "Land",
    entry: "Entered on a single product driven by a compliance deadline.",
    now: "Portfolio data experience across a large, distributed hospitality estate.",
    next: "Widen the inventory before adding a second product.",
  },
  {
    name: "Sanofi",
    stage: "Land",
    entry: "Entered on a single product with a reporting cycle to meet.",
    now: "Committed delivery in November 2026.",
    next: "Prove the cycle, then open the supplier conversation.",
  },
  {
    name: "Schneider Electric",
    stage: "Prove",
    entry: "Trusted inventory across Scope 1, 2 and 3.",
    now: "Inventory closing 31 December 2026, with migration into RA+ in the 2027 cycle.",
    next: "Reference proof that the inventory survives audit at enterprise scale.",
  },
  {
    name: "Newell Brands",
    stage: "Expand",
    entry: "Started from a shared baseline rather than a new data project.",
    now: "Cross-product adoption once the inventory is trusted.",
    next: "Path towards standardizing on the platform tier.",
  },
];

const toneClass: Record<string, string> = {
  muted: "border-border bg-card",
  primary: "border-primary/40 bg-primary/5",
  accent: "border-secondary/40 bg-secondary/5",
  warn: "border-border bg-card",
};

const BuyerJourney = () => {
  if (!journey) return null;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-10 flex items-center justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            {journey.eyebrow}
          </p>
          <div className="flex gap-2">
            <Link
              to="/value-proposition"
              className="rounded-md border border-primary/40 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              Value proposition
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
          {journey.title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {journey.subtitle}
        </p>

        <section className="mt-14 grid gap-5 md:grid-cols-2">
          {journey.stages.map((stage, i) => (
            <article
              key={stage.stage}
              className={`relative rounded-xl border p-6 ${toneClass[stage.tone] ?? toneClass.muted}`}
            >
              <span className="absolute right-5 top-5 text-4xl font-bold text-primary/15">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {stage.stage}
              </p>
              <h2 className="mt-2 text-2xl font-semibold">{stage.title}</h2>
              <dl className="mt-5 space-y-3 text-sm leading-relaxed">
                {[
                  ["Buyer", stage.buyer],
                  ["Products", stage.products],
                  ["Value", stage.value],
                  ["Trigger", stage.trigger],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {label}
                    </dt>
                    <dd className="text-foreground/90">{value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold">Where our named accounts sit today</h2>
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
            Each account shows a different stage of the same motion, so the board can see the journey
            working rather than described.
          </p>

          <div className="mt-6 overflow-hidden rounded-xl border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-secondary text-secondary-foreground">
                <tr>
                  {["Account", "Stage", "How they entered", "Where they are", "What comes next"].map((h) => (
                    <th key={h} className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em]">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {accounts.map((a, i) => (
                  <tr key={a.name} className={i % 2 ? "bg-card" : "bg-background"}>
                    <td className="px-4 py-4 font-semibold">{a.name}</td>
                    <td className="px-4 py-4">
                      <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-secondary">
                        {a.stage}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-foreground/85">{a.entry}</td>
                    <td className="px-4 py-4 text-foreground/85">{a.now}</td>
                    <td className="px-4 py-4 text-muted-foreground">{a.next}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-14 grid gap-4 md:grid-cols-4">
          {journey.proof.map((p) => (
            <div key={p.label} className="rounded-xl border border-primary/30 bg-primary/5 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">{p.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/90">{p.value}</p>
            </div>
          ))}
        </section>

        <p className="mt-12 rounded-xl bg-secondary px-6 py-5 text-base font-medium text-secondary-foreground">
          {journey.takeaway}
        </p>

        <p className="mt-6 text-xs text-muted-foreground">
          Account status reflects commitments already in this deck. No financial values are implied
          until Finance validates them.
        </p>
      </div>
    </main>
  );
};

export default BuyerJourney;
