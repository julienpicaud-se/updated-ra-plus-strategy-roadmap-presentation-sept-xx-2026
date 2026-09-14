import { Link } from "react-router-dom";
import { orderedSustainabilityProducts } from "@/data/sustainability-product-pages";
import { orderedEnergyProducts } from "@/data/energy-products";

interface ValueRow {
  product: string;
  to: string;
  family: string;
  energy: string;
  cost: string;
  risk: string;
}

// Value statements are directional and built from the roadmap capabilities on each
// product page. Euro and percentage figures stay explicit placeholders until Finance
// validates them against a reference portfolio.
const sustainabilityValue: Record<string, Omit<ValueRow, "product" | "to" | "family">> = {
  "carbon-inventory": {
    energy: "Meter and utility data land in one governed inventory, so energy waste is visible per site and per gas.",
    cost: "Replaces consultant led inventory rebuilds each reporting cycle. [FINANCE: annual advisory spend avoided]",
    risk: "Method transparency, factors and evidence per data point reduce restatement and assurance failure risk.",
  },
  "decarbonization-planning": {
    energy: "Advanced ECM library prices energy and carbon cobenefits together before capital is committed.",
    cost: "Marginal abatement view ranks initiatives by cost per tonne. [FINANCE: cost per tonne avoided]",
    risk: "Target credibility: a funded plan behind every public commitment reduces greenwashing exposure.",
  },
  "eac-ppa-management": {
    energy: "Clean power contracts matched to consumption, exposing unhedged and uncovered load.",
    cost: "Better EAC and PPA coverage decisions. [FINANCE: procurement savings per MWh]",
    risk: "Market based Scope 2 claims that survive assurance and disclosure scrutiny.",
  },
  "supplier-engagement": {
    energy: "Supplier energy and abatement actions tracked where the spend and emissions sit.",
    cost: "Supplier specific factors replace spend based estimates. [FINANCE: avoided rework and survey cost]",
    risk: "Multi tier visibility lowers supply disruption and due diligence exposure.",
  },
  "product-carbon-footprint": {
    energy: "Process and material energy intensity surfaced at product level.",
    cost: "Self serve footprints instead of per product LCA studies. [FINANCE: study cost avoided per SKU]",
    risk: "Defensible product claims for customer and regulatory requests.",
  },
  "disclosure-management": {
    energy: "Energy indicators disclosed from the same governed source as the inventory.",
    cost: "One configure, collect, disclose cycle across frameworks. [FINANCE: reporting FTE effort saved]",
    risk: "Audit trail and lineage cut late cycle correction and non compliance risk.",
  },
  "indicator-data-management": {
    energy: "Energy and utility indicators collected once, reused everywhere.",
    cost: "Campaign automation removes spreadsheet chasing. [FINANCE: collection hours saved per cycle]",
    risk: "Data quality controls applied consistently across every product.",
  },
  "climate-risk-adaptation": {
    energy: "Heat, cooling and outage exposure priced against site energy demand.",
    cost: "Adaptation capital targeted at the highest value at risk assets. [FINANCE: loss avoided]",
    risk: "Value at risk expressed in financial terms and flowed into disclosure.",
  },
  "sustainability-strategy": {
    energy: "Energy and efficiency levers sit inside the same transition plan as the targets.",
    cost: "One planning surface instead of parallel consultant models. [FINANCE: planning cost avoided]",
    risk: "Materiality, targets and transition plan traceable to the disclosed number.",
  },
  "utility-data-management": {
    energy: "Invoice and interval data expose tariff, load and consumption anomalies.",
    cost: "Billing error recovery and cost allocation accuracy. [FINANCE: recovered billing errors]",
    risk: "Complete utility coverage removes gaps in both the inventory and the disclosure.",
  },
};

const energyValue: Record<string, Omit<ValueRow, "product" | "to" | "family">> = {
  "energy-efficiency": {
    energy: "Measured consumption reduction per site, tracked against the ECM that delivered it.",
    cost: "Avoided energy spend from delivered measures. [FINANCE: savings per delivered ECM]",
    risk: "Verified savings evidence reduces claim and payback dispute risk.",
  },
  "capital-asset-planning": {
    energy: "Asset renewal sequenced by energy intensity, not only by age.",
    cost: "Capital sequenced to the best return. [FINANCE: NPV uplift on the capital plan]",
    risk: "Ageing asset and resilience risk made explicit in the plan.",
  },
  "metering-interval-data": {
    energy: "Interval data exposes baseload, peaks and drift that monthly bills hide.",
    cost: "Peak and demand charge management. [FINANCE: demand charge reduction]",
    risk: "Data completeness underpins every downstream claim and calculation.",
  },
  "energy-portfolio-management": {
    energy: "Portfolio level consumption benchmarking across sites and entities.",
    cost: "Portfolio wide cost variance control. [FINANCE: variance captured per quarter]",
    risk: "Single portfolio view removes blind spots across regions and entities.",
  },
  "utility-data-management": {
    energy: "Complete utility coverage across every meter and account.",
    cost: "Billing validation and allocation accuracy. [FINANCE: recovered billing errors]",
    risk: "No missing accounts, so no gaps in inventory or disclosure.",
  },
  "budget-tariff-intelligence": {
    energy: "Tariff aware load shaping opportunities surfaced automatically.",
    cost: "Budget accuracy and rate optimisation. [FINANCE: avoided cost from tariff fit]",
    risk: "Price exposure and budget variance visible before the year closes.",
  },
  "energy-sourcing": {
    energy: "Sourcing decisions tied to measured load, not modelled assumptions.",
    cost: "Contract timing and structure. [FINANCE: procurement savings per contract]",
    risk: "Price volatility and supply exposure managed on one view.",
  },
  "renewables-eacs": {
    energy: "Clean supply matched to consumption profiles.",
    cost: "EAC and PPA portfolio cost efficiency. [FINANCE: cost per MWh of clean supply]",
    risk: "Claim integrity for market based reporting.",
  },
  "demand-response-flexibility": {
    energy: "Flexible load turned into a dispatchable resource.",
    cost: "Programme revenue and avoided peaks. [FINANCE: revenue per enrolled MW]",
    risk: "Grid and curtailment exposure managed proactively.",
  },
  "electrification-der": {
    energy: "On site generation and storage optimised against site demand.",
    cost: "Self consumption and asset payback. [FINANCE: payback per DER asset]",
    risk: "Resilience and outage exposure reduced at critical sites.",
  },
};

