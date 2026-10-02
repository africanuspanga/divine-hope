"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery } from "@/lib/site";

const spans = [
  "sm:col-span-2",
  "",
  "",
  "",
  "sm:col-span-2",
  "",
  "sm:row-span-2",
  "",
  "",
];

export function GalleryGrid() {
  const [index, setIndex] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  const open = (i: number) => {
    setIndex(i);
    dialog.current?.showModal();
  };
  const close = () => dialog.current?.close();
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + gallery.length) % gallery.length)),
    [],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!dialog.current?.open) return;
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step]);

  const current = index === null ? null : gallery[index];

  return (
    <>
      <ul className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-flow-row-dense sm:grid-cols-3 sm:auto-rows-[240px]">
        {gallery.map((g, i) => (
          <li key={g.src} className={spans[i]}>
            <button
              type="button"
              onClick={() => open(i)}
              className="group relative h-full w-full overflow-hidden bg-ink focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sun"
              aria-label={`View photo: ${g.alt}`}
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(min-width: 640px) 33vw, 92vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        onClose={() => setIndex(null)}
        onClick={(e) => e.target === dialog.current && close()}
        className="m-auto h-dvh max-h-none w-screen max-w-none bg-transparent p-0 backdrop:bg-ink/90"
      >
        {current && (
          <div className="relative flex h-full w-full items-center justify-center p-4 sm:p-14" onClick={(e) => e.target === e.currentTarget && close()}>
            <figure className="relative max-h-full">
              <Image
                src={current.src}
                alt={current.alt}
                width={current.w}
                height={current.h}
                sizes="92vw"
                loading="eager"
                className="h-auto"
                style={{ width: `min(92vw, ${current.w}px, calc(80dvh * ${(current.w / current.h).toFixed(3)}))` }}
              />
              <figcaption className="mt-3 text-center text-cream/80">{current.alt}</figcaption>
            </figure>
            <button onClick={close} aria-label="Close" className="absolute right-4 top-4 grid h-12 w-12 place-items-center bg-sun text-ink">
              <X className="h-6 w-6" />
            </button>
            <button onClick={() => step(-1)} aria-label="Previous photo" className="absolute left-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center bg-cream text-ink sm:left-4">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button onClick={() => step(1)} aria-label="Next photo" className="absolute right-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center bg-cream text-ink sm:right-4">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        )}
      </dialog>
    </>
  );
}
