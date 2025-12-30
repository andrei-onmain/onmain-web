import Image from "next/image";
import ScrollBrush from "./components/ScrollBrush";


export default function HomePage() {
  return (
    <main className="pt">
      {/* Background section under the header */}
      <section className="relative w-full overflow-hidden h-[clamp(320px,60vh,780px)]">
        {/* Background image */}
        <Image
          src="/hero-bg3.png"
          alt="Onmain background"
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />
        
  <ScrollBrush fadeDistance={900} />

  <div className="relative z-10 flex h-full items-center justify-center">
    <h1 className="text-white text-5xl font-semibold tracking-wide"></h1>
  </div>

        {/* Optional dark overlay for readability */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Temporary placeholder content */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="text-white text-5xl font-semibold tracking-wide">
            
          </h1>
        </div>
      </section>

      {/* Rest of page (leave empty for now) */}
      <section className="min-h-[40vh]" />
    </main>
  );
}
