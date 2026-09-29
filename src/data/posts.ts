export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  img: string;
  body: string[];
}

export const POSTS: Post[] = [
  {
    slug: "signs-water-heater-failing",
    title: "5 Signs Your Water Heater Is About to Fail",
    excerpt:
      "Water heaters rarely die quietly. Here's what to watch for before you're stuck with cold showers.",
    date: "September 20, 2026",
    readTime: "4 min read",
    img: "/img/svc-heater.jpg",
    body: [
      "A water heater usually gives you warning before it quits — you just have to know what to look and listen for. Catching it early is the difference between a planned $1,300 replacement and a flooded utility room at midnight. Here are the five signs we see most.",
      "1. It's over 10 years old. Check the serial number sticker — the manufacture date is encoded in the first characters. Past the decade mark, the tank's glass lining is breaking down and the anode rod is long spent. Budget for replacement instead of repairs.",
      "2. Rumbling or popping sounds. That's sediment boiling at the bottom of the tank. A flush can buy time on a younger unit, but on an old one it's a countdown timer.",
      "3. Rusty or discolored hot water. If only the hot side runs rusty, the tank interior is corroding. Once rust starts, the tank is on borrowed time — sometimes weeks.",
      "4. Water pooling at the base. Even a small puddle means the tank has a micro-fracture. These don't heal; they grow. Shut off the water and call someone that day.",
      "5. Running out of hot water faster than you used to. Sediment has displaced your capacity, or a heating element is failing. Either way, efficiency has tanked along with your showers.",
      "If you're seeing two or more of these, get a tech out for an honest assessment. We'd rather sell you a $200 flush today than a $1,300 replacement you weren't ready for — but we'd also rather you replace it on your schedule than on the water heater's.",
    ],
  },
  {
    slug: "what-not-to-put-down-drains",
    title: "What Never to Put Down Your Drains",
    excerpt:
      "Half our drain calls are caused by things that should never have gone down the pipe. The full list.",
    date: "September 12, 2026",
    readTime: "3 min read",
    img: "/img/svc-drain.jpg",
    body: [
      "We clear a lot of drains in Columbus, and the causes repeat like a playlist. Most clogs aren't bad luck — they're buildup from things that went down the drain one harmless-looking pour at a time. Here's the hall of shame.",
      "Grease and cooking oil. The number one kitchen clogger. It goes down liquid, cools in your pipes, and hardens into a waxy dam that catches everything else. Wipe pans with a paper towel and trash it — never the sink.",
      "Coffee grounds. They don't dissolve; they clump. Mixed with grease, they form a concrete-like sludge. Trash or compost them.",
      "Hair. The silent killer of shower drains. A $3 drain catcher prevents a $149 service call. There's no debate here.",
      "'Flushable' wipes. They are not flushable in any real-world plumbing system. They don't break down like toilet paper — they snag, accumulate, and form massive blockages. The only things that go in a toilet: toilet paper and what came out of you.",
      "Chemical drain cleaners. They rarely clear a real blockage, they can crack porcelain and corrode older metal pipes, and they turn a simple service call into a hazardous one for whoever works on it next.",
      "When in doubt, trash it. Your drains are for water, soap, and human waste — everything else is a future invoice.",
    ],
  },
  {
    slug: "prevent-frozen-pipes-winter",
    title: "How to Prevent Frozen Pipes This Winter",
    excerpt:
      "Columbus winters burst more pipes than you'd think. A 10-minute routine that saves you thousands.",
    date: "September 2, 2026",
    readTime: "4 min read",
    img: "/img/plumber-emergency.jpg",
    body: [
      "Every January we get the same calls: no water from the kitchen tap, then a bang, then water pouring through a ceiling. Frozen pipes are one of the most expensive preventable plumbing disasters — a single burst can do $5,000+ in water damage. Here's the prevention routine.",
      "Know where your main shutoff is. Before anything else — find it now, while you're calm and dry. Make sure everyone in the house knows. If a pipe does burst, minutes matter.",
      "Insulate exposed pipes. Foam sleeves on pipes in crawl spaces, attics, garages, and exterior walls cost a few dollars and take minutes to install. Pay special attention to pipes on north-facing walls.",
      "Keep the heat on — even when you travel. Never set the thermostat below 55°F in winter, even for a weekend trip. The heating bill is nothing next to a burst pipe.",
      "Let faucets drip in deep freezes. When temps drop into the teens, a slow drip on faucets served by exterior-wall pipes relieves pressure — and pressure is what actually bursts pipes, not just the ice.",
      "Open cabinet doors under sinks on exterior walls so warm air reaches the pipes. And disconnect garden hoses before the first freeze — a connected hose traps water in the spigot line.",
      "If a pipe does freeze: shut off the water, then warm the pipe gently with a hair dryer starting from the faucet end. Never use a torch. And if it has already burst — shut off the main and call us. We're up all night in January for exactly this.",
    ],
  },
];
