// Vendor deep dives for the RA+ Climate Risk competitive field.
// Roadmap directions are directional readings of public vendor communication and
// licensed Verdantix research reviewed in September 2026, not vendor commitments.
// Positions and gaps are internal RA+ assessments, not third party ratings.

import type { EnergyVendor } from "./energy-vendors";

export type ClimateVendor = EnergyVendor;

export const climateVendors: ClimateVendor[] = [
  {
    slug: "climate-x",
    name: "Climate X",
    category: "Asset level physical risk analytics",
    tagline: "The sharpest asset level loss story in the market, sold mainly to finance",
    threat: "High",
    overlap: "Physical hazard modelling, asset level financial loss, adaptation guidance",
    summary:
      "Climate X built its reputation on Spectra, an asset level physical risk platform with stated coverage of over 1.5 billion assets worldwide and proprietary building vulnerability data. The pitch is simple and strong: a hazard score is not enough, so every peril resolves into a financial loss number the buyer can act on.",
    strengths: [
      "Very large stated asset coverage with proprietary building vulnerability attributes",
      "Loss and P&L framing rather than abstract hazard scores",
      "Fast self serve style onboarding compared with traditional catastrophe modelling",
      "Credible with banks, real estate and financial services buyers",
    ],
    weaknesses: [
      "Analytics product, not an operating sustainability platform",
      "Adaptation stops at guidance rather than a funded capital plan",
      "Supply chain views sit apart from any supplier engagement programme",
      "No inventory of record, so disclosure has to happen in someone else's tool",
    ],
    roadmap: [
      {
        period: "Near term",
        focus: "Deeper asset intelligence",
        items: [
          "More granular building vulnerability and resilience attributes",
          "Broader peril coverage and higher resolution scenarios",
          "More self serve analysis for non specialist users",
        ],
      },
      {
        period: "Medium term",
        focus: "From risk to response",
        items: [
          "Adaptation option comparison alongside loss estimates",
          "Wider portfolio and counterparty views for lenders",
          "Reporting packs aligned to disclosure regimes",
        ],
      },
      {
        period: "Longer term",
        focus: "Financial system embedding",
        items: [
          "Deeper integration into credit, valuation and underwriting workflows",
          "Value chain exposure beyond the owned estate",
        ],
      },
    ],
    useCases: [
      {
        buyer: "Bank or lender",
        need: "Price physical risk in a loan book",
        vendorAnswer: "Strong. This is the home ground of the product.",
      },
      {
        buyer: "Real estate owner",
        need: "Understand exposure across a property portfolio",
        vendorAnswer: "Strong on exposure and loss, thin on what to fund next.",
      },
      {
        buyer: "Corporate sustainability lead",
        need: "Risk numbers that feed disclosure and decarbonization plans",
        vendorAnswer: "Partial. Exports are needed to get the number into the reporting workflow.",
      },
    ],
    gaps: [
      {
        area: "Operating platform",
        vendor: "Climate X is a specialist analytics product bought alongside everything else.",
        raPlus:
          "Risk sits on the same asset register, hierarchy and factors as carbon and energy, so there is one governed spine.",
      },
      {
        area: "Funded action",
        vendor: "Adaptation guidance without capital planning or initiative tracking.",
        raPlus:
          "Adaptation actions land in initiatives and actions management next to decarbonization spend.",
      },
      {
        area: "Disclosure",
        vendor: "Exports into third party disclosure tooling.",
        raPlus:
          "Risk data flows into Reporting and Compliance and becomes disclosed financial values with lineage and evidence.",
      },
      {
        area: "Value chain",
        vendor: "Supply chain views are separate from any supplier programme.",
        raPlus:
          "Supplier exposure combines with hazard and value at risk on the same supplier records we already engage.",
      },
    ],
    winTheme:
      "Concede the modelling science, win the operating model. The corporate buyer wants risk priced, disclosed and funded in the platform they already run carbon and energy on.",
    watchFor:
      "If Climate X moves from guidance into an adaptation planning workflow with capital comparison, the action gap narrows quickly.",
    sources: [
      "Public Climate X product information reviewed September 2026",
      "Licensed Verdantix climate risk research reviewed September 2026",
    ],
  },
  {
    slug: "xdi",
    name: "XDI",
    category: "Engineering grade physical risk modelling",
    tagline: "The engineering purist: damage cost and failure probability per asset",
    threat: "Moderate",
    overlap: "Physical hazard modelling, asset level damage costs, scenario analysis",
    summary:
      "XDI has run asset level engineering damage modelling since 2007, with assets analysed in over 175 countries and both CMIP5 and CMIP6 scenarios. The output is deliberately technical: probability of failure and damage cost per asset, defensible under scrutiny.",
    strengths: [
      "Long modelling track record and strong scientific credibility",
      "Engineering damage functions rather than generic hazard scores",
      "Wide geographic coverage and multi scenario support",
      "Trusted by governments, asset owners and finance for defensible numbers",
    ],
    weaknesses: [
      "Asset centric by design, with no corporate operating workflow",
      "Adaptation analysis rather than a capital planning product",
      "No inventory, disclosure or supplier layer",
      "Technical output needs translation for an executive audience",
    ],
    roadmap: [
      {
        period: "Near term",
        focus: "Scenario and peril depth",
        items: [
          "Continued scenario refresh as climate science updates",
          "More granular damage functions across asset archetypes",
        ],
      },
      {
        period: "Medium term",
        focus: "Decision support around the model",
        items: [
          "Adaptation benefit analysis for specific interventions",
          "Portfolio aggregation views for finance buyers",
        ],
      },
      {
        period: "Longer term",
        focus: "Benchmarking and public analytics",
        items: [
          "Wider public benchmarking of regions, sectors and infrastructure",
          "Deeper partnership distribution through platforms and advisors",
        ],
      },
    ],
    useCases: [
      {
        buyer: "Infrastructure or asset owner",
        need: "Defensible damage cost per asset under scenarios",
        vendorAnswer: "Very strong. Best in class for engineering defensibility.",
      },
      {
        buyer: "Government or public body",
        need: "Regional and infrastructure exposure analysis",
        vendorAnswer: "Strong, with public benchmarking heritage.",
      },
      {
        buyer: "Corporate sustainability lead",
        need: "Risk numbers ready for board reporting and disclosure",
        vendorAnswer: "Partial. Requires translation and a separate reporting workflow.",
      },
    ],
    gaps: [
      {
        area: "Executive translation",
        vendor: "Engineering output needs interpretation before a board sees it.",
        raPlus: "Value at risk expressed as financial values in board and disclosure language.",
      },
      {
        area: "Action layer",
        vendor: "Adaptation analysis without an initiatives or capital workflow.",
        raPlus: "Adaptation actions tracked with owners, spend and status alongside decarbonization.",
      },
      {
        area: "Single spine",
        vendor: "Standalone modelling against a separately maintained asset list.",
        raPlus: "One asset register shared with carbon, energy and reporting.",
      },
    ],
    winTheme:
      "XDI wins the argument on modelling depth. We win the argument on what a corporate does on Monday morning with the number.",
    watchFor:
      "Distribution partnerships that embed XDI modelling inside broader sustainability platforms.",
    sources: [
      "Public XDI product and methodology information reviewed September 2026",
      "Licensed Verdantix climate risk research reviewed September 2026",
    ],
  },
  {
    slug: "cotality",
    name: "Cotality (CoreLogic)",
    category: "Property data and catastrophe modelling",
    tagline: "Property market incumbent bringing catastrophe models into climate risk",
    threat: "Moderate",
    overlap: "Acute and chronic peril data, property level exposure metrics",
    summary:
      "Cotality, formerly CoreLogic, brings decades of property data and catastrophe modelling into climate risk products covering acute and chronic perils at property level. Its centre of gravity is insurance, mortgage and property markets rather than corporate sustainability.",
    strengths: [
      "Deep property attribute data across large markets",
      "Catastrophe modelling heritage recognised by insurers",
      "Property level metrics that translate directly into economic impact",
      "Established distribution into insurance and mortgage workflows",
    ],
    weaknesses: [
      "Property centric, weak beyond the built asset",
      "Data and scores with no action layer",
      "No corporate disclosure workflow",
      "Coverage strongest in core property markets, thinner globally",
    ],
    roadmap: [
      {
        period: "Near term",
        focus: "Peril and property coverage",
        items: [
          "Continued expansion of acute and chronic peril products",
          "Richer property attributes feeding vulnerability estimates",
        ],
      },
      {
        period: "Medium term",
        focus: "Financial impact packaging",
        items: [
          "Economic impact metrics packaged for lenders and insurers",
          "Broader geographic coverage outside core markets",
        ],
      },
      {
        period: "Longer term",
        focus: "Data distribution",
        items: [
          "Cloud and marketplace data delivery into third party platforms",
        ],
      },
    ],
    useCases: [
      {
        buyer: "Insurer or reinsurer",
        need: "Peril exposure and expected loss on property",
        vendorAnswer: "Very strong. Core market.",
      },
      {
        buyer: "Mortgage lender",
        need: "Property level climate exposure in underwriting",
        vendorAnswer: "Strong.",
      },
      {
        buyer: "Corporate operator",
        need: "Exposure across owned sites plus suppliers and logistics",
        vendorAnswer: "Weak beyond the property boundary.",
      },
    ],
    gaps: [
      {
        area: "Scope of exposure",
        vendor: "Property boundary only.",
        raPlus: "Owned sites, suppliers and value chain exposure in one view.",
      },
      {
        area: "Action",
        vendor: "Data and scores, no action layer.",
        raPlus: "Adaptation actions, owners and funding tracked on the platform.",
      },
      {
        area: "Disclosure",
        vendor: "Data feeds through cloud and file delivery.",
        raPlus: "Risk values flow into disclosure with lineage, evidence and audit trail.",
      },
    ],
    winTheme:
      "Cotality is a data supplier to markets. We are the operating platform for a corporate that has to disclose and act.",
    watchFor:
      "Data partnerships that push Cotality peril data inside sustainability platforms our buyers already use.",
    sources: [
      "Public Cotality and CoreLogic product information reviewed September 2026",
      "Licensed Verdantix climate risk research reviewed September 2026",
    ],
  },
  {
    slug: "sp-global-climanomics",
    name: "S&P Global Climanomics",
    category: "Financial market climate analytics",
    tagline: "Modelled average annual loss carried by the Sustainable1 franchise",
    threat: "High",
    overlap: "Physical hazard modelling, modelled financial loss, portfolio level exposure",
    summary:
      "Climanomics, delivered through S&P Global Sustainable1, models hazard across corporate and financial portfolios with modelled average annual loss as the core output. Its strength is reach: it arrives with the S&P data franchise already inside the buyer's finance function.",
    strengths: [
      "Broad hazard modelling across corporate and financial portfolios",
      "Modelled average annual loss as a single comparable metric",
      "S&P distribution into investors, lenders and large corporates",
      "Adjacency to ratings, indices and wider ESG datasets",
    ],
    weaknesses: [
      "Analytics only, with no operational workflow",
      "Portfolio and counterparty framing rather than operational supply chain",
      "Data feeds rather than a disclosure product",
      "Limited connection between the risk number and any spend decision",
    ],
    roadmap: [
      {
        period: "Near term",
        focus: "Dataset breadth",
        items: [
          "Continued expansion of modelled loss coverage across entities and assets",
          "Tighter alignment with wider Sustainable1 datasets",
        ],
      },
      {
        period: "Medium term",
        focus: "Transition plus physical",
        items: [
          "Combined transition and physical views for portfolio buyers",
          "Scenario alignment with regulatory expectations",
        ],
      },
      {
        period: "Longer term",
        focus: "Embedded finance analytics",
        items: [
          "Deeper embedding into credit, index and valuation workflows",
        ],
      },
    ],
    useCases: [
      {
        buyer: "Investor or asset manager",
        need: "Comparable climate loss metric across holdings",
        vendorAnswer: "Very strong. Core market.",
      },
      {
        buyer: "Large corporate finance team",
        need: "Modelled loss for board and regulatory reporting",
        vendorAnswer: "Strong on the number, silent on what to do about it.",
      },
      {
        buyer: "Operations or sustainability lead",
        need: "Site level plans and adaptation decisions",
        vendorAnswer: "Weak. Not the design intent.",
      },
    ],
    gaps: [
      {
        area: "Operational relevance",
        vendor: "Portfolio and counterparty analytics.",
        raPlus: "Site, supplier and asset level exposure the operator can act on.",
      },
      {
        area: "Action and funding",
        vendor: "Analytics only.",
        raPlus: "Adaptation planning and initiatives with owners and spend.",
      },
      {
        area: "Disclosure workflow",
        vendor: "Data feeds, not a disclosure workflow.",
        raPlus: "Configure, collect, disclose end to end with evidence and audit trail.",
      },
    ],
    winTheme:
      "S&P sells a comparable number to the market. We sell a governed number the corporate produced itself, can defend, and can act on.",
    watchFor:
      "S&P bundling Climanomics into wider corporate sustainability offers where our buyer already holds an S&P relationship.",
    sources: [
      "Public S&P Global Sustainable1 and Climanomics information reviewed September 2026",
      "Licensed Verdantix climate risk research reviewed September 2026",
    ],
  },
  {
    slug: "risilience",
    name: "Risilience",
    category: "Corporate climate strategy and risk analytics",
    tagline: "The closest rival to our buyer: physical and transition through one lens",
    threat: "High",
    overlap: "Transition risk, value chain framing, financially quantified analytics, strategy support",
    summary:
      "Risilience models physical and transition risk through a single lens with Cambridge Centre for Risk Studies heritage, and sells financially quantified analytics to corporate sustainability, finance and risk teams. Of the specialists, it is the closest to our buyer and our language.",
    strengths: [
      "Physical and transition risk combined rather than treated separately",
      "Financially quantified analytics across climate and nature",
      "Strong scientific and academic credibility",
      "Sells to corporate sustainability, finance and risk, which is our buyer",
    ],
    weaknesses: [
      "Value chain framing exists without a supplier engagement product behind it",
      "Strong on strategy and high return decarbonization, no capital execution layer",
      "Disclosure support without an inventory of record",
      "Engagement often advisory led rather than product led at scale",
    ],
    roadmap: [
      {
        period: "Near term",
        focus: "Analytics breadth",
        items: [
          "Wider nature and value chain risk coverage",
          "More packaged scenario and strategy outputs for boards",
        ],
      },
      {
        period: "Medium term",
        focus: "From analysis to plan",
        items: [
          "Decarbonization and adaptation plan comparison with financial framing",
          "Deeper disclosure support aligned to CSRD and related regimes",
        ],
      },
      {
        period: "Longer term",
        focus: "Platform ambitions",
        items: [
          "Broader corporate sustainability platform positioning beyond risk analytics",
        ],
      },
    ],
    useCases: [
      {
        buyer: "Corporate sustainability lead",
        need: "One view of physical and transition risk in financial terms",
        vendorAnswer: "Strong. The clearest specialist answer for this buyer.",
      },
      {
        buyer: "CFO or risk officer",
        need: "Financial quantification for board and regulatory conversations",
        vendorAnswer: "Strong on quantification and strategy framing.",
      },
      {
        buyer: "Procurement or supply chain lead",
        need: "Supplier level exposure with an engagement programme behind it",
        vendorAnswer: "Weak. Value chain framing without a supplier product.",
      },
    ],
    gaps: [
      {
        area: "Inventory of record",
        vendor: "Disclosure support without owning the inventory.",
        raPlus:
          "Carbon Performance owns the inventory every other product consumes, including risk and disclosure.",
      },
      {
        area: "Supplier programme",
        vendor: "Value chain framing, no supplier engagement product.",
        raPlus: "Supplier engagement, data collection and abatement run on the same platform.",
      },
      {
        area: "Execution",
        vendor: "Strategy and analysis, no capital execution.",
        raPlus: "Initiatives and actions management carries the plan into funded delivery.",
      },
    ],
    winTheme:
      "Risilience is the specialist we will meet most often on our own buyer's shortlist. We win on the spine: one inventory, one supplier programme, one disclosure workflow underneath the risk number.",
    watchFor:
      "Any move by Risilience towards owning inventory or supplier engagement, which would put it directly on our ground.",
    sources: [
      "Public Risilience product information reviewed September 2026",
      "Licensed Verdantix climate risk research reviewed September 2026",
    ],
  },
  {
    slug: "bloomberg",
    name: "Bloomberg",
    category: "Investor data and research",
    tagline: "Issuer level climate scenario analysis for the Terminal audience",
    threat: "Low",
    overlap: "Scenario analysis, transition risk data, financial framing",
    summary:
      "Bloomberg states climate scenario analysis across roughly 95,000 companies, delivered issuer level rather than asset level to investors on the Terminal. It shapes the language boards hear, but it does not compete for the corporate operating workflow.",
    strengths: [
      "Very large issuer coverage and trusted market data brand",
      "Portfolio and issuer level financial framing for investors",
      "Distribution through the Terminal into finance decision making",
      "Research and indices that set market expectations",
    ],
    weaknesses: [
      "Issuer level exposure only, no asset or site resolution",
      "Investors on the Terminal, not corporate operations",
      "Data and research only, with no action layer",
      "No inventory, supplier or disclosure workflow",
    ],
    roadmap: [
      {
        period: "Near term",
        focus: "Coverage and scenarios",
        items: [
          "Continued expansion of issuer scenario coverage",
          "Alignment with evolving regulatory scenario expectations",
        ],
      },
      {
        period: "Medium term",
        focus: "Analytics packaging",
        items: [
          "Richer transition and physical analytics for portfolio construction",
        ],
      },
      {
        period: "Longer term",
        focus: "Market infrastructure",
        items: [
          "Deeper embedding of climate metrics into indices and benchmarks",
        ],
      },
    ],
    useCases: [
      {
        buyer: "Investor",
        need: "Compare climate exposure across issuers",
        vendorAnswer: "Strong. Core market.",
      },
      {
        buyer: "Corporate investor relations",
        need: "Understand how the market sees our exposure",
        vendorAnswer: "Useful context, not an operating tool.",
      },
      {
        buyer: "Corporate operator",
        need: "Site and supplier exposure with adaptation actions",
        vendorAnswer: "Not covered.",
      },
    ],
    gaps: [
      {
        area: "Resolution",
        vendor: "Issuer level only.",
        raPlus: "Asset, site and supplier level exposure on the shared register.",
      },
      {
        area: "Operating workflow",
        vendor: "Data and research only.",
        raPlus: "Risk priced, disclosed and funded in one platform.",
      },
    ],
    winTheme:
      "Bloomberg sets the market narrative our board already reads. We are the platform that produces the corporate's own defensible answer to it.",
    watchFor:
      "Bloomberg metrics becoming the reference point investors quote back to our customers, which raises the bar on our disclosure quality.",
    sources: [
      "Public Bloomberg climate data and research information reviewed September 2026",
      "Licensed Verdantix climate risk research reviewed September 2026",
    ],
  },
];

export const findClimateVendor = (slug?: string) =>
  climateVendors.find((v) => v.slug === slug);
