# Updated RA Plus Strategy & Roadmap presentation Sept XX, 2026

please replicate a site using the below files:

src/index.css
tailwind.config.ts
src/pages/Index.tsx
src/data/playbook-data.ts
src/components/playbook/HeroSection.tsx
src/components/playbook/Navigation.tsx
src/components/playbook/PresentationMode.tsx
src/components/playbook/ReadingProgressBar.tsx
src/components/playbook/ExecutiveTakeaway.tsx
src/components/playbook/ExecutiveSummary.tsx
src/components/playbook/StrategicPillars.tsx
src/components/playbook/StartStopMatrix.tsx
src/components/playbook/ValueProofSection.tsx
src/components/playbook/RoadmapTimeline.tsx
src/components/playbook/ObjectivesSection.tsx
src/components/playbook/AppendixSection.tsx
src/components/playbook/InitiativesDomain.tsx (in your current-code)
src/hooks/useScrollAnimation.ts
src/hooks/useKeyboardNavigation.ts
src/lib/utils.ts
src/App.tsx
src/main.tsx
src/utils/exportPowerPoint.ts (1319 lines - too long to show fully)
vite.config.ts
index.html
src/App.css
Entire src/components/ui/ folder (50+ shadcn components)
src/hooks/use-mobile.tsx
src/hooks/use-toast.ts

Here are the files:

1. src/index.css

@tailwind base;
@tailwind components;
@tailwind utilities;

/* Schneider Electric 2026 Product Roadmap Playbook Design System */

@layer base {
  :root {
    /* Schneider Electric Brand Colors - Dark Theme */
    --background: 0 0% 10%; /* #1A1A1A */
    --foreground: 0 0% 98%; /* White text */

    --card: 0 0% 14%; /* Slightly lighter than background */
    --card-foreground: 0 0% 98%;

    --popover: 0 0% 14%;
    --popover-foreground: 0 0% 98%;

    /* Primary: Schneider Electric Green #3DCD58 */
    --primary: 134 60% 52%;
    --primary-foreground: 0 0% 10%;

    /* Secondary: Dark Green #007F41 */
    --secondary: 150 100% 25%;
    --secondary-foreground: 0 0% 98%;

    --muted: 0 0% 18%;
    --muted-foreground: 0 0% 65%;

    --accent: 134 60% 52%;
    --accent-foreground: 0 0% 10%;

    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 98%;

    --border: 0 0% 20%;
    --input: 0 0% 20%;
    --ring: 134 60% 52%;

    --radius: 0.75rem;

    /* Custom tokens for the playbook */
    --gradient-primary: linear-gradient(135deg, hsl(134 60% 52%), hsl(150 100% 25%));
    --glow-primary: 0 0 40px hsl(134 60% 52% / 0.3);
  }

  .dark {
    --background: 0 0% 10%;
    --foreground: 0 0% 98%;
    --card: 0 0% 14%;
    --card-foreground: 0 0% 98%;
    --popover: 0 0% 14%;
    --popover-foreground: 0 0% 98%;
    --primary: 134 60% 52%;
    --primary-foreground: 0 0% 10%;
    --secondary: 150 100% 25%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 18%;
    --muted-foreground: 0 0% 65%;
    --accent: 134 60% 52%;
    --accent-foreground: 0 0% 10%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 20%;
    --input: 0 0% 20%;
    --ring: 134 60% 52%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground antialiased;
  }

  html {
    scroll-behavior: smooth;
  }
}

@layer utilities {
  .gradient-text {
    @apply bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent;
  }

  .glass-card {
    @apply bg-card/80 backdrop-blur-md border border-border/50;
  }

  .glow-border {
    box-shadow: 0 0 20px hsl(134 60% 52% / 0.2);
  }

  .section-fade {
    @apply opacity-0 translate-y-8 transition-all duration-700 ease-out;
  }

  .section-fade.visible {
    @apply opacity-100 translate-y-0;
  }
}
2. tailwind.config.ts

import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards",
        "slide-in-left": "slide-in-left 0.5s ease-out forwards",
        "slide-in-right": "slide-in-right 0.5s ease-out forwards",
        float: "float 3s ease-in-out infinite",
        pulse: "pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
