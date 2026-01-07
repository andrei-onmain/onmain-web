"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function useInView<T extends Element>(opts?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, opts);

    io.observe(el);
    return () => io.disconnect();
  }, [opts]);

  return { ref, inView };
}

export default function AboutUsPage() {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.12,
    rootMargin: "0px 0px -10% 0px",
  });

  const motion =
    "transition-[opacity,transform,filter] duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)]";

  return (
    <main className="bg-white pt-16">
      {/* Short background strip ONLY behind the header (same idea as Contact) */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[60px] overflow-hidden">
        <Image
          src="/hero-bg3.png"
          alt="Onmain background"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/20 to-black/55" />
      </div>

      <div className="relative z-10">
        {/* Banner */}
        <section className="relative">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[#061f26]" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0b5560]/35 via-[#062a33]/60 to-black/80" />
            {/* subtle ambient only */}
            <div className="absolute -left-52 top-[-240px] h-[520px] w-[520px] rounded-full bg-white/6 blur-3xl" />
            <div className="absolute -right-52 bottom-[-260px] h-[560px] w-[560px] rounded-full bg-[#0b5560]/16 blur-3xl" />
            <div className="absolute inset-0 opacity-[0.07] [background:radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.16),transparent_55%)]" />
          </div>

          <div className="relative mx-auto max-w-6xl px-6 py-12 sm:py-14" ref={ref}>
            <div
              className={[
                motion,
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
              ].join(" ")}
            >
              <h1 className="text-center text-white text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-[0.18em]">
                ABOUT US
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-center text-white/75 text-[clamp(1rem,2vw,1.25rem)] leading-relaxed">
                Onmain is a parent brand built to deliver high-quality technology services through specialist divisions.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="relative py-10 sm:py-14">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-8 lg:grid-cols-5">
              {/* About card */}
              <div
                className={[
                  "lg:col-span-3 relative overflow-hidden rounded-[28px] border border-white/10 bg-[#061f26] shadow-[0_24px_80px_rgba(0,0,0,0.18)]",
                  motion,
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
                ].join(" ")}
                style={{ transitionDelay: "60ms" }}
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0b5560]/40 via-[#062a33]/65 to-black/85" />
                <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background:radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.14),transparent_55%)]" />
                <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/10" />

                <div className="relative p-8 sm:p-10">
                  <div className="text-xs uppercase tracking-[0.28em] text-white/55">Who we are</div>
                  <h2 className="mt-3 text-[clamp(1.5rem,2.6vw,2.2rem)] font-semibold text-white">
                    Built for quality, built to scale.
                  </h2>

                  <div className="mt-6 space-y-4 text-white/75 leading-relaxed">
                    <p>
                      Onmain launched in <span className="text-white">May 2023</span> with a simple goal: deliver premium,
                      reliable services with a clear, professional customer experience.
                    </p>
                    <p>
                      In <span className="text-white">January 2024</span>, we created{" "}
                      <span className="text-white">Onmain Systems</span> as our specialist IT maintenance and repair division —
                      focused on device repairs, software maintenance, and practical solutions that keep people and businesses running.
                    </p>
                    <p className="text-white/70">
                      We operate with a security-minded, detail-first approach — transparent communication, careful handling, and
                      results you can trust.
                    </p>
                  </div>

                  <div className="mt-8 h-px bg-white/10" />

                  <div className="mt-6 grid gap-3 sm:grid-cols-3 text-sm">
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
                      <div className="text-xs uppercase tracking-[0.22em] text-white/55">Founded</div>
                      <div className="mt-1 font-semibold text-white">May 2023</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
                      <div className="text-xs uppercase tracking-[0.22em] text-white/55">Division</div>
                      <div className="mt-1 font-semibold text-white">Onmain Systems</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
                      <div className="text-xs uppercase tracking-[0.22em] text-white/55">Based in</div>
                      <div className="mt-1 font-semibold text-white">London, UK</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divisions card */}
              <div
                className={[
                  "lg:col-span-2 relative overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.08)]",
                  motion,
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
                ].join(" ")}
                style={{ transitionDelay: "120ms" }}
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0b5560]/14 via-white to-white" />
                <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background:radial-gradient(circle_at_15%_30%,#0b5560,transparent_55%),radial-gradient(circle_at_85%_40%,#062a33,transparent_55%)]" />

                <div className="relative p-8">
                  <div className="text-xs uppercase tracking-[0.28em] text-black/50">Divisions</div>
                  <h3 className="mt-3 text-[clamp(1.25rem,2vw,1.6rem)] font-semibold tracking-tight text-black/85">
                    Specialist by design
                  </h3>

                  <div className="mt-6 space-y-4 text-sm text-black/70">
                    <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-4">
                      <div className="font-semibold text-black/85">Onmain Systems</div>
                      <div className="mt-1">
                        IT maintenance, device repairs, software support, and computer builds.
                      </div>
                    </div>

                    <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-4">
                      <div className="font-semibold text-black/85">MainSearch AI</div>
                      <div className="mt-1">A future division focused on AI-driven search and automation.</div>
                    </div>
                  </div>

                  <div className="mt-7 text-xs text-black/55">
                    One brand. Multiple specialist services. Same quality standard.
                  </div>
                </div>
              </div>
            </div>

            {/* Stats (better version of old website) */}
            <div className="mt-10 sm:mt-14">
              <div className="mx-auto max-w-3xl text-center">
                <div className="text-xs uppercase tracking-[0.28em] text-black/45">Our statistics</div>
                <h2 className="mt-3 text-[clamp(1.6rem,3vw,2.2rem)] font-semibold text-black/85">
                  Trusted work, measurable results
                </h2>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { big: "50+", small: "Satisfied clients" },
                  { big: "2+", small: "Years operating" },
                  { big: "67", small: "Completed projects" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="relative overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.08)]"
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background:radial-gradient(circle_at_20%_20%,#0b5560,transparent_55%),radial-gradient(circle_at_80%_35%,#062a33,transparent_55%)]" />
                    <div className="relative p-6 text-center">
                      <div className="text-[clamp(2.2rem,4vw,3rem)] font-semibold tracking-tight text-black/85">
                        {s.big}
                      </div>
                      <div className="mt-1 text-sm text-black/60">{s.small}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center text-xs text-black/45">
                Figures reflect Onmain Systems activity since launch.
              </div>
            </div>

            <div className="h-10 sm:h-14" />
          </div>
        </section>
      </div>
    </main>
  );
}
