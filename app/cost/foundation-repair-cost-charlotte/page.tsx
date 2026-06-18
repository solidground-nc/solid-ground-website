import type { Metadata } from "next";
import Link from "next/link";
import { CTASection, RelatedLinks } from "@/components/ui";
import { JsonLd, faqJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Foundation Repair Cost in Charlotte",
  description:
    "Foundation repair in the Charlotte metro typically costs $2,500–$15,000, with minor cracks from $500 and major piering past $25,000. Here's the cost by repair type and what drives the price.",
  alternates: { canonical: "/cost/foundation-repair-cost-charlotte" },
};

/*
 * NOTE TO EDITOR: Illustrative ranges for the Charlotte market — confirm against
 * your own pricing before publishing.
 */

const faqs = [
  {
    question: "How much does foundation repair cost in Charlotte?",
    answer:
      "Foundation repair in the Charlotte metro typically costs between $2,500 and $15,000, though minor crack repairs can start around $500 and major structural repairs with piering can exceed $25,000. Most homeowners spend somewhere in the $4,000 to $10,000 range. The price depends on the type of problem, the repair method required, and how much of the foundation is affected.",
  },
];

const byType = [
  ["Crack repair (sealing/injection)", "$500–$3,000", "Non-structural cracks sealed with epoxy or polyurethane injection."],
  ["Bowing or leaning wall stabilization", "$4,000–$12,000", "Carbon-fiber straps, wall anchors, or bracing, depending on severity."],
  ["Settlement repair with piers", "$8,000–$25,000+", "Push or helical piers driven to stable soil to lift and support a settling foundation. Priced per pier, so the count drives the total."],
  ["Crawl space structural repair (jacks/supports)", "$1,500–$6,000", "Replacing failed supports, sistering joists, or installing adjustable steel jacks."],
];

const drivers = [
  ["Severity & extent", "A single crack is cheap; a whole side of the house settling is not."],
  ["Repair method", "Injection is inexpensive; piering systems are the costliest because of materials, equipment, and engineering."],
  ["Number of piers or anchors", "Structural repairs are typically priced per unit, so more units means more cost."],
  ["Accessibility", "Hard-to-reach areas, landscaping, or interior access raise labor."],
  ["Engineering & permits", "Major structural work may require a structural engineer's report and permits, which add to the total but protect you."],
];

export default function FoundationCostPage() {
  return (
    <>
      <JsonLd
        data={[
          faqJsonLd(faqs),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Foundation Repair Cost", path: "/cost/foundation-repair-cost-charlotte" },
          ]),
        ]}
      />

      <header className="container-sg pt-14 pb-8 sm:pt-20">
        <p className="eyebrow">Cost Guide · Charlotte Metro</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-[1.05] text-bedrock sm:text-5xl">
          How much does foundation repair cost in Charlotte?
        </h1>
      </header>

      <section className="container-sg">
        <div className="answer-box max-w-3xl">
          <p className="text-lg leading-relaxed text-bedrock/90 sm:text-xl">
            Foundation repair in the Charlotte metro typically costs between{" "}
            <strong>$2,500 and $15,000</strong>, though minor crack repairs can
            start around <strong>$500</strong> and major structural repairs with
            piering can exceed <strong>$25,000</strong>. Most homeowners spend
            somewhere in the $4,000–$10,000 range. The price depends on the type of
            problem (a single crack versus widespread settlement), the repair
            method required, and how much of the foundation is affected.
          </p>
        </div>
      </section>

      <article className="container-sg pt-12">
        <div className="prose-sg max-w-prose">
          <h2>Cost by type of repair</h2>
          <p>
            Foundation repair covers a wide range of problems, and the cost varies
            dramatically by what&apos;s actually wrong:
          </p>
        </div>

        <div className="mt-6 max-w-prose overflow-hidden rounded-xl border border-line">
          {byType.map(([type, price, detail], i) => (
            <div key={type} className={`px-6 py-5 ${i % 2 ? "bg-card" : "bg-paper"}`}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <p className="font-display font-bold text-bedrock">{type}</p>
                <p className="font-display text-lg font-bold text-pine">{price}</p>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-stone">{detail}</p>
            </div>
          ))}
        </div>

        <div className="prose-sg mt-12 max-w-prose">
          <h2>What drives the price</h2>
        </div>
        <dl className="mt-6 max-w-prose divide-y divide-line rounded-xl border border-line bg-card">
          {drivers.map(([term, def]) => (
            <div key={term} className="px-6 py-5">
              <dt className="font-display font-bold text-bedrock">{term}</dt>
              <dd className="mt-1 text-base leading-relaxed text-bedrock/75">{def}</dd>
            </div>
          ))}
        </dl>

        <div className="prose-sg mt-12 max-w-prose">
          <h2>Why Charlotte foundations crack in the first place</h2>
          <p>
            The Charlotte region sits on expansive clay soil that swells when wet
            and shrinks when dry. That constant movement puts pressure on
            foundations, and over years it shows up as cracks, sticking doors,
            uneven floors, and gaps around windows. Add the area&apos;s heavy
            seasonal rain and humidity, and moisture-driven movement is one of the
            most common reasons Charlotte-area homes need foundation work. Catching
            it early — when it&apos;s a crack and not a settled corner — is what
            keeps the cost low. We go deeper in{" "}
            <Link href="/learn/why-charlotte-clay-soil-cracks-foundations">
              why Charlotte&apos;s clay soil cracks foundations
            </Link>
            .
          </p>

          <h2>Signs you may need foundation repair</h2>
          <ul>
            <li>Cracks in walls, especially stair-step cracks in brick or block.</li>
            <li>Doors and windows that stick or won&apos;t latch.</li>
            <li>Uneven, sloping, or bouncy floors.</li>
            <li>Gaps around window or door frames.</li>
            <li>Cracks in the foundation itself or in a basement/crawl space wall.</li>
          </ul>

          <h2>How to get an accurate quote</h2>
          <p>
            Because foundation problems range from a $500 crack repair to a $25,000
            piering job, an online estimate can&apos;t tell you what you&apos;ll
            actually pay. A proper inspection identifies the root cause — not just
            the symptom — and a trustworthy company will tell you honestly whether
            you have a cosmetic crack or a structural issue. Be cautious of anyone
            who quotes major work without measuring or inspecting first. Always get
            a written, itemized estimate. See our full{" "}
            <Link href="/foundation-repair">foundation repair services</Link>.
          </p>
        </div>

        <RelatedLinks
          links={[
            { label: "Foundation repair services", href: "/foundation-repair" },
            { label: "Why Charlotte's clay soil cracks foundations", href: "/learn/why-charlotte-clay-soil-cracks-foundations" },
            { label: "Crawl space encapsulation cost", href: "/cost/crawl-space-encapsulation-cost-charlotte" },
            { label: "Crawl space encapsulation services", href: "/crawl-space-encapsulation" },
          ]}
        />
      </article>

      <CTASection
        heading="A crack today is cheaper than a settled corner tomorrow."
        sub="Join the early-inspection list for first access to a free foundation inspection."
      />
    </>
  );
}
