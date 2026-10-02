import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { AreaIcon } from "@/components/AreaIcon";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { GetInvolvedCTA } from "@/components/Sections";
import { accentBg, accentFg } from "@/lib/accent";
import { areas, gallery } from "@/lib/site";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Education, healthcare, economic empowerment, community development, child protection and humanitarian assistance — how Divine Hope Foundation serves Bahi, Dodoma.",
};

const photos = [gallery[1], gallery[7], gallery[6], gallery[0], gallery[3], gallery[5]];

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Hope that takes"
        script="many forms"
        intro={
          <p>
            We empower children, youth, women and disadvantaged communities across six areas of work — always hand in
            hand with the communities we serve.
          </p>
        }
        image="/images/hero-football.jpg"
        imageAlt="Smiling boys gathered around a football"
      />

      {/* Quick nav */}
      <nav aria-label="Areas of work" className="sticky top-20 z-30 border-b border-ink/10 bg-paper/95 backdrop-blur">
        <ul className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-3 sm:px-8">
          {areas.map((a) => (
            <li key={a.slug} className="shrink-0">
              <a
                href={`#${a.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold hover:border-ink hover:bg-white"
              >
                <span className={`h-2.5 w-2.5 rounded-full ${accentBg[a.accent]}`} />
                {a.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="bg-paper">
        {areas.map((a, i) => {
          const photo = photos[i];
          const flip = i % 2 === 1;
          return (
            <section key={a.slug} id={a.slug} className="scroll-mt-40 border-b border-ink/10 py-20 sm:py-24">
              <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
                <Reveal className={flip ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4">
                    <span className={`cut-b grid h-16 w-16 place-items-center ${accentBg[a.accent]} ${accentFg[a.accent]}`}>
                      <AreaIcon name={a.icon} className="h-8 w-8" />
                    </span>
                    <span className="font-display text-sm font-bold uppercase tracking-[0.25em] text-ink/50">
                      0{i + 1} / 0{areas.length}
                    </span>
                  </div>
                  <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{a.title}</h2>
                  <p className="mt-2 font-script text-3xl text-teal">{a.summary}</p>
                  <p className="mt-5 text-lg leading-relaxed text-ink/75">{a.detail}</p>
                  <ul className="mt-7 space-y-3">
                    {a.points.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <span className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full ${accentBg[a.accent]} ${accentFg[a.accent]}`}>
                          <Check className="h-4 w-4" strokeWidth={3} aria-hidden />
                        </span>
                        <span className="font-medium">{p}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={120} className={`relative ${flip ? "lg:order-1" : ""}`}>
                  <div className={`absolute -inset-3 ${accentBg[a.accent]} ${flip ? "rotate-[2deg]" : "rotate-[-2deg]"}`} aria-hidden />
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 45vw, 92vw" className="object-cover" />
                  </div>
                </Reveal>
              </div>
            </section>
          );
        })}
      </div>

      <GetInvolvedCTA />
    </>
  );
}
