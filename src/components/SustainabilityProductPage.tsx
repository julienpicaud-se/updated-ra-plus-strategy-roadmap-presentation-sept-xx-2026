import { Link } from "react-router-dom";

export type RoadmapPhase = {
  period: string;
  label: string;
  tone?: "primary" | "accent" | "secondary" | "muted";
  items: string[];
};

export type UseCase = {
  persona: string;
  title: string;
  body: string;
  outcome: string;
};

export type ProofPoint = {
  kind: string;
  claim: string;
  source: string;
};

export type Rival = {
  name: string;
  note: string;
  slug?: string;
};

export interface SustainabilityProductPageProps {
  backTo?: { to: string; label: string };
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  roadmap: RoadmapPhase[];
  useCases: UseCase[];
  proof: ProofPoint[];
  rivals?: Rival[];
  takeaway: string;
  links?: { to: string; label: string }[];
}

const toneBar: Record<string, string> = {
  primary: "bg-primary",
  accent: "bg-accent",
  secondary: "bg-secondary",
  muted: "bg-muted",
};

const proofClass: Record<string, string> = {
  Roadmap: "bg-primary/15 text-secondary",
  Analyst: "bg-accent/10 text-accent",
  Customer: "bg-muted/10 text-foreground",
  Finance: "bg-[hsl(var(--se-quartz-orange)/0.18)] text-foreground",
};

const SustainabilityProductPage = ({
  backTo,
  eyebrow,
  title,
  subtitle,
  description,
  badge,
  roadmap,
  useCases,
  proof,
  rivals,
  takeaway,
  links,
}: SustainabilityProductPageProps) => (
  <main className="min-h-screen bg-background">
    <header className="border-b border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {backTo && (
          <Link to={backTo.to} className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {backTo.label}
          </Link>
        )}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            {eyebrow}
          </span>
          {badge && (
            <span className="rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-secondary">
              {badge}
            </span>
          )}
        </div>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground">{title}</h1>
        <p className="mt-3 text-lg font-medium text-accent">{subtitle}</p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">{description}</p>
        {links && links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-secondary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>

    <section className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="text-2xl font-bold text-foreground">Roadmap</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Quarters are used only where the roadmap has confirmed them. Later commitments stay as half year bands.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {roadmap.map((phase) => (
          <div key={phase.period} className="rounded-xl border border-border bg-card p-5">
            <div className={`h-1 w-12 rounded-full ${toneBar[phase.tone || "primary"]}`} />
            <p className="mt-4 text-sm font-bold text-foreground">{phase.period}</p>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">{phase.label}</p>
            <ul className="mt-4 space-y-2">
              {phase.items.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-bold text-foreground">Use cases</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {useCases.map((uc) => (
            <div key={uc.title} className="flex flex-col rounded-xl border border-border bg-background p-5">
              <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-secondary">
                {uc.persona}
              </span>
              <h3 className="mt-4 text-base font-semibold text-foreground">{uc.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{uc.body}</p>
              <p className="mt-4 border-t border-border pt-3 text-sm font-medium text-accent">{uc.outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="text-2xl font-bold text-foreground">Proof points</h2>
      <div className="mt-6 overflow-hidden rounded-xl border border-border">
        <table className="w-full text-left text-sm">
          <thead className="bg-card">
            <tr>
              <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">Evidence</th>
              <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">Claim</th>
              <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">Source</th>
            </tr>
          </thead>
          <tbody>
            {proof.map((p, i) => (
              <tr key={p.claim} className={i % 2 ? "bg-card" : "bg-background"}>
                <td className="px-5 py-4 align-top">
                  <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${proofClass[p.kind] || proofClass.Customer}`}>
                    {p.kind}
                  </span>
                </td>
                <td className="px-5 py-4 align-top leading-relaxed text-foreground">{p.claim}</td>
                <td className="px-5 py-4 align-top leading-relaxed text-muted-foreground">{p.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    {rivals && rivals.length > 0 && (
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl font-bold text-foreground">The specialist field</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Public vendor product information reviewed September 2026. Positions are internal RA+ assessments, not third party ratings.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {rivals.map((r) => {
              const card = (
                <>
                  <div className="h-1 w-12 rounded-full bg-accent" />
                  <p className="mt-4 text-sm font-bold text-foreground">{r.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.note}</p>
                  {r.slug && <p className="mt-3 text-xs font-semibold text-primary">Open the deep dive</p>}
                </>
              );
              return r.slug ? (
                <Link
                  key={r.name}
                  to={`/sustainability-vendors/${r.slug}`}
                  className="rounded-xl border border-border bg-background p-5 transition-colors hover:border-primary"
                >
                  {card}
                </Link>
              ) : (
                <div key={r.name} className="rounded-xl border border-border bg-background p-5">
                  {card}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    )}

    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">Board takeaway</p>
        <p className="mt-2 text-base leading-relaxed text-foreground">{takeaway}</p>
      </div>
      <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
        Positions are internal RA+ assessments, not third party ratings. Analyst points come from licensed Verdantix research reviewed in September 2026. Bracketed items are placeholders awaiting account team or Finance confirmation.
      </p>
    </section>
  </main>
);

export default SustainabilityProductPage;
