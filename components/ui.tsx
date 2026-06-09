import Link from "next/link";
import { StrataRule } from "./Strata";
import { site } from "@/lib/site.config";

/** Inner-page hero: eyebrow + H1 + lead paragraph. */
export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="container-sg pt-14 pb-10 sm:pt-20 sm:pb-12">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-[1.05] text-bedrock sm:text-5xl">
        {title}
      </h1>
      {lead && (
        <p className="mt-5 max-w-2xl text-xl leading-relaxed text-bedrock/75">
          {lead}
        </p>
      )}
    </header>
  );
}

/** Closing CTA band — dark, with the strata edge. Drives to the homepage form. */
export function CTASection({
  heading,
  sub,
}: {
  heading: string;
  sub?: string;
}) {
  return (
    <section className="mt-20">
      <StrataRule />
      <div className="bg-bedrock text-paper">
        <div className="container-sg flex flex-col items-start gap-6 py-14 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{heading}</h2>
            {sub && <p className="mt-3 text-lg leading-relaxed text-paper/75">{sub}</p>}
          </div>
          <Link href="/#join" className="btn-on-dark shrink-0 !px-8 !py-4 text-lg">
            Join the early-inspection list →
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Internal-linking block — implements the site's hub-and-spoke link map. */
export function RelatedLinks({
  title = "Keep reading",
  links,
}: {
  title?: string;
  links: { label: string; href: string }[];
}) {
  return (
    <nav className="mt-14 rounded-xl border border-line bg-card p-6 sm:p-8" aria-label="Related">
      <h2 className="eyebrow">{title}</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="group flex items-center justify-between gap-3 rounded-lg border border-line/70 bg-paper px-4 py-3.5 font-display text-sm font-semibold text-bedrock transition hover:border-pine hover:bg-pine-tint"
            >
              <span>{l.label}</span>
              <span className="text-pine transition group-hover:translate-x-0.5">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/** Compact strip listing the towns served — reinforces local relevance. */
export function ServiceAreaStrip() {
  return (
    <div className="container-sg py-8">
      <p className="eyebrow-muted">Serving the greater Charlotte metro</p>
      <p className="mt-3 font-display text-lg font-medium leading-relaxed text-bedrock/80">
        {site.serviceAreas.join("  ·  ")}
      </p>
    </div>
  );
}
