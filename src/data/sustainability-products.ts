import type { SustainabilityProductPageProps, RoadmapPhase, UseCase, ProofPoint, Rival } from "@/components/SustainabilityProductPage";

const carbonRoadmap: RoadmapPhase[] = [
  {
    period: "Q3 2026",
    label: "Now",
    tone: "primary",
    items: [
      "Sold product emissions: Scope 3 categories 10, 11, 12",
      "System admin improvements: config engine, calc methods, templates",
      "Inventory revamp: clarity and per gas breakdown",
      "Pre-calculated emissions import: client calculated data ingestion",
    ],
  },
  {
    period: "Q4 2026",
    label: "Next",
    tone: "accent",
    items: [
      "EAC and PPA management: market based Scope 2 coverage",
      "Base year, exclusions and materiality: GHGP compliant boundaries",
      "Thermal source attribution: defensible Scope 1 and 2 split",
      "Refrigerant leakage to usage: Scope 1 fugitive emissions",
      "Employee commuting and WFH: Scope 3 category 7",
      "Sera for carbon inventory: AI guided troubleshooting",
      "Advanced scenario analysis and decarbonization planning: initiatives and actions management",
    ],
  },
  {
    period: "2027 H1",
    label: "Later",
    tone: "secondary",
    items: [
      "Category 4 and 9 product linked transport: upstream and downstream transport",
      "Financial and equity consolidation: ownership boundary roll up",
      "Waste emission estimation: Scope 3 category 5",
      "Improved method transparency per data point: methodology transparency",
      "Rebaselining: base year recalculation workflows",
      "Supply chain PCF integration: supplier specific factors",
      "Advanced ECM library: energy and carbon cobenefits",
    ],
  },
  {
    period: "2027 H2",
    label: "Later",
    tone: "muted",
    items: [
      "Category 15 investments: PCAF aligned financed emissions",
      "FLAG segmentation: specialised standards",
      "Dedicated auditor experience: variance checks, reports and status",
    ],
  },
];

const carbonUseCases: UseCase[] = [
  {
    persona: "Sustainability director",
    title: "Close the Scope 3 coverage gap",
    body: "Category 4 and 9 product linked transport, sold product emissions, employee commuting and WFH, waste and investments are mapped on the same inventory.",
    outcome: "A single consultant grade GHG inventory that survives audit.",
  },
  {
    persona: "Energy manager",
    title: "Turn meter data into carbon decisions",
    body: "Thermal source attribution, EAC and PPA management, and an advanced ECM library price energy and carbon cobenefits together.",
    outcome: "Energy actions land in the carbon inventory with defensible savings.",
  },
  {
    persona: "Finance and audit",
    title: "Defend the number",
    body: "Method transparency per data point, rebaselining, base year and exclusions, and a dedicated auditor experience create a defensible trail.",
    outcome: "Every emission has a methodology, factor and evidence trail.",
  },
  {
    persona: "Procurement",
    title: "Supplier data becomes inventory",
    body: "Supply chain PCF integration feeds categories 1 and 4 into the carbon inventory with supplier specific factors.",
    outcome: "Supplier specific factors replace spend based estimates.",
  },
];

const carbonProof: ProofPoint[] = [
  {
    kind: "Roadmap",
    claim: "Carbon Performance owns the inventory every other product consumes.",
    source: "RA+ 2026 and 2027 roadmap, Carbon Performance lane",
  },
  {
    kind: "Roadmap",
    claim: "Category 4 and 9 product linked transport is committed for 2027 H1.",
    source: "RA+ 2026 and 2027 roadmap, Carbon Performance lane",
  },
  {
    kind: "Analyst",
    claim: "Verdantix names Schneider Electric a Leader in the 2026 enterprise carbon management Green Quadrant.",
    source: "Verdantix Green Quadrant: Enterprise Carbon Management Software 2026",
  },
  {
    kind: "Analyst",
    claim: "Carbon reduction is being replanned alongside energy reliability and cost stability, not on its own.",
    source: "Verdantix, The Rise Of Resilient Decarbonization, November 2025",
  },
  {
    kind: "Customer",
    claim: "[ACCOUNT TEAM: name a strategic account where energy grade inventory won an audit or deal]",
    source: "To be confirmed before the board meeting",
  },
];

