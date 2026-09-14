// Feature lists and competitor gaps for the Energy & Efficiency proof pages.
// Keyed by product slug from energy-products.ts. Features describe what ships on
// the 2026 to 2027 roadmap. Competitor gaps state what named rivals do not do,
// based on internal RA+ assessment, not third party ratings.

export interface CompetitorGap {
  competitor: string;
  gap: string;
}

export interface ProductProof {
  features: string[];
  gaps: CompetitorGap[];
}

export const productProof: Record<string, ProductProof> = {
  "metering-interval-data": {
    features: [
      "Interval data capture across sites, meters and submeters",
      "Shared site, meter and asset hierarchy on the core platform",
      "Utility connectivity with self serve connector onboarding",
      "Data quality assurance rules on incoming meter streams",
      "M&V baselines and normalisation for savings measurement",
      "Hourly emissions signals published to Carbon Performance",
      "Gap filling and estimation with method transparency",
      "Portfolio scale ingestion with lineage and audit trail",
    ],
    gaps: [
      {
        competitor: "IBM Envizi",
        gap: "Strong interval analytics, but interval data does not land in a governed carbon inventory with lineage on the same platform.",
      },
      {
        competitor: "EnergyCAP",
        gap: "Solid meter and bill capture, but no downstream carbon or funded efficiency action built on the same data.",
      },
      {
        competitor: "Accruent",
        gap: "Meter data serves asset and maintenance workflows, not an audit grade emissions baseline.",
      },
    ],
  },
  "energy-efficiency": {
    features: [
      "Recommendations engine ranking measures on energy, carbon and cost cobenefits",
      "ECM library, growing to an advanced library with energy and carbon cobenefits in 2027 H1",
      "Audit digitization: findings captured once, reused across sites",
      "Measure level costing, payback and scenario analysis",
      "Initiatives and actions management from recommendation to execution",
      "Savings verification against M&V baselines",
      "Portfolio level programme tracking",
      "Recommendation ranking by value at risk and payback",
    ],
    gaps: [
      {
        competitor: "Honeywell Forge",
        gap: "Recommends within controlled assets only, and cannot price the carbon and cost cobenefit of a measure.",
      },
      {
        competitor: "IBM Envizi",
        gap: "Generic recommendations without a linked ECM library, costing, payback or savings verification loop.",
      },
      {
        competitor: "Gravity",
        gap: "Carbon led recommendations without the energy management depth or verification against metered baselines.",
      },
    ],
  },
  "utility-data-management": {
    features: [
      "Invoice capture and validation on the shared hierarchy",
      "Cost allocation to sites, cost centres and legal entities",
      "Data quality assurance on incoming bills",
      "Advanced invoice processing with exception handling",
      "Rate and tariff modelling",
      "Cost and consumption reconciliation against interval data",
      "Variance explained: price, volume and weather effects separated",
      "Accrual and estimation with an audit trail on every adjustment",
    ],
    gaps: [
      {
        competitor: "EnergyCAP",
        gap: "Category benchmark on bill accounting, but bills stop at reporting rather than feeding carbon, budgets and action on one spine.",
      },
      {
        competitor: "Accruent",
        gap: "Ties bills to asset systems, not to budgets, reforecasts and a carbon inventory.",
      },
      {
        competitor: "IBM Envizi",
        gap: "Deep bill analytics, thinner connection to funded efficiency measures and decarbonization planning.",
      },
    ],
  },
  "energy-portfolio-management": {
    features: [
      "Contract and spend visibility across the portfolio",
      "Spend under management reporting",
      "Energy budgets by site and cost centre",
      "Budget versus actual with variance explained",
      "Rolling reforecasts driven by consumption and price signals",
      "Scenario budgets under different price paths",
      "Variance published to Finance in one view",
    ],
    gaps: [
      {
        competitor: "IBM Envizi",
        gap: "Strong reporting of spend, thinner budget, reforecast and scenario budget workflows.",
      },
      {
        competitor: "EnergyCAP",
        gap: "Bill accounting strength, but budgets and rolling reforecasts are not the product's centre of gravity.",
      },
      {
        competitor: "Arcadia",
        gap: "Utility data infrastructure without CFO grade budget and reforecast workflows built on top.",
      },
    ],
  },
  "capital-asset-planning": {
    features: [
      "Asset register aligned to the shared hierarchy",
      "Condition and criticality attributes on every asset",
      "Replacement and renewal planning",
      "Capital pipeline fed by ranked efficiency measures",
      "Prioritisation by payback, carbon and value at risk",
      "Multi year capital scenarios",
      "Shared register with Climate Risk, so exposure and planning use one source",
    ],
    gaps: [
      {
        competitor: "Accruent",
        gap: "Connects assets and buildings well, but the capital case is not built from carbon and priced climate risk.",
      },
      {
        competitor: "IBM Envizi",
        gap: "Sustainability data platform without a capital planning engine fed by measures and risk.",
      },
      {
        competitor: "Copperleaf",
        gap: "Strong capital prioritisation for infrastructure, but not fed by a corporate carbon inventory or climate value at risk.",
      },
    ],
  },
  "energy-sourcing": {
    features: [
      "Supplier and contract register with coverage and exposure views",
      "Metered energy, EAC and PPA management fed by Schneider energy expertise",
      "Sourcing options compared on price and carbon together",
      "Contract coverage and renewal calendar with exposure alerts",
      "Sourcing decisions reflected in market based Scope 2 automatically",
      "Market based factors published into Carbon Performance",
    ],
    gaps: [
      {
        competitor: "Arcadia",
        gap: "Strong utility data infrastructure, but no sourcing advisory plus platform combination at Schneider scale.",
      },
      {
        competitor: "Specialist procurement platforms",
        gap: "Handle contracts and tenders, but the carbon consequence of a sourcing decision does not land in the inventory automatically.",
      },
    ],
  },
  "renewables-eacs": {
    features: [
      "EAC and PPA register with contract linkage",
      "Allocation to sites and reporting entities",
      "Retirement tracking with evidence and audit trail",
      "Double counting controls",
      "Time matched allocation using interval data",
      "Residual mix and gap reporting",
      "Instrument lineage into the carbon inventory",
    ],
    gaps: [
      {
        competitor: "Specialist EAC platforms",
        gap: "Track instruments well, but none of them own the inventory the market based claim lands in.",
      },
      {
        competitor: "IBM Envizi",
        gap: "Records instruments as data, without time matched allocation driven by interval consumption.",
      },
    ],
  },
  "demand-response-flexibility": {
    features: [
      "Load profile and peak analysis from interval data",
      "Flexibility potential assessment by site",
      "Demand response programme enrolment and tracking",
      "Peak shaving recommendations with cost impact",
      "Event performance and settlement visibility",
      "Avoided cost and avoided emissions reporting",
    ],
    gaps: [
      {
        competitor: "DR and VPP specialists",
        gap: "Monetize load effectively, but do not carry carbon, cost and efficiency on the same platform.",
      },
      {
        competitor: "IBM Envizi",
        gap: "Reports consumption but does not turn it into programme enrolment, settlement and avoided emissions.",
      },
    ],
  },
  "electrification-der": {
    features: [
      "DER and charging asset inventory on the shared register",
      "On site generation and storage performance monitoring",
      "EV charging consumption and cost visibility",
      "Electrification scenarios with cost and carbon outcomes",
      "Self consumption and export optimisation views",
      "Charging cost tied into tariffs, budgets and emissions",
    ],
    gaps: [
      {
        competitor: "DER and charging specialists",
        gap: "Lead on device depth today, but their data lives outside the carbon inventory and capital plan.",
      },
      {
        competitor: "IBM Envizi",
        gap: "No dedicated electrification scenario capability tied to the energy and carbon baseline.",
      },
    ],
  },
};
