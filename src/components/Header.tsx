"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { Button } from "./Button";

export function Logo({ light = true }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name} — home`}>
      <span className="relative grid h-12 w-12 place-items-center rounded-full bg-white p-0.5 shadow-sm transition-transform duration-500 group-hover:rotate-[-8deg] sm:h-14 sm:w-14">
        <Image src="/images/logo.png" alt="" width={56} height={60} className="h-full w-full object-contain" priority />
      </span>
      <span className={`whitespace-nowrap leading-none ${light ? "text-cream" : "text-ink"}`}>
        <span className="block font-display text-lg font-extrabold tracking-tight sm:text-xl">Divine Hope</span>
        <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.32em] opacity-80">Foundation</span>
      </span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu after navigating
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled || open ? "bg-ink/95 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)] backdrop-blur" : "bg-ink"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative rounded-md px-3.5 py-2 font-display text-[15px] font-semibold transition-colors ${
                      active ? "text-sun" : "text-cream/90 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-3.5 -bottom-0.5 h-[3px] origin-left rounded-full bg-sun transition-transform duration-300 ${
                        active ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden sm:block">
            <Button href="/get-involved#give" tone="sun" size="sm">
              Give Hope
            </Button>
          </span>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-md text-cream hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="h-[calc(100dvh-5rem)] overflow-y-auto border-t border-white/10 bg-ink px-5 pb-10 pt-6 lg:hidden"
      >
        <ul className="space-y-1">
          {[{ href: "/", label: "Home" }, ...nav].map((item, i) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center justify-between border-b border-white/10 py-4 font-display text-2xl font-bold ${
                  pathname === item.href ? "text-sun" : "text-cream"
                }`}
              >
                {item.label}
                <span className={`h-3 w-3 rotate-12 ${["bg-sky", "bg-leaf", "bg-clay", "bg-sun", "bg-plum", "bg-sky"][i]}`} />
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button href="/get-involved#give" tone="sun" size="lg">
            Give Hope
          </Button>
        </div>
        <div className="mt-10 space-y-2 text-cream/80">
          <a href={site.phoneHref} className="block">{site.phone}</a>
          <a href={`mailto:${site.email}`} className="block break-all">{site.email}</a>
          <p>{site.location}</p>
        </div>
      </div>
    </header>
  );
}
