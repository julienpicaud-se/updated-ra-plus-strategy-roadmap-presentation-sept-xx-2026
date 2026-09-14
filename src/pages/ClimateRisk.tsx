import { Link } from "react-router-dom";

const roadmap = [
  {
    period: "Q4 2026",
    label: "Foundations",
    items: [
      "ECLR turned into a full self serve product with scalable performance",
      "Hazard exposure mapped across the shared asset register",
      "Risk data model aligned to the shared hierarchy",
    ],
  },
  {
    period: "H1 2027",
    label: "Value at risk",
    items: [
      "ClimVar - Value at Risk: exposure turned into financial values a CFO can act on",
      "Value at risk, scenario analysis and adaptation actions",
      "Risk data flows into R&C disclosures and is turned into financial values",
    ],
  },
  {
    period: "H2 2027",
    label: "Beyond owned assets",
    items: [
      "Supplier and value chain exposure priced with the same model as owned assets",
      "Adaptation actions routed into the capital plan via Capital Asset Planning",
      "Priced risk alongside carbon and energy in one portfolio view",
    ],
  },
  {
    period: "2028 and beyond",
    label: "Directional",
    items: [
      "Continuous repricing of exposure as hazards, assets and contracts change",
      "Funded adaptation programmes tracked to verified outcomes",
    ],
  },
];

const useCases = [
  {
    persona: "CFO and risk",
    title: "Put a number on climate exposure",
    body: "ClimVar converts hazard exposure into financial value at risk, in the language the board already uses for every other risk.",
    outcome: "Climate risk discussed as euros at risk, not colour coded maps.",
  },
  {
    persona: "Sustainability director",
    title: "Defend the adaptation plan",
    body: "Scenario analysis and adaptation actions on the same platform as the carbon inventory and disclosure workflow.",
    outcome: "A plan that survives the question: what does it cost, and what does it avoid.",
  },
  {
    persona: "Procurement and supply chain",
    title: "See supplier exposure, not just site exposure",
    body: "Value chain risk priced with the same model as owned assets, connected to the supplier programme.",
    outcome: "The 2027 whitespace no specialist covers: supply chain risk with climate risk inside.",
  },
  {
    persona: "Capital planner",
    title: "Fund adaptation like any other investment",
    body: "Adaptation actions flow into Capital Asset Planning, ranked against efficiency and electrification on payback, carbon and value at risk.",
    outcome: "Resilience competes for capital with a documented case, not a plea.",
  },
];