3. src/pages/Index.tsx

import { Navigation } from "@/components/playbook/Navigation";
import { HeroSection } from "@/components/playbook/HeroSection";
import { ExecutiveSummary } from "@/components/playbook/ExecutiveSummary";
import { StrategicPillars } from "@/components/playbook/StrategicPillars";
import { ObjectivesSection } from "@/components/playbook/ObjectivesSection";
import { RoadmapTimeline } from "@/components/playbook/RoadmapTimeline";
import { InitiativesDomain } from "@/components/playbook/InitiativesDomain";
import { ValueProofSection } from "@/components/playbook/ValueProofSection";
import { StartStopMatrix } from "@/components/playbook/StartStopMatrix";
import { AppendixSection } from "@/components/playbook/AppendixSection";
import { ExecutiveTakeaway } from "@/components/playbook/ExecutiveTakeaway";
import { ReadingProgressBar } from "@/components/playbook/ReadingProgressBar";
import { useKeyboardNavigation } from "@/hooks/useKeyboardNavigation";

const Index = () => {
  // Enable keyboard navigation
  useKeyboardNavigation();

  return (
    <div className="min-h-screen bg-background">
      <ReadingProgressBar />
      <Navigation />
      <HeroSection />
      <ExecutiveSummary />
      <StrategicPillars />
      <ObjectivesSection />
      <RoadmapTimeline />
      <InitiativesDomain />
      <ValueProofSection />
      <StartStopMatrix />
      <AppendixSection />
      <ExecutiveTakeaway />
    </div>
  );
};

export default Index;
4. src/data/playbook-data.ts

// 2026 Product Roadmap Playbook Data

export const strategicPillars = [
  {
    id: "unified",
    title: "Unified",
    tagline: "One platform, no silos",
    promise: "One platform and one governed data foundation across carbon, ESG, supply chain, and risk, reducing duplication and deployment cost.",
    description: "Customers experience a single platform across carbon, ESG, energy, supply chain, and climate risk instead of disconnected tools. Data models, hierarchies, and permissions are defined once and reused in every product area, so work in one place strengthens the whole ecosystem.",
    whatLivesHere: [
      "Enterprise organization model, groups, and delegated admin",
      "Shared sustainability graph and semantic models that connect inventories, strategy, analytics, disclosures, and risk",
      "Cross-product navigation and integrations with RA classic, Zeigo, ERPs, and other systems",
      "Ingest and transform services that standardize core data into governed models",
    ],
    successMetrics: [
      "% customers using multiple products on a single org and data model",
      "Reduction in duplicate data feeds, re-created hierarchies, and shadow spreadsheets",
      "Reduction in onboarding and integration effort through standardized integration packs and AI-assisted mapping",
    ],
    icon: "Layers",
    color: "from-primary to-secondary",
  },
  {
    id: "proactive",
    title: "Proactive",
    tagline: "Trusted insights that drive decisions",
    promise: "Faster, better decisions through decision-ready, defensible insights that connect sustainability data to financial and operational outcomes.",
    description: "Users get clear answers they can act on and defend to auditors, finance, and executives, not just visualizations. Every metric or recommendation is backed by governed data, transparent calculations, and full lineage.",
    whatLivesHere: [
      "Inventory and strategy capabilities: hotspots, targets, scenarios, initiative impact, and financial views",
      "Analytics: data explorer, dashboards, benchmarking, anomaly detection, and explanations that show why trends and outliers matter",
      "Disclosure alignment so narrative and quantitative reporting stay tied to the same underlying inventory, strategy, and risk data",
    ],
    successMetrics: [
      "Time from updated data to key decisions such as initiative approval or budget shifts, including the share accelerated or supported by AI recommendations",
      "Adoption of analytics and strategy features, including AI-assisted exploration and insights",
      "Share of customers with targets, scenarios, and initiatives that cover most of their emissions footprint",
      "Measured OpEx savings captured and tracked through initiatives and reported back to finance",
    ],
    icon: "LineChart",
    color: "from-secondary to-primary",
  },
  {
    id: "adaptive",
    title: "Adaptive",
    tagline: "Built for change with AI at the core",
    promise: "An AI-native and configurable platform that absorbs regulatory, organizational, and methodological change while continuously reducing manual effort.",
    description: "The platform can absorb new regulations, frameworks, scopes, risk methodologies, and org structures through configuration. AI is part of the core design so manual work is automated, guidance improves over time, and agentic workflows can take action with human control.",
    whatLivesHere: [
      "Configurable reference data and emission factor services that support new datasets and methodologies",
      "Flexible entity and hierarchy modeling that can represent acquisitions and alternative views",
      "AI and agentic capabilities such as SERA and product agents for onboarding, EF mapping, gap-filling, anomaly investigation, recommendations, and disclosure drafting",
      "AI quality system: evaluation harness, feedback loops, and traceability of AI outputs",
    ],
    successMetrics: [
      "Lead time to support new regulatory or framework requirements",
      "% of new use cases delivered via configuration patterns",
      "Share of key workflows completed with AI assistance and the time saved",
      "Adoption and acceptance rate of AI recommendations",
      "Reduction in time and cost to adopt new requirements and onboard new entities",
    ],
    icon: "Sparkles",
    color: "from-primary via-secondary to-primary",
  },
];

