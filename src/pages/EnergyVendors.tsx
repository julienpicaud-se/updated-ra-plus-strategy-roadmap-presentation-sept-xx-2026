import { Link } from "react-router-dom";
import { energyVendors, type ThreatLevel } from "@/data/energy-vendors";

export const threatClass: Record<ThreatLevel, string> = {
  High: "bg-destructive/10 text-destructive border-destructive/30",
  Moderate: "bg-accent/10 text-accent border-accent/30",
  Low: "bg-muted/10 text-foreground border-border",
};

const EnergyVendors = () => {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <Link to="/energy-products" className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            ← Energy &amp; Efficiency family
          </Link>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Competitive field
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground">
            Energy management rivals, one deep dive each
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            The field is wider than any single rival. Each page below sets out where a competitor
            is going, which buyer and use case it serves, and the gaps RA+ closes on the same
            platform.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {energyVendors.map((v) => (
            <Link
              key={v.slug}
              to={`/energy-vendors/${v.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition hover:border-primary hover:shadow-lg"
            >
              <span
                className={`w-fit rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${threatClass[v.threat]}`}
              >
                {v.threat} threat
              </span>
              <h2 className="mt-4 text-xl font-semibold text-foreground group-hover:text-accent">
                {v.name}
              </h2>
              <p className="mt-2 text-sm font-medium text-accent">{v.category}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{v.tagline}</p>
              <span className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Open deep dive →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/competitor-matrix"
            className="rounded-lg border border-primary/40 bg-primary/10 px-5 py-3 text-sm font-semibold text-secondary transition hover:bg-primary/20"
          >
            Full competitor matrix →
          </Link>
          <Link
            to="/energy-products"
            className="rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary"
          >
            Energy &amp; Efficiency products →
          </Link>
        </div>

        <p className="mt-8 rounded-lg border border-border bg-card p-5 text-xs leading-relaxed text-muted-foreground">
          Roadmap directions are directional readings of public vendor communication and licensed
          Verdantix research reviewed in September 2026, not vendor commitments. Threat levels and
          gap statements are internal RA+ assessments, not third party ratings.
        </p>
      </section>
    </main>
  );
};

export default EnergyVendors;
