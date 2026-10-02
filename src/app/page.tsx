import type { CSSProperties } from "react";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { PatchRing, SunBurst } from "@/components/SunBurst";
import { AreasGrid, GetInvolvedCTA, PhotoBand, TeamGrid } from "@/components/Sections";
import { site } from "@/lib/site";

const words = ["Compassion", "Integrity", "Accountability", "Excellence", "Faith", "Resilience"];

const stories = [
  {
    tag: "Today",
    badge: ["Every", "child"],
    text: "In Bahi, Dodoma, we walk alongside children in local schools — bringing learning materials, care and encouragement to those who need it most.",
    image: "/images/outreach-supplies.jpg",
    alt: "Schoolchildren receiving packs of supplies",
    strip: "bg-sky",
    side: "left",
  },
  {
    tag: "Tomorrow",
    badge: ["Every", "youth"],
    text: "We see young people equipped with knowledge, skills and ethical leadership — ready to build self-reliant, resilient communities of their own.",
    image: "/images/hero-football.jpg",
    alt: "Smiling boys gathered around a football",
    strip: "bg-leaf",
    side: "right",
  },
  {
    tag: "Together",
    badge: ["Every", "family"],
    text: "Hand in hand with communities, government institutions, faith-based organizations and partners, we're building a brighter future for generations to come.",
    image: "/images/outreach-group-2.jpg",
    alt: "Children holding up gifts with the team and their teachers",
    strip: "bg-sun",
    side: "left",
  },
] as const;

