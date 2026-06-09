import { site } from "./site.config";

/**
 * Structured data helpers. These output JSON-LD that Google and AI answer
 * engines read to understand the business and to pull Q&A directly into
 * answers. Each page that has a clear question/answer block should emit a
 * FAQPage. The homepage and about page emit the LocalBusiness entity.
 */

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    url: site.siteUrl,
    image: `${site.siteUrl}/og.png`,
    telephone: site.phone,
    email: site.email,
    description:
      "Locally-owned crawl space encapsulation, waterproofing, and foundation repair serving the greater Charlotte metro. Clear pricing, honest assessments, and repairs built for the region's clay soil and humidity.",
    areaServed: site.serviceAreas.map((name) => ({
      "@type": "City",
      name,
    })),
    address: {
      "@type": "PostalAddress",
      addressRegion: site.state,
      addressCountry: "US",
    },
    knowsAbout: [
      "Crawl space encapsulation",
      "Crawl space waterproofing",
      "Vapor barriers",
      "Foundation crack repair",
      "Foundation settlement repair",
      "Bowing wall stabilization",
    ],
  };
}

export function faqJsonLd(qa: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.siteUrl}${item.path}`,
    })),
  };
}

/** Renders a JSON-LD <script> tag. Use inside a page component. */
export function JsonLd({ data }: { data: object | object[] }) {
  const json = Array.isArray(data) ? data : [data];
  return (
    <>
      {json.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
        />
      ))}
    </>
  );
}
