import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { HandCoins, Handshake, Users } from "lucide-react";
import { areas, team } from "@/lib/site";
import { accentBg, accentFg, accentText } from "@/lib/accent";
import { AreaIcon } from "./AreaIcon";
import { Button } from "./Button";
import { Reveal } from "./Reveal";

const tilts = ["rotate-[-1deg]", "rotate-[0.8deg]", "rotate-[-0.5deg]", "rotate-[1.2deg]", "rotate-[-1.2deg]", "rotate-[0.6deg]"];

export function AreasGrid({ heading = true }: { heading?: boolean }) {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-cream sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {heading && (
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-script text-3xl text-sky">What we do</p>
            <h2 className="mt-1 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">Areas of Work</h2>
            <p className="mt-4 text-lg text-cream/75">
              Six ways we walk alongside children, youth, women and families — so every person can live with dignity
              and reach their full potential.
            </p>
          </Reveal>
        )}

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a, i) => (
            <Reveal as="li" key={a.slug} delay={(i % 3) * 90}>
              <Link
                href={`/what-we-do#${a.slug}`}
                className={`cut-c group flex h-full flex-col bg-cream p-7 text-ink transition-transform duration-300 hover:-translate-y-1.5 hover:rotate-0 ${tilts[i]}`}
              >
                <span className={`grid h-14 w-14 place-items-center ${accentBg[a.accent]} ${accentFg[a.accent]} cut-b`}>
                  <AreaIcon name={a.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold tracking-tight">{a.title}</h3>
                <p className="mt-2 flex-1 text-ink/70">{a.summary}</p>
                <span className={`mt-6 inline-flex items-center gap-1.5 text-sm font-bold ${accentText[a.accent]}`}>
                  Learn more
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden>
                    ›
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-10">
          <div className="cut-a flex flex-col gap-4 bg-sky px-6 py-5 text-ink sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display text-lg font-bold">
              Leadership, ethical values and sustainable development run through everything we do.
            </p>
            <Button href="/about" tone="clay" size="sm" className="shrink-0">
              Our Approach
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const avatarTilt = ["rotate-[-4deg]", "rotate-[3deg]", "rotate-[-2deg]", "rotate-[4deg]"];

export function TeamGrid() {
  return (
    <section className="bg-paper py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="font-script text-3xl text-clay">The people behind the hope</p>
          <h2 className="mt-1 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">Meet Our Team</h2>
          <p className="mt-4 text-lg text-ink/70">
            A dedicated, locally rooted team serving the communities of Bahi, Dodoma with compassion and integrity.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal as="li" key={m.name} delay={i * 90}>
              <div className="group h-full bg-white p-6 shadow-[0_1px_0_rgba(11,43,44,0.08),0_20px_40px_-28px_rgba(11,43,44,0.4)]">
                <div
                  className={`cut-b grid aspect-[4/3] place-items-center ${accentBg[m.accent]} ${avatarTilt[i]} transition-transform duration-500 group-hover:rotate-0`}
                >
                  <span className={`font-display text-6xl font-extrabold tracking-tight ${accentFg[m.accent]}`}>
                    {m.initials}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-lg font-bold leading-snug tracking-tight">{m.name}</h3>
                <p className="mt-1 font-script text-2xl text-teal">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function GetInvolvedCTA() {
  const ways = [
    {
      icon: HandCoins,
      title: "Give",
      text: "Your gift provides school support, care and relief to families who need it most.",
      href: "/get-involved#give",
      bg: "bg-sun",
    },
    {
      icon: Users,
      title: "Volunteer",
      text: "Share your time and skills with children, youth and women in Bahi.",
      href: "/get-involved#volunteer",
      bg: "bg-sky",
    },
    {
      icon: Handshake,
      title: "Partner",
      text: "Churches, businesses and organizations — let's build lasting change together.",
      href: "/get-involved#partner",
      bg: "bg-leaf",
    },
  ];
  return (
    <section className="relative overflow-hidden bg-cream py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="grid items-end gap-6 md:grid-cols-[1.2fr_1fr]">
          <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
            Be part of a <span className="font-script font-bold text-clay">brighter</span> future
          </h2>
          <p className="text-lg text-ink/70">
            Hope grows when we work together. There is a place for everyone in this story — here&apos;s how you can
            join us.
          </p>
        </Reveal>
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {ways.map((w, i) => (
            <Reveal as="li" key={w.title} delay={i * 100}>
              <Link
                href={w.href}
                className={`cut-c group flex h-full flex-col p-8 text-ink transition-transform duration-300 hover:-translate-y-1.5 ${w.bg}`}
              >
                <w.icon className="h-10 w-10" strokeWidth={2} aria-hidden />
                <h3 className="mt-8 font-display text-3xl font-extrabold tracking-tight">{w.title}</h3>
                <p className="mt-3 flex-1 text-ink/80">{w.text}</p>
                <span className="mt-8 inline-flex items-center gap-2 font-display font-bold">
                  {w.title === "Give" ? "Give hope" : w.title === "Volunteer" ? "Join us" : "Partner with us"}
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden>
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function PhotoBand({ src, alt, children }: { src: string; alt: string; children: ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <Image src={src} alt={alt} fill sizes="100vw" className="-z-10 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/55 to-ink/10" />
      <div className="mx-auto flex min-h-[32rem] max-w-7xl items-end px-5 py-16 sm:px-8">{children}</div>
    </section>
  );
}