const carbonRivals: Rival[] = [
  { name: "Watershed", slug: "watershed", note: "Strong Scope 3 modelling and clean power guidance, lighter on operated energy sourcing and EAC management." },
  { name: "Sphera", slug: "sphera", note: "Deep industrial and LCA heritage, LCA grade product footprints are the benchmark." },
  { name: "IBM (Envizi)", note: "Scalable workflows and data health tooling; energy analytics and ESG reporting sit in separate modules." },
  { name: "Persefoni", slug: "persefoni", note: "Audit oriented ledger with narrower operational coverage and minimal abatement tooling." },
  { name: "Sweep", slug: "sweep", note: "Fast onboarding and growing footprint support, less depth at enterprise scale." },
];

export const carbonPerformance: SustainabilityProductPageProps = {
  backTo: { to: "/sustainability", label: "← Sustainability overview" },
  eyebrow: "RA+ Sustainability",
  title: "Carbon Performance",
  subtitle: "Deepen the inventory in 2026, close the remaining categories in 2027",
  description:
    "Carbon Performance owns the consultant grade GHG inventory that every other product consumes. The 2026 focus is emission factor and calculation depth; 2027 closes coverage, governance and assurance.",
  badge: "Named Leader by Verdantix",
  roadmap: carbonRoadmap,
  useCases: carbonUseCases,
  proof: carbonProof,
  rivals: carbonRivals,
  takeaway:
    "We are already a named Leader. The 2027 job is product level carbon, while we extend the lead on energy grounded inventory and cobenefit recommendations.",
  links: [
    { to: "/competitor-matrix", label: "Full competitor matrix →" },
    { to: "/energy-products", label: "Energy & Efficiency family →" },
  ],
};

const supplyRoadmap: RoadmapPhase[] = [
  {
    period: "Q3 2026",
    label: "Now",
    tone: "primary",
    items: [
      "RA+ tech integrations and shared UI: navigation, layouts and database",
      "End to end supply chain emissions management",
      "Custom questionnaires",
      "Guided supplier decarbonisation actions",
    ],
  },
  {
    period: "Q4 2026",
    label: "Next",
    tone: "accent",
    items: [
      "Rebranding completion to a stronger RA+ experience",
      "Improve data quality assurance",
      "Sponsor decision support and supplier transparency",
      "Zeigo network integration",
    ],
  },
  {
    period: "2027 H1",
    label: "Later",
    tone: "secondary",
    items: [
      "Light PCF calculator and SEED integrations",
      "Advanced tier level subscription",
      "Multi tier supplier visibility",
      "Supplier onboarding and programme participation",
      "Zeigo Activate sunset replaced by a light CP calculator",
    ],
  },
  {
    period: "2027 H2",
    label: "Later",
    tone: "muted",
    items: [
      "Supply chain and climate risk integration",
      "ESG reporting and compliance integration",
      "Engagement gamification and leaderboards",
      "Cross programme supplier discovery",
    ],
  },
];

const supplyUseCases: UseCase[] = [
  {
    persona: "Procurement lead",
    title: "Run supplier campaigns that feed the inventory",
    body: "Custom questionnaires, guided decarbonisation actions and Zeigo network integration turn supplier outreach into primary data.",
    outcome: "Category 1 and 4 emissions move from spend based estimates to supplier specific factors.",
  },
  {
    persona: "Sustainability director",
    title: "Close the product carbon footprint gap",
    body: "Light PCF calculator, SEED integrations and multi tier visibility build product level footprints.",
    outcome: "PACT compliant PCFs that buyers and regulators can trust.",
  },
  {
    persona: "CFO and risk",
    title: "See supplier exposure as value at risk",
    body: "The 2027 H2 integration with Climate Risk prices supplier sites with the same hazard model as owned assets.",
    outcome: "Supply chain resilience joins carbon and cost in capital planning.",
  },
  {
    persona: "Operations",
    title: "Drive measurable abatement",
    body: "Supplier emissions abatement pathways with tracking and gamification turn data into action.",
    outcome: "Suppliers compete to decarbonise, not just report.",
  },
];

