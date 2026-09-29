import { Link } from "react-router-dom";
import { SERVICE_DETAILS } from "../data/services";
import { CtaBand, PageHero, RouteFX } from "../components/PageBits";

const BLURBS: Record<string, string> = {
  "emergency-plumbing": "Burst pipes, major leaks, sewage backups — live dispatch 24/7.",
  "drain-cleaning": "Camera inspection, hydro-jetting, main-line clearing from $149.",
  "water-heater": "Tank & tankless repair and replacement — usually same day.",
  "leak-detection": "Acoustic & thermal detection with minimal cutting.",
};

export default function Services() {
  return (
    <>
      <RouteFX
        title="Plumbing Services in Columbus OH | Drains, Water Heaters, Emergency"
        description="TrueFlow's plumbing services: 24/7 emergency plumbing, drain cleaning, water heater repair & installation, and leak detection across Columbus, OH. Free estimates."
      />
      <PageHero
        eyebrow="Services"
        title={
          <>
            Everything your
            <br />
            pipes need.
          </>
        }
        sub="Four specialties, done right. Pick a service for the full breakdown — what's included, how we work, and honest pricing."
        img="/img/svc-drain.jpg"
      />

      <section className="bg-cream py-12 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {SERVICE_DETAILS.map((s, i) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="reveal group overflow-hidden rounded-3xl bg-ink shadow-lg transition-transform duration-500 hover:-translate-y-1.5"
                style={{ transitionDelay: `${(i % 2) * 90}ms` }}
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                </div>
                <div className="p-7 md:p-8">
                  <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-cream/50">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-2 font-display text-2xl uppercase text-cream md:text-3xl">
                    {s.title}
                  </h2>
                  <p className="mt-2 text-base text-cream/65">{BLURBS[s.slug]}</p>
                  <span className="mt-5 inline-flex min-h-[48px] items-center text-sm font-bold uppercase tracking-[0.2em] text-cream transition group-hover:translate-x-1">
                    View service →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="reveal mt-10 rounded-3xl border border-charcoal/10 bg-white p-7 md:mt-14 md:p-10">
            <h2 className="font-display text-2xl uppercase text-charcoal md:text-3xl">
              Something else?
            </h2>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-charcoal/65">
              Sump pumps, garbage disposals, water filtration, gas lines, repiping —
              if it carries water or gas through your house, we've probably fixed it.
              Describe the job and we'll tell you straight whether we're the right crew.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex min-h-[52px] items-center justify-center rounded-full bg-forest px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-forest-deep"
            >
              Ask us
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
