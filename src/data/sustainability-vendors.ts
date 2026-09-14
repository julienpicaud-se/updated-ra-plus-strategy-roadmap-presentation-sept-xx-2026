// Vendor deep dives for the RA+ sustainability competitive field: carbon management,
// supply chain decarbonization, and ESG reporting and compliance.
// Roadmap directions are directional readings of public vendor communication and
// licensed Verdantix research reviewed in September 2026, not vendor commitments.
// Positions and gaps are internal RA+ assessments, not third party ratings.

import type { EnergyVendor } from "./energy-vendors";

export type SustainabilityDomain = "carbon" | "supply-chain" | "esg";

export interface SustainabilityVendor extends EnergyVendor {
  domains: SustainabilityDomain[];
}

export const domainLabels: Record<SustainabilityDomain, string> = {
  carbon: "Carbon management",
  "supply-chain": "Supply chain decarbonization",
  esg: "ESG reporting and compliance",
};

export const sustainabilityVendors: SustainabilityVendor[] = [
  {
    slug: "watershed",
    name: "Watershed",
    domains: ["carbon", "esg"],
    category: "Enterprise carbon platform",
    tagline: "The most visible enterprise carbon brand, built around measurement and reduction programmes",
    threat: "High",
    overlap: "Carbon inventory, Scope 3 modelling, supplier engagement, reduction planning, disclosure exports",
    summary:
      "Watershed is the best known standalone enterprise carbon platform, named a Leader in the 2026 Verdantix Green Quadrant for enterprise carbon management software. It pairs strong Scope 3 modelling and a polished reduction programme workflow with a growing disclosure story, and sells hard into sustainability leadership teams.",
    strengths: [
      "Strong Scope 3 modelling and a well regarded measurement engine",
      "Clean, modern product experience that sustainability teams like to use",
      "Reduction programme workflow with supplier engagement built in",
      "Brand momentum and enterprise reference customers",
    ],
    weaknesses: [
      "Lighter on operational energy detail: no meter, interval or invoice spine underneath the carbon numbers",
      "Reduction planning stops short of energy cobenefits and savings verification",
      "Clean power procurement guidance is advisory, not operated sourcing",
      "Disclosure remains an export into someone else's regulated reporting workflow",
    ],
    roadmap: [
      {
        period: "Near term",
        focus: "Disclosure and audit readiness",
        items: [
          "Deeper CSRD and assurance workflow support",
          "More granular Scope 3 category coverage and factor governance",
        ],
      },
      {
        period: "Medium term",
        focus: "From measurement to funded reduction",
        items: [
          "Stronger abatement economics and marginal abatement cost views",
          "Broader supplier data collection at network scale",
        ],
      },
      {
        period: "Longer term",
        focus: "Platform expansion",
        items: [
          "Adjacent sustainability data domains beyond carbon",
          "Deeper financial planning integration for decarbonization spend",
        ],
      },
    ],
    useCases: [
      {
        buyer: "Sustainability lead",
        need: "A credible, audit ready carbon inventory and a reduction story",
        vendorAnswer: "Strong. This is Watershed's home ground.",
      },
      {
        buyer: "Energy manager",
        need: "Meter level truth underneath the carbon numbers",
        vendorAnswer: "Weak. Energy data is an input, not an operated capability.",
      },
      {
        buyer: "CFO or controller",
        need: "Carbon figures with the discipline of financial reporting",
        vendorAnswer: "Partial. Good traceability, but no finance grade consolidation engine.",
      },
    ],
    gaps: [
      {
        area: "Energy truth",
        vendor: "Carbon modelled from activity data, with no metering or utility data spine of its own.",
        raPlus: "The same platform runs metering, interval data and utility invoices, so the carbon number reconciles to the energy bill.",
      },
      {
        area: "Cobenefits",
        vendor: "Reduction planning without energy cost savings attached to each measure.",
        raPlus: "Initiatives carry energy and carbon cobenefits with M&V grade savings verification.",
      },
      {
        area: "Sourcing execution",
        vendor: "Advisory clean power procurement.",
        raPlus: "Energy sourcing, renewables and EAC management are operated products on the same spine.",
      },
    ],
    winTheme:
      "Do not fight the brand; fight the gap between the carbon report and the energy reality underneath it. RA+ is the platform where the number and the kilowatt hour agree.",
    watchFor:
      "Watershed acquiring or partnering into utility data or energy management, which would close its biggest structural gap.",
    sources: [
      "Public Watershed product information reviewed September 2026",
      "Verdantix Green Quadrant: Enterprise Carbon Management Software (2026), licensed research",
    ],
  },
  {
    slug: "persefoni",
    name: "Persefoni",
    domains: ["carbon"],
    category: "Audit grade carbon accounting",
    tagline: "The ledger purist: carbon accounting with financial reporting discipline",
    threat: "Moderate",
    overlap: "Carbon inventory, financed emissions, audit traceability, disclosure support",
    summary:
      "Persefoni positions carbon accounting as a ledger discipline, with particular strength in financed emissions (PCAF category leadership) and audit oriented traceability. It is a credible enterprise rival, named a Leader in the 2026 Verdantix Green Quadrant, but its coverage narrows quickly outside the accounting core.",
    strengths: [
      "Ledger grade traceability and audit oriented workflows",
      "Category leadership in financed emissions and PCAF alignment",
      "Strong accounting heritage and controls vocabulary",
      "Recognised enterprise carbon brand",
    ],
    weaknesses: [
      "Narrower operational coverage: thin on energy, sourcing and supplier operations",
      "Minimal abatement and initiative management tooling",
      "Limited product carbon footprint depth",
      "Reporting focus, with less support for running the decarbonization programme itself",
    ],
    roadmap: [
      {
        period: "Near term",
        focus: "Accounting depth",
        items: [
          "Continued controls, assurance and audit workflow investment",
          "Broader financed and facilitated emissions coverage",
        ],
      },
      {
        period: "Medium term",
        focus: "Disclosure automation",
        items: [
          "More automated CSRD and SEC style disclosure outputs",
          "AI assisted data mapping and anomaly detection",
        ],
      },
      {
        period: "Longer term",
        focus: "Decision support",
        items: [
          "Scenario and target setting layered on the ledger",
          "Deeper financial system integration",
        ],
      },
    ],
    useCases: [
      {
        buyer: "Financial institution",
        need: "Financed emissions at PCAF grade",
        vendorAnswer: "Very strong, the reference point in the market.",
      },
      {
        buyer: "Sustainability controller",
        need: "An auditable corporate inventory",
        vendorAnswer: "Strong on traceability and controls.",
      },
      {
        buyer: "Operations leader",
        need: "Reduction actions tied to energy and cost",
        vendorAnswer: "Weak. The programme has to run somewhere else.",
      },
    ],
    gaps: [
      {
        area: "Action layer",
        vendor: "Minimal abatement planning, no initiatives management.",
        raPlus: "Decarbonization planning, initiatives and actions management with energy and carbon cobenefits sit on the same inventory.",
      },
      {
        area: "Operational data",
        vendor: "Activity data ingested from elsewhere, no operated energy data layer.",
        raPlus: "Metering, utility data and invoice processing feed the inventory directly.",
      },
    ],
    winTheme:
      "Match the audit story, then widen the lens: the inventory is only useful if the platform also runs the reduction programme and the energy data underneath it.",
    watchFor:
      "Persefoni moving from accounting into planning and abatement workflows, which would put it in direct competition with our programme layer.",
    sources: [
      "Public Persefoni product information reviewed September 2026",
      "Verdantix Green Quadrant: Enterprise Carbon Management Software (2026), licensed research",
    ],
  },
  {
    slug: "sweep",
    name: "Sweep",
    domains: ["carbon", "esg"],
    category: "Carbon and ESG data platform",
    tagline: "The fast mover: quick onboarding and a clean data platform story",
    threat: "Moderate",
    overlap: "Carbon inventory, ESG data management, disclosure preparation, supplier data collection",
    summary:
      "Sweep is a European carbon and ESG data platform known for fast onboarding and a tidy user experience, named a Leader in the 2026 Verdantix Green Quadrant. It covers carbon accounting and a growing ESG data management story, with less depth at enterprise scale and on operational energy.",
    strengths: [
      "Fast onboarding and time to first inventory",
      "Clean, approachable product experience",
      "European regulatory fluency, including CSRD preparation",
      "Flexible data model for carbon and ESG metrics",
    ],
    weaknesses: [
      "Less proven at the largest enterprise scale and complexity",
      "Generic action planning without energy economics",
      "No operated energy, sourcing or metering layer",
      "Emerging product carbon footprint capability",
    ],
    roadmap: [
      {
        period: "Near term",
        focus: "CSRD readiness",
        items: [
          "Double materiality and ESRS workflow support",
          "Evidence and audit trail hardening",
        ],
      },
      {
        period: "Medium term",
        focus: "Scale and automation",
        items: [
          "More automated data collection and AI assisted mapping",
          "Deeper supplier and value chain data networks",
        ],
      },
      {
        period: "Longer term",
        focus: "Full sustainability data platform",
        items: [
          "Broader ESG indicator coverage beyond carbon",
          "Planning and target management on top of the data layer",
        ],
      },
    ],
    useCases: [
      {
        buyer: "Mid market sustainability team",
        need: "A first credible inventory, fast",
        vendorAnswer: "Strong. Onboarding speed is the differentiator.",
      },
      {
        buyer: "Enterprise sustainability lead",
        need: "Complex group consolidation and assurance",
        vendorAnswer: "Partial. Enterprise depth is still maturing.",
      },
      {
        buyer: "Energy or operations lead",
        need: "Meter grade data under the carbon figures",
        vendorAnswer: "Weak. Not part of the product.",
      },
    ],
    gaps: [
      {
        area: "Enterprise scale",
        vendor: "Elegant at mid market complexity, stretched by global group structures.",
        raPlus: "Ownership boundary consolidation, hierarchy and factor governance built for the largest portfolios.",
      },
      {
        area: "Programme execution",
        vendor: "Generic action plans.",
        raPlus: "Initiatives management with costed ECMs, cobenefits and verified savings.",
      },
    ],
    winTheme:
      "Concede onboarding speed, win the enterprise complexity conversation: consolidation discipline, energy truth and a funded programme, not just a tidy inventory.",
    watchFor:
      "Sweep landing larger enterprise logos, which would test whether its data model holds at group scale.",
    sources: [
      "Public Sweep product information reviewed September 2026",
      "Verdantix Green Quadrant: Enterprise Carbon Management Software (2026), licensed research",
    ],
  },
  {
    slug: "sphera",
    name: "Sphera",
    domains: ["carbon", "supply-chain"],
    category: "Industrial ESG, LCA and supply chain suite",
    tagline: "The industrial incumbent: deep LCA heritage and regulated industry governance",
    threat: "High",
    overlap: "Corporate carbon, product carbon footprint, supply chain carbon, ESG reporting content",
    summary:
      "Sphera brings decades of industrial safety, LCA and ESG heritage, with the deepest product footprint and life cycle capability in the field and strong governance for regulated industries. Named a Leader in the 2026 Verdantix Green Quadrant. Its suite breadth is real, but the products grew by acquisition and the operational energy layer is thin.",
    strengths: [
      "LCA grade product carbon footprints, the benchmark in the field",
      "Deep regulatory content and mature governance for regulated industries",
      "Strong industrial brand and installed base",
      "Supply chain carbon modelling strength",
    ],
    weaknesses: [
      "Suite assembled by acquisition, with uneven integration between modules",
      "Limited market based instrument management and operated energy sourcing",
      "Abatement modelling without energy cobenefits or savings verification",
      "User experience trails the carbon natives",
    ],
    roadmap: [
      {
        period: "Near term",
        focus: "Suite integration",
        items: [
          "Tighter data flow between LCA, corporate carbon and reporting modules",
          "Continued CSRD and regulatory content updates",
        ],
      },
      {
        period: "Medium term",
        focus: "Supply chain and PCF expansion",
        items: [
          "Broader supplier data collection and product footprint automation",
          "More scenario and abatement modelling depth",
        ],
      },
      {
        period: "Longer term",
        focus: "Platform consolidation",
        items: [
          "Unified data model across the acquired portfolio",
          "AI assisted LCA and reporting workflows",
        ],
      },
    ],
    useCases: [
      {
        buyer: "Product sustainability engineer",
        need: "LCA grade product footprints",
        vendorAnswer: "Very strong, the market benchmark.",
      },
      {
        buyer: "EHS and compliance leader",
        need: "Regulated industry ESG and safety content",
        vendorAnswer: "Strong, with long heritage.",
      },
      {
        buyer: "Energy and sustainability lead",
        need: "One spine from meter to carbon to disclosure",
        vendorAnswer: "Partial. Energy operations are not part of the suite.",
      },
    ],
    gaps: [
      {
        area: "Energy operations",
        vendor: "No metering, interval or utility bill layer under the carbon numbers.",
        raPlus: "Nine operated energy products feed the inventory and the reduction programme.",
      },
      {
        area: "Integration",
        vendor: "Acquired modules with uneven data flow between them.",
        raPlus: "One native platform: hierarchy, factors, calculation and disclosure built together from day one.",
      },
      {
        area: "Cobenefits",
        vendor: "Abatement modelling limited to carbon.",
        raPlus: "Every measure carries energy cost savings alongside carbon, verified with M&V.",
      },
    ],
    winTheme:
      "Respect the LCA depth, then make the board choose between an integrated suite story and an integrated platform reality. Our PCF roadmap is explicit about closing the footprint gap on shared data.",
    watchFor:
      "Genuine data model unification across the Sphera suite, which would blunt the integration argument.",
    sources: [
      "Public Sphera product information reviewed September 2026",
      "Verdantix Green Quadrant: Enterprise Carbon Management Software (2026), licensed research",
    ],
  },
  {
    slug: "ecovadis",
    name: "EcoVadis",
    domains: ["supply-chain"],
    category: "Supplier sustainability ratings network",
    tagline: "The ratings network nearly every procurement team already knows",
    threat: "Moderate",
    overlap: "Supplier sustainability assessment, ratings, procurement screening",
    summary:
      "EcoVadis operates the largest supplier sustainability ratings network in the market, with broad recognition across procurement organisations. Its ratings and scorecards are the default common language between buyers and suppliers, but ratings are an assessment layer, not a decarbonization operating platform.",
    strengths: [
      "Unmatched supplier network scale and brand recognition in procurement",
      "Standardised scorecards both sides of the supply relationship already understand",
      "Broad ESG theme coverage beyond carbon",
      "Strong enterprise procurement integrations",
    ],
    weaknesses: [
      "Scorecards measure posture, not verified emissions reductions",
      "Light on decarbonization coaching and abatement programme execution",
      "Limited product level carbon depth",
      "No energy, inventory or disclosure spine underneath the scores",
    ],
    roadmap: [
      {
        period: "Near term",
        focus: "Carbon depth in ratings",
        items: [
          "More carbon specific criteria and data in scorecards",
          "Tighter CSRD and CSDDD alignment of assessments",
        ],
      },
      {
        period: "Medium term",
        focus: "From ratings to action",
        items: [
          "Improvement guidance and corrective action tracking",
          "Deeper integration into procurement decision workflows",
        ],
      },
      {
        period: "Longer term",
        focus: "Network data platform",
        items: [
          "Primary emissions data exchange across the network",
          "Broader risk and compliance signals on supplier records",
        ],
      },
    ],
    useCases: [
      {
        buyer: "Chief procurement officer",
        need: "A recognised sustainability rating across the supply base",
        vendorAnswer: "Very strong, the default network.",
      },
      {
        buyer: "Sustainability lead",
        need: "Verified supplier emissions reductions against targets",
        vendorAnswer: "Partial. Ratings evidence intent more than verified abatement.",
      },
      {
        buyer: "Scope 3 programme owner",
        need: "Primary data collection and supplier abatement at scale",
        vendorAnswer: "Partial. Collection exists, programme execution is thin.",
      },
    ],
    gaps: [
      {
        area: "Verified abatement",
        vendor: "Scorecards and corrective actions, not measured emissions reduction.",
        raPlus: "Supplier action plans tied to measured emissions, with sponsors and progress against targets.",
      },
      {
        area: "Carbon spine",
        vendor: "Ratings sit outside any carbon inventory of record.",
        raPlus: "Supplier data feeds Category 1 and 4 directly into the inventory every product consumes.",
      },
    ],
    winTheme:
      "Coexist where we must, differentiate where it counts: EcoVadis rates suppliers, RA+ reduces their emissions and proves it in the inventory.",
    watchFor:
      "EcoVadis moving into primary emissions data exchange at network scale, which would challenge the data collection layer.",
    sources: [
      "Public EcoVadis product information reviewed September 2026",
      "Licensed Verdantix supply chain sustainability research reviewed September 2026",
    ],
  },
  {
    slug: "osapiens",
    name: "osapiens",
    domains: ["supply-chain", "esg"],
    category: "Compliance driven supply chain sustainability",
    tagline: "The European regulation machine: CSDDD, CBAM and EUDR breadth at network scale",
    threat: "High",
    overlap: "Supplier compliance, carbon accounting, supply chain due diligence, EUDR and CBAM workflows",
    summary:
      "osapiens has grown fast on European supply chain regulation, pairing compliance questionnaires and due diligence workflows with carbon accounting at supplier network scale. Its regulatory breadth (CSDDD, CBAM, EUDR) is the widest in the field, though decarbonization programme execution and energy economics are not the focus.",
    strengths: [
      "Widest European regulatory coverage: CSDDD, CBAM, EUDR and more",
      "Supplier network scale with compliance grade questionnaires",
      "Carbon accounting built alongside the compliance workflows",
      "Strong momentum with European enterprise manufacturers",
    ],
    weaknesses: [
      "Compliance first: limited decarbonization programme and abatement tooling",
      "No climate hazard or value at risk modelling",
      "No operated energy or sourcing layer",
      "Product carbon footprint depth is developing, not benchmark grade",
    ],
    roadmap: [
      {
        period: "Near term",
        focus: "Regulatory breadth",
        items: [
          "Continued expansion across European due diligence regimes",
          "More automation in supplier document and data collection",
        ],
      },
      {
        period: "Medium term",
        focus: "Carbon and PCF depth",
        items: [
          "Deeper product carbon footprint automation",
          "Stronger primary data collection across supplier tiers",
        ],
      },
      {
        period: "Longer term",
        focus: "Supply chain orchestration",
        items: [
          "From compliance records to supply chain transparency and orchestration",
          "Risk signals combined with sustainability data",
        ],
      },
    ],
    useCases: [
      {
        buyer: "Compliance lead",
        need: "CSDDD, CBAM or EUDR coverage quickly",
        vendorAnswer: "Very strong, the broadest regulatory workflow set.",
      },
      {
        buyer: "Procurement sustainability lead",
        need: "Supplier emissions data at network scale",
        vendorAnswer: "Strong on collection, thinner on verified reduction.",
      },
      {
        buyer: "Decarbonization owner",
        need: "Supplier abatement against a costed programme",
        vendorAnswer: "Weak. The programme layer is not the product.",
      },
    ],
    gaps: [
      {
        area: "Abatement execution",
        vendor: "Compliance records and collection, limited reduction programme.",
        raPlus: "Supplier action plans with sponsors, targets and measured outcomes inside the inventory.",
      },
      {
        area: "Climate risk",
        vendor: "No hazard modelling or value at risk.",
        raPlus: "Climate Risk prices physical and transition exposure on the same supplier records.",
      },
    ],
    winTheme:
      "They win the regulation checklist, we win the decarbonization outcome. Position compliance as table stakes and the funded supplier reduction programme as the differentiator.",
    watchFor:
      "osapiens adding genuine abatement programme tooling, which would make the compliance plus reduction combination very competitive.",
    sources: [
      "Public osapiens product information reviewed September 2026",
      "Licensed Verdantix supply chain sustainability research reviewed September 2026",
    ],
  },
  {
    slug: "integritynext",
    name: "IntegrityNext",
    domains: ["supply-chain"],
    category: "Supplier ESG screening network",
    tagline: "Broad supplier screening coverage with a light operational footprint",
    threat: "Low",
    overlap: "Supplier ESG screening, compliance monitoring, emissions data collection",
    summary:
      "IntegrityNext offers broad supplier ESG screening and monitoring across a large network, with particular strength in automated compliance checks and certificates. It collects emissions data at network scale but stays a screening and monitoring layer rather than a decarbonization platform.",
    strengths: [
      "Large supplier network with automated screening",
      "Broad topic coverage from ESG certificates to compliance status",
      "Quick to deploy for procurement teams",
      "Emissions data collection at network scale",
    ],
    weaknesses: [
      "Screening depth rather than decarbonization depth",
      "Light on supplier coaching and abatement programmes",
      "Limited product carbon footprint capability",
      "No energy, inventory or disclosure integration",
    ],
    roadmap: [
      {
        period: "Near term",
        focus: "Screening automation",
        items: [
          "More automated monitoring and alert workflows",
          "Broader regulatory screening content",
        ],
      },
      {
        period: "Medium term",
        focus: "Emissions data",
        items: [
          "Deeper supplier emissions collection and PCF exchange",
          "More analytics on collected data",
        ],
      },
      {
        period: "Longer term",
        focus: "Supply chain ESG platform",
        items: [
          "Wider risk and sustainability signals per supplier",
          "Improvement workflows beyond screening",
        ],
      },
    ],
    useCases: [
      {
        buyer: "Procurement operations",
        need: "Automated ESG screening across thousands of suppliers",
        vendorAnswer: "Strong. This is the core use case.",
      },
      {
        buyer: "Sustainability lead",
        need: "Decarbonization coaching for strategic suppliers",
        vendorAnswer: "Weak. Screening, not coaching.",
      },
      {
        buyer: "Scope 3 programme owner",
        need: "Primary data into a carbon inventory",
        vendorAnswer: "Partial. Collection exists, inventory integration does not.",
      },
    ],
    gaps: [
      {
        area: "Decarbonization",
        vendor: "Monitoring and alerts, no abatement programme.",
        raPlus: "Supplier engagement with action plans, sponsors and measured reduction outcomes.",
      },
      {
        area: "Platform integration",
        vendor: "A screening tool alongside the sustainability stack.",
        raPlus: "Supplier data lands in the same inventory, disclosure and climate risk workflows.",
      },
    ],
    winTheme:
      "Screening finds the problem suppliers; RA+ fixes them and proves it. Anchor the conversation on outcomes, not monitoring breadth.",
    watchFor:
      "IntegrityNext partnering with a carbon platform to offer screening plus inventory, which would raise its ceiling.",
    sources: [
      "Public IntegrityNext product information reviewed September 2026",
      "Licensed Verdantix supply chain sustainability research reviewed September 2026",
    ],
  },
  {
    slug: "workiva",
    name: "Workiva",
    domains: ["esg"],
    category: "Financial and ESG reporting platform",
    tagline: "The reporting incumbent: financial discipline applied to ESG disclosure",
    threat: "High",
    overlap: "ESG reporting, CSRD and SEC disclosure workflows, controls and assurance, audit ready outputs",
    summary:
      "Workiva is the strongest pure reporting rival, with financial reporting heritage, controls discipline and broad framework coverage including CSRD. Its linked data model across documents is excellent for disclosure, but the sustainability data itself has to arrive from somewhere else: Workiva does not operate the collection, carbon or energy layers.",
    strengths: [
      "Financial reporting grade controls, linking and audit discipline",
      "Broad framework coverage with strong CSRD workflow",
      "Deep finance buyer relationships and credibility with auditors",
      "Mature collaboration across large reporting teams",
    ],
    weaknesses: [
      "Reporting layer only: no operated sustainability data collection spine",
      "Carbon and energy data arrive via integrations, not natively",
      "Limited indicator collection campaigns across operations",
      "No decarbonization planning or programme execution",
    ],
    roadmap: [
      {
        period: "Near term",
        focus: "CSRD and assurance depth",
        items: [
          "Continued ESRS workflow and assurance readiness investment",
          "AI assisted drafting and tagging of disclosures",
        ],
      },
      {
        period: "Medium term",
        focus: "Data collection expansion",
        items: [
          "Deeper ESG data collection and survey tooling",
          "More prebuilt integrations into carbon and HR data sources",
        ],
      },
      {
        period: "Longer term",
        focus: "Connected reporting platform",
        items: [
          "Unified financial and sustainability reporting cycles",
          "Broader GRC adjacency on the same platform",
        ],
      },
    ],
    useCases: [
      {
        buyer: "CFO or reporting lead",
        need: "Audit grade CSRD and SEC disclosure",
        vendorAnswer: "Very strong, the reference for reporting discipline.",
      },
      {
        buyer: "Sustainability lead",
        need: "Indicator collection across hundreds of sites",
        vendorAnswer: "Partial. Collection tooling exists but is not operations grade.",
      },
      {
        buyer: "Decarbonization owner",
        need: "Targets, initiatives and verified progress",
        vendorAnswer: "Weak. Not a programme platform.",
      },
    ],
    gaps: [
      {
        area: "Data spine",
        vendor: "Disclosure assembles data from integrated third parties.",
        raPlus: "Configure, collect and disclose run end to end on one governed data spine with lineage and evidence.",
      },
      {
        area: "Operations",
        vendor: "No campaign management across sites and indicators.",
        raPlus: "Advanced campaign management runs collection across the group with approval hierarchies.",
      },
    ],
    winTheme:
      "Match the reporting discipline, then ask where the disclosed number was born. RA+ owns the number from source data to disclosure; Workiva reports what others collect.",
    watchFor:
      "Workiva acquiring a carbon or ESG data collection asset, which would attack the spine argument directly.",
    sources: [
      "Public Workiva product information reviewed September 2026",
      "Licensed Verdantix ESG reporting research reviewed September 2026",
    ],
  },
  {
    slug: "wolters-kluwer",
    name: "Wolters Kluwer",
    domains: ["esg"],
    category: "Enterprise performance and ESG reporting",
    tagline: "The finance consolidation giant extending into ESG reporting",
    threat: "Moderate",
    overlap: "ESG reporting, consolidation, disclosure workflows, financial planning adjacency",
    summary:
      "Wolters Kluwer brings finance consolidation heritage (CCH Tagetik) into ESG reporting, with a strong controller audience and assurance grade workflows. Named a Leader in the 2026 Verdantix Green Quadrant for enterprise carbon management software via its ESG and carbon offerings, its strength is finance discipline rather than sustainability operations.",
    strengths: [
      "Deep finance consolidation and planning heritage",
      "Strong controller and CFO relationships",
      "Assurance grade reporting workflows",
      "Enterprise scale and global support",
    ],
    weaknesses: [
      "ESG capability extends a finance platform rather than a native sustainability spine",
      "Limited carbon accounting depth compared with carbon natives",
      "No energy, metering or supplier operations",
      "Sustainability indicator collection is developing",
    ],
    roadmap: [
      {
        period: "Near term",
        focus: "ESG in the consolidation cycle",
        items: [
          "Tighter ESG data integration into financial close workflows",
          "CSRD reporting content and assurance features",
        ],
      },
      {
        period: "Medium term",
        focus: "Carbon and planning",
        items: [
          "Deeper carbon accounting alongside financial consolidation",
          "Sustainability planning tied to financial plans",
        ],
      },
      {
        period: "Longer term",
        focus: "Integrated performance platform",
        items: [
          "One platform for financial and sustainability performance",
          "AI assisted disclosure and analysis",
        ],
      },
    ],
    useCases: [
      {
        buyer: "Group controller",
        need: "ESG data consolidated with financial discipline",
        vendorAnswer: "Strong, especially where CCH Tagetik is installed.",
      },
      {
        buyer: "Sustainability lead",
        need: "Operational collection and carbon depth",
        vendorAnswer: "Partial. Finance strength, thinner sustainability operations.",
      },
      {
        buyer: "Energy manager",
        need: "Meter and invoice data feeding ESG metrics",
        vendorAnswer: "Weak. Out of scope for the platform.",
      },
    ],
    gaps: [
      {
        area: "Sustainability operations",
        vendor: "A finance platform extended into ESG.",
        raPlus: "Native sustainability spine: indicators, campaigns, data quality and carbon calculation built for the domain.",
      },
      {
        area: "Energy and carbon depth",
        vendor: "Limited carbon accounting and no energy layer.",
        raPlus: "Consultant grade GHG inventory fed by operated energy data products.",
      },
    ],
    winTheme:
      "Where the buyer is a consolidation owner, respect the installed base. Where the buyer owns the sustainability programme, we win on native data depth from meter to disclosure.",
    watchFor:
      "Tighter CCH Tagetik plus ESG packaging aimed at CFOs, which strengthens the finance first buying motion.",
    sources: [
      "Public Wolters Kluwer product information reviewed September 2026",
      "Verdantix Green Quadrant: Enterprise Carbon Management Software (2026), licensed research",
    ],
  },
  {
    slug: "novisto",
    name: "Novisto",
    domains: ["esg"],
    category: "ESG data management and reporting",
    tagline: "The ESG data specialist: strong data management for reporting teams",
    threat: "Low",
    overlap: "ESG data management, indicator libraries, disclosure preparation, reporting workflows",
    summary:
      "Novisto is a focused ESG data management and reporting platform, well regarded for indicator management, data quality workflows and investor grade reporting. It is a credible specialist for the reporting use case, with a narrower footprint than suite rivals and no operations or carbon execution layer.",
    strengths: [
      "Focused ESG data management with good indicator handling",
      "Clean reporting workflows and framework mapping",
      "Investor grade data quality controls",
      "Strong fit for corporate reporting teams",
    ],
    weaknesses: [
      "Specialist scope: data management and reporting only",
      "No carbon accounting engine at consultant grade",
      "No collection campaigns across operations at scale",
      "No energy, supplier or climate risk capability",
    ],
    roadmap: [
      {
        period: "Near term",
        focus: "Data management depth",
        items: [
          "Continued indicator and data quality workflow investment",
          "CSRD and ISSB framework content",
        ],
      },
      {
        period: "Medium term",
        focus: "Collection and automation",
        items: [
          "More automated data ingestion and validation",
          "AI assisted disclosure drafting",
        ],
      },
      {
        period: "Longer term",
        focus: "Reporting platform breadth",
        items: [
          "Wider stakeholder reporting outputs",
          "Deeper integration into finance and carbon systems",
        ],
      },
    ],
    useCases: [
      {
        buyer: "ESG reporting manager",
        need: "Clean indicator management and framework mapping",
        vendorAnswer: "Strong. This is the specialist use case.",
      },
      {
        buyer: "Sustainability operations lead",
        need: "Group wide collection campaigns with approvals",
        vendorAnswer: "Partial. Lighter operational tooling.",
      },
      {
        buyer: "Carbon lead",
        need: "A defensible GHG inventory",
        vendorAnswer: "Weak. Reporting on carbon data, not calculating it.",
      },
    ],
    gaps: [
      {
        area: "Calculation depth",
        vendor: "Manages and reports ESG data; carbon calculation lives elsewhere.",
        raPlus: "Calculation logic, factors and methods are core platform capabilities feeding every disclosure.",
      },
      {
        area: "Breadth",
        vendor: "Reporting specialist alongside a best of breed stack.",
        raPlus: "One platform from source data through inventory to disclosed financial values.",
      },
    ],
    winTheme:
      "The specialist does one slice well. We win the consolidation argument: one spine, one audit trail, and the calculation engine the specialist assumes you already have.",
    watchFor:
      "Novisto expanding into carbon calculation, which would move it from adjacency to direct competition.",
    sources: [
      "Public Novisto product information reviewed September 2026",
      "Licensed Verdantix ESG reporting research reviewed September 2026",
    ],
  },
];

export const findSustainabilityVendor = (slug?: string) =>
  sustainabilityVendors.find((v) => v.slug === slug);

export const vendorsForDomain = (domain: SustainabilityDomain) =>
  sustainabilityVendors.filter((v) => v.domains.includes(domain));
