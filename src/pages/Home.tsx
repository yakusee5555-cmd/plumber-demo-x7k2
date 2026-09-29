import Hero from "../components/Hero";
import { Contact, Reviews } from "../components/Sections";
import { DarkList, FullBleed, Pricing, Stacked, Work } from "../components/Showcase";
import { RouteFX } from "../components/PageBits";

export default function Home() {
  return (
    <>
      <RouteFX
        title="TrueFlow Plumbing | Plumber in Columbus, OH — Drains, Water Heaters, 24/7 Emergency"
        description="TrueFlow Plumbing — 24/7 emergency plumbing, drain cleaning, water heater repair & installation, and leak detection across Columbus, OH. Free estimates."
      />
      <Hero />
      <Stacked />
      <DarkList />
      <FullBleed />
      <Work />
      <Pricing />
      <Reviews />
      <Contact />
    </>
  );
}
