import Link from "next/link";
import { StrataMark, StrataRule } from "./Strata";
import { site } from "@/lib/site.config";

export default function Footer() {
  return (
    <footer className="mt-24 bg-bedrock text-paper">
      <StrataRule />
      <div className="container-sg py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand + NAP */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <StrataMark className="h-9 w-9" />
              <span className="font-display text-lg font-bold">Solid Ground</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/70">
              Honest crawl space encapsulation and foundation repair, built for
              Charlotte&apos;s clay soil and humidity.
            </p>
          </div>

          {/* Services */}
          <div>
            <h2 className="eyebrow-muted !text-paper/50">Services</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-paper/80">
              <li><Link href="/crawl-space-encapsulation" className="hover:text-clay-soft">Crawl Space Encapsulation</Link></li>
              <li><Link href="/foundation-repair" className="hover:text-clay-soft">Foundation Repair</Link></li>
              <li><Link href="/cost/crawl-space-encapsulation-cost-charlotte" className="hover:text-clay-soft">Encapsulation Cost</Link></li>
              <li><Link href="/cost/foundation-repair-cost-charlotte" className="hover:text-clay-soft">Foundation Repair Cost</Link></li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h2 className="eyebrow-muted !text-paper/50">Learn</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-paper/80">
              <li><Link href="/learn/why-charlotte-clay-soil-cracks-foundations" className="hover:text-clay-soft">Why clay soil cracks foundations</Link></li>
              <li><Link href="/learn/signs-crawl-space-needs-encapsulation" className="hover:text-clay-soft">7 signs you need encapsulation</Link></li>
              <li><Link href="/learn/vapor-barrier-vs-encapsulation" className="hover:text-clay-soft">Vapor barrier vs. encapsulation</Link></li>
              <li><Link href="/learn/selling-home-wet-crawl-space-mecklenburg" className="hover:text-clay-soft">Selling with a wet crawl space</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="eyebrow-muted !text-paper/50">Get in touch</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-paper/80">
              <li className="text-paper/60">{site.regionLabel}</li>
            </ul>
            <Link href="/#join" className="btn-on-dark mt-6 !py-3 text-sm">
              Join the list →
            </Link>
          </div>
        </div>

        {/* The identical NAP string — appears on every page by design. */}
        <div className="mt-12 border-t border-line-dark pt-6">
          <p className="text-xs leading-relaxed text-paper/55">
            {site.name} · {site.regionLabel}
          </p>
          <p className="mt-2 text-xs text-paper/40">
            © {new Date().getFullYear()} {site.name}. Launching soon.
          </p>
        </div>
      </div>
    </footer>
  );
}