export default function Home() {
  return (
    <>
      {/* ───────────────── Hero ───────────────── */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-y-12 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:pb-28 lg:pt-14">
          <div className="relative z-10">
            <div className="rise">
              <p className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-sky">
                <span className="h-2 w-2 rounded-full bg-leaf" /> Bahi · Dodoma · Tanzania
              </p>
              <h1 className="mt-6 font-display text-[3.2rem] font-extrabold leading-[0.92] tracking-[-0.03em] sm:text-7xl xl:text-[5.6rem]">
                Restoring <span className="font-script text-[1.15em] font-bold tracking-normal text-sky">hope</span>
                <br />
                to people in hardship
              </h1>
            </div>

            <div className="rise relative mt-10 lg:mr-[-18%]" style={{ "--delay": "150ms" } as CSSProperties}>
              <div className="cut-c bg-cream px-7 pb-14 pt-8 text-ink sm:px-10 sm:pt-10">
                <p className="max-w-xl text-[1.05rem] leading-relaxed text-ink/85">
                  Divine Hope Foundation is a non-profit, humanitarian organization serving vulnerable children,
                  youth, women and families. We believe every person deserves to live with dignity, access essential
                  services and reach their full potential.
                </p>
              </div>
              <div className="absolute -bottom-6 left-6 flex flex-wrap gap-3 sm:left-10">
                <Button href="/about" tone="clay">
                  Learn More About Us
                </Button>
              </div>
            </div>
          </div>

          <div className="rise relative mx-auto mt-6 w-full max-w-[38rem] lg:mt-0" style={{ "--delay": "100ms" } as CSSProperties}>
            <SunBurst className="absolute inset-0 h-full w-full" />
            <div className="relative aspect-square p-[8%]">
              <div className="cut-photo relative h-full w-full overflow-hidden">
                <Image
                  src="/images/outreach-group-3.jpg"
                  alt="Children cheering together outside their school with the Divine Hope team"
                  fill
                  priority
                  sizes="(min-width: 1024px) 38rem, 92vw"
                  className="object-cover object-[46%_50%]"
                />
              </div>
            </div>
            <p className="absolute -bottom-2 right-2 rotate-[-6deg] bg-sun px-4 py-2 font-script text-2xl font-bold text-ink shadow-lg sm:right-6">
              Faith · Resilience · Compassion
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────── Values marquee ───────────────── */}
      <div className="overflow-hidden border-y-4 border-ink bg-sun py-4" aria-label="Our values">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((k) => (
            <ul key={k} className="flex shrink-0 items-center" aria-hidden={k === 1}>
              {[...words, ...words].map((w, i) => (
                <li key={i} className="flex items-center font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                  <span className="px-6">{w}</span>
                  <svg viewBox="0 0 20 20" className="h-5 w-5 text-clay" aria-hidden>
                    <path d="M10 0l2.6 7.4L20 10l-7.4 2.6L10 20l-2.6-7.4L0 10l7.4-2.6z" fill="currentColor" />
                  </svg>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* ───────────────── About ───────────────── */}
      <section className="overflow-hidden bg-paper py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal className="relative mx-auto w-full max-w-md">
            <PatchRing className="absolute -inset-[12%] h-[124%] w-[124%] animate-[spin_80s_linear_infinite] motion-reduce:animate-none" />
            <div className="relative aspect-square overflow-hidden rounded-full border-[10px] border-ink">
              <Image
                src="/images/about-friends.jpg"
                alt="Two young friends embracing and laughing"
                fill
                sizes="(min-width: 1024px) 28rem, 80vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="font-script text-3xl text-plum">About us</p>
            <h2 className="mt-1 font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl">
              We are part of the communities we serve
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/75">
              Our work focuses on empowering children, youth, women and disadvantaged communities through education,
              healthcare, economic empowerment, community development, child protection and humanitarian assistance.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink/75">
              We promote leadership, ethical values and sustainable development by working closely with local
              communities, government institutions, faith-based organizations and development partners.
            </p>
            <div className="cut-b mt-8 bg-sky px-6 py-5">
              <p className="font-display text-lg font-bold leading-snug">
                Driven by compassion, integrity, accountability and excellence — equipping people with the knowledge,
                skills and opportunities to build self-reliant, resilient communities.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/about" tone="ink">
                Our Story
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────── Hope in action ───────────────── */}
      <section className="overflow-hidden bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="text-center">
            <h2 className="font-display text-6xl font-extrabold leading-none tracking-[-0.04em] sm:text-8xl lg:text-9xl">
              Divine Hope
            </h2>
            <p className="-mt-2 font-script text-5xl font-bold text-plum sm:-mt-4 sm:text-7xl">in action</p>
          </Reveal>

          <div className="mt-16 space-y-16 sm:space-y-20">
            {stories.map((s, i) => (
              <Reveal key={s.tag} delay={80}>
                <div
                  className={`relative grid items-center gap-8 md:grid-cols-[1.6fr_1fr] ${
                    s.side === "right" ? "md:grid-cols-[1fr_1.6fr]" : ""
                  }`}
                >
                  <div className={`relative ${s.side === "right" ? "md:order-2" : ""}`}>
                    <span className="absolute -top-5 left-1/2 z-10 -translate-x-1/2 rotate-[-3deg] bg-ink px-4 py-1.5 font-display text-sm font-semibold text-cream md:left-auto md:right-16 md:translate-x-0">
                      {s.tag}
                    </span>
                    <div
                      className={`cut-a flex flex-col items-start gap-6 px-6 py-9 sm:flex-row sm:items-center sm:px-10 ${s.strip} ${
                        i % 2 ? "rotate-[1deg]" : "rotate-[-1deg]"
                      }`}
                    >
                      <div className="shrink-0 rotate-[-4deg] bg-ink px-5 py-3 text-center text-cream">
                        <span className="block font-script text-xl leading-none text-sun">{s.badge[0]}</span>
                        <span className="block font-script text-4xl font-bold leading-none">{s.badge[1]}</span>
                      </div>
                      <p className="text-lg leading-relaxed text-ink sm:text-xl">{s.text}</p>
                    </div>
                  </div>
                  <div
                    className={`relative aspect-[4/3] overflow-hidden border-[6px] border-white shadow-xl ${
                      i % 2 ? "rotate-[-2.5deg]" : "rotate-[2.5deg]"
                    } ${s.side === "right" ? "md:order-1" : ""}`}
                  >
                    <Image src={s.image} alt={s.alt} fill sizes="(min-width: 768px) 30vw, 92vw" className="object-cover" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AreasGrid />

      {/* ───────────────── Dignity band ───────────────── */}
      <PhotoBand src="/images/outreach-group-1.jpg" alt="The Divine Hope team standing with schoolchildren outside a school">
        <Reveal className="max-w-3xl text-cream">
          <p className="font-script text-3xl text-sun">Our belief</p>
          <h2 className="mt-1 font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">
            Every person deserves to live with <span className="font-script font-bold text-sky">dignity</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-cream/85">
            Through collaboration, innovation and service, we are dedicated to restoring hope, transforming lives and
            building a brighter future for generations to come.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/what-we-do" tone="sun">
              Explore Our Work
            </Button>
            <Button href="/gallery" tone="cream">
              See the Gallery
            </Button>
          </div>
        </Reveal>
      </PhotoBand>

      <TeamGrid />

      <GetInvolvedCTA />

      {/* Organisation structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NGO",
            name: site.name,
            description: site.description,
            email: site.email,
            telephone: "+255611156660",
            logo: `${site.url}/images/logo.png`,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bahi",
              addressRegion: "Dodoma",
              addressCountry: "TZ",
            },
          }),
        }}
      />
    </>
  );
}
