import Image from "next/image";
import Link from "next/link";
import ReviewsCarousel from "./components/ReviewsCarousel";
import MainSearchAISection from "./components/MainSearchAISection";



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
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* bottom fade like your design */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />

        <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-semibold tracking-[0.25em]">
            ONMAIN
          </h1>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-2xl md:text-3xl text-black/65 leading-relaxed">
            Onmain aims to become a conglomerate of industries that passion us, with a focus on innovation.
          </p>
        </div>
      </section>

      {/* SPLIT BAR */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-3 w-full overflow-hidden rounded-sm">
          <div className="w-[70%] bg-[#0b5560]" />
          <div className="w-[30%] bg-[#062a33]" />
        </div>
      </div>

      {/* ONMAIN SYSTEMS */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-xl font-semibold text-black/80">Onmain Systems</h2>

          <div className="mt-4 border-t border-black/15" />

          {/* angled panel */}
          <div className="mt-5">
            <div
              className="relative rounded-sm bg-[#efefef] p-8 md:p-10"
              style={{
                clipPath:
                  "polygon(0 0, 82% 0, 100% 18%, 100% 100%, 0 100%)",
              }}
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <p className="max-w-xl text-black/70 leading-relaxed">
                  Our IT maintenance division that specialises in device diagnostics and repairs,
                  along with software solutions and website development.
                </p>

                <Link
                  href="/it-maintenance"
                  className="text-black/60 underline underline-offset-4 hover:text-black/80 md:text-right"
                >
                  Find out more (IT maintenance)
                </Link>
              </div>
            </div>
          </div>

          {/* real-time rating + carousel */}
          <ReviewsCarousel />
        </div>
      </section>

    {/* MAINSEARCH AI */}
<MainSearchAISection />


    </main>
  );


  
}