export const objectives = [
  {
    id: "O1",
    title: "Deliver decision-ready sustainability management for ECP customers",
    linkedPillar: "proactive",
    customerOutcome: "Customers can complete inventory, prioritize cost and carbon hotspots, create targets and scenarios, and run governance with defensible numbers.",
    businessValue: "Faster audit-ready baseline and decisions; lower reporting cost and faster savings identification.",
    keyResults: [
      { id: "KR1", title: "Median time to first audit-ready Scope 1-3 inventory", metric: "TBD", roiMetric: "Hours saved to baseline; consulting spend avoided" },
      { id: "KR2", title: "% customers approving at least one plan (target and scenario)", metric: "TBD", roiMetric: "OpEx saved identified and tracked; initiatives with NPV" },
      { id: "KR3", title: "% customers with recurring dashboard usage (active dashboards)", metric: "TBD", roiMetric: "Decisions accelerated; governance forums using dashboards" },
      { id: "KR4", title: "% audit questions answered with in-platform evidence and lineage", metric: "TBD", roiMetric: "Time saved or cost saved" },
      { id: "KR5", title: "% inventories meeting data quality threshold (completeness, variance, dedup)", metric: "TBD", roiMetric: "Time saved or cost saved" },
    ],
  },
  {
    id: "O2",
    title: "Make enterprise rollout repeatable across regions and business units",
    linkedPillar: "unified",
    customerOutcome: "Customers can deploy standard setups consistently using governed patterns, reducing onboarding effort and variability.",
    businessValue: "Lower onboarding cost and faster enterprise rollouts; fewer custom integrations and less operational overhead.",
    keyResults: [
      { id: "KR6", title: "Time to roll out a new BU/region to operational (data + views + governance)", metric: "TBD", roiMetric: "Time saved or cost saved" },
      { id: "KR7", title: "% reduction in manual data uploads and spreadsheet handoffs", metric: "TBD", roiMetric: "Time saved or cost saved" },
      { id: "KR8", title: "% reduction in duplicate data feeds across workflows", metric: "TBD", roiMetric: "Time saved or cost saved" },
    ],
  },
  {
    id: "O3",
    title: "Make AI a default accelerator in key journeys",
    linkedPillar: "adaptive",
    customerOutcome: "AI reduces manual work and improves decision speed across inventory, planning, analytics, and reporting support, with clear human control and traceability.",
    businessValue: "Lower manual effort across journeys; higher data quality; faster time-to-value with agentic workflows.",
    keyResults: [
      { id: "KR9", title: "% key workflows completed with AI assistance", metric: "TBD", roiMetric: "% workflows with AI assist; median time saved" },
      { id: "KR10", title: "Hours saved per reporting cycle per customer", metric: "TBD", roiMetric: "Time saved or cost saved" },
      { id: "KR11", title: "AI recommendation acceptance rate (suggestions applied by users)", metric: "TBD", roiMetric: "% workflows with AI assist; median time saved" },
    ],
  },
];

