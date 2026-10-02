import { BookOpen, HandHeart, HeartPulse, House, ShieldCheck, Sprout } from "lucide-react";

const icons = {
  book: BookOpen,
  heart: HeartPulse,
  sprout: Sprout,
  home: House,
  shield: ShieldCheck,
  hands: HandHeart,
};

export function AreaIcon({ name, className = "" }: { name: keyof typeof icons; className?: string }) {
  const Icon = icons[name];
  return <Icon className={className} strokeWidth={2.2} aria-hidden />;
}
