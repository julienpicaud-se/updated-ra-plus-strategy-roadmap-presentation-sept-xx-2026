import { orderedEnergyProducts } from "@/data/energy-products";
import { orderedSustainabilityProducts } from "@/data/sustainability-product-pages";

export type CPSlide =
  | {
      kind: "title";
      eyebrow: string;
      title: string;
      subtitle: string;
      meta: string[];
      stats: { value: string; label: string }[];
    }
  | { kind: "section"; eyebrow: string; title: string; subtitle: string; number: string }
  | {
      kind: "columns";
      eyebrow: string;
      title: string;
      subtitle?: string;
      columns: { label: string; title: string; line?: string; items: string[]; tone?: "primary" | "accent" | "warn" | "muted" }[];
      note?: string;
    }
  | {
      kind: "board";
      eyebrow: string;
      title: string;
      subtitle?: string;
      lanes: { label: string; period: string; tone: "primary" | "accent" | "warn" | "muted"; items: { name: string; note?: string }[] }[];
      note?: string;
    }
  | {
      kind: "stats";
      eyebrow: string;
      title: string;
      subtitle?: string;
      stats: { value: string; label: string; sub?: string }[];
      bullets?: { title: string; line: string }[];
      note?: string;
    }
  | {
      kind: "table";
      eyebrow: string;
      title: string;
      subtitle?: string;
      headers: string[];
      rows: string[][];
      note?: string;
    }
  | {
      kind: "bets";
      eyebrow: string;
      title: string;
      subtitle?: string;
      bets: { title: string; line: string; items: string[] }[];
      note?: string;
    }
  | {
      kind: "timeline";
      eyebrow: string;
      title: string;
      subtitle?: string;
      note?: string;
      years: string[];
      groups: {
        label: string;
        tone: "primary" | "accent" | "warn" | "muted";
        rows: {
          title: string;
          start: number;
          end?: number;
          mvp?: number;
          ga?: number;
          continuous?: boolean;
        }[];
      }[];
    }
  | {

      kind: "familymap";
      eyebrow: string;
      titleLead: string;
      titleHighlight: string;
      titleRest: string;
      brandLead: string;
      brandStrong: string;
      platformLayer?: string;
      sharedCapabilities?: string[];
      families: {
        label: string;
        tone: "primary" | "accent" | "warn" | "muted";
        products?: string[];
        subfamilies?: { label: string; products: string[] }[];
      }[];
    }
  | {
      kind: "spine";
      title: string;
      body: string;
      rows: { icon: string; title: string; items: string[] }[];
    }
  | {
      kind: "spinehub";
      eyebrow: string;
      title: string;
      subtitle?: string;
      center: { title: string; items: string[] };
      spokes: { title: string; items: string[] }[];
    }

  | {
      kind: "hero";
      badge: string;
      titleDark: string;
      titleGreen: string;
      tagline: string;
      body: string;
      chips: string[];
    }
  | {
      kind: "vision";
      badge: string;
      titleLead: string;
      titleHighlight: string;
      titleRest: string;
      manifesto: string;
      promises: { title: string; line: string }[];
      tagline: string;
    }
  | {
      kind: "strategicroadmap";
      badge: string;
      title: string;
      subtitle: string;
      horizons: {
        period: string;
        title: string;
        thesis: string;
        milestones: string[];
        tone: "primary" | "accent" | "warn";
      }[];
      drivers: { title: string; line: string }[];
      note: string;
    }
  | {
      kind: "roadmap2028";
      badge: string;
      title: string;
      subtitle: string;
      horizons: { period: string; title: string }[];
      lanes: {
        label: string;
        tone: "primary" | "accent" | "warn" | "muted";
        milestones: string[];
      }[];
      drivers: { title: string; line: string }[];
      note: string;
    }
  | {
      kind: "valuecase";
      badge: string;
      titleLead: string;
      titleHighlight: string;
      thesis: string;
      financials: { label: string; value: string; line: string }[];
      outcomes: { title: string; line: string }[];
      validation: string;
    }
  | {
      kind: "costbenefit";
      eyebrow: string;
      title: string;
      subtitle: string;
      costs: { label: string; value: string; items: string[] }[];
      valuePools: { label: string; value: string; line: string }[];
      equation: string;
      gates: string[];
      decision: string;
    }
  | {
      kind: "competitor";
      eyebrow: string;
      title: string;
      subtitle: string;
      headers: string[];
      rows: {
        company: string;
        price: string;
        scope: string;
        ai: string;
        position: string;
        featured?: boolean;
      }[];
      takeaway: string;
      source: string;
    }
  | {
      kind: "pricing";
      eyebrow: string;
      title: string;
      subtitle: string;
      tiers: {
        name: string;
        buyer: string;
        price: string;
        includes: string[];
        featured?: boolean;
      }[];
      scaleUnits: { label: string; value: string }[];
      competitors: { company: string; model: string; transparency: string }[];
      decision: string;
      source: string;
    }
  | {
      kind: "features";
      eyebrow: string;
      title: string;
      subtitle: string;
      rows: {
        capability: string;
        detail: string;
        position: "Market leading" | "On parity" | "Closing gap" | "Behind";
        benchmark: string;
      }[];
      takeaway: string;
      source: string;
    }
  | {
      kind: "journey";
      eyebrow: string;
      title: string;
      subtitle: string;
      stages: {
        stage: string;
        title: string;
        buyer: string;
        products: string;
        value: string;
        trigger: string;
        tone: "primary" | "accent" | "warn" | "muted";
      }[];
      proof?: { label: string; value: string }[];
      takeaway: string;
    }
  | { kind: "closing"; eyebrow: string; title: string; subtitle: string; asks: { title: string; line: string }[] };


