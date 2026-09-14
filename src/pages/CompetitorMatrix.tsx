import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { energyVendors } from "@/data/energy-vendors";
import { orderedEnergyProducts } from "@/data/energy-products";
import { orderedSustainabilityProducts } from "@/data/sustainability-product-pages";
import { climateVendors } from "@/data/climate-vendors";
import {
  domainLabels,
  sustainabilityVendors,
  type SustainabilityDomain,
} from "@/data/sustainability-vendors";

type Position = "Market leading" | "On parity" | "Closing gap" | "Behind";

interface Row {
  capability: string;
  raPlus: string;
  position: Position;
  rivals: Record<string, string>;
}

interface Matrix {
  id: string;
  family: "Energy & Efficiency" | "Sustainability";
  name: string;
  headline: string;
  intro: string;
  rivals: string[];
  rows: Row[];
  verdantix: string;
  signals?: string[];
  landscape?: { name: string; role: string; note: string }[];
  takeaway: string;
}

const positionStyle: Record<Position, string> = {
  "Market leading": "bg-secondary text-secondary-foreground",
  "On parity": "bg-primary/15 text-secondary",
  "Closing gap": "bg-[hsl(var(--se-quartz-orange))]/20 text-foreground",
  Behind: "bg-muted/15 text-muted-foreground",
};

type MatrixView = "capabilities" | "roadmap-gaps";
type RoadmapFamily = "Energy & Efficiency" | "Climate Risk" | "Sustainability";

const roadmapFamilies: RoadmapFamily[] = ["Energy & Efficiency", "Climate Risk", "Sustainability"];

const roadmapGapPositions: Record<string, Position> = {
  "ibm-envizi": "On parity",
  energycap: "Market leading",
  accruent: "Market leading",
  arcadia: "Market leading",
  "honeywell-forge": "Market leading",
  "eac-renewables-specialists": "Closing gap",
  "demand-response-der-specialists": "Closing gap",
  "climate-x": "Closing gap",
  xdi: "Closing gap",
  cotality: "Closing gap",
  "sp-global-climanomics": "Closing gap",
  risilience: "On parity",
  bloomberg: "Closing gap",
  watershed: "On parity",
  persefoni: "Closing gap",
  sweep: "Market leading",
  sphera: "Closing gap",
  ecovadis: "Closing gap",
  osapiens: "Behind",
  integritynext: "Closing gap",
  workiva: "Closing gap",
  "wolters-kluwer": "Closing gap",
  novisto: "Closing gap",
};

const roadmapVendorGroups = {
  "Energy & Efficiency": energyVendors.map((vendor) => ({
    ...vendor,
    href: `/energy-vendors/${vendor.slug}`,
    scope: vendor.category,
  })),
  "Climate Risk": climateVendors.map((vendor) => ({
    ...vendor,
    href: `/climate-vendors/${vendor.slug}`,
    scope: vendor.category,
  })),
  Sustainability: sustainabilityVendors.map((vendor) => ({
    ...vendor,
    href: `/sustainability-vendors/${vendor.slug}`,
    scope: vendor.domains.map((domain: SustainabilityDomain) => domainLabels[domain]).join(" · "),
  })),
};

