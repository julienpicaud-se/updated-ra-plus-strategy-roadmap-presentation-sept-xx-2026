import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpenCheck,
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileCheck2,
  GitBranch,
  History,
  KeyRound,
  Lock,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const principles = [
  { icon: BookOpenCheck, title: "Shared data definitions", text: "One glossary of entities, metrics and calculation terms. Every product speaks the same language." },
  { icon: Lock, title: "Controls applied consistently", text: "Access, validation and approval rules live in the platform, not inside each product." },
  { icon: History, title: "Lineage and audit trail", text: "Every figure traces from source data to disclosed output, with evidence attached." },
  { icon: Workflow, title: "Governance before AI scale", text: "AI-assisted insight only runs on governed, traceable platform data." },
];

const definitions = [
  { name: "Entity and site model", owner: "Platform data architecture", status: "In progress", applies: "Hierarchy", note: "One entity, site, asset and supplier model inherited by every product." },
  { name: "Emission factor library", owner: "Carbon Performance", status: "In progress", applies: "Analytics engine", note: "Curated factor versions with effective dates and provenance." },
  { name: "Metric and KPI glossary", owner: "Platform analytics", status: "Planned", applies: "Analytics engine", note: "Reusable metric definitions so dashboards never contradict each other." },
  { name: "Unit and conversion rules", owner: "Platform data architecture", status: "Complete", applies: "Hierarchy", note: "Single conversion layer for energy, carbon and financial units." },
  { name: "Data source registry", owner: "Platform data architecture", status: "In progress", applies: "User workflow", note: "Catalogued sources with owner, frequency, quality grade and evidence." },
  { name: "Calculation method registry", owner: "Platform analytics", status: "Planned", applies: "Analytics engine", note: "Versioned calculation methods with effective dating and approvals." },
];

const controls = [
  { name: "Role-based access to data", tone: "text-primary", detail: "Permissions aligned to responsibility in the hierarchy, not per product." },
  { name: "Validation and quality rules", tone: "text-primary", detail: "Automated completeness, plausibility and freshness checks at ingestion." },
  { name: "Approval hierarchies", tone: "text-accent", detail: "Configured review and sign-off flows before figures are used or disclosed." },
  { name: "Evidence capture", tone: "text-accent", detail: "Documents and source attachments stored against each data point." },
  { name: "Change history and versioning", tone: "text-warn", detail: "Every edit, factor update and method change is logged and reversible." },
  { name: "Method transparency per data point", tone: "text-warn", detail: "Users can see exactly how each figure was produced and with which factors." },
];

const lifecycle = [
  { stage: "Define", text: "Shared definitions, owners and quality expectations agreed once." },
  { stage: "Collect", text: "Ingestion applies unit, validation and freshness rules at the door." },
  { stage: "Review", text: "Exceptions surface to accountable owners through shared workflows." },
  { stage: "Approve", text: "Evidence-backed sign-off makes figures decision and disclosure grade." },
  { stage: "Use", text: "Analytics, products and disclosure all consume the same governed data." },
];

const statusChip: Record<string, string> = {
  Planned: "border border-border bg-background text-foreground",
  "In progress": "bg-primary/10 text-primary",
  Complete: "bg-accent/15 text-accent",
};

const DataGovernance = () => (
  <main className="min-h-screen bg-background text-foreground">
    <header className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link to="/shared-platform" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            <ArrowLeft className="h-4 w-4" /> Shared platform dashboard
          </Link>
          <Link to="/" className="text-xs font-medium text-muted-foreground hover:text-primary">Back to the deck</Link>
        </div>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-accent">RA+ data governance</p>
        <h1 className="mt-3 max-w-5xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">Shared data definitions and controls, applied consistently across products.</h1>
        <p className="mt-4 max-w-4xl text-lg leading-relaxed text-muted-foreground">
          Governance lives in the platform: one glossary, one set of access and quality controls, one audit trail. Products inherit it instead of rebuilding it.
        </p>
      </div>
    </header>

    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {principles.map(({ icon: Icon, title, text }) => (
          <article key={title} className="rounded-xl border border-border bg-card p-6">
            <Icon className="h-6 w-6 text-accent" />
            <h2 className="mt-4 text-lg font-semibold">{title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 pb-12">
      <h2 className="text-2xl font-bold tracking-tight">Shared definitions register</h2>
      <p className="mt-2 max-w-3xl text-sm text-muted-foreground">The definitions every product consumes, each with a named owner and current status.</p>
      <div className="mt-6 overflow-hidden rounded-xl border border-border bg-card">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              <th className="px-5 py-3">Definition</th>
              <th className="px-5 py-3">Owner</th>
              <th className="px-5 py-3">Applies to</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3">Note</th>
            </tr>
          </thead>
          <tbody>
            {definitions.map((row, index) => (
              <tr key={row.name} className={index % 2 ? "bg-muted/40" : ""}>
                <td className="px-5 py-3 font-medium">{row.name}</td>
                <td className="px-5 py-3 text-muted-foreground">{row.owner}</td>
                <td className="px-5 py-3 text-muted-foreground">{row.applies}</td>
                <td className="px-5 py-3">
                  <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${statusChip[row.status]}`}>{row.status}</span>
                </td>
                <td className="px-5 py-3 text-muted-foreground">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 pb-12">
      <h2 className="text-2xl font-bold tracking-tight">Platform controls</h2>
      <p className="mt-2 max-w-3xl text-sm text-muted-foreground">Controls are enforced once in the platform and inherited by every product on top.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {controls.map((control) => (
          <article key={control.name} className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-start gap-3">
              <ShieldCheck className={`mt-0.5 h-5 w-5 shrink-0 ${control.tone}`} />
              <div>
                <h3 className="text-sm font-semibold">{control.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{control.detail}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 pb-12">
      <h2 className="text-2xl font-bold tracking-tight">The governed data lifecycle</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-5">
        {lifecycle.map((step, index) => (
          <article key={step.stage} className="relative rounded-xl border border-border bg-card p-5">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">{index + 1}</span>
            <h3 className="mt-3 text-sm font-semibold">{step.stage}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 pb-16">
      <div className="rounded-xl border border-accent/30 bg-accent/5 p-6 md:p-8">
        <div className="flex flex-wrap items-start gap-6">
          <Database className="h-8 w-8 shrink-0 text-accent" />
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold">Leadership takeaway</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Data governance is the compounding asset. Each definition and control shared across products removes duplicate build, speeds up audits and makes AI-assisted insight safe to scale. Rivals must rebuild this product by product.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-xs font-medium text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent" /> One glossary and metric library</span>
              <span className="inline-flex items-center gap-1.5"><KeyRound className="h-4 w-4 text-accent" /> Access and approvals in the platform</span>
              <span className="inline-flex items-center gap-1.5"><ClipboardCheck className="h-4 w-4 text-accent" /> Evidence-backed sign-off</span>
              <span className="inline-flex items-center gap-1.5"><FileCheck2 className="h-4 w-4 text-accent" /> Audit-ready lineage</span>
              <span className="inline-flex items-center gap-1.5"><Network className="h-4 w-4 text-accent" /> Inherited by every product</span>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-xs text-muted-foreground">Internal working view. Definitions, owners and statuses are directional and updated as the shared platform roadmap matures.</p>
    </section>
  </main>
);

export default DataGovernance;
