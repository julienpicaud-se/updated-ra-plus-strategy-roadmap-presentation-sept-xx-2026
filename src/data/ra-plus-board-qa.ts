export type LeadershipQA = {
  section: "Roadmap" | "Competition" | "Value case" | "Go to market" | "Trust" | "Beyond 2027";
  question: string;
  answer: string;
  proof: string[];
  implication: string;
  caution?: string;
};

export const leadershipQA: LeadershipQA[] = [
  {
    section: "Roadmap",
    question: "Why this sequence, and why now?",
    answer: "We are building trust before scale: governed data and calculations first, then connected workflows, then AI-assisted decisions.",
    proof: [
      "2026 closes material inventory, migration and platform-foundation gaps.",
      "2027 connects inventory, suppliers, disclosure, risk and action on the same spine.",
      "Core capabilities are built once and inherited across products.",
    ],
    implication: "Protect the sequence. Pulling advanced AI ahead of data quality and calculation governance would amplify weak inputs rather than create trusted decisions.",
  },
  {
    section: "Roadmap",
    question: "How confident are we in the 2027 timing?",
    answer: "Confidence is highest at the half-year level. Only the Schneider Electric migration and CSRD cycle is held as a quarter-specific Q1 milestone.",
    proof: [
      "The roadmap deliberately preserves H1 and H2 bands where a quarter is not confirmed.",
      "The 2027 plan spans six interdependent products and the shared platform.",
      "Delivery confidence depends on architecture readiness, capacity and annual portfolio decisions.",
    ],
    implication: "Manage leadership to outcomes and investment gates, not artificial quarter precision.",
    caution: "Do not convert H1 or H2 commitments into quarter promises until teams confirm capacity and dependencies.",
  },
  {
    section: "Roadmap",
    question: "What are the critical dependencies?",
    answer: "The shared data spine, ontology, calculation governance and evidence lineage are the common path for every product outcome.",
    proof: [
      "Carbon Performance provides the trusted inventory consumed across the portfolio.",
      "Supply Chain feeds supplier and product data into that inventory.",
      "Reporting, Climate Risk and decarbonization planning depend on consistent hierarchies, indicators and calculations.",
    ],
    implication: "Treat Core Platform capacity as portfolio capacity, not overhead that can be traded away product by product.",
  },
  {
    section: "Roadmap",
    question: "What does success look like by the end of 2027?",
    answer: "A client can move from trusted data to action and disclosure without rebuilding context between products.",
    proof: [
      "A consultant-grade, AI-assisted inventory across Scope 1, 2 and 3.",
      "Supplier engagement, product carbon footprint and broader value-chain visibility.",
      "Audit-ready disclosure, financially expressed climate risk and governed action plans.",
    ],
    implication: "The winning outcome is an end-to-end client journey, not six isolated feature lists.",
  },
  {
    section: "Competition",
    question: "Where can RA+ credibly win?",
    answer: "Where clients value one accountable platform across sustainability, energy and efficiency, supported by Schneider scale and advisory depth.",
    proof: [
      "RA+ spans carbon, supply chain, reporting, climate risk, energy and efficiency.",
      "One data spine reduces reconciliation between products and reporting cycles.",
      "Shared calculations, evidence and workflows create a total-cost argument beyond license price.",
    ],
    implication: "Sell the integrated operating model and measurable outcomes, not a point-by-point feature checklist.",
  },
  {
    section: "Competition",
    question: "Where are competitors stronger today?",
    answer: "Specialists can be more visible in a narrow domain, and Watershed currently presents the strongest AI-native sustainability challenge.",
    proof: [
      "osapiens is positioned around EU compliance and supplier intelligence.",
      "Arcadia is deep in energy data infrastructure.",
      "Deepki is specialized in real estate ESG, energy performance and climate risk.",
    ],
    implication: "RA+ must make AI workflow maturity visible and prove that breadth produces faster, lower-friction outcomes.",
  },
  {
    section: "Competition",
    question: "Can we claim a price advantage?",
    answer: "Not on license price, but we can now claim a more transparent buying model. RA+ prices the platform once, then per product: Foundation includes the platform spine and one product, Enterprise adds a platform fee plus per product pricing with the first three products included, Portfolio is the platform fee with unlimited products.",
    proof: [
      "Peers generally quote custom, per point solution pricing that is not publicly disclosed.",
      "Paying for the platform once means every additional product carries a lower marginal cost than a new point solution.",
      "The defensible comparison remains total cost of ownership across data, integration, assurance and multiple tools.",
    ],
    implication: "Lead with the platform-plus-product model and TCO, and commission matched-account TCO evidence before claiming a lower price.",
    caution: "Do not present venture funding or buying model labels as comparative pricing evidence.",
  },
  {
    section: "Competition",
    question: "What evidence would prove durable differentiation?",
    answer: "Referenceable clients who use the same governed data across two or more domains and can quantify time, cost or risk improvement. Our strongest claims are cobenefit recommendations linking energy, carbon and cost in one view, and value-chain climate risk priced beyond owned assets, where no rival currently combines both.",
    proof: [
      "Recommendations launch Q4 2026 as the only capability highlighting energy, carbon and cost cobenefits on one platform.",
      "ClimVar extends financially expressed climate risk into the value chain, a space supply chain risk tools do not cover.",
      "Lineage, evidence and audit trail are on parity with enterprise expectations, so differentiation must come from convergence and cobenefits.",
    ],
    implication: "Prioritize lighthouse accounts and publish a repeatable proof pack for sales, delivery and leadership.",
  },
  {
    section: "Go to market",
    question: "How does a single product deal become a platform relationship?",
    answer: "Through a deliberate buyer journey: Land on one urgent problem, Prove measurable value in weeks, Expand to second and third products, then Standardize on RA+ as the corporate system of record.",
    proof: [
      "Land: Accor and Sanofi started on a single product with a compliance deadline.",
      "Prove: Schneider Electric runs a trusted inventory across Scope 1, 2 and 3, closing 31 December 2026.",
      "Expand: Newell Brands shows cross-product adoption once the baseline is shared.",
    ],
    implication: "Price and package for expansion, not just for the first deal. Every stage of the journey deepens the moat because the data spine makes each next product cheaper to adopt.",
  },
  {
    section: "Go to market",
    question: "What exactly is in the Energy & Efficiency family?",
    answer: "Nine grounded products: Energy Efficiency, Capital Asset Planning, Utility Data Management, Energy Portfolio Management, Energy Sourcing, Renewables and EACs, Metering and Interval Data, Demand Response and Flexibility, and Electrification and DER Management, all on the same RA+ platform layer.",
    proof: [
      "Metering and Interval Data is the data spine feeding granular carbon performance, efficiency, utility data management and demand response.",
      "Energy Portfolio Management covers budgets, reforecasts and variance, not a standalone procurement product.",
      "Names come from the RA product strategy business brief, not invented labels.",
    ],
    implication: "Convergence is a commercial argument: a client entering through energy data can add carbon, disclosure and risk without a new platform.",
  },
  {
    section: "Competition",
    question: "What is our supply chain edge against specialist tools?",
    answer: "Zeigo Hub heritage: structured supplier education and learning paths, guided decarbonization programs, and a network of suppliers already onboarded and trained, not just a data-collection portal.",
    proof: [
      "Campaigns run at scale on an existing, trained supplier network.",
      "Supplier emissions abatement moves suppliers from reporting to reduction action.",
      "Specialist supplier tools lack climate risk capabilities; we combine supplier exposure with priced climate risk.",
    ],
    implication: "Position Supply Chain as supplier action, not supplier surveying, and connect it to the Climate Risk value-chain story.",
  },
  {
    section: "Trust",
    question: "Can we put AI-assisted outputs in front of auditors and regulators?",
    answer: "Yes, because AI is assistive and governed: method transparency per data point, lineage and evidence on every number, and an audit trail across the inventory.",
    proof: [
      "Consultant-grade and AI-driven inventory with reproducible calculations.",
      "Sera guidance embedded across inventory and disclosure with human approval loops.",
      "Data quality, evidence and audit trail are core platform investments, not afterthoughts.",
    ],
    implication: "Trust is a product feature we sell, and the reason the sequence puts governed data ahead of scaled AI.",
  },
  {
    section: "Competition",
    question: "Is Envizi our only real energy management rival?",
    answer: "No. The energy management field is crowded and we now compare against the whole field, not one name.",
    proof: [
      "IBM Envizi, EnergyCAP, Accruent, Arcadia and Honeywell Forge each cover part of the problem.",
      "EAC and renewables specialists, and demand response, VPP and DER specialists, compete in adjacent lanes.",
      "None of them take energy data through to carbon, sourcing, flexibility and funded action on one platform.",
    ],
    implication: "Position RA+ against the field on convergence and cobenefits, and treat single-vendor comparisons as sales tools only.",
  },
  {
    section: "Competition",
    question: "Who do we actually face in Climate Risk?",
    answer: "Climate risk specialists with strong hazard science, plus data and rule setters that shape what clients must produce.",
    proof: [
      "Climate X, XDI, Cotality, S&P Global Climanomics, Risilience and Bloomberg are the competitive set.",
      "Copperleaf is adjacent on capital planning rather than a direct rival.",
      "EPA, SEC and WMO set data and rules, while Oxford and ECIU provide science credibility.",
    ],
    implication: "Win on financially expressed value-chain risk connected to inventory and action, not on hazard modelling depth alone.",
    caution: "Do not claim parity on proprietary hazard science without a validated methodology review.",
  },
  {
    section: "Go to market",
    question: "What sits inside the sustainability family?",
    answer: "Eight granular products on the same spine: Carbon Inventory, Decarbonization Planning and Initiatives, EAC and PPA Management, Supplier Engagement, Product Carbon Footprint, Disclosure Management, Indicator and Data Management, and Climate Risk and Adaptation.",
    proof: [
      "Each product has its own roadmap, use cases and proof points, with confirmed quarters kept separate from H1 and H2 bands.",
      "Carbon Inventory is the shared baseline every other product consumes or feeds.",
      "Climate Risk is governed as a distinct product, not a feature of reporting.",
    ],
    implication: "Sell named products with clear owners, and use the shared spine as the expansion argument.",
  },
  {
    section: "Value case",
    question: "Where does the financial value come from?",
    answer: "Three mechanisms: protect and expand revenue, remove duplicated cost to serve, and avoid or reprice climate exposure.",
    proof: [
      "Growth: broader account relevance, cross-sell paths and platform consolidation.",
      "Efficiency: shared ingestion, calculations, evidence and AI-assisted workflows.",
      "Risk and capital: ClimVar, scenarios and adaptation actions direct funding to higher-value responses.",
    ],
    implication: "The value case should be governed as three measurable ledgers, not one blended aspiration.",
  },
  {
    section: "Value case",
    question: "Why are the euro values still blank?",
    answer: "Because the deck does not contain validated baselines for ARR, cost to serve or financially expressed exposure, and inventing them would weaken the case.",
    proof: [
      "ARR protected and expanded needs account-level renewal and pipeline evidence.",
      "Annual cost removed needs current effort, run-cost and delivery baselines.",
      "Exposure avoided or repriced needs an agreed finance and risk methodology.",
    ],
    implication: "Finance and Product should baseline all three measures before investment lock.",
    caution: "Placeholders remain placeholders until owners, methods and source data are approved.",
  },
  {
    section: "Value case",
    question: "How should we measure value without double counting?",
    answer: "Assign one owner, baseline and realization rule to each benefit, then reconcile benefits at account and platform level.",
    proof: [
      "Revenue: renewal protected, expansion won and point-solution displacement.",
      "Cost: hours and run cost removed from ingestion, calculation, assurance and reporting.",
      "Risk: exposure repriced, capital redirected and loss avoided under the approved methodology.",
    ],
    implication: "Report leading product adoption signals separately from realized financial outcomes.",
  },
  {
    section: "Value case",
    question: "What should gate further investment?",
    answer: "Evidence that the common platform is improving product delivery and client economics faster than isolated investment would.",
    proof: [
      "Architecture readiness and data-quality thresholds are met.",
      "At least one end-to-end workflow is adopted across connected products.",
      "Finance validates a measurable contribution to growth, cost or risk.",
    ],
    implication: "Fund the next horizon against proof points, with explicit stop, adjust and scale decisions.",
  },
  {
    section: "Beyond 2027",
    question: "Is the 2028 to 2030+ path a commitment?",
    answer: "No. It is a strategic horizon showing how connected products could compound into governed, increasingly autonomous value.",
    proof: [
      "2028 direction: scale the platform across the enterprise and extended value chain.",
      "2029 direction: industrialize cross-domain intelligence and predictive controls.",
      "2030+ direction: governed closed-loop execution and outcome-led services.",
    ],
    implication: "Revalidate sequencing and investment annually against customer evidence, architecture readiness and portfolio choices.",
    caution: "Directional horizons must not be represented as committed release dates.",
  },
];

export const leadershipDecisions = [
  {
    title: "Protect the platform sequence",
    line: "Keep data, calculation governance and evidence ahead of scaled AI and automation.",
  },
  {
    title: "Demand commercial proof",
    line: "Select lighthouse accounts and validate cross-product adoption, TCO and expansion evidence at each stage of the buyer journey.",
  },
  {
    title: "Sell the journey, not the SKU",
    line: "Package Land, Prove, Expand, Standardize with platform-plus-product pricing so every first deal is structured to grow.",
  },
  {
    title: "Lock value ownership",
    line: "Finance and Product assign baselines, owners and realization rules to the three value ledgers.",
  },
  {
    title: "Gate the next horizon",
    line: "Use explicit stop, adjust and scale decisions before converting directional bets into commitments.",
  },
];