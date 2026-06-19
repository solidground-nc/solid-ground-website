import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, CTASection } from "@/components/ui";
import { JsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { locations } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Service Areas — Greater Charlotte Metro",
  description:
    "Foundation repair and crawl space encapsulation across the greater Charlotte metro — Charlotte, Matthews, Waxhaw, Weddington, Indian Trail, Mint Hill, Concord, Huntersville, Pineville, and Monroe.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  const byCounty = new Map<string, typeof locations>();
  for (const l of locations) {
    const arr = byCounty.get(l.county) ?? [];
    arr.push(l);
    byCounty.set(l.county, arr);
  }
  const counties = Array.from(byCounty.keys()).sort();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas" },
        ])}
      />

      <PageHero
        eyebrow="Service Areas"
        title="Where we work across the Charlotte metro"
        lead="Solid Ground serves homeowners throughout the greater Charlotte metro. Find your city below for local detail on the soil, the housing stock, and the foundation and crawl space issues we see there."
      />

      <div className="container-sg max-w-4xl">
        {counties.map((county) => (
          <section key={county} className="mt-10">
            <h2 className="eyebrow">{county}</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {(byCounty.get(county) ?? []).map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/service-areas/${l.slug}`}
                    className="group flex items-center justify-between gap-3 rounded-lg border border-line bg-card px-5 py-4 font-display font-semibold text-bedrock transition hover:border-pine hover:bg-pine-tint"
                  >
                    <span>{l.city}</span>
                    <span className="text-pine transition group-hover:translate-x-0.5">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <CTASection
        heading="Don't see your town?"
        sub="We serve the greater Charlotte metro and the surrounding counties. Join the early-inspection list and we'll be in touch."
      />
    </>
  );
}