const matrices: Matrix[] = [
  {
    id: "energy",
    family: "Energy & Efficiency",
    name: "Energy management",
    headline: "RA+ Energy & Efficiency vs the energy management platforms",
    intro:
      "Rivals capture energy data well. None of them turn it into sourcing, flexibility and efficiency actions that land in a governed carbon inventory.",
    rivals: ["IBM Envizi", "EnergyCAP", "Accruent (Fortive)", "Honeywell Forge", "Gravity"],
    rows: [
      {
        capability: "Metering and interval data",
        raPlus: "Metering & Interval Data as the shared spine: interval capture, M&V baselines, utility connectivity.",
        position: "On parity",
        rivals: {
          "IBM Envizi": "Interval Meter Analytics with regression baselines. Genuine strength.",
          EnergyCAP: "Strong interval and meter data handling for utility teams.",
          "Accruent (Fortive)": "Meter and building data capture tied to asset systems.",
          "Honeywell Forge": "Deep building and sub-meter telemetry from the controls layer.",
          Gravity: "Emerging meter ingestion, lighter on M&V rigour.",
        },
      },
      {
        capability: "Utility data and bill management",
        raPlus: "Utility Data Management with bill validation, budgets, reforecasts and variance explained.",
        position: "On parity",
        rivals: {
          "IBM Envizi": "Utility Bill Analytics is deep; budget and reforecast workflows are thinner.",
          EnergyCAP: "Category benchmark for bill accounting and cost allocation.",
          "Accruent (Fortive)": "Bill processing plus lease and asset context.",
          "Honeywell Forge": "Limited billing depth, focus on operations.",
          Gravity: "Basic invoice capture.",
        },
      },
      {
        capability: "Energy sourcing, EACs and PPAs",
        raPlus: "Energy Sourcing plus Renewables & EACs: procurement, EAC and PPA management fed by Schneider energy expertise.",
        position: "Market leading",
        rivals: {
          "IBM Envizi": "Reports energy and emissions, does not operate sourcing workflows.",
          EnergyCAP: "No sourcing or PPA management.",
          "Accruent (Fortive)": "No sourcing or PPA management.",
          "Honeywell Forge": "No sourcing or PPA management.",
          Gravity: "Partner led, not native.",
        },
      },
      {
        capability: "Demand response and flexibility",
        raPlus: "DR programs, peak shaving and grid flexibility monetization on metered reality.",
        position: "Market leading",
        rivals: {
          "IBM Envizi": "No comparable flexibility capability.",
          EnergyCAP: "Out of scope.",
          "Accruent (Fortive)": "Out of scope.",
          "Honeywell Forge": "Load control at building level, no market monetization.",
          Gravity: "Out of scope.",
        },
      },
      {
        capability: "Efficiency to carbon convergence",
        raPlus: "Hourly emissions and ECM cobenefits connect efficiency actions into the carbon inventory on one platform.",
        position: "Market leading",
        rivals: {
          "IBM Envizi": "Energy analytics and ESG reporting sit in separate modules.",
          EnergyCAP: "Carbon is a reporting output, not a decision layer.",
          "Accruent (Fortive)": "Asset centric, carbon added on top.",
          "Honeywell Forge": "Operational savings, limited inventory grade carbon.",
          Gravity: "Combines carbon and energy but at lighter enterprise depth.",
        },
      },
      {
        capability: "Capital asset planning and ECM library",
        raPlus: "Capital Asset Planning with a governed ECM library built from real Schneider audit work.",
        position: "Market leading",
        rivals: {
          "IBM Envizi": "No measure level library.",
          EnergyCAP: "Project tracking only.",
          "Accruent (Fortive)": "Capital planning strength, no carbon cobenefit modelling.",
          "Honeywell Forge": "Measure recommendations limited to controlled assets.",
          Gravity: "Generic recommendations.",
        },
      },
      {
        capability: "Electrification and DER management",
        raPlus: "EV charging, solar, storage and behind the meter assets bridging efficiency and procurement.",
        position: "Closing gap",
        rivals: {
          "IBM Envizi": "Emerging.",
          EnergyCAP: "Not covered.",
          "Accruent (Fortive)": "Not covered.",
          "Honeywell Forge": "Partial via building assets.",
          Gravity: "Emerging.",
        },
      },
    ],
    verdantix:
      "Verdantix does not publish a dedicated energy management Green Quadrant in this set. Positions here use public vendor product information reviewed September 2026.",
    signals: [
      "Verdantix Market Insight, 10 Predictions For Energy Leaders In 2026 And Beyond (January 2026): buyers pivoted from net zero at all costs to business value at all times, prioritising outage avoidance and efficiency.",
      "Same report: energy transition programme management start-ups are expected to build a 1 billion dollar market by 2030, and an energy technology major is expected to buy a renewable procurement specialist.",
      "Verdantix Building The Business Case For Energy Resilience: 64 percent of corporate real estate respondents rate enhanced energy monitoring and control a priority in the 2026 global survey.",
    ],
    takeaway:
      "We can concede parity on capturing energy data. We win on what happens next: sourcing, flexibility, capital planning and carbon, all on one platform.",
  },
  {
    id: "carbon",
    family: "Sustainability",
    name: "Carbon management",
    headline: "RA+ Carbon Performance vs the carbon management leaders",
    intro:
      "Verdantix names Schneider Electric a Leader in the 2026 enterprise carbon management Green Quadrant. Capabilities are converging, so AI and product level carbon are the differentiators.",
    rivals: ["Watershed", "Sphera", "IBM", "Persefoni", "Sweep"],
    rows: [
      {
        capability: "Inventory depth across Scope 1, 2 and 3",
        raPlus: "Consultant grade and AI driven inventory with market based Scope 2, refrigerants, commuting and thermal source.",
        position: "Market leading",
        rivals: {
          Watershed: "Strong Scope 3 modelling, lighter on operational energy detail.",
          Sphera: "Deep industrial and LCA heritage.",
          IBM: "Scalable workflows and data health tooling.",
          Persefoni: "Audit oriented ledger, narrower operational coverage.",
          Sweep: "Fast onboarding, less depth at enterprise scale.",
        },
      },
      {
        capability: "Metered energy, EACs and PPAs inside the inventory",
        raPlus: "Metered energy, EAC and PPA management fed by the Schneider energy expertise.",
        position: "Market leading",
        rivals: {
          Watershed: "Clean power procurement guidance, not operated sourcing.",
          Sphera: "Limited market based instrument management.",
          IBM: "Reports energy, does not source it.",
          Persefoni: "Reporting only.",
          Sweep: "Reporting only.",
        },
      },
      {
        capability: "Data quality, lineage and audit trail",
        raPlus: "Automated checks, approvals, lineage, evidence and audit trail across the data lifecycle.",
        position: "On parity",
        rivals: {
          Watershed: "Assurance ready workflows.",
          Sphera: "Mature governance for regulated industries.",
          IBM: "Advanced data health tooling.",
          Persefoni: "Ledger grade traceability is a core claim.",
          Sweep: "Adequate, less mature.",
        },
      },
      {
        capability: "AI assisted decarbonization recommendations",
        raPlus: "Recommendations launching Q4 2026 with energy, carbon and cost cobenefits from real ECM data.",
        position: "Market leading",
        rivals: {
          Watershed: "Reduction planning without energy cobenefits.",
          Sphera: "Abatement modelling, limited cobenefits.",
          IBM: "Little native abatement guidance.",
          Persefoni: "Minimal abatement tooling.",
          Sweep: "Generic action plans.",
        },
      },
      {
        capability: "Product level carbon and PCFs",
        raPlus: "Light PCF calculator in H1 2027, Category 4 and 9 product linked transport in Q1 2027.",
        position: "Closing gap",
        rivals: {
          Watershed: "Product footprints available.",
          Sphera: "LCA grade product footprints, the benchmark.",
          IBM: "Emerging product level support.",
          Persefoni: "Limited.",
          Sweep: "Emerging.",
        },
      },
      {
        capability: "Financed emissions",
        raPlus: "Not in the 2026 or 2027 scope.",
        position: "Behind",
        rivals: {
          Watershed: "Supported.",
          Sphera: "Partial.",
          IBM: "Partial.",
          Persefoni: "Category leader on PCAF.",
          Sweep: "Supported.",
        },
      },
    ],
    verdantix:
      "Verdantix Green Quadrant: Enterprise Carbon Management Software (2026) names eight Leaders: Cority, IBM, Schneider Electric, Sphera, Sweep, UL Solutions, Watershed and Wolters Kluwer.",
    signals: [
      "Verdantix Strategic Focus, The Rise Of Resilient Decarbonization (November 2025): carbon reduction is being replanned alongside energy reliability and cost stability, not on its own.",
      "Verdantix Powering Resilient Decarbonization With Schneider Electric: Schneider is profiled for uniting emissions reduction with reliability across hardware, software and services, which is the story our inventory sits inside.",
    ],
    takeaway:
      "We are already a named Leader. The 2027 job is product level carbon, while we extend the lead on energy grounded inventory and cobenefit recommendations.",
  },
  {
    id: "supply-chain",
    family: "Sustainability",
    name: "Supply chain",
    headline: "RA+ Supply Chain vs the supply chain sustainability platforms",
    intro:
      "This is the field where we are the challenger. Our edge is the Zeigo supplier network and education heritage plus a carbon inventory the supplier data flows straight into.",
    rivals: ["EcoVadis", "osapiens", "Assent", "Sphera", "IntegrityNext"],
    rows: [
      {
        capability: "Supplier engagement and education",
        raPlus: "Campaigns at scale plus structured supplier education and guided decarbonization from the onboarded Zeigo network.",
        position: "Market leading",
        rivals: {
          EcoVadis: "Ratings and scorecards, academy content available.",
          osapiens: "Compliance driven questionnaires.",
          Assent: "Deep supplier data collection for regulated data.",
          Sphera: "Risk led engagement.",
          IntegrityNext: "Broad network, light on decarbonization coaching.",
        },
      },
      {
        capability: "Supplier emissions and primary data",
        raPlus: "Primary supplier data feeding Category 1 and 4 straight into the CP inventory.",
        position: "On parity",
        rivals: {
          EcoVadis: "Carbon module improving.",
          osapiens: "Carbon accounting alongside compliance.",
          Assent: "Product and material data strength.",
          Sphera: "Strong supply chain carbon and LCA.",
          IntegrityNext: "Emissions collection at network scale.",
        },
      },
      {
        capability: "Supplier abatement programs",
        raPlus: "Supplier emissions abatement pathways with measurable reduction tracking.",
        position: "Market leading",
        rivals: {
          EcoVadis: "Improvement plans, not abatement engineering.",
          osapiens: "Limited.",
          Assent: "Limited.",
          Sphera: "Modelling focused.",
          IntegrityNext: "Limited.",
        },
      },
      {
        capability: "Compliance and due diligence breadth",
        raPlus: "Focused on emissions and decarbonization, not full due diligence coverage.",
        position: "Behind",
        rivals: {
          EcoVadis: "Broad ESG assessment coverage.",
          osapiens: "CSDDD, CBAM, EUDR breadth is their core.",
          Assent: "Regulated product compliance leader.",
          Sphera: "Strong regulatory content.",
          IntegrityNext: "Broad screening coverage.",
        },
      },
      {
        capability: "Supply chain risk plus climate risk",
        raPlus: "2027 whitespace: supplier exposure combined with climate hazard and financial value at risk.",
        position: "Market leading",
        rivals: {
          EcoVadis: "No climate hazard modelling.",
          osapiens: "No climate hazard modelling.",
          Assent: "No climate hazard modelling.",
          Sphera: "Risk tooling without priced climate exposure.",
          IntegrityNext: "Risk screening only.",
        },
      },
    ],
    verdantix:
      "Verdantix Green Quadrant: Supply Chain Sustainability Software (2026) benchmarks 16 vendors, with Sphera, osapiens, Assent, 3E, Blue Yonder and EcoVadis positioned in the Leaders area. Schneider Electric was not an evaluated vendor in that quadrant.",
    signals: [
      "Verdantix Future Of Supply Chain Sustainability (January 2026): supply chain teams become strategic partners and these decisions move to C level, so the buyer is changing in our favour.",
      "Same report: transparency across multi tier supplier networks, plus internal data orchestration, is the capability that decides sourcing, operations, risk and product design.",
      "Short term bets centre on agility and absorbing shocks, medium and long term on transparency and AI enabled decision support, which maps to our 2027 supplier bets.",
    ],
    takeaway:
      "We do not win on due diligence breadth and should not claim it. We win when supplier data must become defensible carbon and funded abatement.",
  },
  {
    id: "esg",
    family: "Sustainability",
    name: "ESG reporting and compliance",
    headline: "RA+ Reporting & Compliance vs the ESG reporting leaders",
    intro:
      "Schneider Electric is already a Leader in the ESG and sustainability reporting Green Quadrant. The 2027 job is the configure, collect, disclose spine and AI assisted disclosure.",
    rivals: ["Workiva", "Wolters Kluwer", "Novisto", "Cority", "Watershed"],
    rows: [
      {
        capability: "Regulated framework coverage",
        raPlus: "CSRD and core frameworks with the SE migration and CSRD cycle in RA+ in Q1 2027.",
        position: "On parity",
        rivals: {
          Workiva: "Benchmark for regulated filing.",
          "Wolters Kluwer": "Deep regulated content.",
          Novisto: "Broad framework library.",
          Cority: "Strong framework coverage.",
          Watershed: "Growing framework support.",
        },
      },
      {
        capability: "Indicator and campaign management",
        raPlus: "Indicator library, advanced campaign management, approval hierarchies and bulk assignment.",
        position: "On parity",
        rivals: {
          Workiva: "Mature collection workflows.",
          "Wolters Kluwer": "Mature collection workflows.",
          Novisto: "Strong data collection UX.",
          Cority: "Solid workflows.",
          Watershed: "Lighter on non carbon indicators.",
        },
      },
      {
        capability: "Lineage, evidence and audit trail",
        raPlus: "Lineage, evidence and audit trail across every reported number.",
        position: "On parity",
        rivals: {
          Workiva: "Audit trail is their core promise.",
          "Wolters Kluwer": "Assurance grade controls.",
          Novisto: "Good traceability.",
          Cority: "Good traceability.",
          Watershed: "Assurance ready workflows.",
        },
      },
      {
        capability: "Carbon and energy data in the same platform",
        raPlus: "Disclosure sits on the same inventory, energy and supplier data, no reconciliation project.",
        position: "Market leading",
        rivals: {
          Workiva: "Reporting layer over other systems.",
          "Wolters Kluwer": "Reporting layer over other systems.",
          Novisto: "Reporting layer over other systems.",
          Cority: "EHS plus reporting, lighter energy depth.",
          Watershed: "Carbon plus reporting, no energy operations.",
        },
      },
      {
        capability: "AI assisted narrative and disclosure",
        raPlus: "AI assisted disclosure drafting on the 2027 roadmap.",
        position: "Closing gap",
        rivals: {
          Workiva: "AI drafting already shipping.",
          "Wolters Kluwer": "AI assistance shipping.",
          Novisto: "AI narrative support.",
          Cority: "Emerging.",
          Watershed: "Emerging.",
        },
      },
    ],
    verdantix:
      "Green Quadrant: ESG And Sustainability Reporting Software (2025) names Schneider Electric among the Leaders, alongside Workiva, Wolters Kluwer, Cority, Sphera, IBM, osapiens, Watershed and others.",
    signals: [
      "Verdantix Future Of Supply Chain Sustainability (January 2026): data transparency and orchestration are the pillars attracting technology investment, which is exactly the configure, collect, disclose spine.",
      "Verdantix 2026 energy predictions: buyers pivoted to business value at all times, so disclosure tooling has to earn its place next to operational value.",
    ],
    takeaway:
      "Disclosure is table stakes. Our differentiator is that the numbers being disclosed were produced, governed and defended in the same platform.",
  },
  {
    id: "climate-risk",
    family: "Sustainability",
    name: "Climate risk",
    headline: "RA+ Climate Risk vs the physical and transition risk providers",
    intro:
      "The specialists price hazard at asset level extremely well. Almost none of them connect that number to an operating sustainability platform, a supply chain, or a funded adaptation plan.",
    rivals: ["Climate X", "XDI", "Cotality (CoreLogic)", "S&P Global Climanomics", "Risilience", "Bloomberg"],
    rows: [
      {
        capability: "Physical hazard modelling",
        raPlus: "Hazard exposure across the shared asset register, self serve and scalable, with ClimVar behind it.",
        position: "On parity",
        rivals: {
          "Climate X": "Spectra states coverage of over 1.5 billion assets worldwide, with proprietary building vulnerability data.",
          XDI: "Asset level engineering damage modelling since 2007, assets analysed in over 175 countries, CMIP5 and CMIP6 scenarios.",
          "Cotality (CoreLogic)": "Acute and chronic peril products built on catastrophe models, property level metrics.",
          "S&P Global Climanomics": "Broad hazard modelling across corporate and financial portfolios.",
          Risilience: "Physical and transition modelled through a single lens, Cambridge Centre for Risk Studies heritage.",
          Bloomberg: "Climate scenario analysis stated across roughly 95,000 companies, issuer level rather than asset level.",
        },
      },
      {
        capability: "Financial value at risk",
        raPlus: "ClimVar turns exposure into financial value at risk a CFO can act on, on the same platform as the carbon inventory.",
        position: "On parity",
        rivals: {
          "Climate X": "Explicitly positioned on asset level financial loss and P&L impact.",
          XDI: "Damage cost and failure probability outputs.",
          "Cotality (CoreLogic)": "Converts hazard into potential economic impact per property.",
          "S&P Global Climanomics": "Modelled average annual loss is the core output.",
          Risilience: "Financially quantified analytics across climate and nature.",
          Bloomberg: "Portfolio and issuer level financial framing for investors.",
        },
      },
      {
        capability: "Buyer served",
        raPlus: "Corporate operators: the sustainability, energy and capital teams already using RA+ for carbon and energy.",
        position: "Market leading",
        rivals: {
          "Climate X": "Banks, real estate and financial services are the stated core buyers.",
          XDI: "Asset owners, governments and finance.",
          "Cotality (CoreLogic)": "Insurance, mortgage and property markets.",
          "S&P Global Climanomics": "Investors, lenders and large corporates through the Sustainable1 franchise.",
          Risilience: "Corporate sustainability, finance and risk teams. Closest to our buyer.",
          Bloomberg: "Investors on the Terminal, not corporate operations.",
        },
      },
      {
        capability: "Risk beyond owned assets",
        raPlus: "2027 whitespace: supplier and value chain exposure priced with the same model as owned assets.",
        position: "Market leading",
        rivals: {
          "Climate X": "Supply chain views exist, but they sit apart from an operating supplier programme.",
          XDI: "Asset centric by design.",
          "Cotality (CoreLogic)": "Property centric.",
          "S&P Global Climanomics": "Portfolio and counterparty, not operational supply chain.",
          Risilience: "Value chain framing present, no supplier engagement product behind it.",
          Bloomberg: "Issuer level exposure only.",
        },
      },
      {
        capability: "Adaptation actions and funding",
        raPlus: "Scenario analysis, adaptation actions and a route into the capital plan through Capital Asset Planning.",
        position: "Market leading",
        rivals: {
          "Climate X": "Analytics and reporting, with adaptation guidance rather than funded plans.",
          XDI: "Adaptation planning analysis, no capital planning product.",
          "Cotality (CoreLogic)": "Data and scores, no action layer.",
          "S&P Global Climanomics": "Analytics only.",
          Risilience: "Strong on strategy and high ROI decarbonization, no capital execution.",
          Bloomberg: "Data and research only.",
        },
      },
      {
        capability: "Risk into disclosure",
        raPlus: "Risk data flows into R&C disclosures and is turned into financial values, on one governed data spine.",
        position: "Market leading",
        rivals: {
          "Climate X": "Exports and reports into third party disclosure tools.",
          XDI: "Exports into third party reporting.",
          "Cotality (CoreLogic)": "Data feeds through cloud and file delivery.",
          "S&P Global Climanomics": "Data feeds, not a disclosure workflow.",
          Risilience: "Disclosure support alongside strategy, without an inventory of record.",
          Bloomberg: "Data and reporting tools for investors.",
        },
      },
      {
        capability: "Convergence with carbon and energy",
        raPlus: "Same hierarchy, same inventory, same platform as Carbon Performance, Supply Chain and Energy.",
        position: "Market leading",
        rivals: {
          "Climate X": "Pure play risk analytics.",
          XDI: "Pure play risk analytics.",
          "Cotality (CoreLogic)": "Property data business.",
          "S&P Global Climanomics": "Part of a data franchise, not an operating platform.",
          Risilience: "Carbon strategy plus risk, without energy or supplier operations.",
          Bloomberg: "Financial data platform.",
        },
      },
    ],
    verdantix:
      "Positions use public vendor product information reviewed 6 September 2026, drawn from each vendor's own website. Climate risk analytics is not covered by the Green Quadrant reports in this set, and the coverage figures quoted are vendor claims, not verified benchmarks.",
    landscape: [
      {
        name: "Copperleaf (Industrial and Financial Systems)",
        role: "Adjacent, not a risk vendor",
        note: "Decision analytics for asset investment planning in critical infrastructure. Competes with our Capital Asset Planning ambition rather than with ClimVar, and is a credible partner story for funded adaptation.",
      },
      {
        name: "US EPA, US SEC, WMO",
        role: "Data and rule setters",
        note: "Hazard, emissions factor and disclosure inputs we consume. They shape the requirement, they do not sell against us.",
      },
      {
        name: "University of Oxford, ECIU",
        role: "Science and credibility sources",
        note: "Research and analysis used to defend method choices. Useful for board credibility on the ClimVar methodology.",
      },
    ],
    signals: [
      "Verdantix Strategic Focus, The Rise Of Resilient Decarbonization (November 2025): emissions only strategies no longer cover the operational, financial and regulatory risk exposure boards care about.",
      "Verdantix Building The Business Case For Energy Resilience: insurance premiums up 88 percent over five years, with insurers increasingly requiring resilience measures to qualify for cover.",
      "Same report: tenants already pay rents 49 percent higher for properties with dependable power, which is the value at risk argument in commercial terms.",
      "Vendor research, September 2026: the specialists cluster around financial institutions and property markets. Risilience is the only one of this set built primarily for the corporate sustainability buyer we already serve.",
    ],
    takeaway:
      "We will not out science Climate X or XDI on hazard modelling, and we should not try. We win by pricing risk across the value chain for the corporate operator, and turning it into funded action and disclosure on the platform they already run carbon and energy on.",
  },
];


