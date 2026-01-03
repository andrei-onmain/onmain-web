"use client";

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

function Node({
  step,
  title,
  desc,
  tone = "dark",
}: {
  step: string;
  title: string;
  desc: string;
  tone?: "dark" | "light";
}) {
  const base =
    "relative overflow-hidden rounded-2xl border shadow-[0_18px_60px_rgba(0,0,0,0.08)]";
  const light =
    "border-black/10 bg-white";
  const dark =
    "border-white/10 bg-[#061f26]";

  return (
    <div className={[base, tone === "dark" ? dark : light].join(" ")}>
      {tone === "dark" ? (
        <>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0b5560]/55 via-[#062a33]/70 to-black/70" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background:radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.14),transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
        </>
      ) : (
        <>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0b5560]/18 via-white to-white" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background:radial-gradient(circle_at_15%_30%,#0b5560,transparent_55%),radial-gradient(circle_at_85%_40%,#062a33,transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
        </>
      )}

      <div className="relative p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <div
            className={[
              "shrink-0 rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
              tone === "dark" ? "bg-white/10 text-white/90" : "bg-black/5 text-black/70",
            ].join(" ")}
          >
            {step}
          </div>

          <div className="min-w-0">
            <div className={tone === "dark" ? "text-white/95 font-semibold" : "text-black/85 font-semibold"}>
              {title}
            </div>
            <div className={tone === "dark" ? "mt-1 text-sm text-white/80" : "mt-1 text-sm text-black/60"}>
              {desc}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OnmainSystemsFlow() {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px",
  });

  const motion =
    "transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)]";

  const line = "bg-[#0b5560]/25";

  return (
    <section className="py-6 sm:py-8">
      <div className="mx-auto max-w-6xl px-1 sm:px-6" ref={ref}>
        <div
          className={[
            "relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.08)]",
            motion,
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          ].join(" ")}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0b5560]/18 via-white to-white" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background:radial-gradient(circle_at_15%_30%,#0b5560,transparent_55%),radial-gradient(circle_at_85%_40%,#062a33,transparent_55%)]" />
          <div className="pointer-events-none absolute -inset-y-10 left-[-40%] w-[55%] rotate-12 bg-gradient-to-r from-transparent via-[#0b5560]/18 to-transparent blur-xl opacity-80 onmain-glare" />
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />

          <div className="relative p-5 sm:p-7">
            <div className="text-xs uppercase tracking-[0.25em] text-black/45">
              Onmain Systems
            </div>
            <h3 className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight text-black/90">
              How it works
            </h3>

            {/* Tree */}
            <div className="mt-5">
              {/* Top two steps */}
              <div className="mx-auto max-w-2xl">
                <Node
  step="1"
  title="Contact"
  desc="Call, email, or message."
  tone="dark"
/>

                <div className="flex justify-center">
                  <div className={`my-3 h-6 w-px ${line}`} />
                </div>

                <Node
  step="2"
  title="Quote"
  desc="We confirm the job and agree the service option."
  tone="light"
/>
              </div>

              {/* Branch connector */}
              <div className="mx-auto max-w-2xl">
                <div className="flex justify-center">
                  <div className={`my-3 h-6 w-px ${line}`} />
                </div>

                {/* Horizontal split line (desktop) */}
                <div className="relative hidden md:block">
                  <div className={`mx-auto h-px w-[86%] ${line}`} />
                  <div className="mx-auto flex w-[86%] justify-between">
                    <div className={`h-4 w-px ${line}`} />
                    <div className={`h-4 w-px ${line}`} />
                  </div>
                </div>
              </div>

              {/* Branches */}
              <div className="mt-2 grid gap-4 md:grid-cols-2 md:gap-6">
                {/* Left branch */}
                <div className="relative">
                  <div className="mb-2 text-sm font-semibold text-black/70">
                    Option A — On-site

                  </div>

                  <Node
  step="3A"
  title="On-site visit"
  desc="We come to you."
  tone="dark"
/>

                  <div className="flex justify-center">
                    <div className={`my-3 h-6 w-px ${line}`} />
                  </div>
                <Node
  step="4A"
  title="Fix"
  desc="Completed on-site when suitable."
  tone="light"
/>
                </div>

                {/* Right branch */}
                <div className="relative">
                  <div className="mb-2 text-sm font-semibold text-black/70">
                    Option B — Pickup & return

                  </div>

                <Node
  step="3B"
  title="Pickup"
  desc="We collect the device."
  tone="dark"
/>
                  <div className="flex justify-center">
                    <div className={`my-3 h-6 w-px ${line}`} />
                  </div>
                <Node
  step="4B"
  title="Repair"
  desc="Fixed and tested in the workshop."
  tone="light"
/>
                  <div className="flex justify-center">
                    <div className={`my-3 h-6 w-px ${line}`} />
                  </div>
                <Node
  step="5B"
  title="Return"
  desc="Delivered back to you."
  tone="dark"
/>
                </div>
              </div>

              {/* Merge to final step */}
              <div className="mt-5">
                <div className="hidden md:flex items-center justify-center">
                  <div className={`h-4 w-px ${line}`} />
                </div>

                <div className="mx-auto max-w-2xl">
                <Node
  step="5"
  title="Approval + payment"
  desc="Pay after you’re happy."
  tone="dark"
/>
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes onmainGlare {
              0% {
                transform: translateX(0) rotate(12deg);
              }
              100% {
                transform: translateX(220%) rotate(12deg);
              }
            }
            .onmain-glare {
              animation: onmainGlare 5.8s cubic-bezier(0.22, 1, 0.36, 1) infinite;
            }
            @media (prefers-reduced-motion: reduce) {
              .onmain-glare {
                animation: none;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
