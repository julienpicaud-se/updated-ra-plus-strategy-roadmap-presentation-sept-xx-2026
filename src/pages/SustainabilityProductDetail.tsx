import { Link, useParams } from "react-router-dom";
import {
  sustainabilityProductPages,
  findSustainabilityProduct,
  type ProofKind,
} from "@/data/sustainability-product-pages";
import { positionClass } from "./SustainabilityProducts";

const proofClass: Record<ProofKind, string> = {
  Roadmap: "bg-primary/15 text-secondary",
  Analyst: "bg-accent/10 text-accent",
  Customer: "bg-muted/10 text-foreground",
  Finance: "bg-[hsl(var(--se-quartz-orange)/0.18)] text-foreground",
};

const phaseBar = ["bg-primary", "bg-accent", "bg-secondary", "bg-muted"];

const SustainabilityProductDetail = () => {
  const { slug } = useParams();
  const product = findSustainabilityProduct(slug);

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-foreground">Product not found</h1>
          <Link to="/sustainability-products" className="mt-4 inline-block text-accent underline">
            Back to the Sustainability family
          </Link>
        </div>
      </main>
    );
  }

  const index = sustainabilityProductPages.findIndex((p) => p.slug === product.slug);
  const prev = sustainabilityProductPages[index - 1];
  const next = sustainabilityProductPages[index + 1];

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <Link
            to="/sustainability-products"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-accent"
          >
            ← RA+ Sustainability family
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              {product.family}
            </span>
            <span
              className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${positionClass[product.position]}`}
            >
              {product.position}
            </span>
          </div>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground">{product.name}</h1>
          <p className="mt-3 text-lg font-medium text-accent">{product.tagline}</p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            {product.summary}
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-primary/30 bg-primary/10 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">
                Role on the platform spine
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground">{product.spineRole}</p>
            </div>
            <div className="rounded-lg border border-border bg-background p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                Why this position
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground">{product.positionNote}</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to={product.familyTo}
              className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-secondary"
            >
              {product.family} overview →
            </Link>
            <Link
              to="/competitor-matrix"
              className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-secondary"
            >
              Competitor matrix →
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-bold text-foreground">Roadmap</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Quarters are used only where the roadmap has confirmed them. Later commitments stay as
          half year bands, and 2028 stays directional.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {product.roadmap.map((phase, i) => (
            <div key={phase.period} className="rounded-xl border border-border bg-card p-5">
              <div className={`h-1 w-12 rounded-full ${phaseBar[i % phaseBar.length]}`} />
              <p className="mt-4 text-sm font-bold text-foreground">{phase.period}</p>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                {phase.label}
              </p>
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
            {product.useCases.map((uc) => (
              <div
                key={uc.title}
                className="flex flex-col rounded-xl border border-border bg-background p-5"
              >
                <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-secondary">
                  {uc.persona}
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">{uc.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{uc.body}</p>
                <p className="mt-4 border-t border-border pt-3 text-sm font-medium text-accent">
                  {uc.outcome}
                </p>
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
                <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">
                  Evidence
                </th>
                <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">
                  Claim
                </th>
                <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">
                  Source
                </th>
              </tr>
            </thead>
            <tbody>
              {product.proof.map((p, i) => (
                <tr key={p.claim} className={i % 2 ? "bg-card" : "bg-background"}>
                  <td className="px-5 py-4 align-top">
                    <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${proofClass[p.kind]}`}>
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

        <div className="mt-8 rounded-xl border border-primary/30 bg-primary/5 p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            The competitive field
          </p>
          <p className="mt-2 text-base leading-relaxed text-foreground">{product.rivals}</p>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
          Positions are internal RA+ assessments, not third party ratings. Analyst points come from
          licensed Verdantix research reviewed in September 2026. Bracketed items are placeholders
          awaiting account team or Finance confirmation.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
          {prev ? (
            <Link to={`/sustainability-products/${prev.slug}`} className="text-sm font-semibold text-accent">
              ← {prev.name}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link to={`/sustainability-products/${next.slug}`} className="text-sm font-semibold text-accent">
              {next.name} →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </section>
    </main>
  );
};

export default SustainabilityProductDetail;