const families = ["Energy & Efficiency", "Sustainability"] as const;

// Energy rivals with a dedicated vendor deep dive page at /energy-vendors/:slug
const energyDeepDives: Record<string, string> = {
  "IBM Envizi": "ibm-envizi",
  EnergyCAP: "energycap",
  "Accruent (Fortive)": "accruent",
  "Honeywell Forge": "honeywell-forge",
};

const energyDeepDiveExtras = [
  { slug: "arcadia", name: "Arcadia" },
  { slug: "eac-renewables-specialists", name: "EAC and renewables specialists" },
  { slug: "demand-response-der-specialists", name: "Demand response, VPP and DER specialists" },
];

// Climate risk rivals with a dedicated vendor deep dive page at /climate-vendors/:slug
const climateDeepDives: Record<string, string> = {
  "Climate X": "climate-x",
  XDI: "xdi",
  "Cotality (CoreLogic)": "cotality",
  "S&P Global Climanomics": "sp-global-climanomics",
  Risilience: "risilience",
  Bloomberg: "bloomberg",
};

// Sustainability rivals with a dedicated vendor deep dive page at /sustainability-vendors/:slug
const sustainabilityDeepDives: Record<string, string> = {
  Watershed: "watershed",
  Sphera: "sphera",
  Persefoni: "persefoni",
  Sweep: "sweep",
  EcoVadis: "ecovadis",
  osapiens: "osapiens",
  IntegrityNext: "integritynext",
  Workiva: "workiva",
  "Wolters Kluwer": "wolters-kluwer",
  Novisto: "novisto",
};