const supplyProof: ProofPoint[] = [
  {
    kind: "Roadmap",
    claim: "Supplier data feeds categories 1 and 4 straight into the Carbon Performance inventory.",
    source: "RA+ 2026 and 2027 roadmap, Supply Chain lane",
  },
  {
    kind: "Roadmap",
    claim: "Light PCF calculator and SEED integrations are committed for 2027 H1.",
    source: "RA+ 2026 and 2027 roadmap, Supply Chain lane",
  },
  {
    kind: "Analyst",
    claim: "Supply chain teams are becoming strategic partners and these decisions move to C level.",
    source: "Verdantix, Future Of Supply Chain Sustainability, January 2026",
  },
  {
    kind: "Analyst",
    claim: "Transparency across multi tier supplier networks plus internal data orchestration decides sourcing, operations, risk and product design.",
    source: "Verdantix, Future Of Supply Chain Sustainability, January 2026",
  },
  {
    kind: "Customer",
    claim: "[ACCOUNT TEAM: name a strategic account where supplier abatement changed a sourcing decision]",
    source: "To be confirmed before the board meeting",
  },
];

const supplyRivals: Rival[] = [
  { name: "EcoVadis", slug: "ecovadis", note: "Broad ESG assessment coverage and ratings, carbon module improving, but improvement plans are not abatement engineering." },
  { name: "osapiens", slug: "osapiens", note: "Compliance driven questionnaires with CSDDD, CBAM and EUDR breadth as their core." },
  { name: "Assent", note: "Regulated product compliance leader with deep supplier data collection for product and material data." },
  { name: "Sphera", slug: "sphera", note: "Strong supply chain carbon and LCA, risk led engagement, modelling focused abatement." },
  { name: "IntegrityNext", slug: "integritynext", note: "Broad network and screening coverage, light on decarbonization coaching." },
];

export const supplyChain: SustainabilityProductPageProps = {
  backTo: { to: "/sustainability", label: "← Sustainability overview" },
  eyebrow: "RA+ Sustainability",
  title: "Supply Chain",
  subtitle: "Migrate, close the competitive gap, then drive supplier action",
  description:
    "Supply Chain turns the Zeigo supplier network and education heritage into primary emissions data, product carbon footprints and funded abatement that flows straight into the Carbon Performance inventory.",
  badge: "Strong network reach",
  roadmap: supplyRoadmap,
  useCases: supplyUseCases,
  proof: supplyProof,
  rivals: supplyRivals,
  takeaway:
    "We do not win on due diligence breadth and should not claim it. We win when supplier data must become defensible carbon and funded abatement.",
  links: [
    { to: "/competitor-matrix", label: "Full competitor matrix →" },
    { to: "/climate-risk", label: "Climate Risk →" },
  ],
};

const esgRoadmap: RoadmapPhase[] = [
  {
    period: "Q3 2026",
    label: "Now",
    tone: "primary",
    items: [
      "Core platform foundations built and current time spent planning everything to build on top",
    ],
  },
  {
    period: "Q4 2026",
    label: "Next",
    tone: "accent",
    items: [
      "Build indicator library foundation",
      "Approval hierarchies and bulk assignment",
      "Reporting cycles and reporting workspace",
      "Governed data collection campaigns",
      "Regulated frameworks and templates: CSRD, ESRS, EU Taxonomy, IFRS S1 and S2",
      "Set foundations: configure, collect, disclose end to end",
      "Set foundations: advanced data ingestion and transformation rules",
    ],
  },
  {
    period: "2027 H1",
    label: "Later",
    tone: "secondary",
    items: [
      "Advanced campaign management",
      "Indicator performance analytics",
      "Governed disclosure authoring with AI drafting",
      "Corporate SE fully migrated off RA Classic: historical data migrated, Q1 2027 CSRD cycle run in RA+",
      "Audit ready disclosures produced in product",
    ],
  },
  {
    period: "2027 H2",
    label: "Later",
    tone: "muted",
    items: [
      "AI compliance intelligence and mapping suggestions",
      "External assurance and auditor experience",
      "Voluntary frameworks: GRI, SASB, GRESB, EcoVadis",
      "Carbon Performance emissions and Climate Risk feeding disclosures",
    ],
  },
];

