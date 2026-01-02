import Link from "next/link";

export default function MainSearchAISection() {
  return (
    <section
      id="mainsearch-ai"
      className="relative isolate overflow-hidden py-24 sm:py-28"
    >
      {/* Base */}
      <div className="absolute inset-0 -z-10 bg-[#061f26]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0b5560]/35 via-[#062a33]/55 to-black/75" />

      {/* Faint rainbow glow (STATIC - no animation) */}
      <div className="absolute inset-0 -z-10 opacity-[0.20]">
        <div
          className="absolute -left-48 top-[-140px] h-[520px] w-[520px] rounded-full blur-[90px]"
          style={{
            background:
              "conic-gradient(from 180deg, rgba(255,0,122,0.50), rgba(255,200,0,0.40), rgba(0,255,163,0.40), rgba(0,170,255,0.40), rgba(190,0,255,0.40), rgba(255,0,122,0.50))",
            mixBlendMode: "screen",
          }}
        />
        <div
          className="absolute -right-56 bottom-[-180px] h-[620px] w-[620px] rounded-full blur-[110px]"
          style={{
            background:
              "conic-gradient(from 90deg, rgba(0,170,255,0.42), rgba(0,255,163,0.36), rgba(255,200,0,0.34), rgba(255,0,122,0.38), rgba(190,0,255,0.36), rgba(0,170,255,0.42))",
            mixBlendMode: "screen",
          }}
        />
      </div>

      {/* Soft teal bloom */}
      <div className="absolute inset-0 -z-10 opacity-[0.22] [background:radial-gradient(circle_at_18%_25%,rgba(11,85,96,0.55),transparent_55%),radial-gradient(circle_at_78%_38%,rgba(6,42,51,0.55),transparent_60%)]" />

      {/* Grain */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.10] mix-blend-overlay [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_3px)]" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] shadow-[0_28px_90px_rgba(0,0,0,0.35)]">
          <div className="pointer-events-none absolute inset-0 rounded-[30px] ring-1 ring-inset ring-white/10" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />

          {/* Static sheen (no animation) */}
          <div className="pointer-events-none absolute -left-40 top-[-120px] h-[260px] w-[520px] rotate-12 bg-white/10 blur-3xl opacity-45" />

          <div className="relative px-7 py-14 sm:px-14 sm:py-16">
            <div className="flex items-center gap-6">
              <div className="h-px flex-1 bg-white/15" />
              <h2 className="text-center text-[clamp(1.7rem,3vw,2.2rem)] font-medium tracking-tight text-white/80">
                MainSearch <span className="font-semibold text-white">AI</span>
              </h2>
              <div className="h-px flex-1 bg-white/15" />
            </div>

            <div className="mx-auto mt-10 max-w-3xl space-y-7 text-center">
              <p className="text-[clamp(1.1rem,2vw,1.55rem)] leading-relaxed text-white/75">
                A new way to find the business you need
              </p>

              <div className="mx-auto h-px w-20 bg-white/15" />

              <p className="text-[clamp(1.05rem,1.9vw,1.45rem)] leading-relaxed text-white/70">
                AI-powered to revolutionise the ease of connecting clients with businesses.
              </p>

              <p className="pt-1 text-[clamp(1.0rem,1.8vw,1.35rem)] leading-relaxed text-white/65">
                Starting with accurate pricing quotations for Onmain Systems.
              </p>

              <div className="pt-6">
                <Link
                  href="/mainsearch-ai"
                  className="group inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white/85 backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:border-white/30 hover:bg-white/10"
                >
                  Find out more
                  <span className="ml-2 inline-block transition-transform duration-500 group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
