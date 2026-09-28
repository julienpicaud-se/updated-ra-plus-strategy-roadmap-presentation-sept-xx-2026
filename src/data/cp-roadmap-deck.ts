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
      "Data hierarchy & calc engine",
      "Analytics & Dashboards",
      "Target mgmt",
      "Scenario analysis",
      "Actions and Adaptations",
      "AI agents & forecasting",
      "Workflows & audit trail",
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
    sharedCapabilities: [
      "Data ingestion & transformation",
      "Data quality",
      "Data hierarchy & calc engine",
      "Analytics & Dashboards",
      "Target mgmt",
      "Scenario analysis",
      "Actions and Adaptations",
      "AI agents & forecasting",
      "Workflows & audit trail",
    ],
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
    
    sharedCapabilities: [
      "Data ingestion & transformation",
      "Data quality",
      "Data hierarchy & calc engine",
      "Analytics & Dashboards",
      "Target mgmt",
      "Scenario analysis",
      "Actions and Adaptations",
      "AI agents & forecasting",
      "Workflows & audit trail",
    ],
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
    title: "Where we are taking Carbon Performance in 2026",
    subtitle: "Trusted JPD view as of 24 Sep 2026. Q4 inventory load is heavy, and several planning themes are still not shaped.",
    lanes: [
      {
        label: "Goal 1",
        period: "Sustainability Data Foundation",
        tone: "primary",
        items: [
          { name: "Q3: Automated data quality checks", note: "Releasing, shaped" },
          { name: "Q3: Accor portfolio data experience", note: "Releasing, shaped" },
          { name: "Q4: Data collection setup foundation", note: "Shaped" },
          { name: "Q4: Decarbonization planning and tracking", note: "Shaped" },
        ],
      },
      {
        label: "Goal 2",
        period: "Consultant-Grade GHG Inventory",
        tone: "accent",
        items: [
          { name: "Q3: Inventory statements revamp", note: "Releasing, shaped" },
          { name: "Q4: Pre-calculated emissions import", note: "Shaped" },
          { name: "Q4: Energy attribute certificates", note: "In discovery" },
          { name: "Q4: 10 inventory themes", note: "4 shaped, 3 in discovery" },
        ],
      },
      {
        label: "Goal 3",
        period: "Agentic Decarbonization Planning",
        tone: "warn",
        items: [
          { name: "Q4: Decarbonization actions", note: "Shaped" },
          { name: "Q4: Target management and progress monitoring", note: "Not shaped" },
          { name: "Q4: Four planning themes", note: "1 shaped, none in discovery" },
        ],
      },
    ],
    note: "Internal. Themes from JPD as of 2026-09-24.",
  },
  {
    kind: "board",
    eyebrow: "Carbon Performance, 2027",
    title: "Where we are taking Carbon Performance in 2027",
    subtitle: "Q1 and Q2 show current planning. H2 remains indicative.",
    lanes: [
      {
        label: "Goal 1",
        period: "Sustainability Data Foundation",
        tone: "primary",
        items: [
          { name: "Q1: Sera with data context", note: "Shaped" },
          { name: "Q1: Navigate and analyze your data", note: "Shaped" },
          { name: "Q2: Data collection lifecycle", note: "In discovery" },
        ],
      },
      {
        label: "Goal 2",
        period: "Consultant-Grade GHG Inventory",
        tone: "accent",
        items: [
          { name: "Q1: Scope 3 product emissions", note: "Categories 1, 4, 9, 10, 11, 12" },
          { name: "Q1: Enterprise inventory foundations", note: "Shaped" },
          { name: "Q2: Inventory management UX", note: "In discovery" },
          { name: "Q2: Calculation governance and transparency", note: "Not shaped" },
          { name: "H2: Category 15 investments and specialized standards", note: "FLAG and PCAF, indicative" },
        ],
      },
      {
        label: "Goal 3",
        period: "Agentic Decarbonization Planning",
        tone: "warn",
        items: [
          { name: "Q1: Decision support for performance", note: "Shaped" },
          { name: "Q1: Boardroom-ready reporting", note: "Not shaped" },
          { name: "Q2: Proactive AI support", note: "In discovery" },
        ],
      },
    ],
    note: "Internal. 2027 H2 is indicative.",
  },
  {
    kind: "timeline",
    eyebrow: "Carbon Performance",
    title: "Carbon Performance goals on a timeline: foundation and inventory",
    subtitle: "The trusted roadmap keeps goal ownership visible while delivery confidence develops.",
    years: ["2026", "2027"],
    groups: [
      {
        label: "Data foundation",
        tone: "primary",
        rows: [
          { title: "Automated data quality and Accor experience", start: 2, end: 3 },
          { title: "Data collection setup and planning tracking", start: 3, end: 4 },
          { title: "Sera context and data analysis", start: 4, end: 5 },
          { title: "Data collection lifecycle", start: 5, end: 6 },
        ],
      },
      {
        label: "GHG inventory",
        tone: "accent",
        rows: [
          { title: "Inventory statements revamp", start: 2, end: 3 },
          { title: "Pre-calculated emissions and EACs", start: 3, end: 4 },
          { title: "Scope 3 products and enterprise foundations", start: 4, end: 5 },
          { title: "Inventory UX and calculation governance", start: 5, end: 6 },
          { title: "Category 15, FLAG and PCAF", start: 6, end: 8 },
        ],
      },
    ],
  },
  {
    kind: "timeline",
    eyebrow: "Carbon Performance",
    title: "Carbon Performance goals on a timeline: agentic planning",
    subtitle: "Planning moves from actions and targets to decision support and proactive AI.",
    years: ["2026", "2027"],
    groups: [
      {
        label: "Plan and track",
        tone: "warn",
        rows: [
          { title: "Decarbonization actions", start: 3, end: 4 },
          { title: "Target management and progress monitoring", start: 3, end: 4 },
          { title: "Decision support for performance", start: 4, end: 5 },
          { title: "Boardroom-ready reporting", start: 4, end: 5 },
          { title: "Proactive AI support", start: 5, end: 6 },
        ],
      },
    ],
    note: "Several planning themes remain unshaped. H2 is indicative.",
  },


  {
    kind: "columns",
    eyebrow: "Carbon Performance",
    title: "What ships inside the Carbon Performance goals",
    subtitle: "Three goals establish the governed foundation, bring GSP inventory work in-product, and create software-only growth.",
    columns: [
      {
        label: "Goal 1",
        title: "Build the Sustainability Data Foundation",
        tone: "primary",
        line: "The governed data and decision foundation for carbon, water, and waste.",
        items: [
          "Shared sustainability data model across carbon, water, and waste",
          "Governed ingestion, quality, hierarchy, and calculation methods",
          "Reusable metrics, analytics, and decision-ready outputs",
          "Traceable data consumed across the RA+ platform",
        ],
      },
      {
        label: "Goal 2",
        title: "Deliver Consultant-Grade GHG Inventory Management In-Product",
        tone: "accent",
        line: "GSP consultants and clients share one end-to-end workflow.",
        items: [
          "GSP inventory management offers delivered in-product",
          "Consultancy-standard methods, controls, and evidence",
          "Shared consultant and client workflow from data to assurance",
          "Coverage, boundaries, rebaselining, and audit readiness",
        ],
      },
      {
        label: "Goal 3",
        title: "Establish Market-Leading Agentic Decarbonization Planning",
        tone: "warn",
        line: "Financially actionable planning without consulting dependency.",
        items: [
          "Agentic scenario analysis and next-best-action guidance",
          "Financially actionable initiatives and abatement pathways",
          "Energy, carbon, and cost cobenefits in one plan",
          "Software-only experience usable without consulting support",
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
    subtitle: "Governed sustainability data, consultant-grade inventory, and agentic decarbonization planning.",
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
    subtitle: "Complete migration, close sponsor and data gaps, then educate suppliers and drive action.",
  },
  {
    kind: "table",
    eyebrow: "Supply Chain, leadership roadmap",
    title: "All goals and themes at a glance",
    subtitle: "Trusted source view as of 24 Sep 2026. Q3 and Q4 2027 remain indicative.",
    headers: ["Strategic goal", "2026 Q4", "2027 Q1", "2027 Q2", "2027 Q3", "2027 Q4"],
    rows: [
      ["SC 2026 #1: Complete RA+ migration", "Shared UI, translation, architecture and backend migrations", "", "", "", ""],
      ["SC 2026 #2: Close sponsor and data gaps", "Custom questionnaires", "Supplier EFs, estimates, DQ and multi-tier visibility", "PCF calculator, E2E emissions, flexible packages", "", ""],
      ["SC 2026 #3: Educate suppliers and drive action", "Guidance, education and AI outreach", "In-app and email updates", "", "", ""],
      ["SC 2027 #1: Support SMEs", "", "", "Trusted SME calculation engine", "SME migration to RA+", "Zeigo Activate phase-out"],
      ["SC 2027 #2: Build resilience and ESG compliance", "", "Supplier climate exposure", "AI insights and EcoVadis ratings", "Disclosure data and ESG alerts", "Supplier improvement actions"],
      ["SC 2027 #3: Drive engagement and stickiness", "Sponsor uploads and views", "Usage, energy hotspots and live training", "Decision support and PPA cohorts", "Procurement action integrations", "Branding, recognition and milestones"],
    ],
    note: "Card confidence in the source: shaped, discovery, or not shaped. Zeigo Network integration is unscheduled.",
  },
  {
    kind: "board",
    eyebrow: "Supply Chain, leadership roadmap",
    title: "2026 goals: platform, supplier data, and supplier action",
    subtitle: "Themes are grouped under the three 2026 goals, with timing and confidence preserved from live JPD.",
    lanes: [
      {
        label: "SC 2026 #1",
        period: "Complete RA+ migration",
        tone: "primary",
        items: [
          { name: "Q4: Shared UI and translation service", note: "Shaped" },
          { name: "Q4: Architecture and backend migrations", note: "Shaped" },
        ],
      },
      {
        label: "SC 2026 #2",
        period: "Close sponsor and data gaps",
        tone: "accent",
        items: [
          { name: "Q4: Custom questionnaires", note: "In discovery" },
          { name: "Q1: Real supplier emission factors", note: "In discovery, depends on CP" },
          { name: "Q1: Trusted estimates and third-party sources", note: "In discovery" },
          { name: "Q1: Data quality and multi-tier visibility", note: "Discovery" },
          { name: "Q2: Simple product footprint calculator", note: "Not shaped, depends on CP" },
          { name: "Q2: E2E emissions and flexible packages", note: "Discovery and not shaped" },
        ],
      },
      {
        label: "SC 2026 #3",
        period: "Educate suppliers and drive action",
        tone: "warn",
        items: [
          { name: "Q4: Personalized renewable and decarbonization guidance", note: "In discovery" },
          { name: "Q4: Supplier education pathways", note: "In discovery" },
          { name: "Q4: AI-personalized outreach", note: "Not shaped" },
          { name: "Q1: Timely in-app and email updates", note: "Not shaped" },
        ],
      },
    ],
    note: "Watch: Shared UI and backend migration are the only shaped themes. The PCF calculator has no solutions yet.",
  },
  {
    kind: "board",
    eyebrow: "Supply Chain, leadership roadmap",
    title: "2027 goals: SMEs, resilience, and engagement",
    subtitle: "The second half is indicative. All eight Q3 and Q4 themes are not yet shaped.",
    lanes: [
      {
        label: "SC 2027 #1",
        period: "Support SMEs",
        tone: "primary",
        items: [
          { name: "Q2: Trusted SME calculation engine", note: "Not shaped" },
          { name: "Q3: Seamless SME move to RA+", note: "Indicative, not shaped" },
          { name: "Q4: Controlled Zeigo Activate phase-out", note: "Indicative, not shaped" },
        ],
      },
      {
        label: "SC 2027 #2",
        period: "Resilience and ESG compliance",
        tone: "accent",
        items: [
          { name: "Q1: Supplier climate risk exposure", note: "In discovery" },
          { name: "Q2: AI insights and leadership reports", note: "In discovery" },
          { name: "Q2: EcoVadis supplier ratings", note: "Not shaped" },
          { name: "Q3: CSRD, ISSB and Scope 3 data", note: "Indicative" },
          { name: "Q3: Real-time ESG alerts", note: "Indicative" },
          { name: "Q4: Supplier improvement actions", note: "Indicative" },
        ],
      },
      {
        label: "SC 2027 #3",
        period: "Engagement and stickiness",
        tone: "warn",
        items: [
          { name: "Q4 2026: Sponsor uploads and data views", note: "Not shaped" },
          { name: "Q1: Usage, energy hotspots and live training", note: "In discovery" },
          { name: "Q2: Decision support and PPA cohorts", note: "Discovery and not shaped" },
          { name: "Q3: Procurement action integrations", note: "Indicative" },
          { name: "Q4: Branding, recognition and milestones", note: "Indicative" },
        ],
      },
    ],
    note: "Zeigo Network integration has no quarter. Activate retirement runs engine Q2, migration Q3, phase-out Q4 2027.",
  },


  {
    kind: "columns",
    eyebrow: "Supply Chain",
    title: "What ships inside the supply chain goals",
    subtitle: "Stabilize RA+ first, close sponsor and collection gaps next, then turn supplier learning into action.",
    columns: [
      {
        label: "Goal 1",
        title: "Complete the RA+ Migration and Stabilize the Platform",
        tone: "primary",
        line: "Finish Hub 2.0 to RA+ before investing in differentiation.",
        items: [
          "Complete the Hub 2.0 to RA+ Supply Chain migration",
          "Stabilize the platform and core experience",
          "Shared navigation, page layouts and responsive design",
          "Sera embedded onboarding and recommendations",
          "Protect reliability before differentiation capacity",
        ],
      },
      {
        label: "Goal 2",
        title: "Close Competitive Gaps in Sponsor Intelligence and Data Collection",
        tone: "accent",
        line: "Give sponsors stronger programme control and better supplier data.",
        items: [
          "Sponsor-facing programme management and analytics",
          "PCF data collection and product-level footprint views",
          "Custom questionnaires and guided collection campaigns",
          "Supplier transparency, quality, and hotspot intelligence",
        ],
      },
      {
        label: "Goal 3",
        title: "Educate Suppliers and Drive Action",
        tone: "warn",
        line: "Make RA+ the place where suppliers learn, identify opportunities, and act.",
        items: [
          "Supplier emissions education through Carbon Performance",
          "Reduction opportunities and guided decarbonization actions",
          "Zeigo Network reach, content, and programme participation",
          "Sponsor evidence of supplier engagement and progress",
        ],
      },
    ],
  },


  {
    kind: "board",
    eyebrow: "Supply Chain, leadership roadmap",
    title: "2027 goals: SMEs, resilience, and engagement",
    subtitle: "The second half is indicative. All eight Q3 and Q4 themes are not yet shaped.",
    lanes: [
      {
        label: "SC 2027 #1",
        period: "Support SMEs",
        tone: "primary",
        items: [
          { name: "Q2: Trusted SME calculation engine", note: "Not shaped" },
          { name: "Q3: Seamless SME move to RA+", note: "Indicative, not shaped" },
          { name: "Q4: Controlled Zeigo Activate phase-out", note: "Indicative, not shaped" },
        ],
      },
      {
        label: "SC 2027 #2",
        period: "Resilience and ESG compliance",
        tone: "accent",
        items: [
          { name: "Q1: Supplier climate risk exposure", note: "In discovery" },
          { name: "Q2: AI insights and leadership reports", note: "In discovery" },
          { name: "Q2: EcoVadis supplier ratings", note: "Not shaped" },
          { name: "Q3: CSRD, ISSB and Scope 3 data", note: "Indicative" },
          { name: "Q3: Real-time ESG alerts", note: "Indicative" },
          { name: "Q4: Supplier improvement actions", note: "Indicative" },
        ],
      },
      {
        label: "SC 2027 #3",
        period: "Engagement and stickiness",
        tone: "warn",
        items: [
          { name: "Q4 2026: Sponsor uploads and data views", note: "Not shaped" },
          { name: "Q1: Usage, energy hotspots and live training", note: "In discovery" },
          { name: "Q2: Decision support and PPA cohorts", note: "Discovery and not shaped" },
          { name: "Q3: Procurement action integrations", note: "Indicative" },
          { name: "Q4: Branding, recognition and milestones", note: "Indicative" },
        ],
      },
    ],
    note: "Zeigo Network integration has no quarter. Activate retirement runs engine Q2, migration Q3, phase-out Q4 2027.",
  },



  // ---------- Reporting and Compliance ----------
  {
    kind: "section",
    number: "4.3",
    eyebrow: "Agenda item 4.3",
    title: "Reporting and Compliance",
    subtitle: "Deliver end-to-end CSRD and IFRS reporting, then automate advisory-heavy work.",
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
    subtitle: "Schneider Electric's migration and must-haves lead the plan, with AI and cross-product data removing advisory-heavy steps.",
    columns: [
      {
        label: "Goal 1",
        title: "Provide E2E Reporting Experience for CSRD & IFRS",
        tone: "primary",
        line: "Migrate corporate Schneider Electric from RAC to RA+.",
        items: [
          "Schneider Electric must-haves prioritized above other R&C objectives",
          "End-to-end CSRD, ESRS, EU Taxonomy, and IFRS S1 and S2",
          "Historical data migration and governed reporting cycles",
          "Indicator management, approvals, lineage, and audit-ready outputs",
        ],
      },
      {
        label: "Goal 2",
        title: "Automate Advisory-Heavy Steps",
        tone: "accent",
        line: "Turn governed platform data into disclosure-ready outputs.",
        items: [
          "AI-assisted transformation, mapping, drafting, and review",
          "Carbon Performance data flows directly into disclosures",
          "Climate Risk outputs populate climate and financial reporting",
          "Supply Chain evidence supports value-chain disclosures",
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
    subtitle: "Bring the service line into RA+, expand risk coverage, and drive adaptation action.",
  },



  {
    kind: "board",
    eyebrow: "Climate Risk roadmap",
    title: "Bring the service line into RA+",
    subtitle: "Latest source of truth, data as of Sep 23, 2026. Thirteen themes move Climate Risk into a scalable RA+ product.",
    lanes: [
      {
        label: "Done",
        period: "Delivered",
        tone: "primary",
        items: [
          { name: "Climate Risk access permissions" },
          { name: "Feature parity of ECLR v2 in RA+ Climate Risk" },
        ],
      },
      {
        label: "Now",
        period: "In progress",
        tone: "accent",
        items: [
          { name: "Bulk export" },
          { name: "User settings for currency and language" },
          { name: "Local assessment" },
          { name: "Reporting snapshots" },
        ],
      },
      {
        label: "Next",
        period: "Next up",
        tone: "warn",
        items: [
          { name: "Advanced filtering and country-level exposure" },
          { name: "AI filtering, sensitivities, knowledgebase, site screening and adaptation" },
          { name: "Climate Risk data model updates for outdated references" },
          { name: "ERA5 and UKCP18 dataset support", note: "Later" },
        ],
      },
    ],
  },


  {
    kind: "board",
    eyebrow: "Climate Risk roadmap",
    title: "Expand from physical to complete climate risk",
    subtitle: "Thirteen themes extend the offer through exposure, financial indicators, typologies and portfolio-level risk.",
    lanes: [
      {
        label: "Now",
        period: "In progress",
        tone: "warn",
        items: [
          { name: "Explainers for Climate Risk and exposure score popovers" },
          { name: "Financial indicators, phase 1" },
        ],
      },
      {
        label: "Next",
        period: "Q4 2026 to Q1 2027",
        tone: "muted",
        items: [
          { name: "Enhanced exposure indicators", note: "Q4 2026 and Q1 2027" },
          { name: "Enhanced financial risk indicators", note: "Q4 2026 and Q1 2027" },
          { name: "Enhanced portfolio-level financial risk view" },
          { name: "Country, energy infrastructure and custom typologies" },
          { name: "Haskoning datasets, linear assets, NaRVaL and TRACC" },
        ],
      },
    ],
  },


  {
    kind: "timeline",
    eyebrow: "Climate Risk",
    title: "Drive adaptation action and supply chain risk",
    subtitle: "Five themes close the Measure-Plan-Do loop, moving from assessment into adaptation and cross-product action.",
    years: ["2026", "2027"],
    groups: [
      {
        label: "Now",
        tone: "primary",
        rows: [
          { title: "Adaptation planning: targets, scenarios and initiatives", start: 2, end: 4 },
          { title: "Custom typologies", start: 2, end: 4 },
        ],
      },
      {
        label: "Next",
        tone: "accent",
        rows: [
          { title: "Adaptation ClimVaR integration", start: 4, end: 6 },
          { title: "Supply chain risk", start: 4, end: 6 },
        ],
      },
      {
        label: "Later",
        tone: "warn",
        rows: [
          { title: "Enhanced adaptation risk score modeling", start: 6, end: 8 },
        ],
      },
    ],
  },


  {
    kind: "columns",
    eyebrow: "Climate Risk",
    title: "What ships inside the climate risk goals",
    subtitle: "Move from consulting-led delivery to a complete self-serve risk and action platform.",
    columns: [
      {
        label: "Goal 1",
        title: "Bring the Service Line into RA+",
        tone: "primary",
        line: "Move from consulting-led delivery to a self-serve RA+ product.",
        items: [
          "RA+ platform integration and shared asset hierarchy",
          "Service workflow automation and self-serve enablement",
          "Stable data pipelines and scalable portfolio performance",
          "Repeatable in-product delivery with less consulting dependency",
        ],
      },
      {
        label: "Goal 2",
        title: "Expand from Physical to Complete Climate Risk",
        tone: "accent",
        line: "Unify physical, transition, and nature risk through financial quantification.",
        items: [
          "Physical, transition, and nature risk in one experience",
          "Financial risk quantification and value at risk",
          "Scenario comparison across assets and time horizons",
          "Decision-grade portfolio analytics and methodology transparency",
        ],
      },
      {
        label: "Goal 3",
        title: "Drive Adaptation Action and Supply Chain Risk",
        tone: "warn",
        line: "Close the Measure-Plan-Do loop across assets and suppliers.",
        items: [
          "Adaptation workflows from risk finding to funded action",
          "Supply chain climate risk and extended value-chain exposure",
          "Cross-product integration with Strategy, R&C, and Supply Chain",
          "Progress tracking against adaptation actions and outcomes",
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
    subtitle: "The latest product goals, expressed as three strategic bets.",
    bets: [
      {
        title: "Build the Sustainability Data Foundation",
        line: "Establish Carbon Performance as the governed data and decision foundation across carbon, water, and waste.",
        items: [
          "Shared sustainability data model and hierarchy",
          "Governed ingestion, quality, calculations, and lineage",
          "Reusable analytics and decision-ready outputs",
        ],
      },
      {
        title: "Deliver Consultant-Grade GHG Inventory Management In-Product",
        line: "Deliver GSP's inventory offers to consultancy standards in one shared consultant and client workflow.",
        items: [
          "Methods, coverage, boundaries, and rebaselining",
          "Audit-ready controls, evidence, and assurance",
          "No off-platform inventory workarounds",
        ],
      },

      {
        title: "Establish Market-Leading Agentic Decarbonization Planning",
        line: "Create defensible software-only growth through financially actionable planning without consulting dependency.",
        items: [
          "Agentic scenarios and next-best-action guidance",
          "Energy, carbon, and cost cobenefits",
          "Initiatives, actions, and measurable execution",
        ],

      },
    ],
  },



  {
    kind: "bets",
    eyebrow: "2027 bets",
    title: "Where Supply Chain goes next",
    subtitle: "The latest product goals, expressed as three strategic bets.",
    bets: [
      {
        title: "Complete the RA+ Migration and Stabilize the Platform",
        line: "Complete the Hub 2.0 migration and stabilize RA+ Supply Chain before investing in differentiation.",
        items: [
          "Finish Hub 2.0 to RA+ migration",
          "Stabilize the core experience and data flows",
          "Protect reliability before new differentiation",
        ],
      },
      {
        title: "Close Competitive Gaps in Sponsor Intelligence and Data Collection",
        line: "Strengthen sponsor programme management, analytics, PCF data collection, and custom questionnaires.",
        items: [
          "Sponsor-facing management and analytics",
          "PCF and custom questionnaire workflows",
          "Supplier transparency and data quality",
        ],
      },
      {
        title: "Educate Suppliers and Drive Action",
        line: "Make RA+ the place where suppliers learn their emissions, identify reduction opportunities, and act through CP and Zeigo Network.",
        items: [
          "Supplier emissions education",
          "Guided reduction opportunities and action",
          "Carbon Performance and Zeigo Network integration",
        ],
      },
    ],
  },


  {
    kind: "bets",
    eyebrow: "2027 bets",
    title: "Where Reporting and Compliance goes next",
    subtitle: "The latest product goals, led by Schneider Electric's migration and the automation of advisory-heavy work.",
    bets: [
      {
        title: "Provide E2E Reporting Experience for CSRD & IFRS",
        line: "Migrate corporate Schneider Electric from RAC to RA+, with SE must-haves prioritized above every other R&C objective.",
        items: [
          "End-to-end CSRD and IFRS reporting",
          "Historical data and governed cycle migration",
          "Audit-ready disclosure produced in-product",
        ],
      },
      {
        title: "Automate Advisory-Heavy Steps",
        line: "Use AI and cross-product integrations to transform governed platform data into disclosure-ready outputs.",
        items: [
          "AI-assisted mapping, drafting, and review",
          "Carbon Performance, Climate Risk, and Supply Chain data reuse",
          "Disclosure-ready outputs with full lineage",
        ],
      },
    ],
  },


  {
    kind: "bets",
    eyebrow: "2027 bets",
    title: "Where Climate Risk goes next",
    subtitle: "The latest product goals, expressed as three strategic bets.",
    bets: [
      {
        title: "Bring the Service Line into RA+",
        line: "Move Climate Risk from consulting-led delivery to a self-serve RA+ product.",
        items: [
          "RA+ platform integration",
          "Service workflow automation and self-serve enablement",
          "Data pipeline stabilization and portfolio scale",
        ],
      },
      {
        title: "Expand from Physical to Complete Climate Risk",
        line: "Cover physical, transition, and nature risk in one platform, unified through financial risk quantification.",
        items: [
          "Physical, transition, and nature risk",
          "Financial value at risk and scenario analysis",
          "Decision-grade portfolio insight",
        ],
      },
      {
        title: "Drive Adaptation Action and Supply Chain Risk",
        line: "Close the Measure-Plan-Do loop with adaptation workflows, supplier risk, and cross-product integration.",
        items: [
          "Adaptation actions and outcome tracking",
          "Supply chain climate risk",
          "Strategy, R&C, and Supply Chain integration",
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

const productTeamSection: CPSlide[] = [
  {
    kind: "section",
    eyebrow: "Who builds RA+",
    number: "04A",
    title: "The Product team organization",
    subtitle: "Product leadership connects four sustainability products with shared platform capabilities, Sera, strategy, design, and delivery ownership.",
  },
  {
    kind: "columns",
    eyebrow: "Organization summary",
    title: "One Product organization, four connected areas",
    subtitle: "Clear ownership by area keeps product outcomes close to customers while shared capabilities compound across RA+.",
    columns: [
      {
        label: "RA+ Products",
        title: "Own customer outcomes",
        line: "Four sustainability products translate domain needs into complete workflows.",
        items: ["Carbon Performance", "Reporting & Compliance", "Supply Chain", "Climate Risk"],
        tone: "primary",
      },
      {
        label: "RA+ Platform",
        title: "Build once, reuse broadly",
        line: "Shared product areas provide trusted models, data services, connectivity, analytics, and strategy capabilities.",
        items: ["Ontology & Control Plane", "Data Quality & Services", "Connectivity & Analytics", "Strategy"],
        tone: "accent",
      },
      {
        label: "RA+ Sera",
        title: "Create the agentic experience",
        line: "Sera delivers a unified AI experience whose capabilities are leveraged across all four products.",
        items: ["Application experience", "Agentic guidance", "Insights, content, and support"],
        tone: "warn",
      },
      {
        label: "Product Leadership",
        title: "Set direction and enable delivery",
        line: "Leadership spans product management, domains, platform, strategy, strategic clients, and operations.",
        items: ["Portfolio direction", "Cross-area alignment", "Operating discipline"],
        tone: "muted",
      },
    ],
    note: "All current products sit within the Sustainability family; Energy and Demand are future product families in the source topology.",
  },
  {
    kind: "table",
    eyebrow: "RA+ Products",
    title: "Four product teams own the sustainability workflows",
    subtitle: "Each area combines product management, product ownership, and design around a distinct customer mission.",
    headers: ["Product", "Product Manager", "Associate PM", "Product Owner", "Designer", "Key workflows"],
    rows: [
      ["Carbon Performance", "Stef Bezanis", "Madeleine Watson", "Landon Coleman", "Nathan Gao", "Emission calculation; data quality review; statement creation"],
      ["Reporting & Compliance", "Hannah Humm", "Thomas Robbins", "Molly Mettling", "Rachel Self", "Framework selection; disclosure drafting; stakeholder review; submission"],
      ["Supply Chain", "Veronica Lofty", "Shelly Singhal", "Melinda Wolfe", "Michael Beesley", "Supplier onboarding; data campaigns; engagement; Scope 3 reporting"],
      ["Climate Risk", "Callum Hopkins", "Not assigned", "Emily Whaites", "Not assigned", "Risk assessment; scenario analysis; action planning; site risk"],
    ],
    note: "Resource Advisor+ unifies carbon, ESG reporting, climate risk, and supply-chain decarbonization in one AI-powered platform.",
  },
  {
    kind: "table",
    eyebrow: "RA+ Platform",
    title: "Shared platform teams create the foundation every product uses",
    subtitle: "The platform organization owns reusable models, trusted data services, connectivity, analytics, and decarbonization strategy capabilities.",
    headers: ["Platform area", "Product Manager", "Product Owner", "Designer", "Core responsibility"],
    rows: [
      ["Ontology & Control Plane", "Alisdair McDougall", "Harper Kohls", "Miwa Couweleers", "Entity models, hierarchies, permissions, workflows, and change management"],
      ["Data Quality & Services", "Jessica Chin; Agnes Motika; Bianca Covlescu; Yoann Diep", "Will Martin / Nick Kattato", "Tanya Merone", "Ingestion, validation, enrichment, governance, estimations, and reference data"],
      ["Connectivity & Analytics", "Alexis Greco", "Will Martin, connectivity; Nick Kattato, analytics", "Not assigned", "Pipelines, federation, lineage, discovery, dashboards, and decision support"],
      ["Strategy", "Chris Edge", "Flex coverage", "Tanya Merone", "Targets, scenarios, initiative portfolios, financial analysis, and progress tracking"],
    ],
    note: "Strategy sits organizationally under Jessica's purview while serving a platform role across all four products.",
  },
  {
    kind: "columns",
    eyebrow: "Platform detail",
    title: "Platform ownership follows four reusable capability domains",
    subtitle: "The topology assigns clear boundaries while preserving a shared mission: trusted sustainability data, scalable decisions, and coordinated action.",
    columns: [
      {
        label: "Model",
        title: "Ontology & Control Plane",
        line: "Define the objects and controls that make the platform coherent.",
        items: ["Entities and alternate hierarchies", "Permissions and administration", "Workflow, tasks, allocations, and settings"],
        tone: "primary",
      },
      {
        label: "Trust",
        title: "Data Quality & Services",
        line: "Keep activity and reference data governed, complete, and usable.",
        items: ["Validation and anomaly detection", "Gapfill and estimation routines", "Factors, units, currencies, and data governance"],
        tone: "accent",
      },
      {
        label: "Insight",
        title: "Connectivity & Analytics",
        line: "Connect data end to end and make it navigable and actionable.",
        items: ["Pipelines, federation, and lineage", "Catalogs, dashboards, and discovery", "AI/ML insights and scenario analysis"],
        tone: "warn",
      },
      {
        label: "Action",
        title: "Strategy",
        line: "Turn sustainability insight into financially grounded plans.",
        items: ["Target setting", "Scenario comparison", "Initiative planning and progress tracking"],
        tone: "muted",
      },
    ],
  },
  {
    kind: "columns",
    eyebrow: "RA+ Sera",
    title: "Sera is a platform capability expressed through an agentic experience",
    subtitle: "Application & Agentic Experience creates one intuitive AI layer across the four sustainability products.",
    columns: [
      {
        label: "Ownership",
        title: "A focused product area",
        line: "The team owns the experience while partnering across product domains.",
        items: ["Product Manager: Lauren Morris", "Product Owner: Ellis Aitken", "Organizationally under Jessica's purview"],
        tone: "primary",
      },
      {
        label: "Experience",
        title: "One intelligent front door",
        line: "A dynamic landing experience and Sera connect users to guidance and action.",
        items: ["Unified AI experience", "Proactive guidance", "Accurate knowledge and support"],
        tone: "accent",
      },
      {
        label: "Leverage",
        title: "Shared across products",
        line: "Sera capabilities strengthen every sustainability workflow rather than forming a fifth product silo.",
        items: ["Improve data quality", "Deliver actionable insights", "Streamline content creation"],
        tone: "warn",
      },
    ],
    note: "The source topology positions Sera as a platform role leveraged across all four products.",
  },
  {
    kind: "table",
    eyebrow: "RA+ Product Leadership",
    title: "Leadership roles connect portfolio direction to operating discipline",
    subtitle: "The leadership team spans product management, domains, platform, strategy, strategic clients, and product operations.",
    headers: ["Leadership role", "Leader", "Primary organizational contribution"],
    rows: [
      ["Head of Product Management", "Julien Picaud", "Product portfolio leadership and management accountability"],
      ["Head of Product Domain", "Jessica Kipper", "Domain leadership, including Strategy and Sera organizational ownership"],
      ["Head of Product Platform", "Julian Tharsis", "Shared platform product leadership"],
      ["Product Strategy Manager", "Robert Cole", "Portfolio strategy and cross-product direction"],
      ["Strategic Client Relationship Manager", "Megan Murray", "Strategic client insight and relationship alignment"],
      ["Product Operations Manager", "Kristi Rice", "Planning operations, cadence, and execution discipline"],
    ],
    note: "Technology leadership by domain is maintained in the separate Technology Leadership organization and responsibilities reference.",
  },
  {
    kind: "table",
    eyebrow: "Organization glossary",
    title: "A shared language for teams, regions, and specialist terms",
    subtitle: "Use this reference when reading the Product organization and collaboration governance sections.",
    headers: ["Name or acronym", "Meaning in this deck", "Name or acronym", "Meaning in this deck"],
    rows: [
      ["RA+", "Resource Advisor+, the shared sustainability platform", "Sera", "RA+'s AI-powered application and agentic experience"],
      ["GSP", "Global Sustainability Practice", "Go-to-Market (GTM)", "Teams connecting product strategy to market activation and adoption"],
      ["SCD", "Supply Chain Decarbonization team", "SCDR", "Supply-chain decarbonization program, data, and operations teams"],
      ["Data & Ops", "Data and Operations", "Product Planning Group", "Cross-functional forum that shapes and approves a product roadmap"],
      ["PCF / GHG", "Product Carbon Footprint / Greenhouse Gas", "ESG / AI / ML", "Environmental, Social, and Governance / Artificial Intelligence / Machine Learning"],
      ["SBT / CRaFT", "Science-Based Targets / named carbon reduction and transformation workstream", "DIH", "Internal team label used in the supplied governance material"],
      ["AMS / APMEA", "Americas / Asia Pacific, Middle East, and Africa", "NECE", "North Eastern and Central Europe"],
      ["SE / UK&I", "Southern Europe / United Kingdom and Ireland", "Regional groups", "Testing communities that bring local delivery evidence into planning"],
    ],
    note: "Internal labels are described according to the supplied organization and governance materials; local naming may evolve.",
  },
];

const collaborationSection: CPSlide[] = [
  {
    kind: "section",
    eyebrow: "How we work",
    number: "04B",
    title: "Product collaboration and governance",
    subtitle: "Planning governance meetings connect Product with GSP, Go-to-Market, Sales, Engineering, SCDR, Data & Ops, and regional testing communities.",
  },
  {
    kind: "board",
    eyebrow: "Planning governance",
    title: "Two levels turn evidence into coordinated roadmap decisions",
    subtitle: "The platform group governs cross-product choices; four product planning groups shape and approve product roadmaps.",
    lanes: [
      {
        label: "Platform planning group",
        period: "Standing seats",
        tone: "primary",
        items: [
          { name: "Product Strategy Lead", note: "Chair" },
          { name: "Software Architecture Lead" },
          { name: "Go-to-Market Lead" },
        ],
      },
      {
        label: "Cross-product decisions",
        period: "Govern together",
        tone: "accent",
        items: [
          { name: "Theme prioritization", note: "When products compete for a shared platform solution" },
          { name: "Cross-product policy", note: "When a policy affects every product" },
          { name: "Cross-product ideation" },
        ],
      },
      {
        label: "Product planning groups",
        period: "Four products",
        tone: "muted",
        items: [
          { name: "Carbon Performance" },
          { name: "Climate Risk" },
          { name: "Reporting & Compliance" },
          { name: "Supply Chain" },
        ],
      },
      {
        label: "Escalation",
        period: "When authority is exceeded",
        tone: "warn",
        items: [
          { name: "Head of Product" },
          { name: "Head of Strategy" },
          { name: "Head of Technology" },
        ],
      },
    ],
    note: "Planning governance meetings provide the recurring forum for shared decisions and escalation.",
  },
  {
    kind: "columns",
    eyebrow: "Product planning groups",
    title: "Each product roadmap is shaped cross-functionally",
    subtitle: "Product Management chairs a regular forum that combines customer evidence, market context, practice expertise, commercial needs, and technical feasibility.",
    columns: [
      {
        label: "Evidence",
        title: "Understand the need",
        line: "Bring the strongest signals into one planning conversation.",
        items: ["Market research", "User feedback", "Competitive landscape"],
        tone: "primary",
      },
      {
        label: "Representation",
        title: "Shape together",
        line: "Product Management chairs with the functions needed for the decision.",
        items: ["Product Marketing and Go-to-Market", "GSP and Sales, as needed", "Engineering and Technology, as needed"],
        tone: "accent",
      },
      {
        label: "Decision",
        title: "Approve the roadmap",
        line: "Translate evidence and constraints into clear priorities and governed intent.",
        items: ["Resolve product trade-offs", "Surface cross-product dependencies", "Escalate shared platform decisions"],
        tone: "warn",
      },
    ],
    note: "Participation is purposeful: the right expertise joins the decision, while Product remains accountable for the roadmap.",
  },
  {
    kind: "table",
    eyebrow: "Cross-functional membership",
    title: "Who participates across the sustainability products",
    subtitle: "Named representatives connect product, market, practice, commercial, and engineering perspectives.",
    headers: ["Product", "Product Mgmt", "Product Marketing", "Go-to-Market", "Sales", "GSP", "Engineering"],
    rows: [
      ["Carbon Performance", "Stef Bezanis", "Kaitlin Buckley", "Philippe Balch", "Katie Schultz", "Scott Sopel", "Brice Womack"],
      ["Supply Chain", "Veronica Lofty", "Kaitlin Buckley", "Benoit Barbalat", "Katie Schultz", "Isabelle Harrison / Robyn Thompson", "Kyrian Willis"],
      ["Climate Risk", "Callum Hopkins", "Kaitlin Buckley", "Philippe Balch", "Timo Bottema", "Anouk Faure / Veronique Mariotti (DIH)", "James Canning"],
      ["Reporting & Compliance", "Hannah Humm", "Kaitlin Buckley", "Philippe Balch", "Timo Bottema", "Rachel Skinner", "Jeffrey Magel"],
    ],
    note: "Membership reflects the supplied governance material and can evolve as decision needs change.",
  },
  {
    kind: "table",
    eyebrow: "GSP and Product linkage",
    title: "GSP family expertise is linked to RA+ product ownership",
    subtitle: "The linkage gives specialist practices a direct route into product planning and roadmap decisions.",
    headers: ["GSP family", "Global family lead", "RA+ product owner"],
    rows: [
      ["Assurance Verification", "Gavin Tivey", "Stef Bezanis, Carbon Performance"],
      ["Compliance", "Rachel Skinner (cover for Nenad Obradovic)", "Hannah Humm, Reporting & Compliance"],
      ["Energy & Environmental Management", "Naomi Rich", "Not assigned"],
      ["GHG & Environmental Accounting", "Scott Sopel", "Stef Bezanis, Carbon Performance"],
      ["GHG Strategy & Decarbonization", "Thomas Menez", "Christopher Edge, Strategy; Stef Bezanis, Carbon Performance; Veronica Lofty, Supply Chain"],
      ["Nature & Biodiversity", "Sabrina Collin", "Callum Hopkins, Climate Risk"],
      ["Risks, Adaptation & Resilience", "Victoria Naipal", "Callum Hopkins, Climate Risk"],
      ["Offsetting Advisory", "Zander Dale", "Not assigned"],
      ["Transformation", "Anne Philipona-Hintzy", "Christopher Edge, Strategy"],
      ["Vendor Software Advisory", "Paul-Edouard Renaudon", "Rob Cole, RA+ Product Strategy"],
      ["Voluntary Reporting", "Tiana Nguyen & Mate Karl", "Hannah Humm, Reporting & Compliance"],
    ],
    note: "For GHG Strategy & Decarbonization: Christopher Edge covers SBT, GHG Target Set, Offset Strategy and CRaFT; Stef Bezanis covers SBT and targets; Veronica Lofty covers SCD.",
  },
  {
    kind: "table",
    eyebrow: "Carbon Performance collaboration",
    title: "Regional testers bring delivery reality into product decisions",
    subtitle: "A distributed testing community gives Carbon Performance direct feedback from consultants and client-facing teams.",
    headers: ["Region", "Testing participants"],
    rows: [
      ["AMS", "Scott Sopel; Olivia Hill; Eric Rozsi; Mitchell Lockhart; Oliver Bassel; Mackenzie Marcus; Srish Kumar; Marielena Alcaraz; Tiana Vernon"],
      ["APMEA", "Keerthana Gopinath"],
      ["NECE", "Eva Kalia; Till Kallert; Madli Rohtla; Emese Fukasz; Ioannis Aristotelis Papagrigoriou"],
      ["SE", "Marion Kurdej; Etienne Belvergue; Antoine Gnagne; Arnaud Ripoll; Paul-Edouard Renaudon"],
      ["UK&I", "Alan Tarleton; Owain Turner; Manuel Cortes Moreno; Luke Tracey"],
    ],
    note: "Structured testing feeds evidence into planning governance. Email addresses have been omitted from the deck.",
  },
  {
    kind: "table",
    eyebrow: "Supply Chain collaboration",
    title: "GSP, SCDR, Data & Ops align around the Supply Chain roadmap",
    subtitle: "Named collaborators connect specialist themes, program delivery, and operational data to Product planning.",
    headers: ["Collaboration area", "Participants", "Role in the dialogue"],
    rows: [
      ["Build phase / Suppliers to Target", "Hasmik Sahakyan", "Build-phase and supplier program input"],
      ["Supplier actions", "Timothe Guillaume Li", "Supplier action needs and workflows"],
      ["PCF", "Tom IJsselmuiden", "Product carbon footprint expertise"],
      ["General Supply Chain themes", "Kevin Mikita; Robyn Thompson; Jonathan McDonnell; Isabel Harrison", "Trends, topics, and practice feedback"],
      ["SCD leadership", "Dave Bonn; Dave Rimkus", "Ongoing alignment with the SCD team"],
      ["SCDR Program Management", "David Laposan; Fernanda Campos Helmeister; Jeremy Xu; Guste Saduikyte", "Program coordination and delivery alignment"],
      ["SCDR Data & Ops", "Elly Jack; Jake McCaskill", "Data and operational alignment"],
    ],
    note: "SCDR and Data & Ops are shown as alignment partners, not classified as GSP where affiliation is unconfirmed.",
  },
  {
    kind: "columns",
    eyebrow: "Meeting contract",
    title: "Planning governance meetings create a traceable decision loop",
    subtitle: "The recurring meeting turns evidence into decisions, ownership, and follow-through without blurring roadmap intent and delivery commitment.",
    columns: [
      {
        label: "Inputs",
        title: "Bring evidence",
        line: "Start from what teams and customers are learning.",
        items: ["Customer and consultant feedback", "Market and competitor evidence", "Delivery maturity and technical constraints"],
        tone: "primary",
      },
      {
        label: "Decisions",
        title: "Make trade-offs",
        line: "Use the meeting for choices that need shared authority.",
        items: ["Roadmap priorities", "Cross-product dependencies", "Shared platform policy and escalation"],
        tone: "accent",
      },
      {
        label: "Outputs",
        title: "Close the loop",
        line: "Leave with a decision record and clear accountability.",
        items: ["Decision and rationale", "Named owner and next action", "Updated roadmap and stakeholder communication"],
        tone: "warn",
      },
    ],
    note: "The governance cadence is regular; the source material does not prescribe a specific frequency.",
  },
];

const roadmapFoundations: CPSlide[] = [
  {
    kind: "section",
    number: "00",
    eyebrow: "Roadmap foundations",
    title: "What is a roadmap, and why does it matter?",
    subtitle: "One source of truth for strategic intent, with different views of maturity, delivery certainty and customer commitment.",
  },
  {
    kind: "columns",
    eyebrow: "Why roadmaps matter",
    title: "A good roadmap creates alignment before it creates a timeline",
    subtitle: "Its value is the shared conversation it enables about outcomes, choices and uncertainty.",
    columns: [
      {
        label: "Align investment",
        title: "Connect money to outcomes",
        line: "Make the reason for each investment visible to leadership.",
        items: ["Strategic goals", "Customer outcomes", "Expected business value"],
        tone: "primary",
      },
      {
        label: "Focus teams",
        title: "Make choices explicit",
        line: "Show what matters now, what waits and what is not funded.",
        items: ["Priorities", "Trade-offs", "Dependencies"],
        tone: "accent",
      },
      {
        label: "Communicate direction",
        title: "Replace noise with context",
        line: "Give every audience a consistent view of intent and confidence.",
        items: ["Shared narrative", "Visible uncertainty", "Fewer conflicting promises"],
        tone: "warn",
      },
    ],
    note: "The roadmap is a decision and communication tool first. The timeline is one expression of those choices.",
  },
  {
    kind: "columns",
    eyebrow: "Executive diagnosis",
    title: "The real problem is not the roadmap. It is certainty.",
    subtitle: "One shared view is being asked to answer three legitimate leadership questions.",
    columns: [
      {
        label: "CEO",
        title: "Investment and outcomes",
        line: "Where are we investing, and when will customers actually get it?",
        items: ["Portfolio risk", "Revenue credibility", "Confidence by horizon"],
        tone: "warn",
      },
      {
        label: "CTO",
        title: "Delivery integrity",
        line: "Do not imply an Engineering commitment before the solution is mature and feasible.",
        items: ["Feasibility", "Capacity", "Dependencies"],
        tone: "primary",
      },
      {
        label: "Head of Sales",
        title: "Customer communication",
        line: "What can I tell a customer, and how certain is the date?",
        items: ["Deal risk", "Renewal risk", "Approved language"],
        tone: "accent",
      },
    ],
    note: "The answer is visible maturity, honest confidence and progressively narrower delivery forecasts.",
  },
  {
    kind: "columns",
    eyebrow: "Roadmap definition",
    title: "A roadmap turns product strategy into prioritized choices over time",
    subtitle: "It explains why we invest, what we prioritize and the approximate sequence in which we intend to pursue it.",
    columns: [
      {
        label: "Why",
        title: "Strategic intent",
        line: "Connect every investment to a goal, customer need or business outcome.",
        items: ["Goals and outcomes", "Customer and market evidence", "The rationale behind each bet"],
        tone: "primary",
      },
      {
        label: "What",
        title: "Prioritized direction",
        line: "Make the choices visible: what matters now, what waits and what is not funded.",
        items: ["Themes and opportunities", "Product bets", "Explicit trade-offs"],
        tone: "accent",
      },
      {
        label: "When",
        title: "Approximate sequence",
        line: "Use horizons to communicate intent without inventing delivery precision.",
        items: ["Quarter or horizon", "Progress and status", "A living plan that adapts"],
        tone: "warn",
      },
    ],
    note: "A roadmap is strategic, prioritized and time-oriented. It is not automatically a delivery promise.",
  },
  {
    kind: "table",
    eyebrow: "Strategy to outcomes",
    title: "Every roadmap item should preserve a clear line back to strategy",
    subtitle: "The chain keeps teams focused on the outcome while allowing the solution to evolve.",
    headers: ["Layer", "Question", "Roadmap expression"],
    rows: [
      ["Company goal", "What business change matters?", "Strategic objective"],
      ["Product outcome", "What customer or business behavior must change?", "Measurable outcome"],
      ["Opportunity", "Which problem is worth solving?", "Validated need or constraint"],
      ["Bet", "Where will we invest to create that change?", "Prioritized initiative"],
      ["Evidence", "What would increase or reduce confidence?", "Learning, maturity and results"],
    ],
    note: "When the chain breaks, the roadmap becomes a feature list. When it stays visible, trade-offs remain strategic.",
  },
  {
    kind: "columns",
    eyebrow: "Operating model",
    title: "Three questions require three connected management layers",
    subtitle: "Connected does not mean collapsed. Each layer answers a different leadership question.",
    columns: [
      {
        label: "1. Product roadmap",
        title: "Where should we invest, and roughly when?",
        line: "The strategic direction and intended sequence.",
        items: ["Goals", "Themes", "Bets", "Priority", "Target quarter"],
        tone: "primary",
      },
      {
        label: "2. Discovery / readiness",
        title: "How much do we know, and are we ready?",
        line: "The evidence and maturity behind each bet.",
        items: ["Evidence", "PRD", "Prototype", "Validation", "Artefact Ready"],
        tone: "muted",
      },
      {
        label: "3. Delivery / release plan",
        title: "When can customers realistically get it?",
        line: "The execution forecast for sufficiently mature work.",
        items: ["Scope", "Dependencies", "Capacity", "Milestones", "Forecast"],
        tone: "warn",
      },
    ],
    note: "A single source of truth can expose all three layers without pretending they are the same decision.",
  },
  {
    kind: "columns",
    eyebrow: "Roadmap maturity",
    title: "Roadmaps become more useful as the conversation moves from output to outcomes",
    subtitle: "The goal is not a more detailed feature list. It is a more disciplined portfolio of strategic choices.",
    columns: [
      {
        label: "Level 1",
        title: "Feature list",
        line: "A collection of requests with little strategic context.",
        items: ["Many items", "Weak prioritization", "Dates treated as promises"],
        tone: "muted",
      },
      {
        label: "Level 2",
        title: "Sequenced plan",
        line: "Priorities and horizons are visible, but outcomes remain implicit.",
        items: ["Ordered initiatives", "Target horizons", "Basic status"],
        tone: "warn",
      },
      {
        label: "Level 3",
        title: "Outcome portfolio",
        line: "Bets connect to strategy, evidence and explicit confidence.",
        items: ["Outcome linkage", "Maturity visible", "Trade-offs governed"],
        tone: "primary",
      },
      {
        label: "Level 4",
        title: "Adaptive contract",
        line: "Leadership uses one view to steer investment and customer commitments.",
        items: ["Decision rights", "Progressive certainty", "Audience-specific views"],
        tone: "accent",
      },
    ],
    note: "Maturity is measured by the quality of decisions the roadmap enables, not by the amount of detail it contains.",
  },
  {
    kind: "columns",
    eyebrow: "Roadmap contract",
    title: "A quarter communicates intent. Commitment requires a separate decision.",
    subtitle: "Define the semantics explicitly so every function reads the roadmap the same way.",
    columns: [
      {
        label: "Roadmap quarter",
        title: "Planning intent",
        line: "A target horizon based on what we know today. Early discovery items can be visible and confidence can vary.",
        items: ["Strategic and forward-looking", "Approximate sequencing", "Not a guaranteed availability date"],
        tone: "primary",
      },
      {
        label: "Artefact Ready",
        title: "Ready for robust planning",
        line: "Product definition is mature enough for feasibility, sizing and delivery planning.",
        items: ["Evidence and validation", "Required product artifacts", "Dependencies understood"],
        tone: "muted",
      },
      {
        label: "Committed",
        title: "Joint delivery decision",
        line: "Product and Engineering have explicitly agreed scope, feasibility, dependencies and capacity.",
        items: ["Capacity allocated", "Sequencing agreed", "Approved commitment language"],
        tone: "accent",
      },
    ],
    note: "Committed is an explicit joint decision, not a side effect of appearing in a quarter.",
  },
  {
    kind: "columns",
    eyebrow: "Confidence by horizon",
    title: "Time horizons should carry progressively less precision",
    subtitle: "The further away the work, the more the roadmap should communicate direction rather than invented certainty.",
    columns: [
      {
        label: "Now",
        title: "Narrow and evidence-rich",
        line: "Active delivery or near-term planning with understood scope and dependencies.",
        items: ["Forecast range", "Named dependencies", "High confidence"],
        tone: "accent",
      },
      {
        label: "Next",
        title: "Prioritized and still learning",
        line: "Intent is clear, while discovery and capacity can still change timing.",
        items: ["Target horizon", "Maturity status", "Medium confidence"],
        tone: "primary",
      },
      {
        label: "Later",
        title: "Directional and adaptable",
        line: "Strategic themes remain visible without implying a fixed solution or date.",
        items: ["Outcome or theme", "Key assumptions", "Low confidence"],
        tone: "muted",
      },
    ],
    note: "Confidence should be explicit at every horizon. Precision is earned as uncertainty falls.",
  },
  {
    kind: "table",
    eyebrow: "Boundaries",
    title: "A roadmap needs clear boundaries to remain useful",
    subtitle: "It connects strategy, discovery and delivery, but it does not replace any of them.",
    headers: ["A roadmap is", "A roadmap is not"],
    rows: [
      ["Strategy translated into prioritized, sequenced choices", "Strategy or vision on its own"],
      ["A portfolio of outcomes, problems and bets linked to goals", "An idea list, feature wishlist or backlog"],
      ["A living plan with horizons, status and visible confidence", "A PRD, prototype or discovery board"],
      ["Planning intent that can include less mature bets", "A project plan, release plan or Gantt chart"],
    ],
    note: "These artifacts are useful and connected, but none substitutes for the roadmap. A quarter signals planning intent, not an automatic delivery promise.",
  },
  {
    kind: "table",
    eyebrow: "Delivery certainty",
    title: "Delivery windows narrow as uncertainty falls",
    subtitle: "Precision increases only as discovery, feasibility and execution reduce uncertainty.",
    headers: ["Stage", "Timing language", "Certainty", "What changed"],
    rows: [
      ["Roadmap", "Target quarter", "Low", "Strategic intent and priority are visible"],
      ["Validated", "Indicative months", "Low to medium", "Problem and solution evidence is stronger"],
      ["Artefact Ready", "Planning window", "Medium", "Product definition supports robust planning"],
      ["In delivery", "Forecast range", "High", "Scope, sequencing and execution are active"],
      ["Committed", "Approved date", "Very high", "Product and Engineering explicitly approve"],
    ],
    note: "The business gets more certainty, not false precision. Every delivery date carries a confidence level or status.",
  },
  {
    kind: "table",
    eyebrow: "Customer-facing language",
    title: "Use language that matches the actual level of certainty",
    subtitle: "Commercial conversations stay credible when roadmap status and customer wording remain linked.",
    headers: ["Status", "Safe language", "Avoid"],
    rows: [
      ["Directional", "We are exploring this outcome for a future horizon", "We will deliver this"],
      ["Planned", "This is prioritized for a target quarter, subject to learning and capacity", "This is coming in that quarter"],
      ["Forecast", "The current delivery forecast is a range and may move", "This is the release date"],
      ["Committed", "Product and Engineering have approved this customer date", "Any date not explicitly approved"],
    ],
    note: "Sales never converts a roadmap quarter into a fixed customer date. Commitment language requires an explicit joint decision.",
  },
  {
    kind: "table",
    eyebrow: "Portfolio view",
    title: "One view can show strategy and delivery certainty together",
    subtitle: "Leadership can separate why we are investing from how certain the delivery timing is.",
    headers: ["Initiative", "Why", "Roadmap", "Maturity", "Forecast", "Confidence"],
    rows: [
      ["Data automation", "Retention", "Q4", "Artefact Ready", "November", "High"],
      ["Reporting redesign", "Enterprise growth", "Q4", "Artefact Ready", "December", "High"],
      ["Benchmarking", "Expansion", "Q1", "Solution validation", "Jan to Feb", "Medium"],
      ["AI recommendations", "Differentiation", "Q2", "Problem validated", "Q2", "Low"],
      ["Agentic workflows", "New workflows", "Q3", "Hypothesis", "Not forecast", "Very low"],
    ],
    note: "Illustrative portfolio view: the roadmap horizon, maturity, forecast and confidence remain distinct fields.",
  },
  {
    kind: "columns",
    eyebrow: "Operating cadence",
    title: "Review the roadmap at two speeds",
    subtitle: "Frequent health checks keep the information current. Less frequent portfolio reviews protect strategic focus.",
    columns: [
      {
        label: "Monthly",
        title: "Roadmap health check",
        line: "Keep confidence, maturity and dependencies accurate.",
        items: ["Review changed evidence", "Update maturity and forecast", "Escalate material risks"],
        tone: "primary",
      },
      {
        label: "Quarterly",
        title: "Portfolio decision review",
        line: "Rebalance investment against strategy and capacity.",
        items: ["Confirm outcomes and priorities", "Make trade-offs", "Approve material commitment changes"],
        tone: "accent",
      },
      {
        label: "As needed",
        title: "Commitment gate",
        line: "Make customer promises only when readiness supports them.",
        items: ["Validate scope and feasibility", "Confirm capacity", "Approve customer language"],
        tone: "warn",
      },
    ],
    note: "The cadence should improve decisions, not create another reporting ceremony.",
  },
  {
    kind: "columns",
    eyebrow: "Executive conversation guide",
    title: "Ask questions that improve the decision, not the feature list",
    subtitle: "A strong review tests strategic value, evidence and delivery integrity in equal measure.",
    columns: [
      {
        label: "Value",
        title: "Why this bet?",
        line: "Test whether the investment still supports the strategy and customer outcome.",
        items: ["What outcome changes?", "What evidence supports it?", "What happens if we do not invest?"],
        tone: "primary",
      },
      {
        label: "Choice",
        title: "Why now?",
        line: "Expose the opportunity cost and the constraint behind the sequence.",
        items: ["What moves out?", "Which dependency matters?", "Where is capacity constrained?"],
        tone: "warn",
      },
      {
        label: "Confidence",
        title: "What can we promise?",
        line: "Match leadership and customer language to actual maturity.",
        items: ["What remains uncertain?", "What would change confidence?", "Who approves commitment?"],
        tone: "accent",
      },
    ],
    note: "The purpose of the review is to improve choices and confidence, not to negotiate individual features in the room.",
  },
  {
    kind: "columns",
    eyebrow: "Executive decision",
    title: "Six decisions create one shared certainty contract",
    subtitle: "Agree the semantics, views and decision rights before changing the tooling.",
    columns: [
      {
        label: "Source of truth",
        title: "Align the roadmap model",
        line: "Confirm one product roadmap source and one interpretation of its horizons.",
        items: ["JPD is the roadmap source", "A quarter means planning intent"],
        tone: "primary",
      },
      {
        label: "Readiness and delivery",
        title: "Protect commitment integrity",
        line: "Keep maturity visible while separating forecast and commitment from roadmap placement.",
        items: ["Retain Artefact Ready", "Adopt a joint Forecast and Committed contract"],
        tone: "warn",
      },
      {
        label: "Communication",
        title: "Make promises deliberately",
        line: "Publish audience-specific views from the same data and govern customer date language.",
        items: ["CEO, CTO and Sales views", "Explicit commercial status for date promises"],
        tone: "accent",
      },
    ],
    note: "One source of truth. Different questions. Progressively higher certainty.",
  },
];

export const cpDeck: CPSlide[] = [
  ...roadmapFoundations,
  ...sharedCpDeck.slice(0, 28),
  ...productTeamSection,
  ...collaborationSection,
  ...sharedCpDeck.slice(28, 33),
  ...carbonStatusTests,
  ...sharedCpDeck.slice(33),
];
