import { useEffect, useRef } from "react";

export default function Hero() {
  const backRef = useRef<HTMLDivElement>(null);
  const foreRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip parallax on mobile + reduced-motion: layers stay static, content fully visible
    if (
      window.matchMedia("(max-width: 767px)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (backRef.current) backRef.current.style.transform = `translateY(${y * 0.25}px)`;
        if (foreRef.current) foreRef.current.style.transform = `translateY(${y * 0.12}px)`;
        if (contentRef.current)
          contentRef.current.style.opacity = String(Math.max(0, 1 - y / 500));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative h-[100svh] overflow-hidden bg-[#0b1520]">
      {/* BACK LAYER — atmosphere + giant wordmark sitting behind the plumber photo */}
      <div ref={backRef} className="absolute inset-0 will-change-transform">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#123a63_0%,#0b1520_70%)]" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="hero-title font-display font-black text-[#f5f8fb] leading-none tracking-tight select-none text-[clamp(2.25rem,11vw,21rem)]">
            TRUEFLOW
          </h1>
        </div>
      </div>

      {/* FRONT LAYER — plumber photo overlapping the wordmark */}
      <div ref={foreRef} className="absolute inset-0 z-10 will-change-transform pointer-events-none">
        <img
          src="/img/plumber-hero.jpg"
          alt="TrueFlow plumber repairing pipes in front of the TrueFlow wordmark"
          draggable={false}
          className="hero-fore h-full w-full object-cover"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, transparent 16%, black 48%)",
            maskImage: "linear-gradient(to bottom, transparent 16%, black 48%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      </div>

      {/* CONTENT */}
      <div
        ref={contentRef}
        className="absolute inset-0 z-20 flex flex-col justify-between px-6 md:px-12 pt-28 pb-8"
      >
        <div className="hero-fade flex justify-end" style={{ animationDelay: "0.9s" }}>
          <p className="text-right text-[11px] md:text-xs font-bold tracking-[0.35em] text-white/70 leading-loose">
            EMERGENCY<br />DRAIN CLEANING<br />WATER HEATERS
          </p>
        </div>

        <div>
          <p
            className="hero-fade text-center text-xs md:text-sm font-bold tracking-[0.5em] text-white/80 mb-8"
            style={{ animationDelay: "1.1s" }}
          >
            PLUMBING
          </p>
          <div
            className="hero-fade flex flex-col md:flex-row items-start md:items-end justify-between gap-6"
            style={{ animationDelay: "1.2s" }}
          >
            <p className="max-w-md text-white/85 text-base md:text-lg leading-relaxed">
              Clogs, leaks &amp; cold showers. Fixed right. Repairs, installs &amp; 24/7 emergency response across Columbus, OH.
            </p>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href="#contact"
                className="flex min-h-[48px] items-center justify-center rounded-full bg-[#f5f8fb] px-8 py-4 text-center text-sm font-bold tracking-widest text-[#0b1520] hover:bg-white transition-colors"
              >
                FREE ESTIMATE
              </a>
              <a
                href="tel:+15552345678"
                className="flex min-h-[48px] items-center justify-center rounded-full border border-white/60 px-8 py-4 text-center text-sm font-bold tracking-widest text-white hover:bg-white/10 transition-colors"
              >
                (555) 234-5678
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
