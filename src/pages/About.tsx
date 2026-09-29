import { Link } from "react-router-dom";
import { BUSINESS, GLASS_CARDS, REVIEWS } from "../data";
import { CtaBand, Faq, PageHero, RouteFX } from "../components/PageBits";

const VALUES = [
  {
    title: "We diagnose before we quote",
    desc: "Every quote starts with a camera, a meter, or boots under the sink — not a guess. You can't price a problem you haven't seen.",
  },
  {
    title: "Firm price, in writing",
    desc: "Free estimates with a fixed number before we start. The price we quote is the price you pay — no hourly billing, no add-ons.",
  },
  {
    title: "Right parts, not cheap parts",
    desc: "We install quality valves, fittings, and fixtures that last — because callbacks cost us more than good parts ever will.",
  },
  {
    title: "Cleaner than we found it",
    desc: "Drop cloths down, shoe covers on, everything wiped and tested before we leave. Most customers say the room looks better after.",
  },
];

const TIMELINE = [
  { year: "2015", text: "Two plumbers, one van, and a pipe wrench — TrueFlow starts in Columbus." },
  { year: "2018", text: "Full-time crew of six. First 100 five-star reviews." },
  { year: "2021", text: "24/7 emergency dispatch launches — live answers, under-an-hour response." },
  { year: "2026", text: "260+ reviews, 12 towns served, still answering our own phones." },
];

export default function About() {
  return (
    <>
      <RouteFX
        title="About TrueFlow Plumbing | Columbus, OH Plumbing Company"
        description="Meet TrueFlow Plumbing — drain cleaning, water heater, and emergency plumbing specialists serving Columbus & central Ohio since 2015. Licensed, insured, 260+ five-star reviews."
      />
      <PageHero
        eyebrow="About TrueFlow"
        title={
          <>
            Pipe people.
            <br />
            Not a call center.
          </>
        }
        sub="We're plumbers from Columbus. When you call TrueFlow, you talk to someone who's cleared a thousand drains — not a sales rep reading a script."
        img="/img/plumber-about.jpg"
      />

      {/* story */}
      <section className="bg-cream py-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-forest">
              How we started
            </p>
            <h2 className="reveal mt-3 font-display text-2xl uppercase leading-[1.05] text-charcoal md:text-5xl">
              Started with a wrench.
              <br />
              Built on dry basements.
            </h2>
          </div>
          <div className="reveal space-y-5 text-base leading-relaxed text-charcoal/70 md:text-lg">
            <p>
              TrueFlow started in 2015 with two plumbers, one van, and a simple idea: do
              plumbing work the right way and the phone keeps ringing. No scare tactics,
              no upsells you don't need — just neighbors telling neighbors.
            </p>
            <p>
              Ten years later we're running full crews across a dozen Columbus-area towns,
              with a dedicated 24/7 emergency dispatch. The idea hasn't changed. Most of
              our work still comes from repeat customers and referrals, which tells us the
              model works.
            </p>
            <p>
              We're licensed and insured on every job, we quote flat-rate so the price is
              the price, and we treat your home like it's our own. That's it. That's the
              company.
            </p>
          </div>
        </div>
      </section>

      {/* stats band */}
      <section className="bg-ink py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4 md:px-12">
          {[
            { n: "10+", l: "Years in business" },
            { n: "9,400+", l: "Jobs completed" },
            { n: BUSINESS.rating, l: `${BUSINESS.reviewCount} Google reviews` },
            { n: "24/7", l: "Emergency response" },
          ].map((s) => (
            <div key={s.l} className="reveal text-center md:text-left">
              <p className="font-display text-4xl text-cream md:text-6xl">{s.n}</p>
              <p className="mt-1 text-sm uppercase tracking-widest text-cream/55">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* values */}
      <section className="bg-cream py-12 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-forest">
            How we work
          </p>
          <h2 className="reveal mt-3 font-display text-2xl uppercase leading-[1.05] text-charcoal md:text-5xl">
            Four rules. No exceptions.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-2">
            {VALUES.map((v, i) => (
              <article
                key={v.title}
                className="reveal rounded-3xl border border-charcoal/10 bg-white p-7 md:p-9"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <span className="font-display text-sm text-forest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-xl uppercase text-charcoal md:text-2xl">
                  {v.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-charcoal/65">{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* timeline */}
      <section className="bg-forest py-12 md:py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-cream/60">
            The short version
          </p>
          <h2 className="reveal mt-3 font-display text-2xl uppercase leading-[1.05] text-cream md:text-5xl">
            Ten years, four lines.
          </h2>
          <div className="mt-8 space-y-0 md:mt-12">
            {TIMELINE.map((t) => (
              <div
                key={t.year}
                className="reveal flex items-baseline gap-5 border-t border-cream/15 py-5 md:gap-10 md:py-6"
              >
                <span className="font-display text-xl text-cream/90 md:text-3xl">{t.year}</span>
                <p className="text-base text-cream/70 md:text-lg">{t.text}</p>
              </div>
            ))}
            <div className="border-t border-cream/15" />
          </div>
        </div>
      </section>

      {/* why cards reuse */}
      <section className="bg-cream py-12 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <h2 className="reveal font-display text-2xl uppercase leading-[1.05] text-charcoal md:text-5xl">
            Why neighbors pick us.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
            {GLASS_CARDS.map((c, i) => (
              <div
                key={c.title}
                className="reveal rounded-3xl bg-ink p-6 md:p-7"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <h3 className="font-display text-lg uppercase text-cream">{c.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-cream/70">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="reveal mt-10 grid grid-cols-1 gap-5 md:mt-14 md:grid-cols-2">
            {REVIEWS.slice(0, 2).map((r) => (
              <figure key={r.name} className="rounded-3xl border border-charcoal/10 bg-white p-7">
                <div className="text-amber-400">★★★★★</div>
                <blockquote className="mt-3 text-base leading-relaxed text-charcoal/80">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-4 text-sm font-bold text-charcoal">
                  {r.name} <span className="font-normal text-charcoal/55">— {r.town}, OH</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="reveal mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-forest px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-forest-deep"
            >
              See what we do
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Meet us at your door."
        sub="Free estimates across the Columbus area. We'll diagnose it, price it flat, and give you a straight answer."
      />

      {/* FAQ */}
      <section className="bg-cream pb-16 md:pb-24">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <h2 className="reveal font-display text-2xl uppercase text-charcoal md:text-4xl">
            Quick answers.
          </h2>
          <div className="mt-6">
            <Faq
              items={[
                {
                  q: "Are you licensed and insured?",
                  a: "Yes — fully licensed and insured on every job, and we'll show you the credentials before we start.",
                },
                {
                  q: "Do you give free estimates?",
                  a: "Always. We diagnose the problem, show you what's wrong, and give you a firm written price. No fee, no pressure.",
                },
                {
                  q: "Will you clean up?",
                  a: "Completely. Drop cloths, shoe covers, and a full wipe-down when we're done. It's part of every quote, not an add-on.",
                },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
