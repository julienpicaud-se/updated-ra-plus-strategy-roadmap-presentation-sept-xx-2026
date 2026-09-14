// Vendor deep dives for the RA+ Energy & Efficiency competitive field.
// Roadmap directions are directional readings of public vendor communication and
// licensed Verdantix research reviewed in September 2026, not vendor commitments.
// Positions and gaps are internal RA+ assessments, not third party ratings.

export type ThreatLevel = "High" | "Moderate" | "Low";

export interface VendorRoadmapPhase {
  period: string;
  focus: string;
  items: string[];
}

export interface VendorUseCase {
  buyer: string;
  need: string;
  vendorAnswer: string;
}

export interface VendorGap {
  area: string;
  vendor: string;
  raPlus: string;
}

export interface EnergyVendor {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  threat: ThreatLevel;
  overlap: string;
  summary: string;
  strengths: string[];
  weaknesses: string[];
  roadmap: VendorRoadmapPhase[];
  useCases: VendorUseCase[];
  gaps: VendorGap[];
  winTheme: string;
  watchFor: string;
  sources: string[];
}

export const energyVendors: EnergyVendor[] = [
  {
    slug: "ibm-envizi",
    name: "IBM Envizi",
    category: "Enterprise energy and ESG suite",
    tagline: "The most credible enterprise rival on energy plus carbon in one suite",
    threat: "High",
    overlap: "Metering and interval data, utility data management, energy portfolio management, carbon convergence",
    summary:
      "Envizi is the reference point in enterprise deals where the buyer wants energy consumption, bills and emissions in one place, carried by IBM sales reach, Maximo asset adjacency and watsonx AI positioning.",
    strengths: [
      "Broad data foundation covering meters, bills, utilities and emissions accounting",
      "Strong analytics and benchmarking across large property and industrial portfolios",
      "IBM enterprise account access, procurement comfort and global services capacity",
      "Maximo and TRIRIGA adjacency for asset and real estate workflows",
    ],
    weaknesses: [
      "Energy and carbon coexist in the suite but the governed inventory is not the single spine",
      "Configuration and onboarding remain services heavy rather than self serve",
      "Thin native answer on sourcing, EAC lifecycle and demand response",
      "Value story stops at reporting and insight, rarely at funded action",
    ],
    roadmap: [
      {
        period: "Near term",
        focus: "AI assistance layered on the existing suite",
        items: [
          "watsonx assistants applied to data capture, anomaly detection and narrative reporting",
          "Deeper CSRD and disclosure content packs",
          "Continued utility bill and meter connector expansion",
        ],
      },
      {
        period: "Medium term",
        focus: "Suite consolidation with asset management",
        items: [
          "Tighter Maximo and TRIRIGA workflow integration for building and asset actions",
          "Expanded scope 3 and supplier data capture",
          "More packaged industry templates",
        ],
      },
      {
        period: "Longer term",
        focus: "Platform and services scale",
        items: [
          "Positioning as the enterprise system of record for energy and emissions data",
          "Broader partner delivery network",
        ],
      },
    ],
    useCases: [
      {
        buyer: "Energy manager in a large multi site portfolio",
        need: "See consumption, cost and emissions in one benchmarked view",
        vendorAnswer: "Strong: portfolio analytics and benchmarking are a core Envizi capability",
      },
      {
        buyer: "Sustainability lead preparing disclosure",
        need: "Auditable emissions accounting fed by energy data",
        vendorAnswer: "Good, but lineage and method transparency per data point are weaker than the marketing implies",
      },
      {
        buyer: "Head of procurement buying power and EACs",
        need: "Sourcing decisions, contracts and EAC lifecycle",
        vendorAnswer: "Weak: little native sourcing, PPA or EAC management",
      },
      {
        buyer: "Operations lead funding efficiency measures",
        need: "Ranked measures with payback and verified savings",
        vendorAnswer: "Partial: insight and targets, limited measure level costing and verification",
      },
    ],
    gaps: [
      {
        area: "Sourcing and renewables",
        vendor: "No credible native EAC, PPA or sourcing lifecycle",
        raPlus: "Energy Sourcing plus Renewables and EACs run natively, with EAC and PPA management on the roadmap",
      },
      {
        area: "Flexibility",
        vendor: "No demand response or DER participation",
        raPlus: "Demand Response and Flexibility plus Electrification and DER Management sit in the same family",
      },
      {
        area: "Carbon spine",
        vendor: "Emissions accounting alongside energy, not one governed inventory",
        raPlus: "Hourly emissions and scope 3 hotspots flow into the Carbon Performance inventory every product consumes",
      },
      {
        area: "Time to value",
        vendor: "Services heavy onboarding and configuration",
        raPlus: "Config engine, templates and self serve connector onboarding on the core platform",
      },
    ],
    winTheme:
      "Envizi shows you the data. RA+ moves from data to sourcing, flexibility and funded action on the same governed spine.",
    watchFor:
      "IBM bundling Envizi into a wider enterprise agreement so price becomes near invisible to the buyer.",
    sources: [
      "Licensed Verdantix research reviewed September 2026",
      "Public IBM Envizi product and announcement material",
      "Internal RA+ competitive assessment",
    ],
  },
  {
    slug: "energycap",
    name: "EnergyCAP",
    category: "Utility bill and energy accounting specialist",
    tagline: "The bill accounting incumbent that many buyers already trust",
    threat: "High",
    overlap: "Utility data management, metering and interval data, energy portfolio management",
    summary:
      "EnergyCAP is deeply embedded in utility bill accounting, cost allocation and chargeback, especially in public sector, education and healthcare estates. It is often the incumbent RA+ must displace or coexist with.",
    strengths: [
      "Mature bill capture, validation, audit and cost recovery workflows",
      "Deep utility rate and tariff handling",
      "Strong accounting and chargeback credibility with finance teams",
      "Loyal installed base with long tenure",
    ],
    weaknesses: [
      "Energy cost centric rather than decision or action centric",
      "Carbon accounting is an add on, not an audit grade inventory",
      "Limited sourcing, flexibility and DER coverage",
      "Modernisation of the user experience is still in progress",
    ],
    roadmap: [
      {
        period: "Near term",
        focus: "Cloud and UX modernisation",
        items: [
          "Continued migration of the installed base to the cloud product",
          "Improved dashboards and self serve reporting",
          "Expanded utility data connectors",
        ],
      },
      {
        period: "Medium term",
        focus: "Carbon and reporting extensions",
        items: [
          "Emissions calculation on top of bill and meter data",
          "Reporting packs aligned to common disclosure frameworks",
        ],
      },
      {
        period: "Longer term",
        focus: "Adjacent analytics",
        items: ["Benchmarking and project tracking extensions", "Deeper interval data analytics"],
      },
    ],
    useCases: [
      {
        buyer: "Finance and estates teams",
        need: "Validate bills, recover errors, allocate cost to departments",
        vendorAnswer: "Market leading: this is EnergyCAP's home ground",
      },
      {
        buyer: "Energy manager",
        need: "Track consumption trends and project savings",
        vendorAnswer: "Solid on cost, weaker on measure level savings verification",
      },
      {
        buyer: "Sustainability lead",
        need: "Audit ready emissions inventory",
        vendorAnswer: "Weak: derived emissions without full lineage and method transparency",
      },
      {
        buyer: "Procurement",
        need: "Sourcing strategy and renewables",
        vendorAnswer: "Not covered",
      },
    ],
    gaps: [
      {
        area: "Carbon",
        vendor: "Emissions as a reporting output of bills",
        raPlus: "Governed inventory with lineage, evidence and audit trail consumed by every product",
      },
      {
        area: "Action",
        vendor: "No ECM library or funded measure execution",
        raPlus: "Recommendations, ECM library with energy and carbon cobenefits, initiatives and actions management",
      },
      {
        area: "Sourcing and flexibility",
        vendor: "Not in scope",
        raPlus: "Sourcing, EACs, demand response and DER in the same family",
      },
      {
        area: "Scope of value",
        vendor: "Cost avoidance framing only",
        raPlus: "Cost, carbon and resilience framing on one platform",
      },
    ],
    winTheme:
      "Coexist first, displace second. Let EnergyCAP hold bill accounting where it is entrenched, then win the decision layer above it.",
    watchFor:
      "EnergyCAP pushing carbon reporting into deals as good enough for buyers with light disclosure obligations.",
    sources: [
      "Licensed Verdantix research reviewed September 2026",
      "Public EnergyCAP product material",
      "Internal RA+ competitive assessment",
    ],
  },
  {
    slug: "accruent",
    name: "Accruent",
    category: "Asset, facilities and utility data management",
    tagline: "Wins through facilities and asset ownership, not through energy insight",
    threat: "Moderate",
    overlap: "Utility data management, capital asset planning, metering",
    summary:
      "Accruent reaches the energy buyer through facilities and asset management. Its utility data capability is credible, but it serves maintenance and property workflows rather than an emissions or sourcing agenda.",
    strengths: [
      "Strong facilities, maintenance and real estate footprint",
      "Utility bill and meter data management tied to asset records",
      "Capital planning adjacency through asset condition data",
      "Existing relationships with estates and property leaders",
    ],
    weaknesses: [
      "Energy is a feature of the asset suite, not a strategy",
      "No audit grade carbon inventory",
      "No sourcing, EAC or flexibility capability",
      "Limited analytics depth on interval data",
    ],
    roadmap: [
      {
        period: "Near term",
        focus: "Suite integration",
        items: [
          "Tighter links between utility data, work orders and asset condition",
          "Reporting and dashboard refresh",
        ],
      },
      {
        period: "Medium term",
        focus: "Sustainability add ons",
        items: ["Emissions reporting built on utility consumption", "Building performance benchmarking"],
      },
      {
        period: "Longer term",
        focus: "Asset lifecycle and capital planning",
        items: ["Capital planning tied to decarbonisation and resilience needs"],
      },
    ],
    useCases: [
      {
        buyer: "Facilities and estates director",
        need: "Manage assets, maintenance and utility spend together",
        vendorAnswer: "Strong: the suite is built for this buyer",
      },
      {
        buyer: "Capital planner",
        need: "Prioritise investment across a building portfolio",
        vendorAnswer: "Good on asset condition, weak on carbon and energy value",
      },
      {
        buyer: "Sustainability lead",
        need: "Disclosure ready emissions",
        vendorAnswer: "Weak",
      },
    ],
    gaps: [
      {
        area: "Capital planning logic",
        vendor: "Condition driven prioritisation",
        raPlus: "Capital Asset Planning ranked on energy, carbon, cost and climate value at risk together",
      },
      {
        area: "Carbon",
        vendor: "Reporting output only",
        raPlus: "Governed inventory with method transparency per data point",
      },
      {
        area: "Energy strategy",
        vendor: "No sourcing or flexibility",
        raPlus: "Sourcing, renewables, demand response and DER in one family",
      },
    ],
    winTheme:
      "Accruent optimises the building. RA+ optimises the energy and carbon position of the whole portfolio.",
    watchFor:
      "Facilities led buying centres where Accruent is already the system of record for assets.",
    sources: [
      "Public Accruent product material",
      "Internal RA+ competitive assessment",
    ],
  },
  {
    slug: "arcadia",
    name: "Arcadia",
    category: "Utility data infrastructure and connectivity",
    tagline: "The data pipe rival: excellent access, thin decision layer",
    threat: "Moderate",
    overlap: "Utility data management, metering and interval data",
    summary:
      "Arcadia competes on breadth and reliability of utility data access, often sold as infrastructure to other software vendors as much as to enterprises. It is a connectivity benchmark rather than an application competitor.",
    strengths: [
      "Very broad utility coverage and connector reliability",
      "Developer friendly data access and APIs",
      "Fast onboarding of new utility accounts",
      "Credible in North American markets in particular",
    ],
    weaknesses: [
      "Limited application layer for energy managers and sustainability teams",
      "No governed carbon inventory or disclosure workflow",
      "No efficiency measure, sourcing or flexibility execution",
      "Value depends on a partner building the experience on top",
    ],
    roadmap: [
      {
        period: "Near term",
        focus: "Coverage and data quality",
        items: ["Further utility coverage expansion", "Improved interval and tariff data quality"],
      },
      {
        period: "Medium term",
        focus: "Analytics and grid signals",
        items: ["Grid and pricing intelligence products", "Emissions intensity signals on consumption data"],
      },
      {
        period: "Longer term",
        focus: "Platform partnerships",
        items: ["Embedding the data layer inside partner software"],
      },
    ],
    useCases: [
      {
        buyer: "Software or services provider",
        need: "Reliable utility data at scale",
        vendorAnswer: "Market leading",
      },
      {
        buyer: "Enterprise energy manager",
        need: "Manage a portfolio, not just receive data",
        vendorAnswer: "Weak without a partner application on top",
      },
      {
        buyer: "Sustainability lead",
        need: "Audit ready inventory",
        vendorAnswer: "Not covered",
      },
    ],
    gaps: [
      {
        area: "Decision layer",
        vendor: "Data access without the management application",
        raPlus: "Data plus portfolio management, measures, sourcing, flexibility and disclosure",
      },
      {
        area: "Governance",
        vendor: "No lineage, evidence or audit trail for regulated outputs",
        raPlus: "Core platform lineage, evidence and audit trail on every figure",
      },
    ],
    winTheme:
      "Arcadia is a supplier of pipes. Compare it against our connectivity, then show everything that happens after the data lands.",
    watchFor:
      "Arcadia powering a rival application and being sold as if it were the whole solution.",
    sources: [
      "Public Arcadia product material",
      "Internal RA+ competitive assessment",
    ],
  },
  {
    slug: "honeywell-forge",
    name: "Honeywell Forge",
    category: "Industrial and building operations technology",
    tagline: "Deep inside controlled assets, narrow outside them",
    threat: "Moderate",
    overlap: "Energy efficiency, metering, electrification and DER",
    summary:
      "Honeywell Forge wins where the buyer is already committed to Honeywell control systems. Its optimisation is real time and asset deep, but confined to the assets it controls and disconnected from the carbon and sourcing agenda.",
    strengths: [
      "Real time optimisation of building and industrial systems",
      "Strong OT credibility and installed control base",
      "Operational reliability and safety framing that resonates with plant leaders",
      "Direct actuation, not just recommendation",
    ],
    weaknesses: [
      "Coverage limited to controlled assets and Honeywell estates",
      "No portfolio level energy accounting across mixed estates",
      "No governed carbon inventory or disclosure output",
      "No sourcing, EAC or utility market capability",
    ],
    roadmap: [
      {
        period: "Near term",
        focus: "AI driven operations",
        items: ["Autonomous and assisted control optimisation", "Anomaly detection across equipment fleets"],
      },
      {
        period: "Medium term",
        focus: "Sustainability framing on operations",
        items: ["Energy and emissions dashboards derived from operational data", "Decarbonisation project tracking"],
      },
      {
        period: "Longer term",
        focus: "Electrification and DER at site level",
        items: ["On site generation, storage and load orchestration"],
      },
    ],
    useCases: [
      {
        buyer: "Plant or facility operations lead",
        need: "Cut consumption in controlled equipment now",
        vendorAnswer: "Market leading within Honeywell controlled assets",
      },
      {
        buyer: "Group energy director",
        need: "One view across a mixed, multi vendor estate",
        vendorAnswer: "Weak outside the Honeywell footprint",
      },
      {
        buyer: "Sustainability lead",
        need: "Audit ready emissions and disclosure",
        vendorAnswer: "Not covered",
      },
    ],
    gaps: [
      {
        area: "Portfolio breadth",
        vendor: "Controlled assets only",
        raPlus: "Vendor neutral metering, bills and interval data across the whole estate",
      },
      {
        area: "Measure economics",
        vendor: "Optimises settings, does not price a measure",
        raPlus: "ECM library with energy and carbon cobenefits, costing, payback and verified savings",
      },
      {
        area: "Market side",
        vendor: "No sourcing, EACs or demand response participation",
        raPlus: "Sourcing, renewables and flexibility products in the same family",
      },
    ],
    winTheme:
      "Forge tunes the equipment. RA+ decides where money and carbon should go across every site, then proves the result.",
    watchFor:
      "Sites where an OT refresh drags the energy software decision along with it.",
    sources: [
      "Public Honeywell Forge material",
      "Internal RA+ competitive assessment",
    ],
  },
  {
    slug: "eac-renewables-specialists",
    name: "EAC and renewables specialists",
    category: "Certificate, PPA and clean power specialists",
    tagline: "Best in class on certificates, blind to the rest of the estate",
    threat: "Moderate",
    overlap: "Renewables and EACs, energy sourcing",
    summary:
      "Certificate marketplaces, PPA advisory platforms and hourly matching specialists compete narrowly but credibly on the clean power question, and often arrive through a procurement or sustainability sponsor rather than the energy team.",
    strengths: [
      "Deep EAC sourcing, registry and retirement expertise",
      "PPA structuring and marketplace reach",
      "Hourly and granular matching narratives that appeal to leading buyers",
      "Fast to demonstrate value on a single clean power decision",
    ],
    weaknesses: [
      "Single question tools with no portfolio energy management",
      "Certificates do not connect to a governed corporate inventory",
      "No efficiency, flexibility or capital planning capability",
      "Multiple point tools create reconciliation work for the buyer",
    ],
    roadmap: [
      {
        period: "Near term",
        focus: "Granular matching",
        items: ["Hourly matching and 24/7 carbon free energy claims", "Registry automation and retirement tracking"],
      },
      {
        period: "Medium term",
        focus: "Portfolio and contract management",
        items: ["Contract, settlement and forecast management for clean power", "Broader market coverage"],
      },
      {
        period: "Longer term",
        focus: "Claims assurance",
        items: ["Assurance grade evidence for clean power claims"],
      },
    ],
    useCases: [
      {
        buyer: "Procurement lead sourcing clean power",
        need: "Find, contract and retire the right certificates",
        vendorAnswer: "Market leading on the narrow question",
      },
      {
        buyer: "Sustainability lead defending a claim",
        need: "Evidence that survives assurance inside the inventory",
        vendorAnswer: "Partial: strong certificate records, disconnected from the inventory",
      },
      {
        buyer: "Energy director",
        need: "Balance sourcing against efficiency and flexibility",
        vendorAnswer: "Not covered",
      },
    ],
    gaps: [
      {
        area: "Inventory connection",
        vendor: "Certificate records held outside the emissions inventory",
        raPlus: "EAC and PPA management feeding the governed Carbon Performance inventory directly",
      },
      {
        area: "Trade offs",
        vendor: "Optimises clean power in isolation",
        raPlus: "Sourcing weighed against efficiency measures, flexibility and capital plans",
      },
      {
        area: "Consolidation",
        vendor: "Adds another tool and another reconciliation",
        raPlus: "One platform, one hierarchy, one audit trail",
      },
    ],
    winTheme:
      "Certificates are one lever. RA+ is where the lever is chosen, funded, evidenced and reported.",
    watchFor:
      "A sustainability sponsor buying a matching tool ahead of the platform decision.",
    sources: [
      "Licensed Verdantix research reviewed September 2026",
      "Public vendor material from certificate and PPA platforms",
      "Internal RA+ competitive assessment",
    ],
  },
  {
    slug: "demand-response-der-specialists",
    name: "Demand response, VPP and DER specialists",
    category: "Flexibility and distributed energy platforms",
    tagline: "Real revenue from flexibility, no view of the carbon or cost book",
    threat: "High",
    overlap: "Demand response and flexibility, electrification and DER management",
    summary:
      "Flexibility aggregators and DER platforms bring an unusually concrete value story: enrolled load earns money. They compete for the same site level attention RA+ needs for efficiency and electrification decisions.",
    strengths: [
      "Direct market participation and settled revenue for enrolled load",
      "Established relationships with grid operators and programmes",
      "Fast payback story that needs little internal business case",
      "Growing DER, storage and EV orchestration capability",
    ],
    weaknesses: [
      "Programme and market centric, not portfolio management",
      "No emissions inventory, disclosure or assurance path",
      "Little visibility of bills, tariffs and total energy cost position",
      "Site by site enrolment rather than a group energy strategy",
    ],
    roadmap: [
      {
        period: "Near term",
        focus: "Flexibility monetisation",
        items: ["Broader programme coverage and automated enrolment", "Storage and EV charging orchestration"],
      },
      {
        period: "Medium term",
        focus: "VPP scale",
        items: ["Aggregated portfolios across sites and asset types", "Forecasting and dispatch optimisation"],
      },
      {
        period: "Longer term",
        focus: "Grid services and resilience",
        items: ["Resilience services alongside revenue", "Deeper DER asset lifecycle management"],
      },
    ],
    useCases: [
      {
        buyer: "Site operations lead",
        need: "Earn revenue from flexible load",
        vendorAnswer: "Market leading",
      },
      {
        buyer: "Energy director",
        need: "Balance flexibility revenue against tariff, carbon and resilience outcomes",
        vendorAnswer: "Weak: no total cost or carbon view",
      },
      {
        buyer: "Sustainability lead",
        need: "Hourly emissions effect of load shifting",
        vendorAnswer: "Partial at best",
      },
    ],
    gaps: [
      {
        area: "Whole position",
        vendor: "Optimises enrolled load only",
        raPlus: "Flexibility set against tariffs, sourcing, efficiency and capital plans in one place",
      },
      {
        area: "Carbon effect",
        vendor: "Revenue framing without hourly emissions consequence",
        raPlus: "Hourly emissions in the governed inventory shows the carbon result of every shift",
      },
      {
        area: "Governance",
        vendor: "No lineage or assurance path for reported figures",
        raPlus: "Evidence, lineage and audit trail on every regulated output",
      },
    ],
    winTheme:
      "Keep the flexibility revenue and add the rest of the book. RA+ is the layer that decides which lever to pull and proves the outcome.",
    watchFor:
      "Aggregators expanding upward into energy management dashboards and claiming platform status.",
    sources: [
      "Licensed Verdantix research reviewed September 2026",
      "Public vendor and programme operator material",
      "Internal RA+ competitive assessment",
    ],
  },
];

export const findEnergyVendor = (slug?: string) =>
  energyVendors.find((v) => v.slug === slug);
