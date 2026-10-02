import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact Divine Hope Foundation in Bahi, Dodoma. Call ${site.phone} or email ${site.email}.`,
};

const cards = [
  { icon: Phone, label: "Call us", value: site.phone, href: site.phoneHref, bg: "bg-sun" },
  { icon: MessageCircle, label: "WhatsApp", value: site.phone, href: site.whatsapp, bg: "bg-leaf" },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}`, bg: "bg-sky" },
  { icon: MapPin, label: "Visit", value: site.location, href: null, bg: "bg-clay" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about"
        script="hope"
        intro={<p>Questions, ideas, or ready to help? Our team in Bahi, Dodoma would love to hear from you.</p>}
      />

      <section className="bg-paper py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.3fr]">
          <Reveal className="min-w-0">
            <ul className="grid gap-4">
              {cards.map((c) => {
                const inner = (
                  <>
                    <span className={`cut-b grid h-12 w-12 shrink-0 place-items-center text-ink ${c.bg}`}>
                      <c.icon className="h-6 w-6" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-bold uppercase tracking-[0.15em] text-ink/50">{c.label}</span>
                      <span className="block font-display text-lg font-bold [overflow-wrap:anywhere]">{c.value}</span>
                    </span>
                  </>
                );
                return (
                  <li key={c.label}>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-4 bg-white p-5 transition-transform hover:-translate-y-0.5"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 bg-white p-5">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="mt-8 bg-ink p-6 text-cream">
              <p className="font-script text-2xl text-sun">Leadership</p>
              <p className="mt-1 font-display text-lg font-bold">Mr. Paul Luwaha — Director</p>
              <p className="text-cream/70">Ms. Jacquiline Aidani Mponzi — Manager</p>
            </div>
          </Reveal>

          <Reveal delay={120} className="min-w-0 bg-cream p-6 sm:p-10">
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">Send us a message</h2>
            <p className="mt-2 mb-8 text-ink/70">We&apos;ll get back to you as soon as we can.</p>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section aria-label="Map of Bahi, Dodoma" className="bg-ink">
        <iframe
          title="Map showing Bahi, Dodoma, Tanzania"
          src="https://maps.google.com/maps?q=Bahi%2C%20Dodoma%2C%20Tanzania&z=10&output=embed"
          className="h-[420px] w-full grayscale-[30%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
