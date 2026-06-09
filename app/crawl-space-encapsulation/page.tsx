import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, CTASection, RelatedLinks } from "@/components/ui";
import { StrataRule } from "@/components/Strata";
import { JsonLd, faqJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Crawl Space Encapsulation in Charlotte",
  description:
    "Crawl space encapsulation, waterproofing, vapor barriers, dehumidification, and drainage for the greater Charlotte metro. A complete moisture-control system built for Carolina clay and humidity.",
  alternates: { canonical: "/crawl-space-encapsulation" },
};

const components = [
  {
    title: "Vapor barrier",
    body: "A heavy, reinforced liner across the floor and up the walls — the backbone of the system that stops ground moisture from rising.",
  },
  {
    title: "Vent sealing & air sealing",
    body: "Closing off open vents and sealing seams turns the crawl space into a controlled zone instead of a humid pocket under your home.",
  },
  {
    title: "Dehumidification",
    body: "A dedicated crawl space dehumidifier actively holds humidity down — the piece that keeps Carolina air from undoing the rest.",
  },
  {
    title: "Drainage & sump pump",
    body: "Where water enters, interior drainage and a sump pump move it out before it can pool, rot wood, or breed mold.",
  },
  {
    title: "Mold remediation & tear-out",
    body: "Old, sagging insulation and existing mold are removed first, so the new system seals a clean, dry space.",
  },
  {
    title: "Structural support",
    body: "Failed supports and sagging joists are shored up with adjustable steel jacks where the floor above has started to give.",
  },
];

const faqs = [
  {
    question: "What is crawl space encapsulation?",
    answer:
      "Crawl space encapsulation is a complete moisture-control system: a heavy vapor barrier across the floor and walls, sealed seams, closed vents, and usually a dehumidifier and drainage. It turns a damp, vented crawl space into a dry, sealed zone, stopping moisture at the source.",
  },
  {
    question: "How much does encapsulation cost in Charlotte?",
    answer:
      "Crawl space encapsulation in the Charlotte metro typically costs between $5,000 and $15,000, with most homeowners landing around $8,000 to $12,000 for a complete system, depending on square footage, moisture severity, and whether drainage and a dehumidifier are included.",
  },
];

export default function CrawlSpaceHub() {
  return (
    <>
      <JsonLd
        data={[
          faqJsonLd(faqs),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Crawl Space Encapsulation", path: "/crawl-space-encapsulation" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Crawl Space Encapsulation"
        title="Seal out moisture, mold, and humidity — for good."
        lead="Encapsulation isn't one product. It's a complete system that turns a damp, vented crawl space into a dry, sealed zone, built for Charlotte's clay soil and Carolina humidity."
      />

      <article className="container-sg">
        <div className="prose-sg max-w-prose">
          <p>
            In the Charlotte area, ground moisture and humid summer air are the
            two forces working against your crawl space year-round. A floor-only
            vapor barrier slows the first; only a full encapsulation system
            handles both. That&apos;s why most homes here need the complete
            approach — sealing the space, controlling the air, and managing any
            water that gets in.
          </p>
          <p>
            Below are the pieces of the system. Which ones your home needs is
            exactly what an inspection determines — and it&apos;s what drives the{" "}
            <Link href="/cost/crawl-space-encapsulation-cost-charlotte">
              cost of encapsulation
            </Link>
            .
          </p>
        </div>

        {/* Spokes */}
        <h2 className="mt-12 text-2xl font-bold text-bedrock sm:text-3xl">
          What&apos;s in the system
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {components.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-line bg-card p-6 shadow-card"
            >
              <h3 className="text-lg font-bold text-bedrock">{c.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-bedrock/75">
                {c.body}
              </p>
            </div>
          ))}
        </div>

        <div className="prose-sg mt-12 max-w-prose">
          <h2>Why Charlotte homes are especially at risk</h2>
          <p>
            The Carolina climate — humid summers, regular rain, and expansive clay
            soil that holds water — pushes moisture up into crawl spaces all year.
            That&apos;s why musty odors, high indoor humidity, and mold are so
            common across the metro. If you&apos;re seeing those, our guide on the{" "}
            <Link href="/learn/signs-crawl-space-needs-encapsulation">
              signs your crawl space needs encapsulation
            </Link>{" "}
            is a good next read.
          </p>

          {/* Rule 3: hubs cross-link to each other, naturally. */}
          <h2>Moisture and foundation movement travel together</h2>
          <p>
            The same wet clay that pushes moisture into your crawl space also
            pressures your foundation — which is why these two problems so often
            show up at the same time. If you&apos;re also seeing cracks or sticking
            doors, see our{" "}
            <Link href="/foundation-repair">foundation repair services</Link>.
          </p>
        </div>

        <RelatedLinks
          links={[
            { label: "Crawl space encapsulation cost in Charlotte", href: "/cost/crawl-space-encapsulation-cost-charlotte" },
            { label: "7 signs your crawl space needs encapsulation", href: "/learn/signs-crawl-space-needs-encapsulation" },
            { label: "Vapor barrier vs. encapsulation", href: "/learn/vapor-barrier-vs-encapsulation" },
            { label: "Selling a home with a wet crawl space", href: "/learn/selling-home-wet-crawl-space-mecklenburg" },
          ]}
        />
      </article>

      <CTASection
        heading="We open soon — and inspections are first-come."
        sub="Join the early-inspection list for first access to a free crawl space inspection."
      />
    </>
  );
}
