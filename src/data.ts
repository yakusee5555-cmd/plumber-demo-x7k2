export const BUSINESS = {
  name: "TrueFlow Plumbing",
  phone: "(555) 234-5678",
  phoneHref: "tel:+15552345678",
  address: "1420 High Street, Columbus, OH 43201",
  hours: "Mon–Sat, 7:00 AM – 7:00 PM",
  emergency: "24/7 emergency plumbing response",
  rating: "4.9",
  reviewCount: "260+",
};

export const NAV = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/* Stacked headline words (section 2) */
export const STACK_WORDS = ["Drains.", "Water Heaters.", "Leaks.", "Emergencies."];

export interface FloatCard {
  img: string;
  title: string;
  meta: string;
  rotate: string;
  offset: string;
}

export const FLOAT_CARDS: FloatCard[] = [
  {
    img: "/img/svc-drain.jpg",
    title: "Drain Cleaning",
    meta: "Clogs cleared same-day · Camera inspections",
    rotate: "rotate-[4deg]",
    offset: "md:translate-y-10",
  },
  {
    img: "/img/svc-heater.jpg",
    title: "Water Heaters",
    meta: "Repair & install · Tank & tankless",
    rotate: "rotate-[-3deg]",
    offset: "md:-translate-y-6",
  },
  {
    img: "/img/plumber-emergency.jpg",
    title: "24/7 Emergency",
    meta: "Burst pipes & major leaks, day or night",
    rotate: "rotate-[2.5deg]",
    offset: "md:translate-y-16",
  },
];

/* Dark numbered list (section 3) */
export interface ListRow {
  img: string;
  title: string;
  desc: string;
}

export const LIST_ROWS: ListRow[] = [
  {
    img: "/img/svc-drain.jpg",
    title: "Drain Cleaning",
    desc: "Clogs found and cleared fast",
  },
  {
    img: "/img/svc-heater.jpg",
    title: "Water Heaters",
    desc: "Repair & replacement, tank & tankless",
  },
  {
    img: "/img/svc-leak.jpg",
    title: "Leak Detection & Repair",
    desc: "Pinpoint accuracy, minimal digging",
  },
  {
    img: "/img/svc-sewer.jpg",
    title: "Sewer Lines",
    desc: "Trenchless repair & replacement",
  },
  {
    img: "/img/svc-fixture.jpg",
    title: "Fixture Installation",
    desc: "Faucets, toilets & showers done right",
  },
];

/* Glass cards on full-bleed image (section 4) */
export interface GlassCard {
  title: string;
  desc: string;
  pos: string;
}

export const GLASS_CARDS: GlassCard[] = [
  {
    title: "Flat-rate pricing",
    desc: "The price we quote is the price you pay.",
    pos: "left-[6%] top-[16%]",
  },
  {
    title: "Licensed & insured",
    desc: "Full coverage on every single job.",
    pos: "right-[8%] top-[24%]",
  },
  {
    title: "24/7 emergency",
    desc: "Burst pipe at 2am? One call, we're rolling.",
    pos: "left-[10%] bottom-[20%]",
  },
  {
    title: "4.9 ★★★★★",
    desc: "260+ Google reviews from neighbors.",
    pos: "right-[10%] bottom-[14%]",
  },
];

/* Real work gallery (section 5) — actual plumbing job photos */
export interface WorkShot {
  img: string;
  title: string;
  location: string;
}

export const WORK_SHOTS: WorkShot[] = [
  { img: "/img/svc-heater.jpg", title: "Tankless water heater install", location: "Columbus, OH" },
  { img: "/img/svc-drain.jpg", title: "Main line cleared & camera-verified", location: "Dublin, OH" },
  { img: "/img/svc-fixture.jpg", title: "Bathroom fixture installation", location: "Westerville, OH" },
  { img: "/img/svc-sewer.jpg", title: "Trenchless sewer line replacement", location: "Grove City, OH" },
  { img: "/img/svc-leak.jpg", title: "Slab leak located & repaired", location: "Hilliard, OH" },
  { img: "/img/plumber-bathroom.jpg", title: "Full bathroom rough-in", location: "Reynoldsburg, OH" },
];

export interface Service {
  img: string;
  title: string;
  desc: string;
}

export const SERVICES: Service[] = [
  {
    img: "/img/plumber-emergency.jpg",
    title: "Emergency Plumbing",
    desc: "Burst pipes, major leaks, sewage backups — live dispatch 24/7, most emergencies reached within the hour.",
  },
  {
    img: "/img/svc-drain.jpg",
    title: "Drain Cleaning",
    desc: "Slow drains, recurring clogs, main-line blockages. Camera inspection pinpoints the problem before we clear it.",
  },
  {
    img: "/img/svc-heater.jpg",
    title: "Water Heater Services",
    desc: "Repair and replacement of tank and tankless units. Hot water back fast — usually same day.",
  },
  {
    img: "/img/svc-leak.jpg",
    title: "Leak Detection & Repair",
    desc: "Hidden leaks found with acoustic and thermal gear — then fixed with minimal cutting and patching.",
  },
  {
    img: "/img/svc-sewer.jpg",
    title: "Sewer Line Services",
    desc: "Trenchless repair and full replacement. We diagnose with a camera so you only pay for what you need.",
  },
  {
    img: "/img/svc-fixture.jpg",
    title: "Fixture Installation",
    desc: "Faucets, toilets, showers, garbage disposals — installed clean, sealed right, and tested before we leave.",
  },
];

export interface Review {
  name: string;
  town: string;
  text: string;
}

export const REVIEWS: Review[] = [
  {
    name: "Marcus T.",
    town: "Columbus",
    text: "Water heater died on a Sunday morning. They had a new one installed by dinner time, and the price was exactly what they quoted on the phone.",
  },
  {
    name: "Priya S.",
    town: "Dublin",
    text: "Kitchen drain kept backing up. They ran a camera, showed me the grease buildup on the screen, and cleared the whole line in under an hour.",
  },
  {
    name: "Dave R.",
    town: "Westerville",
    text: "Pipe burst in the basement at 11pm. The dispatcher was calm, the tech arrived in 40 minutes, and he stopped the water before it got worse. Lifesavers.",
  },
  {
    name: "Angela M.",
    town: "Grove City",
    text: "Got three quotes for a sewer line — TrueFlow was the only one who camera-inspected first. Trenchless repair saved my driveway. Worth every penny.",
  },
];

export const TOWNS = [
  "Columbus",
  "Dublin",
  "Westerville",
  "Grove City",
  "Hilliard",
  "Reynoldsburg",
  "Gahanna",
  "Upper Arlington",
  "Powell",
  "Pickerington",
  "Delaware",
  "New Albany",
];
