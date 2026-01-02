// app/page.tsx
import Image from "next/image";
import ReviewsCarousel from "./components/ReviewsCarousel";
import MainSearchAISection from "./components/MainSearchAISection";
import OnmainSystemsSection from "./components/OnmainSystemsSection";
import ScrollDownButton from "./components/ScrollDownButton";

export default function HomePage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative w-full overflow-hidden h-[clamp(420px,70vh,780px)]">
        <Image
          src="/hero-bg3.png"
          alt="Onmain background"
          fill
          priority
          quality={70}
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* bottom fade/shadow like IT maintenance */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <div className="text-white font tracking-[0.12em] font-sans text-[clamp(2.8rem,8vw,3.2rem)]">
  Discover Onmain
</div>


          <ScrollDownButton
            targetId="home-content"
            className="mt-10 inline-flex flex-col items-center gap-3 text-white/90 transition-opacity hover:opacity-100 opacity-95"
          />
        </div>
      </section>

      {/* STATEMENT (target for scroll) */}
      <section id="home-content" className="py-19 scroll-mt-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-2xl md:text-3xl text-black/90 leading-relaxed">
            Onmain aims to become a conglomerate of industries that inspire us, with a focus on innovation.
          </p>
        </div>
      </section>

      {/* SPLIT BAR */}
      {/* DIVIDER */}
<div className="mx-auto my-5 max-w-5xl px-6">
  <div className="relative h-px w-full overflow-hidden bg-[#0b5560]/20">
    <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-[#0b5560]/60 to-transparent" />
  </div>
</div>




      {/* ONMAIN SYSTEMS */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-6">
          <OnmainSystemsSection
            description="Our IT maintenance division that specialises in device diagnostics and repairs, along with software solutions and website development."
            href="/it-maintenance"
            linkText="Find out more"
          />
          <ReviewsCarousel />
        </div>
      </section>

      {/* MAINSEARCH AI */}
      <MainSearchAISection />
    </main>
  );
}
