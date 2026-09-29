export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  img: string;
  description: string[];
  included: string[];
  steps: { title: string; desc: string }[];
  pricingHint: string;
  faqs: { q: string; a: string }[];
  meta: string;
}

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "emergency-plumbing",
    title: "Emergency Plumbing",
    tagline: "Burst pipes, major leaks, sewage backups — live dispatch 24/7.",
    img: "/img/plumber-emergency.jpg",
    description: [
      "Plumbing emergencies don't wait for business hours, and neither do we. A burst pipe can dump hundreds of gallons into your home in an hour; a sewage backup is a health hazard the moment it starts. Our emergency line is answered by a live dispatcher around the clock — not a voicemail box.",
      "When you call, we walk you through shutting off your water over the phone, then roll a stocked truck to your door. Most emergencies in the Columbus area are reached within the hour, and the tech arrives ready to stop the damage first and fix it right second.",
    ],
    included: [
      "Burst & frozen pipe repair",
      "Major leak stop & repair",
      "Sewage backup cleanup & fix",
      "Water heater failures",
      "Gas line emergencies",
      "Phone guidance to shut off water",
    ],
    steps: [
      {
        title: "Call the emergency line",
        desc: "A live dispatcher answers 24/7 and talks you through shutting off your water while the truck rolls.",
      },
      {
        title: "Rapid arrival",
        desc: "Most Columbus-area emergencies reached within the hour, truck stocked for common failures.",
      },
      {
        title: "Stop the damage",
        desc: "First priority is stopping water and protecting your home — then we quote the full fix.",
      },
      {
        title: "Fix it right",
        desc: "Permanent repair with quality parts, tested before we leave, backed by our workmanship warranty.",
      },
    ],
    pricingHint:
      "Emergency diagnostic is $129, credited toward the repair. Most emergency repairs land between $250 and $900 depending on the failure. You'll approve the price before we start.",
    faqs: [
      {
        q: "How fast can you get here?",
        a: "Within the Columbus area, usually under an hour — often 30–45 minutes. We'll give you an honest ETA on the call and text you when the tech is en route.",
      },
      {
        q: "What should I do while I wait?",
        a: "Shut off your main water valve if you can — we'll talk you through finding it on the phone. Move valuables away from the water, and don't touch standing water near electrical outlets.",
      },
      {
        q: "Do you charge extra for nights and weekends?",
        a: "There's a $129 emergency diagnostic fee for after-hours calls, and it's credited toward your repair. No surprise multipliers — you approve the full price before work begins.",
      },
      {
        q: "Can you handle sewage backups?",
        a: "Yes — sewage backups are treated as top-priority emergencies. We stop the backup, clear the blockage, sanitize the affected area, and diagnose what caused it.",
      },
    ],
    meta: "24/7 emergency plumber in Columbus OH — burst pipes, major leaks, sewage backups. Live dispatch, usually under an hour. TrueFlow Plumbing.",
  },
  {
    slug: "drain-cleaning",
    title: "Drain Cleaning",
    tagline: "Slow drains, recurring clogs, main-line blockages — cleared and camera-verified.",
    img: "/img/svc-drain.jpg",
    description: [
      "A slow drain is your plumbing waving a warning flag. Grease, hair, soap scum, and roots build up over time until one day the water just stops going down — or worse, comes back up. Chemical drain cleaners barely dent the real blockage and can damage your pipes.",
      "We start with a camera inspection so we can see exactly what's in there — then clear it with the right tool for the job: cable machines for household clogs, hydro-jetting for grease and scale, root-cutting heads for main-line invasions. We show you the camera footage before and after, so you know it's actually clear.",
    ],
    included: [
      "Camera inspection before & after",
      "Kitchen, bath & laundry drains",
      "Main sewer line clearing",
      "Hydro-jetting for grease & scale",
      "Root intrusion cutting",
      "Clog-source diagnosis & prevention tips",
    ],
    steps: [
      {
        title: "Camera inspection",
        desc: "We send a camera down the line and show you exactly what's causing the blockage.",
      },
      {
        title: "Flat-rate quote",
        desc: "One fixed price for the clearing, approved by you before we start — no hourly meter running.",
      },
      {
        title: "Clear & verify",
        desc: "The right tool for the blockage, then a second camera pass to prove the line is fully open.",
      },
      {
        title: "Prevention plan",
        desc: "We tell you what caused it and how to keep it from coming back.",
      },
    ],
    pricingHint:
      "Drain clearing starts at $149 for a single fixture drain. Main-line clearing with camera inspection runs $299–$549. Hydro-jetting quoted per job after inspection.",
    faqs: [
      {
        q: "How much does drain cleaning cost?",
        a: "A single slow drain (sink, tub, toilet) starts at $149. Main sewer line clearing with camera inspection runs $299–$549. You get a flat-rate quote before we start.",
      },
      {
        q: "Will drain cleaner chemicals fix it?",
        a: "Rarely — and they can corrode older pipes and make the eventual professional fix harder. If a plunger and a drain snake haven't solved it, it's time for a camera and the right equipment.",
      },
      {
        q: "What is hydro-jetting?",
        a: "High-pressure water scouring that strips grease, scale, and sludge off the inside of your pipes — like pressure-washing from the inside. It's the best fix for kitchen lines and recurring buildup.",
      },
      {
        q: "How do I keep drains from clogging again?",
        a: "Never pour grease down the kitchen sink, use hair catchers in showers, and only flush toilet paper. We'll give you a specific prevention list for your home after the job.",
      },
    ],
    meta: "Drain cleaning in Columbus OH — camera inspection, hydro-jetting, main line clearing from $149. Same-day service. TrueFlow Plumbing.",
  },
  {
    slug: "water-heater",
    title: "Water Heater Repair & Installation",
    tagline: "No hot water? Lukewarm showers? We repair and replace tank & tankless units — usually same day.",
    img: "/img/svc-heater.jpg",
    description: [
      "A water heater rarely fails at a convenient time. The warning signs are there if you know them: rumbling or popping sounds (sediment buildup), rusty water, water pooling at the base, or showers that go cold halfway through. Catch it early and a repair often buys you years.",
      "When replacement is the smarter money — usually past the 10-year mark — we install high-efficiency tank or tankless units sized to your household. Old unit hauled away, new valves and expansion tank included, hot water back the same day in most cases.",
    ],
    included: [
      "Tank & tankless repair",
      "Full replacement & sizing",
      "Anode rod & element replacement",
      "Thermostat & valve service",
      "Sediment flush & tune-up",
      "Old unit removal & haul-away",
    ],
    steps: [
      {
        title: "Diagnose",
        desc: "We test the elements, thermostat, anode rod, and tank condition — and tell you honestly whether repair or replacement makes sense.",
      },
      {
        title: "Flat-rate quote",
        desc: "Repair or replacement, one fixed price up front including parts, labor, and haul-away.",
      },
      {
        title: "Repair or install",
        desc: "Most repairs done in one visit. Replacements are typically completed same day.",
      },
      {
        title: "Test & warranty",
        desc: "We verify hot water at every tap and register your manufacturer warranty on the spot.",
      },
    ],
    pricingHint:
      "Repairs typically run $189–$549 depending on the part. Full replacement starts at $1,299 for a standard 40–50 gallon tank, $2,899+ for tankless. Free estimates on replacements.",
    faqs: [
      {
        q: "How do I know if I need a new water heater?",
        a: "Age is the biggest factor — past 10 years, replacement usually beats repair. Other signs: rusty water, rumbling sounds, leaks at the base, or running out of hot water fast.",
      },
      {
        q: "Tank or tankless — which is better?",
        a: "Tankless gives endless hot water and lower energy bills but costs more up front. Tanks are cheaper to install and simpler to maintain. We'll size either one to your household and give you honest numbers for both.",
      },
      {
        q: "How long does installation take?",
        a: "A standard tank swap takes 2–4 hours, usually same day. Tankless conversions take a full day since they need new venting and gas or electrical upgrades.",
      },
      {
        q: "Do you haul away the old unit?",
        a: "Yes — removal and responsible disposal of your old water heater is included in every replacement quote.",
      },
    ],
    meta: "Water heater repair & installation in Columbus OH — tank & tankless, same-day service, installs from $1,299. TrueFlow Plumbing.",
  },
  {
    slug: "leak-detection",
    title: "Leak Detection & Repair",
    tagline: "Hidden leaks found with acoustic & thermal gear — fixed with minimal cutting.",
    img: "/img/svc-leak.jpg",
    description: [
      "The worst leaks are the ones you can't see: inside walls, under slabs, behind tile. They show up as a climbing water bill, a musty smell, a warm spot on the floor, or a water meter that spins when nothing's running. Left alone, they rot framing and feed mold.",
      "We find them without tearing your house apart. Acoustic listening gear hears water escaping through pipe walls; thermal cameras spot the temperature signature of hidden moisture. Once located, we open the smallest possible area, make the repair, and put it back together.",
    ],
    included: [
      "Acoustic leak listening",
      "Thermal imaging scans",
      "Slab leak location",
      "Wall & ceiling leak repair",
      "Pipe rerouting options",
      "Moisture mapping & drying advice",
    ],
    steps: [
      {
        title: "Detect",
        desc: "Acoustic and thermal equipment pinpoints the leak's location — often within inches.",
      },
      {
        title: "Confirm",
        desc: "We verify with a meter test or targeted inspection before opening anything.",
      },
      {
        title: "Repair",
        desc: "Smallest possible opening, quality parts, pressure-tested before we close up.",
      },
      {
        title: "Restore",
        desc: "Patch and seal the access point so it looks like we were never there.",
      },
    ],
    pricingHint:
      "Leak detection starts at $199. Most detection-plus-repair jobs land between $350 and $1,200 depending on location and access. Slab leaks quoted after detection.",
    faqs: [
      {
        q: "How do I know I have a hidden leak?",
        a: "Classic signs: water bill climbing for no reason, musty smells, warm spots on floors, peeling paint, or your meter spinning with everything off. Any of those — call us before it gets worse.",
      },
      {
        q: "Will you have to tear up my walls?",
        a: "Our detection gear usually locates the leak within inches, so we open one small, targeted area instead of exploratory holes. We patch what we open.",
      },
      {
        q: "What is a slab leak?",
        a: "A leak in the water lines running under your concrete foundation. Signs include warm spots on the floor, the sound of running water when taps are off, and foundation cracks. We locate them precisely and can often reroute above the slab instead of jackhammering.",
      },
      {
        q: "Do you warranty leak repairs?",
        a: "Yes — every leak repair is backed by our workmanship warranty. If the same spot leaks again, we come back and make it right.",
      },
    ],
    meta: "Leak detection & repair in Columbus OH — acoustic & thermal detection from $199, minimal cutting. TrueFlow Plumbing.",
  },
];
