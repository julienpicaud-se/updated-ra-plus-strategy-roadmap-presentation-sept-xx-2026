import { Link, useParams } from "react-router-dom";
import { findSustainabilityVendor, sustainabilityVendors } from "@/data/sustainability-vendors";
import { threatClass } from "./EnergyVendors";

const SustainabilityVendorDetail = () => {
  const { slug } = useParams();
  const vendor = findSustainabilityVendor(slug);

  if (!vendor) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-foreground">Vendor not found</h1>
          <Link to="/sustainability-vendors" className="mt-4 inline-block text-accent underline">
            Back to the competitive field
          </Link>
        </div>
      </main>
    );
  }

  const index = sustainabilityVendors.findIndex((v) => v.slug === vendor.slug);
  const prev = sustainabilityVendors[index - 1];
  const next = sustainabilityVendors[index + 1];

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <Link to="/sustainability-vendors" className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            ← Sustainability rivals
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span
              className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${threatClass[vendor.threat]}`}
            >
              {vendor.threat} threat
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              {vendor.category}
            </span>
          </div>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground">{vendor.name}</h1>
          <p className="mt-3 text-lg font-medium text-accent">{vendor.tagline}</p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            {vendor.summary}
          </p>
          <p className="mt-6 rounded-lg border border-primary/30 bg-primary/10 p-4 text-sm text-foreground">
            <span className="font-semibold">Where we collide: </span>
            {vendor.overlap}
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="text-lg font-bold text-foreground">Where they are strong</h2>
            <ul className="mt-4 space-y-3">
              {vendor.strengths.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm leading-relaxed text-foreground">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="text-lg font-bold text-foreground">Where they are exposed</h2>
            <ul className="mt-4 space-y-3">
              {vendor.weaknesses.map((w) => (
                <li key={w} className="flex items-start gap-3 text-sm leading-relaxed text-foreground">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl font-bold text-foreground">Their roadmap direction</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Directional reading of public vendor communication and licensed analyst research, not
            vendor commitments.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {vendor.roadmap.map((phase) => (
              <div key={phase.period} className="rounded-xl border border-border bg-background p-6">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  {phase.period}
                </span>
                <h3 className="mt-2 text-base font-semibold text-foreground">{phase.focus}</h3>
                <ul className="mt-4 space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-bold text-foreground">Use cases they serve</h2>
        <div className="mt-6 overflow-hidden rounded-xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-primary/10">
              <tr>
                <th className="px-5 py-3 font-semibold text-secondary">Buyer</th>
                <th className="px-5 py-3 font-semibold text-secondary">What they need</th>
                <th className="px-5 py-3 font-semibold text-secondary">How well {vendor.name} answers</th>
              </tr>
            </thead>
            <tbody>
              {vendor.useCases.map((u, i) => (
                <tr key={u.buyer} className={i % 2 ? "bg-card" : "bg-background"}>
                  <td className="px-5 py-4 font-medium text-foreground">{u.buyer}</td>
                  <td className="px-5 py-4 text-muted-foreground">{u.need}</td>
                  <td className="px-5 py-4 text-foreground">{u.vendorAnswer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl font-bold text-foreground">The gaps RA+ closes</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {vendor.gaps.map((g) => (
              <div key={g.area} className="rounded-xl border border-border bg-background p-6">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  {g.area}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">{vendor.name}: </span>
                  {g.vendor}
                </p>
                <p className="mt-3 rounded-lg bg-primary/10 p-3 text-sm leading-relaxed text-foreground">
                  <span className="font-semibold">RA+: </span>
                  {g.raPlus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-xl border border-primary/40 bg-primary/10 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
              How we win
            </h3>
            <p className="mt-3 text-base leading-relaxed text-foreground">{vendor.winTheme}</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              What to watch
            </h3>
            <p className="mt-3 text-base leading-relaxed text-foreground">{vendor.watchFor}</p>
          </div>
        </div>

        <p className="mt-8 rounded-lg border border-border bg-card p-5 text-xs leading-relaxed text-muted-foreground">
          Sources: {vendor.sources.join("; ")}. Positions and gap statements are internal RA+
          assessments, not third party ratings.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
          {prev ? (
            <Link to={`/sustainability-vendors/${prev.slug}`} className="text-sm font-semibold text-accent">
              ← {prev.name}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link to={`/sustainability-vendors/${next.slug}`} className="text-sm font-semibold text-accent">
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

export default SustainabilityVendorDetail;
