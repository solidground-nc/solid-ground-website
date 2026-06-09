# Solid Ground — Crawl Space & Foundation Repair (Charlotte, NC)

A fast, SEO-first marketing site for a pre-launch Charlotte crawl space &
foundation repair company. Built with **Next.js 14 (App Router)**, **TypeScript**,
and **Tailwind CSS**. Designed to be deployed free on **Vercel** with the code
hosted on **GitHub**.

The site leads with education (the "why" behind Charlotte's clay-soil foundation
problems) and collects early-interest signups ahead of launch — no pushy sales,
no alarm-red scare tactics.

---

## 1. The one file you edit first

Open **`lib/site.config.ts`** and replace everything in `[BRACKETS]`:

| Field | What to put |
|---|---|
| `launchSeason` | Your real launch target, e.g. `"Spring 2027"` |
| `founderName` | Your name (shown on the About page) |
| `phone` / `phoneHref` | Your number — `phoneHref` must look like `tel:+1-704-555-0199` |
| `email` / `emailHref` | Your email — `emailHref` like `mailto:you@domain.com` |
| `siteUrl` | Your live domain once you have one (keep the default until then) |
| `serviceAreas` | The towns you actually serve |
| `formForwardUrl` | *(optional)* a Formspree/Zapier/webhook URL to receive signups |

A few pages also have inline `[BRACKET]` notes (About page bio, the dollar ranges
on the two **cost** pages). Search the project for `[` to find them, or just read
through each page. **Confirm the cost ranges with your own pricing before you
publish them** — they're realistic Charlotte-market placeholders, not quotes.

---

## 2. Run it on your computer (optional but recommended)

You need [Node.js 18.18+](https://nodejs.org) (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000 . Edit any file and the page reloads automatically.

To check the production build before deploying:

```bash
npm run build
npm start
```

---

## 3. Put the code on GitHub

If you don't have `git`, install it from https://git-scm.com , and create a free
account at https://github.com .

From inside this project folder:

```bash
git init
git add .
git commit -m "Initial commit: Solid Ground website"
git branch -M main
```

Create a new **empty** repository on GitHub (no README, no .gitignore — this
project already has them). Then connect and push (replace the URL with yours):

```bash
git remote add origin https://github.com/YOUR-USERNAME/solid-ground.git
git push -u origin main
```

---

## 4. Deploy on Vercel (free)

1. Go to https://vercel.com and sign up **with your GitHub account**.
2. Click **Add New… → Project**.
3. Pick your `solid-ground` repository and click **Import**.
4. Vercel auto-detects Next.js — you don't need to change any settings.
   Just click **Deploy**.
5. After ~1 minute you'll get a live URL like `solid-ground-xxxx.vercel.app`.

Every time you `git push` to `main`, Vercel automatically rebuilds and redeploys.

### (Optional) form submissions environment

If you set `formForwardUrl` in `lib/site.config.ts`, that's all you need — no
environment variables required. If you leave it blank, signups are written to
the Vercel function logs (Project → **Logs**) so nothing is lost while you test.

---

## 5. Connect your domain (when ready)

1. Buy a domain (Namecheap, Cloudflare, Google Domains, etc.).
2. In Vercel: Project → **Settings → Domains → Add**, type your domain, and
   follow the DNS instructions Vercel gives you.
3. Update `siteUrl` in `lib/site.config.ts` to your real domain, commit, and push
   so canonical URLs, the sitemap, and structured data all point to the right place.

---

## What's in here

```
app/
  page.tsx                              Homepage (hero, services, signup)
  about/                                About / founder story
  crawl-space-encapsulation/            Service hub  (silo)
  foundation-repair/                    Service hub  (silo)
  learn/                                Educational guides index + 4 guides
  cost/                                 Two "cost in Charlotte" pages
  api/early-inspection/route.ts         Receives signup form posts
  sitemap.ts / robots.ts                Auto-generated SEO files
  layout.tsx / globals.css              Shell, fonts, design tokens
components/                             Header, Footer, form, hero art, UI bits
lib/
  site.config.ts                        ← EDIT THIS
  jsonld.tsx                            Structured-data (SEO) helpers
public/og.png                           Social-share preview image
tailwind.config.ts                      "Strata" color + type design system
```

### SEO built in
- Per-page titles, descriptions, and canonical URLs
- Open Graph / Twitter card image
- `LocalBusiness`, `FAQPage`, and `BreadcrumbList` structured data
- Auto `sitemap.xml` and `robots.txt`
- Hub-and-spoke internal linking between services, guides, and cost pages

---

## Notes for whoever maintains this

- Fonts load via `<link>` to Google Fonts in `app/layout.tsx` (no build-time
  font fetch needed).
- ESLint is not run during `next build` (`eslint.ignoreDuringBuilds`) so a stray
  lint warning never blocks a deploy. Run `npm run lint` yourself anytime.
- When you add a page, add its path to `app/sitemap.ts`.
