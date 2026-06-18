import type { Metadata } from "next";
import { PageHero, CTASection } from "@/components/ui";
import { StrataRule } from "@/components/Strata";
import { JsonLd, localBusinessJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { site } from "@/lib/site.config";

export const metadata: Metadata = {
  title: "About — Honest Crawl Space & Foundation Repair",
  description:
    "Solid Ground is a locally-owned company launching soon to serve the greater Charlotte metro with crawl space encapsulation, waterproofing, and foundation repair. Straight answers, lasting work.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="About Solid Ground"
        title="Straight answers and lasting work — not pressure and guesswork."
        lead={`Solid Ground Crawl Space & Foundation Repair is a locally-owned company launching soon to serve the greater Charlotte metro with crawl space encapsulation, waterproofing, and foundation repair.`}
      />

      <article className="container-sg pb-4">
        <div className="prose-sg max-w-prose">
          <h2>The story</h2>
          <p>
            After seeing too many homeowners pay too
            much for work that didn&apos;t hold — or get scared into repairs they
            didn&apos;t need — we set out to build something different: a crawl
            space and foundation company that treats your home like its own and
            your trust like it&apos;s earned, not assumed.
          </p>
          <p>
            We&apos;re based right here in the greater Charlotte area. We know this
            region&apos;s clay soil, its humidity, and what it takes to keep a home
            solid from the ground up.
          </p>

          <h2>What we&apos;ll do</h2>
          <p>
            When we open, we&apos;ll offer crawl space encapsulation, vapor barriers,
            dehumidification, waterproofing and drainage, foundation crack repair,
            bowing-wall stabilization, and settlement repair — across{" "}
            {site.serviceAreas.join(", ")}.
          </p>

          <h2>Why we&apos;re sharing free guides now</h2>
          <p>
            We&apos;re not open yet — and rather than put up a &ldquo;coming
            soon&rdquo; sign, we decided to be useful. Everything on this site is
            here to help you understand your home, what repairs really cost, and
            how to spot a problem early. No gate, no pitch. When you&apos;re ready
            and we&apos;re open, we&apos;ll be here.
          </p>

          <h2>The promise</h2>
          <ul>
            <li>Clear, upfront pricing — no surprises.</li>
            <li>Honest assessments — we&apos;ll tell you if you don&apos;t need the work.</li>
            <li>Repairs built for Charlotte&apos;s soil and climate.</li>
            <li>Workmanship we stand behind, in writing.</li>
          </ul>
        </div>
      </article>

      <CTASection
        heading="When we're ready and you're ready, we'll be here."
        sub="Join the early-inspection list for first access when we open."
      />
    </>
  );
}
