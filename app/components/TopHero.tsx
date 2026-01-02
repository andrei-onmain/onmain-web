import Image from "next/image";

export default function TopHero({ title }: { title?: string }) {
  return (
    <section className="relative w-full overflow-hidden h-[clamp(420px,70vh,780px)]">
      <Image
        src="/hero-bg3.png"
        alt="Onmain background"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        placeholder="blur"
        quality={70}
      />

      {/* bottom fade like homepage */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />

      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-white text-3xl md:text-5xl font-semibold tracking-[0.25em]">
          {(title ?? "ONMAIN").toUpperCase()}
        </h1>
      </div>
    </section>
  );
}
