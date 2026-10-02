import type { Accent } from "./site";

// Literal class strings so Tailwind can see them at build time.
export const accentBg: Record<Accent, string> = {
  sky: "bg-sky",
  sun: "bg-sun",
  leaf: "bg-leaf",
  clay: "bg-clay",
  plum: "bg-plum",
  teal: "bg-teal",
};

export const accentText: Record<Accent, string> = {
  sky: "text-teal",
  sun: "text-[#b07a06]",
  leaf: "text-[#4f7d17]",
  clay: "text-clay",
  plum: "text-plum",
  teal: "text-teal",
};

export const accentFg: Record<Accent, string> = {
  sky: "text-ink",
  sun: "text-ink",
  leaf: "text-ink",
  clay: "text-white",
  plum: "text-white",
  teal: "text-white",
};