export const roadmapBets = {
  now: [
    { title: "One platform setup reused across workflows", pillar: "unified", outcome: "% customers running cross-product workflows without duplicating setup", objective: "O2", kr: "KR6" },
    { title: "Decision-grade dataset from ingest + transform", pillar: "unified", outcome: "Time to first decision-grade dataset", objective: "O1", kr: "KR1" },
    { title: "Audit-ready Scope 1-3 inventory in weeks", pillar: "proactive", outcome: "Time to first audit-ready Scope 1-3 inventory", objective: "O1", kr: "KR1" },
    { title: "Targets, baseline, and pathway comparison adopted", pillar: "proactive", outcome: "% customers approving at least one plan", objective: "O1", kr: "KR2" },
    { title: "Recurring governance usage via analytics views", pillar: "proactive", outcome: "% customers with recurring dashboards", objective: "O1", kr: "KR3" },
    { title: "Guided help reduces friction and speeds task completion", pillar: "adaptive", outcome: "% key workflows completed with AI assistance", objective: "O3", kr: "KR9" },
  ],
  next: [
    { title: "Defensible outputs with end-to-end lineage", pillar: "proactive", outcome: "% audit questions answered with evidence and lineage", objective: "O1", kr: "KR4" },
    { title: "Less rework per cycle with remembered mapping decisions", pillar: "adaptive", outcome: "Hours saved per reporting cycle per customer", objective: "O3", kr: "KR10" },
    { title: "Reduced manual uploads with priority connectors", pillar: "unified", outcome: "% reduction in manual data uploads", objective: "O2", kr: "KR7" },
    { title: "Reliable Scope 3 completion via gap-filling", pillar: "adaptive", outcome: "% customers reaching reportable Scope 3 completion", objective: "O1", kr: "KR1" },
    { title: "Budget-grade planning with approvals and financial views", pillar: "proactive", outcome: "Time from updated data to approved initiatives", objective: "O1", kr: "KR2" },
    { title: "AI-guided onboarding accelerates time to first value", pillar: "adaptive", outcome: "Time to first inventory completion with AI guidance", objective: "O3", kr: "KR9" },
  ],
  later: [
    { title: "Repeatable enterprise rollouts using integration packs and configuration recipes", pillar: "unified", outcome: "Time to roll out a new BU/region", objective: "O2", kr: "KR6" },
    { title: "Fast support for new datasets and methods without disruption", pillar: "adaptive", outcome: "Lead time to support a new requirement", objective: "O2", kr: "KR6" },
    { title: "Prescriptive planning recommendations adopted", pillar: "adaptive", outcome: "% customers adopting recommended actions", objective: "O3", kr: "KR11" },
    { title: "Always-on anomaly detection and explanations", pillar: "proactive", outcome: "Time to detect and explain material variance", objective: "O1", kr: "KR3" },
    { title: "Auditor-ready report packs produced faster", pillar: "proactive", outcome: "Time to produce an auditor-ready report pack", objective: "O1", kr: "KR1" },
    { title: "Baseline climate risk insights integrated into governance views", pillar: "proactive", outcome: "% customers reviewing climate risk insights quarterly", objective: "O1", kr: "KR3" },
  ],
};

