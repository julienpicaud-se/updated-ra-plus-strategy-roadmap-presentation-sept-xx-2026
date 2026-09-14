import { Link } from "react-router-dom";

const features = [
  "Hazard exposure mapped across the shared asset register, the same assets the carbon inventory and capital plan already use",
  "ClimVar - Value at Risk: exposure converted into financial values a CFO and the board can act on",
  "Scenario analysis and adaptation actions on the platform, not in a separate specialist tool",
  "Risk data flows into R&C disclosures, priced risk alongside carbon and energy in one portfolio view",
  "Supplier and value chain exposure priced with the same model as owned assets",
  "Adaptation actions routed into the capital plan via Capital Asset Planning, ranked against efficiency and electrification",
];

const proof = [
  {
    kind: "Roadmap",
    claim: "ClimVar - Value at Risk is committed in H1 2027, built on the shared asset register.",
    source: "RA+ 2026 and 2027 roadmap, Climate Risk lane",
  },
  {
    kind: "Roadmap",
    claim: "ECLR moves from specialist deployment to a full self serve product with scalable performance in Q4 2026.",
    source: "RA+ 2026 and 2027 roadmap, Climate Risk lane",
  },
  {
    kind: "Analyst",
    claim: "Emissions only strategies no longer cover the operational, financial and regulatory exposure boards care about.",
    source: "Verdantix, The Rise Of Resilient Decarbonization, November 2025",
  },
  {
    kind: "Analyst",
    claim: "Insurance premiums up 88 percent over five years, with insurers increasingly requiring resilience measures to qualify for cover.",
    source: "Verdantix, Building The Business Case For Energy Resilience",
  },
  {
    kind: "Analyst",
    claim: "Tenants pay rents 49 percent higher for properties with dependable power systems, the value at risk argument in commercial terms.",
    source: "Verdantix, Building The Business Case For Energy Resilience",
  },
  {
    kind: "Customer",
    claim: "[ACCOUNT TEAM: name a strategic account where priced climate risk shaped a capital decision]",
    source: "To be confirmed before the board meeting",
  },
] as const;

const gaps = [
  {
    competitor: "Climate X",
    gap: "Excellent hazard modelling at scale, but sold to banks and real estate portfolios. No carbon inventory, no disclosure workflow, no capital plan to fund the adaptation it identifies.",
  },
  {
    competitor: "XDI",
    gap: "Deep engineering damage modelling for asset owners and governments. The output is a report or an API, not an operating platform the sustainability team runs every day.",
  },
  {
    competitor: "Cotality (CoreLogic)",
    gap: "Catastrophe model heritage built for insurance and mortgage markets. Property peril metrics, not corporate decarbonization, supplier programmes or CSRD disclosure.",
  },
  {
    competitor: "S&P Global Climanomics",
    gap: "Investor and lender led average annual loss modelling through Sustainable1. Issuer level analysis for financial markets, not facility level adaptation planning.",
  },
  {
    competitor: "Risilience",
    gap: "The closest to our buyer, but a standalone risk platform. No shared asset register with carbon and energy, no capital planning route, and adaptation actions stay outside the systems that fund them.",
  },
  {
    competitor: "Bloomberg",
    gap: "Issuer level scenario analysis across roughly 95,000 companies for Terminal investors. Built for portfolio managers, not for operators pricing their own sites and suppliers.",
  },
];

const proofClass: Record<string, string> = {
  Roadmap: "bg-primary/15 text-secondary",
  Analyst: "bg-accent/10 text-accent",
  Customer: "bg-muted/10 text-foreground",
  Finance: "bg-[hsl(var(--se-quartz-orange)/0.18)] text-foreground",
};

const ClimateRiskProof = () => (
  <main className="min-h-screen bg-background">
    <header className="border-b border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <Link to="/climate-risk" className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          ← Climate Risk
        </Link>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            RA+ Sustainability
          </span>
          <span className="rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-secondary">
            Proof page
          </span>
        </div>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground">
          Climate Risk: the evidence
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
          Features shipping on the 2026 to 2027 roadmap, the proof points behind the position,
          and the gaps the specialist climate risk vendors do not close today.
        </p>
      </div>
    </header>

    <section className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="text-2xl font-bold text-foreground">Features</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        What Climate Risk delivers across the confirmed roadmap.
      </p>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature}
            className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
          >
            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <p className="text-sm leading-relaxed text-foreground">{feature}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-bold text-foreground">Proof points</h2>
        <div className="mt-6 overflow-hidden rounded-xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-background">
              <tr>
                <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">Evidence</th>
                <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">Claim</th>
                <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">Source</th>
              </tr>
            </thead>
            <tbody>
              {proof.map((p, i) => (
                <tr key={p.claim} className={i % 2 ? "bg-background" : "bg-card"}>
                  <td className="px-5 py-4 align-top">
                    <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${proofClass[p.kind]}`}>
                      {p.kind}
                    </span>
                  </td>
                  <td className="px-5 py-4 align-top leading-relaxed text-foreground">{p.claim}</td>
                  <td className="px-5 py-4 align-top leading-relaxed text-muted-foreground">{p.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="text-2xl font-bold text-foreground">Competitor gaps</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Where the named alternatives stop short, per internal RA+ assessment.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {gaps.map((g) => (
          <div key={g.competitor} className="flex flex-col rounded-xl border border-border bg-card p-5">
            <div className="h-1 w-12 rounded-full bg-accent" />
            <p className="mt-4 text-sm font-bold text-foreground">{g.competitor}</p>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{g.gap}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-accent/30 bg-accent/5 p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          Competitive read
        </p>
        <p className="mt-2 text-sm leading-relaxed text-foreground">
          The specialists cluster around financial institutions and property markets; Risilience
          is the only one built primarily for the corporate sustainability buyer we already serve.
          We will not out science Climate X or XDI on hazard modelling, and we should not try. We
          win by pricing risk across the value chain for the corporate operator, and turning it
          into funded action and disclosure on the platform they already run carbon and energy on.
        </p>
      </div>

      <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
        Positions and gaps are internal RA+ assessments, not third party ratings. Analyst points
        come from licensed Verdantix research reviewed in September 2026. Bracketed items are
        placeholders awaiting account team or Finance confirmation.
      </p>

      <nav className="mt-10 flex flex-wrap justify-between gap-4 border-t border-border pt-6 text-sm">
        <Link to="/climate-risk" className="font-medium text-accent">
          ← Climate Risk overview
        </Link>
        <Link to="/competitor-matrix" className="font-medium text-accent">
          Full competitor matrix →
        </Link>
      </nav>
    </section>
  </main>
);

export default ClimateRiskProof;
