import Link from "next/link";
import type { ReactNode } from "react";

const tones = {
  sun: "bg-sun text-ink hover:bg-[#ffc23d]",
  clay: "bg-clay text-white hover:bg-[#ef8049]",
  ink: "bg-ink text-cream hover:bg-ink-2",
  sky: "bg-sky text-ink hover:bg-[#9bdade]",
  leaf: "bg-leaf text-ink hover:bg-[#9dd552]",
  cream: "bg-cream text-ink hover:bg-white",
};

function Chevron() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 12 20"
      className="h-3.5 w-2 transition-transform duration-300 group-hover:translate-x-1"
    >
      <path d="M2 2l7 8-7 8" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Button({
  href,
  children,
  tone = "clay",
  size = "md",
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  tone?: keyof typeof tones;
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
}) {
  const sizes = {
    sm: "px-4 py-2.5 text-sm",
    md: "px-6 py-3.5 text-[15px]",
    lg: "px-8 py-4 text-base",
  };
  const cls = `group cut-a inline-flex items-center gap-3 whitespace-nowrap font-display font-bold tracking-tight transition-colors duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sun/60 ${tones[tone]} ${sizes[size]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        className={cls}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
        <Chevron />
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
      <Chevron />
    </Link>
  );
}