export const domainInitiatives = [
  {
    domain: "Platform",
    initiatives: [
      "Trusted data foundation with governed store",
      "Dynamic org and entity model v1",
      "Ingest and transform core data pipelines",
      "EF library v1 and automated EF matching",
      "Agentic platform foundation",
      "End-to-end lineage v1",
      "Connector expansion for highest leverage sources",
      "Workflow and approvals enablement",
    ],
  },
  {
    domain: "Emissions Measurement",
    initiatives: [
      "Ingest and transform UX v1 (templates, validation, transformation preview)",
      "Scope 1-3 calculation engine (MLP coverage)",
      "Data quality toolkit v1",
      "EF matching UX and governance touchpoints",
      "Scope 3 gap-filling (prioritized slices)",
      "Mapping precedence UX and workflows",
      "Coverage expansion for prioritized datasets and methods",
    ],
  },
  {
    domain: "Strategy",
    initiatives: [
      "Targets, BAU baseline, and scenarios v1",
      "Initiative library and financial analysis (capex, opex, NPV)",
      "Approvals expansion for targets, scenarios, and initiatives",
      "Prescriptive planning with AI recommendations",
    ],
  },
  {
    domain: "Analytics",
    initiatives: [
      "Data explorer and dashboards v1 (share, export)",
      "Templates and reuse (standard governance views)",
      "Why this number (evidence and lineage)",
      "Proactive anomalies and root-cause explanations with SERA",
    ],
  },
  {
    domain: "Disclosures",
    initiatives: [
      "Disclosure workflow and reviewer collaboration",
      "Audit evidence and traceability",
      "Framework alignment and updates",
      "AI-assisted disclosure drafting",
    ],
  },
  {
    domain: "Supply Chain",
    initiatives: [
      "Reduce friction in supplier migrations",
      "AI auto-filler for suppliers (60% fields auto-filled)",
      "Zeigo + RA+ campaign integration",
      "ZCP integrations (50% data via integrations)",
      "AI pre-invitation analytics and prioritization",
      "RA+ emissions measurement (reduce duplicate uploads)",
      "AI-powered take-action page",
      "SERA integration across supplier journeys",
    ],
  },
  {
    domain: "SERA & Agentic AI",
    initiatives: [
      "SERA integration across workflows",
      "AI-guided onboarding",
      "Anomaly explanations and guided investigation",
      "AI acceleration support with acceptance tracking",
    ],
  },
  {
    domain: "Climate Risk",
    initiatives: [
      "Trusted data and auditability ingestion",
      "Self-serve risk insights dashboards",
      "Climate risk integration into governance forums",
    ],
  },
];

export const roiLevers = [
  {
    lever: "Productivity & Assurance",
    description: "Fewer hours and less consulting spend to produce audit-ready baselines and disclosures",
    metrics: ["Hours saved per cycle", "Consulting spend avoided", "Assurance findings down"],
    icon: "Clock",
  },
  {
    lever: "Operational Cost Reduction",
    description: "Identify hotspots and prioritize initiatives that reduce energy, travel, materials, and supplier costs",
    metrics: ["OpEx saved", "Payback and NPV", "Footprint covered by initiatives"],
    icon: "TrendingDown",
  },
  {
    lever: "Capital Allocation",
    description: "Compare scenarios and initiatives by cost and carbon to invest in the highest ROI actions",
    metrics: ["Initiatives approved with NPV", "Budget reallocated", "Time to approval"],
    icon: "BarChart3",
  },
  {
    lever: "Risk & Resilience",
    description: "Avoid penalties and reduce disruption by staying ahead of regulations and climate risks",
    metrics: ["Time to comply with new requirements", "Risk exposure reduced", "Audit exceptions down"],
    icon: "Shield",
  },
];

export const aiScorecard = [
  { metric: "Assist Rate", target: "≥ 60%", description: "AI actually used in key workflows" },
  { metric: "Acceptance Rate", target: "≥ 70%", description: "Trust in AI outputs - users apply suggestions" },
  { metric: "Hallucination Rate", target: "< 1%", description: "Risk control - incorrect AI outputs" },
  { metric: "Time Saved", target: "≥ 25%", description: "Productivity gain vs. manual workflows" },
];

export const startStopMatrix = {
  delivery: {
    theme: "Platform Delivery",
    stop: "Bespoke, customer-specific workflows that do not scale",
    start: "Platform-first delivery using reusable configuration patterns",
  },
  data: {
    theme: "Data Foundation",
    stop: "Fragmented data models, spreadsheets, and manual reconciliation",
    start: "One governed sustainability data model with lineage and reuse",
  },
  product: {
    theme: "Product Strategy",
    stop: "Feature-first roadmap decisions",
    start: "Value-driven bets tied to cost levers and proof metrics",
  },
  ai: {
    theme: "AI Execution",
    stop: "AI shipped without adoption or trust",
    start: "AI orchestration with explicit trust, usage, and time-saved metrics",
  },
  cost: {
    theme: "Cost Impact",
    stop: "Sustainability treated as a reporting overhead",
    start: "Sustainability positioned as an operational cost-reduction lever",
  },
  gtm: {
    theme: "Go-to-Market",
    stop: "Selling isolated products or custom demos",
    start: "Selling a unified platform anchored on value drivers and journeys",
  },
  governance: {
    theme: "Governance",
    stop: "Reactive audits and post-hoc fixes",
    start: "Audit-ready governance built in and run continuously",
  },
  prioritization: {
    theme: "Prioritization",
    stop: "Static priorities and ad-hoc trade-offs",
    start: "RICE-based prioritization, re-scored quarterly against outcomes",
  },
};