const esgUseCases: UseCase[] = [
  {
    persona: "Sustainability reporting manager",
    title: "One place for CSRD and beyond",
    body: "Regulated frameworks, indicator library, reporting cycles and AI drafting produce audit ready disclosures without reconciling spreadsheets.",
    outcome: "The Q1 2027 CSRD cycle runs end to end in RA+.",
  },
  {
    persona: "Finance and audit",
    title: "Trace every number to its source",
    body: "Lineage, evidence and audit trail are inherited from the platform, not rebuilt per report.",
    outcome: "Assurance reviews answer where did this come from in seconds.",
  },
  {
    persona: "Energy and carbon manager",
    title: "Disclose the same data you operate with",
    body: "Carbon Performance and Climate Risk feed straight into disclosures, with no import project.",
    outcome: "Operational and reported numbers stay in sync.",
  },
  {
    persona: "ESG programme lead",
    title: "Expand to voluntary frameworks",
    body: "GRI, SASB, GRESB and EcoVadis templates arrive in 2027 H2.",
    outcome: "One configure, collect, disclose spine for every framework.",
  },
];

const esgProof: ProofPoint[] = [
  {
    kind: "Roadmap",
    claim: "Corporate SE is fully migrated off RA Classic, with the Q1 2027 CSRD cycle run in RA+.",
    source: "RA+ 2026 and 2027 roadmap, Reporting and Compliance lane",
  },
  {
    kind: "Roadmap",
    claim: "Configure, collect, disclose end to end foundation is set in Q4 2026.",
    source: "RA+ 2026 and 2027 roadmap, Core Platform lane",
  },
  {
    kind: "Analyst",
    claim: "Schneider Electric is already a Leader in the ESG and sustainability reporting Green Quadrant.",
    source: "Verdantix Green Quadrant: ESG And Sustainability Reporting Software 2025",
  },
  {
    kind: "Analyst",
    claim: "Data transparency and orchestration are the pillars attracting technology investment.",
    source: "Verdantix, Future Of Supply Chain Sustainability, January 2026",
  },
  {
    kind: "Customer",
    claim: "[ACCOUNT TEAM: name a strategic account where audit ready CSRD disclosure was delivered in RA+]",
    source: "To be confirmed before the board meeting",
  },
];

const esgRivals: Rival[] = [
  { name: "Workiva", slug: "workiva", note: "Benchmark for regulated filing and AI drafting, primarily a reporting layer over other systems." },
  { name: "Wolters Kluwer", slug: "wolters-kluwer", note: "Deep regulated content and assurance grade controls, reporting layer over other systems." },
  { name: "Novisto", slug: "novisto", note: "Broad framework library, strong data collection UX and AI narrative support." },
  { name: "Cority", note: "EHS plus reporting with strong framework coverage and good traceability." },
  { name: "Watershed", slug: "watershed", note: "Carbon plus reporting, lighter on non carbon indicators and no energy operations." },
];

export const esgReporting: SustainabilityProductPageProps = {
  backTo: { to: "/sustainability", label: "← Sustainability overview" },
  eyebrow: "RA+ Sustainability",
  title: "Reporting & Compliance",
  subtitle: "Stand the product up in 2026, migrate SE and automate in 2027",
  description:
    "Reporting & Compliance is the configure, collect, disclose spine for every sustainability framework. It reuses Carbon Performance, Supply Chain and Climate Risk data so reported numbers are produced and governed in the same platform.",
  badge: "Named Leader by Verdantix",
  roadmap: esgRoadmap,
  useCases: esgUseCases,
  proof: esgProof,
  rivals: esgRivals,
  takeaway:
    "Disclosure is table stakes. Our differentiator is that the numbers being disclosed were produced, governed and defended in the same platform.",
  links: [
    { to: "/competitor-matrix", label: "Full competitor matrix →" },
    { to: "/roadmap-timeline", label: "Roadmap timeline →" },
  ],
};
