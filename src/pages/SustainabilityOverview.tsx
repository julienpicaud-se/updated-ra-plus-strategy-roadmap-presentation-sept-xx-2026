import { Link } from "react-router-dom";

const products = [
  {
    to: "/carbon-performance",
    name: "Carbon Performance",
    tagline: "Own the inventory every product consumes",
    summary:
      "Consultant grade Scope 1, 2 and 3 inventory with energy grade data, method transparency and audit ready governance.",
    tone: "primary",
  },
  {
    to: "/supply-chain",
    name: "Supply Chain",
    tagline: "Turn supplier data into carbon and abatement",
    summary:
      "Zeigo network reach, custom campaigns, product carbon footprints and supplier specific factors feeding the inventory.",
    tone: "accent",
  },
  {
    to: "/esg-reporting",
    name: "Reporting & Compliance",
    tagline: "Configure, collect, disclose end to end",
    summary:
      "CSRD, ESRS, IFRS S1 and S2, EU Taxonomy and voluntary frameworks on a shared indicator and audit spine.",
    tone: "secondary",
  },
  {
    to: "/climate-risk",
    name: "Climate Risk",
    tagline: "From hazard maps to priced risk",
    summary:
      "ClimVar converts hazard exposure into financial value at risk and routes adaptation actions into the capital plan.",
    tone: "muted",
  },
];

const toneBar: Record<string, string> = {
  primary: "bg-primary",
  accent: "bg-accent",
  secondary: "bg-secondary",
  muted: "bg-muted",
};

const SustainabilityOverview = () => (
  <main className="min-h-screen bg-background">
    <header className="border-b border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <Link to="/" className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          ← Back to the deck
        </Link>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          RA+ Sustainability
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground">
          One platform for carbon, supply chain, ESG and climate risk
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          Each product below shares the same hierarchy, emission factors, data quality and audit spine.
          Click through for the roadmap, use cases and proof points.
        </p>
      </div>
    </header>

    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid gap-5 md:grid-cols-2">
        {products.map((p) => (
          <Link
            key={p.to}
            to={p.to}
            className="group flex flex-col rounded-xl border border-border bg-card p-6 transition hover:border-primary hover:shadow-lg"
          >
            <div className={`h-1 w-12 rounded-full ${toneBar[p.tone]}`} />
            <h2 className="mt-5 text-2xl font-semibold text-foreground group-hover:text-accent">
              {p.name}
            </h2>
            <p className="mt-1 text-sm font-medium text-accent">{p.tagline}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
            <span className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              Open product page →
            </span>
          </Link>
        ))}
      </div>
    </section>

    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Why convergence matters</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Carbon Performance, Supply Chain, Reporting & Compliance and Climate Risk are stronger
              together because they sit on one platform layer. Energy data, supplier data, risk
              exposure and disclosed numbers share the same source of truth, so operational and
              reported values stay in sync.
            </p>
          </div>
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              Board takeaway
            </p>
            <p className="mt-2 text-base leading-relaxed text-foreground">
              The 2027 bet is not four separate products. It is one trusted data and calculation
              spine that makes carbon, energy, risk and disclosure reinforce each other.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="text-2xl font-bold text-foreground">More on the RA+ plan</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          to="/sustainability-products"
          className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-secondary"
        >
          All sustainability product pages →
        </Link>
        <Link
          to="/energy-products"
          className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-secondary"
        >
          Energy & Efficiency family →
        </Link>
        <Link
          to="/competitor-matrix"
          className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-secondary"
        >
          Competitor matrices →
        </Link>
        <Link
          to="/buyer-journey"
          className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-secondary"
        >
          Buyer journey →
        </Link>
        <Link
          to="/roadmap-timeline"
          className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-secondary"
        >
          Roadmap timeline →
        </Link>
      </div>
      <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
        Positions are internal RA+ assessments, not third party ratings. Analyst points come from
        licensed Verdantix research reviewed in September 2026.
      </p>
    </section>
  </main>
);

export default SustainabilityOverview;
