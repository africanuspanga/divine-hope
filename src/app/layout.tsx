import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Caveat, Figtree } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Restoring Hope, Transforming Lives`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Divine Hope Foundation",
    "NGO Tanzania",
    "Dodoma",
    "Bahi",
    "non-profit",
    "child protection",
    "education",
    "women empowerment",
    "humanitarian",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — Restoring Hope, Transforming Lives`,
    description: site.description,
    images: [{ url: "/images/hero-girls.jpg", width: 2000, height: 1600, alt: "Young girls in Tanzania" }],
    locale: "en_TZ",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b2b2c",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} ${figtree.variable} ${caveat.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col font-sans">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only z-[60] bg-sun px-4 py-2 font-bold text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
