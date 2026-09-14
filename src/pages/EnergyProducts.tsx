import { Link } from "react-router-dom";
import { orderedEnergyProducts } from "@/data/energy-products";

const positionClass: Record<string, string> = {
  "Market leading": "bg-primary/15 text-secondary border-primary/40",
  "On parity": "bg-muted/10 text-foreground border-border",
  "Closing gap": "bg-accent/10 text-accent border-accent/30",
  Behind: "bg-destructive/10 text-destructive border-destructive/30",
};

const EnergyProducts = () => {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <Link to="/" className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            ← Back to the deck
          </Link>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Energy &amp; Efficiency family
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground">
            One platform, ten Energy &amp; Efficiency products
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Every product below runs on the same RA+ platform layer and feeds from the same
            metering and interval data spine. Open a product for its roadmap, use cases and
            proof points.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {orderedEnergyProducts.map((p) => (
            <Link
              key={p.slug}
              to={`/energy-products/${p.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition hover:border-primary hover:shadow-lg"
            >
              <span
                className={`w-fit rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${positionClass[p.position]}`}
              >
                {p.position}
              </span>
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

        <div className="mt-10">
          <Link
            to="/energy-vendors"
            className="inline-block rounded-lg border border-primary/40 bg-primary/10 px-5 py-3 text-sm font-semibold text-secondary transition hover:bg-primary/20"
          >
            Vendor deep dives: the energy management field →
          </Link>
        </div>

        <p className="mt-8 rounded-lg border border-border bg-card p-5 text-xs leading-relaxed text-muted-foreground">
          Capability positions are internal RA+ assessments, not third party ratings. Analyst
          evidence is drawn from licensed Verdantix research reviewed in September 2026. Customer
          and monetary proof points marked in brackets still need account team or Finance
          confirmation before external use.
        </p>
      </section>
    </main>
  );
};

export default EnergyProducts;
