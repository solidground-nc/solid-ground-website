import type { Metadata } from "next";
import Link from "next/link";
import { CTASection, RelatedLinks } from "@/components/ui";
import { JsonLd, faqJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "7 Signs Your Crawl Space Needs Encapsulation",
  description:
    "Musty odors, high humidity, mold, standing water, sagging floors, pests, and rising energy bills are the most common signs a crawl space needs encapsulation. Here's what each one means.",
  alternates: { canonical: "/learn/signs-crawl-space-needs-encapsulation" },
};

const faqs = [
  {
    question: "What are the signs your crawl space needs encapsulation?",
    answer:
      "The most common signs a crawl space needs encapsulation are musty odors in your home, high indoor humidity, visible mold or mildew, standing water or damp soil under the house, sagging or warped floors, increased pest activity, and rising energy bills. If you notice one or more, your crawl space is likely letting moisture into your home and is a strong candidate for encapsulation.",
  },
];

const signs = [
  ["Musty smells inside the house", "Up to half the air on your main floor comes up from the crawl space. If it smells musty upstairs, the source is often below."],
  ["High indoor humidity", "If your home feels clammy or your hygrometer reads above 55–60%, ground moisture rising through an open crawl space is a frequent culprit."],
  ["Visible mold or mildew", "Mold on joists, subflooring, or insulation means moisture has been present long enough to take hold."],
  ["Standing water or consistently damp soil", "Pooling water or mud after rain signals a drainage problem that encapsulation, plus a sump pump, is built to solve."],
  ["Sagging, soft, or warped floors", "Moisture rots the wood that supports your floors, leading to bounce, slope, or soft spots."],
  ["More pests", "Termites, roaches, rodents, and other pests are drawn to damp, dark crawl spaces. A sealed space is far less inviting."],
  ["Rising energy bills", "A humid crawl space makes your HVAC work harder. Sealing and conditioning the space often trims heating and cooling costs."],
];

export default function SignsPage() {
  return (
    <>
      <JsonLd
        data={[
          faqJsonLd(faqs),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Learn", path: "/learn" },
            { name: "7 signs you need encapsulation", path: "/learn/signs-crawl-space-needs-encapsulation" },
          ]),
        ]}
      />

      <header className="container-sg pt-14 pb-8 sm:pt-20">
        <p className="eyebrow">Learn · Crawl Spaces</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-[1.05] text-bedrock sm:text-5xl">
          What are the signs your crawl space needs encapsulation?
        </h1>
      </header>

      <section className="container-sg">
        <div className="answer-box max-w-3xl">
          <p className="text-lg leading-relaxed text-bedrock/90 sm:text-xl">
            The most common signs a crawl space needs encapsulation are musty
            odors in your home, high indoor humidity, visible mold or mildew,
            standing water or damp soil under the house, sagging or warped floors
            above the crawl space, increased pest activity, and rising energy
            bills. If you notice one or more of these, your crawl space is likely
            letting moisture into your home and is a strong candidate for
            encapsulation.
          </p>
        </div>
      </section>

      <article className="container-sg pt-12">
        <h2 className="text-2xl font-bold text-bedrock sm:text-3xl">The 7 signs in detail</h2>
        <ol className="mt-6 max-w-prose space-y-4">
          {signs.map(([title, body], i) => (
            <li
              key={title}
              className="relative rounded-xl border border-line bg-card p-5 pl-16"
            >
              <span className="absolute left-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-pine-tint font-display text-sm font-bold text-pine">
                {i + 1}
              </span>
              <p className="font-display font-bold text-bedrock">{title}</p>
              <p className="mt-1 text-base leading-relaxed text-bedrock/75">{body}</p>
            </li>
          ))}
        </ol>

        <div className="prose-sg mt-12 max-w-prose">
          <h2>Why Charlotte homes are especially at risk</h2>
          <p>
            The Carolina climate — humid summers, regular rain, and expansive clay
            soil that holds water — pushes moisture up into crawl spaces
            year-round. That&apos;s why these symptoms are so common across the
            metro. If you want to understand the soil side of the problem, see our
            guide on{" "}
            <Link href="/learn/why-charlotte-clay-soil-cracks-foundations">
              why Charlotte&apos;s clay soil cracks foundations
            </Link>
            .
          </p>

          <h2>What encapsulation does about it</h2>
          <p>
            Encapsulation seals the crawl space with a heavy vapor barrier across
            the floor and walls, closes off vents, and typically adds a
            dehumidifier to control humidity. Where water intrudes, drainage and a
            sump pump are added. The result is a dry, sealed space that stops
            moisture at the source. For a full cost breakdown, see our{" "}
            <Link href="/cost/crawl-space-encapsulation-cost-charlotte">
              crawl space encapsulation cost in Charlotte
            </Link>{" "}
            guide.
          </p>
        </div>

        <RelatedLinks
          links={[
            { label: "Crawl space encapsulation cost", href: "/cost/crawl-space-encapsulation-cost-charlotte" },
            { label: "Why Charlotte's clay soil cracks foundations", href: "/learn/why-charlotte-clay-soil-cracks-foundations" },
            { label: "Vapor barrier vs. encapsulation", href: "/learn/vapor-barrier-vs-encapsulation" },
            { label: "Crawl space encapsulation services", href: "/crawl-space-encapsulation" },
          ]}
        />
      </article>

      <CTASection
        heading="Spotting the signs?"
        sub="Join the early-inspection list for first access to a free inspection when we open."
      />
    </>
  );
}
