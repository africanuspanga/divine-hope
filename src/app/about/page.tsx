import type { Metadata } from "next";
import Image from "next/image";
import { Building2, Church, Globe2, UsersRound } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { GetInvolvedCTA, TeamGrid } from "@/components/Sections";
import { values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Divine Hope Foundation — a non-profit, humanitarian organization in Bahi, Dodoma committed to restoring hope and transforming lives.",
};

const valueColors = ["bg-sky", "bg-sun", "bg-leaf", "bg-clay"];
const partners = [
  { icon: UsersRound, label: "Local communities" },
  { icon: Building2, label: "Government institutions" },
  { icon: Church, label: "Faith-based organizations" },
  { icon: Globe2, label: "Development partners" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Divine Hope"
        title="Restoring hope,"
        script="transforming lives"
        intro={
          <p>
            Divine Hope Foundation is a non-profit and humanitarian organization committed to restoring hope and
            transforming lives by serving vulnerable individuals and communities.
          </p>
        }
        image="/images/about-friends.jpg"
        imageAlt="Two young friends embracing and laughing"
      />

      {/* Story */}
      <section className="bg-paper py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <p className="font-script text-3xl text-clay">Who we are</p>
            <h2 className="mt-1 font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl">
              Every person deserves the chance to flourish
            </h2>
            <div className="relative mt-10 aspect-[16/9] overflow-hidden border-[6px] border-white shadow-xl rotate-[-1.5deg]">
              <Image
                src="/images/outreach-group-2.jpg"
                alt="Children holding up gifts with the team and their teachers"
                fill
                sizes="(min-width: 1024px) 40vw, 92vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              We believe that every person deserves the opportunity to live with dignity, access essential services
              and reach their full potential.
            </p>
            <p>
              Our work focuses on empowering children, youth, women and disadvantaged communities through education,
              healthcare, economic empowerment, community development, child protection and humanitarian assistance.
              We also promote leadership, ethical values and sustainable development by working closely with local
              communities, government institutions, faith-based organizations and development partners.
            </p>
            <p>
              At Divine Hope Foundation, we are driven by compassion, integrity, accountability and excellence. We
              strive to create lasting change by equipping people with the knowledge, skills and opportunities they
              need to build self-reliant and resilient communities.
            </p>
            <p className="font-display text-xl font-bold text-ink">
              Through collaboration, innovation and service, Divine Hope Foundation is dedicated to restoring hope,
              transforming lives and building a brighter future for generations to come.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="bg-ink py-24 text-cream sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-2">
          <Reveal>
            <div className="cut-c h-full bg-sky p-9 text-ink sm:p-12">
              <p className="font-script text-3xl">Our mission</p>
              <p className="mt-4 font-display text-2xl font-bold leading-snug sm:text-3xl">
                To restore hope and transform lives by serving vulnerable individuals and communities with compassion,
                and equipping them to thrive.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="cut-a h-full bg-sun p-9 text-ink sm:p-12">
              <p className="font-script text-3xl">Our vision</p>
              <p className="mt-4 font-display text-2xl font-bold leading-snug sm:text-3xl">
                Self-reliant, resilient communities where every person lives with dignity and reaches their full
                potential.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <p className="font-script text-3xl text-plum">What drives us</p>
            <h2 className="mt-1 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">Our Core Values</h2>
          </Reveal>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 90}>
                <div className="h-full bg-white p-7">
                  <span className={`cut-b block h-3 w-16 ${valueColors[i]}`} />
                  <h3 className="mt-6 font-display text-2xl font-extrabold tracking-tight">{v.title}</h3>
                  <p className="mt-3 text-ink/70">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-paper py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <p className="font-script text-3xl text-teal">Our approach</p>
            <h2 className="mt-1 font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl">
              Lasting change is built together
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/75">
              We don&apos;t work for communities — we work with them. By partnering closely with the people and
              institutions already shaping life in Bahi and across Dodoma, we make sure every effort is locally owned,
              ethically led and built to last.
            </p>
          </Reveal>
          <ul className="grid grid-cols-2 gap-4">
            {partners.map((p, i) => (
              <Reveal as="li" key={p.label} delay={i * 80}>
                <div className={`flex h-full flex-col gap-5 bg-ink p-6 text-cream ${i % 2 ? "rotate-[1deg]" : "rotate-[-1deg]"}`}>
                  <p.icon className="h-8 w-8 text-sun" aria-hidden />
                  <p className="font-display text-lg font-bold leading-tight">{p.label}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <TeamGrid />
      <GetInvolvedCTA />
    </>
  );
}
