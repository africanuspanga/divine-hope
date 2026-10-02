/**
 * Patchwork "sunrise" — chunky paper blocks radiating from the centre,
 * echoing the sun rays in the Divine Hope logo. Pure SVG, no client JS.
 */
const COLORS = ["#86cfd3", "#8cc63f", "#e2703a", "#f4b223", "#8e3b86", "#86cfd3", "#e2703a", "#8cc63f"];

// Deterministic jitter so server and client render identically.
const JITTER = [0.9, -1.4, 2.1, -0.6, 1.2, -2.2, 0.4, 1.8, -1.1, 0.7, -1.7, 2.4, -0.3, 1.5, -2.0, 0.2];

function block(i: number, total: number) {
  const step = 360 / total;
  const mid = i * step + JITTER[i % JITTER.length] * 2;
  const half = step * 0.34 + JITTER[(i + 3) % JITTER.length];
  const r1 = 300 + JITTER[(i + 5) % JITTER.length] * 22;
  const r2 = 760;
  const toXY = (deg: number, r: number) => {
    const a = ((deg - 90) * Math.PI) / 180;
    return `${(500 + r * Math.cos(a)).toFixed(1)},${(500 + r * Math.sin(a)).toFixed(1)}`;
  };
  // Slight skew between inner and outer edges for a hand-cut look
  const skew = JITTER[(i + 7) % JITTER.length] * 1.5;
  return [
    toXY(mid - half, r1),
    toXY(mid + half, r1),
    toXY(mid + half + skew + 4, r2),
    toXY(mid - half + skew - 4, r2),
  ].join(" ");
}

export function SunBurst({
  className = "",
  blocks = 14,
  base = "#f5eedf",
  shape = "M140 60 L580 0 L900 120 L1000 480 L920 840 L600 1000 L200 950 L20 700 L0 320 Z",
}: {
  className?: string;
  blocks?: number;
  base?: string;
  shape?: string;
}) {
  const id = `sb-${blocks}-${base.replace("#", "")}`;
  return (
    <svg viewBox="0 0 1000 1000" className={className} aria-hidden>
      <defs>
        <clipPath id={id}>
          <path d={shape} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id})`}>
        <rect width="1000" height="1000" fill={base} />
        {Array.from({ length: blocks }, (_, i) => (
          <polygon key={i} points={block(i, blocks)} fill={COLORS[i % COLORS.length]} />
        ))}
      </g>
    </svg>
  );
}

/** A ring of coloured patches used to frame circular portraits. */
export function PatchRing({ className = "" }: { className?: string }) {
  const segs = [
    { a: -20, c: "#8e3b86" },
    { a: 40, c: "#86cfd3" },
    { a: 100, c: "#8cc63f" },
    { a: 160, c: "#e2703a" },
    { a: 220, c: "#f4b223" },
    { a: 280, c: "#86cfd3" },
  ];
  const arc = (start: number, end: number, r1: number, r2: number) => {
    const p = (deg: number, r: number) => {
      const a = ((deg - 90) * Math.PI) / 180;
      return `${(200 + r * Math.cos(a)).toFixed(1)} ${(200 + r * Math.sin(a)).toFixed(1)}`;
    };
    return `M${p(start, r1)} L${p(start - 3, r2)} A${r2} ${r2} 0 0 1 ${p(end + 3, r2)} L${p(end, r1)} A${r1} ${r1} 0 0 0 ${p(start, r1)} Z`;
  };
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden>
      {segs.map((s, i) => (
        <path key={i} d={arc(s.a, s.a + 44, 150, 196 - (i % 2) * 10)} fill={s.c} />
      ))}
    </svg>
  );
}
