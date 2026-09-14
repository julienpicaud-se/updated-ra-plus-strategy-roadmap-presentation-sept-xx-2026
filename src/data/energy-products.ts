// Dedicated Energy & Efficiency product pages.
//
// Roadmap phases follow the deck's sequencing rules: explicit quarters only where the
// roadmap has confirmed them, H1/H2 bands otherwise, and 2028 stays directional.
// Proof points separate three kinds of evidence: internal roadmap facts, licensed
// analyst evidence (Verdantix, reviewed September 2026), and customer proof that
// Finance or the account teams still have to confirm.

export type ProofKind = "Roadmap" | "Analyst" | "Customer" | "Finance";

export interface RoadmapPhase {
  period: string;
  label: string;
  items: string[];
}

export interface UseCase {
  persona: string;
  title: string;
  body: string;
  outcome: string;
}

export interface ProofPoint {
  kind: ProofKind;
  claim: string;
  source: string;
}

export interface EnergyProduct {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  position: "Market leading" | "On parity" | "Closing gap" | "Behind";
  positionNote: string;
  spineRole: string;
  roadmap: RoadmapPhase[];
  useCases: UseCase[];
  proof: ProofPoint[];
  rivals: string;
}

export const energyProducts: EnergyProduct[] = [
  {
    slug: "metering-interval-data",
    name: "Metering & Interval Data",
    tagline: "The data spine every energy and carbon product feeds from",
    summary:
      "Interval capture, meter and site hierarchy, M&V baselines and utility connectivity. Nothing granular downstream works without this, which is why it is funded first inside the Energy & Efficiency family.",
    position: "On parity",
    positionNote:
      "Rivals capture interval data well. Our advantage is not the capture, it is that the same interval data lands in a governed carbon inventory.",
    spineRole:
      "Feeds Granular Carbon Performance, Energy Efficiency, Utility Data Management and Demand Response & Flexibility from a single source.",
    roadmap: [
      {
        period: "Q3 and Q4 2026",
        label: "Foundations",
        items: [
          "Shared site, meter and asset hierarchy on the core platform",
          "Interval data capture and utility connectivity",
          "Data quality assurance rules on incoming meter streams",
        ],
      },
      {
        period: "H1 2027",
        label: "Granularity",
        items: [
          "M&V baselines and normalisation for savings measurement",
          "Hourly emissions signals published to Carbon Performance",
          "Self serve connector onboarding for new meter sources",
        ],
      },
      {
        period: "H2 2027",
        label: "Scale",
        items: [
          "Portfolio scale ingestion with lineage and audit trail",
          "Gap filling and estimation with method transparency",
          "Interval data available to every product through the shared spine",
        ],
      },
      {
        period: "2028 and beyond",
        label: "Directional",
        items: [
          "Near real time signals for flexibility and DER dispatch",
          "Anomaly detection on meter behaviour",
        ],
      },
    ],
    useCases: [
      {
        persona: "Energy manager",
        title: "See consumption at interval level, not on a monthly bill",
        body: "Interval capture across sites, with a hierarchy that matches how the business is actually organised.",
        outcome: "Waste and load patterns visible within days rather than at the next billing cycle.",
      },
      {
        persona: "Carbon lead",
        title: "Hourly emissions instead of annual averages",
        body: "Interval consumption combined with time matched factors produces hourly emissions rather than a yearly estimate.",
        outcome: "A defensible market based Scope 2 position that survives audit questions.",
      },
      {
        persona: "Efficiency engineer",
        title: "Prove savings with M&V baselines",
        body: "Normalised baselines let a measure be measured against what would have happened without it.",
        outcome: "Savings claims that a finance team will sign off on.",
      },
    ],
    proof: [
      {
        kind: "Roadmap",
        claim: "Funded first in the Energy & Efficiency family because four downstream products depend on it.",
        source: "RA+ 2026 and 2027 roadmap, data spine slide",
      },
      {
        kind: "Analyst",
        claim: "64 percent of corporate real estate respondents rate enhanced energy monitoring and control a priority.",
        source: "Verdantix, Building The Business Case For Energy Resilience, 2026 global survey",
      },
      {
        kind: "Customer",
        claim: "[ACCOUNT TEAM: name a reference site with interval coverage across the portfolio]",
        source: "To be confirmed before the board meeting",
      },
    ],
    rivals:
      "IBM Envizi Interval Meter Analytics and EnergyCAP both handle interval data well. Neither turns it into a governed inventory and funded action on the same platform.",
  },
  {
    slug: "energy-efficiency",
    name: "Energy Efficiency",
    tagline: "From measure library to funded, verified savings",
    summary:
      "The ECM library, recommendations with energy, carbon and cost cobenefits, audit digitization and savings verification. The product that turns data into action.",
    position: "Market leading",
    positionNote:
      "Recommendations launch in Q4 2026 and no rival links energy, carbon and cost cobenefits on one platform today.",
    spineRole: "Consumes interval data and baselines, publishes verified savings back to Carbon Performance.",
    roadmap: [
      {
        period: "Q4 2026",
        label: "Recommendations launch",
        items: [
          "Recommendations engine with energy, carbon and cost cobenefits",
          "ECM library first release",
          "Advanced scenario analysis and decarbonization planning, initiatives and actions management",
        ],
      },
      {
        period: "H1 2027",
        label: "Depth",
        items: [
          "Advanced ECM library covering energy and carbon cobenefits",
          "Audit digitization: findings captured once, reused across sites",
          "Measure level costing and payback",
        ],
      },
      {
        period: "H2 2027",
        label: "Verification",
        items: [
          "Savings verification against M&V baselines",
          "Portfolio level programme tracking",
          "Recommendation ranking by value at risk and payback",
        ],
      },
      {
        period: "2028 and beyond",
        label: "Directional",
        items: [
          "AI generated measure recommendations tuned to site behaviour",
          "Closed loop from recommendation to capital plan to verified saving",
        ],
      },
    ],
    useCases: [
      {
        persona: "Energy manager",
        title: "Know which measure to fund next",
        body: "Ranked measures with energy, carbon and cost impact side by side rather than three separate analyses.",
        outcome: "A defensible shortlist for the next capital cycle.",
      },
      {
        persona: "Sustainability director",
        title: "Show the carbon effect of an efficiency programme",
        body: "Verified savings feed the carbon inventory automatically instead of being restated by hand.",
        outcome: "The reduction claim and the inventory agree.",
      },
      {
        persona: "Site engineer",
        title: "Stop redoing the same audit",
        body: "Digitized audits and a shared measure library make findings reusable across similar sites.",
        outcome: "Audit effort spent once, applied many times.",
      },
    ],
    proof: [
      {
        kind: "Roadmap",
        claim: "Recommendations with cobenefits launch Q4 2026, ahead of the 2027 depth work.",
        source: "RA+ 2026 roadmap, Carbon Performance and Efficiency lanes",
      },
      {
        kind: "Analyst",
        claim: "Verdantix frames resilient decarbonization as linking carbon reduction with reliability and cost, which is the cobenefit argument.",
        source: "Verdantix, The Rise Of Resilient Decarbonization, November 2025",
      },
      {
        kind: "Customer",
        claim: "[ACCOUNT TEAM: name an efficiency programme with verified savings we can quote]",
        source: "To be confirmed before the board meeting",
      },
    ],
    rivals:
      "Honeywell Forge recommends within controlled assets. IBM Envizi and Gravity offer generic recommendations. None price energy, carbon and cost together.",
  },
  {
    slug: "utility-data-management",
    name: "Utility Data Management",
    tagline: "Invoices, cost allocation and variance explained",
    summary:
      "Bill capture and validation, cost allocation, and the accounting layer that makes energy spend explainable to Finance. Previously described as bill and data management.",
    position: "On parity",
    positionNote: "EnergyCAP is the category benchmark for bill accounting. We match it and connect it to carbon and efficiency.",
    spineRole: "Pairs invoice data with interval data so cost and consumption are reconciled in one place.",
    roadmap: [
      {
        period: "Q3 and Q4 2026",
        label: "Foundations",
        items: [
          "Invoice capture and validation on the shared hierarchy",
          "Cost allocation to sites, cost centres and legal entities",
          "Data quality assurance on incoming bills",
        ],
      },
      {
        period: "H1 2027",
        label: "Advanced processing",
        items: [
          "Advanced invoice processing with exception handling",
          "Rate and tariff modelling",
          "Cost and consumption reconciliation against interval data",
        ],
      },
      {
        period: "H2 2027",
        label: "Explanation",
        items: [
          "Variance explained: price, volume and weather effects separated",
          "Accrual and estimation for missing bills",
          "Audit trail on every adjustment",
        ],
      },
      {
        period: "2028 and beyond",
        label: "Directional",
        items: ["Automated dispute and recovery workflows", "AI assisted anomaly detection on billing"],
      },
    ],
    useCases: [
      {
        persona: "Finance controller",
        title: "Explain why the energy bill moved",
        body: "Variance split into price, volume and weather rather than a single unexplained number.",
        outcome: "An energy line item Finance can defend at month end.",
      },
      {
        persona: "Energy manager",
        title: "Catch billing errors before they are paid",
        body: "Validation rules and exception handling on every invoice.",
        outcome: "Recovered spend that pays for part of the programme.",
      },
      {
        persona: "Carbon lead",
        title: "Use bills where meters are missing",
        body: "Bill data fills inventory gaps with transparent estimation methods.",
        outcome: "Complete coverage without pretending the data is metered.",
      },
    ],
    proof: [
      {
        kind: "Roadmap",
        claim: "Advanced invoice processing is funded in the 2027 Energy & Efficiency plan.",
        source: "RA+ three year roadmap, Advanced Invoice Processing lane",
      },
      {
        kind: "Finance",
        claim: "[FINANCE: recovered billing errors and cost avoidance per portfolio]",
        source: "Value case placeholder pending Finance validation",
      },
      {
        kind: "Customer",
        claim: "[ACCOUNT TEAM: name a portfolio where bill validation recovered spend]",
        source: "To be confirmed before the board meeting",
      },
    ],
    rivals:
      "EnergyCAP is the benchmark on bill accounting and Accruent ties bills to asset systems. Neither delivers budgets, reforecasts and carbon on the same spine.",
  },
  {
    slug: "energy-portfolio-management",
    name: "Energy Portfolio Management",
    tagline: "Budgets, reforecasts and spend under management",
    summary:
      "Contract and spend visibility, energy budgets, reforecasting and scenario budgets. The product that makes energy a planned line item rather than a surprise.",
    position: "Market leading",
    positionNote: "Budget and reforecast workflows are thin across the peer set, and they are the CFO's language.",
    spineRole: "Consumes invoice, interval and contract data, publishes budgets and variance to Finance.",
    roadmap: [
      {
        period: "Q4 2026",
        label: "Contracts and spend",
        items: ["Contract and spend visibility across the portfolio", "Spend under management reporting"],
      },
      {
        period: "H1 2027",
        label: "Budgets",
        items: ["Energy budgets by site and cost centre", "Budget versus actual with variance explained"],
      },
      {
        period: "H2 2027",
        label: "Reforecasting",
        items: ["Rolling reforecasts driven by consumption and price signals", "Scenario budgets under different price paths"],
      },
      {
        period: "2028 and beyond",
        label: "Directional",
        items: ["Hedging and exposure views alongside sourcing", "Capital and operating plans on one energy view"],
      },
    ],
    useCases: [
      {
        persona: "CFO and Finance",
        title: "Budget energy with the same rigour as any other cost line",
        body: "Budgets built from actual consumption and contracted prices, reforecast as the year moves.",
        outcome: "Fewer surprises at quarter end, and a documented reason when there is one.",
      },
      {
        persona: "Energy director",
        title: "Test the portfolio against price shocks",
        body: "Scenario budgets under alternative price paths.",
        outcome: "A prepared answer before the market moves, not after.",
      },
      {
        persona: "Procurement",
        title: "See spend under management in one place",
        body: "Contract coverage and exposure across the portfolio.",
        outcome: "Sourcing decisions made against the real exposure.",
      },
    ],
    proof: [
      {
        kind: "Roadmap",
        claim: "Budget management and reforecast capability are named in the next generation product brief.",
        source: "RA Next-Generation Product Strategy business brief",
      },
      {
        kind: "Analyst",
        claim: "Verdantix reports the pivot to business value at all times, with efficiency and cost avoidance as the buying trigger.",
        source: "Verdantix, 10 Predictions For Energy Leaders In 2026 And Beyond, January 2026",
      },
      {
        kind: "Finance",
        claim: "[FINANCE: energy spend under management and forecast accuracy improvement]",
        source: "Value case placeholder pending Finance validation",
      },
    ],
    rivals:
      "IBM Envizi has deep bill analytics but thinner budget and reforecast workflows. Most rivals stop at reporting the spend.",
  },
  {
    slug: "capital-asset-planning",
    name: "Capital Asset Planning",
    tagline: "Turning measures and risk into a funded capital plan",
    summary:
      "Asset register, condition and replacement planning, and the capital pipeline that efficiency measures, electrification projects and adaptation actions all feed into.",
    position: "On parity",
    positionNote: "Asset planning tools exist. Ours is the one where the plan is fed by carbon, efficiency and priced climate risk.",
    spineRole: "Shares the asset register with Climate Risk, receives measures from Energy Efficiency.",
    roadmap: [
      {
        period: "Q4 2026",
        label: "Register",
        items: ["Asset register aligned to the shared hierarchy", "Condition and criticality attributes"],
      },
      {
        period: "H1 2027",
        label: "Planning",
        items: ["Replacement and renewal planning", "Capital pipeline fed by ranked efficiency measures"],
      },
      {
        period: "H2 2027",
        label: "Prioritisation",
        items: ["Prioritisation by payback, carbon and value at risk", "Multi year capital scenarios"],
      },
      {
        period: "2028 and beyond",
        label: "Directional",
        items: ["Portfolio optimisation across efficiency, electrification and resilience"],
      },
    ],
    useCases: [
      {
        persona: "Capital planner",
        title: "Rank projects on more than payback",
        body: "Payback, carbon impact and climate value at risk on the same ranking.",
        outcome: "Capital allocated where it reduces cost and exposure at once.",
      },
      {
        persona: "Operations director",
        title: "Plan replacements before they fail",
        body: "Condition and criticality on a shared register.",
        outcome: "Fewer emergency replacements at emergency prices.",
      },
      {
        persona: "Sustainability director",
        title: "Show the decarbonization plan is funded",
        body: "Measures with a capital route rather than an ambition slide.",
        outcome: "A trajectory the board can hold the business to.",
      },
    ],
    proof: [
      {
        kind: "Roadmap",
        claim: "The asset register is shared with Climate Risk, so exposure and capital planning use one register.",
        source: "RA+ platform architecture, shared hierarchy",
      },
      {
        kind: "Analyst",
        claim: "Verdantix finds tenants pay rents 49 percent higher for properties with dependable power systems.",
        source: "Verdantix, Building The Business Case For Energy Resilience",
      },
      {
        kind: "Customer",
        claim: "[ACCOUNT TEAM: name a portfolio using RA+ for capital prioritisation]",
        source: "To be confirmed before the board meeting",
      },
    ],
    rivals: "Accruent connects assets and buildings well. The capital case built from carbon and priced risk is ours to win.",
  },
  {
    slug: "energy-sourcing",
    name: "Energy Sourcing",
    tagline: "Buying energy with the carbon consequence visible",
    summary:
      "Sourcing strategy, supplier and contract management, and the link between a procurement decision and its market based Scope 2 outcome. Backed by Schneider energy expertise.",
    position: "Market leading",
    positionNote: "Schneider energy expertise plus the platform is a combination the software only rivals cannot assemble.",
    spineRole: "Feeds contracts and prices into Energy Portfolio Management and market based factors into Carbon Performance.",
    roadmap: [
      {
        period: "Q4 2026",
        label: "Contracts",
        items: ["Supplier and contract register", "Metered energy, EAC and PPA management fed by the Schneider energy expertise"],
      },
      {
        period: "H1 2027",
        label: "Decision support",
        items: ["Sourcing options compared on price and carbon", "Contract coverage and exposure views"],
      },
      {
        period: "H2 2027",
        label: "Integration",
        items: ["Sourcing decisions reflected in market based Scope 2 automatically", "Renewal calendar and exposure alerts"],
      },
      {
        period: "2028 and beyond",
        label: "Directional",
        items: ["Portfolio level sourcing optimisation across markets"],
      },
    ],
    useCases: [
      {
        persona: "Energy procurement",
        title: "Compare offers on price and carbon together",
        body: "Sourcing options evaluated on both dimensions instead of price first, carbon later.",
        outcome: "Contracts that do not have to be explained away in the inventory.",
      },
      {
        persona: "Carbon lead",
        title: "Market based Scope 2 that reflects the contracts actually signed",
        body: "Contract and instrument data flows into the inventory without a spreadsheet handover.",
        outcome: "A market based position that matches procurement reality.",
      },
      {
        persona: "CFO",
        title: "See renewal exposure ahead of time",
        body: "Coverage and renewal calendar across the portfolio.",
        outcome: "Renegotiation started before the cliff, not after it.",
      },
    ],
    proof: [
      {
        kind: "Roadmap",
        claim: "EAC and PPA management is confirmed in the 2026 to 2027 plan and fed by Schneider energy expertise.",
        source: "RA+ roadmap, Carbon Performance and Energy lanes",
      },
      {
        kind: "Analyst",
        claim: "Verdantix predicts an energy technology major will acquire a renewable procurement specialist, evidence that this capability is scarce and valued.",
        source: "Verdantix, 10 Predictions For Energy Leaders In 2026 And Beyond, January 2026",
      },
      {
        kind: "Customer",
        claim: "[ACCOUNT TEAM: name a sourcing engagement we can quote alongside the platform]",
        source: "To be confirmed before the board meeting",
      },
    ],
    rivals: "Arcadia is strong on utility data infrastructure. Sourcing advisory plus platform at Schneider scale is the differentiator.",
  },
  {
    slug: "renewables-eacs",
    name: "Renewables & EACs",
    tagline: "Instruments tracked, retired and defensible",
    summary:
      "EAC and PPA tracking, allocation and retirement, with the audit trail that makes a market based claim survive assurance.",
    position: "Market leading",
    positionNote: "Instrument management tied directly to the inventory and its audit trail is rare in the peer set.",
    spineRole: "Publishes instrument allocations into the carbon inventory with lineage and evidence.",
    roadmap: [
      {
        period: "Q4 2026",
        label: "Instrument register",
        items: ["EAC and PPA register with contract linkage", "Allocation to sites and reporting entities"],
      },
      {
        period: "H1 2027",
        label: "Assurance",
        items: ["Retirement tracking with evidence and audit trail", "Double counting controls"],
      },
      {
        period: "H2 2027",
        label: "Matching",
        items: ["Time matched allocation using interval data", "Residual mix and gap reporting"],
      },
      {
        period: "2028 and beyond",
        label: "Directional",
        items: ["Hourly matched clean energy claims at portfolio scale"],
      },
    ],
    useCases: [
      {
        persona: "Carbon lead",
        title: "Defend the market based claim in an audit",
        body: "Every instrument traceable from purchase to retirement to the emissions line it affects.",
        outcome: "An assurance conversation that ends quickly.",
      },
      {
        persona: "Energy director",
        title: "Allocate instruments where they matter most",
        body: "Allocation across sites and entities against reporting obligations.",
        outcome: "Instruments used deliberately rather than spread thin.",
      },
      {
        persona: "Reporting manager",
        title: "Report residual mix honestly",
        body: "Clear view of what is covered and what is not.",
        outcome: "A disclosure that does not overstate the position.",
      },
    ],
    proof: [
      {
        kind: "Roadmap",
        claim: "EAC and PPA management sits in the confirmed plan, with time matching enabled by the interval data spine.",
        source: "RA+ 2026 and 2027 roadmap",
      },
      {
        kind: "Analyst",
        claim: "Verdantix expects hyperscaler pressure on carbon free energy claims to raise the bar on matching rigour.",
        source: "Verdantix, 10 Predictions For Energy Leaders In 2026 And Beyond, January 2026",
      },
      {
        kind: "Customer",
        claim: "[ACCOUNT TEAM: name a client with instruments managed end to end in RA+]",
        source: "To be confirmed before the board meeting",
      },
    ],
    rivals: "Specialist EAC platforms exist. None of them own the inventory the claim lands in.",
  },
  {
    slug: "demand-response-flexibility",
    name: "Demand Response & Flexibility",
    tagline: "Turning load into a revenue and resilience asset",
    summary:
      "Demand response programme participation, peak shaving and grid flexibility monetization, built on the interval data spine.",
    position: "Market leading",
    positionNote: "Flexibility monetization sitting next to carbon and efficiency on one platform has no direct equivalent in the peer set.",
    spineRole: "Consumes interval data and DER availability, returns avoided cost and avoided emissions.",
    roadmap: [
      {
        period: "Q4 2026",
        label: "Visibility",
        items: ["Load profile and peak analysis from interval data", "Flexibility potential assessment by site"],
      },
      {
        period: "H1 2027",
        label: "Programmes",
        items: ["Demand response programme enrolment and tracking", "Peak shaving recommendations with cost impact"],
      },
      {
        period: "H2 2027",
        label: "Monetization",
        items: ["Event performance and settlement visibility", "Avoided cost and avoided emissions reporting"],
      },
      {
        period: "2028 and beyond",
        label: "Directional",
        items: ["Automated dispatch across DER and controllable load"],
      },
    ],
    useCases: [
      {
        persona: "Energy director",
        title: "Find the flexibility already in the portfolio",
        body: "Load profiles reveal shiftable and sheddable load without new hardware.",
        outcome: "Revenue and demand charge savings from assets already owned.",
      },
      {
        persona: "Operations",
        title: "Shave peaks without disrupting the site",
        body: "Peak analysis with cost impact per action.",
        outcome: "Lower demand charges with operational limits respected.",
      },
      {
        persona: "Sustainability director",
        title: "Report the carbon effect of flexibility",
        body: "Shifted load valued against time matched grid intensity.",
        outcome: "Flexibility counted as a decarbonization lever, not just a cost play.",
      },
    ],
    proof: [
      {
        kind: "Roadmap",
        claim: "Named as a spoke off the Metering & Interval Data spine in the platform architecture.",
        source: "RA+ data spine slide",
      },
      {
        kind: "Analyst",
        claim: "Verdantix expects flexibility to become a central energy theme in 2026, including grid operator and hyperscaler dynamics.",
        source: "Verdantix, 10 Predictions For Energy Leaders In 2026 And Beyond, January 2026",
      },
      {
        kind: "Finance",
        claim: "[FINANCE: demand charge savings and programme revenue per portfolio]",
        source: "Value case placeholder pending Finance validation",
      },
    ],
    rivals: "DR specialists monetize load but do not carry carbon, cost and efficiency on the same platform.",
  },
  {
    slug: "electrification-der",
    name: "Electrification & DER Management",
    tagline: "EV charging, solar and storage on the same platform as the plan",
    summary:
      "Behind the meter assets, EV charging and on site generation, bridging efficiency measures and energy procurement.",
    position: "Closing gap",
    positionNote: "This is the area where we are honestly behind the specialists, and the roadmap treats it as a 2027 and 2028 build.",
    spineRole: "Contributes generation and charging data to the spine, consumes tariffs and carbon signals.",
    roadmap: [
      {
        period: "Q4 2026",
        label: "Inventory",
        items: ["DER and charging asset inventory on the shared register"],
      },
      {
        period: "H1 2027",
        label: "Performance",
        items: ["On site generation and storage performance monitoring", "EV charging consumption and cost visibility"],
      },
      {
        period: "H2 2027",
        label: "Planning",
        items: ["Electrification scenarios with cost and carbon outcomes", "Self consumption and export optimisation views"],
      },
      {
        period: "2028 and beyond",
        label: "Directional",
        items: ["Coordinated DER dispatch alongside demand response", "Fleet electrification planning at portfolio scale"],
      },
    ],
    useCases: [
      {
        persona: "Energy manager",
        title: "See what on site assets are actually delivering",
        body: "Generation, storage and charging performance against expectation.",
        outcome: "Underperforming assets identified rather than assumed fine.",
      },
      {
        persona: "Capital planner",
        title: "Test electrification before committing capital",
        body: "Scenarios with cost, carbon and resilience outcomes.",
        outcome: "An investment case built on portfolio data.",
      },
      {
        persona: "Fleet and facilities",
        title: "Manage charging cost as energy cost",
        body: "Charging consumption tied into tariffs, budgets and emissions.",
        outcome: "One energy story rather than a separate fleet spreadsheet.",
      },
    ],
    proof: [
      {
        kind: "Roadmap",
        claim: "Positioned as the bridge between efficiency actions and procurement, sequenced after the spine is stable.",
        source: "RA+ Energy & Efficiency family definition",
      },
      {
        kind: "Analyst",
        claim: "Verdantix expects US solar investment to beat official estimates despite policy headwinds, keeping DER growth on the agenda.",
        source: "Verdantix, 10 Predictions For Energy Leaders In 2026 And Beyond, January 2026",
      },
      {
        kind: "Customer",
        claim: "[ACCOUNT TEAM: identify a DER or charging reference before we position this externally]",
        source: "To be confirmed before the board meeting",
      },
    ],
    rivals: "DER and charging specialists lead today. We do not claim parity in 2026, we claim convergence value by 2028.",
  },
  {
    slug: "budget-tariff-intelligence",
    name: "Budget & Tariff Intelligence",
    tagline: "Tariffs, budgets and price exposure made legible",
    summary:
      "Tariff modelling, rate optimisation and budget intelligence that turn contract terms and market prices into a defensible energy budget and a clear view of exposure.",
    position: "Closing gap",
    positionNote:
      "Tariff libraries are mature in the bill accounting field. Our wedge is joining tariff logic to interval data, budgets and carbon on one platform.",
    spineRole:
      "Supplies the price layer of the spine so consumption, cost and carbon can be read together.",
    roadmap: [
      {
        period: "Q3 and Q4 2026",
        label: "Foundations",
        items: [
          "Tariff library and rate structures on the shared hierarchy",
          "Budget build from validated bill and interval history",
          "Price and volume split available to Finance reporting",
        ],
      },
      {
        period: "H1 2027",
        label: "Intelligence",
        items: [
          "Rate optimisation and tariff switching analysis",
          "Reforecasting against market curves",
          "Exposure view across fixed, indexed and hedged volumes",
        ],
      },
      {
        period: "H2 2027",
        label: "Scale",
        items: [
          "Scenario budgets across portfolios and legal entities",
          "Tariff impact on efficiency and flexibility business cases",
          "Audit trail on every budget assumption",
        ],
      },
      {
        period: "2028 and beyond",
        label: "Directional",
        items: [
          "AI assisted tariff recommendation",
          "Continuous budget to actual monitoring with alerting",
        ],
      },
    ],
    useCases: [
      {
        persona: "Finance controller",
        title: "Build an energy budget that survives review",
        body: "Budgets built from validated consumption and modelled tariffs rather than last year plus a percentage.",
        outcome: "A budget line Finance can defend and reforecast.",
      },
      {
        persona: "Energy manager",
        title: "Test whether the site is on the right rate",
        body: "Rate optimisation compares actual interval profiles against alternative tariff structures.",
        outcome: "Savings found without touching a single asset.",
      },
      {
        persona: "Procurement lead",
        title: "See price exposure across the portfolio",
        body: "Fixed, indexed and hedged volumes shown together against market movement.",
        outcome: "Sourcing decisions taken with the exposure in view.",
      },
    ],
    proof: [
      {
        kind: "Roadmap",
        claim: "Tariff modelling and budget intelligence are funded in the 2027 Energy & Efficiency plan.",
        source: "RA+ three year roadmap, Energy & Efficiency lane",
      },
      {
        kind: "Analyst",
        claim: "Verdantix places energy cost volatility among the primary drivers of energy management software spend.",
        source: "Verdantix energy management research, reviewed September 2026",
      },
      {
        kind: "Finance",
        claim: "[FINANCE: quantify avoided cost from rate optimisation across a reference portfolio]",
        source: "Value case placeholder pending Finance validation",
      },
    ],
    rivals:
      "EnergyCAP and Accruent hold deep tariff libraries tied to bill accounting. Neither carries tariff logic into budgets, flexibility business cases and carbon on the same spine.",
  },
];

// Presentation order mirrors the Energy & Efficiency family map on the deck.
export const energyProductOrder = [
  "energy-efficiency",
  "capital-asset-planning",
  "metering-interval-data",
  "energy-portfolio-management",
  "utility-data-management",
  "budget-tariff-intelligence",
  "energy-sourcing",
  "renewables-eacs",
  "demand-response-flexibility",
  "electrification-der",
];

export const orderedEnergyProducts = [...energyProducts].sort(
  (a, b) =>
    (energyProductOrder.indexOf(a.slug) + 1 || 99) -
    (energyProductOrder.indexOf(b.slug) + 1 || 99),
);

export const findEnergyProduct = (slug?: string) =>
  energyProducts.find((p) => p.slug === slug);