const proof = [
  {
    kind: "Roadmap",
    claim: "ClimVar - Value at Risk is committed in H1 2027, on the shared asset register.",
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

const rivals = [
  { name: "Climate X", note: "Spectra claims over 1.5 billion assets covered, strongest on banks, real estate and financial services buyers." },
  { name: "XDI", note: "Asset level engineering damage modelling since 2007, 175 plus countries, asset owners and governments." },
  { name: "Cotality (CoreLogic)", note: "Catastrophe model heritage, property level peril metrics for insurance and mortgage markets." },
  { name: "S&P Global Climanomics", note: "Broad hazard modelling and average annual loss, investor and lender led through Sustainable1." },
  { name: "Risilience", note: "Closest to our buyer: corporate sustainability, finance and risk teams, Cambridge heritage." },
  { name: "Bloomberg", note: "Issuer level scenario analysis across roughly 95,000 companies, for Terminal investors, not operators." },
];

const landscape = [
  {
    name: "Copperleaf (IFS)",
    role: "Adjacent, not a risk vendor",
    note: "Decision analytics for asset investment planning. Competes with our Capital Asset Planning ambition rather than ClimVar, and is a credible partner story for funded adaptation.",
  },
  {
    name: "US EPA, US SEC, WMO",
    role: "Data and rule setters",
    note: "Hazard, factor and disclosure inputs we consume. They shape the requirement, they do not sell against us.",
  },
  {
    name: "University of Oxford, ECIU",
    role: "Science and credibility sources",
    note: "Research used to defend method choices. Useful for board credibility on the ClimVar methodology.",
  },
];

const proofClass: Record<string, string> = {
  Roadmap: "bg-primary/15 text-secondary",
  Analyst: "bg-accent/10 text-accent",
  Customer: "bg-muted/10 text-foreground",
  Finance: "bg-[hsl(var(--se-quartz-orange)/0.18)] text-foreground",
};

const ClimateRisk = () => (
  <main className="min-h-screen bg-background">
    <header className="border-b border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <Link to="/" className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          ← Back to the deck
        </Link>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            RA+ Sustainability
          </span>
          <span className="rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-secondary">
            Market leading on convergence
          </span>
        </div>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground">Climate Risk</h1>
        <p className="mt-3 text-lg font-medium text-accent">
          From hazard maps to priced risk, funded adaptation and defensible disclosure
        </p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
          ClimVar turns climate exposure into financial value at risk on the same platform as the
          carbon inventory, the supplier programme and the capital plan. The specialists model
          hazards extremely well; almost none of them connect the number to an operating
          sustainability platform.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/climate-risk/proof"
            className="rounded-full border border-primary/40 bg-primary/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-secondary"
          >
            Features, proof points and competitor gaps →
          </Link>
          <Link
            to="/competitor-matrix"
            className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-secondary"
          >
            Full competitor matrix →
          </Link>
          <Link
            to="/climate-vendors"
            className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-secondary"
          >
            Vendor deep dives →
          </Link>
        </div>
      </div>
    </header>

    <section className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="text-2xl font-bold text-foreground">Roadmap</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Quarters are used only where the roadmap has confirmed them. Later commitments stay as
        half year bands, and 2028 is directional.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {roadmap.map((phase) => (
          <div key={phase.period} className="rounded-xl border border-border bg-card p-5">
            <div className="h-1 w-12 rounded-full bg-primary" />
            <p className="mt-4 text-sm font-bold text-foreground">{phase.period}</p>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">{phase.label}</p>
            <ul className="mt-4 space-y-2">
              {phase.items.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-bold text-foreground">Use cases</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {useCases.map((uc) => (
            <div key={uc.title} className="flex flex-col rounded-xl border border-border bg-background p-5">
              <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-secondary">
                {uc.persona}
              </span>
              <h3 className="mt-4 text-base font-semibold text-foreground">{uc.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{uc.body}</p>
              <p className="mt-4 border-t border-border pt-3 text-sm font-medium text-accent">{uc.outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="text-2xl font-bold text-foreground">Proof points</h2>
      <div className="mt-6 overflow-hidden rounded-xl border border-border">
        <table className="w-full text-left text-sm">
          <thead className="bg-card">
            <tr>
              <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">Evidence</th>
              <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">Claim</th>
              <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">Source</th>
            </tr>
          </thead>
          <tbody>
            {proof.map((p, i) => (
              <tr key={p.claim} className={i % 2 ? "bg-card" : "bg-background"}>
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
    </section>

    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="text-2xl font-bold text-foreground">The specialist field</h2>
          <Link to="/competitor-matrix" className="text-sm font-medium text-accent underline">
            Capability by capability comparison →
          </Link>
        </div>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Public vendor product information reviewed 6 September 2026. The specialists cluster
          around financial institutions and property markets; Risilience is the only one built
          primarily for the corporate sustainability buyer we already serve.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {rivals.map((r) => (
            <div key={r.name} className="rounded-xl border border-border bg-background p-5">
              <div className="h-1 w-12 rounded-full bg-accent" />
              <p className="mt-4 text-sm font-bold text-foreground">{r.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.note}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-10 text-lg font-bold text-foreground">Around the field, not in it</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {landscape.map((l) => (
            <div key={l.name} className="rounded-xl border border-accent/30 bg-accent/5 p-5">
              <p className="text-sm font-bold text-foreground">{l.name}</p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">{l.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          Board takeaway
        </p>
        <p className="mt-2 text-base leading-relaxed text-foreground">
          We will not out science Climate X or XDI on hazard modelling, and we should not try. We
          win by pricing risk across the value chain for the corporate operator, and turning it
          into funded action and disclosure on the platform they already run carbon and energy on.
        </p>
      </div>
      <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
        Positions are internal RA+ assessments, not third party ratings. Analyst points come from
        licensed Verdantix research reviewed in September 2026. Vendor coverage figures are vendor
        claims, not verified benchmarks. Bracketed items are placeholders awaiting account team
        confirmation.
      </p>
    </section>
  </main>
);

export default ClimateRisk;
