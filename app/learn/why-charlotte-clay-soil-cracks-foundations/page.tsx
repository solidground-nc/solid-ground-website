import type { Metadata } from "next";
import Link from "next/link";
import { CTASection, RelatedLinks } from "@/components/ui";
import { JsonLd, faqJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Why Charlotte's Clay Soil Cracks Foundations",
  description:
    "Charlotte sits on expansive clay that swells when wet and shrinks when dry, putting constant pressure on foundations. Here's how the damage shows up — and what you can do about it.",
  alternates: { canonical: "/learn/why-charlotte-clay-soil-cracks-foundations" },
};

const faqs = [
  {
    question: "Why does Charlotte's clay soil crack foundations?",
    answer:
      "Charlotte sits on expansive clay soil that swells when it absorbs water and shrinks when it dries out. This constant expand-and-contract cycle puts uneven pressure on a home's foundation, and over time that movement causes cracks, settling, sticking doors, and uneven floors. The Piedmont region's red clay is especially prone to this.",
  },
];

export default function ClaySoilPage() {
  return (
    <>
      <JsonLd
        data={[
          faqJsonLd(faqs),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Learn", path: "/learn" },
            { name: "Why clay soil cracks foundations", path: "/learn/why-charlotte-clay-soil-cracks-foundations" },
          ]),
        ]}
      />

      <header className="container-sg pt-14 pb-8 sm:pt-20">
        <p className="eyebrow">Learn · Foundations</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-[1.05] text-bedrock sm:text-5xl">
          Why does Charlotte&apos;s clay soil crack foundations?
        </h1>
      </header>

      <section className="container-sg">
        <div className="answer-box max-w-3xl">
          <p className="text-lg leading-relaxed text-bedrock/90 sm:text-xl">
            Charlotte sits on expansive clay soil that swells when it absorbs water
            and shrinks when it dries out. This constant expand-and-contract cycle
            puts uneven pressure on a home&apos;s foundation, and over time that
            movement causes cracks, settling, sticking doors, and uneven floors.
            The Piedmont region&apos;s red clay is especially prone to this, which
            is why foundation and crawl space problems are so common across the
            greater Charlotte metro.
          </p>
        </div>
      </section>

      <article className="container-sg pt-12">
        <div className="prose-sg max-w-prose">
          <h2>What &ldquo;expansive&rdquo; clay actually means</h2>
          <p>
            Not all soil moves the same way. Sandy soil drains fast and stays
            relatively stable. Clay is different: its particles are tiny and
            tightly packed, so they hold water and physically change volume with
            moisture. After heavy Carolina rain, the clay under your home swells
            and pushes up. During a dry summer stretch, it shrinks and pulls away.
            Your foundation is caught in the middle of that movement, season after
            season.
          </p>

          <h2>How the damage shows up</h2>
          <p>
            Clay-driven movement rarely announces itself all at once. It builds
            gradually, and the early signs are easy to miss:
          </p>
          <ul>
            <li>Stair-step cracks in brick or block walls.</li>
            <li>Doors and windows that suddenly stick or won&apos;t latch.</li>
            <li>Floors that slope, bounce, or feel uneven.</li>
            <li>Gaps opening up around window and door frames.</li>
            <li>Cracks in drywall, especially above doorways.</li>
            <li>A damp or musty crawl space as moisture moves through the soil.</li>
          </ul>

          <h2>Why it matters for your crawl space too</h2>
          <p>
            The same wet clay that pressures your foundation also pushes moisture
            up into your crawl space. That&apos;s why foundation movement and crawl
            space humidity often show up together in Charlotte homes — they share a
            root cause. Addressing the moisture (through{" "}
            <Link href="/crawl-space-encapsulation">encapsulation and drainage</Link>
            ) and the movement (through{" "}
            <Link href="/foundation-repair">foundation repair</Link>) is often part
            of the same conversation. You can read what each solution costs on our{" "}
            <Link href="/cost/crawl-space-encapsulation-cost-charlotte">
              crawl space encapsulation cost
            </Link>{" "}
            and{" "}
            <Link href="/cost/foundation-repair-cost-charlotte">
              foundation repair cost
            </Link>{" "}
            guides.
          </p>

          <h2>What you can do about it</h2>
          <p>
            You can&apos;t change Charlotte&apos;s soil, but you can manage how it
            affects your home. Controlling the moisture around and under your
            foundation is the key: good drainage and gutter extensions move water
            away, crawl space encapsulation stops ground moisture from rising, and
            catching foundation movement early keeps a minor crack from becoming a
            major piering job. The earlier you act, the cheaper and simpler the fix.
          </p>
        </div>

        <RelatedLinks
          links={[
            { label: "Foundation repair cost in Charlotte", href: "/cost/foundation-repair-cost-charlotte" },
            { label: "Crawl space encapsulation cost", href: "/cost/crawl-space-encapsulation-cost-charlotte" },
            { label: "7 signs your crawl space needs encapsulation", href: "/learn/signs-crawl-space-needs-encapsulation" },
            { label: "Foundation repair services", href: "/foundation-repair" },
          ]}
        />
      </article>

      <CTASection
        heading="Learning about your home?"
        sub="Join the early-inspection list for first access when we open."
      />
    </>
  );
}