const fullCpDeck: CPSlide[] = [
  {
    kind: "title",
    eyebrow: "RA+ Enterprise Sustainability",
    title: "RA+ Platform Roadmap 2026 and 2027",
    subtitle:
      "Leadership review of the RA+ platform plan across Carbon Performance, Supply Chain, Reporting and Compliance, Climate Risk, Strategy and the core platform they all stand on.",
    meta: ["Schneider Electric", "Sustainability Business", "September 2026"],
    stats: [
      { value: "6", label: "Products on one shared platform" },
      { value: "2027", label: "Direction mentioned in this plan" },
      { value: "1", label: "Decision: fund the core first" },
    ],
  },

  {
    kind: "table",
    eyebrow: "Agenda",
    title: "What we will cover, and what we need from you",
    subtitle: "Ninety minutes, four decisions, one ask at the end.",
    headers: ["Section", "What it covers", "What we need"],
    rows: [
      ["Narrative", "Why sustainability data is now a board level asset", "Alignment"],
      ["Platform", "One data spine, three domains, the convergence case", "Alignment"],
      ["Product strategy", "Three moves and the 2026 to 2028 shape", "Direction"],
      ["Market and competition", "Where we lead, where rivals catch up, pricing", "Challenge"],
      ["Value case and investment", "Value pools, cost, assumptions, capacity", "Validation"],
      ["Roadmap", "2026 committed, 2027 direction, gates", "Approval"],
      ["The ask", "Funding, capacity protection, governance", "Decision"],
      ["Appendix", "Product by product detail", "On request"],
    ],
  },

  {
    kind: "stats",
    eyebrow: "Executive summary",
    title: "The plan on one page",
    subtitle: "If the board reads one slide, this is it.",
    stats: [
      { value: "1", label: "Platform", sub: "One spine under six products" },
      { value: "3", label: "Strategic moves", sub: "Own the spine, cover the footprint, decide and act" },
      { value: "[€]", label: "Incremental investment", sub: "Placeholder pending Finance validation" },
    ],
    bullets: [
      {
        title: "Decision 1: fund the core first",
        line: "Protect a sufficient build capacity for the shared data ingestion and lineage, data quality, hierarchy, analytics and dashboards, and user workflows.",
      },
      {
        title: "Decision 2: commit 2026, gate 2027 for Energy and Efficiency",
        line: "2026 dates are firm. Only Energy and Efficiency stays gated in 2027, released once its business plan is finalised and validated.",
      },
      {
        title: "Decision 3: back convergence over point features",
        line: "We win by connecting Sustainability, Energy and Efficiency, not by matching every rival feature.",
      },
    ],
    note: "All euro figures in this deck are placeholders pending Finance validation.",
  },

  {
    kind: "columns",
    eyebrow: "Since the last board",
    title: "What changed since we last met",
    subtitle: "Three shifts that explain why this plan differs from the previous review.",
    columns: [
      {
        label: "Delivered",
        title: "What landed",
        line: "Q3 2026 shipped against the committed scope.",
        items: [
          "Shared hierarchy and factor foundations in build",
          "Inventory revamp with per gas breakdown",
          "Config engine, calculation methods and templates",
        ],
        tone: "primary",
      },
      {
        label: "Changed",
        title: "What we adjusted",
        line: "Scope moved where evidence or capacity demanded it.",
        items: [
          "Sera for carbon inventory pulled forward into Q4 2026",
          "2027 expressed as H1 and H2, not invented quarters",
          "Zeigo Activate sunset, replaced by a light CP calculator",
        ],
        tone: "accent",
      },
      {
        label: "Still open",
        title: "What is not settled",
        line: "Items the board should expect to see again.",
        items: [
          "Finance validation of every euro figure in this deck",
          "Capacity confirmation for unranked 2027 themes",
          "Post 2027 horizons remain directional",
        ],
        tone: "muted",
      },
    ],
  },





  {
    kind: "section",
    number: "00",
    eyebrow: "Leadership narrative",
    title: "The story the leadership team needs to believe",
    subtitle: "Five slides on why RA+ is the bet, why it wins, and why half measures will not work.",
  },


  {
    kind: "columns",
    eyebrow: "Leadership narrative",
    title: "Sustainability is becoming a boardroom weapon, not a report",
    subtitle: "Three forces are turning compliance data into competitive advantage. The question is who owns it.",
    columns: [
      {
        label: "Force 1",
        title: "Regulation is now a moat",
        line: "CSRD and assurance punish weak data and reward the platform that can prove lineage.",
        items: [
          "Disclosure is no longer a PDF exercise",
          "Auditors ask for lineage, not spreadsheets",
          "The cost of weak data is now board level",
        ],
        tone: "primary",
      },
      {
        label: "Force 2",
        title: "Carbon is a P&L line",
        line: "Procurement, logistics, and product teams now price carbon into every major decision.",
        items: [
          "Customers demand product level footprints",
          "Suppliers are scored on emissions",
          "Energy and carbon budgets are merged",
        ],
        tone: "accent",
      },
      {
        label: "Force 3",
        title: "AI has raised the bar",
        line: "Executives expect answers in minutes. Manual inventories and point tools look obsolete.",
        items: [
          "Manual inventories cannot keep pace",
          "Point tools create data silos",
          "The winner owns the trusted data spine",
        ],
        tone: "warn",
      },
    ],
  },


  {
    kind: "columns",
    eyebrow: "Leadership narrative",
    title: "The real opportunity is Sustainability, Energy and Efficiency as one operating picture",
    subtitle: "Customers do not buy carbon, energy, or efficiency as separate problems. They buy one view of how their operations perform, and what to do next.",
    columns: [
      {
        label: "Sustainability",
        title: "The scoreboard",
        line: "Carbon inventory, climate risk, disclosure, and targets set the enterprise ambition.",
        items: [
          "Board grade inventory and assurance",
          "Scope 3, supply chain, and financed emissions",
          "CSRD, SEC, and voluntary frameworks",
        ],
        tone: "primary",
      },
      {
        label: "Energy and Efficiency",
        title: "The levers",
        line: "Energy spend, contracts, efficiency projects, and verified savings are where targets become action.",
        items: [
          "Utility data, metering, and interval grade signals",
          "Energy sourcing, renewables, and EAC management",
          "ECM pipeline, M&V, demand response, and electrification",
        ],
        tone: "accent",
      },
      {
        label: "Convergence",
        title: "The operating system",
        line: "Only RA+ connects all three on one spine. That is the defensible position.",
        items: [
          "Carbon targets informed by live energy spend",
          "Efficiency projects ranked by carbon and financial return",
          "Disclosure backed by operational data, not surveys",
        ],
        tone: "warn",
      },
    ],
  },


  {
    kind: "stats",
    eyebrow: "Leadership narrative",
    title: "The legacy enterprise sustainability stack is a mess",
    subtitle: "Our buyers are paying three times for the same data. That is not a feature gap, it is a market opportunity.",
    stats: [
      { value: "3+", label: "Tools in a typical enterprise sustainability stack" },
      { value: "6-12 mo", label: "To assemble a consultant grade inventory manually" },
      { value: "1", label: "Platform that could replace all of it" },
    ],
    bullets: [
      {
        title: "Fragmented data",
        line: "Energy, carbon, supply chain, and climate risk data live in separate systems with separate owners.",
      },
      {
        title: "Repeated cost",
        line: "The same data is collected, cleaned, and reconciled once per tool, once per framework, once per audit.",
      },
      {
        title: "No compounding",
        line: "Nothing one product learns makes the next product smarter. Every tool starts from zero.",
      },
    ],
  },


  {
    kind: "columns",
    eyebrow: "Leadership narrative",
    title: "RA+ is built to own the system of record",
    subtitle: "One AI-native platform across Sustainability, Energy, and Efficiency. Competitors sell tools. We sell the spine.",
    columns: [
      {
        label: "The platform",
        title: "RA+ core",
        line: "One AI layer, one hierarchy, one user workflows, one analytics, one audit trail.",
        items: [
          "Built once, inherited by every product",
          "AI assisted from the first workflow",
          "Consultant grade and board grade by design",
        ],
        tone: "primary",
      },
      {
        label: "The products",
        title: "Connected, not bundled",
        line: "Carbon Performance, Supply Chain, Reporting and Compliance, Climate Risk, Strategy.",
        items: [
          "Each owns a customer outcome",
          "Each writes back to the shared spine",
          "Every new product makes the others stronger",
        ],
        tone: "accent",
      },
      {
        label: "The economics",
        title: "Compounding advantage",
        line: "The fourth product costs a fraction of the first and lands with the data already in place.",
        items: [
          "Acquisition cost falls per product added",
          "Switching cost rises with every domain adopted",
          "Competitors must rebuild what we build",
        ],
        tone: "muted",
      },
    ],
  },




  {
    kind: "columns",
    eyebrow: "Leadership narrative",
    title: "Fund the spine, or watch the products compete for scraps",
    subtitle: "Everything in this deck hangs off one decision: build the platform first, then scale the products on top of it.",
    columns: [
      {
        label: "What we commit",
        title: "A sequenced, gated roadmap",
        line: "Now, Next, Later across product areas, with explicit capacity math.",
        items: [
          "Quarterly 2026 commitments",
          "H1 and H2 2027 bands until ranked",
          "Stop, adjust, scale gates every cycle",
        ],
        tone: "primary",
      },
      {
        label: "What we need",
        title: "Capacity held for the core",
        line: "Product and R&D capacity reserved for the shared platform.",
        items: [
          "Data spine before product breadth",
          "Data governance before AI scale",
          "Migration paths that protect the base",
        ],
        tone: "warn",
      },
      {
        label: "What you get",
        title: "A compounding platform position",
        line: "From reporting vendor to the intelligence layer of the enterprise.",
        items: [
          "One platform story to the market",
          "Defensible data moat",
          "Optionality on every adjacent domain",
        ],
        tone: "accent",
      },
    ],
  },

  {
    kind: "section",
    number: "01",
    eyebrow: "Agenda item 1",
    title: "The platform we are building",
    subtitle: "One data spine, three domains, and the convergence that no point solution can copy.",
  },

  {
    kind: "columns",
    eyebrow: "Platform",
    title: "Trust: data, AI and security",
    subtitle: "A system of record only works if customers and auditors trust how it handles their data.",
    columns: [
      {
        label: "Data",
        title: "Traceable by design",
        line: "Every number can be explained back to its source.",
        items: [
          "Lineage from source record to disclosed figure",
          "Evidence and audit trail held with the data",
          "Shared data definitions and controls applied consistently across products",
        ],
        tone: "primary",
      },
      {
        label: "AI",
        title: "Assisted, never unaccountable",
        line: "AI accelerates the work, humans keep the sign off.",
        items: [
          "AI suggestions are reviewable and reversible",
          "Method and factor choices remain transparent",
          "No AI output enters a disclosure without human approval",
        ],
        tone: "accent",
      },
      {
        label: "Security",
        title: "Enterprise grade controls",
        line: "Aligned to Schneider Electric enterprise standards.",
        items: [
          "Role based access across products and hierarchy",
          "Segregated customer data with controlled sharing",
          "Security and compliance posture confirmed with the internal teams",
        ],
        tone: "muted",
      },
    ],
    note: "Certification and audit statements to be confirmed with Security and Legal before external use.",
  },




  {
    kind: "hero",
    badge: "RA+ Strategy 2026",
    titleDark: "One platform.",
    titleGreen: "Sustainability, Energy, Efficiency.",
    tagline: "End-to-end value, only we can deliver.",
    body: "Sustainability data, energy & supply intelligence, and efficiency expertise, converged onto a single, AI-native platform. One source of truth, one trusted advisor, one path to measurable savings.",
    chips: ["Unified", "Proactive", "Adaptive"],
  },

  {
    kind: "spine",
    title: "One Data Spine. Three Domains. Infinite Combinations.",
    body:
      "Every domain runs on a common architecture and data model with seamless data flows between products: improved ingestion, transformation and quality, advanced dashboards and analytics with smart AI insights, and a consistent user experience.",
    rows: [
      {
        icon: "≡",
        title: "Unified Data Foundation",
        items: ["RA+ spine", "Sustainability graph", "Identity registry", "Common data model"],
      },
      {
        icon: "✦",
        title: "Shared Intelligence Layer",
        items: ["AI agents", "Recommendation engine", "Anomaly detection", "Forecasting models"],
      },
      {
        icon: "▦",
        title: "Common Experience",
        items: ["Product domains", "Dashboards", "Workflows", "Disclosures", "Client self-serve"],
      },
    ],
  },


  {
    kind: "familymap",
    eyebrow: "Platform architecture",
    titleLead: "We're Building",
    titleHighlight: "One",
    titleRest: "AI-Native Platform with Multiple Connected Products",
    brandLead: "RESOURCE",
    brandStrong: "ADVISOR",
    sharedCapabilities: [
      "Data ingestion & transformation",
      "Data quality",
      "Analytics & Dashboards",
      "Target mgmt",
      "Scenario analysis",
      "Actions and Adaptations",
    ],
    families: [
      {
        label: "Sustainability",
        tone: "primary",
        products: ["Reporting & Compliance", "Supply Chain", "Climate Risk", "Carbon Performance"],
      },
      {
        label: "Energy",
        tone: "accent",
        products: ["Utility Accounting", "Energy Procurement", "Renewable Energy", "Future Product"],
      },
      {
        label: "Efficiency",
        tone: "muted",
        products: ["Energy Efficiency", "Future Product"],
      },
    ],
  },

  {
    kind: "spinehub",
    eyebrow: "Data spine",
    title: "Metering & Interval Data is the data spine",
    subtitle: "Interval-grade data feeds every granular use case on the platform.",
    center: {
      title: "Metering & Interval Data",
      items: ["Interval data capture", "M&V baselines", "Utility connectivity", "Granular signals"],
    },
    spokes: [
      {
        title: "Granular Carbon Performance",
        items: ["Hourly emissions", "Activity-based factors", "Scope 3 hotspot mapping"],
      },
      {
        title: "Energy Efficiency",
        items: ["Baseline calibration", "Verified savings", "ECM targeting"],
      },
      {
        title: "Energy Portfolio Management",
        items: ["Invoice validation", "Budgets and reforecasts", "Variance explained"],
      },
      {
        title: "Demand Response & Flexibility",
        items: ["Peak shaving", "Grid signals", "Flexibility monetization"],
      },
    ],
  },






  {

    kind: "columns",
    eyebrow: "Executive Summary",
    title: "The convergence math: 1 + 1 + 1 = 10",
    subtitle:
      "Not 1+1=3. On one platform, three converged domains multiply, unlocking value none can deliver alone.",
    columns: [
      {
        label: "The three domains",
        title: "Sustainability + Energy & Supply + Efficiency",
        tone: "primary",
        line: "Each is strong alone. Together they are exponential.",
        items: [
          "Sustainability: carbon inventory, disclosure and targets",
          "Energy and Supply: procurement, contracts and invoices",
          "Efficiency: ECM pipeline, budgets and verified savings",
        ],
      },


      {
        label: "What only convergence unlocks",
        title: "Exponential value",
        tone: "accent",
        line: "Combinations no standalone product can deliver.",
        items: [
          "Sustainability + Energy & Supply: disclosures wired to live invoices and contracts",
          "Energy & Supply + Efficiency: budgets that already reflect every ECM in the pipeline",
          "Efficiency + Sustainability: closed loop M&V from carbon goal to verified savings",
          "All three + AI agents: decision ready answers across the whole estate, in minutes",
        ],
      },
    ],
  },


  {
    kind: "familymap",
    eyebrow: "Convergence in practice",
    titleLead: "We're Building",
    titleHighlight: "One",
    titleRest: "AI-Native Platform with Multiple Connected Products",
    brandLead: "RESOURCE",
    brandStrong: "ADVISOR",
    platformLayer: "All products run on the same AI-native RA+ platform layer",
    families: [
      {
        label: "Sustainability",
        tone: "primary",
        products: ["Carbon Performance", "Supply Chain", "Reporting & Compliance", "Climate Risk"],
      },
      {
        label: "Energy & Efficiency",
        tone: "accent",
        products: [
          "Energy Efficiency",
          "Capital Asset Planning",
          "Metering & Interval Data",
          "Energy Portfolio Management",
          "Utility Data Management",
          "Budget & Tariff Intelligence",
          "Sourcing & Procurement",
          "PPAs & EACs",
        ],
      },
    ],
  },


  {
    kind: "familymap",
    eyebrow: "Convergence in practice",
    titleLead: "We're Building",
    titleHighlight: "One",
    titleRest: "AI-Native Platform with Multiple Connected Products",
    brandLead: "RESOURCE",
    brandStrong: "ADVISOR",
    platformLayer: "All products run on the same AI-native RA+ platform layer",
    families: [
      {
        label: "Sustainability",
        tone: "primary",
        products: ["Carbon Performance", "Supply Chain", "Reporting & Compliance", "Climate Risk"],
      },
      {
        label: "Energy",
        tone: "accent",
        subfamilies: [
          {
            label: "Energy Optimization",
            products: [
              "Metering & Interval Data",
              "Audit Digitization & ECMs",
              "Capital Asset Planning",
            ],
          },
          {
            label: "Portfolio Management",
            products: [
              "Utility Data Management",
              "Budget & Tariff Intelligence",
              "Sourcing & Procurement",
              "PPAs & EACs",
              "Energy Risk Management",
            ],
          },
        ],
      },
    ],
  },




  {
    kind: "section",
    number: "00",
    eyebrow: "Product strategy",
    title: "The product strategy on one board",
    subtitle: "What we are building, in what order, and the visual roadmap that holds it together.",
  },


  {
    kind: "columns",
    eyebrow: "Strategy",
    title: "Three moves, one platform",
    subtitle: "Every roadmap item in this deck serves one of three strategic moves. Nothing else gets funded.",
    columns: [
      {
        label: "",
        title: "Own the data spine",
        line: "Built once, inherited by every product",
        tone: "primary",
        items: [
          "One hierarchy, one user workflow, one analytics engine",
          "Ingestion, transformation and data quality as a shared service",
          "Lineage, evidence and audit trail on every number",
          "Roughly a third of delivery capacity reserved for the core",
        ],
      },
      {
        label: "",
        title: "Cover the full sustainability and energy agenda",
        line: "From fragmented data to decision grade energy, efficiency and sustainability coverage",
        tone: "accent",
        items: [
          "Scope 1, 2 and 3 closed out to a consultant grade inventory",
          "Supply chain emissions and product level carbon footprint",
          "Climate risk priced in financial terms, not risk scores",
          "Disclosure automated from the same governed inventory",
        ],
      },
      {
        label: "",
        title: "Turn data into decisions",
        line: "AI native, from sustainability reporting to energy and efficiency action",
        tone: "warn",
        items: [
          "Sera guidance across sustainability, energy and efficiency workflows",
          "Scenario analysis, initiatives and actions management",
          "Energy, efficiency and carbon planned in one place",
          "Leadership grade outputs, assured and repeatable",
        ],
      },
    ],
  },


  {
    kind: "timeline",
    eyebrow: "Visual roadmap",
    title: "One platform, three years of compounding value",
    subtitle: "High level shape of the strategy. Dates are firm through 2026, directional beyond.",
    years: ["2026", "2027", "2028"],
    groups: [
      {
        label: "Core platform",
        tone: "primary",
        rows: [
          { title: "Shared hierarchy and factors", start: 2, end: 5, ga: 5, continuous: true },
          { title: "Ingestion and data quality", start: 3, end: 7, mvp: 4, continuous: true },
          { title: "Lineage, evidence and audit trail", start: 5, end: 9, continuous: true },
          { title: "Enterprise scale and AI services", start: 8, continuous: true },
        ],
      },
      {
        label: "Sustainability products",
        tone: "accent",
        rows: [
          { title: "Carbon Performance inventory", start: 2, end: 6, mvp: 3, ga: 6, continuous: true },
          { title: "Supply chain and PCF", start: 3, end: 8, ga: 8, continuous: true },
          { title: "Configure, collect, disclose", start: 3, end: 7, mvp: 5, continuous: true },
          { title: "Climate risk to value at risk", start: 4, end: 9, mvp: 6, continuous: true },
        ],
      },
      {
        label: "Convergence",
        tone: "warn",
        rows: [
          { title: "Plan to execution", start: 5, end: 9, continuous: true },
          { title: "Energy and carbon converged", start: 7, end: 11, continuous: true },
          { title: "Autonomous decision support", start: 9, continuous: true },
        ],
      },
    ],
  },


  {
    kind: "bets",
    eyebrow: "Where we place the bets",
    title: "What we fund, what we defer",
    subtitle: "Sequencing is the strategy. The core is funded first because everything else depends on it.",
    bets: [
      {
        title: "Fund now",
        line: "2026 commitments already ranked and capacity confirmed",
        items: [
          "Core platform foundations",
          "Carbon inventory depth and defensibility",
          "Supply chain migration off legacy",
          "Reporting foundations for the CSRD cycle",
        ],
      },
      {
        title: "Fund next",
        line: "2027, gated on the core landing",
        items: [
          "Product level carbon footprint and supplier action",
          "Value at risk and adaptation planning",
          "AI assisted disclosure and assurance",
          "Rebaselining and method transparency",
        ],
      },
      {
        title: "Deliberately defer",
        line: "Directional until ranked and capacity confirmed",
        items: [
          "Specialised standards beyond core demand",
          "Domain specific point solutions",
          "Anything that forks the shared data model",
          "Scale work ahead of proven demand",
        ],
      },
    ],
  },

  {
    kind: "section",
    number: "02",
    eyebrow: "Agenda item 2",
    title: "The market and the competition",
    subtitle: "Who we are up against, where we win, and how we make RA+ easier to buy.",
  },

  {
    kind: "bets",
    eyebrow: "Market context | Analyst evidence",
    title: "The market moved from net zero at all costs to business value at all times",
    subtitle:
      "What independent analysts published for 2026 and beyond, and why it validates a converged energy, efficiency and sustainability platform.",
    bets: [
      {
        title: "Energy",
        line: "Resilience is now the buying trigger",
        items: [
          "Verdantix 2026 predictions: focus shifts from net zero at all costs to business value at all times, with outage avoidance and efficiency first",
          "64 percent of corporate real estate respondents rate enhanced energy monitoring and control a priority in the 2026 Verdantix survey",
          "Insurance and uptime pressure: premiums up 88 percent over five years, insurers now asking for resilience measures",
          "Energy transition programme management is called out as a market heading towards 1 billion dollars by 2030",
        ],
      },
      {
        title: "Decarbonization",
        line: "Resilient decarbonization is the new frame",
        items: [
          "Verdantix positions resilient decarbonization as linking carbon reduction with energy reliability and cost stability",
          "Emissions only strategies are judged inadequate against operational, financial and regulatory risk",
          "Schneider Electric is profiled by Verdantix as reframing decarbonization through a resilience lens across hardware, software and services",
          "This is exactly the cobenefit logic behind our ECM library and recommendations",
        ],
      },
      {
        title: "Supply chain",
        line: "Transparency and orchestration win the budget",
        items: [
          "Verdantix future of supply chain sustainability: investment concentrates on data transparency and orchestration",
          "Supply chain teams become strategic partners, raising these decisions to C level",
          "Multi tier supplier data accuracy and timeliness is the enabling capability, not scorecards alone",
          "Long term direction is transparency plus AI enabled decision support, which matches our 2027 supplier bets",
        ],
      },
    ],
    note: "Sources: Verdantix Market Insight 10 Predictions For Energy Leaders In 2026 And Beyond (January 2026), Strategic Focus The Rise Of Resilient Decarbonization (November 2025), Strategic Focus Building The Business Case For Energy Resilience, Future Of Supply Chain Sustainability (January 2026), Powering Resilient Decarbonization With Schneider Electric. Licensed analyst content, summarized for internal board use.",
  },




  {
    kind: "table",
    eyebrow: "Competitive landscape",
    title: "One platform. $1B+ of venture backed rivals.",
    subtitle:
      "They each raised hundreds of millions for single point tools. We unify carbon, energy and efficiency, at Schneider scale.",
    headers: ["Company", "Total funding raised", "Source"],
    rows: [
      ["Arcadia", "~$566M", "arcadia.com"],
      ["osapiens", "~$247M", "osapiens.com"],
      ["Watershed", "~$185M", "watershed.com"],
      ["Deepki", "~$177M", "deepki.com"],
      ["EnergyCAP", "Undisclosed", "energycap.com, one PE round"],
      ["Top rivals combined", "~$1.2B+ raised", "Our advantage: one platform, one data spine, at Schneider scale"],
    ],
  },


  {
    kind: "competitor",
    eyebrow: "Competitive position | September 2026",
    title: "RA+ competes on breadth and convergence, not a point solution feature race",
    subtitle:
      "Public pricing is not disclosed across the peer set. The decision therefore turns on scope, AI embedded in workflows, and the cost of integrating multiple platforms.",
    headers: ["Platform", "Price", "Sustainability scope", "AI maturity", "Strategic position"],
    rows: [
      {
        company: "RA+",
        price: "Enterprise quote",
        scope: "Broadest: carbon, supply chain, reporting, climate risk, energy and efficiency",
        ai: "Embedded, scaling",
        position: "One data spine plus advisory depth",
        featured: true,
      },
      {
        company: "Watershed",
        price: "Not publicly disclosed",
        scope: "Broad sustainability: carbon, disclosure, decarbonization and supply chain",
        ai: "Advanced",
        position: "Strongest AI-native sustainability challenger",
      },
      {
        company: "osapiens",
        price: "Custom quote",
        scope: "Broad ESG compliance with deep supplier and product regulation coverage",
        ai: "Embedded",
        position: "EU compliance and supplier intelligence specialist",
      },
      {
        company: "Arcadia",
        price: "Custom quote",
        scope: "Focused: utility data, energy intelligence and Scope 1 and 2 enablement",
        ai: "Expanding",
        position: "Deep energy data infrastructure",
      },
      {
        company: "Deepki",
        price: "Not publicly disclosed",
        scope: "Focused: real estate ESG, energy performance and climate risk",
        ai: "Expanding",
        position: "Deep built-environment specialization",
      },


    ],
    takeaway:
      "Win where clients value one accountable platform across sustainability, energy and efficiency. Close the gap on visible AI workflow maturity and prove lower total cost through shared data, calculations and assurance.",
    source:
      "Public vendor materials reviewed September 2026. Price indicates public transparency and buying model, not relative contract value. AI maturity reflects evidenced product capabilities, not vendor claims alone.",
  },


  {
    kind: "roadmap2028",
    badge: "Competitive roadmap | 2026 to 2028",
    title: "Where we lead, and where rivals catch up",
    subtitle:
      "This comparison focuses on sustainability rivals; energy management competitors are covered separately. Our three year plan against the direction of travel visible in competitor public product roadmaps and market commentary. Competitor columns are directional, not committed dates.",
    horizons: [
      { period: "2026", title: "Foundations" },
      { period: "2027", title: "Depth and trust" },
      { period: "2028 and beyond", title: "Scale and intelligence" },
    ],
    lanes: [
      {
        label: "RA+",
        tone: "primary",
        milestones: [
          "One data spine: shared hierarchy, factors and calculation engine, plus consultant grade inventory",
          "Priced climate risk, product linked transport, cross product disclosure and AI assisted inventory",
          "Converged sustainability, energy and efficiency decisioning on one governed platform",
        ],
      },
      {
        label: "Watershed",
        tone: "accent",
        milestones: [
          "AI native carbon and disclosure workflows already strong",
          "Likely to extend supply chain depth and assurance grade evidence",
          "Pressure point: they close the AI experience gap before we close the breadth gap",
        ],
      },
      {
        label: "osapiens",
        tone: "accent",
        milestones: [
          "Deep EU regulatory and supplier compliance coverage",
          "Expected expansion into product level and broader carbon reporting",
          "Pressure point: compliance breadth becomes table stakes across the market",
        ],
      },
      {
        label: "Arcadia and Deepki",
        tone: "muted",
        milestones: [
          "Strong energy data and real estate ESG positions",
          "Expected move upward into carbon and risk reporting adjacent to their data",
          "Pressure point: energy data advantage narrows if we do not exploit ours first",
        ],
      },
    ],
    drivers: [
      {
        title: "We lead on convergence",
        line: "No rival combines sustainability, energy and efficiency on one governed data spine with advisory depth.",
      },
      {
        title: "We lead on priced risk",
        line: "Value at risk expressed in financial terms and flowing into disclosure is a genuine wedge.",
      },
      {
        title: "They catch up on AI experience",
        line: "AI assisted workflows are the fastest moving area. Our 2027 window is where the gap either closes or widens.",
      },
      {
        title: "They catch up on breadth",
        line: "Compliance and supplier coverage commoditise. Breadth alone will not defend us after 2027.",
      },
    ],
    note:
      "Board implication: fund the spine and the AI assisted layer in 2026 and 2027, while the convergence and priced risk advantages are still unique. Competitor timing is directional, based on public materials reviewed September 2026.",
  },


  {
    kind: "columns",
    eyebrow: "Honest read | Competitive",
    title: "Why we win, and why we might lose",
    subtitle: "The board should hold both sides of this argument at the same time.",
    columns: [
      {
        label: "Why we win",
        title: "Structural advantages",
        tone: "primary",
        items: [
          "One accountable platform across sustainability, energy and efficiency",
          "One data spine, so evidence and calculations are reused, not rebuilt",
          "Schneider scale, advisory depth and existing enterprise relationships",
          "Total cost argument that goes beyond a single license price",
        ],
      },
      {
        label: "Why we win",
        title: "Client proof points to build",
        tone: "accent",
        items: [
          "Cross-product adoption inside strategic accounts",
          "Shorter reporting cycles versus fragmented tooling",
          "Traceable, reproducible AI-assisted decisions",
          "Displacement of point solutions at renewal",
        ],
      },
      {
        label: "Why we might lose",
        title: "Where we are exposed",
        tone: "warn",
        items: [
          "Specialists look sharper in a single visible domain",
          "AI-native challengers move faster on workflow polish",
          "Breadth can read as complexity during evaluation",
          "Migration and data quality slow the first proof point",
        ],
      },
      {
        label: "Why we might lose",
        title: "What we must not claim",
        tone: "muted",
        items: [
          "A price advantage without matched-account evidence",
          "Feature parity in every specialist domain",
          "AI maturity that is not visible in the product",
          "Directional horizons presented as commitments",
        ],
      },
    ],
    note: "The winning position is integrated outcomes with visible AI, not a feature-by-feature race.",
  },

  {
    kind: "features",
    eyebrow: "Capability position: Carbon Performance",
    title: "Carbon Performance: leading on energy grade data, on parity on the inventory",
    subtitle: "Capability by capability, where we lead the market, where we match it, and where we are still closing a gap.",
    rows: [
      {
        capability: "Energy and utility data",
        detail: "Metered energy, EAC and PPA management fed by the Schneider energy expertise.",
        position: "Market leading",
        benchmark: "Carbon only vendors buy or infer this data instead of owning the meter relationship.",
      },
      {
        capability: "Scope 1, 2 and 3 inventory",
        detail: "Consultant grade, audit ready inventory across all scopes with per gas breakdown.",
        position: "On parity",
        benchmark: "Table stakes for every enterprise carbon vendor benchmarked by Verdantix.",
      },
      {
        capability: "Emission factors and method depth",
        detail: "Q4 2026 wedge: factor coverage, method transparency per data point, rebaselining.",
        position: "Closing gap",
        benchmark: "Leaders already expose method and factor lineage at data point level.",
      },
      {
        capability: "AI assistance",
        detail: "Sera brought forward to Q4 2026 for carbon inventory tasks.",
        position: "Closing gap",
        benchmark: "AI copilots are now a headline claim across the benchmarked field.",
      },
      {
        capability: "Decarbonisation planning",
        detail: "Advanced scenario analysis and ECM library with energy and carbon cobenefits.",
        position: "Market leading",
        benchmark: "Few carbon vendors can price an efficiency measure and its carbon effect together.",
      },
      {
        capability: "Assurance and governance",
        detail: "Boundaries, approvals and audit trail on the shared inventory.",
        position: "On parity",
        benchmark: "Expected by CSRD ready buyers.",
      },
    ],
    takeaway: "Our differentiation is energy grade data and cobenefit planning. The Q4 factor and method work is what removes the last credibility gap.",
    source: "Source: RA+ 2026 and 2027 roadmap, competitor public product pages (Watershed, osapiens, Sphera, Persefoni, Arcadia, Deepki).",
  },

  {
    kind: "features",
    eyebrow: "Capability position: Supply Chain",
    title: "Supply Chain: strong network reach, still closing the automated PCF gap",
    subtitle: "The most contested product line in the market, and the one where our 2027 bets matter most.",
    rows: [
      {
        capability: "Supplier engagement reach",
        detail: "Built on Zeigo Hub heritage: campaigns at scale, structured supplier education programs and learning paths.",
        position: "Market leading",
        benchmark: "Reach at this scale is rare outside the largest platforms.",
      },
      {
        capability: "Product carbon footprint",
        detail: "Light PCF calculator in 2027 H1, deeper PCF after.",
        position: "Behind",
        benchmark: "osapiens and Watershed market BoM driven, largely automated PCF creation today.",
      },
      {
        capability: "Category 1 and 4 data into the inventory",
        detail: "Supplier and transport data flows straight into the shared carbon inventory.",
        position: "Market leading",
        benchmark: "Most rivals move this data between separate tools.",
      },
      {
        capability: "Data quality assurance",
        detail: "Improved data quality assurance and scoring on collected supplier data.",
        position: "On parity",
        benchmark: "Standard across the benchmarked field.",
      },
      {
        capability: "Supplier abatement",
        detail: "Guided decarbonisation and supplier action, sequenced for 2027.",
        position: "Closing gap",
        benchmark: "Leaders already market supplier abatement programmes, not just collection.",
      },
      {
        capability: "Upstream and downstream transport",
        detail: "Category 4 and 9 product linked transport in 2027 H1.",
        position: "On parity",
        benchmark: "Covered by logistics focused rivals.",
      },
    ],
    takeaway: "We win on reach and on one inventory. PCF automation is the single capability where we are visibly behind and it needs protected capacity.",
    source: "Source: RA+ 2026 and 2027 roadmap, competitor public product pages (Watershed, osapiens, Sphera, Persefoni).",
  },

  {
    kind: "features",
    eyebrow: "Capability position: Reporting and Compliance",
    title: "Reporting and Compliance: parity is the target, speed of standing up is the risk",
    subtitle: "This is a crowded, regulation driven segment. Credibility comes from evidence and lineage, not feature count.",
    rows: [
      {
        capability: "Framework library",
        detail: "CSRD foundations built in 2026, wider frameworks after.",
        position: "Closing gap",
        benchmark: "Compliance specialists ship broad framework libraries out of the box.",
      },
      {
        capability: "Indicator management",
        detail: "Indicator library foundation, approval hierarchies and bulk assignment in Q4 2026.",
        position: "On parity",
        benchmark: "Expected capability in every enterprise disclosure tool.",
      },
      {
        capability: "Data ingestion and transformation",
        detail: "Advanced ingestion and transformation rules on the shared core.",
        position: "On parity",
        benchmark: "Comparable to the benchmarked field.",
      },
      {
        capability: "Lineage and audit evidence",
        detail: "Evidence and audit trail inherited from the platform, not rebuilt per report.",
        position: "Market leading",
        benchmark: "Verdantix buyers name lineage and auditability as the top selection driver.",
      },
      {
        capability: "Cross product data reuse",
        detail: "Receives data from every other product to facilitate disclosure.",
        position: "Market leading",
        benchmark: "Point solutions must import from third party tools.",
      },
      {
        capability: "AI assisted disclosure drafting",
        detail: "Directional for 2027.",
        position: "Behind",
        benchmark: "Already marketed by several rivals.",
      },
    ],
    takeaway: "We should not fight a framework count race. We win by proving where every number came from and reusing data no rival holds.",
    source: "Source: RA+ 2026 and 2027 roadmap, competitor public product pages (Watershed, Sphera, Deepki).",
  },

  {
    kind: "features",
    eyebrow: "Capability position: Climate Risk",
    title: "Climate Risk: physical risk depth is good, financial value at risk is the differentiator",
    subtitle: "The segment where connection to the rest of the platform decides whether the product pays off.",
    rows: [
      {
        capability: "Asset and hazard coverage",
        detail: "Eclr becoming a full self serve product with scalable performance.",
        position: "On parity",
        benchmark: "Specialist providers and data partnerships cover hazards broadly.",
      },
      {
        capability: "Value at risk in financial terms",
        detail: "ClimVar, value at risk expressed in financial terms, in 2027 H1.",
        position: "Market leading",
        benchmark: "Most rivals stop at hazard scores rather than a priced exposure.",
      },
      {
        capability: "Scenario analysis",
        detail: "Scenario analysis and adaptation actions on the shared action model.",
        position: "On parity",
        benchmark: "Standard in the benchmarked field.",
      },
      {
        capability: "Adaptation planning",
        detail: "One action model shared with decarbonisation planning.",
        position: "Market leading",
        benchmark: "Rivals separate mitigation and adaptation into different tools.",
      },
      {
        capability: "Risk into disclosure",
        detail: "Risk data flows into disclosures and is turned into financial values.",
        position: "Market leading",
        benchmark: "Usually a manual handoff between vendors.",
      },
      {
        capability: "Beyond owned assets",
        detail: "Extend climate risk to suppliers and the value chain: a whitespace opportunity in 2027.",
        position: "Market leading",
        benchmark: "Supply chain risk tools exist, but none combine supplier exposure with climate risk and financial value at risk.",
      },
    ],
    takeaway: "Priced risk connected to disclosure is our wedge. Hazard data alone is a commodity we should buy, not build.",
    source: "Source: RA+ 2026 and 2027 roadmap and climate risk vendor public product pages (Climate X, XDI, Cotality, S&P Global Climanomics, Risilience, Bloomberg).",
  },

  {
    kind: "features",
    eyebrow: "Capability position: Strategy",
    title: "Strategy: the plan to execution gap is where we can lead outright",
    subtitle: "Few vendors connect targets, initiatives and realised performance in one governed loop.",
    rows: [
      {
        capability: "Target and pathway setting",
        detail: "Targets set against the same inventory the products use.",
        position: "On parity",
        benchmark: "Common capability.",
      },
      {
        capability: "Initiatives and actions management",
        detail: "Initiative and action management shipping with Q4 2026 scenario work.",
        position: "Market leading",
        benchmark: "Most carbon tools stop at the plan and never track execution.",
      },
      {
        capability: "Scenario and cobenefit modelling",
        detail: "Energy, carbon and cost cobenefits modelled together.",
        position: "Market leading",
        benchmark: "Requires the energy and efficiency data only we hold.",
      },
      {
        capability: "Recommendations",
        detail: "AI recommendations on the next best action, launching Q4 2026, with energy, carbon and cost cobenefits surfaced together.",
        position: "Market leading",
        benchmark: "No rival currently links next best action recommendations to energy, carbon and cost cobenefits on one platform.",
      },
      {
        capability: "Realised versus planned",
        detail: "Actual performance measured against the plan on the same data.",
        position: "Market leading",
        benchmark: "Rare outside consultancy led engagements.",
      },
      {
        capability: "Governance and scale",
        detail: "Roll out across business units on the shared hierarchy.",
        position: "On parity",
        benchmark: "Expected at enterprise scale.",
      },
    ],
    takeaway: "Strategy is where the convergence story becomes tangible. It is our clearest chance to be first, not fast follower.",
    source: "Source: RA+ 2026 and 2027 roadmap, competitor public product pages (Watershed, osapiens, Sphera, Persefoni, Arcadia, Deepki).",
  },

  {
    kind: "features",
    eyebrow: "Capability position: Core Platform",
    title: "Core Platform: the capability rivals cannot copy quickly",
    subtitle: "None of this is sold on its own. All of it decides whether every other product can lead.",
    rows: [
      {
        capability: "Shared hierarchy and ontology",
        detail: "One organisational and asset hierarchy every product inherits.",
        position: "Market leading",
        benchmark: "Multi product rivals commonly run separate models per product.",
      },
      {
        capability: "AI Intelligence layer",
        detail: "Shared AI services, agents and reasoning consumed by every product.",
        position: "Market leading",
        benchmark: "Point solutions bolt on separate AI stacks; RA+ embeds intelligence once.",
      },
      {
        capability: "Config engine, calc methods, templates",
        detail: "Configuration promoted and reused across products and clients.",
        position: "On parity",
        benchmark: "Comparable to leading platforms.",
      },
      {
        capability: "Ingestion and data quality",
        detail: "Advanced ingestion, transformation rules and quality scoring.",
        position: "On parity",
        benchmark: "Table stakes at enterprise scale.",
      },
      {
        capability: "Lineage, evidence and audit trail",
        detail: "Traceability from raw data point to disclosed number.",
        position: "On parity",
        benchmark: "Expected by enterprise buyers and available from leading platforms.",
      },
      {
        capability: "Scale and performance",
        detail: "Enterprise scale performance across the product family.",
        position: "On parity",
        benchmark: "Enterprise scale performance comparable to leading platforms.",
      },
    ],
    takeaway: "Roughly a third of capacity protected for core is what makes every product level claim on the previous slides defensible.",
    source: "Source: RA+ 2026 and 2027 roadmap, competitor public product pages (Watershed, osapiens, Sphera, Persefoni, Arcadia, Deepki).",
  },

  {
    kind: "features",
    eyebrow: "Head to head: Energy management",
    title: "RA+ Energy & Efficiency vs the energy management field",
    subtitle: "IBM Envizi, EnergyCAP, Accruent, Arcadia and Honeywell Forge each cover part of the problem. None of them take energy data all the way to carbon, sourcing, flexibility and funded action on one platform.",
    rows: [
      {
        capability: "Metering and interval data",
        detail: "Metering & Interval Data as the shared data spine: interval capture, M&V baselines, utility connectivity.",
        position: "Market leading",
        benchmark: "IBM Envizi Interval Meter Analytics and EnergyCAP both capture interval data well; Arcadia is strong on utility data infrastructure. Genuine strength across the field.",
      },
      {
        capability: "Utility data and bill management",
        detail: "Utility Data Management with bill validation, budgets, reforecasts and variance explained.",
        position: "Market leading",
        benchmark: "EnergyCAP is the bill accounting benchmark and Envizi Utility Bill Analytics is deep; Accruent ties bills to asset systems. Budget and reforecast workflows are thinner across all of them.",
      },
      {
        capability: "Energy sourcing and renewables",
        detail: "Energy Sourcing plus Renewables & EACs: procurement, EAC and PPA management fed by Schneider energy expertise.",
        position: "Market leading",
        benchmark: "Envizi and EnergyCAP report energy and emissions but do not operate sourcing, EAC or PPA workflows. Specialist EAC platforms track instruments without owning the inventory the claim lands in.",
      },
      {
        capability: "Efficiency to carbon convergence",
        detail: "Hourly emissions and ECM cobenefits connect efficiency actions straight into the carbon inventory.",
        position: "Market leading",
        benchmark: "Envizi keeps energy analytics and ESG reporting in separate modules; Honeywell Forge recommends within controlled assets only. Nobody prices energy, carbon and cost cobenefits together.",
      },
    ],
    takeaway: "The field matches us on capturing energy data. Nobody matches what we do with it: sourcing and efficiency actions that land in the same governed carbon inventory.",
    source: "Source: public product pages and documentation for IBM Envizi, EnergyCAP, Accruent, Arcadia and Honeywell Forge, reviewed September 2026, and the RA+ 2026 and 2027 roadmap.",
  },

  {
    kind: "features",
    eyebrow: "Head to head: named energy management rivals",
    title: "RA+ against the demand response, metering and SaaS energy players",
    subtitle:
      "Enel X (formerly EnerNOC), Schneider ION and Itron metering platforms, and the energy SaaS field (EnergyCAP, Arcadia, GridPoint, Uplight) each own one slice. The roadmap gap matrix at /competitor-matrix tracks the same rivals horizon by horizon.",
    rows: [
      {
        capability: "Metering and interval capture",
        detail: "Metering & Interval Data as the shared spine, fed by Schneider hardware adjacency.",
        position: "Market leading",
        benchmark: "ION and Itron metering platforms are strong at the device layer. Their analytics stop at energy, ours continues into carbon and cost.",
      },
      {
        capability: "Utility data and bill accounting SaaS",
        detail: "Utility Data Management plus Budget & Tariff Intelligence: validated bills, tariffs, budgets, variance explained.",
        position: "Market leading",
        benchmark: "EnergyCAP and Arcadia are the SaaS benchmarks on utility data. Neither carries the same data into sourcing, flexibility and disclosure.",
      },
      {
        capability: "Efficiency and asset action",
        detail: "Energy Efficiency and Capital Asset Planning turn findings into funded, tracked measures.",
        position: "Market leading",
        benchmark: "GridPoint and Uplight optimise building and customer energy. Capital planning and measure funding are outside their scope.",
      },
      {
        capability: "Sourcing, PPAs and EACs",
        detail: "Sourcing & Procurement with PPAs & EACs, priced against exposure and carbon impact.",
        position: "Market leading",
        benchmark: "Demand response and metering rivals do not sell sourcing. Sourcing specialists do not own the meter or the inventory.",
      },
      {
        capability: "One governed platform",
        detail: "Every product above runs on the same AI native RA+ platform layer, hierarchy and audit trail.",
        position: "Market leading",
        benchmark: "The named rivals are point platforms. Buying three of them still leaves the customer reconciling three data models.",
      },
    ],
    takeaway: "Each rival is credible in one lane. Our claim is the lane change: metered data that becomes tariff, flexibility, efficiency and carbon decisions without leaving the platform.",
    source: "Source: public product pages for Enel X, Itron, Schneider ION, EnergyCAP, Arcadia, GridPoint and Uplight, reviewed September 2026, plus licensed Verdantix research and the RA+ roadmap. Positions are internal assessments, not third party ratings. Horizon by horizon detail sits in the roadmap gap matrix at /competitor-matrix.",
  },





  {

    kind: "pricing",
    eyebrow: "Commercial model | Board proposal",
    title: "Platform fee plus per-product expansion: simpler to buy, clearer to scale",
    subtitle:
      "Every tier includes the core data spine and governance platform. Product modules are priced separately so expansion revenue is predictable and the convergence story pays for itself. Price points remain subject to Finance and market validation.",
    tiers: [
      {
        name: "Foundation",
        buyer: "Establish a trusted baseline",
        price: "[€ BASE PRICE] / year",
        includes: ["Platform spine and one sustainability product", "Standard onboarding and support", "Pay only for what you need to start"],
      },
      {
        name: "Enterprise",
        buyer: "Connect data, decisions and disclosure",
        price: "[€ PLATFORM FEE] + [€ PER PRODUCT FEE] / year",
        includes: ["Platform fee covers spine, governance and AI assurance", "Per-product fee for each connected product", "Recommended bundle: first 3 products included"],
        featured: true,
      },
      {
        name: "Portfolio",
        buyer: "Converge Sustainability, Energy and Efficiency",
        price: "[€ PORTFOLIO PRICE] / year",
        includes: ["Platform fee + unlimited product portfolio", "Cross-domain intelligence and APIs", "Strategic success and advisory package"],
      },
    ],
    scaleUnits: [
      { label: "Organizational scale", value: "Sites, entities and suppliers" },
      { label: "Data scale", value: "Meters, transactions and records" },
      { label: "Capability scale", value: "Products, modules and frameworks" },
      { label: "Service scale", value: "Support, advisory and assurance" },
    ],
    competitors: [
      { company: "RA+", model: "Published platform fee + per-product expansion", transparency: "Proposed: high" },
      { company: "Watershed", model: "Enterprise sales and custom proposal", transparency: "Public price not disclosed" },
      { company: "osapiens", model: "Custom quote by solution scope", transparency: "Limited" },
      { company: "Arcadia", model: "Custom enterprise and data offering", transparency: "Limited" },
      { company: "Deepki", model: "Enterprise sales and custom proposal", transparency: "Public price not disclosed" },
    ],
    decision:
      "Approve the platform-plus-product architecture and guardrails now. Validate platform fee, per-product price, bundle rules and discount authority before launch.",
    source:
      "Competitor descriptions reflect publicly visible buying models reviewed September 2026, not confidential quotes or relative contract value. RA+ prices are placeholders pending Finance approval.",
  },

  {
    kind: "journey",
    eyebrow: "Go to market | Buyer journey",
    title: "How a Fortune 500 buyer moves from one product to the whole platform",
    subtitle:
      "The commercial motion mirrors the platform strategy: land on one urgent problem, prove value fast, then expand across Sustainability, Energy and Efficiency as the data spine compounds.",
    stages: [
      {
        stage: "Stage 1 | Land",
        title: "One urgent problem",
        buyer: "A Chief Sustainability Officer faces a disclosure deadline or a Scope 3 inventory gap.",
        products: "One product, typically Carbon Performance or Reporting & Compliance.",
        value: "A consultant grade, AI driven inventory or a CSRD ready cycle in one reporting season.",
        trigger: "Regulatory deadline, audit pressure or a board level carbon commitment.",
        tone: "muted",
      },
      {
        stage: "Stage 2 | Prove",
        title: "First measurable value",
        buyer: "The same sponsor sees time to value measured in weeks, with evidence and lineage that survive audit.",
        products: "Same product, deeper adoption: scenarios, initiatives and actions on the trusted baseline.",
        value: "From reporting the footprint to actively reducing it; the sponsor becomes our internal advocate.",
        trigger: "First audit passed, first board disclosure delivered, first reduction target tracked.",
        tone: "primary",
      },
      {
        stage: "Stage 3 | Expand",
        title: "Second and third product",
        buyer: "Procurement, supply chain and energy leaders join; the data spine means no new baseline project.",
        products: "Supply Chain for supplier emissions abatement, Climate Risk for value at risk, Energy & Efficiency for metered reality.",
        value: "Category 1 and 4 flow into the CP inventory; energy and carbon cobenefits appear on one platform.",
        trigger: "Cross-functional steering committee sees one hierarchy, one evidence chain, one login.",
        tone: "primary",
      },
      {
        stage: "Stage 4 | Standardize",
        title: "Platform as the system of action",
        buyer: "CFO and board sponsor: RA+ becomes the trusted source for disclosure, decisions and capital allocation.",
        products: "Full portfolio on the Portfolio tier: platform fee plus unlimited products, cross-domain intelligence and APIs.",
        value: "One platform replaces fragmented point tools; lower total cost of ownership and priced climate risk.",
        trigger: "Multi-year enterprise agreement; RA+ named the corporate energy & sustainability system of action.",
        tone: "accent",
      },
    ],
    takeaway:
      "Every stage deepens the moat: the data spine makes each next product cheaper to adopt and harder to rip out. Value per product, energy savings, cost savings and risk reduction, sits on the value proposition page at /value-proposition.",
  },

  {
    kind: "section",
    number: "03",
    eyebrow: "Agenda item 3",
    title: "The value case and the investment",
    subtitle: "What the platform returns, what it costs, and how the board keeps control of it.",
  },

  {
    kind: "columns",
    eyebrow: "Value case",
    title: "What the value case assumes, and what breaks it",
    subtitle: "Every euro in this deck is a placeholder until Finance validates it. These are the assumptions behind those numbers.",
    columns: [
      {
        label: "Assumptions",
        title: "What we assume",
        line: "The base case rests on four assumptions the board should test.",
        items: [
          "Core platform capacity is protected at roughly one third of build",
          "Committed 2026 dates hold, 2027 remains H1 and H2 bands",
          "Cross product adoption follows the shared data spine",
          "Assurance demand keeps rising through the 2027 cycles",
        ],
        tone: "primary",
      },
      {
        label: "Sensitivity",
        title: "What moves the outcome",
        line: "Directional sensitivity, to be quantified with Finance.",
        items: [
          "Slower cross product attach: value pool lands later, not smaller",
          "Core capacity diverted to product asks: every stream slows",
          "Migration slips: disclosure cycle value shifts a full year",
          "Pricing pressure: ARR protected falls before cost removed does",
        ],
        tone: "warn",
      },
      {
        label: "Validation",
        title: "What Finance must confirm",
        line: "Named placeholders in this deck, in one list.",
        items: [
          "ARR protected and expanded",
          "Annual cost removed from the current stack",
          "Climate exposure avoided or repriced",
          "Incremental investment and payback period",
        ],
        tone: "muted",
      },
    ],
    note: "All euro figures shown elsewhere in this deck are explicit placeholders pending Finance validation.",
  },

  {
    kind: "columns",
    eyebrow: "Value case",
    title: "The people behind the plan",
    subtitle: "Capacity, ownership and the trade offs we accept to fund the core.",
    columns: [
      {
        label: "Ownership",
        title: "Who builds what",
        line: "Clear ownership per layer, no shared accountability.",
        items: [
          "Core platform team owns hierarchy, factors, engine and audit trail",
          "Product teams own outcomes on top of the core, not their own core",
          "One architecture authority arbitrates shared components",
        ],
        tone: "primary",
      },
      {
        label: "Capacity",
        title: "Where capacity goes",
        line: "Capacity is allocated before scope, not after.",
        items: [
          "Sufficient build capacity protected for the core platform",
          "Remaining capacity split across ranked product themes",
          "Unranked 2027 items stay directional until capacity is confirmed",
        ],
        tone: "accent",
      },
      {
        label: "Trade offs",
        title: "What stops or slows",
        line: "Funding the spine means saying no in public.",
        items: [
          "No net new standalone products before the core lands",
          "Bespoke customer builds routed to configuration, not code",
          "Legacy tooling sunset rather than maintained in parallel",
        ],
        tone: "muted",
      },
    ],
    note: "Hiring plan and named roles to be confirmed with People and Finance.",
  },




  {
    kind: "valuecase",
    badge: "2027 VALUE CASE",
    titleLead: "One roadmap converts trusted data into",
    titleHighlight: "enterprise value.",
    thesis:
      "RA+ compounds value across Sustainability, Energy and Efficiency: protect and expand strategic relationships, remove duplicated delivery effort, price climate exposure, and turn insight into funded action.",
    financials: [
      {
        label: "Growth and retention",
        value: "[€ ARR protected + expanded]",
        line: "A connected portfolio increases account relevance, creates cross-sell paths, and replaces point solutions with one strategic platform.",
      },
      {
        label: "Cost to serve",
        value: "[€ annual cost removed]",
        line: "Shared ingestion, calculations, evidence and AI-assisted workflows reduce duplicate build, reporting-cycle effort, and methodology hypercare.",
      },
      {
        label: "Risk and capital",
        value: "[€ exposure avoided or repriced]",
        line: "ClimVar expresses climate risk in financial terms, while scenarios and adaptation actions direct capital toward the highest-value response.",
      },
    ],
    outcomes: [
      {
        title: "One source of truth",
        line: "Consultant-grade inventories flow through targets, risk, supplier action and disclosures without reconciliation between products.",
      },
      {
        title: "Platform economics",
        line: "Core capabilities are built once and inherited across products, increasing roadmap leverage and reducing fragmented investment.",
      },
      {
        title: "Board-grade assurance",
        line: "Lineage, calculation governance and evidence make every material number reproducible, auditable and disclosure ready.",
      },
      {
        title: "Faster decisions",
        line: "AI-assisted recommendations, scenarios and value-at-risk analysis move teams from collecting data to funding action.",
      },
    ],
    validation:
      "Finance and Product to baseline three measures before investment lock: ARR protected and expanded, annual cost to serve removed, and climate exposure avoided or repriced.",
  },


  {
    kind: "costbenefit",
    eyebrow: "2027 cost-benefit case | Board proposal",
    title: "Fund the shared platform once, unlock three measurable value pools",
    subtitle:
      "The 2027 case compares incremental roadmap investment with commercial growth, operating leverage, and risk-adjusted value. All monetary amounts remain subject to Finance validation.",
    costs: [
      {
        label: "Product and platform capacity",
        value: "[€ BUILD COST]",
        items: ["Core data, calculation and AI capabilities", "Product roadmap delivery through 2027"],
      },
      {
        label: "Migration and enablement",
        value: "[€ CHANGE COST]",
        items: ["Client and Schneider Electric migrations", "Data onboarding, training and adoption"],
      },
      {
        label: "Go-to-market and assurance",
        value: "[€ LAUNCH COST]",
        items: ["Commercial readiness and packaging", "Methodology, controls and assurance"],
      },
    ],
    valuePools: [
      {
        label: "Growth and retention",
        value: "[€ ARR protected + expanded]",
        line: "Cross-sell connected products, deepen strategic relevance, and reduce displacement by point solutions.",
      },
      {
        label: "Cost to serve",
        value: "[€ annual cost removed]",
        line: "Reuse ingestion, calculations, evidence and AI workflows instead of rebuilding them product by product.",
      },
      {
        label: "Risk and capital",
        value: "[€ exposure avoided or repriced]",
        line: "Translate climate exposure into financial terms and direct adaptation capital toward the highest-value response.",
      },
    ],
    equation: "[€ TOTAL VALUE] − [€ INCREMENTAL COST] = [€ NET VALUE]  |  [X.X× BENEFIT / COST]  |  [XX-MONTH PAYBACK]",
    gates: ["Finance baseline", "Benefits owners", "Quarterly evidence", "Scale or stop gates"],
    decision:
      "Approve the investment envelope only with named benefit owners, agreed baselines, and quarterly release gates tied to realized value.",
  },


  {
    kind: "columns",
    eyebrow: "Evidence | Proof points",
    title: "The proof is already in named accounts, not in a forecast",
    subtitle:
      "Live commitments, cross-product usage and cost comparison, mapped to the same three value pools used in the cost-benefit case. Monetary amounts stay as placeholders until Finance validates them.",
    columns: [
      {
        label: "Growth and retention",
        title: "Named strategic accounts",
        tone: "primary",
        line: "Committed Q4 2026 delivery dates, not pipeline",
        items: [
          "Accor: portfolio data experience, October to December 2026",
          "Schneider Electric: October to December 2026, then the migration and CSRD cycle in Q1 2027",
          "Newell Brands and Sanofi: November 2026",
          "Schneider Electric inventory close: 31 December 2026",
        ],
      },
      {
        label: "Platform economics",
        title: "Cross-product adoption",
        tone: "accent",
        line: "One spine already consumed by more than one product",
        items: [
          "Carbon Performance owns the inventory every other product consumes",
          "Supply Chain feeds categories 1 and 4 into the CP inventory",
          "Reporting and Compliance receives data from every other product to facilitate disclosure",
          "Climate Risk data flows into R&C disclosures and is turned into financial values",
        ],
      },
      {
        label: "Cost to serve",
        title: "TCO comparison",
        tone: "accent",
        line: "Separate tools versus one governed platform",
        items: [
          "Today: duplicated ingestion, factors and calculation logic per tool, [€ current stack cost]",
          "With RA+: built once in Core, inherited by six product areas, [€ platform cost]",
          "Removed: reconciliation between tools, repeated audit evidence, per-tool integration and hypercare",
          "Net: [€ annual cost removed], the same figure carried in the cost-benefit case",
        ],
      },
      {
        label: "Guardrail",
        title: "What is proof and what is not",
        tone: "warn",
        line: "Keep the board honest about the evidence base",
        items: [
          "Account dates and cross-product dependencies are committed roadmap facts",
          "Adoption breadth is a leading indicator, reported separately from realized value",
          "All euro amounts require the Finance baseline agreed at Gate 1",
        ],
      },
    ],
  },


  {
    kind: "columns",
    eyebrow: "Capital allocation",
    title: "Where the incremental investment goes",
    subtitle: "Indicative shares of the incremental envelope. Amounts remain subject to Finance validation.",
    columns: [
      {
        label: "Pool 01",
        title: "Product and platform capacity",
        tone: "primary",
        line: "[% of envelope] | [€ amount to validate]",
        items: ["Core data spine, ontology and calculation governance", "Product delivery across the six areas", "AI workflows built on governed context"],
      },
      {
        label: "Pool 02",
        title: "Migration and enablement",
        tone: "accent",
        line: "[% of envelope] | [€ amount to validate]",
        items: ["Schneider Electric migration and CSRD cycle", "Client onboarding and data quality uplift", "Delivery tooling that reduces hypercare drag"],
      },
      {
        label: "Pool 03",
        title: "Go-to-market and assurance",
        tone: "accent",
        line: "[% of envelope] | [€ amount to validate]",
        items: ["Lighthouse accounts and proof packs", "Commercial model rollout and enablement", "Audit, assurance and evidence readiness"],
      },
      {
        label: "Guardrail",
        title: "Protected core share",
        tone: "warn",
        line: "Roughly one third of capacity reserved for Core Platform",
        items: ["Core capacity is portfolio capacity, not overhead", "It cannot be traded away product by product", "Breaking it delays every downstream outcome"],
      },
    ],
    note: "Percentages and amounts are placeholders until Finance confirms the envelope.",
  },


  {
    kind: "board",
    eyebrow: "Governance | Decision calendar",
    title: "Investment gates through 2027",
    subtitle: "Each gate carries an explicit stop, adjust or scale decision.",
    lanes: [
      {
        label: "Gate 1",
        period: "Q4 2026",
        tone: "primary",
        items: [
          { name: "Q4 scope lock", note: "Ranked cut line held at agreed capacity" },
          { name: "Finance baselines set", note: "ARR, cost to serve and exposure methods agreed" },
          { name: "Decision", note: "Approve the 2027 investment envelope" },
        ],
      },
      {
        label: "Gate 2",
        period: "H1 2027",
        tone: "accent",
        items: [
          { name: "Migration and CSRD cycle complete", note: "Schneider Electric cycle delivered" },
          { name: "Data quality thresholds met", note: "Core Platform readiness evidenced" },
          { name: "Decision", note: "Scale, adjust or stop the next tranche" },
        ],
      },
      {
        label: "Gate 3",
        period: "H2 2027",
        tone: "accent",
        items: [
          { name: "End-to-end workflow adopted", note: "At least one connected client journey live" },
          { name: "Lighthouse evidence published", note: "Cross-product adoption and TCO proof" },
          { name: "Decision", note: "Confirm or re-cut the 2028 direction" },
        ],
      },
      {
        label: "Gate 4",
        period: "2028 planning",
        tone: "muted",
        items: [
          { name: "Realized value review", note: "Finance confirms measured contribution" },
          { name: "Portfolio re-rank", note: "Annual capacity and sequencing decision" },
          { name: "Decision", note: "Fund the next horizon against proof points" },
        ],
      },
    ],
    note: "No gate is passed on plan alone; each requires evidence signed off by the named owner.",
  },


  {
    kind: "table",
    eyebrow: "Governance | Board scorecard",
    title: "How the board will measure the roadmap",
    subtitle: "One owner, one baseline and one reporting rhythm per measure. Values are set once Finance validates the baselines.",
    headers: ["Measure", "What it proves", "Owner", "Baseline", "Reported"],
    rows: [
      ["ARR protected and expanded", "Growth and retention from platform breadth", "Sales and Finance", "[baseline to validate]", "Quarterly"],
      ["Cross-product adoption", "Clients using one governed spine across domains", "Product", "[baseline to validate]", "Quarterly"],
      ["Cost to serve removed", "Duplicated ingestion, calculation and assurance effort", "Delivery and Finance", "[baseline to validate]", "Quarterly"],
      ["Reporting cycle time", "Faster, lower-friction disclosure cycles", "Reporting and Compliance", "[baseline to validate]", "Per cycle"],
      ["Data quality and lineage", "Trusted inputs before scaled AI", "Core Platform", "[threshold to agree]", "Monthly"],
      ["Exposure repriced", "Climate risk expressed in financial terms", "Risk and Finance", "[method to approve]", "Half-yearly"],
    ],
    note: "Leading adoption signals are reported separately from realized financial outcomes to avoid double counting.",
  },



  {
    kind: "section",
    number: "03",
    eyebrow: "Agenda item 3",
    title: "RA+ 2026 and 2027 sustainability family roadmap by product",
    subtitle: "Carbon Performance, Supply Chain, Reporting and Compliance, Climate Risk, and the core platform they all stand on.",
  },


  {
    kind: "columns",
    eyebrow: "Products",
    title: "Four products, one carbon and sustainability data model",
    subtitle: "Each product owns a customer outcome. All four read and write the same governed baseline.",
    columns: [
      {
        label: "",
        title: "Carbon Performance",
        tone: "primary",
        line: "Consultant grade and AI assisted GHG inventory across Scope 1, 2 and 3.",
        items: [
          "2026: emission factor and calculation depth",
          "2027: add more Sera use cases, governance, assurance",
          "Owns the inventory every other product consumes",
        ],
      },
      {
        label: "",
        title: "Supply Chain",
        tone: "accent",
        line: "Supplier engagement and product level carbon footprint.",
        items: [
          "2026: complete the RA+ migration, close sponsor gaps",
          "2027: multi tier visibility and supplier emissions abatement",
          "Feeds category 1 and 4 into the CP inventory",
        ],
      },
      {
        label: "",
        title: "Reporting and Compliance",
        tone: "warn",
        line: "Disclosure ready output from the same numbers.",
        items: [
          "2026: build foundations for CSRD reporting",
          "2027: SE migrated off RA Classic, AI drafted disclosures",
          "Data receiver from every other product to facilitate disclosure.",
        ],
      },
      {
        label: "",
        title: "Climate Risk",
        tone: "muted",
        line: "Forward looking physical and transition exposure.",
        items: [
          "2026: Eclr turned to a full self serve product with scalable performances",
          "2027: value at risk, scenario analysis and adaptation actions",
          "Risk data flows into R&C disclosures and are turned into financial values",
        ],
      },
    ],
  },


  // ---------- Executive goals summary ----------
  {
    kind: "columns",
    eyebrow: "Executive Summary",
    title: "Every goal across the RA+ roadmap, part one",
    subtitle: "Four goals per product, sequenced Now, Next, Later inside each product section that follows.",
    columns: [
      {
        label: "Carbon Performance",
        title: "A consultant grade and AI driven inventory",
        tone: "primary",
        items: [
          "Factors and calculation depth: make the number defensible",
          "Inventory coverage: close the Scope 3 gaps",
          "Boundaries and governance: consultant grade control",
          "AI and decision support: from inventory to action",
        ],
      },
      {
        label: "Supply Chain",
        title: "From migration to supplier action",
        tone: "accent",
        items: [
          "Zeigo Hub migration and core experience: land in RA+ properly",
          "Product carbon footprint: the commercial gap closer",
          "Data collection campaigns: ask suppliers the right questions",
          "Data quality assurance: numbers that survive review",
        ],
      },
      {
        label: "Reporting and Compliance",
        title: "Stand up, migrate, automate",
        tone: "warn",
        items: [
          "Framework Library: entry point and scope",
          "Indicator Management: foundation of data management",
          "Disclosure Management: reporting cycle workspace",
          "Migration and assurance: prove it on Schneider first",
        ],
      },
    ],
  },


  {
    kind: "columns",
    eyebrow: "Executive Summary",
    title: "Every goal across the RA+ roadmap, part two",
    subtitle: "The remaining three products, same Now, Next, Later sequencing inside each section.",
    columns: [
      {
        label: "Climate Risk",
        title: "From asset register to priced risk",
        tone: "muted",
        items: [
          "Asset foundation: shared model before analytics",
          "Exposure: first defensible risk output",
          "Scenarios and value at risk: decision grade analysis",
          "Adaptation: from risk to response",
        ],
      },
      {
        label: "Strategy",
        title: "Close the plan to execution gap",
        tone: "primary",
        items: [
          "Planning foundation: targets, scenarios, initiatives",
          "Actions execution: programs, projects, purchases",
          "Recommendations: Sera guided next steps",
          "Scale and governance: enterprise structures",
        ],
      },
      {
        label: "Core Platform",
        title: "Built once, inherited by all",
        tone: "accent",
        items: [
          "Ingestion and quality: data in, trusted",
          "Ontology and calculation: one model, one engine",
          "Application and analytics: one experience",
          "Trust and reach: enterprise ready",
        ],
      },
    ],
  },


  {
    kind: "columns",
    eyebrow: "Executive Summary",
    title: "The 24 goals roll up into four moves",
    subtitle: "Read top to bottom, this is the RA+ thesis for 2026 and 2027.",
    columns: [
      {
        label: "Move 1",
        title: "Make the data trusted",
        tone: "primary",
        line: "One governed backbone.",
        items: [
          "Core ingestion, quality and ontology (Platform)",
          "Emission factors and calculation depth (Carbon)",
          "Boundaries, rebaselining and governance (Carbon)",
          "Supplier data quality assurance (Supply Chain)",
        ],
      },
      {
        label: "Move 2",
        title: "Cover the full sustainability and energy agenda",
        tone: "accent",
        line: "No material sustainability or energy domain left disconnected.",
        items: [
          "Scope 3 category coverage to a full inventory (Carbon)",
          "Product carbon footprint and transport (Supply Chain)",
          "Supplier campaigns that feed the baseline (Supply Chain)",
          "Asset register and exposure across the estate (Climate Risk)",
        ],
      },
      {
        label: "Move 3",
        title: "Decide and act",
        tone: "warn",
        line: "From measurement to funded action.",
        items: [
          "Scenarios, value at risk and adaptation (Climate Risk)",
          "Targets, initiatives and execution (Strategy)",
          "Sera recommendations and next steps (Strategy)",
          "AI assisted inventory and planning (Carbon)",
        ],
      },
      {
        label: "Move 4",
        title: "Prove and disclose",
        tone: "muted",
        line: "Audit ready output, enterprise scale.",
        items: [
          "Frameworks, indicators and disclosures (R&C)",
          "Schneider Electric migration as proof (R&C)",
          "Audit trail and evidence lineage (Platform)",
          "Enterprise readiness and reach (Platform)",
        ],
      },
    ],
  },



  {
    kind: "section",
    number: "02",
    eyebrow: "Agenda item 2",
    title: "The 2026 and 2027 roadmap on one board",
    subtitle: "Now is Q3 2026, Next is Q4 2026, Later is 2027 and beyond.",
  },



  {
    kind: "timeline",
    eyebrow: "Executive Summary",
    title: "One platform, three years of converging value",
    subtitle:
      "Sustainability and Energy & Efficiency on one board, both supported by the Platform. Indicative MVP and Full GA quarters.",
    years: ["2026", "2027", "2028"],
    groups: [
      {
        label: "Sustainability",
        tone: "primary",
        rows: [
          { title: "RA+ Carbon Performance", start: 0, mvp: 1.4, ga: 3.4, continuous: true },
          { title: "RA+ Supply Chain", start: 0, ga: 0.5, continuous: true },
          { title: "RA+ Climate Risk", start: 0, mvp: 1.4, ga: 4.2, continuous: true },
          { title: "RA+ Reporting & Compliance", start: 1, mvp: 4.2, ga: 5.4, continuous: true },
        ],
      },
      {
        label: "Energy & Efficiency",
        tone: "muted",
        rows: [
          { title: "Energy Efficiency", start: 2, mvp: 5.4, ga: 8.4, continuous: true },
          { title: "Capital Asset Planning", start: 4, mvp: 7.4, ga: 9.4, continuous: true },
          { title: "Metering & Interval Data", start: 2, mvp: 5.4, ga: 8.4, continuous: true },
          { title: "Energy Portfolio Management", start: 3, mvp: 5.0, ga: 8.1, continuous: true },
          { title: "Utility Data Management", start: 2, mvp: 5.5, ga: 7.4, continuous: true },
          { title: "Budget & Tariff Intelligence", start: 3, mvp: 6.4, ga: 8.4, continuous: true },
          { title: "Sourcing & Procurement", start: 4, mvp: 8.4, ga: 10.4, continuous: true },
          { title: "PPAs & EACs", start: 5, mvp: 9.4, ga: 11.4, continuous: true },
        ],
      },
      {
        label: "Platform",
        tone: "accent",
        rows: [
          {
            title: "Shared platform foundations",
            start: 0,
            continuous: true,
          },
        ],
      },
    ],
  },




  {
    kind: "timeline",
    eyebrow: "Executive Summary",
    title: "The full 2026 to 2028 roadmap: Energy & Efficiency",
    subtitle:
      "Energy foundations, portfolio, sourcing, flexibility and electrification on one timeline. Phases follow the approved sequencing: quarters where confirmed, H1 and H2 elsewhere, 2028 directional.",
    years: ["2026", "2027", "2028"],
    groups: [
      {
        label: "Energy Foundations",
        tone: "primary",
        rows: [
          { title: "Metering & Interval Data: hierarchy, baselines, connectors, scale", start: 0, continuous: true },
          { title: "Utility Data Management: capture, advanced processing, explanation", start: 0, continuous: true },
          { title: "Energy & Efficiency: recommendations launch, depth, verification", start: 1, continuous: true },
        ],
      },
      {
        label: "Portfolio & Sourcing",
        tone: "accent",
        rows: [
          { title: "Energy Portfolio Management: contracts and spend, budgets, reforecasting", start: 1, continuous: true },
          { title: "Capital Asset Planning: register, planning, prioritisation", start: 1, continuous: true },
          { title: "Energy Sourcing & Procurement: contracts, decision support, integration", start: 1, continuous: true },
          { title: "Renewables & EACs: instrument register, assurance, matching", start: 1, continuous: true },
        ],
      },
      {
        label: "Flexibility & Electrification",
        tone: "warn",
        rows: [
          { title: "Demand Response & Flexibility: visibility, programmes, monetization", start: 1, continuous: true },
          { title: "Electrification & DER: inventory, performance, planning", start: 1, continuous: true },
        ],
      },
    ],
  },

  {
    kind: "timeline",
    eyebrow: "Executive Summary",
    title: "The full 2026 to 2028 roadmap: Sustainability family",
    subtitle:
      "Carbon, supply chain, disclosure, climate risk and strategy on one timeline. Phases follow the approved sequencing: quarters where confirmed, H1 and H2 elsewhere, 2028 directional.",
    years: ["2026", "2027", "2028"],
    groups: [
      {
        label: "Sustainability Family",
        tone: "muted",
        rows: [
          { title: "Carbon Inventory: revamp, Scope 1-2 depth, Scope 3 gap closure", start: 0, continuous: true },
          { title: "Decarbonization Planning: initiatives, ECM library, scenario analysis", start: 1, continuous: true },
          { title: "Supplier Engagement: supplier action, data quality, light PCF", start: 0, continuous: true },
          { title: "Disclosure & Indicators: foundations, configure-collect-disclose, SE migration", start: 0, continuous: true },
          { title: "Climate Risk: asset register, scenarios and ClimVar, transition plans", start: 0, continuous: true },
          { title: "Strategy: targets, portfolio view, board narratives", start: 1, continuous: true },
        ],
      },
    ],
  },


  {
    kind: "timeline",
    eyebrow: "Executive Summary",
    title: "Sustainability product highlights: Carbon and Supply Chain",
    subtitle: "Headline 2026 to 2027 deliveries for Carbon Performance and Supply Chain, on one quarterly timeline.",
    years: ["2026", "2027"],
    groups: [
      {
        label: "Carbon",
        tone: "primary",
        rows: [
          { title: "Inventory revamp, pre-calc import", start: 2, end: 3 },
          { title: "Scope 1-2: EAC, PPA, thermal", start: 3, end: 4 },
          { title: "Scope 3 gap closure, Cat 15, FLAG", start: 4, end: 8 },
        ],
      },
      {
        label: "Supply Chain",
        tone: "accent",
        rows: [
          { title: "SC emissions, supplier action", start: 2, end: 3 },
          { title: "Data quality, sponsors, Zeigo", start: 3, end: 4 },
          { title: "Light PCF, multi tier, integrations", start: 4, end: 8 },
        ],
      },
    ],
  },

  {
    kind: "timeline",
    eyebrow: "Executive Summary",
    title: "Sustainability product highlights: Climate Risk and Reporting & Compliance",
    subtitle: "Headline 2026 to 2027 deliveries for Climate Risk and Reporting & Compliance, on one quarterly timeline.",
    years: ["2026", "2027"],
    groups: [
      {
        label: "Climate Risk",
        tone: "warn",
        rows: [
          { title: "Asset register, Eclr stabilisation", start: 2, end: 3 },
          { title: "Eclr self serve, hazard exposure", start: 3, end: 4 },
          { title: "Scenarios, ClimVar, transition plans", start: 4, end: 8 },
        ],
      },
      {
        label: "R&C",
        tone: "muted",
        rows: [
          { title: "Core platform foundations", start: 2, end: 3 },
          { title: "Configure, collect, disclose", start: 3, end: 4 },
          { title: "SE migration, AI disclosure drafting", start: 4, end: 8 },
        ],
      },
    ],
  },


  {
    kind: "timeline",
    eyebrow: "Executive Summary",
    title: "The full 2027 roadmap across sustainability products, part one",
    subtitle: "Carbon Performance, Supply Chain, and Reporting & Compliance. Confirmed milestones stay quarter-specific; all other commitments retain their approved H1 or H2 horizon.",
    years: ["2027"],
    groups: [
      {
        label: "Carbon Performance",
        tone: "primary",
        rows: [
          { title: "Q1: Category 4 and 9 product linked transport", start: 0, end: 1 },
          { title: "H1: Cat 5, rebaselining, PCF integration", start: 0, end: 2 },
          { title: "H2: Category 15, FLAG, dedicated auditor experience", start: 2, end: 4 },
        ],
      },
      {
        label: "Supply Chain",
        tone: "accent",
        rows: [
          { title: "H1: Light PCF, multi tier visibility, supplier onboarding", start: 0, end: 2 },
          { title: "H2: Climate risk and R&C integration, supplier discovery", start: 2, end: 4 },
        ],
      },
      {
        label: "Reporting & Compliance",
        tone: "muted",
        rows: [
          { title: "Q1: SE migration and CSRD cycle in RA+", start: 0, end: 1 },
          { title: "H1: Campaign analytics, AI drafting, audit ready disclosure", start: 0, end: 2 },
          { title: "H2: AI compliance, assurance, voluntary frameworks", start: 2, end: 4 },
        ],
      },
    ],
  },


  {
    kind: "timeline",
    eyebrow: "Executive Summary",
    title: "The full 2027 roadmap across sustainability products, part two",
    subtitle: "Climate Risk, Strategy, and Core Platform. Confirmed milestones stay quarter-specific; all other commitments retain their approved H1 or H2 horizon.",
    years: ["2027"],
    groups: [
      {
        label: "Climate Risk",
        tone: "warn",
        rows: [
          { title: "H1: Scenarios, ClimVar value at risk, adaptation actions", start: 0, end: 2 },
          { title: "H2: Transition plans, disclosure, extended value chain risk", start: 2, end: 4 },
        ],
      },
      {
        label: "Strategy",
        tone: "primary",
        rows: [
          { title: "H1: Cascading targets, delivery status, advanced ECM library", start: 0, end: 2 },
          { title: "H2: Market intelligence, net zero suggestions, multi hierarchy plans", start: 2, end: 4 },
        ],
      },
      {
        label: "Core Platform",
        tone: "accent",
        rows: [
          { title: "H1: Readiness checks, ontology, calculation governance", start: 0, end: 2 },
          { title: "H2: Quality scoring, AI checks, Sera agents, enterprise scale", start: 2, end: 4 },
        ],
      },
    ],
  },


  {
    kind: "table",
    eyebrow: "One page view",
    title: "RA+ 2026 and 2027 at board altitude",
    subtitle: "What each product commits to per half year.",
    headers: ["Product", "H2 2026", "H1 2027", "H2 2027"],
    rows: [
      [
        "Carbon Performance",
        "Factors, market based Scope 2, boundaries",
        "Category 4 and 9 transport, category 5, consolidation",
        "Category 15, FLAG",
      ],
      [
        "Supply Chain",
        "SC emissions management, PCF calculator, DQ assurance",
        "Multi tier visibility, supplier onboarding",
        "Climate risk and ESG compliance integrations",
      ],
      [
        "Reporting and Compliance",
        "Standalone launch, indicator management, CSRD",
        "SE migrated, AI assisted disclosure authoring",
        "Assurance workflow, voluntary frameworks",
      ],
      [
        "Climate Risk",
        "Asset register, physical hazard exposure",
        "Scenario analysis and adaptation actions",
        "Transition plan linked to targets",
      ],
      [
        "Strategy",
        "Actions library, ECM and initiative recommendations",
        "Cascading targets, complex structures, ECM library",
        "Market intelligence, multi hierarchy plans",
      ],
      [
        "Core platform",
        "Data quality L1 and L2, audit trail, allocations",
        "Control plane, calculation governance, analytics",
        "DQ scoring, Sera agents, EU hosting",
      ],
    ],
  },





  {
    kind: "section",
    number: "A",
    eyebrow: "Appendix",
    title: "Appendix: product detail",
    subtitle: "Detailed product by product plans, evidence and sequencing. Available for questions, not required for the decision.",
  },

  {
    kind: "section",
    number: "01",
    eyebrow: "Agenda item 1",
    title: "Where Carbon Performance stands",
    subtitle: "Honest accounting of Q3 before we commit anything for Q4 and 2027.",
  },




  // ---------- Carbon Performance ----------
  {
    kind: "board",
    eyebrow: "Carbon Performance, 2026",
    title: "Deepen the inventory in 2026",
    subtitle: "Emission factor and calculation depth first. Sequenced from the ranked theme list and the delivery capacity we actually hold.",
    lanes: [
      {
        label: "Now",
        period: "Q3 2026",
        tone: "primary",
        items: [
          { name: "Sold product emissions", note: "Scope 3 categories 10, 11, 12" },
          { name: "System admin improvements", note: "Config engine, calc methods, templates" },
          { name: "Inventory revamp", note: "Clarity, per gas breakdown" },
          { name: "Pre-calculated emissions import", note: "Ingestion of client calculated data" },
        ],
      },
      {
        label: "Next",
        period: "Q4 2026",
        tone: "accent",
        items: [
          { name: "EAC and PPA management", note: "Market based Scope 2 coverage" },
          { name: "Base year, exclusions, materiality", note: "GHGP compliant boundaries" },
          { name: "Thermal source attribution", note: "Defensible Scope 1 and 2 split" },
          { name: "Refrigerant leakage to usage", note: "Scope 1 fugitive emissions" },
          { name: "Employee commuting and WFH", note: "Scope 3 category 7" },
          { name: "Sera for carbon inventory", note: "AI guided troubleshooting" },
          { name: "Advanced scenario analysis and decarbonization planning", note: "Initiatives and actions management" },
        ],
      },
    ],
  },


  {
    kind: "board",
    eyebrow: "Carbon Performance, 2027",
    title: "Close the remaining categories in 2027",
    subtitle: "Coverage, governance and assurance, building on the 2026 inventory depth.",
    lanes: [
      {
        label: "Later",
        period: "2027 H1",
        tone: "warn",
        items: [
          { name: "Category 4 and 9 product linked transport", note: "Upstream and downstream transport" },
          { name: "Financial and equity consolidation", note: "Ownership boundary roll up" },
          { name: "Waste emission estimation", note: "Scope 3 category 5" },
          { name: "Improved method transparency per data point", note: "Methodology transparency" },
          { name: "Rebaselining", note: "Base year recalculation workflows" },
          { name: "Supply chain PCF integration", note: "Supplier specific factors" },
          { name: "Advanced ECM library", note: "Energy and carbon cobenefits" },
        ],
      },
      {
        label: "Later",
        period: "2027 H2",
        tone: "muted",
        items: [
          { name: "Category 15 investments", note: "PCAF aligned financed emissions" },
          { name: "FLAG segmentation", note: "Specialised standards" },
          { name: "Dedicated auditor experience", note: "Variance checks, reports, status" },
        ],
      },
    ],
  },


  {
    kind: "timeline",
    eyebrow: "Carbon Performance",
    title: "The Carbon Performance plan on a timeline: scope coverage",
    subtitle: "Scope 1, 2 and 3 commitments laid over 2026 and 2027 quarters.",
    years: ["2026", "2027"],
    groups: [
      {
        label: "Scope 1 & 2",
        tone: "primary",
        rows: [
          { title: "EAC and PPA management", start: 3, end: 4 },
          { title: "Thermal source attribution", start: 3, end: 4 },
          { title: "Refrigerant leakage to usage", start: 3, end: 4 },
        ],
      },
      {
        label: "Scope 3",
        tone: "accent",
        rows: [
          { title: "Sold product emissions, cat 10, 11, 12", start: 2, end: 3 },
          { title: "Employee commuting and WFH, cat 7", start: 3, end: 4 },
          { title: "Q1: Category 4 and 9 product linked transport", start: 4, end: 5 },
          { title: "Waste emission estimation, cat 5", start: 4, end: 6 },
          { title: "Category 15 investments", start: 6, end: 8 },
          { title: "FLAG segmentation", start: 6, end: 8 },
        ],
      },
    ],
  },


  {
    kind: "timeline",
    eyebrow: "Carbon Performance",
    title: "The Carbon Performance plan on a timeline: inventory and intelligence",
    subtitle: "Inventory governance and intelligence commitments laid over 2026 and 2027 quarters.",
    years: ["2026", "2027"],
    groups: [
      {
        label: "Inventory",
        tone: "warn",
        rows: [
          { title: "System admin improvements", start: 2, end: 3 },
          { title: "Inventory revamp", start: 2, end: 3 },
          { title: "Pre-calculated emissions import", start: 2, end: 3 },
          { title: "Base year, exclusions, materiality", start: 3, end: 4 },
          { title: "Financial and equity consolidation", start: 4, end: 6 },
          { title: "Rebaselining", start: 4, end: 6 },
          { title: "Dedicated auditor experience", start: 6, end: 8 },
        ],
      },
      {
        label: "Intelligence",
        tone: "muted",
        rows: [
          { title: "Sera for carbon inventory", start: 3, end: 4 },
          { title: "Scenario analysis and decarbonization planning", start: 3, end: 4 },
          { title: "Improved method transparency per data point", start: 4, end: 6 },
          { title: "Supply chain PCF integration", start: 4, end: 6 },
          { title: "Advanced ECM library", start: 4, end: 6 },
        ],
      },
    ],
  },


  {
    kind: "columns",
    eyebrow: "Carbon Performance",
    title: "What ships inside the Carbon Performance goals",
    subtitle: "Factors and calculation depth first, then coverage, then the governance that makes it auditable.",
    columns: [
      {
        label: "Goal 1",
        title: "Factors and calculation depth",
        tone: "primary",
        line: "Make the number defensible.",
        items: [
          "EAC and PPA management for market based Scope 2",
          "Thermal source attribution across Scope 1 and 2",
          "Refrigerant leakage to usage based fugitive emissions",
          "Supplier specific and standard factor datasets",
          "Improved method transparency per data point",
        ],
      },
      {
        label: "Goal 2",
        title: "Inventory coverage",
        tone: "accent",
        line: "Close the Scope 3 gaps.",
        items: [
          "Sold product emissions, categories 10, 11 and 12",
          "Employee commuting and working from home, category 7",
          "Category 4 and 9 product linked transport",
          "Waste emission estimation, category 5",
          "Category 15 investments and FLAG segmentation",
        ],
      },
      {
        label: "Goal 3",
        title: "Boundaries and governance",
        tone: "warn",
        line: "Consultant grade control.",
        items: [
          "Base year, exclusions and materiality settings",
          "Financial and equity consolidation of ownership",
          "Rebaselining and base year recalculation workflows",
          "Inventory revamp with per gas breakdown",
          "Dedicated auditor experience",
        ],
      },
      {
        label: "Goal 4",
        title: "AI and decision support",
        tone: "muted",
        line: "From inventory to action.",
        items: [
          "Sera for carbon inventory, AI guided troubleshooting",
          "Advanced scenario analysis and decarbonization planning",
          "Initiatives and actions management",
          "Advanced ECM library with energy and carbon cobenefits",
        ],
      },
    ],
  },


  {
    kind: "columns",
    eyebrow: "Carbon Performance",
    title: "Carbon Performance owns the inventory every product consumes",
    subtitle: "It is the producer of record, so its data model decisions constrain the other three products.",
    columns: [
      {
        label: "Platform",
        title: "Ingestion and quality",
        tone: "primary",
        line: "Prerequisites for depth.",
        items: [
          "Pipeline and transformation foundation",
          "Automated data quality checks, L1 and L2",
          "Programmatic connectors for activity data",
          "Allocations foundation",
        ],
      },
      {
        label: "Ontology",
        title: "Hierarchy and calculation",
        tone: "accent",
        line: "Inherited, not rebuilt.",
        items: [
          "Shared entity hierarchy and organisational boundary",
          "Calculation governance and versioning",
          "Emission factor library owned by core",
          "Audit trail and lineage on key values",
        ],
      },
      {
        label: "Cross product",
        title: "Who consumes the inventory",
        tone: "warn",
        line: "One baseline, four experiences.",
        items: [
          "Supply Chain feeds categories 1 and 4 into the inventory",
          "Reporting and Compliance discloses emissions from Collect",
          "Strategy plans reductions against the same baseline",
          "Climate Risk reads transition exposure from it",
        ],
      },
      {
        label: "Sera",
        title: "AI capabilities",
        tone: "muted",
        line: "Where the differentiation sits.",
        items: [
          "AI guided inventory troubleshooting",
          "Anomaly explanation and discrepancy management",
          "Mapping memory and smart mapping suggestions",
          "AI assisted method selection guidance",
        ],
      },
    ],
  },



  {
    kind: "section",
    number: "04",
    eyebrow: "Agenda item 4",
    title: "Q4 2026 in detail",
    subtitle: "Carbon Performance, Supply Chain, Reporting and Compliance, Climate Risk, Strategy, and Core Platform: the wedge, the capacity math, and the ranked plan for each.",
  },


  {
    kind: "section",
    number: "4.1",
    eyebrow: "Agenda item 4.1",
    title: "Carbon Performance",
    subtitle: "Q4 closes emission factor and calculation depth.",
  },



  {
    kind: "columns",
    eyebrow: "Q4 point of view",
    title: "Q3 landed ingestion, Q4 closes emission factor and calculation depth",
    subtitle: "Protect what is in flight, sequence the wedge themes, defer the rest with a clear reason.",
    columns: [
      {
        label: "Protect",
        title: "Carry over that must finish",
        tone: "primary",
        line: "These are already funded and partly built. Slipping them costs more than starting anything new.",
        items: [
          "Automated data quality and overview",
          "Scope 3 product emissions, categories 10, 11, 12",
          "Pre-calculated emissions import",
          "Inventory revamp, scoped",
          "Accor portfolio experience",
        ],
      },
      {
        label: "Sequence",
        title: "The Q4 wedge",
        tone: "accent",
        line: "Emission factors and calculation depth: the gaps that still force hypercare on every enterprise deal.",
        items: [
          "Custom and supplier specific emission factors",
          "Standard EF datasets: EcoInvent, Exiobase, FLAG, EEA, Base Carbone",
          "Deterministic emission factor configuration",
          "Renewable energy and market based Scope 2, RECs and EACs",
          "Inventory statements and extended classification",
          "Sera contextual intelligence",
        ],
      },

      {
        label: "Defer",
        title: "Real, but not Q4",
        tone: "warn",
        line: "Named explicitly so the room knows what is being traded away and when it returns.",
        items: [
          "Self serve decarbonization planning and execution",
          "Dedicated auditor experience",
          "Category 15 investments and FLAG depth, 2027",
          "Languages and EU hosting, out of Q4 scope",
          "Full PCF inside CP, rides supply chain",
        ],
      },
    ],
  },


  {
    kind: "columns",
    eyebrow: "Dependencies",
    title: "What Carbon Performance needs from platform teams",
    subtitle: "The Q4 plan is not executable without these commitments. Platform PMs confirm delivery, not theme rank.",
    columns: [
      {
        label: "Atlas Data",
        title: "Ingestion and pipelines",
        tone: "primary",
        items: [
          "Pipeline and transformation foundation",
          "CP data collection setup",
          "Programmatic connectors and APIs",
          "Data collection lifecycle",
          "Bulk rollback and overwrite",
        ],
      },
      {
        label: "Data quality and services",
        title: "Checks and validation",
        tone: "accent",
        items: [
          "Automated DQ checks and overview (rank 1)",
          "Entity and overview DQ pages",
          "Validation at ingestion",
          "Discrepancy management",
        ],
      },
      {
        label: "Measurement and EF library",
        title: "Emission factors",
        tone: "warn",
        items: [
          "Custom and supplier specific EFs",
          "Standard EF datasets (rank 26)",
          "Deterministic EF configuration (rank 14)",
          "Vendor and industry EFs",
        ],
      },
      {
        label: "Ontology, Sera, analytics",
        title: "Hierarchies and experience",
        tone: "muted",
        items: [
          "Multi-hierarchy access, allocations foundation",
          "Financial and equity consolidation",
          "Sera contextual intelligence, Accor portfolio experience",
          "Navigate, Slice and Analyze, Quick Charts and Data Explorer",
        ],
      },

    ],
  },



  // ---------- Supply Chain ----------
  {
    kind: "section",
    number: "4.2",
    eyebrow: "Agenda item 4.2",
    title: "Supply Chain",
    subtitle: "Migrate and close the competitive gap, then drive supplier action.",
  },



  {
    kind: "board",
    eyebrow: "Supply Chain, 2026",
    title: "Migrate and close the competitive gap in 2026",
    subtitle: "The 2026 goals, sequenced against the RA+ migration.",
    lanes: [
      {
        label: "Now",
        period: "Q3 2026",
        tone: "primary",
        items: [
          { name: "RA+ tech integrations and shared UI", note: "Navigation, layouts, database" },
          { name: "End to end supply chain emissions management" },
          { name: "Custom questionnaires" },
          { name: "Guided supplier decarbonisation actions" },
        ],
      },
      {
        label: "Next",
        period: "Q4 2026",
        tone: "accent",
        items: [
          { name: "Rebranding completion to a stronger RA+ experience" },
          { name: "Improve data quality assurance" },
          { name: "Sponsor decision support and supplier transparency" },
          { name: "Zeigo network integration" },
        ],
      },
    ],
  },


  {
    kind: "board",
    eyebrow: "Supply Chain, 2027",
    title: "Drive supplier action in 2027",
    subtitle: "From measurement to supplier engagement, integration and discovery.",
    lanes: [
      {
        label: "Later",
        period: "2027 H1",
        tone: "warn",
        items: [
          { name: "Light PCF calculator, SEED integrations" },
          { name: "Advanced tier level subscription" },
          { name: "Multi tier supplier visibility" },
          { name: "Supplier onboarding and programme participation" },
          { name: "Zeigo Activate sunset to be replaced by a light CP calculator" },
        ],
      },
      {
        label: "Later",
        period: "2027 H2",
        tone: "muted",
        items: [
          { name: "Supply chain and climate risk integration" },
          { name: "ESG reporting and compliance integration" },
          { name: "Engagement gamification and leaderboards" },
          { name: "Cross programme supplier discovery" },
        ],
      },
    ],
  },


  {
    kind: "timeline",
    eyebrow: "Supply Chain",
    title: "The Supply Chain plan on a timeline",
    subtitle: "Migration and supplier engagement in 2026, then product carbon footprint and connected action in 2027.",
    years: ["2026", "2027"],
    groups: [
      {
        label: "Experience",
        tone: "primary",
        rows: [
          { title: "RA+ integrations and shared experience", start: 2, end: 3 },
          { title: "Rebranding completion", start: 3, end: 4 },
          { title: "Supplier onboarding and participation", start: 4, end: 6 },
        ],
      },
      {
        label: "Measurement",
        tone: "accent",
        rows: [
          { title: "End to end supply chain emissions", start: 2, end: 3 },
          { title: "Improved data quality assurance", start: 3, end: 4 },
          { title: "Light PCF calculator and SEED", start: 4, end: 6 },
          { title: "Multi tier supplier visibility", start: 4, end: 6 },
        ],
      },
      {
        label: "Engagement",
        tone: "warn",
        rows: [
          { title: "Custom questionnaires and guided action", start: 2, end: 3 },
          { title: "Sponsor decision support and transparency", start: 3, end: 4 },
          { title: "Zeigo network integration", start: 3, end: 4 },
          { title: "Gamification and supplier discovery", start: 6, end: 8 },
        ],
      },
      {
        label: "Integration",
        tone: "muted",
        rows: [
          { title: "Advanced tier level subscription", start: 4, end: 6 },
          { title: "Climate Risk integration", start: 6, end: 8 },
          { title: "Reporting and Compliance integration", start: 6, end: 8 },
        ],
      },
    ],
  },


  {
    kind: "columns",
    eyebrow: "Supply Chain",
    title: "What ships inside the supply chain goals",
    subtitle: "Migration and shared experience first, then the capabilities that close the competitive gap.",
    columns: [
      {
        label: "Goal 1",
        title: "Migration and core experience",
        tone: "primary",
        line: "Land in RA+ properly.",
        items: [
          "Platform stabilisation and core experience",
          "Shared navigation, page layouts and responsive design",
          "Sera embedded onboarding and recommendations",
          "Additional languages: Chinese, French, Spanish, Portuguese",
          "Notification centre and in product reminders",
        ],
      },
      {
        label: "Goal 2",
        title: "Product carbon footprint",
        tone: "accent",
        line: "The commercial gap closer.",
        items: [
          "Product level PCF tables with CSV download",
          "Light PCF calculator, SEED and AI scraping integrations",
          "Supplier risk overview, emissions heatmap, top ten hotspots",
          "Category and material footprint charts",
          "PACT compliance targets, action alerts and KPI strip",
        ],
      },
      {
        label: "Goal 3",
        title: "Data collection campaigns",
        tone: "warn",
        line: "Ask suppliers the right questions.",
        items: [
          "Custom questionnaires with a guided builder wizard",
          "Drag and drop ordering and conditional logic",
          "Evidence upload against responses",
          "Response tracking, evidence preview and export",
          "Simplified participant forms for suppliers",
        ],
      },
      {
        label: "Goal 4",
        title: "Data quality assurance",
        tone: "muted",
        line: "Numbers that survive review.",
        items: [
          "Outlier detection and peer benchmarking",
          "Evidence upload with AI validation",
          "Composite supplier data quality score",
          "Cross product validation against CP inventories",
        ],
      },
    ],
  },


  {
    kind: "columns",
    eyebrow: "Supply Chain",
    title: "From measurement to supplier action",
    subtitle: "Supplier data becomes decarbonisation the sponsor can evidence.",
    columns: [
      {
        label: "Take Action",
        title: "Guided decarbonisation",
        tone: "primary",
        line: "Sera powered recommendations.",
        items: [
          "Project recommendations with regional and category filters",
          "Sponsor highlighted projects and project discovery",
          "Supplier learning content and delivery",
          "Role based participant, sponsor and admin views",
        ],
      },
      {
        label: "Sponsor",
        title: "Decision support",
        tone: "accent",
        line: "Prove the programme works.",
        items: [
          "Enhanced sponsor dashboards and reporting",
          "Sponsor planning and supplier transparency",
          "Programme analytics and engagement tracking",
          "Zeigo network integration",
        ],
      },
      {
        label: "2027 H1",
        title: "Reach and scale",
        tone: "warn",
        line: "Beyond tier one.",
        items: [
          "Multi tier supplier visibility",
          "Supplier onboarding and programme participation",
          "Advanced tier level subscription",
          "Zeigo Activate sunset replaced by a light CP calculator",
        ],
      },
      {
        label: "2027 H2",
        title: "Resilience and reuse",
        tone: "muted",
        line: "Connect the products.",
        items: [
          "Supply chain and climate risk integration",
          "ESG reporting and compliance integration",
          "Gamification, leaderboards and custom nudges",
          "Cross programme supplier discovery",
        ],
      },
    ],
  },



  // ---------- Reporting and Compliance ----------
  {
    kind: "section",
    number: "4.3",
    eyebrow: "Agenda item 4.3",
    title: "Reporting and Compliance",
    subtitle: "Stand the product up on core platform foundations.",
  },



  {
    kind: "board",
    eyebrow: "Reporting and Compliance, 2026",
    title: "Stand the product up in 2026",
    subtitle: "Core platform foundations first, then Framework Library, Indicator Management and Disclosure Management, in that order.",
    lanes: [
      {
        label: "Now",
        period: "Q3 2026",
        tone: "primary",
        items: [
          { name: "Core platform foundations built and current time spent on the planning for everything to build on the top of the core." },
        ],
      },
      {
        label: "Next",
        period: "Q4 2026",
        tone: "accent",
        items: [
          { name: "Build indicator library foundation" },
          { name: "Approval hierarchies and bulk assignment" },
          { name: "Reporting cycles and reporting workspace" },
          { name: "Governed data collection campaigns" },
          { name: "Regulated frameworks and templates", note: "CSRD, ESRS, EU Taxonomy, IFRS S1 and S2" },
          { name: "Set foundations: configure, collect, disclose end to end" },
          { name: "Set foundations: Advanced data ingestion and transformation rules" },
        ],
      },
    ],
  },


  {
    kind: "board",
    eyebrow: "Reporting and Compliance, 2027",
    title: "Migrate SE and automate in 2027",
    subtitle: "Migration, AI assisted authoring and assurance once the 2026 foundations hold.",
    lanes: [
      {
        label: "Later",
        period: "2027 H1",
        tone: "warn",
        items: [
          { name: "Advanced campaign management" },
          { name: "Indicator performance analytics" },
          { name: "Governed disclosure authoring with AI drafting" },
          { name: "Corporate SE fully migrated off RA Classic", note: "Historical data migrated, Q1 2027 CSRD cycle run in RA+" },
          { name: "Audit ready disclosures produced in product" },
        ],
      },
      {
        label: "Later",
        period: "2027 H2",
        tone: "muted",
        items: [
          { name: "AI compliance intelligence and mapping suggestions" },
          { name: "External assurance and auditor experience" },
          { name: "Voluntary frameworks: GRI, SASB, GRESB, EcoVadis" },
          { name: "CP emissions and CR risk feeding disclosures" },
        ],
      },
    ],
  },


  {
    kind: "timeline",
    eyebrow: "Reporting and Compliance",
    title: "The Reporting and Compliance plan on a timeline",
    subtitle: "Build the governed foundation in 2026, prove it through the SE migration, then automate disclosure and assurance.",
    years: ["2026", "2027"],
    groups: [
      {
        label: "Foundation",
        tone: "primary",
        rows: [
          { title: "Core platform foundations and planning", start: 2, end: 3 },
          { title: "Indicator library and approval hierarchy", start: 3, end: 4 },
          { title: "Advanced ingestion and transformation", start: 3, end: 4 },
        ],
      },
      {
        label: "Collect",
        tone: "accent",
        rows: [
          { title: "Reporting cycles and workspace", start: 3, end: 4 },
          { title: "Governed data collection campaigns", start: 3, end: 4 },
          { title: "Advanced campaign management and analytics", start: 4, end: 6 },
        ],
      },
      {
        label: "Disclose",
        tone: "warn",
        rows: [
          { title: "Regulated frameworks and templates", start: 3, end: 4 },
          { title: "AI drafting and audit ready disclosure", start: 4, end: 6 },
          { title: "Voluntary frameworks", start: 6, end: 8 },
        ],
      },
      {
        label: "Assurance",
        tone: "muted",
        rows: [
          { title: "Q1: SE migration and CSRD cycle in RA+", start: 4, end: 5 },
          { title: "AI compliance intelligence", start: 6, end: 8 },
          { title: "External assurance and auditor experience", start: 6, end: 8 },
          { title: "CP and Climate Risk disclosure feeds", start: 6, end: 8 },
        ],
      },
    ],
  },


  {
    kind: "columns",
    eyebrow: "RA+ Platform",
    title: "Core platform foundations: configure, collect, disclose end to end",
    subtitle: "Built once in the core, consumed by every product on top.",
    columns: [
      {
        label: "Step 1",
        title: "Configure",
        tone: "primary",
        line: "Set the structure once.",
        items: [
          "Shared hierarchy and emission factors, owned by the core",
          "Config engine, calc methods and templates",
          "Framework and disclosure definitions",
          "Approval hierarchies and bulk assignment",
          "Permissions, roles and workspace setup",
        ],
      },
      {
        label: "Step 2",
        title: "Collect",
        tone: "accent",
        line: "Get the data in, governed.",
        items: [
          "Advanced data ingestion and transformation rules",
          "Governed data collection campaigns",
          "Reporting cycles and reporting workspace",
          "Data quality assurance and validation",
          "Bulk uploads, integrations and connectors",
        ],
      },
      {
        label: "Step 3",
        title: "Disclose",
        tone: "warn",
        line: "Produce the output, audit ready.",
        items: [
          "Disclosure management on the shared indicator library",
          "Full traceability from disclosure back to source data",
          "Evidence and audit trail by design",
          "Regulated framework output: CSRD, ESRS, IFRS S1 and S2",
          "Every product consumes the same foundation",
        ],
      },
    ],
  },

  {
    kind: "columns",
    eyebrow: "RA+ Shared Platform",
    title: "One hierarchy. One user workflow. One analytics engine.",
    subtitle: "Built once in the shared platform, inherited by every sustainability and energy product.",
    columns: [
      {
        label: "Shared structure",
        title: "Hierarchy",
        tone: "primary",
        line: "Organise once, inherit everywhere.",
        items: [
          "Entity, site, asset, supplier and product relationships",
          "Organisational boundaries and multi-hierarchy views",
          "Role-based access aligned to operating responsibility",
          "Consistent allocation across carbon, energy, risk and disclosure",
          "One trusted structure for every reporting cycle",
        ],
      },
      {
        label: "Shared experience",
        title: "User workflow",
        tone: "accent",
        line: "Configure, collect, review and act once.",
        items: [
          "Configurable campaigns, assignments and approvals",
          "Data quality checks, exceptions and remediation",
          "Evidence, lineage and audit trail by design",
          "Initiatives and actions connected to accountable owners",
          "One repeatable way of working across products",
        ],
      },
      {
        label: "Shared intelligence",
        title: "Analytics engine",
        tone: "warn",
        line: "Turn governed data into decisions.",
        items: [
          "Reusable metrics, calculations and comparison logic",
          "Dashboards from portfolio to source data",
          "Scenario analysis, forecasting and value at risk",
          "AI-assisted insight grounded in governed platform data",
          "One decision layer from operations to leadership",
        ],
      },
    ],
  },

  {
    kind: "columns",
    eyebrow: "RA+ Shared Platform Dashboard",
    title: "Turn the shared platform roadmap into an owned delivery model",
    subtitle: "A live dashboard makes progress, ownership, timing and risk visible across the foundations every product consumes.",
    columns: [
      {
        label: "Track the work",
        title: "Capability register",
        tone: "primary",
        line: "One record for every shared capability.",
        items: [
          "Hierarchy, workflow and analytics grouped as three foundations",
          "Named owner and target period for every capability",
          "Planned, in progress, at risk and complete states",
          "Progress and latest update stored in the shared data model",
        ],
      },
      {
        label: "Run the portfolio",
        title: "Leadership dashboard",
        tone: "accent",
        line: "See the portfolio signal, then inspect the detail.",
        items: [
          "Overall and pillar-level progress at a glance",
          "Visible completion, activity and at-risk counts",
          "Filters by foundation and delivery status",
          "Editable updates without rebuilding the roadmap deck",
        ],
      },
      {
        label: "Create accountability",
        title: "Operating cadence",
        tone: "warn",
        line: "Use the same facts in product and leadership reviews.",
        items: [
          "Owners update progress and evidence before reviews",
          "At-risk capabilities become explicit decisions",
          "Shared dependencies stay visible across products",
          "The dashboard becomes the source for roadmap reporting",
        ],
      },
    ],
  },

  {
    kind: "columns",
    eyebrow: "RA+ Data Governance",
    title: "Shared data definitions and controls, applied consistently across products",
    subtitle: "Governance lives in the platform: one glossary, one set of access and quality controls, one audit trail. Products inherit it instead of rebuilding it.",
    columns: [
      {
        label: "Define once",
        title: "Shared definitions",
        tone: "primary",
        line: "Every product speaks the same language.",
        items: [
          "One entity, site, asset and supplier model",
          "One metric and KPI glossary across dashboards",
          "Unit, conversion and factor rules in one layer",
          "Named owner and status for every definition",
        ],
      },
      {
        label: "Control once",
        title: "Platform controls",
        tone: "accent",
        line: "Rules enforced in the platform, not per product.",
        items: [
          "Role-based access aligned to the hierarchy",
          "Validation and quality rules at ingestion",
          "Approval hierarchies with evidence capture",
          "Method transparency per data point",
        ],
      },
      {
        label: "Prove always",
        title: "Lineage and audit trail",
        tone: "warn",
        line: "Decision and disclosure grade by default.",
        items: [
          "Source to disclosed figure traceability",
          "Change history and versioning on every edit",
          "Governed data ready for AI-assisted insight",
          "Rivals must rebuild this product by product",
        ],
      },
    ],
  },

  {
    kind: "timeline",
    eyebrow: "Shared platform roadmap",
    title: "The shared platform roadmap: milestones every product inherits",
    subtitle: "Dates are firm through 2026. 2027 and beyond are directional, released as the foundations mature.",
    years: ["2026", "2027", "2028"],
    groups: [
      {
        label: "Hierarchy",
        tone: "primary",
        rows: [
          { title: "Entity, site, asset and supplier model", start: 2, end: 5, ga: 5, continuous: true },
          { title: "Multi-hierarchy views and boundaries", start: 4, end: 7, mvp: 5, continuous: true },
          { title: "Role-based access aligned to responsibility", start: 5, end: 8, continuous: true },
        ],
      },
      {
        label: "User workflow",
        tone: "accent",
        rows: [
          { title: "Config engine, calc methods, templates", start: 2, end: 6, mvp: 3, ga: 6, continuous: true },
          { title: "Ingestion and transformation rules", start: 3, end: 7, mvp: 4, continuous: true },
          { title: "Campaigns, assignments and approvals", start: 4, end: 8, ga: 8, continuous: true },
          { title: "Data quality, exceptions and remediation", start: 5, end: 9, continuous: true },
          { title: "Evidence, lineage and audit trail", start: 5, end: 10, continuous: true },
        ],
      },
      {
        label: "Analytics engine",
        tone: "warn",
        rows: [
          { title: "Reusable metrics and calculation logic", start: 4, end: 8, mvp: 5, continuous: true },
          { title: "Dashboards from portfolio to source data", start: 6, end: 9, ga: 9, continuous: true },
          { title: "Scenario, forecasting and value at risk", start: 7, end: 10, continuous: true },
          { title: "AI-assisted insight on governed data", start: 9, continuous: true },
        ],
      },
    ],
  },

  {
    kind: "timeline",
    eyebrow: "Shared platform milestones",
    title: "Year by year: every shared platform milestone with its date",
    subtitle: "The delivery calendar the roadmap gap matrix measures us against, with explicit milestone dates for each foundation.",
    note: "Track delivery against the roadmap gap matrix (/competitor-matrix), which compares these milestones to every researched rival.",
    years: ["2026", "2027", "2028"],
    groups: [
      {
        label: "Hierarchy",
        tone: "primary",
        rows: [
          { title: "Q3 2026: Entity, site, asset and supplier model build starts", start: 2, end: 5, ga: 5 },
          { title: "Q3 2027: Entity model Full GA, inherited by every product", start: 5, end: 5 },
          { title: "Q1 2027: Multi-hierarchy views and boundaries MVP", start: 4, end: 7, mvp: 5 },
          { title: "Q2 2027: Role-based access aligned to responsibility", start: 5, end: 8 },
        ],
      },
      {
        label: "User workflow",
        tone: "accent",
        rows: [
          { title: "Q4 2026: Config engine and templates MVP", start: 2, end: 6, mvp: 3, ga: 6 },
          { title: "Q1 2027: Ingestion and transformation rules MVP", start: 3, end: 7, mvp: 4 },
          { title: "Q4 2027: Campaigns, assignments and approvals Full GA", start: 4, end: 8, ga: 8 },
          { title: "Q2 2027: Data quality, exceptions and remediation", start: 5, end: 9 },
          { title: "Q2 2027: Evidence, lineage and audit trail", start: 5, end: 10 },
        ],
      },
      {
        label: "Analytics engine",
        tone: "warn",
        rows: [
          { title: "Q1 2027: Reusable metrics and calculation logic MVP", start: 4, end: 8, mvp: 5 },
          { title: "Q1 2028: Dashboards from portfolio to source data Full GA", start: 6, end: 9, ga: 9 },
          { title: "Q4 2027: Scenario, forecasting and value at risk", start: 7, end: 10 },
          { title: "2028: AI-assisted insight on governed data", start: 9, end: 12 },
        ],
      },
    ],
  },

  {
    kind: "stats",
    eyebrow: "Shared platform capacity and gap",
    title: "What the shared platform costs us, and what it costs a rival to copy",
    subtitle: "Capacity math is planning-level and indicative. Rival positions are internal assessments, not analyst ratings.",
    stats: [
      { value: "~1/3", label: "Of build capacity protected", sub: "Shared ingestion and lineage, data quality, hierarchy, analytics and dashboards, user workflows" },
      { value: "3", label: "Foundations funded as one", sub: "Hierarchy, user workflow, analytics engine" },
      { value: "12", label: "Shared capabilities tracked", sub: "Owned, dated and status-managed in the platform dashboard" },
      { value: "1x", label: "Built once, inherited by all", sub: "Every sustainability and energy product consumes the same foundation" },
    ],
    bullets: [
      { title: "Where rivals are strong", line: "Point specialists ship depth fast in one domain: carbon accounting, supplier engagement, disclosure or physical risk." },
      { title: "Where they are exposed", line: "Their depth sits on separate data models, so hierarchy, workflow and analytics are rebuilt per product and per acquisition." },
      { title: "Our structural gap to close", line: "We trail the best single-domain products on feature depth in some areas, and we close it by reusing one foundation instead of many." },
      { title: "The compounding advantage", line: "Each new product we add inherits governance, lineage and analytics on day one. A rival must rebuild that before they can match it." },
    ],
    note: "Capacity figures are planning assumptions to be confirmed with product and R&D leadership.",
  },




  {
    kind: "columns",
    eyebrow: "Reporting and Compliance",
    title: "What ships inside the reporting and compliance goals",
    subtitle: "Framework Library scopes the work, Indicator Management holds the data, Disclosure Management produces the output.",
    columns: [
      {
        label: "Goal 1",
        title: "Framework Library",
        tone: "primary",
        line: "Entry point and scope.",
        items: [
          "Pre-built templates: CSRD and ESRS, EU Taxonomy, CDP, IFRS S1 and S2, CA Climate",
          "AI powered framework question and answer and interpretation",
          "Automated indicator to framework mapping suggestions",
          "Regulated frameworks and templates",
          "2027: GRI, SASB, GRESB, EcoVadis",
        ],
      },
      {
        label: "Goal 2",
        title: "Indicator Management",
        tone: "accent",
        line: "Foundation of data management.",
        items: [
          "Standard indicator catalogue pre-aligned to major frameworks",
          "Custom indicators with formula and transform engine",
          "Dataset registry, schema and source mapping",
          "Flexible approval hierarchies and bulk assignment",
          "Direct indicator data uploads",
        ],
      },
      {
        label: "Goal 3",
        title: "Disclosure Management",
        tone: "warn",
        line: "Reporting cycle workspace.",
        items: [
          "Disclosure attributes and schema definition",
          "Governed multi hierarchy reporting cycles",
          "Data collection campaigns across entities",
          "AI assisted drafting with data lineage",
          "Multi step approvals, audit trail and export",
        ],
      },
      {
        label: "Goal 4",
        title: "Migration and assurance",
        tone: "muted",
        line: "Prove it on Schneider first.",
        items: [
          "Corporate SE migrated off RA Classic",
          "SE indicators connected to its Datahub",
          "Audit ready disclosures with full lineage",
          "External assurance and auditor experience",
        ],
      },
    ],
  },


  {
    kind: "columns",
    eyebrow: "Reporting and Compliance",
    title: "R&C depends on the platform more than any other product",
    subtitle: "It is a data receiver from every product, so integration quality is the value proposition.",
    columns: [
      {
        label: "Platform",
        title: "Separation and ingestion",
        tone: "primary",
        line: "Prerequisites for launch.",
        items: [
          "Indicator data upload paths",
          "Dataset registry and column mapping",
          "Formula and transform engine on RA+",
        ],
      },
      {
        label: "Ontology",
        title: "Hierarchy and access",
        tone: "accent",
        line: "Inherited, not rebuilt.",
        items: [
          "Reporting cycles scoped to the entity hierarchy",
          "Role based access for cycle scope",
          "Configure module syncing across products",
          "Flexible approval hierarchies",
        ],
      },
      {
        label: "Cross product",
        title: "Data in, disclosures out",
        tone: "warn",
        line: "Lineage end to end.",
        items: [
          "CP emissions from Collect into environmental disclosures",
          "Climate Risk outputs into TCFD, ISSB and CSRD climate sections",
          "Automated disclosure reporting with CP and CR",
          "Supply chain data as a future feed",
        ],
      },
      {
        label: "Sera",
        title: "AI capabilities",
        tone: "muted",
        line: "Where the differentiation sits.",
        items: [
          "Framework question and answer in natural language",
          "Draft response generation from document repository and platform data",
          "Indicator to framework mapping suggestions",
          "Indicator performance analytics and assurance",
        ],
      },
    ],
  },



  // ---------- Climate Risk ----------
  {
    kind: "section",
    number: "4.4",
    eyebrow: "Agenda item 4.4",
    title: "Climate Risk",
    subtitle: "Turn Eclr into a self serve product with priced risk and adaptation.",
  },



  {
    kind: "board",
    eyebrow: "Climate Risk, 2026",
    title: "Turn Eclr into a self serve product in 2026",
    subtitle: "Asset register and exposure first: the foundations for scenarios and value at risk.",
    lanes: [
      {
        label: "Now",
        period: "Q3 2026",
        tone: "primary",
        items: [
          { name: "Asset and site register on the shared hierarchy" },
          { name: "Eclr platform stabilisation on RA+" },
          { name: "Hazard data foundations" },
          { name: "Resilience impact types in the shared taxonomy" },
        ],
      },
      {
        label: "Next",
        period: "Q4 2026",
        tone: "accent",
        items: [
          { name: "Physical hazard exposure on owned assets" },
          { name: "Eclr turned to a full self serve product" },
          { name: "Scalable performance at portfolio volumes" },
          { name: "Adaptation planning primitives with Strategy" },
        ],
      },
    ],
  },


  {
    kind: "board",
    eyebrow: "Climate Risk, 2027",
    title: "Price the risk in 2027",
    subtitle: "Scenarios, value at risk and adaptation, connected to the rest of the platform.",
    lanes: [
      {
        label: "Later",
        period: "2027 H1",
        tone: "warn",
        items: [
          { name: "Physical and transition scenario analysis" },
          { name: "ClimVar - Value at Risk", note: "Expressed in financial terms" },
          { name: "Adaptation actions tracked with monthly actuals" },
          { name: "Portfolio level risk analytics and heatmaps" },
        ],
      },
      {
        label: "Later",
        period: "2027 H2",
        tone: "muted",
        items: [
          { name: "Transition plan modelling linked to targets" },
          { name: "Risk data flowing into R&C disclosures" },
          { name: "Supply chain and climate risk integration" },
          { name: "Value at risk across the extended value chain" },
        ],
      },
    ],
  },


  {
    kind: "timeline",
    eyebrow: "Climate Risk",
    title: "The Climate Risk plan on a timeline",
    subtitle: "Establish exposure in 2026, then convert scenarios into financial value, adaptation and disclosure in 2027.",
    years: ["2026", "2027"],
    groups: [
      {
        label: "Foundation",
        tone: "primary",
        rows: [
          { title: "Asset and site register", start: 2, end: 3 },
          { title: "Eclr stabilisation and hazard foundations", start: 2, end: 3 },
          { title: "Eclr self serve at portfolio scale", start: 3, end: 4 },
        ],
      },
      {
        label: "Risk insight",
        tone: "accent",
        rows: [
          { title: "Physical hazard exposure", start: 3, end: 4 },
          { title: "Physical and transition scenarios", start: 4, end: 6 },
          { title: "ClimVar - Value at Risk", start: 4, end: 6 },
          { title: "Portfolio analytics and heatmaps", start: 4, end: 6 },
        ],
      },
      {
        label: "Adaptation",
        tone: "warn",
        rows: [
          { title: "Adaptation planning primitives", start: 3, end: 4 },
          { title: "Actions tracked with monthly actuals", start: 4, end: 6 },
          { title: "Transition plans linked to targets", start: 6, end: 8 },
        ],
      },
      {
        label: "Integration",
        tone: "muted",
        rows: [
          { title: "Risk data into disclosures", start: 6, end: 8 },
          { title: "Supply chain risk integration", start: 6, end: 8 },
          { title: "Value at risk across the value chain", start: 6, end: 8 },
        ],
      },
    ],
  },


  {
    kind: "columns",
    eyebrow: "Climate Risk",
    title: "What ships inside the climate risk goals",
    subtitle: "A shared asset model first, then exposure, then decision grade analysis.",
    columns: [
      {
        label: "Goal 1",
        title: "Asset foundation",
        tone: "primary",
        line: "Shared model before analytics.",
        items: [
          "Asset and site register on the shared hierarchy",
          "Eclr platform stabilisation and self serve onboarding",
          "Scalable performance at portfolio data volumes",
          "Role based access aligned to the entity hierarchy",
        ],
      },
      {
        label: "Goal 2",
        title: "Exposure",
        tone: "accent",
        line: "First defensible risk output.",
        items: [
          "Physical hazard exposure on owned assets",
          "Resilience impact types in the shared taxonomy",
          "Portfolio heatmaps and hotspot ranking",
          "Hazard data provenance and methodology transparency",
        ],
      },
      {
        label: "Goal 3",
        title: "Scenarios and value at risk",
        tone: "warn",
        line: "Decision grade analysis.",
        items: [
          "Physical and transition scenario analysis",
          "ClimVar - Value at Risk expressed in financial terms",
          "Time horizon comparison across scenarios",
          "Transition exposure read from the CP inventory",
        ],
      },
      {
        label: "Goal 4",
        title: "Adaptation",
        tone: "muted",
        line: "From risk to response.",
        items: [
          "Adaptation actions on the shared Strategy action model",
          "Monthly plan versus actuals on adaptation measures",
          "Transition plan modelling linked to targets",
          "Supply chain and climate risk integration",
        ],
      },
    ],
  },


  {
    kind: "columns",
    eyebrow: "Climate Risk",
    title: "Climate Risk only pays off when it is connected",
    subtitle: "The forward view is worth little until it reaches disclosures, planning and the supply base.",
    columns: [
      {
        label: "Platform",
        title: "Hierarchy and assets",
        tone: "primary",
        line: "Inherited, not rebuilt.",
        items: [
          "Shared entity and asset hierarchy from core",
          "Bulk import of asset and site data at scale",
          "Reusable analytics and query infrastructure",
          "Performance at enterprise portfolio volumes",
        ],
      },
      {
        label: "Strategy",
        title: "One action model",
        tone: "accent",
        line: "Adaptation reuses decarbonisation plumbing.",
        items: [
          "Adaptation actions as configurable action types",
          "Initiative portfolios covering resilience measures",
          "Monthly actuals and underperformance alerts",
          "Audit ready evidence on adaptation spend",
        ],
      },
      {
        label: "Reporting",
        title: "Risk into disclosure",
        tone: "warn",
        line: "Where the value is realised.",
        items: [
          "Climate Risk outputs into TCFD, ISSB and CSRD climate sections",
          "Value at risk turned into financial values for disclosure",
          "Scenario narrative drafted with lineage back to the model",
          "Transition plan disclosed against targets",
        ],
      },
      {
        label: "Cross product",
        title: "Beyond owned assets",
        tone: "muted",
        line: "Extend the boundary.",
        items: [
          "Supplier site exposure through Supply Chain",
          "Transition exposure from the CP inventory",
          "Cross programme risk and emissions views",
          "Shared hazard taxonomy across products",
        ],
      },
    ],
  },



  // ---------- Strategy ----------
  {
    kind: "section",
    number: "4.5",
    eyebrow: "Agenda item 4.5",
    title: "Strategy",
    subtitle: "Close the plan to execution gap across sustainability and energy.",
  },



  {
    kind: "board",
    eyebrow: "Strategy, 2026",
    title: "Close the plan to execution gap in 2026",
    subtitle: "Actions, recommendations and targets: the shared planning layer consumed by CP decarbonisation, CR adaptation and supplier action.",
    lanes: [
      {
        label: "Now",
        period: "Q3 2026",
        tone: "primary",
        items: [
          { name: "Introduce actions" },
          { name: "Centralised actions library" },
          { name: "Configure action types" },
          { name: "Library of standard initiative types" },
        ],
      },
      {
        label: "Next",
        period: "Q4 2026",
        tone: "accent",
        items: [
          { name: "Actions bulk upload" },
          { name: "ECM recommendations" },
          { name: "Initiative type recommendations" },
          { name: "Energy, water and waste targets" },
          { name: "Advanced scenario analysis and decarbonization planning" },
        ],
      },
    ],
  },


  {
    kind: "board",
    eyebrow: "Strategy, 2027",
    title: "Recommend, then widen scope in 2027",
    subtitle: "Cascading targets and scenario intelligence on top of the 2026 planning layer.",
    lanes: [
      {
        label: "Later",
        period: "2027 H1",
        tone: "warn",
        items: [
          { name: "Complex target structures" },
          { name: "Cascading reduction targets" },
          { name: "Implementation statuses and on track" },
          { name: "Advanced ECM library", note: "Energy and carbon cobenefits" },
          { name: "Enhanced strategy landing page and notifications" },
        ],
      },
      {
        label: "Later",
        period: "2027 H2",
        tone: "muted",
        items: [
          { name: "Qualitative market intelligence" },
          { name: "Net zero scenario suggestions" },
          { name: "Multi hierarchy plans" },
          { name: "Cascading allocation across entities" },
        ],
      },
    ],
  },


  {
    kind: "timeline",
    eyebrow: "Strategy",
    title: "The Strategy plan on a timeline",
    subtitle: "Connect targets to actions in 2026, then scale recommendations, execution insight and enterprise planning in 2027.",
    years: ["2026", "2027"],
    groups: [
      {
        label: "Action model",
        tone: "primary",
        rows: [
          { title: "Actions and centralised library", start: 2, end: 3 },
          { title: "Configurable action and initiative types", start: 2, end: 3 },
          { title: "Actions bulk upload", start: 3, end: 4 },
        ],
      },
      {
        label: "Planning",
        tone: "accent",
        rows: [
          { title: "Energy, water and waste targets", start: 3, end: 4 },
          { title: "Advanced scenario and decarbonization planning", start: 3, end: 4 },
          { title: "Complex and cascading targets", start: 4, end: 6 },
          { title: "Multi hierarchy plans and allocation", start: 6, end: 8 },
        ],
      },
      {
        label: "Guidance",
        tone: "warn",
        rows: [
          { title: "ECM and initiative recommendations", start: 3, end: 4 },
          { title: "Advanced ECM library", start: 4, end: 6 },
          { title: "Market intelligence and net zero suggestions", start: 6, end: 8 },
        ],
      },
      {
        label: "Execution",
        tone: "muted",
        rows: [
          { title: "Implementation status and on track views", start: 4, end: 6 },
          { title: "Strategy landing page and notifications", start: 4, end: 6 },
        ],
      },
    ],
  },


  {
    kind: "columns",
    eyebrow: "Strategy",
    title: "What ships inside the strategy goals",
    subtitle: "Targets and initiatives, then execution, then guided recommendations.",
    columns: [
      {
        label: "Goal 1",
        title: "Planning foundation",
        tone: "primary",
        line: "Targets, scenarios, initiatives.",
        items: [
          "Reduction goals by entity, scope and horizon, with pathway comparison",
          "Initiative portfolios showing contribution to each target",
          "Relevancy and business as usual views",
          "Standard initiative types, impact sequencing",
          "Beyond GHG: energy, water and waste targets",
        ],
      },
      {
        label: "Goal 2",
        title: "Actions execution",
        tone: "accent",
        line: "Programs, projects, purchases.",
        items: [
          "Site level actions with absolute measures under each initiative",
          "Configurable action types published without engineering releases",
          "Monthly plan versus actuals with underperformance alerts",
          "Audit ready evidence: vendor, contract, EAC registry, documents",
          "Centralised action library deployed across many sites",
        ],
      },
      {
        label: "Goal 3",
        title: "Recommendations",
        tone: "warn",
        line: "Sera guided next steps.",
        items: [
          "Site aware energy efficiency measures from the governed ECM catalogue",
          "Initiative type recommendations from residual emissions",
          "Typical savings, cost ranges and feasibility in site context",
          "Later: qualitative market intelligence and net zero scenarios",
        ],
      },
      {
        label: "Goal 4",
        title: "Scale and governance",
        tone: "muted",
        line: "Enterprise structures.",
        items: [
          "Complex and cascading target structures",
          "Multi hierarchy plans and cascading allocation",
          "Implementation statuses and on track reporting",
          "Strategy landing page and notifications",
        ],
      },
    ],
  },


  {
    kind: "columns",
    eyebrow: "Strategy",
    title: "One planning layer serves every product",
    subtitle: "Adaptation actions share the same action model as decarbonisation actions.",
    columns: [
      {
        label: "Carbon Performance",
        title: "Decarbonisation planning",
        tone: "primary",
        line: "Plan against the inventory.",
        items: [
          "Targets set on the governed baseline",
          "Advanced scenario analysis and decarbonization planning",
          "Initiatives and actions management inside CP",
          "Advanced ECM library with energy and carbon cobenefits",
        ],
      },
      {
        label: "Climate Risk",
        title: "Adaptation planning",
        tone: "accent",
        line: "Same model, resilience measures.",
        items: [
          "Adaptation planning primitives",
          "Resilience impact types in the shared taxonomy",
          "Adaptation actions with monthly actuals",
          "Transition plan modelling linked to targets",
        ],
      },
      {
        label: "Supply Chain",
        title: "Supplier action",
        tone: "warn",
        line: "Extend the plan outward.",
        items: [
          "Guided supplier decarbonisation actions",
          "Project recommendations from the shared action library",
          "Programme analytics on supplier progress",
          "Supplier reductions credited to corporate targets",
        ],
      },
      {
        label: "Reporting",
        title: "Evidence and disclosure",
        tone: "muted",
        line: "Plans become statements.",
        items: [
          "Targets and progress disclosed against frameworks",
          "Transition plan narrative with lineage",
          "Audit ready evidence on every action",
          "Indicator performance analytics on plan delivery",
        ],
      },
    ],
  },



  // ---------- Core platform ----------
  {
    kind: "section",
    number: "4.6",
    eyebrow: "Agenda item 4.6",
    title: "Core Platform",
    subtitle: "Shared hierarchy, user workflow, analytics engine, and data governance.",
  },



  {
    kind: "board",
    eyebrow: "Core platform, 2026",
    title: "Data quality foundations in 2026",
    subtitle: "Validation, hierarchy and audit trail: the capabilities every product depends on, delivered once.",
    lanes: [
      {
        label: "Now",
        period: "Q3 2026",
        tone: "primary",
        items: [
          { name: "File and ingestion validation, L0 and L1" },
          { name: "Hierarchies and bulk import at scale" },
          { name: "Shared navigation, layouts and product switcher" },
        ],
      },
      {
        label: "Next",
        period: "Q4 2026",
        tone: "accent",
        items: [
          { name: "Anomaly and consistency checks on aggregates, L2" },
          { name: "Configurable checks, thresholds and approvals" },
          { name: "Audit trail and data lineage on key values" },
          { name: "Allocations foundation" },
        ],
      },
    ],
  },


  {
    kind: "board",
    eyebrow: "Core platform, 2027",
    title: "Ontology and trust in 2027",
    subtitle: "Governance, scoring and AI checks on top of the 2026 data quality foundations.",
    lanes: [
      {
        label: "Later",
        period: "2027 H1",
        tone: "warn",
        items: [
          { name: "Inventory and statement readiness checks, L3" },
          { name: "Control plane for tenant ontology governance" },
          { name: "Calculation governance and versioning" },
          { name: "Reusable analytics and query infrastructure" },
        ],
      },
      {
        label: "Later",
        period: "2027 H2",
        tone: "muted",
        items: [
          { name: "Data quality scoring and confidence metadata, L4" },
          { name: "AI checks and discrepancy management" },
          { name: "Sera agents acting on the shared ontology" },
          { name: "EU hosting, languages, enterprise performance" },
        ],
      },
    ],
  },


  {
    kind: "timeline",
    eyebrow: "Core platform",
    title: "The Core Platform plan on a timeline",
    subtitle: "Advance from validated data to governed intelligence, with trust and scale built once for every product.",
    years: ["2026", "2027"],
    groups: [
      {
        label: "Data quality",
        tone: "primary",
        rows: [
          { title: "File and ingestion validation, L0 and L1", start: 2, end: 3 },
          { title: "Anomaly and consistency checks, L2", start: 3, end: 4 },
          { title: "Inventory readiness checks, L3", start: 4, end: 6 },
          { title: "Quality scoring and confidence, L4", start: 6, end: 8 },
        ],
      },
      {
        label: "Ontology & calc",
        tone: "accent",
        rows: [
          { title: "Hierarchies and bulk import at scale", start: 2, end: 3 },
          { title: "Allocations foundation", start: 3, end: 4 },
          { title: "Ontology control plane", start: 4, end: 6 },
          { title: "Calculation governance and versioning", start: 4, end: 6 },
        ],
      },
      {
        label: "Trust & AI",
        tone: "warn",
        rows: [
          { title: "Configurable checks and approvals", start: 3, end: 4 },
          { title: "Audit trail and data lineage", start: 3, end: 4 },
          { title: "AI checks and discrepancy management", start: 6, end: 8 },
          { title: "Sera agents on the shared ontology", start: 6, end: 8 },
        ],
      },
      {
        label: "Scale",
        tone: "muted",
        rows: [
          { title: "Shared experience and product switcher", start: 2, end: 3 },
          { title: "Reusable analytics infrastructure", start: 4, end: 6 },
          { title: "EU hosting, languages and performance", start: 6, end: 8 },
        ],
      },
    ],
  },


  {
    kind: "columns",
    eyebrow: "Core platform",
    title: "The platform work none of the products can ship alone",
    subtitle: "Funded as core so it is built once and inherited by all products.",
    columns: [
      {
        label: "Goal 1",
        title: "Ingestion and quality",
        tone: "primary",
        line: "Data in, trusted.",
        items: [
          "Pipeline and transformation foundation",
          "Programmatic connectors and APIs",
          "Data quality across the L0 to L4 lifecycle",
          "Standard and supplier specific factor datasets",
        ],
      },
      {
        label: "Goal 2",
        title: "Ontology and calculation",
        tone: "accent",
        line: "One model, one engine.",
        items: [
          "One ontology: typed objects, relationships, actions",
          "Control plane for tenant governance of hierarchies",
          "Allocations and calculation versioning",
          "Automated regression testing on the engine",
        ],
      },
      {
        label: "Goal 3",
        title: "Application and analytics",
        tone: "warn",
        line: "One experience.",
        items: [
          "Unified application experience and product switcher",
          "Reusable analytics and query infrastructure",
          "Sera contextual intelligence across products",
          "Multi level approval and audit trail",
        ],
      },
      {
        label: "Goal 4",
        title: "Trust and reach",
        tone: "muted",
        line: "Enterprise ready.",
        items: [
          "EU hosting and data residency",
          "Languages and localisation",
          "Role based access and segregation of duties",
          "Performance at enterprise data volumes",
        ],
      },
    ],
  },


  {
    kind: "columns",
    eyebrow: "Core platform",
    title: "What core unblocks in each product",
    subtitle: "Core is judged on what the products can ship because of it.",
    columns: [
      {
        label: "Carbon Performance",
        title: "Depth and defensibility",
        tone: "primary",
        items: [
          "Automated data quality checks on activity data",
          "Calculation governance and versioning",
          "Allocations foundation",
          "Audit trail on every inventory value",
        ],
      },
      {
        label: "Supply Chain",
        title: "Scale of engagement",
        tone: "accent",
        items: [
          "Shared navigation, layouts and database",
          "Supplier specific factor datasets",
          "Languages and localisation",
          "Cross product validation against CP inventories",
        ],
      },
      {
        label: "Reporting",
        title: "Launch prerequisites",
        tone: "warn",
        items: [
          "Dataset registry and column mapping",
          "Formula and transform engine",
          "Flexible approval hierarchies",
          "Lineage from source to disclosure field",
        ],
      },
      {
        label: "Risk and Strategy",
        title: "Model and planning",
        tone: "muted",
        items: [
          "Shared entity and asset hierarchy",
          "Reusable analytics and query infrastructure",
          "Sera agents on the shared ontology",
          "Performance at portfolio data volumes",
        ],
      },
    ],
  },



  {
    kind: "section",
    number: "05",
    eyebrow: "Agenda item 5",
    title: "2027 direction",
    subtitle: "Three bets that turn a compliant inventory into a differentiated platform.",
  },


  {
    kind: "board",
    eyebrow: "2027 sequencing",
    title: "How 2027 lays out: H1",
    subtitle: "First half shape of the 2027 bets, based on current theme ranks.",
    lanes: [
      {
        label: "H1 2027",
        period: "Complete the categories",
        tone: "primary",
        items: [
          { name: "Category 4 and 9 product linked transport", note: "Upstream and downstream transport" },
          { name: "Waste emission estimation, category 5" },
          { name: "Enterprise GHG inventory foundations" },
          { name: "Financial and equity consolidation" },
        ],
      },
      {
        label: "H1 2027",
        period: "Governance and trust",
        tone: "accent",
        items: [
          { name: "Calculation governance and methodology transparency" },
          { name: "User defined custom calculation methods" },
          { name: "Reusable inventory setup and boundaries" },
          { name: "Automated regression testing on the engine" },
        ],
      },
    ],
  },


  {
    kind: "board",
    eyebrow: "2027 sequencing",
    title: "How 2027 lays out: H2",
    subtitle: "Second half shape of the 2027 bets, based on current theme ranks.",
    lanes: [
      {
        label: "H2 2027",
        period: "Assurance and AI",
        tone: "warn",
        items: [
          { name: "AI powered emissions troubleshooting" },
          { name: "Year on year variance checks, Scope 1 and 2" },
          { name: "Scope 1, 2, 3 disclosure reporting" },
        ],
      },
      {
        label: "H2 2027",
        period: "Insight and scale",
        tone: "muted",
        items: [
          { name: "Intensity and normalisation metrics" },
          { name: "Water data support" },
          { name: "Multi level approval workflows" },
          { name: "Live currency conversion for spend based calculations" },
        ],
      },
    ],
  },


  {
    kind: "bets",
    eyebrow: "2027 bets",
    title: "Where Carbon Performance goes next",
    subtitle: "Direction for the year, expressed as three bets rather than a list of features.",
    bets: [
      {
        title: "Close the inventory",
        line: "Eliminate the methodology and category gaps that still force hypercare. Consultant grade means no off platform workarounds.",
        items: [
          "Scope 3 category 15 investments",
          "Additional emission sources outside GHGP scopes",
          "Calculation governance and methodology transparency",
          "Inventory boundaries, exclusions and quality",
          "Specialized standards: PCAF, FLAG, Bilan Carbone",
          "Organizational boundary and consolidation",
        ],
      },
      {
        title: "From inventory to decision",
        line: "Turn a trustworthy inventory into boardroom ready insight and self serve planning, the wedge that replaces the consultant.",
        items: [
          "From reporting to decision support",
          "Boardroom ready decarbonization reporting",
          "Self serve decarbonization planning and execution",
          "Decision support for performance management",
          "Dedicated auditor experience",
        ],
      },

      {
        title: "Cross product compounding",
        line: "CP data becomes more valuable when supply chain, climate risk, and reporting and compliance can consume it. Network effects across RA+.",
        items: [
          "Enhanced end to end supply chain emissions management (rank 44)",
          "R&C integration with CP emissions data (rank 33)",
          "Supplier specific emission factors, CP and SC",
          "Reusable analytics infrastructure",
          "PCF integrations",
        ],

      },
    ],
  },



  {
    kind: "bets",
    eyebrow: "2027 bets",
    title: "Where Supply Chain goes next",
    subtitle: "Direction for the year, expressed as three bets rather than a list of features.",
    bets: [
      {
        title: "Win on product carbon footprint",
        line: "Close the competitive gap on PCF so the supply base measures on RA+ rather than on a rival tool.",
        items: [
          "Light PCF calculator, SEED integrations",
          "Advanced tier level subscription",
          "Zeigo Activate sunset, replaced by a light CP calculator",
          "Supplier specific emission factors, CP and SC",
        ],
      },
      {
        title: "Scale supplier participation",
        line: "A network only compounds when suppliers join, stay engaged and keep data flowing across programmes.",
        items: [
          "Supplier onboarding and programme participation",
          "Multi tier supplier visibility",
          "Engagement gamification and leaderboards",
          "Cross programme supplier discovery",
        ],
      },
      {
        title: "From data to supplier action",
        line: "Sponsor decision support turns collected data into evidenced decarbonisation the board can stand behind.",
        items: [
          "Sponsor decision support and supplier transparency",
          "Guided supplier decarbonisation actions",
          "Supply chain and climate risk integration",
          "ESG reporting and compliance integration",
        ],
      },
    ],
  },


  {
    kind: "bets",
    eyebrow: "2027 bets",
    title: "Where Reporting and Compliance goes next",
    subtitle: "Direction for the year, expressed as three bets rather than a list of features.",
    bets: [
      {
        title: "Complete the SE migration",
        line: "Corporate SE runs its Q1 2027 CSRD cycle in RA+, which is the proof point that retires RA Classic for good.",
        items: [
          "Corporate SE fully migrated off RA Classic",
          "Historical data migrated and reconciled",
          "Audit ready disclosures produced in product",
          "Advanced campaign management",
        ],
      },
      {
        title: "AI assisted disclosure",
        line: "Drafting, mapping and analytics compress the cost of every reporting cycle and widen what one team can cover.",
        items: [
          "Governed disclosure authoring with AI drafting",
          "AI compliance intelligence and mapping suggestions",
          "Indicator performance analytics",
          "Approval hierarchies and bulk assignment",
        ],
      },
      {
        title: "The disclosure hub for RA+",
        line: "Every product feeds its evidence into R&C, so disclosure becomes the reason the platform holds together.",
        items: [
          "CP emissions and CR risk feeding disclosures",
          "External assurance and auditor experience",
          "Voluntary frameworks: GRI, SASB, GRESB, EcoVadis",
          "Data receiver from every product to facilitate disclosure",
        ],
      },
    ],
  },


  {
    kind: "bets",
    eyebrow: "2027 bets",
    title: "Where Climate Risk goes next",
    subtitle: "Direction for the year, expressed as three bets rather than a list of features.",
    bets: [
      {
        title: "Price the risk",
        line: "ClimVar turns exposure into financial value at risk, the language the CFO and the board actually trade in.",
        items: [
          "ClimVar - Value at Risk, expressed in financial terms",
          "Physical and transition scenario analysis",
          "Portfolio level risk analytics and heatmaps",
          "Transition plan modelling linked to targets",
        ],
      },
      {
        title: "From risk to funded adaptation",
        line: "Scenarios convert into tracked adaptation actions with monthly actuals, not reports that sit on a shelf.",
        items: [
          "Adaptation planning primitives with Strategy",
          "Adaptation actions tracked with monthly actuals",
          "Value at risk, scenario analysis and adaptation actions",
          "Decision grade analysis at portfolio volumes",
        ],
      },
      {
        title: "Risk beyond owned assets",
        line: "The model extends into the value chain and into disclosures, so risk stops being a standalone exercise.",
        items: [
          "Supply chain and climate risk integration",
          "Value at risk across the extended value chain",
          "Risk data flowing into R&C disclosures",
          "Risk data turned into financial values for disclosure",
        ],
      },
    ],
  },


  {
    kind: "bets",
    eyebrow: "2027 bets",
    title: "Where the RA+ Platform goes next",
    subtitle: "Direction for the year, expressed as three bets that every product inherits.",
    bets: [
      {
        title: "One trusted data backbone",
        line: "Ingestion, quality and ontology are built once so Carbon Performance, Supply Chain, Reporting and Climate Risk all consume the same source of truth.",
        items: [
          "Advanced data ingestion and transformation rules",
          "Data quality across the L0 to L4 lifecycle",
          "Control plane for tenant ontology governance",
          "Programmatic connectors and APIs",
          "Data receiver from every product to facilitate disclosure",
        ],
      },
      {
        title: "One calculation and trust engine",
        line: "Calculations, allocations and lineage are governed centrally so every product's numbers are defensible and reproducible.",
        items: [
          "Calculation governance and versioning",
          "Allocations foundation",
          "Audit trail and data lineage on key values",
          "Automated regression testing on the engine",
          "Anomaly and consistency checks on aggregates",
        ],
      },
      {
        title: "Enterprise scale and intelligence",
        line: "EU hosting, languages, performance and Sera make RA+ deployable at enterprise scale and understandable to every user.",
        items: [
          "EU hosting and data residency",
          "Languages and localisation",
          "Performance at enterprise data volumes",
          "Sera agents acting on the shared ontology",
          "Reusable analytics and query infrastructure",
        ],
      },
    ],
  },


  {
    kind: "vision",
    badge: "2027 VISION",
    titleLead: "From data you collect",
    titleHighlight: "to intelligence that decides.",
    titleRest: "",
    manifesto:
      "By 2027, RA+ is no longer the place where sustainability data is stored. It is the place where the business is run: every footprint consultant grade, every risk priced in financial terms, every disclosure generated from the same trusted numbers, every decision grounded in one shared source of truth.",
    promises: [
      {
        title: "One platform",
        line: "Sustainability, Energy and Efficiency converge on a single data spine. One hierarchy, one ontology, one version of the truth for every product.",
      },
      {
        title: "AI native",
        line: "Sera agents act on the shared ontology across every product, turning data into recommendations, scenarios and actions before anyone asks.",
      },
      {
        title: "Board grade",
        line: "Every number is auditable, every disclosure is generated, every value at risk is expressed in the language the CFO and the board trade in.",
      },
    ],
    tagline: "End-to-end value, only we can deliver.",
  },


  {
    kind: "strategicroadmap",
    badge: "BEYOND 2027 | DIRECTIONAL",
    title: "The long-term path: from connected products to an autonomous value platform",
    subtitle:
      "A strategic horizon, not a committed release plan. Each stage compounds the shared data, intelligence and experience built through 2027.",
    horizons: [
      {
        period: "2028",
        title: "Scale the platform",
        thesis: "Make one trusted foundation deployable across the enterprise and the extended value chain.",
        milestones: [
          "Sustainability Performance broadens the carbon baseline",
          "Energy and efficiency data converge on the shared spine",
          "Global deployment, localisation and ecosystem APIs",
        ],
        tone: "primary",
      },
      {
        period: "2029",
        title: "Industrialise intelligence",
        thesis: "Turn shared context into decision support that works across every product and workflow.",
        milestones: [
          "Cross-domain scenarios connect cost, carbon, energy and risk",
          "Sera orchestrates recommendations across the portfolio",
          "Predictive controls surface value and exposure earlier",
        ],
        tone: "accent",
      },
      {
        period: "2030+",
        title: "Autonomous value",
        thesis: "Move from insight to governed action, with humans setting ambition, guardrails and accountability.",
        milestones: [
          "Continuous optimisation of energy, efficiency and sustainability",
          "Closed-loop execution with evidence and assurance by design",
          "Outcome-led services powered by the RA+ intelligence layer",
        ],
        tone: "warn",
      },
    ],
    drivers: [
      { title: "Customer economics", line: "Convert fragmented spend into measurable enterprise value." },
      { title: "Regulation and trust", line: "Keep every decision traceable, defensible and disclosure ready." },
      { title: "AI-native differentiation", line: "Use shared context to move from copilots to governed agents." },
      { title: "Platform leverage", line: "Build core capabilities once, then compound them across every product." },
    ],
    note: "Strategic direction beyond 2027. Sequencing and investment gates remain subject to customer validation, architecture readiness and annual portfolio decisions.",
  },


  {
    kind: "section",
    number: "05b",
    eyebrow: "Appendix",
    title: "Energy & Efficiency product roadmaps",
    subtitle:
      "One page per product, in family order, with its own milestones. Full detail lives on the product pages linked from the roadmap gap matrix.",
  },

  ...orderedEnergyProducts.map((product): CPSlide => ({
    kind: "columns",
    eyebrow: `Energy & Efficiency roadmap`,
    title: product.name,
    subtitle: product.tagline,
    columns: product.roadmap.slice(0, 4).map((phase, i) => ({
      label: phase.period,
      title: phase.label,
      items: phase.items.slice(0, 4),
      tone: (["primary", "accent", "warn", "muted"] as const)[i],
    })),
    note: `Capability position: ${product.position}. ${product.positionNote} Product page: /energy-products/${product.slug}. Roadmap gap matrix: /competitor-matrix.`,
  })),

  {
    kind: "section",
    number: "05c",
    eyebrow: "Appendix",
    title: "Sustainability product roadmaps",
    subtitle:
      "One page per product, in family order: Carbon Performance, Supply Chain, Reporting and Compliance, Climate Risk, then the shared products. Full detail lives on the product pages linked from the roadmap gap matrix.",
  },

  ...orderedSustainabilityProducts.map((product): CPSlide => ({
    kind: "columns",
    eyebrow: `Sustainability roadmap | ${product.family}`,
    title: product.name,
    subtitle: product.tagline,
    columns: product.roadmap.slice(0, 4).map((phase, i) => ({
      label: phase.period,
      title: phase.label,
      items: phase.items.slice(0, 4),
      tone: (["primary", "accent", "warn", "muted"] as const)[i],
    })),
    note: `Capability position: ${product.position}. ${product.positionNote} Product page: /sustainability-products/${product.slug}. Roadmap gap matrix: /competitor-matrix.`,
  })),

  {
    kind: "section",
    number: "06",
    eyebrow: "Agenda item 6",
    title: "Risks and decisions",
    subtitle: "What has to be true, and what we need from this room.",
  },


  {
    kind: "columns",
    eyebrow: "Risk",
    title: "The four things that could break this plan",
    subtitle: "Each risk carries an owner and a mitigation already in motion.",
    columns: [
      {
        label: "Risk 01",
        title: "Capacity overrun",
        tone: "warn",
        line: "127 Q4 slots against roughly 45 of capacity. Without a cut, everything slips a little and nothing lands.",
        items: ["Mitigation: hold the ranked cut line", "Owner: CP product leadership"],
      },
      {
        label: "Risk 02",
        title: "Unranked demand",
        tone: "warn",
        line: "11 themes hold 27 Q4 solutions with no JPD rank, so they cannot be sequenced against everything else.",
        items: ["Mitigation: rank all CP themes before Q4 lock", "Owner: CP product leadership"],
      },
      {
        label: "Risk 03",
        title: "Platform dependencies",
        tone: "warn",
        line: "Ingestion, data quality and emission factor datasets sit outside CP delivery control.",
        items: ["Mitigation: confirmed commitments per platform team", "Owner: platform PMs"],
      },
      {
        label: "Risk 04",
        title: "Hypercare drag",
        tone: "warn",
        line: "Every methodology gap left open pulls delivery engineers into client escalations instead of roadmap work.",
        items: ["Mitigation: the Q4 emission factor wedge", "Owner: CP engineering and delivery"],
      },
    ],
  },


  {
    kind: "columns",
    eyebrow: "Assumptions",
    title: "What has to be true",
    subtitle: "The plan holds only if these four conditions hold.",
    columns: [
      {
        label: "Condition 01",
        title: "Core capacity is protected",
        tone: "primary",
        line: "Roughly one third of capacity stays with Core Platform through 2027.",
        items: ["Signal: core commitments delivered on plan", "Owner: platform leadership"],
      },
      {
        label: "Condition 02",
        title: "Migration lands on time",
        tone: "primary",
        line: "The Schneider Electric migration and CSRD cycle completes in Q1 2027.",
        items: ["Signal: cycle delivered with no reporting gap", "Owner: delivery and R&C"],
      },
      {
        label: "Condition 03",
        title: "Data quality reaches threshold",
        tone: "accent",
        line: "Trusted inventory and lineage come before scaled AI and automation.",
        items: ["Signal: agreed quality thresholds met", "Owner: Core Platform"],
      },
      {
        label: "Condition 04",
        title: "Value is measured, not assumed",
        tone: "accent",
        line: "Finance validates baselines and owners for each of the three value ledgers.",
        items: ["Signal: quarterly evidence accepted", "Owner: Finance and Product"],
      },
    ],
  },


  {
    kind: "bets",
    eyebrow: "Governance",
    title: "Stop, adjust, scale",
    subtitle: "How the board responds when the evidence at a gate disagrees with the plan.",
    bets: [
      {
        title: "Stop",
        line: "Evidence shows the outcome will not materialise on the current approach.",
        items: ["Data quality thresholds repeatedly missed", "No cross-product adoption after a full cycle", "Redirect capacity to the next ranked outcome"],
      },
      {
        title: "Adjust",
        line: "The direction holds but the sequence or scope needs re-cutting.",
        items: ["Re-rank against confirmed capacity", "Move commitments between horizons, not out of scope", "Re-baseline the affected value ledger"],
      },
      {
        title: "Scale",
        line: "Proof points are met and the platform is compounding faster than isolated investment.",
        items: ["Lighthouse evidence published", "Finance confirms measured contribution", "Fund the next tranche and widen the rollout"],
      },
    ],
    note: "Each gate produces one of these three decisions, recorded with the evidence behind it.",
  },


  {
    kind: "board",
    eyebrow: "Execution",
    title: "The first 90 days after approval",
    subtitle: "What happens immediately, with named owners.",
    lanes: [
      {
        label: "Days 0 to 30",
        period: "Lock and baseline",
        tone: "primary",
        items: [
          { name: "Q4 scope locked at the ranked cut line", note: "Owner: CP product leadership" },
          { name: "All unranked themes ranked", note: "Owner: product leadership" },
          { name: "Finance baselines opened for the three value ledgers", note: "Owner: Finance" },
        ],
      },
      {
        label: "Days 31 to 60",
        period: "Prove and prepare",
        tone: "accent",
        items: [
          { name: "Lighthouse accounts selected", note: "Owner: Sales and delivery" },
          { name: "Core Platform commitments confirmed per team", note: "Owner: platform PMs" },
          { name: "Migration and CSRD plan validated to Q1 2027", note: "Owner: delivery and R&C" },
        ],
      },
      {
        label: "Days 61 to 90",
        period: "Commit and report",
        tone: "accent",
        items: [
          { name: "Commercial model validated with Finance", note: "Owner: commercial leadership" },
          { name: "Board scorecard first reading issued", note: "Owner: Finance and Product" },
          { name: "Gate 1 decision pack prepared", note: "Owner: RA+ leadership" },
        ],
      },
    ],
    note: "Dates start from board approval. Nothing on this page depends on unvalidated figures.",
  },


  {
    kind: "bets",
    eyebrow: "Decisions requested",
    title: "What we ask of the board",
    subtitle: "Four decisions, each with a clear consequence if deferred.",
    bets: [
      {
        title: "Approve the platform sequence",
        line: "Trusted data and calculation governance ahead of scaled AI and automation.",
        items: ["Consequence if deferred: AI amplifies weak inputs", "Decision needed at Gate 1"],
      },
      {
        title: "Protect Core Platform capacity",
        line: "Treat core capacity as portfolio capacity for the whole of 2027.",
        items: ["Consequence if deferred: every product outcome slips", "Decision needed at Q4 lock"],
      },
      {
        title: "Assign the value ledgers",
        line: "Finance and Product name owners, baselines and realization rules.",
        items: ["Consequence if deferred: value cannot be evidenced", "Decision needed within 30 days"],
      },
      {
        title: "Gate the next horizon",
        line: "Fund 2028 against proof points, with explicit stop, adjust and scale decisions.",
        items: ["Consequence if deferred: directional bets harden into promises", "Decision needed at Gate 3"],
      },
    ],
  },


  {

    kind: "closing",
    eyebrow: "The ask",
    title: "What we need to leave with today",
    subtitle: "Three immediate asks that unlock the Q4 lock and the shape of 2027.",
    asks: [
      {
        title: "Endorse the Q4 wedge",
        line: "Emission factors and calculation depth first, with the deferred list accepted as stated.",
      },
      {
        title: "Hold the capacity line",
        line: "Approve roughly 45 solution slots for Q4 and the ranked cut at organizational boundary and consolidation.",
      },
      {
        title: "Confirm the 2027 bets",
        line: "Close the inventory, move from measurement to decisions, and compound CP data across RA+.",
      },
    ],
  },


];

