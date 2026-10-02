import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { nav, site, areas } from "@/lib/site";
import { Logo } from "./Header";
import { Button } from "./Button";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      {/* Stay connected band */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <svg viewBox="0 0 24 48" className="mt-1 h-12 w-6 shrink-0 text-leaf" aria-hidden>
              <path d="M3 3l16 21L3 45" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>
              <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">Stay connected with our work</h2>
              <p className="mt-2 max-w-xl text-cream/70">
                Follow our journey in Bahi, Dodoma — reach out on WhatsApp or email and we&apos;ll keep you updated.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={site.whatsapp} tone="leaf" external>
              Chat on WhatsApp
            </Button>
            <Button href={`mailto:${site.email}`} tone="cream" external>
              Email Us
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1.5fr]">
        <div>
          <Logo />
          <p className="mt-6 max-w-sm text-cream/70">
            Restoring hope, transforming lives and building a brighter future for generations to come.
          </p>
          <p className="mt-4 font-script text-2xl text-sun">{site.tagline}</p>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-sky">Explore</h3>
          <ul className="mt-5 space-y-3">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-cream/80 transition-colors hover:text-sun">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-sky">Our Work</h3>
          <ul className="mt-5 space-y-3">
            {areas.map((a) => (
              <li key={a.slug}>
                <Link href={`/what-we-do#${a.slug}`} className="text-cream/80 transition-colors hover:text-sun">
                  {a.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-sky">Get in Touch</h3>
          <ul className="mt-5 space-y-4 text-cream/85">
            <li>
              <a href={site.phoneHref} className="flex items-start gap-3 hover:text-sun">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-sun" /> {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-start gap-3 text-[15px] [overflow-wrap:anywhere] hover:text-sun">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-sun" /> {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-sun" /> {site.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-sm text-cream/60 sm:flex-row sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>A non-profit, humanitarian organization · Bahi, Dodoma</p>
        </div>
      </div>

      {/* colour bar */}
      <div className="flex h-2" aria-hidden>
        <span className="flex-1 bg-sky" />
        <span className="flex-1 bg-leaf" />
        <span className="flex-1 bg-sun" />
        <span className="flex-1 bg-clay" />
        <span className="flex-1 bg-plum" />
      </div>
    </footer>
  );
}
