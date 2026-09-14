import { Link, useParams } from "react-router-dom";
import { energyProducts, findEnergyProduct, type ProofKind } from "@/data/energy-products";
import { productProof } from "@/data/energy-proof";

const proofClass: Record<ProofKind, string> = {
  Roadmap: "bg-primary/15 text-secondary",
  Analyst: "bg-accent/10 text-accent",
  Customer: "bg-muted/10 text-foreground",
  Finance: "bg-[hsl(var(--se-quartz-orange)/0.18)] text-foreground",
};

const EnergyProductProof = () => {
  const { slug } = useParams();
  const product = findEnergyProduct(slug);
  const proof = slug ? productProof[slug] : undefined;

  if (!product || !proof) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-foreground">Product not found</h1>
          <Link to="/energy-products" className="mt-4 inline-block text-accent underline">
            Back to the Energy &amp; Efficiency family
          </Link>
        </div>
      </main>
    );
  }

  const index = energyProducts.findIndex((p) => p.slug === product.slug);
  const prev = energyProducts[index - 1];
  const next = energyProducts[index + 1];

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <Link
            to={`/energy-products/${product.slug}`}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-accent"
          >
            ← {product.name}
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              RA+ Energy &amp; Efficiency
            </span>
            <span className="rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-secondary">
              Proof page
            </span>
          </div>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground">
            {product.name}: the evidence
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Features shipping on the 2026 to 2027 roadmap, the proof points behind the position,
            and the gaps named competitors do not close today.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-bold text-foreground">Features</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          What the product delivers across the confirmed roadmap.
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {proof.features.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
            >
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <p className="text-sm leading-relaxed text-foreground">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl font-bold text-foreground">Proof points</h2>
          <div className="mt-6 overflow-hidden rounded-xl border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-background">
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
                  <tr key={p.claim} className={i % 2 ? "bg-background" : "bg-card"}>
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
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-bold text-foreground">Competitor gaps</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Where the named alternatives stop short, per internal RA+ assessment.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {proof.gaps.map((g) => (
            <div key={g.competitor} className="flex flex-col rounded-xl border border-border bg-card p-5">
              <div className="h-1 w-12 rounded-full bg-accent" />
              <p className="mt-4 text-sm font-bold text-foreground">{g.competitor}</p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{g.gap}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-accent/30 bg-accent/5 p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            Competitive read
          </p>
          <p className="mt-2 text-sm leading-relaxed text-foreground">{product.rivals}</p>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
          Positions and gaps are internal RA+ assessments, not third party ratings. Analyst points
          come from licensed Verdantix research reviewed in September 2026. Bracketed items are
          placeholders awaiting account team or Finance confirmation.
        </p>

        <nav className="mt-10 flex flex-wrap justify-between gap-4 border-t border-border pt-6 text-sm">
          {prev ? (
            <Link to={`/energy-products/${prev.slug}/proof`} className="font-medium text-accent">
              ← {prev.name} proof
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link to={`/energy-products/${next.slug}/proof`} className="font-medium text-accent">
              {next.name} proof →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </section>
    </main>
  );
};

export default EnergyProductProof;
