export const site = {
  name: "Divine Hope Foundation",
  short: "DHF",
  tagline: "Faith · Resilience · Compassion",
  // Set NEXT_PUBLIC_SITE_URL once a custom domain is connected.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  description:
    "Divine Hope Foundation is a non-profit, humanitarian organization in Bahi, Dodoma, restoring hope and transforming lives through education, healthcare, economic empowerment, child protection and community development.",
  phone: "0611 156 660",
  phoneHref: "tel:+255611156660",
  whatsapp: "https://wa.me/255611156660",
  email: "divinehopefoundation660@gmail.com",
  location: "Bahi, Dodoma, Tanzania",
};

export const nav = [
  { href: "/about", label: "About Us" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/gallery", label: "Gallery" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export type Accent = "sky" | "sun" | "leaf" | "clay" | "plum" | "teal";

export const areas: {
  slug: string;
  title: string;
  icon: "book" | "heart" | "sprout" | "home" | "shield" | "hands";
  accent: Accent;
  summary: string;
  detail: string;
  points: string[];
}[] = [
  {
    slug: "education",
    title: "Education",
    icon: "book",
    accent: "sky",
    summary: "Keeping children learning, and opening doors for youth.",
    detail:
      "Education is the surest path out of hardship. We support children and young people to stay in school and thrive there — from learning materials to mentorship that builds confidence and character.",
    points: [
      "School supplies and learning materials",
      "Mentorship and leadership for youth",
      "Encouraging girls to stay in school",
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    icon: "heart",
    accent: "clay",
    summary: "Connecting families to essential care and wellbeing.",
    detail:
      "Healthy people build healthy communities. We help vulnerable families reach essential health services and promote the everyday habits that keep children and mothers well.",
    points: [
      "Linking families to health services",
      "Health, hygiene and nutrition awareness",
      "Support for mothers and children",
    ],
  },
  {
    slug: "economic-empowerment",
    title: "Economic Empowerment",
    icon: "sprout",
    accent: "leaf",
    summary: "Skills and opportunity for women and youth to stand tall.",
    detail:
      "Self-reliance restores dignity. We equip women, youth and families with practical skills, knowledge and opportunities to earn, save and build livelihoods that last.",
    points: [
      "Skills training for women and youth",
      "Savings and small-enterprise support",
      "Pathways to self-reliance",
    ],
  },
  {
    slug: "community-development",
    title: "Community Development",
    icon: "home",
    accent: "sun",
    summary: "Working hand in hand with communities on what matters most.",
    detail:
      "Lasting change is built together. We work closely with local communities, government institutions, faith-based organizations and development partners to strengthen the places people call home.",
    points: [
      "Community-led priorities",
      "Partnership with local leaders and institutions",
      "Promoting ethical leadership and values",
    ],
  },
  {
    slug: "child-protection",
    title: "Child Protection",
    icon: "shield",
    accent: "plum",
    summary: "Every child safe, cared for and heard.",
    detail:
      "Children are at the heart of our work. Our social work team walks alongside vulnerable children and their families so every child can grow up safe, loved and protected.",
    points: [
      "Social work support for vulnerable children",
      "Family strengthening and care",
      "Awareness of children's rights and safety",
    ],
  },
  {
    slug: "humanitarian-assistance",
    title: "Humanitarian Assistance",
    icon: "hands",
    accent: "teal",
    summary: "Standing with people in their hardest moments.",
    detail:
      "When hardship strikes, we respond with compassion — providing essential relief to individuals and families in need while helping them recover and rebuild.",
    points: [
      "Relief for families in crisis",
      "Essential supplies for those in need",
      "Support to recover and rebuild",
    ],
  },
];

export const team = [
  {
    name: "Mr. Paul Luwaha",
    role: "Director",
    initials: "PL",
    accent: "sun" as Accent,
  },
  {
    name: "Ms. Jacquiline Aidani Mponzi",
    role: "Manager",
    initials: "JM",
    accent: "sky" as Accent,
  },
  {
    name: "Ms. Gloria Aidani Mponzi",
    role: "Finance & Assistant Manager",
    initials: "GM",
    accent: "leaf" as Accent,
  },
  {
    name: "Ms. Josephine",
    role: "Social Worker",
    initials: "J",
    accent: "clay" as Accent,
  },
];

export const values = [
  {
    title: "Compassion",
    text: "We serve with open hearts, meeting every person with kindness and care.",
  },
  {
    title: "Integrity",
    text: "We do what is right, honestly and transparently, even when no one is watching.",
  },
  {
    title: "Accountability",
    text: "We steward every resource responsibly and answer to the communities we serve.",
  },
  {
    title: "Excellence",
    text: "We give our very best, so that the change we help create truly lasts.",
  },
];

export const gallery = [
  {
    src: "/images/outreach-group-1.jpg",
    alt: "Divine Hope Foundation team and visitors standing with schoolchildren outside a school",
    w: 1280,
    h: 576,
  },
  {
    src: "/images/outreach-supplies.jpg",
    alt: "Schoolchildren receiving packs of supplies",
    w: 1280,
    h: 576,
  },
  {
    src: "/images/outreach-students.jpg",
    alt: "A group of young students in school uniforms",
    w: 1280,
    h: 576,
  },
  {
    src: "/images/outreach-visit.jpg",
    alt: "A smiling visitor kneeling among students during a school visit",
    w: 1280,
    h: 576,
  },
  {
    src: "/images/outreach-group-2.jpg",
    alt: "Children holding up gifts with the team and their teachers",
    w: 1280,
    h: 576,
  },
  {
    src: "/images/outreach-group-3.jpg",
    alt: "Children cheering together outside their school with the Divine Hope team",
    w: 1280,
    h: 576,
  },
  {
    src: "/images/hero-girls.jpg",
    alt: "Three confident young girls standing with arms crossed",
    w: 2000,
    h: 1600,
  },
  {
    src: "/images/hero-football.jpg",
    alt: "Smiling boys gathered around a football",
    w: 2000,
    h: 1497,
  },
  {
    src: "/images/about-friends.jpg",
    alt: "Two young friends embracing and laughing",
    w: 1800,
    h: 1599,
  },
];
