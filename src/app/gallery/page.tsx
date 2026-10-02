import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PageHero } from "@/components/PageHero";
import { GetInvolvedCTA } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Moments of hope from Divine Hope Foundation's work with children and communities in Bahi, Dodoma.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments of"
        script="hope"
        intro={<p>Smiles, school visits and community days — a glimpse of the lives and stories at the heart of our work.</p>}
      />
      <section className="bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <GalleryGrid />
        </div>
      </section>
      <GetInvolvedCTA />
    </>
  );
}