export const northStarMetrics = [
  { metric: "Time to Baseline", target: "Weeks", description: "Time from first data to audit-ready Scope 1-3 inventory" },
  { metric: "Time to Plan", target: "Days", description: "Time to approved plan with clear cost and impact" },
  { metric: "Time to Governance View", target: "Hours", description: "Dashboard used in a recurring governance forum" },
];

export const valuePillars = [
  { 
    title: "Transformation", 
    icon: "Rocket", 
    description: "Automate ingestion, mapping, validation, and disclosure drafting so teams focus on action, not reporting" 
  },
  { 
    title: "Savings", 
    icon: "PiggyBank", 
    description: "Turn sustainability data into quantified cost levers across energy, travel, procurement, and materials" 
  },
  { 
    title: "Risk Reduction", 
    icon: "Shield", 
    description: "Built-in evidence, lineage, and governed calculations that stand up to audit and finance review" 
  },
  { 
    title: "Speed", 
    icon: "Zap", 
    description: "Faster baselines, quicker scenario comparison, and AI-supported approvals and budget shifts" 
  },
];

export const strategicContext = {
  summary: "Enterprises are operating in a constrained economic environment where sustainability investments must deliver clear financial returns alongside environmental impact. This roadmap positions our AI-native sustainability management platform as a repeatable engine for cost reduction, productivity gains, and risk control, not a compliance-only system.",
  northStar: "Turn sustainability data into action. Audit-ready baselines, defensible decisions, and measurable savings in weeks, powered by AI on one unified platform. Make sustainability a source of faster decisions, lower cost, and measurable savings.",
};

export const supportingScorecard = [
  { metric: "Platform Unification", definition: "% customers running cross-product workflows without duplicating setup or data feeds" },
  { metric: "Inventory Speed", definition: "Median time to first audit-ready Scope 1-3 inventory" },
  { metric: "Decision Adoption", definition: "% customers approving at least one plan (target and scenario)" },
  { metric: "Dashboard Usage", definition: "% customers with recurring dashboard usage (active dashboards)" },
  { metric: "Adaptivity", definition: "Time to support a new requirement (dataset, method, or regulatory datapoint)" },
  { metric: "Effort Reduction", definition: "Support tickets per customer per month (down)" },
];

export const roiScorecard = [
  { metric: "Time Saved", definition: "Manual effort reduction", target: "8,000-10,000 hours" },
  { metric: "Cost Avoided", definition: "Audit & compliance rework", target: "$400k-$500k" },
  { metric: "Savings Identified", definition: "Energy, travel, procurement", target: "$1.2M-$1.5M" },
  { metric: "Savings Realized", definition: "Validated customer value", target: "$1.5M" },
];

export const executiveTakeaway = {
  summary: "The 12-month roadmap is designed to ensure sustainability management delivers measurable operational and financial value, especially in a constrained economic environment.",
  conclusion: "By unifying the platform, elevating insights into decisions, and embedding AI at the core of execution, the roadmap positions sustainability as a repeatable source of efficiency, savings, and risk reduction, not a compliance obligation.",
};

