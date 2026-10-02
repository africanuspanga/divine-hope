import type { Metadata } from "next";
import Image from "next/image";
import { HandCoins, Handshake, Users } from "lucide-react";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Give, volunteer or partner with Divine Hope Foundation to restore hope and transform lives in Bahi, Dodoma.",
};

const ways = [
  {
    id: "give",
    icon: HandCoins,
    script: "Give",
    title: "Make a gift of hope",
    bg: "bg-sun",
    image: "/images/outreach-supplies.jpg",
    alt: "Schoolchildren receiving packs of supplies",
    text: "Every gift — large or small — helps provide learning materials, care, and relief for children and families facing hardship. Contact our team and we'll share how to give securely and how your gift will be used.",
    bullets: ["Support a child's education", "Help a family in crisis", "Strengthen women and youth"],
    cta: { label: "Talk to us about giving", subject: "I would like to give to Divine Hope Foundation" },
  },
  {
    id: "volunteer",
    icon: Users,
    script: "Volunteer",
    title: "Share your time and skills",
    bg: "bg-sky",
    image: "/images/outreach-visit.jpg",
    alt: "A smiling visitor kneeling among students during a school visit",
    text: "Teachers, health workers, mentors, professionals and friends — your skills can open doors for children, youth and women in Bahi. Tell us how you'd like to help.",
    bullets: ["Mentor young people", "Support school and community activities", "Lend professional skills"],
    cta: { label: "Become a volunteer", subject: "Volunteering with Divine Hope Foundation" },
  },
  {
    id: "partner",
    icon: Handshake,
    script: "Partner",
    title: "Build lasting change together",
    bg: "bg-leaf",
    image: "/images/outreach-group-1.jpg",
    alt: "The Divine Hope team standing with schoolchildren outside a school",
    text: "We work with government institutions, faith-based organizations, businesses and development partners. Let's combine our strengths to serve vulnerable communities sustainably.",
    bullets: ["Faith-based organizations & churches", "Businesses & foundations", "Development partners & institutions"],
    cta: { label: "Start a partnership", subject: "Partnership with Divine Hope Foundation" },
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="There's a place for"
        script="you"
        intro={<p>Give, volunteer or partner with us — together we can restore hope and transform lives in Bahi, Dodoma.</p>}
        image="/images/hero-girls.jpg"
        imageAlt="Three confident young girls standing with arms crossed"
      />

      <div className="bg-paper">
        {ways.map((w, i) => (
          <section key={w.id} id={w.id} className="scroll-mt-24 py-20 sm:py-24">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
              <Reveal className={i % 2 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3">
                  <span className={`cut-b grid h-14 w-14 place-items-center ${w.bg}`}>
                    <w.icon className="h-7 w-7" aria-hidden />
                  </span>
                  <p className="font-script text-4xl font-bold text-teal">{w.script}</p>
                </div>
                <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{w.title}</h2>
                <p className="mt-5 text-lg leading-relaxed text-ink/75">{w.text}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {w.bullets.map((b) => (
                    <li key={b} className="bg-cream px-3 py-1.5 text-sm font-semibold">
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href={`mailto:${site.email}?subject=${encodeURIComponent(w.cta.subject)}`} tone="clay" external>
                    {w.cta.label}
                  </Button>
                  <Button href={site.whatsapp} tone="ink" external>
                    WhatsApp
                  </Button>
                </div>
              </Reveal>
              <Reveal delay={120} className={`relative ${i % 2 ? "lg:order-1" : ""}`}>
                <div className={`absolute -inset-3 ${w.bg} ${i % 2 ? "rotate-[2deg]" : "rotate-[-2deg]"}`} aria-hidden />
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={w.image} alt={w.alt} fill sizes="(min-width: 1024px) 45vw, 92vw" className="object-cover" />
                </div>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-ink py-20 text-cream">
        <Reveal className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <p className="font-script text-3xl text-sun">Our promise</p>
          <h2 className="mt-1 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Accountable for every gift
          </h2>
          <p className="mt-4 text-lg text-cream/80">
            Integrity and accountability are core to who we are. We steward every resource responsibly and are happy
            to answer any question about how support reaches the communities we serve.
          </p>
          <p className="mt-6 font-display text-xl font-bold">
            <a href={site.phoneHref} className="hover:text-sun">{site.phone}</a>
            <span className="mx-3 text-cream/40">·</span>
            <a href={`mailto:${site.email}`} className="break-all hover:text-sun">{site.email}</a>
          </p>
        </Reveal>
      </section>
    </>
  );
}
