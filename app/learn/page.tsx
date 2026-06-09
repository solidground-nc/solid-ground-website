import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, CTASection } from "@/components/ui";

export const metadata: Metadata = {
  title: "Learn — Crawl Space & Foundation Guides for Charlotte Homeowners",
  description:
    "Plain-English guides on crawl space and foundation costs, warning signs, and how to tell a real problem from a sales pitch — written for Charlotte-area homeowners.",
  alternates: { canonical: "/learn" },
};

const articles = [
  {
    title: "Why Charlotte's clay soil cracks foundations",
    desc: "The expand-and-contract cycle behind most local foundation problems — and what you can do about it.",
    href: "/learn/why-charlotte-clay-soil-cracks-foundations",
    tag: "Foundations",
  },
  {
    title: "7 signs your crawl space needs encapsulation",
    desc: "Musty smells, high humidity, mold, sagging floors, pests, rising bills — the symptoms that point below.",
    href: "/learn/signs-crawl-space-needs-encapsulation",
    tag: "Crawl Spaces",
  },
  {
    title: "Vapor barrier vs. encapsulation: what's the difference?",
    desc: "One is a single component; the other is the whole system. Which one your home actually needs.",
    href: "/learn/vapor-barrier-vs-encapsulation",
    tag: "Crawl Spaces",
  },
  {
    title: "Selling a home with a wet crawl space in Mecklenburg County",
    desc: "Why it surfaces at inspection, your three options as a seller, and why fixing it first usually wins.",
    href: "/learn/selling-home-wet-crawl-space-mecklenburg",
    tag: "Selling",
  },
];

const costs = [
  { title: "Crawl space encapsulation cost in Charlotte", href: "/cost/crawl-space-encapsulation-cost-charlotte" },
  { title: "Foundation repair cost in Charlotte", href: "/cost/foundation-repair-cost-charlotte" },
];

export default function LearnIndex() {
  return (
    <>
      <PageHero
        eyebrow="The Learn Center"
        title="Understand your home before anyone tries to sell you something."
        lead="We're not open yet — so instead of a “coming soon” sign, here's everything we know. No gate, no pitch."
      />

      <section className="container-sg">
        <h2 className="eyebrow">Guides</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {articles.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="group flex flex-col rounded-xl border border-line bg-card p-6 shadow-card transition hover:-translate-y-1 hover:border-pine hover:shadow-lift"
            >
              <span className="eyebrow-muted">{a.tag}</span>
              <h3 className="mt-3 text-xl font-bold leading-snug text-bedrock">
                {a.title}
              </h3>
              <p className="mt-2 grow text-base leading-relaxed text-bedrock/70">
                {a.desc}
              </p>
              <span className="mt-5 font-display text-sm font-semibold text-pine">
                Read the guide{" "}
                <span className="inline-block transition group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>

        <h2 className="eyebrow mt-14">Cost guides</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {costs.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group flex items-center justify-between gap-4 rounded-xl border border-line bg-card px-6 py-6 transition hover:border-pine hover:bg-pine-tint"
            >
              <span className="font-display text-lg font-bold text-bedrock">{c.title}</span>
              <span className="shrink-0 text-pine transition group-hover:translate-x-1">→</span>
            </Link>
          ))}
        </div>
      </section>

      <CTASection
        heading="When you're ready and we're open, we'll be here."
        sub="Join the early-inspection list for first access when we open."
      />
    </>
  );
}
