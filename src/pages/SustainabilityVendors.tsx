import { Link } from "react-router-dom";
import {
  domainLabels,
  sustainabilityVendors,
  vendorsForDomain,
  type SustainabilityDomain,
} from "@/data/sustainability-vendors";
import { threatClass } from "./EnergyVendors";

const domains: SustainabilityDomain[] = ["carbon", "supply-chain", "esg"];

const SustainabilityVendors = () => {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <Link to="/sustainability" className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            ← Sustainability family
          </Link>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Competitive field
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground">
            Sustainability rivals, one deep dive each
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Carbon platforms, supply chain networks and ESG reporting suites each cover a slice.
            Every page below sets out where a provider is going, which buyer it serves, and the
            gaps RA+ closes by running the whole programme on one governed data spine.
          </p>
          <p className="mt-4 max-w-3xl text-xs leading-relaxed text-muted-foreground">
            Public vendor product information and licensed Verdantix research reviewed September
            2026. Positions are internal RA+ assessments, not third party ratings.
          </p>
        </div>
      </header>

      {domains.map((domain) => (
        <section key={domain} className="mx-auto max-w-6xl px-6 py-10">
          <h2 className="text-2xl font-bold text-foreground">{domainLabels[domain]}</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {vendorsForDomain(domain).map((v) => (
              <Link
                key={`${domain}-${v.slug}`}
                to={`/sustainability-vendors/${v.slug}`}
                className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${threatClass[v.threat]}`}
                  >
                    {v.threat} threat
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                    {v.category}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-foreground group-hover:text-primary">
                  {v.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-accent">{v.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {v.summary.slice(0, 160)}…
                </p>
                <p className="mt-4 text-xs font-semibold text-primary">Open the deep dive</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default SustainabilityVendors;