const buildRows = (): { title: string; rows: ValueRow[] }[] => [
  {
    title: "Sustainability family",
    rows: orderedSustainabilityProducts
      .filter((p) => sustainabilityValue[p.slug])
      .map((p) => ({
        product: p.name,
        family: p.family,
        to: `/sustainability-products/${p.slug}`,
        ...sustainabilityValue[p.slug],
      })),
  },
  {
    title: "Energy & Efficiency family",
    rows: orderedEnergyProducts
      .filter((p) => energyValue[p.slug])
      .map((p) => ({
        product: p.name,
        family: "Energy & Efficiency",
        to: `/energy-products/${p.slug}`,
        ...energyValue[p.slug],
      })),
  },
];

const ValueProposition = () => {
  const groups = buildRows();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            RA+ value proposition
          </p>
          <div className="flex gap-2">
            <Link
              to="/buyer-journey"
              className="rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Buyer journey
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
          Energy savings, cost savings and risk reduction, product by product
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Each product carries its own value promise. Read together, they show why the platform
          compounds: the same governed data spine turns energy action into cost savings and priced
          risk reduction across the whole portfolio.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              k: "Energy savings",
              v: "Measured consumption reduction, load shaping and clean supply matched to real demand.",
            },
            {
              k: "Cost savings",
              v: "Avoided spend, recovered billing errors, procurement gains and reporting effort removed.",
            },
            {
              k: "Risk reduction",
              v: "Assurance grade evidence, supply chain visibility and value at risk expressed in money.",
            },
          ].map((c) => (
            <div key={c.k} className="rounded-xl border border-primary/30 bg-primary/5 p-5">
              <p className="text-sm font-semibold text-secondary">{c.k}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.v}</p>
            </div>
          ))}
        </div>

        {groups.map((group) => (
          <section key={group.title} className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight">{group.title}</h2>
            <div className="mt-5 overflow-hidden rounded-xl border border-border">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-muted/40">
                  <tr>
                    <th className="w-52 px-4 py-3 font-semibold">Product</th>
                    <th className="px-4 py-3 font-semibold">Energy savings</th>
                    <th className="px-4 py-3 font-semibold">Cost savings</th>
                    <th className="px-4 py-3 font-semibold">Risk reduction</th>
                  </tr>
                </thead>
                <tbody>
                  {group.rows.map((row, i) => (
                    <tr key={row.to} className={i % 2 ? "bg-card" : "bg-background"}>
                      <td className="border-t border-border px-4 py-4 align-top">
                        <Link to={row.to} className="font-semibold text-secondary hover:underline">
                          {row.product}
                        </Link>
                        <p className="mt-1 text-xs text-muted-foreground">{row.family}</p>
                      </td>
                      <td className="border-t border-border px-4 py-4 align-top text-muted-foreground">
                        {row.energy}
                      </td>
                      <td className="border-t border-border px-4 py-4 align-top text-muted-foreground">
                        {row.cost}
                      </td>
                      <td className="border-t border-border px-4 py-4 align-top text-muted-foreground">
                        {row.risk}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}

        <section className="mt-14 rounded-xl border border-primary/40 bg-primary/5 p-6">
          <p className="text-sm font-semibold text-secondary">The convergence claim</p>
          <p className="mt-2 max-w-4xl text-sm leading-relaxed text-muted-foreground">
            Bought separately, each line above is a point saving. Bought on one spine, the energy
            savings feed the inventory, the inventory feeds disclosure, and priced climate risk
            feeds capital allocation. That is where the value multiplies.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link to="/competitor-matrix" className="text-xs font-semibold text-primary hover:underline">
              Roadmap gap matrix
            </Link>
            <Link to="/sustainability-products" className="text-xs font-semibold text-primary hover:underline">
              Sustainability products
            </Link>
            <Link to="/energy-products" className="text-xs font-semibold text-primary hover:underline">
              Energy & Efficiency products
            </Link>
          </div>
        </section>

        <p className="mt-8 text-[11px] leading-relaxed text-muted-foreground">
          Value statements are directional and derived from the product roadmaps. Bracketed figures
          are placeholders pending Finance validation against a reference portfolio; they are not
          committed savings.
        </p>
      </div>
    </main>
  );
};

export default ValueProposition;
