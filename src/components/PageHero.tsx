import Image from "next/image";
import type { ReactNode } from "react";
import { SunBurst } from "./SunBurst";

export function PageHero({
  eyebrow,
  title,
  script,
  intro,
  image,
  imageAlt = "",
}: {
  eyebrow: string;
  title: ReactNode;
  script?: string;
  intro: ReactNode;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 pt-12 sm:px-8 md:grid-cols-[1.15fr_1fr] md:pb-24 md:pt-16">
        <div className="rise">
          <p className="font-script text-3xl text-sky">{eyebrow}</p>
          <h1 className="mt-2 font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            {title}
            {script && (
              <>
                {" "}
                <span className="font-script font-bold text-sun">{script}</span>
              </>
            )}
          </h1>
          <div className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">{intro}</div>
        </div>
        {image && (
          <div className="rise relative mx-auto w-full max-w-md [--delay:120ms]">
            <SunBurst className="absolute inset-0 h-full w-full" blocks={12} />
            <div className="relative aspect-square p-[9%]">
              <div className="cut-photo relative h-full w-full overflow-hidden">
                <Image src={image} alt={imageAlt} fill priority sizes="(min-width: 768px) 28rem, 90vw" className="object-cover" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
