import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero, CTASection, RelatedLinks } from "@/components/ui";
import { JsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { site } from "@/lib/site.config";
import { locations, getLocation } from "@/lib/locations";

export const dynamicParams = false;

export function generateStaticParams() {
  return locations.map((l) => ({ city: l.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { city: string };
}): Metadata {
  const loc = getLocation(params.city);
  if (!loc) return {};
  return {
    title: { absolute: loc.metaTitle },
    description: loc.metaDescription,
    alternates: { canonical: `/service-areas/${loc.slug}` },
  };
}

export default function LocationPage({
  params,
}: {
  params: { city: string };
}) {
  const loc = getLocation(params.city);
  if (!loc) notFound();

  const ctaSection = loc.sections.find((s) => s.heading.startsWith("Schedule"));
  const bodySections = loc.sections.filter((s) => s !== ctaSection);
  const ctaBlock = ctaSection?.blocks.find((b) => b.type === "p");
  const ctaSub = ctaBlock && ctaBlock.type === "p" ? ctaBlock.text : undefined;

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    url: `${site.siteUrl}/service-areas/${loc.slug}`,
    image: `${site.siteUrl}/og.png`,
    description: loc.metaDescription,
    areaServed: { "@type": "City", name: loc.full },
    address: {
      "@type": "PostalAddress",
      addressLocality: loc.city,
      addressRegion: "NC",
      addressCountry: "US",
    },
    knowsAbout: [
      "Crawl space encapsulation",
      "Crawl space waterproofing",
      "Foundation crack repair",
      "Foundation settlement repair",
      "Bowing wall stabilization",
    ],
  };

  const nearbyLinks = loc.nearby
    .map((slug) => {
      const n = getLocation(slug);
      return n
        ? { label: `Foundation & crawl space in ${n.city}`, href: `/service-areas/${n.slug}` }
        : null;
    })
    .filter((x): x is { label: string; href: string } => x !== null);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Service Areas", path: "/service-areas" },
            { name: loc.city, path: `/service-areas/${loc.slug}` },
          ]),
          localBusiness,
        ]}
      />

      <PageHero eyebrow={`Service Area · ${loc.county}`} title={loc.h1} />

      <div className="container-sg max-w-3xl">
        {bodySections.map((sec, i) => (
          <section key={i} className="mt-10 first:mt-2">
            <h2 className="text-2xl font-bold leading-tight text-bedrock">
              {sec.heading}
            </h2>
            {sec.blocks.map((b, j) =>
              b.type === "p" ? (
                <p
                  key={j}
                  className="mt-4 text-lg leading-relaxed text-bedrock/80"
                >
                  {b.text}
                </p>
              ) : (
                <ul key={j} className="mt-4 space-y-2.5">
                  {b.items.map((it, k) => (
                    <li
                      key={k}
                      className="flex gap-3 text-lg leading-relaxed text-bedrock/80"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              )
            )}
          </section>
        ))}

        <RelatedLinks
          title="Our services"
          links={[
            { label: "Crawl space encapsulation", href: "/crawl-space-encapsulation" },
            { label: "Foundation repair", href: "/foundation-repair" },
            {
              label: "Encapsulation cost in Charlotte",
              href: "/cost/crawl-space-encapsulation-cost-charlotte",
            },
            {
              label: "Foundation repair cost in Charlotte",
              href: "/cost/foundation-repair-cost-charlotte",
            },
          ]}
        />

        <RelatedLinks
          title="Nearby service areas"
          links={[...nearbyLinks, { label: "All service areas", href: "/service-areas" }]}
        />
      </div>

      <CTASection
        heading={ctaSection ? ctaSection.heading : `Protect your ${loc.city} home`}
        sub={ctaSub}
      />
    </>
  );
}