export const appendixPillars = [
  {
    pillar: "Unified",
    focus: [
      "Consolidate shared components, data models, and workflows across all RA+ products",
      "Reduce duplication across supplier, emissions, and reporting journeys",
      "Improve reliability, performance, and regional access to support enterprise-scale deployment",
    ],
    outcomes: [
      "Faster and more consistent rollout across regions and business units",
      "Reduced reporting effort and operational friction",
      "Lower risk from fragmented tools and inconsistent data",
    ],
    themes: [
      "Platform migrations and shared components",
      "Aligned emissions management workflows across RA+ Emissions Measurement and Supply Chain",
      "Performance, scalability, and access improvements",
      "Progressive rebranding and navigation consistency",
    ],
    valueProof: [
      "Reduction in support tickets and rework",
      "Shorter time to complete core workflows",
      "Fewer duplicate uploads and manual reconciliations",
    ],
  },
  {
    pillar: "Proactive",
    focus: [
      "Enable customers to move from measurement to defensible decisions and actions",
      "Prioritize insights that directly support cost reduction, procurement decisions, and governance",
      "Strengthen the link between sustainability metrics and financial outcomes",
    ],
    outcomes: [
      "Faster identification of savings opportunities",
      "Clear prioritization of high-impact suppliers, products, and initiatives",
      "Increased confidence with finance, auditors, and executive stakeholders",
    ],
    themes: [
      "AI-driven supplier prioritization",
      "Spend-based allocation and classification",
      "Integrated emissions measurement across supply chain and inventory",
      "PCF data exchange and light PCF estimation",
      "Scenario planning and take-action recommendations tied to cost and carbon",
    ],
    valueProof: [
      "Savings identified and tracked",
      "Reduced time to answer governance and procurement questions",
      "Decisions supported (targets approved, initiatives launched)",
    ],
  },
  {
    pillar: "Adaptive",
    focus: [
      "Embed AI directly into core workflows rather than positioning it as a separate layer",
      "Use AI to automate repetitive work, guide users, and adapt to changing regulations",
      "Instrument AI usage to ensure trust, reliability, and measurable impact",
    ],
    outcomes: [
      "Material reduction in manual reporting and follow-ups",
      "Faster completion of supplier and reporting campaigns",
      "Increased confidence in AI-assisted outputs and recommendations",
    ],
    themes: [
      "AI auto-filling for supplier data with confidence scoring",
      "AI-driven reminders, nudges, and personalized outreach",
      "SERA integration across supplier and reporting journeys",
      "AI-assisted support and enablement",
    ],
    valueProof: [
      "Assist rate and acceptance rate in key workflows",
      "Time saved per journey",
      "Reduction in manual chasing and support effort",
    ],
  },
];
These 4 files are the most critical. You'll also need all files from src/components/playbook/, src/hooks/, and src/components/ui/. Would you like me to show those too?






12 janv.
at 13:52
Show me the contents of all playbook components (HeroSection, Navigation, etc.) so I can copy them. And is there anything else i am missing to replicate it?



Show all
18 tools used
I'll get the rest of the PresentationMode and exportPowerPoint files, then give you the complete checklist:

Show all
2 tools used
Due to length, here's a complete checklist of everything you need, with the files I've already shown:

✅ COMPLETE FILE CHECKLIST
Already Shown Above (copy from my previous messages):
src/index.css
tailwind.config.ts
src/pages/Index.tsx
src/data/playbook-data.ts
src/components/playbook/HeroSection.tsx
src/components/playbook/Navigation.tsx
src/components/playbook/PresentationMode.tsx
src/components/playbook/ReadingProgressBar.tsx
src/components/playbook/ExecutiveTakeaway.tsx
src/components/playbook/ExecutiveSummary.tsx
src/components/playbook/StrategicPillars.tsx
src/components/playbook/StartStopMatrix.tsx
src/components/playbook/ValueProofSection.tsx
src/components/playbook/RoadmapTimeline.tsx
src/components/playbook/ObjectivesSection.tsx
src/components/playbook/AppendixSection.tsx
src/components/playbook/InitiativesDomain.tsx (in your current-code)
src/hooks/useScrollAnimation.ts
src/hooks/useKeyboardNavigation.ts
src/lib/utils.ts
src/App.tsx
src/main.tsx
Still Needed (copy from Code Editor):
src/utils/exportPowerPoint.ts (1319 lines - too long to show fully)
vite.config.ts
index.html
src/App.css
Entire src/components/ui/ folder (50+ shadcn components)
src/hooks/use-mobile.tsx
src/hooks/use-toast.ts
src/pages/NotFound.tsx
🚀 Fastest Method: GitHub
Instead of manually copying 70+ files, connect to GitHub via Project Settings → GitHub and you'll get a complete repository you can clone or import into the new account.






