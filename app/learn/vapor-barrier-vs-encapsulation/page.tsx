import type { Metadata } from "next";
import Link from "next/link";
import { CTASection, RelatedLinks } from "@/components/ui";
import { JsonLd, faqJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Vapor Barrier vs. Encapsulation: What's the Difference?",
  description:
    "A vapor barrier is one component — a sheet that slows ground moisture. Encapsulation is the complete sealed system. Here's the difference, which you need, and the cost gap.",
  alternates: { canonical: "/learn/vapor-barrier-vs-encapsulation" },
};

const faqs = [
  {
    question: "What's the difference between a vapor barrier and encapsulation?",
    answer:
      "A vapor barrier is a single component — a plastic sheet laid over the crawl space floor to slow ground moisture. Encapsulation is the complete system: a heavy-duty vapor barrier across the floor and walls, sealed seams, closed vents, and usually a dehumidifier and drainage. A vapor barrier is one part; encapsulation is the whole moisture-control solution. Encapsulation costs more but solves the problem fully.",
  },
];

export default function VaporBarrierPage() {
  return (
    <>
      <JsonLd
        data={[
          faqJsonLd(faqs),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Learn", path: "/learn" },
            { name: "Vapor barrier vs. encapsulation", path: "/learn/vapor-barrier-vs-encapsulation" },
          ]),
        ]}
      />

      <header className="container-sg pt-14 pb-8 sm:pt-20">
        <p className="eyebrow">Learn · Crawl Spaces</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-[1.05] text-bedrock sm:text-5xl">
          What&apos;s the difference between a vapor barrier and encapsulation?
        </h1>
      </header>

      <section className="container-sg">
        <div className="answer-box max-w-3xl">
          <p className="text-lg leading-relaxed text-bedrock/90 sm:text-xl">
            A vapor barrier is a single component — a plastic sheet laid over the
            crawl space floor to slow ground moisture. Encapsulation is the
            complete system: a heavy-duty vapor barrier across the floor and walls,
            sealed seams, closed vents, and usually a dehumidifier and drainage. In
            short, a vapor barrier is one part; encapsulation is the whole
            moisture-control solution. Encapsulation costs more but solves the
            problem fully, while a vapor barrier alone only reduces it.
          </p>
        </div>
      </section>

      <article className="container-sg pt-12">
        {/* Side-by-side comparison */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-line bg-card p-6 shadow-card">
            <p className="eyebrow-muted">One component</p>
            <h2 className="mt-2 text-xl font-bold text-bedrock">Vapor barrier</h2>
            <p className="mt-3 text-base leading-relaxed text-bedrock/75">
              A polyethylene sheet (often 6–12 mil) laid across the dirt floor. It
              slows moisture rising from the soil and is inexpensive. On its own it
              doesn&apos;t seal the walls, doesn&apos;t close the vents that let
              humid outside air in, and doesn&apos;t control humidity already in the
              space. In Charlotte&apos;s climate, a floor-only barrier often
              isn&apos;t enough.
            </p>
          </div>
          <div className="rounded-xl border-2 border-pine bg-pine-tint p-6 shadow-card">
            <p className="eyebrow">The complete system</p>
            <h2 className="mt-2 text-xl font-bold text-bedrock">Encapsulation</h2>
            <p className="mt-3 text-base leading-relaxed text-bedrock/80">
              Treats the crawl space as a sealed, conditioned zone: a thick
              (12–20 mil) reinforced barrier across the floor and up the walls,
              sealed seams and edges, vent sealing, and a dehumidifier to actively
              manage humidity. Where water enters, it adds interior drainage and a
              sump pump. The result is a genuinely dry space.
            </p>
          </div>
        </div>

        <div className="prose-sg mt-12 max-w-prose">
          <h2>Which one do you need?</h2>
          <p>
            It depends on your crawl space. A small, naturally dry space with no
            standing water and good drainage may do fine with a quality vapor
            barrier. A space with humidity, musty odors, mold, or water intrusion —
            which describes most Charlotte-area crawl spaces — needs full
            encapsulation to actually fix the problem. The honest answer comes from
            an inspection that measures your moisture levels. If you&apos;re seeing
            warning signs, our guide on the{" "}
            <Link href="/learn/signs-crawl-space-needs-encapsulation">
              7 signs your crawl space needs encapsulation
            </Link>{" "}
            is a good next read.
          </p>

          <h2>Cost difference</h2>
          <p>
            A vapor-barrier-only job is the lower end of the range — often
            $3,000–$5,000 — while full encapsulation typically runs $7,000–$15,000
            depending on size and what&apos;s included. The full breakdown is on
            our{" "}
            <Link href="/cost/crawl-space-encapsulation-cost-charlotte">
              crawl space encapsulation cost in Charlotte
            </Link>{" "}
            guide. The cheaper option isn&apos;t a bargain if it doesn&apos;t solve
            the problem and you end up paying for encapsulation later anyway.
          </p>
        </div>

        <RelatedLinks
          links={[
            { label: "Crawl space encapsulation cost", href: "/cost/crawl-space-encapsulation-cost-charlotte" },
            { label: "7 signs your crawl space needs encapsulation", href: "/learn/signs-crawl-space-needs-encapsulation" },
            { label: "Crawl space encapsulation services", href: "/crawl-space-encapsulation" },
            { label: "Why Charlotte's clay soil cracks foundations", href: "/learn/why-charlotte-clay-soil-cracks-foundations" },
          ]}
        />
      </article>

      <CTASection
        heading="Not sure which your home needs?"
        sub="Join the early-inspection list for first access when we open."
      />
    </>
  );
}
