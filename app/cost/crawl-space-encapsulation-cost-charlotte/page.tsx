import type { Metadata } from "next";
import Link from "next/link";
import { CTASection, RelatedLinks } from "@/components/ui";
import { JsonLd, faqJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Crawl Space Encapsulation Cost in Charlotte",
  description:
    "Crawl space encapsulation in the Charlotte metro typically costs $5,000–$15,000, with most homeowners around $8,000–$12,000 for a complete system. Here's what drives the price and how to get an accurate quote.",
  alternates: { canonical: "/cost/crawl-space-encapsulation-cost-charlotte" },
};

/*
 * NOTE TO EDITOR: The dollar ranges below are realistic-but-illustrative for
 * the Charlotte market. Confirm them against your own pricing before publishing —
 * accurate, locally-specific numbers are exactly what earns AI citations.
 */

const faqs = [
  {
    question: "How much does crawl space encapsulation cost in Charlotte?",
    answer:
      "Crawl space encapsulation in the Charlotte metro typically costs between $5,000 and $15,000, with most homeowners landing around $8,000 to $12,000 for a complete system. The final price depends on the square footage of the crawl space, the severity of moisture, and whether the job includes a dehumidifier, drainage, and sump pump. Smaller, drier crawl spaces can come in under $5,000; larger or wetter ones with full drainage can exceed $15,000.",
  },
  {
    question: "Is crawl space encapsulation worth it in Charlotte?",
    answer:
      "For most Charlotte-area homes, yes. The region's humidity and clay soil push moisture into crawl spaces, leading to mold, wood rot, musty odors, higher energy bills, and pests. Encapsulation seals that moisture out, and homeowners typically see lower humidity, better indoor air quality, and often a modest reduction in heating and cooling costs.",
  },
];

const factors = [
  ["Square footage", "More area means more vapor barrier material and labor. This is the single biggest variable."],
  ["Vapor barrier thickness", "A basic 12-mil liner costs less than a heavy-duty 20-mil reinforced barrier, which lasts longer and resists punctures."],
  ["Moisture severity", "A damp crawl space needs less work than one with standing water, which may require drainage and a sump pump first."],
  ["Dehumidifier", "A dedicated crawl space dehumidifier adds cost but is what keeps humidity controlled long-term in the Carolina climate."],
  ["Drainage & sump pump", "If water enters the space, an interior drainage system and sump pump are added to the scope."],
  ["Access & condition", "Tight access, debris removal, old insulation tear-out, or existing mold remediation all add labor."],
];

const ranges = [
  ["Basic vapor barrier only", "small, dry space", "$3,000–$5,000"],
  ["Standard encapsulation", "barrier + sealing + dehumidifier", "$7,000–$11,000"],
  ["Full system", "barrier + drainage + sump pump + dehumidifier", "$11,000–$15,000+"],
];

export default function EncapsulationCostPage() {
  return (
    <>
      <JsonLd
        data={[
          faqJsonLd(faqs),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Crawl Space Encapsulation Cost", path: "/cost/crawl-space-encapsulation-cost-charlotte" },
          ]),
        ]}
      />

      <header className="container-sg pt-14 pb-8 sm:pt-20">
        <p className="eyebrow">Cost Guide · Charlotte Metro</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-[1.05] text-bedrock sm:text-5xl">
          How much does crawl space encapsulation cost in Charlotte?
        </h1>
      </header>

      {/* Answer-first block — the first 40–75 words AI extracts. */}
      <section className="container-sg">
        <div className="answer-box max-w-3xl">
          <p className="text-lg leading-relaxed text-bedrock/90 sm:text-xl">
            Crawl space encapsulation in the Charlotte metro typically costs
            between <strong>$5,000 and $15,000</strong>, with most homeowners
            landing around <strong>$8,000–$12,000</strong> for a complete system.
            The final price depends on the square footage of your crawl space, the
            severity of moisture or standing water, and whether the job includes a
            dehumidifier, drainage, and sump pump. Smaller, drier crawl spaces can
            come in under $5,000; larger or wetter ones with full drainage can
            exceed $15,000.
          </p>
        </div>
      </section>

      <article className="container-sg pt-12">
        <div className="prose-sg max-w-prose">
          <h2>What goes into the price</h2>
          <p>
            Encapsulation isn&apos;t one product — it&apos;s a system, and which
            pieces your home needs is what drives the number. The main cost
            factors:
          </p>
        </div>

        <dl className="mt-6 max-w-prose divide-y divide-line rounded-xl border border-line bg-card">
          {factors.map(([term, def]) => (
            <div key={term} className="px-6 py-5">
              <dt className="font-display font-bold text-bedrock">{term}</dt>
              <dd className="mt-1 text-base leading-relaxed text-bedrock/75">{def}</dd>
            </div>
          ))}
        </dl>

        <div className="prose-sg mt-12 max-w-prose">
          <h2>Typical price ranges by scope</h2>
          <p>As a rough guide for the Charlotte area:</p>
        </div>

        <div className="mt-6 max-w-prose overflow-hidden rounded-xl border border-line">
          {ranges.map(([scope, detail, price], i) => (
            <div
              key={scope}
              className={`flex flex-col gap-1 px-6 py-5 sm:flex-row sm:items-center sm:justify-between ${
                i % 2 ? "bg-card" : "bg-paper"
              }`}
            >
              <div>
                <p className="font-display font-bold text-bedrock">{scope}</p>
                <p className="text-sm text-stone">{detail}</p>
              </div>
              <p className="font-display text-lg font-bold text-pine">{price}</p>
            </div>
          ))}
        </div>

        <div className="prose-sg mt-12 max-w-prose">
          <h2>Is crawl space encapsulation worth it in Charlotte?</h2>
          <p>
            For most Charlotte-area homes, yes. The region&apos;s humidity and clay
            soil push moisture up into crawl spaces, which leads to mold, wood rot,
            musty odors, higher energy bills, and pest problems. Encapsulation
            seals that moisture out, and homeowners typically see lower humidity,
            better indoor air quality, and often a modest reduction in heating and
            cooling costs. It also protects the structural wood and can be a
            selling point at resale — more on that in our guide to{" "}
            <Link href="/learn/selling-home-wet-crawl-space-mecklenburg">
              selling a home with a wet crawl space
            </Link>
            .
          </p>

          <h2>How to get an accurate quote</h2>
          <p>
            Square footage and moisture level vary too much for an online estimate
            to be precise. The only way to know your real number is an in-person
            inspection where a specialist measures the space, checks moisture
            levels, and identifies whether you need drainage. A good company gives
            you a written, itemized quote — not a single lump sum — so you can see
            exactly what you&apos;re paying for. Not sure whether you even need the
            full system? Compare a{" "}
            <Link href="/learn/vapor-barrier-vs-encapsulation">
              vapor barrier vs. full encapsulation
            </Link>
            .
          </p>
        </div>

        <RelatedLinks
          links={[
            { label: "Crawl space encapsulation services", href: "/crawl-space-encapsulation" },
            { label: "Vapor barrier vs. encapsulation", href: "/learn/vapor-barrier-vs-encapsulation" },
            { label: "7 signs your crawl space needs encapsulation", href: "/learn/signs-crawl-space-needs-encapsulation" },
            { label: "Why Charlotte's clay soil cracks foundations", href: "/learn/why-charlotte-clay-soil-cracks-foundations" },
          ]}
        />
      </article>

      <CTASection
        heading="We open soon — and free inspections are first-come."
        sub="Join the early-inspection list for first access. (At launch, this becomes “Schedule your free inspection.”)"
      />
    </>
  );
}