const CompetitorMatrix = () => {
  const [active, setActive] = useState<string>(matrices[0].id);
  const [view, setView] = useState<MatrixView>("capabilities");
  const [roadmapFamily, setRoadmapFamily] = useState<RoadmapFamily>("Energy & Efficiency");
  const matrix = matrices.find((m) => m.id === active) ?? matrices[0];
  const roadmapVendors = roadmapVendorGroups[roadmapFamily];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-10 flex items-center justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Competitive landscape | Board reference
          </p>
          <Link
            to="/"
            className="rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Back to the deck
          </Link>
        </div>

        <div className="h-1 w-24 rounded-full bg-primary" />
        <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Where RA+ leads, where we are level, and where we still have to catch up
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Full capability matrices across both product families, benchmarked against the vendors our
          buyers shortlist. Positions are our own assessment, informed by the 2025 and 2026 Verdantix
          Green Quadrant benchmarks and public vendor information.
        </p>

        <div className="mt-8 inline-flex rounded-md border border-border bg-card p-1" aria-label="Comparison view">
          <Button
            type="button"
            size="sm"
            variant={view === "capabilities" ? "secondary" : "ghost"}
            onClick={() => setView("capabilities")}
          >
            Capability matrix
          </Button>
          <Button
            type="button"
            size="sm"
            variant={view === "roadmap-gaps" ? "secondary" : "ghost"}
            onClick={() => setView("roadmap-gaps")}
          >
            Roadmap gap matrix
          </Button>
        </div>

        {view === "capabilities" ? (
        <nav className="mt-10 space-y-4">
          {families.map((family) => (
            <div key={family} className="flex flex-wrap items-center gap-2">
              <span className="mr-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {family}
              </span>
              {matrices
                .filter((m) => m.family === family)
                .map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setActive(m.id)}
                    className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                      active === m.id
                        ? "border-secondary bg-secondary text-secondary-foreground"
                        : "border-border bg-card text-foreground/80 hover:border-primary hover:text-primary"
                    }`}
                  >
                    {m.name}
                  </button>
                ))}
            </div>
          ))}
        </nav>
        ) : (
          <nav className="mt-10 flex flex-wrap items-center gap-2" aria-label="Roadmap family">
            <span className="mr-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Product family
            </span>
            {roadmapFamilies.map((family) => (
              <Button
                key={family}
                type="button"
                size="sm"
                variant={roadmapFamily === family ? "secondary" : "outline"}
                onClick={() => setRoadmapFamily(family)}
              >
                {family}
              </Button>
            ))}
          </nav>
        )}

        {view === "capabilities" ? (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold md:text-3xl">{matrix.headline}</h2>
          <p className="mt-3 max-w-4xl text-base leading-relaxed text-muted-foreground">
            {matrix.intro}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {(["Market leading", "On parity", "Closing gap", "Behind"] as Position[]).map((p) => (
              <span
                key={p}
                className={`rounded-full px-3 py-1 text-xs font-semibold ${positionStyle[p]}`}
              >
                {p}
              </span>
            ))}
          </div>

          <div className="mt-8 overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[1100px] text-left text-sm">
              <thead className="bg-secondary text-secondary-foreground">
                <tr>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em]">
                    Capability
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em]">
                    RA+ position
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em]">
                    What we do
                  </th>
                  {matrix.rivals.map((r) => {
                    const deepDive =
                      matrix.id === "energy"
                        ? energyDeepDives[r] && `/energy-vendors/${energyDeepDives[r]}`
                        : matrix.id === "climate-risk"
                          ? climateDeepDives[r] && `/climate-vendors/${climateDeepDives[r]}`
                          : ["carbon", "supply-chain", "esg"].includes(matrix.id)
                            ? sustainabilityDeepDives[r] &&
                              `/sustainability-vendors/${sustainabilityDeepDives[r]}`
                            : undefined;
                    return (
                      <th key={r} className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em]">
                        {deepDive ? (
                          <Link
                            to={deepDive}
                            className="underline decoration-secondary-foreground/40 underline-offset-4 transition-colors hover:decoration-secondary-foreground"
                          >
                            {r}
                            <span className="block pt-0.5 text-[10px] normal-case tracking-normal opacity-70">
                              Deep dive
                            </span>
                          </Link>
                        ) : (
                          r
                        )}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {matrix.rows.map((row, i) => (
                  <tr key={row.capability} className={i % 2 ? "bg-card" : "bg-background"}>
                    <td className="px-4 py-4 align-top font-semibold">{row.capability}</td>
                    <td className="px-4 py-4 align-top">
                      <span
                        className={`inline-block rounded-full px-2.5 py-1 text-xs font-semibold ${positionStyle[row.position]}`}
                      >
                        {row.position}
                      </span>
                    </td>
                    <td className="px-4 py-4 align-top text-foreground/90">{row.raPlus}</td>
                    {matrix.rivals.map((r) => (
                      <td key={r} className="px-4 py-4 align-top text-muted-foreground">
                        {row.rivals[r] ?? "Not covered."}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {matrix.id === "energy" && (
            <div className="mt-4 rounded-xl border border-border bg-card p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Vendor deep dives: roadmap, use cases and RA+ gaps
                </p>
                <Link
                  to="/energy-vendors"
                  className="text-xs font-semibold text-primary hover:underline"
                >
                  View all energy rivals
                </Link>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {Object.entries(energyDeepDives).map(([name, slug]) => (
                  <Link
                    key={slug}
                    to={`/energy-vendors/${slug}`}
                    className="rounded-lg border border-border bg-background p-4 transition-colors hover:border-primary"
                  >
                    <p className="text-sm font-semibold text-foreground">{name}</p>
                    <p className="mt-1 text-xs text-primary">Open the deep dive</p>
                  </Link>
                ))}
                {energyDeepDiveExtras.map((v) => (
                  <Link
                    key={v.slug}
                    to={`/energy-vendors/${v.slug}`}
                    className="rounded-lg border border-border bg-background p-4 transition-colors hover:border-primary"
                  >
                    <p className="text-sm font-semibold text-foreground">{v.name}</p>
                    <p className="mt-1 text-xs text-primary">Open the deep dive</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {matrix.id === "energy" && (
            <div className="mt-4 rounded-xl border border-border bg-card p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Our product roadmaps: milestones, use cases and proof points
                </p>
                <Link to="/energy-products" className="text-xs font-semibold text-primary hover:underline">
                  View all Energy & Efficiency products
                </Link>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {orderedEnergyProducts.map((product) => (
                  <Link
                    key={product.slug}
                    to={`/energy-products/${product.slug}`}
                    className="rounded-lg border border-border bg-background p-4 transition-colors hover:border-primary"
                  >
                    <p className="text-sm font-semibold text-foreground">{product.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Next: {product.roadmap[0]?.period} · {product.roadmap[0]?.label}
                    </p>
                    <p className="mt-1 text-xs text-primary">Open the roadmap</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {matrix.id === "carbon" && (
            <div className="mt-4 rounded-xl border border-border bg-card p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Our sustainability product roadmaps: milestones, use cases and proof points
                </p>
                <Link to="/sustainability-products" className="text-xs font-semibold text-primary hover:underline">
                  View all sustainability products
                </Link>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {orderedSustainabilityProducts.map((product) => (
                  <Link
                    key={product.slug}
                    to={`/sustainability-products/${product.slug}`}
                    className="rounded-lg border border-border bg-background p-4 transition-colors hover:border-primary"
                  >
                    <p className="text-sm font-semibold text-foreground">{product.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {product.family} · Next: {product.roadmap[0]?.period}
                    </p>
                    <p className="mt-1 text-xs text-primary">Open the roadmap</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {matrix.id === "climate-risk" && (
            <div className="mt-4 rounded-xl border border-border bg-card p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Vendor deep dives: roadmap, use cases and RA+ gaps
                </p>
                <Link
                  to="/climate-vendors"
                  className="text-xs font-semibold text-primary hover:underline"
                >
                  View all climate risk rivals
                </Link>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {Object.entries(climateDeepDives).map(([name, slug]) => (
                  <Link
                    key={slug}
                    to={`/climate-vendors/${slug}`}
                    className="rounded-lg border border-border bg-background p-4 transition-colors hover:border-primary"
                  >
                    <p className="text-sm font-semibold text-foreground">{name}</p>
                    <p className="mt-1 text-xs text-primary">Open the deep dive</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {["carbon", "supply-chain", "esg"].includes(matrix.id) && (
            <div className="mt-4 rounded-xl border border-border bg-card p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Vendor deep dives: roadmap, use cases and RA+ gaps
                </p>
                <Link
                  to="/sustainability-vendors"
                  className="text-xs font-semibold text-primary hover:underline"
                >
                  View all sustainability rivals
                </Link>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {matrix.rivals
                  .filter((r) => sustainabilityDeepDives[r])
                  .map((r) => (
                    <Link
                      key={r}
                      to={`/sustainability-vendors/${sustainabilityDeepDives[r]}`}
                      className="rounded-lg border border-border bg-background p-4 transition-colors hover:border-primary"
                    >
                      <p className="text-sm font-semibold text-foreground">{r}</p>
                      <p className="mt-1 text-xs text-primary">Open the deep dive</p>
                    </Link>
                  ))}
              </div>
            </div>
          )}



          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 md:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                Board takeaway
              </p>
              <p className="mt-2 text-base leading-relaxed text-foreground/90">{matrix.takeaway}</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Analyst context
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">{matrix.verdantix}</p>
            </div>
          </div>

          {matrix.landscape && (
            <div className="mt-4 rounded-xl border border-border bg-card p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Also in the landscape, but not direct rivals
              </p>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {matrix.landscape.map((l) => (
                  <div key={l.name} className="rounded-lg border border-border bg-background p-4">
                    <p className="text-sm font-semibold text-foreground">{l.name}</p>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                      {l.role}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.note}</p>
                  </div>
                ))}
              </div>
            </div>
          )}



          {matrix.signals && (
            <div className="mt-4 rounded-xl border border-secondary/25 bg-secondary/5 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                What the latest analyst evidence says
              </p>
              <ul className="mt-3 space-y-2">
                {matrix.signals.map((s) => (
                  <li key={s} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
        ) : (
          <section className="mt-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Roadmap gap matrix | Directional competitive read
            </p>
            <h2 className="mt-3 max-w-4xl text-2xl font-semibold md:text-3xl">
              RA+ roadmap vs every {roadmapFamily.toLowerCase()} rival
            </h2>
            <p className="mt-3 max-w-4xl text-base leading-relaxed text-muted-foreground">
              The comparison shows where each rival is heading, and which RA+ roadmap moves close or
              widen the gap. Rival horizons are directional readings of published signals, not vendor commitments.
            </p>
            <Link
              to="/shared-platform"
              className="mt-5 inline-flex items-center rounded-md border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-secondary transition-colors hover:border-primary hover:bg-primary/15"
            >
              Explore the shared platform advantage →
            </Link>

            <div className="mt-6 flex flex-wrap gap-3">
              {(["Market leading", "On parity", "Closing gap", "Behind"] as Position[]).map((position) => (
                <span
                  key={position}
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${positionStyle[position]}`}
                >
                  {position}
                </span>
              ))}
            </div>

            <div className="mt-8 overflow-x-auto rounded-xl border border-border">
              <table className="w-full min-w-[1180px] text-left text-sm">
                <thead className="bg-secondary text-secondary-foreground">
                  <tr>
                    <th className="w-[14%] px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em]">Rival</th>
                    <th className="w-[10%] px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em]">RA+ posture</th>
                    <th className="w-[19%] px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em]">Near term</th>
                    <th className="w-[19%] px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em]">Medium term</th>
                    <th className="w-[19%] px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em]">Longer term</th>
                    <th className="w-[19%] px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em]">RA+ roadmap answer</th>
                  </tr>
                </thead>
                <tbody>
                  {roadmapVendors.map((vendor, index) => (
                    <tr key={vendor.slug} className={index % 2 ? "bg-card" : "bg-background"}>
                      <td className="px-4 py-4 align-top">
                        <Link to={vendor.href} className="font-semibold text-foreground underline decoration-primary/35 underline-offset-4 hover:decoration-primary">
                          {vendor.name}
                        </Link>
                        <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">{vendor.scope}</span>
                      </td>
                      <td className="px-4 py-4 align-top">
                        <span className={`inline-block rounded-full px-2.5 py-1 text-xs font-semibold ${positionStyle[roadmapGapPositions[vendor.slug] ?? "Closing gap"]}`}>
                          {roadmapGapPositions[vendor.slug] ?? "Closing gap"}
                        </span>
                      </td>
                      {vendor.roadmap.slice(0, 3).map((phase) => (
                        <td key={phase.period} className="px-4 py-4 align-top">
                          <p className="font-semibold text-foreground/90">{phase.focus}</p>
                          <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-muted-foreground">
                            {phase.items.slice(0, 2).map((item) => (
                              <li key={item} className="flex gap-2">
                                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                      ))}
                      <td className="px-4 py-4 align-top">
                        <p className="font-semibold text-foreground/90">{vendor.gaps[0]?.area ?? "Platform advantage"}</p>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                          {vendor.gaps[0]?.raPlus ?? vendor.winTheme}
                        </p>
                        {vendor.gaps[1]?.raPlus && (
                          <p className="mt-2 border-t border-border pt-2 text-xs leading-relaxed text-muted-foreground">
                            {vendor.gaps[1].raPlus}
                          </p>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 md:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">Leadership takeaway</p>
                <p className="mt-2 text-base leading-relaxed text-foreground/90">
                  The roadmap should not copy specialist feature lists. It should protect RA+ differentiation:
                  governed data, operational workflows, financial decisions and disclosure on one platform.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Evidence boundary</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                  Rival directions summarize public product signals and licensed analyst research reviewed in September 2026. They are not confirmed release dates.
                </p>
              </div>
            </div>
          </section>
        )}

        <p className="mt-12 text-xs leading-relaxed text-muted-foreground">
          Positions are internal RA+ assessments for board discussion, not vendor certifications or
          Verdantix ratings. Analyst context is summarized from the licensed Verdantix Green Quadrant
          reports for enterprise carbon management (2026), supply chain sustainability (2026) and ESG
          and sustainability reporting (2025), plus the 2026 energy predictions, energy resilience
          business case, future of supply chain sustainability and resilient decarbonization reports.
          No pricing is implied.
        </p>
      </div>
    </main>
  );
};

export default CompetitorMatrix;
