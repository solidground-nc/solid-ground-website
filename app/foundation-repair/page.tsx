import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, CTASection, RelatedLinks } from "@/components/ui";
import { JsonLd, faqJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Foundation Repair in Charlotte",
  description:
    "Foundation crack repair, bowing-wall stabilization, and settlement repair with piers for the greater Charlotte metro. Honest assessments and repairs built for expansive clay soil.",
  alternates: { canonical: "/foundation-repair" },
};

const repairs = [
  {
    title: "Crack repair",
    body: "Non-structural cracks sealed with epoxy or polyurethane injection — the inexpensive fix when you catch a problem early.",
  },
  {
    title: "Bowing & leaning wall stabilization",
    body: "Carbon-fiber straps, wall anchors, or bracing hold a wall that soil pressure has started to push inward.",
  },
  {
    title: "Settlement repair with piers",
    body: "Push or helical piers driven to stable soil lift and support a settling foundation. Priced per pier, so the count drives the total.",
  },
  {
    title: "Crawl space structural repair",
    body: "Replacing failed supports, sistering joists, or installing adjustable steel jacks where the structure has begun to sag.",
  },
];

const faqs = [
  {
    question: "How much does foundation repair cost in Charlotte?",
    answer:
      "Foundation repair in the Charlotte metro typically costs between $2,500 and $15,000. Minor crack repairs can start around $500, while major structural repairs with piering can exceed $25,000. Most homeowners spend somewhere in the $4,000 to $10,000 range, depending on the problem and the repair method.",
  },
  {
    question: "Why do Charlotte foundations crack?",
    answer:
      "The Charlotte region sits on expansive clay soil that swells when wet and shrinks when dry. That constant movement puts pressure on foundations, showing up over time as cracks, sticking doors, uneven floors, and gaps around windows.",
  },
];

export default function FoundationHub() {
  return (
    <>
      <JsonLd
        data={[
          faqJsonLd(faqs),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Foundation Repair", path: "/foundation-repair" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Foundation Repair"
        title="Cracks, bowing walls, and settlement — solved at the source."
        lead="Foundation problems range from a $500 crack seal to a major piering job. The honest first step is finding the root cause, not just the symptom."
      />

      <article className="container-sg">
        <div className="prose-sg max-w-prose">
          <p>
            Most foundation issues in the Charlotte area trace back to one thing:
            expansive clay soil that moves with the seasons. Catching the movement
            early — when it&apos;s a hairline crack and not a settled corner — is
            what keeps a repair small. We&apos;ll always tell you honestly whether
            you&apos;re looking at a cosmetic crack or a structural problem.
          </p>
          <p>
            Here are the repairs we&apos;ll offer when we open. What your home needs
            — and what it costs — comes from an inspection, not a phone quote. See
            the full{" "}
            <Link href="/cost/foundation-repair-cost-charlotte">
              foundation repair cost guide
            </Link>{" "}
            for ranges.
          </p>
        </div>

        <h2 className="mt-12 text-2xl font-bold text-bedrock sm:text-3xl">
          Types of repair
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {repairs.map((r) => (
            <div
              key={r.title}
              className="rounded-xl border border-line bg-card p-6 shadow-card"
            >
              <h3 className="text-lg font-bold text-bedrock">{r.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-bedrock/75">
                {r.body}
              </p>
            </div>
          ))}
        </div>

        <div className="prose-sg mt-12 max-w-prose">
          <h2>Signs you may need foundation repair</h2>
          <ul>
            <li>Stair-step cracks in brick or block walls.</li>
            <li>Doors and windows that stick or won&apos;t latch.</li>
            <li>Uneven, sloping, or bouncy floors.</li>
            <li>Gaps opening up around window or door frames.</li>
            <li>Cracks in the foundation, basement, or crawl space wall.</li>
          </ul>
          <p>
            Want to understand the root cause? Read{" "}
            <Link href="/learn/why-charlotte-clay-soil-cracks-foundations">
              why Charlotte&apos;s clay soil cracks foundations
            </Link>
            .
          </p>

          {/* Rule 3: cross-link to the crawl space hub. */}
          <h2>Foundation movement and crawl space moisture often share a cause</h2>
          <p>
            The wet clay that pressures your foundation also pushes moisture up
            into your crawl space, so these problems frequently appear together.
            If you&apos;re also noticing musty odors or high humidity, see our{" "}
            <Link href="/crawl-space-encapsulation">
              crawl space encapsulation services
            </Link>
            .
          </p>
        </div>

        <RelatedLinks
          links={[
            { label: "Foundation repair cost in Charlotte", href: "/cost/foundation-repair-cost-charlotte" },
            { label: "Why Charlotte's clay soil cracks foundations", href: "/learn/why-charlotte-clay-soil-cracks-foundations" },
            { label: "Crawl space encapsulation", href: "/crawl-space-encapsulation" },
            { label: "Crawl space encapsulation cost", href: "/cost/crawl-space-encapsulation-cost-charlotte" },
          ]}
        />
      </article>

      <CTASection
        heading="Caught a crack early? That's exactly when to look."
        sub="Join the early-inspection list for first access to a free foundation inspection."
      />
    </>
  );
}
