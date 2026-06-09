import type { Metadata } from "next";
import Link from "next/link";
import { CTASection, RelatedLinks } from "@/components/ui";
import { JsonLd, faqJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Selling a Home With a Wet Crawl Space in Mecklenburg County",
  description:
    "Yes, you can sell a home with a wet crawl space — but it almost always surfaces at inspection. Your three options as a seller, and why fixing it first usually wins.",
  alternates: { canonical: "/learn/selling-home-wet-crawl-space-mecklenburg" },
};

const faqs = [
  {
    question: "Can you sell a house with a wet crawl space?",
    answer:
      "Yes, you can sell a home with a wet crawl space, but it will almost always come up during the buyer's inspection and can stall or sink the deal. In the Charlotte area, inspectors routinely flag crawl space moisture, mold, and standing water, and buyers often request repairs or a price reduction before closing. Addressing it before listing — or being upfront and pricing it in — is usually the smoother path to a sale.",
  },
];

const options = [
  {
    title: "Fix it before listing",
    body: "Encapsulation done ahead of time becomes a selling point (“newly encapsulated, transferable warranty”) instead of a liability, and removes a major inspection objection.",
    tone: "best",
  },
  {
    title: "Disclose and price it in",
    body: "Be upfront about the condition and set the price accordingly. Honest, but you typically give up more than the repair would have cost.",
    tone: "ok",
  },
  {
    title: "Wait for the inspection and negotiate",
    body: "The weakest position — you're reacting on the buyer's timeline, and credits requested after inspection usually exceed the actual repair cost.",
    tone: "weak",
  },
];

const toneStyles: Record<string, string> = {
  best: "border-pine bg-pine-tint",
  ok: "border-line bg-card",
  weak: "border-clay/40 bg-card",
};

export default function SellingPage() {
  return (
    <>
      <JsonLd
        data={[
          faqJsonLd(faqs),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Learn", path: "/learn" },
            { name: "Selling with a wet crawl space", path: "/learn/selling-home-wet-crawl-space-mecklenburg" },
          ]),
        ]}
      />

      <header className="container-sg pt-14 pb-8 sm:pt-20">
        <p className="eyebrow">Learn · Selling</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-[1.05] text-bedrock sm:text-5xl">
          Can you sell a house with a wet crawl space?
        </h1>
      </header>

      <section className="container-sg">
        <div className="answer-box max-w-3xl">
          <p className="text-lg leading-relaxed text-bedrock/90 sm:text-xl">
            Yes, you can sell a home with a wet crawl space, but it will almost
            always come up during the buyer&apos;s inspection and can stall or sink
            the deal. In the Charlotte area, home inspectors routinely flag crawl
            space moisture, mold, and standing water, and buyers often request
            repairs or a price reduction before closing. Addressing it before
            listing — or being upfront and pricing it in — is usually the smoother
            path to a sale.
          </p>
        </div>
      </section>

      <article className="container-sg pt-12">
        <div className="prose-sg max-w-prose">
          <h2>Why it matters at closing</h2>
          <p>
            A wet crawl space is one of the most common issues flagged in
            Charlotte-area home inspections. Once it&apos;s in the inspection
            report, you have limited options: fix it on a rushed timeline, offer a
            credit, drop the price, or watch the buyer walk. Because the discovery
            happens late in the process — often after you&apos;re emotionally and
            financially committed to the move — it has outsized power to derail the
            deal or compress your negotiating position.
          </p>

          <h2>Your options as a seller</h2>
          <p>
            If you know your crawl space has moisture, you generally have three
            paths:
          </p>
        </div>

        <div className="mt-6 grid max-w-prose gap-4">
          {options.map((o) => (
            <div key={o.title} className={`rounded-xl border p-6 ${toneStyles[o.tone]}`}>
              <h3 className="font-display text-lg font-bold text-bedrock">{o.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-bedrock/75">{o.body}</p>
            </div>
          ))}
        </div>

        <div className="prose-sg mt-12 max-w-prose">
          <h2>Why fixing it first usually wins</h2>
          <p>
            Buyers fear the unknown. &ldquo;Wet crawl space&rdquo; on an inspection
            report reads as &ldquo;mold, rot, and an expensive mystery.&rdquo; A
            completed encapsulation with documentation reads as
            &ldquo;handled.&rdquo; A transferable warranty is especially powerful:
            it tells the buyer the problem is solved and backed in writing. In a
            clay-soil region where every buyer&apos;s inspector knows to check the
            crawl space, walking in with it already done removes a fight before it
            starts.
          </p>

          <h2>Understand the cost before you decide</h2>
          <p>
            Whether fixing first makes sense depends on the numbers. Encapsulation
            in the Charlotte metro typically runs $7,000–$15,000 — see our{" "}
            <Link href="/cost/crawl-space-encapsulation-cost-charlotte">
              crawl space encapsulation cost
            </Link>{" "}
            guide — and post-inspection credits often run higher than that because
            buyers pad for uncertainty. If the moisture is tied to foundation
            movement, our{" "}
            <Link href="/learn/why-charlotte-clay-soil-cracks-foundations">
              why Charlotte&apos;s clay soil cracks foundations
            </Link>{" "}
            guide explains why the two problems often travel together.
          </p>
        </div>

        <RelatedLinks
          links={[
            { label: "Crawl space encapsulation cost", href: "/cost/crawl-space-encapsulation-cost-charlotte" },
            { label: "Why Charlotte's clay soil cracks foundations", href: "/learn/why-charlotte-clay-soil-cracks-foundations" },
            { label: "7 signs your crawl space needs encapsulation", href: "/learn/signs-crawl-space-needs-encapsulation" },
            { label: "Crawl space encapsulation services", href: "/crawl-space-encapsulation" },
          ]}
        />
      </article>

      <CTASection
        heading="Selling soon?"
        sub="Join the early-inspection list for first access when we open."
      />
    </>
  );
}
