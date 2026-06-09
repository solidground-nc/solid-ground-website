import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site.config";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.name} | Greater Charlotte Metro`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "Honest, no-pressure crawl space encapsulation and foundation repair for the greater Charlotte metro. Clear pricing, lasting work, built for Carolina clay soil. Opening soon — join the early-inspection list.",
  keywords: [
    "crawl space encapsulation Charlotte",
    "foundation repair Charlotte",
    "crawl space waterproofing",
    "vapor barrier",
    "Charlotte clay soil foundation",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.siteUrl,
    siteName: site.name,
    title: `${site.name} | Greater Charlotte Metro`,
    description:
      "Honest crawl space encapsulation and foundation repair for the Charlotte metro. Opening soon.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport = {
  themeColor: "#1A2229",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Display: Archivo (structural). Body: Newsreader (readable serif). */}
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-pine focus:px-4 focus:py-2 focus:font-display focus:text-paper"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