// The shared September deck is the source of truth for the presentation.
// Several source slides use two board layouts in the app for legibility.
const sharedDeckSlideNumbers = [
  11, 12, 13, 15, 18, 19, 14, 17, 24, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
  39, 49, 50, 51, 52, 53, 54, 55, 62, 63, 64, 65, 66, 69, 70, 71, 73, 76, 77,
  79, 80, 82, 83, 85, 92, 95, 96, 98, 101, 102, 104, 105, 110, 111, 112, 113,
  114, 115, 116, 117, 118, 119, 120, 121,
];

const sharedCpDeck = sharedDeckSlideNumbers.flatMap((slideNumber) => {
  const slide = fullCpDeck[slideNumber - 1];
  return slide ? [slide] : [];
});

const carbonStatusTests: CPSlide[] = [
  {
    kind: "board",
    eyebrow: "Carbon Performance, status test",
    title: "Carbon Performance roadmap by delivery confidence",
    subtitle: "The same roadmap reframed around what is underway, committed, planned and still aspirational.",
    lanes: [
      {
        label: "In delivery",
        period: "Q3 2026",
        tone: "primary",
        items: [
          { name: "Sold product emissions", note: "Scope 3 categories 10, 11 and 12" },
          { name: "System admin improvements", note: "Configuration, methods and templates" },
          { name: "Inventory revamp", note: "Clarity and per gas breakdown" },
          { name: "Pre-calculated emissions import", note: "Client-calculated data ingestion" },
        ],
      },
      {
        label: "Committed",
        period: "Q4 2026 committed",
        tone: "accent",
        items: [
          { name: "EAC and PPA management", note: "Market based Scope 2" },
          { name: "Base year, exclusions and materiality", note: "GHGP compliant boundaries" },
          { name: "Thermal source attribution", note: "Scope 1 and 2 split" },
          { name: "Refrigerant leakage to usage", note: "Scope 1 fugitive emissions" },
        ],
      },
      {
        label: "Planned",
        period: "Q4 2026 planned",
        tone: "warn",
        items: [
          { name: "Employee commuting and WFH", note: "Scope 3 category 7" },
          { name: "Sera for carbon inventory", note: "AI guided troubleshooting" },
          { name: "Scenario and decarbonization planning", note: "Initiatives and actions" },
        ],
      },
      {
        label: "Aspirational",
        period: "2027",
        tone: "muted",
        items: [
          { name: "Close transport and waste categories", note: "Categories 4, 5 and 9" },
          { name: "Consolidation and rebaselining", note: "Ownership and base year controls" },
          { name: "PCF and ECM integration", note: "Cross-product intelligence" },
          { name: "Category 15 and FLAG", note: "Specialised standards" },
          { name: "Dedicated auditor experience", note: "Assurance workflows" },
        ],
      },
    ],
  },
  {
    kind: "columns",
    eyebrow: "Carbon Performance, status test",
    title: "What each delivery status means for the roadmap",
    subtitle: "A decision-oriented breakdown separates active delivery from commitments, plans and longer-term ambition.",
    columns: [
      {
        label: "In delivery, Q3",
        title: "Work is active",
        line: "Teams and scope are mobilized now.",
        tone: "primary",
        items: ["Sold product emissions", "Inventory revamp", "Pre-calculated emissions import", "System administration"],
      },
      {
        label: "Committed, Q4",
        title: "Outcome is protected",
        line: "Scope is committed within the delivery envelope.",
        tone: "accent",
        items: ["EAC and PPA management", "Base year and materiality", "Thermal source attribution", "Refrigerant leakage"],
      },
      {
        label: "Planned, Q4",
        title: "Sequenced, not protected",
        line: "The intent is clear, but delivery depends on capacity.",
        tone: "warn",
        items: ["Employee commuting and WFH", "Sera inventory guidance", "Scenario planning", "Actions management"],
      },
      {
        label: "Aspirational, 2027",
        title: "Direction, not commitment",
        line: "The ambition is retained without implying a fixed date.",
        tone: "muted",
        items: ["Remaining Scope 3 categories", "Consolidation and rebaselining", "PCF and ECM integration", "Audit experience"],
      },
    ],
    note: "Test framing: status reflects delivery confidence, not product priority.",
  },
];

export const cpDeck: CPSlide[] = [
  ...sharedCpDeck.slice(0, 33),
  ...carbonStatusTests,
  ...sharedCpDeck.slice(33),
];
