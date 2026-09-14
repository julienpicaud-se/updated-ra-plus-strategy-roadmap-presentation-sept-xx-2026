// Dedicated product pages for the RA+ Sustainability family, built to the same
// pattern as the Energy & Efficiency product pages.
//
// Roadmap phases follow the deck's sequencing rules: explicit quarters only where the
// roadmap has confirmed them, H1 and H2 bands otherwise, and 2028 stays directional.
// Proof points separate roadmap facts, licensed analyst evidence (Verdantix, reviewed
// September 2026) and customer or Finance proof still to be confirmed.

export type ProofKind = "Roadmap" | "Analyst" | "Customer" | "Finance";

export interface SustRoadmapPhase {
  period: string;
  label: string;
  items: string[];
}

export interface SustUseCase {
  persona: string;
  title: string;
  body: string;
  outcome: string;
}

export interface SustProofPoint {
  kind: ProofKind;
  claim: string;
  source: string;
}

export interface SustainabilityProduct {
  slug: string;
  name: string;
  family: string;
  familyTo: string;
  tagline: string;
  summary: string;
  position: "Market leading" | "On parity" | "Closing gap" | "Behind";
  positionNote: string;
  spineRole: string;
  roadmap: SustRoadmapPhase[];
  useCases: SustUseCase[];
  proof: SustProofPoint[];
  rivals: string;
}

