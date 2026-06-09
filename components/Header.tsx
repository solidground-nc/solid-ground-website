"use client";

import Link from "next/link";
import { useState } from "react";
import { StrataMark } from "./Strata";
import { site } from "@/lib/site.config";

const nav = [
  { label: "Crawl Spaces", href: "/crawl-space-encapsulation" },
  { label: "Foundations", href: "/foundation-repair" },
  { label: "Learn", href: "/learn" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/85 backdrop-blur-md">
      <div className="container-sg flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label={`${site.shortName} — home`}
        >
          <StrataMark className="h-9 w-9 sm:h-10 sm:w-10" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight text-bedrock sm:text-xl">
              Solid Ground
            </span>
            <span className="font-display text-[10px] font-semibold uppercase tracking-[0.16em] text-stone">
              Crawl Space &amp; Foundation
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-sm font-semibold tracking-tight text-bedrock/80 transition hover:text-pine"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/#join" className="btn-primary !px-5 !py-2.5 text-sm">
            Join the list
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-5 bg-bedrock transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-bedrock transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-bedrock transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-line bg-paper lg:hidden" aria-label="Mobile">
          <div className="container-sg flex flex-col py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/60 py-3 font-display text-base font-semibold text-bedrock"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#join"
              onClick={() => setOpen(false)}
              className="btn-primary mt-4"
            >
              Join the early-inspection list
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
