import type { MetadataRoute } from "next";
import { site } from "@/lib/site.config";
import { locations } from "@/lib/locations";

/**
 * All indexable routes. When you add a page, add its path here so search
 * engines discover it. Paths are relative to the site root.
 */
const routes = [
  "",
  "/about",
  "/crawl-space-encapsulation",
  "/foundation-repair",
  "/learn",
  "/learn/why-charlotte-clay-soil-cracks-foundations",
  "/learn/signs-crawl-space-needs-encapsulation",
  "/learn/vapor-barrier-vs-encapsulation",
  "/learn/selling-home-wet-crawl-space-mecklenburg",
  "/cost/crawl-space-encapsulation-cost-charlotte",
  "/cost/foundation-repair-cost-charlotte",
  "/service-areas",
  ...locations.map((l) => `/service-areas/${l.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((path) => ({
    url: `${site.siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/learn/") || path.startsWith("/cost/") ? 0.6 : 0.8,
  }));
}