export const sustainabilityProductPages: SustainabilityProduct[] = [
  {
    slug: "carbon-inventory",
    name: "Carbon Inventory",
    family: "Carbon Performance",
    familyTo: "/carbon-performance",
    tagline: "The governed inventory every other product consumes",
    summary:
      "Scope 1, 2 and 3 accounting with a shared hierarchy, emission factors, per gas breakdown and method transparency on every data point. This is the single number the whole platform reports against.",
    position: "Market leading",
    positionNote:
      "Depth of operational and energy grade data feeding one governed inventory is our strongest position in the sustainability family.",
    spineRole:
      "Receives energy, supplier and product data, and publishes the inventory to Reporting & Compliance, Strategy and Climate Risk.",
    roadmap: [
      {
        period: "Q3 2026",
        label: "Now",
        items: [
          "Sold product emissions: Scope 3 categories 10, 11 and 12",
          "Inventory revamp with clarity and per gas breakdown",
          "Pre-calculated emissions import for client calculated data",
          "System admin improvements: config engine, calc methods, templates",
        ],
      },
      {
        period: "Q4 2026",
        label: "Next",
        items: [
          "Base year, exclusions and materiality for GHGP compliant boundaries",
          "Thermal source attribution for a defensible Scope 1 and 2 split",
          "Refrigerant leakage to usage: Scope 1 fugitive emissions",
          "Employee commuting and working from home: Scope 3 category 7",
          "Sera for carbon inventory: AI guided troubleshooting",
        ],
      },
      {
        period: "2027 H1",
        label: "Later",
        items: [
          "Category 4 and 9 product linked transport: upstream and downstream transport",
          "Financial and equity consolidation across ownership boundaries",
          "Waste emission estimation: Scope 3 category 5",
          "Improved method transparency per data point",
          "Rebaselining and base year recalculation workflows",
        ],
      },
      {
        period: "2027 H2",
        label: "Later",
        items: [
          "Category 15 investments: PCAF aligned financed emissions",
          "FLAG segmentation for specialised standards",
          "Dedicated auditor experience: variance checks, reports and status",
        ],
      },
    ],
    useCases: [
      {
        persona: "Sustainability director",
        title: "Close the Scope 3 coverage gap",
        body: "Sold products, transport, commuting, waste and investments are mapped on the same inventory rather than in separate spreadsheets and consultant models.",
        outcome: "One consultant grade inventory that stands up in audit.",
      },
      {
        persona: "Finance and audit",
        title: "Defend every number",
        body: "Method transparency per data point, base year and exclusions, rebaselining and a dedicated auditor experience create a complete trail from figure to evidence.",
        outcome: "Assurance questions answered in the product, not by email.",
      },
      {
        persona: "Energy manager",
        title: "Energy data becomes carbon data",
        body: "Thermal source attribution and hourly emissions turn metered consumption into a defensible Scope 1 and 2 position.",
        outcome: "Energy actions land in the inventory with defensible savings.",
      },
      {
        persona: "Group controller",
        title: "Consolidate to the ownership boundary",
        body: "Financial and equity consolidation rolls sites and entities up the same way the financial statements do.",
        outcome: "Carbon and financial consolidation finally agree.",
      },
    ],
    proof: [
      {
        kind: "Roadmap",
        claim: "Carbon Performance owns the inventory every other product consumes.",
        source: "RA+ 2026 and 2027 roadmap, Carbon Performance lane",
      },
      {
        kind: "Roadmap",
        claim: "Category 4 and 9 product linked transport is committed for 2027 H1.",
        source: "RA+ 2026 and 2027 roadmap",
      },
      {
        kind: "Analyst",
        claim: "Verdantix names Schneider Electric a Leader in enterprise carbon management.",
        source: "Verdantix Green Quadrant: Enterprise Carbon Management Software 2026",
      },
      {
        kind: "Customer",
        claim: "[ACCOUNT TEAM: name an account where energy grade inventory won an audit or a deal]",
        source: "To be confirmed before the board meeting",
      },
    ],
    rivals:
      "Watershed, Persefoni, Sphera, IBM Envizi and Sweep all compete on inventory. None of them combine operated energy depth with a governed inventory on the same platform.",
  },
  {
    slug: "decarbonization-planning",
    name: "Decarbonization Planning & Initiatives",
    family: "Carbon Performance",
    familyTo: "/carbon-performance",
    tagline: "From a number to a funded plan",
    summary:
      "Scenario analysis, abatement modelling, an advanced ECM library with energy and carbon cobenefits, and initiatives and actions management that carries a measure from idea to verified result.",
    position: "Closing gap",
    positionNote:
      "Rivals model reduction well. Our advantage is that plans are built on operated energy data and executed through the same platform.",
    spineRole:
      "Consumes the inventory and energy data, and publishes committed initiatives to Strategy and Reporting & Compliance.",
    roadmap: [
      {
        period: "Q3 2026",
        label: "Now",
        items: [
          "Reduction levers modelled on the current inventory",
          "Initiative tracking against baseline and target",
        ],
      },
      {
        period: "Q4 2026",
        label: "Next",
        items: [
          "Advanced scenario analysis and decarbonization planning",
          "Initiatives and actions management end to end",
          "Marginal abatement view across energy and carbon levers",
        ],
      },
      {
        period: "2027 H1",
        label: "Later",
        items: [
          "Advanced ECM library: energy and carbon cobenefits",
          "Measure level costing, payback and savings verification",
          "Rebaselining aware plans so targets survive structural change",
        ],
      },
      {
        period: "2027 H2",
        label: "Later",
        items: [
          "Capital plan integration with climate risk adaptation actions",
          "Portfolio level programme tracking and variance reporting",
        ],
      },
    ],
    useCases: [
      {
        persona: "Head of decarbonization",
        title: "Choose the next 20 measures",
        body: "Measures are ranked on energy, carbon, cost and payback together instead of on carbon alone.",
        outcome: "A defensible, funded shortlist rather than a wish list.",
      },
      {
        persona: "CFO",
        title: "Know what the target costs",
        body: "Scenario analysis prices the pathway to the target and shows what happens if funding slips.",
        outcome: "The target has a budget attached to it.",
      },
      {
        persona: "Site and operations leads",
        title: "Execute and prove",
        body: "Initiatives and actions management tracks a measure from approval to verified savings against the M&V baseline.",
        outcome: "Claimed savings match measured savings.",
      },
      {
        persona: "Sustainability reporting lead",
        title: "Report progress, not intent",
        body: "Committed initiatives flow into disclosure with their evidence attached.",
        outcome: "Transition plan disclosures backed by real projects.",
      },
    ],
    proof: [
      {
        kind: "Roadmap",
        claim: "Advanced scenario analysis and decarbonization planning is committed for Q4 2026.",
        source: "RA+ 2026 and 2027 roadmap, Carbon Performance lane",
      },
      {
        kind: "Roadmap",
        claim: "The advanced ECM library with energy and carbon cobenefits lands in 2027 H1.",
        source: "RA+ 2026 and 2027 roadmap",
      },
      {
        kind: "Analyst",
        claim: "Carbon reduction is being replanned alongside energy reliability and cost stability, not on its own.",
        source: "Verdantix, The Rise Of Resilient Decarbonization, November 2025",
      },
      {
        kind: "Finance",
        claim: "[FINANCE: confirm the avoided cost and carbon per funded measure used in the value case]",
        source: "To be confirmed before external use",
      },
    ],
    rivals:
      "Watershed and Sweep guide reduction planning well but stop before execution. Efficiency specialists execute measures but cannot price the carbon cobenefit.",
  },
  {
    slug: "eac-ppa-management",
    name: "EAC & PPA Management",
    family: "Carbon Performance",
    familyTo: "/carbon-performance",
    tagline: "Market based Scope 2 that survives assurance",
    summary:
      "Certificate and contract lifecycle handled inside the platform: procurement records, allocation, retirement and market based Scope 2 reporting, with the result landing directly in the governed inventory.",
    position: "Closing gap",
    positionNote:
      "Certificate specialists are deeper on sourcing. We win by connecting the certificate to the inventory and the disclosure without reconciliation.",
    spineRole:
      "Feeds market based Scope 2 into the Carbon Inventory and evidence into Reporting & Compliance.",
    roadmap: [
      {
        period: "Q3 2026",
        label: "Now",
        items: [
          "Contract and certificate records against the shared site hierarchy",
          "Location based and market based Scope 2 side by side",
        ],
      },
      {
        period: "Q4 2026",
        label: "Next",
        items: [
          "EAC and PPA management for market based Scope 2 coverage",
          "Allocation rules across entities, sites and reporting boundaries",
          "Retirement and claim evidence captured with the certificate",
        ],
      },
      {
        period: "2027 H1",
        label: "Later",
        items: [
          "Hourly emissions matching against consumption intervals",
          "Contract forecasting and coverage gap alerts",
        ],
      },
      {
        period: "2027 H2",
        label: "Later",
        items: [
          "Assurance grade claim packs for market based reporting",
          "Sourcing scenarios weighed against efficiency and flexibility",
        ],
      },
    ],
    useCases: [
      {
        persona: "Procurement lead",
        title: "Cover the right load",
        body: "Certificates and PPAs are allocated to the sites and entities that actually need coverage.",
        outcome: "No over buying, no uncovered reporting entity.",
      },
      {
        persona: "Sustainability lead",
        title: "Defend the clean power claim",
        body: "Retirement records and evidence sit with the emission figure they support.",
        outcome: "Market based Scope 2 that survives assurance.",
      },
      {
        persona: "Energy director",
        title: "Balance sourcing against other levers",
        body: "Certificate spend is compared with efficiency measures and flexibility revenue on the same platform.",
        outcome: "Clean power is a choice, not a default.",
      },
    ],
    proof: [
      {
        kind: "Roadmap",
        claim: "EAC and PPA management is committed for Q4 2026.",
        source: "RA+ 2026 and 2027 roadmap, Carbon Performance lane",
      },
      {
        kind: "Roadmap",
        claim: "Hourly emissions signals are published from the energy data spine into the inventory.",
        source: "RA+ platform data spine",
      },
      {
        kind: "Customer",
        claim: "[ACCOUNT TEAM: name an account that reconciles certificates outside their carbon tool today]",
        source: "To be confirmed before the board meeting",
      },
    ],
    rivals:
      "Certificate marketplaces and PPA advisory platforms are deeper on sourcing, but hold their records outside the corporate inventory.",
  },
  {
    slug: "supplier-engagement",
    name: "Supplier Engagement",
    family: "Supply Chain",
    familyTo: "/supply-chain",
    tagline: "Reach suppliers, get data, drive abatement",
    summary:
      "Zeigo network reach plus custom campaigns to collect supplier emissions, primary data and abatement commitments, feeding categories 1 and 4 into the Carbon Inventory with supplier specific factors.",
    position: "Market leading",
    positionNote:
      "Network reach combined with a governed inventory destination is a position few rivals can match.",
    spineRole:
      "Feeds Scope 3 categories 1 and 4 into Carbon Performance and supplier evidence into Reporting & Compliance.",
    roadmap: [
      {
        period: "Q3 2026",
        label: "Now",
        items: [
          "Supplier onboarding and network reach through Zeigo",
          "Custom campaigns with reusable questionnaire templates",
          "Response tracking and supplier data quality checks",
        ],
      },
      {
        period: "Q4 2026",
        label: "Next",
        items: [
          "Supplier specific factors replacing spend based estimates",
          "Advanced campaign management with approval hierarchies and bulk assignment",
          "Supplier emissions abatement tracking",
        ],
      },
      {
        period: "2027 H1",
        label: "Later",
        items: [
          "Supply chain PCF integration into the carbon inventory",
          "Supplier segmentation by hotspot and influence",
          "Engagement programmes tied to procurement decisions",
        ],
      },
      {
        period: "2027 H2",
        label: "Later",
        items: [
          "Abatement commitments tracked to delivered reductions",
          "Supplier data reuse across disclosure frameworks",
        ],
      },
    ],
    useCases: [
      {
        persona: "Procurement director",
        title: "Move from estimates to primary data",
        body: "Campaigns collect supplier specific factors for the categories that dominate the footprint.",
        outcome: "Spend based estimates replaced where it matters most.",
      },
      {
        persona: "Sustainability lead",
        title: "Prove supplier abatement",
        body: "Commitments are tracked through to delivered reductions inside the inventory.",
        outcome: "Scope 3 reductions that can be disclosed with evidence.",
      },
      {
        persona: "Category manager",
        title: "Target the suppliers that matter",
        body: "Hotspot mapping and segmentation focus engagement on high impact, high influence suppliers.",
        outcome: "Fewer campaigns, more impact.",
      },
      {
        persona: "Reporting lead",
        title: "Collect once, disclose many times",
        body: "Supplier responses feed disclosure requirements without a second collection round.",
        outcome: "Less supplier fatigue, faster reporting.",
      },
    ],
    proof: [
      {
        kind: "Roadmap",
        claim: "Supply Chain feeds categories 1 and 4 into the Carbon Performance inventory.",
        source: "RA+ 2026 and 2027 roadmap, product ownership slide",
      },
      {
        kind: "Analyst",
        claim: "Supply chain transparency and orchestration is a priority theme for 2026 buyers.",
        source: "Licensed Verdantix research reviewed September 2026",
      },
      {
        kind: "Customer",
        claim: "[ACCOUNT TEAM: confirm Zeigo network reach figures approved for external use]",
        source: "To be confirmed before the board meeting",
      },
    ],
    rivals:
      "osapiens and Watershed compete strongly on supplier collection. Neither pairs network reach with an operated energy grade inventory.",
  },
  {
    slug: "product-carbon-footprint",
    name: "Product Carbon Footprint",
    family: "Supply Chain",
    familyTo: "/supply-chain",
    tagline: "Product level footprints as a self serve product",
    summary:
      "ECLR becomes a full self serve product with scalable performance, producing product level carbon footprints that customers can request, generate and share without a consulting engagement.",
    position: "Closing gap",
    positionNote:
      "LCA specialists remain the depth benchmark. Our bet is self serve scale and reuse of the same factors and hierarchy as the corporate inventory.",
    spineRole:
      "Publishes product footprints to Supply Chain, Carbon Performance and customer facing disclosure.",
    roadmap: [
      {
        period: "Q3 2026",
        label: "Now",
        items: [
          "Product footprint calculation on shared factors and methods",
          "Bill of materials and process data capture",
        ],
      },
      {
        period: "Q4 2026",
        label: "Next",
        items: [
          "ECLR as a full self serve product with scalable performance",
          "Template driven product models for repeat categories",
        ],
      },
      {
        period: "2027 H1",
        label: "Later",
        items: [
          "Supply chain PCF integration with supplier specific factors",
          "Method transparency per data point on product results",
        ],
      },
      {
        period: "2027 H2",
        label: "Later",
        items: [
          "Customer facing footprint sharing and digital product data",
          "Footprint reuse across regulatory product requirements",
        ],
      },
    ],
    useCases: [
      {
        persona: "Product manager",
        title: "Answer a customer footprint request",
        body: "A product footprint is generated from existing bill of materials and supplier data instead of a new study.",
        outcome: "Days rather than months to a defensible answer.",
      },
      {
        persona: "Sustainability lead",
        title: "Keep product and corporate numbers consistent",
        body: "Product footprints use the same factors and methods as the corporate inventory.",
        outcome: "One methodology, two levels of reporting.",
      },
      {
        persona: "Procurement",
        title: "Compare suppliers on embedded carbon",
        body: "Supplier specific factors make product level comparisons meaningful.",
        outcome: "Carbon becomes a sourcing criterion.",
      },
    ],
    proof: [
      {
        kind: "Roadmap",
        claim: "ECLR becomes a full self serve product with scalable performance.",
        source: "RA+ 2026 and 2027 roadmap, Supply Chain lane",
      },
      {
        kind: "Analyst",
        claim: "Sphera and LCA specialists remain the benchmark on LCA grade product footprints.",
        source: "Licensed Verdantix research reviewed September 2026",
      },
      {
        kind: "Customer",
        claim: "[ACCOUNT TEAM: name an account with recurring customer footprint requests]",
        source: "To be confirmed before the board meeting",
      },
    ],
    rivals:
      "Sphera and dedicated LCA tools lead on depth. Our differentiation is self serve scale on shared platform data.",
  },
  {
    slug: "disclosure-management",
    name: "Disclosure Management",
    family: "Reporting & Compliance",
    familyTo: "/esg-reporting",
    tagline: "Configure, collect, disclose end to end",
    summary:
      "CSRD, ESRS, IFRS S1 and S2, EU Taxonomy and voluntary frameworks handled on a shared indicator, evidence and audit spine, with the platform acting as data receiver from every other product.",
    position: "On parity",
    positionNote:
      "Disclosure tooling is a crowded, maturing market. Our edge is that the data arrives from products we already own.",
    spineRole:
      "Receives data from Carbon Performance, Supply Chain, Climate Risk and Energy, and produces the regulated outputs.",
    roadmap: [
      {
        period: "Q3 2026",
        label: "Now",
        items: [
          "Set foundations: configure, collect, disclose end to end",
          "Framework content for CSRD and ESRS",
          "Evidence and audit trail on disclosed figures",
        ],
      },
      {
        period: "Q4 2026",
        label: "Next",
        items: [
          "Indicator library foundation",
          "Approval hierarchies and bulk assignment",
          "Advanced campaign management for data collection",
          "Advanced data ingestion and transformation rules",
        ],
      },
      {
        period: "2027 H1",
        label: "Later",
        items: [
          "SE migration and CSRD milestone in Q1 2027",
          "IFRS S1 and S2 and EU Taxonomy coverage",
          "AI assisted narrative drafting with source traceability",
        ],
      },
      {
        period: "2027 H2",
        label: "Later",
        items: [
          "Assurance workflow with auditor access and status",
          "Multi framework reuse of a single collected indicator",
        ],
      },
    ],
    useCases: [
      {
        persona: "Group reporting lead",
        title: "Run one collection cycle",
        body: "Campaigns collect each indicator once and reuse it across every framework that needs it.",
        outcome: "One cycle instead of one per framework.",
      },
      {
        persona: "Auditor",
        title: "Trace a disclosed number",
        body: "Lineage, evidence and audit trail run from the disclosed figure back to the source record.",
        outcome: "Assurance without a separate evidence pack.",
      },
      {
        persona: "Legal and compliance",
        title: "Keep pace with changing rules",
        body: "Framework content is maintained centrally as requirements evolve.",
        outcome: "Regulatory change absorbed by the platform, not the team.",
      },
      {
        persona: "CFO",
        title: "Report with financial discipline",
        body: "Approval hierarchies and controls match the way financial reporting is governed.",
        outcome: "Sustainability reporting held to the same standard as finance.",
      },
    ],
    proof: [
      {
        kind: "Roadmap",
        claim: "Set foundations: configure, collect, disclose end to end is the Q3 2026 commitment.",
        source: "RA+ 2026 and 2027 roadmap, Reporting & Compliance lane",
      },
      {
        kind: "Roadmap",
        claim: "SE migration and the CSRD milestone are confirmed for Q1 2027.",
        source: "RA+ 2026 and 2027 roadmap",
      },
      {
        kind: "Analyst",
        claim: "osapiens and specialist disclosure vendors compete hard on framework breadth.",
        source: "Licensed Verdantix research reviewed September 2026",
      },
      {
        kind: "Customer",
        claim: "[ACCOUNT TEAM: confirm the SE migration reference story for board use]",
        source: "To be confirmed before the board meeting",
      },
    ],
    rivals:
      "osapiens, Workiva and specialist disclosure vendors lead on framework breadth. They start from an empty database, we start from owned data.",
  },
  {
    slug: "indicator-data-management",
    name: "Indicator & Data Management",
    family: "Reporting & Compliance",
    familyTo: "/esg-reporting",
    tagline: "Collect once, govern everywhere",
    summary:
      "The indicator library, campaign management, ingestion and transformation rules and data quality controls that make disclosure repeatable at enterprise scale.",
    position: "On parity",
    positionNote:
      "Data collection tooling is table stakes. Depth of transformation rules and quality controls is where we differentiate.",
    spineRole:
      "Sits on the core platform layer and serves every product that collects or governs non financial data.",
    roadmap: [
      {
        period: "Q3 2026",
        label: "Now",
        items: [
          "Core platform foundations built for hierarchy, factors and calculation",
          "Data quality rules on incoming records",
        ],
      },
      {
        period: "Q4 2026",
        label: "Next",
        items: [
          "Indicator library foundation",
          "Approval hierarchies and bulk assignment",
          "Advanced data ingestion and transformation rules",
        ],
      },
      {
        period: "2027 H1",
        label: "Later",
        items: [
          "Advanced campaign management across entities and regions",
          "Lineage and evidence surfaced on every indicator",
        ],
      },
      {
        period: "2027 H2",
        label: "Later",
        items: [
          "Enterprise scale performance for very large indicator sets",
          "Reuse of indicators across regulated and voluntary outputs",
        ],
      },
    ],
    useCases: [
      {
        persona: "Data owner",
        title: "Load messy source data safely",
        body: "Ingestion and transformation rules normalise incoming files before they reach a reported figure.",
        outcome: "Fewer manual corrections at reporting time.",
      },
      {
        persona: "Reporting manager",
        title: "Run campaigns across the group",
        body: "Approval hierarchies and bulk assignment distribute collection to hundreds of contributors.",
        outcome: "Collection scales without a spreadsheet chain.",
      },
      {
        persona: "Internal audit",
        title: "Check the controls",
        body: "Every indicator carries lineage, evidence and an audit trail.",
        outcome: "Controls that can be tested, not just described.",
      },
    ],
    proof: [
      {
        kind: "Roadmap",
        claim: "Core platform foundations are built, with current planning for everything built on top.",
        source: "RA+ 2026 and 2027 roadmap, Core Platform lane",
      },
      {
        kind: "Roadmap",
        claim: "Indicator library foundation and approval hierarchies land in Q4 2026.",
        source: "RA+ 2026 and 2027 roadmap",
      },
      {
        kind: "Customer",
        claim: "[ACCOUNT TEAM: confirm an account struggling with indicator sprawl across frameworks]",
        source: "To be confirmed before the board meeting",
      },
    ],
    rivals:
      "Disclosure specialists offer similar collection tooling. Few combine it with an owned carbon and energy data source.",
  },
  {
    slug: "climate-risk-adaptation",
    name: "Climate Risk & Adaptation",
    family: "Climate Risk",
    familyTo: "/climate-risk",
    tagline: "From hazard maps to priced risk and funded adaptation",
    summary:
      "ClimVar converts hazard exposure into financial value at risk, and routes adaptation actions into the capital plan so risk becomes a funded decision rather than a map.",
    position: "Closing gap",
    positionNote:
      "Specialists lead on hazard science. Our bet is pricing the risk in financial terms and connecting it to capital planning.",
    spineRole:
      "Consumes the site and asset hierarchy, and publishes value at risk into Reporting & Compliance and capital planning.",
    roadmap: [
      {
        period: "Q4 2026",
        label: "Now",
        items: [
          "Hazard exposure across the shared site and asset hierarchy",
          "Scenario and time horizon selection aligned to disclosure needs",
        ],
      },
      {
        period: "2027 H1",
        label: "Next",
        items: [
          "ClimVar: value at risk in financial terms",
          "Adaptation action library linked to exposed assets",
          "Risk data flowing into Reporting & Compliance as financial values",
        ],
      },
      {
        period: "2027 H2",
        label: "Later",
        items: [
          "Adaptation actions funded through the capital plan",
          "Transition risk alongside physical risk",
        ],
      },
      {
        period: "2028",
        label: "Directional",
        items: [
          "Priced risk and funded adaptation as a standard planning input",
          "Value chain risk beyond owned assets",
        ],
      },
    ],
    useCases: [
      {
        persona: "CFO and risk",
        title: "Put a number on climate exposure",
        body: "Hazard exposure is translated into value at risk that finance recognises.",
        outcome: "Climate risk enters the financial conversation.",
      },
      {
        persona: "Capital planner",
        title: "Fund the right adaptation",
        body: "Adaptation actions are ranked against exposure and cost, then carried into the capital plan.",
        outcome: "Resilience spend directed by evidence.",
      },
      {
        persona: "Sustainability and disclosure lead",
        title: "Disclose risk credibly",
        body: "Risk figures flow into disclosure with the same lineage and evidence as emissions.",
        outcome: "Climate risk disclosure that ties back to source data.",
      },
      {
        persona: "Insurance and treasury",
        title: "Support premium and financing conversations",
        body: "Exposure and adaptation evidence support negotiations on cover and cost of capital.",
        outcome: "Risk work with a financial return.",
      },
    ],
    proof: [
      {
        kind: "Roadmap",
        claim: "ClimVar value at risk is committed for Climate Risk in 2027 H1.",
        source: "RA+ 2026 and 2027 roadmap, Climate Risk lane",
      },
      {
        kind: "Analyst",
        claim: "Verdantix evidence shows insurance premium growth of 88 percent and rent premiums of 49 percent linked to resilience.",
        source: "Licensed Verdantix research reviewed September 2026",
      },
      {
        kind: "Customer",
        claim: "[ACCOUNT TEAM: name an account where climate exposure is already affecting insurance or financing]",
        source: "To be confirmed before the board meeting",
      },
    ],
    rivals:
      "Climate X, XDI, Cotality, S&P Global Climanomics, Risilience and Bloomberg lead on hazard modelling and data. None sit on the buyer's own energy, carbon and asset spine.",
  },
  {
    slug: "sustainability-strategy",
    name: "Strategy",
    family: "RA+ Sustainability",
    familyTo: "/sustainability",
    tagline: "Targets, materiality and the transition plan in one place",
    summary:
      "Materiality assessment, target setting and transition planning that read from the same inventory, initiatives and risk data the rest of the platform produces.",
    position: "Closing gap",
    positionNote:
      "Strategy tooling is often consulting led. Our edge is that targets and plans are wired to live data rather than a static model.",
    spineRole:
      "Consumes inventory, initiatives and risk, and publishes targets and transition plans into disclosure.",
    roadmap: [
      {
        period: "Q4 2026",
        label: "Now",
        items: [
          "Target setting against the governed inventory baseline",
          "Materiality assessment aligned to disclosure requirements",
        ],
      },
      {
        period: "2027 H1",
        label: "Next",
        items: [
          "Transition plan built from committed initiatives",
          "Rebaselining aware targets that survive structural change",
        ],
      },
      {
        period: "2027 H2",
        label: "Later",
        items: [
          "Strategy statements qualified against inventory evidence",
          "Scenario informed target revision with climate risk inputs",
        ],
      },
      {
        period: "2028",
        label: "Directional",
        items: [
          "Continuous planning as data, risk and regulation change",
        ],
      },
    ],
    useCases: [
      {
        persona: "Chief sustainability officer",
        title: "Set a target you can defend",
        body: "Targets are set against a governed baseline with a known method, not a consultant model.",
        outcome: "A target the board can stand behind.",
      },
      {
        persona: "Strategy lead",
        title: "Keep the plan current",
        body: "The transition plan is assembled from initiatives that are actually funded and tracked.",
        outcome: "A plan that reflects reality each quarter.",
      },
      {
        persona: "Disclosure lead",
        title: "Publish strategy and evidence together",
        body: "Strategy statements are qualified by inventory and initiative evidence.",
        outcome: "Narrative and numbers stay consistent.",
      },
    ],
    proof: [
      {
        kind: "Roadmap",
        claim: "Strategy is a distinct lane in the 2026 and 2027 roadmap with its own commitments.",
        source: "RA+ 2026 and 2027 roadmap, Strategy lane",
      },
      {
        kind: "Roadmap",
        claim: "Rebaselining in 2027 H1 keeps targets valid through structural change.",
        source: "RA+ 2026 and 2027 roadmap",
      },
      {
        kind: "Customer",
        claim: "[ACCOUNT TEAM: name an account whose target work is still consultant led]",
        source: "To be confirmed before the board meeting",
      },
    ],
    rivals:
      "Consultancies and point strategy tools own much of this work today. Their weakness is that the model is disconnected from the operating data.",
  },
  {
    slug: "utility-data-management",
    name: "Utility Data Management",
    family: "RA+ Sustainability",
    familyTo: "/sustainability",
    tagline: "Invoices and cost allocation that keep the inventory complete",
    summary:
      "Bill capture and validation, cost allocation, and variance explanation on the shared hierarchy. Utility bills fill inventory gaps where meters are missing, with transparent estimation methods, and reconcile cost against consumption.",
    position: "On parity",
    positionNote:
      "EnergyCAP is the category benchmark for bill accounting. We match it and connect bill data to the carbon inventory, which the specialists do not.",
    spineRole:
      "Pairs invoice data with interval data so cost and consumption are reconciled in one place, and feeds bill based estimates into the carbon inventory where meter data is missing.",
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
        period: "2027 H1",
        label: "Advanced processing",
        items: [
          "Advanced invoice processing with exception handling",
          "Rate and tariff modelling",
          "Cost and consumption reconciliation against interval data",
        ],
      },
      {
        period: "2027 H2",
        label: "Explanation",
        items: [
          "Variance explained: price, volume and weather effects separated",
          "Accrual and estimation for missing bills",
          "Audit trail on every adjustment",
        ],
      },
      {
        period: "2028",
        label: "Directional",
        items: [
          "Automated dispute and recovery workflows",
          "AI assisted anomaly detection on billing",
        ],
      },
    ],
    useCases: [
      {
        persona: "Carbon lead",
        title: "Close inventory gaps with bills",
        body: "Bill data fills Scope 1 and 2 coverage gaps where meters are missing, with the estimation method visible on every data point.",
        outcome: "Complete coverage without pretending the data is metered.",
      },
      {
        persona: "Finance controller",
        title: "Explain why the energy bill moved",
        body: "Variance is split into price, volume and weather effects rather than a single unexplained number.",
        outcome: "An energy line item Finance can defend at month end.",
      },
      {
        persona: "Energy manager",
        title: "Catch billing errors before they are paid",
        body: "Validation rules and exception handling run on every invoice as it arrives.",
        outcome: "Recovered spend that pays for part of the programme.",
      },
    ],
    proof: [
      {
        kind: "Roadmap",
        claim: "Advanced invoice processing is funded in the 2027 plan.",
        source: "RA+ 2026 and 2027 roadmap, Utility Data Management lane",
      },
      {
        kind: "Roadmap",
        claim: "Every adjustment carries an audit trail, supporting inventory assurance.",
        source: "RA+ 2026 and 2027 roadmap",
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
      "EnergyCAP is the benchmark on bill accounting and Accruent ties bills to asset systems. Neither connects bill data to a governed carbon inventory on the same spine.",
  },
];

export const findSustainabilityProduct = (slug?: string) =>
  sustainabilityProductPages.find((p) => p.slug === slug);

// Presentation order mirrors the sustainability family roadmap slide:
// Carbon Performance, Supply Chain, Reporting & Compliance, Climate Risk,
// then the shared products the whole family stands on.
export const sustainabilityFamilyOrder = [
  "Carbon Performance",
  "Supply Chain",
  "Reporting & Compliance",
  "Climate Risk",
  "RA+ Sustainability",
];

export const orderedSustainabilityProducts = [...sustainabilityProductPages].sort(
  (a, b) =>
    (sustainabilityFamilyOrder.indexOf(a.family) + 1 || 99) -
    (sustainabilityFamilyOrder.indexOf(b.family) + 1 || 99),
);
