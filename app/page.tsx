import Link from "next/link";
import { StrataScene, StrataRule } from "@/components/Strata";
import EarlyInspectionForm from "@/components/EarlyInspectionForm";
import { ServiceAreaStrip } from "@/components/ui";
import { JsonLd, localBusinessJsonLd } from "@/lib/jsonld";
import { site } from "@/lib/site.config";

const services = [
  {
    title: "Crawl Space Encapsulation & Repair",
    blurb: "Seal out moisture, mold, and humidity for good.",
    href: "/crawl-space-encapsulation",
    cta: "Learn how it works",
  },
  {
    title: "Foundation Repair",
    blurb: "Cracks, bowing walls, and settlement, solved at the source.",
    href: "/foundation-repair",
    cta: "Learn the signs",
  },
  {
    title: "Waterproofing & Drainage",
    blurb: "Keep water out and your home dry, year-round.",
    href: "/crawl-space-encapsulation",
    cta: "See your options",
  },
];

const guides = [
  {
    q: "What does crawl space encapsulation cost in Charlotte?",
    href: "/cost/crawl-space-encapsulation-cost-charlotte",
  },
  {
    q: "What does foundation repair cost in the Charlotte area?",
    href: "/cost/foundation-repair-cost-charlotte",
  },
  {
    q: "Why Charlotte's clay soil cracks foundations",
    href: "/learn/why-charlotte-clay-soil-cracks-foundations",
  },
  {
    q: "7 signs your crawl space needs encapsulation",
    href: "/learn/signs-crawl-space-needs-encapsulation",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="container-sg grid items-center gap-10 pt-10 pb-12 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-16">
        <div className="animate-rise-in">
          <p className="eyebrow">
            Opening {site.launchSeason} · Greater Charlotte Metro
          </p>
          <h1 className="mt-4 text-[2.6rem] font-extrabold leading-[1.02] text-bedrock sm:text-6xl">
            Charlotte&apos;s crawl space &amp; foundation experts.
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-bedrock/75">
            Solid Ground brings honest, no-pressure crawl space encapsulation and
            foundation repair to the greater Charlotte metro. We&apos;re putting the
            finishing touches on our launch — join the early-inspection list and be
            first to book when we open.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="#join" className="btn-primary-lg">
              Join the early-inspection list →
            </Link>
            <Link href="/learn" className="btn-ghost !py-4">
              Browse the free guides
            </Link>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <StrataScene className="h-auto w-full" />
        </div>
      </section>

      <StrataRule />

      {/* ── INTRO: answer-first entity + geography ───────────────────────── */}
      <section className="container-sg py-14 sm:py-16">
        <div className="answer-box max-w-3xl">
          <p className="text-lg leading-relaxed text-bedrock/90 sm:text-xl">
            <strong>{site.name}</strong> is a locally-owned crawl space and
            foundation company serving the greater Charlotte metro — including
            Concord, Gastonia, Huntersville, Matthews, Monroe, Indian Trail, and
            Waxhaw. We specialize in crawl space encapsulation, waterproofing,
            vapor barriers, foundation crack repair, and settlement repair built
            for the region&apos;s clay soil and humidity.
          </p>
        </div>
      </section>

      {/* ── WHY WE EXIST ──────────────────────────────────────────────────── */}
      <section className="container-sg py-4 sm:py-6">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div>
            <p className="eyebrow">Why we exist</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-bedrock sm:text-4xl">
              The work, done the way it should be done.
            </h2>
          </div>
          <div className="space-y-4 text-lg leading-relaxed text-bedrock/80">
            <p>
              Charlotte&apos;s red clay and Carolina humidity are hard on what&apos;s
              beneath your home. We started Solid Ground to do this work right:
              clear pricing, no scare tactics, and repairs that actually last.
            </p>
            <p>
              Until we open, we&apos;re sharing everything we know — free — so you can
              make smart decisions about your home right now.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICE PREVIEW ──────────────────────────────────────────────── */}
      <section className="container-sg py-14 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group flex flex-col justify-between rounded-xl border border-line bg-card p-6 shadow-card transition hover:-translate-y-1 hover:border-pine hover:shadow-lift"
            >
              <div>
                <h3 className="text-xl font-bold leading-snug text-bedrock">
                  {s.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-bedrock/70">
                  {s.blurb}
                </p>
              </div>
              <span className="mt-6 font-display text-sm font-semibold text-pine">
                {s.cta}{" "}
                <span className="inline-block transition group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <StrataRule />
      <ServiceAreaStrip />
      <StrataRule />

      {/* ── EDUCATIONAL HOOK ─────────────────────────────────────────────── */}
      <section className="container-sg py-14 sm:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">Start here</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-bedrock sm:text-4xl">
            Learning about crawl spaces and foundations?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-bedrock/75">
            We&apos;ve written plain-English guides on what things cost, what the
            warning signs are, and how to tell a real problem from a sales pitch.
          </p>
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {guides.map((g) => (
            <li key={g.href}>
              <Link
                href={g.href}
                className="group flex items-center justify-between gap-4 rounded-xl border border-line bg-card px-5 py-5 transition hover:border-pine hover:bg-pine-tint"
              >
                <span className="font-display text-base font-semibold leading-snug text-bedrock">
                  {g.q}
                </span>
                <span className="shrink-0 text-pine transition group-hover:translate-x-1">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ── JOIN (canonical form anchor) ─────────────────────────────────── */}
      <section id="join" className="scroll-mt-24">
        <StrataRule />
        <div className="bg-bedrock text-paper">
          <div className="container-sg grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center sm:py-20">
            <div>
              <p className="eyebrow !text-clay-soft">We open {site.launchSeason}</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                Want first access?
              </h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-paper/75">
                Join the early-inspection list — no obligation, no spam, just a
                heads-up when we&apos;re booking, plus first dibs on launch
                scheduling and a free inspection.
              </p>
            </div>
            <div className="rounded-2xl bg-paper p-2 sm:p-3">
              <EarlyInspectionForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
