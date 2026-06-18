/**
 * ───────────────────────────────────────────────────────────────────────────
 *  SOLID GROUND — SITE CONFIGURATION
 * ───────────────────────────────────────────────────────────────────────────
 *  This is the ONE file you edit to make the site real.
 *  Replace every value wrapped in [BRACKETS] with your actual information,
 *  then keep it consistent everywhere (Google Business Profile, etc.).
 *
 *  After you deploy, also update `siteUrl` to your real domain.
 * ───────────────────────────────────────────────────────────────────────────
 */

export const site = {
  // The exact, identical business name string used everywhere (NAP consistency).
  name: "Solid Ground Crawl Space & Foundation Repair",
  shortName: "Solid Ground",

  // Your live domain once deployed (no trailing slash). Used for canonical URLs,
  // sitemap, structured data. Leave the vercel.app URL until your domain is live.
   siteUrl: "https://solidgroundcs.com",
  // ── Launch ────────────────────────────────────────────────────────────────
  // Pick your real target season/quarter and keep it identical everywhere.
  launchSeason: "Launching Soon",

  // ── Founder (About page) ────────────────────────────────────────────────────
  founderName: "[Your Name]",

  // ── Contact / NAP ───────────────────────────────────────────────────────────
  // These appear in the footer on every page — the identical string is what
  // search engines reward. Replace the placeholders.
  phone: "",
  phoneHref: "tel:+1-000-000-0000", // e.g. tel:+1-704-555-0199
  email: "",
  emailHref: "mailto:hello@example.com", // e.g. mailto:hello@solidgroundcharlotte.com

  // Region served — kept generic on purpose (no physical storefront required).
  regionLabel: "Serving the Greater Charlotte Metro, NC",
  city: "Charlotte",
  state: "NC",

  // Towns served — used in copy and structured data. Edit to match reality.
  serviceAreas: [
    "Charlotte",
    "Concord",
    "Gastonia",
    "Huntersville",
    "Matthews",
    "Mooresville",
    "Monroe",
    "Indian Trail",
    "Waxhaw",
  ],

  // ── Early-inspection form ─────────────────────────────────────────────────
  // OPTIONAL: paste a webhook/form-endpoint URL (Formspree, Zapier, Make, your
  // CRM, etc.). The API route at /api/early-inspection will forward submissions
  // there. If you leave this blank, submissions are just logged on the server
  // and the form still shows a success message (good for testing pre-launch).
  formForwardUrl: "", // e.g. "https://formspree.io/f/xxxxxxx"
} as const;

// The footer NAP string — identical everywhere by design.
export const napString = `${site.name} · ${site.regionLabel}`;

export type SiteConfig = typeof site;
