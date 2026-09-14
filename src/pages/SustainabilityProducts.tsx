import { Link } from "react-router-dom";
import { sustainabilityProductPages } from "@/data/sustainability-product-pages";

export const positionClass: Record<string, string> = {
  "Market leading": "bg-primary/15 text-secondary border-primary/40",
  "On parity": "bg-muted/10 text-foreground border-border",
  "Closing gap": "bg-accent/10 text-accent border-accent/30",
  Behind: "bg-destructive/10 text-destructive border-destructive/30",
};

const SustainabilityProducts = () => (
  <main className="min-h-screen bg-background">
    <header className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <Link to="/sustainability" className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          ← Sustainability overview
        </Link>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          RA+ Sustainability family
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground">
          Every sustainability product, one page each
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          Each product runs on the same hierarchy, emission factors and audit spine. Open a product
          for its roadmap, use cases and proof points.
        </p>
      </div>
    </header>

    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {sustainabilityProductPages.map((p) => (
          <Link
            key={p.slug}
            to={`/sustainability-products/${p.slug}`}
            className="group flex flex-col rounded-xl border border-border bg-card p-6 transition hover:border-primary hover:shadow-lg"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`w-fit rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${positionClass[p.position]}`}
              >
                {p.position}
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                {p.family}
              </span>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-foreground group-hover:text-accent">
              {p.name}
            </h2>
            <p className="mt-2 text-sm font-medium text-accent">{p.tagline}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
            <span className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Open product page →
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          to="/energy-products"
          className="rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary"
        >
          Energy &amp; Efficiency products →
        </Link>
        <Link
          to="/competitor-matrix"
          className="rounded-lg border border-primary/40 bg-primary/10 px-5 py-3 text-sm font-semibold text-secondary transition hover:bg-primary/20"
        >
          Competitor matrices →
        </Link>
      </div>

      <p className="mt-8 rounded-lg border border-border bg-card p-5 text-xs leading-relaxed text-muted-foreground">
        Positions are internal RA+ assessments, not third party ratings. Analyst evidence comes from
        licensed Verdantix research reviewed in September 2026. Bracketed proof points still need
        account team or Finance confirmation before external use.
      </p>
    </section>
  </main>
);

export default SustainabilityProducts;