12 janv.
at 13:54
can you make all files downloadable here?



Thought for 8s
I can't create downloadable files directly in chat. Here are your options:

Best Option: GitHub Export Go to Project Settings → GitHub → Connect, then download the entire repository as a ZIP from GitHub.

Alternative: Code Editor Switch to Code Editor view (toggle in top-right) → you can browse and copy all files from there.

Or: I can show files here I can display any remaining file contents in code blocks for you to copy-paste. Just tell me which ones you need.

The exportPowerPoint.ts file is 1,319 lines - would you like me to show it in chunks so you can copy it?






12 janv.
at 13:59
show files here I can display any remaining file contents in code blocks for you to copy-paste. Just tell me which ones you need.



Show all
7 tools used
Here are the remaining config files. I'll also need to show the full exportPowerPoint.ts which is quite long:

vite.config.ts

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
index.html

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lovable App</title>
    <meta name="description" content="Lovable Generated Project" />
    <meta name="author" content="Lovable" />
    <meta property="og:title" content="Lovable App" />
    <meta property="og:description" content="Lovable Generated Project" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@Lovable" />
    <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
src/App.css

/* App styles - reset for full-width layout */
#root {
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 0;
}
src/hooks/use-mobile.tsx

import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
src/pages/NotFound.tsx

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
src/hooks/use-toast.ts

import * as React from "react";

import type { ToastActionElement, ToastProps } from "@/components/ui/toast";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

type ActionType = typeof actionTypes;

type Action =
  | {
      type: ActionType["ADD_TOAST"];
      toast: ToasterToast;
    }
  | {
      type: ActionType["UPDATE_TOAST"];
      toast: Partial<ToasterToast>;
    }
  | {
      type: ActionType["DISMISS_TOAST"];
      toastId?: ToasterToast["id"];
    }
  | {
      type: ActionType["REMOVE_TOAST"];
      toastId?: ToasterToast["id"];
    };

interface State {
  toasts: ToasterToast[];
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => (t.id === action.toast.id ? { ...t, ...action.toast } : t)),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action;

      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t,
        ),
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
};

const listeners: Array<(state: State) => void> = [];

let memoryState: State = { toasts: [] };

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

type Toast = Omit<ToasterToast, "id">;

function toast({ ...props }: Toast) {
  const id = genId();

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id: id,
    dismiss,
    update,
  };
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  };
}

export { useToast, toast };



vite.config.ts

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
index.html

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lovable App</title>
    <meta name="description" content="Lovable Generated Project" />
    <meta name="author" content="Lovable" />
    <meta property="og:title" content="Lovable App" />
    <meta property="og:description" content="Lovable Generated Project" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@Lovable" />
    <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
src/App.css

/* App styles - reset for full-width layout */
#root {
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 0;
}
src/hooks/use-mobile.tsx

import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
src/pages/NotFound.tsx

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
src/hooks/use-toast.ts

import * as React from "react";

import type { ToastActionElement, ToastProps } from "@/components/ui/toast";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

type ActionType = typeof actionTypes;

type Action =
  | {
      type: ActionType["ADD_TOAST"];
      toast: ToasterToast;
    }
  | {
      type: ActionType["UPDATE_TOAST"];
      toast: Partial<ToasterToast>;
    }
  | {
      type: ActionType["DISMISS_TOAST"];
      toastId?: ToasterToast["id"];
    }
  | {
      type: ActionType["REMOVE_TOAST"];
      toastId?: ToasterToast["id"];
    };

interface State {
  toasts: ToasterToast[];
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => (t.id === action.toast.id ? { ...t, ...action.toast } : t)),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action;

      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t,
        ),
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
};

const listeners: Array<(state: State) => void> = [];

let memoryState: State = { toasts: [] };

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

type Toast = Omit<ToasterToast, "id">;

function toast({ ...props }: Toast) {
  const id = genId();

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id: id,
    dismiss,
    update,
  };
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  };
}

export { useToast, toast };



Here are the UI components:

alert-dialog.tsx


import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3e22f823-9e80-433c-8b7b-2cd53ceff4f8).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
