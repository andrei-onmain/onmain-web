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

function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: "contact" | "quote" | "route" | "onsite" | "pickup" | "payment";
  className?: string;
}) {
  const common = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  switch (name) {
    case "contact":
      return (
        <svg {...common}>
          <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
          <path d="M8 8h8" />
          <path d="M8 12h6" />
        </svg>
      );
    case "quote":
      return (
        <svg {...common}>
          <path d="M7 3h7l3 3v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
          <path d="M14 3v4h4" />
          <path d="M8 11h8" />
          <path d="M8 15h6" />
        </svg>
      );
    case "route":
      return (
        <svg {...common}>
          <path d="M6 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4z" />
          <path d="M18 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4z" />
          <path d="M6 15c0-6 6-2 6-8" />
          <path d="M12 7c0 6 6 2 6 8" />
        </svg>
      );
    case "onsite":
      return (
        <svg {...common}>
          <path d="M4 10l8-6l8 6" />
          <path d="M6 10v10h12V10" />
          <path d="M10 20v-6h4v6" />
        </svg>
      );
    case "pickup":
      return (
        <svg {...common}>
          <path d="M3 7h11v10H3z" />
          <path d="M14 10h4l3 3v4h-7z" />
          <path d="M7 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4z" />
          <path d="M18 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4z" />
        </svg>
      );
    case "payment":
      return (
        <svg {...common}>
          <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
          <path d="M2 10h20" />
          <path d="M6 14h4" />
        </svg>
      );
  }
}

function Step({
  n,
  title,
  subtitle,
  icon,
  tone = "dark",
}: {
  n: string;
  title: string;
  subtitle: string;
  icon: Parameters<typeof Icon>[0]["name"];
  tone?: "dark" | "light";
}) {
  const base =
    "relative overflow-hidden rounded-2xl border shadow-[0_18px_60px_rgba(0,0,0,0.08)]";

  const dark = "border-white/10 bg-[#061f26]";
  const light = "border-black/10 bg-white";

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
              "shrink-0 grid place-items-center rounded-2xl p-2",
              tone === "dark" ? "bg-white/10 text-white" : "bg-black/5 text-black/70",
            ].join(" ")}
          >
            <Icon name={icon} />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span
                className={[
                  "rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide",
                  tone === "dark" ? "bg-white/10 text-white/90" : "bg-black/5 text-black/60",
                ].join(" ")}
              >
                {n}
              </span>
              <div className={tone === "dark" ? "font-semibold text-white/95" : "font-semibold text-black/85"}>
                {title}
              </div>
            </div>
            <div className={tone === "dark" ? "mt-1 text-sm text-white/80" : "mt-1 text-sm text-black/60"}>
              {subtitle}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OnmainSystemsFlowV2() {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px",
  });

  const motion =
    "transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)]";

  const line = "bg-[#0b5560]/25";

  return (
    <section className="pt-1 pb-6 sm:pt-2 sm:pb-8">

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
            <div className="text-xs uppercase tracking-[0.25em] text-black/45">Onmain Systems</div>
            <h3 className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight text-black/90">
              How it works
            </h3>

            {/* Desktop stepper (clean + intuitive) */}
            <div className="relative mt-6 hidden md:block">
              <div className={`absolute left-6 right-6 top-[38px] h-px ${line}`} />
              <div className="grid grid-cols-3 gap-6">
                <div className={motion + (inView ? " opacity-100 translate-y-0" : " opacity-0 translate-y-2")}>
                  <Step n="1" title="Contact" subtitle="Call, email, or message." icon="contact" tone="dark" />
                </div>
                <div
                  className={motion + (inView ? " opacity-100 translate-y-0" : " opacity-0 translate-y-2")}
                  style={{ transitionDelay: "80ms" }}
                >
                  <Step n="2" title="Quote" subtitle="Confirm + pricing." icon="quote" tone="light" />
                </div>
                <div
                  className={motion + (inView ? " opacity-100 translate-y-0" : " opacity-0 translate-y-2")}
                  style={{ transitionDelay: "160ms" }}
                >
                  <Step n="3" title="Choose service" subtitle="On-site or pickup." icon="route" tone="dark" />
                </div>
              </div>
            </div>

            {/* Mobile stepper */}
            <div className="relative mt-6 md:hidden">
              <div className={`absolute left-[18px] top-3 bottom-3 w-px ${line}`} />
              <div className="space-y-4 pl-8">
                <div className={motion + (inView ? " opacity-100 translate-y-0" : " opacity-0 translate-y-2")}>
                  <Step n="1" title="Contact" subtitle="Call, email, or message." icon="contact" tone="dark" />
                </div>
                <div
                  className={motion + (inView ? " opacity-100 translate-y-0" : " opacity-0 translate-y-2")}
                  style={{ transitionDelay: "80ms" }}
                >
                  <Step n="2" title="Quote" subtitle="Confirm + pricing." icon="quote" tone="light" />
                </div>
                <div
                  className={motion + (inView ? " opacity-100 translate-y-0" : " opacity-0 translate-y-2")}
                  style={{ transitionDelay: "160ms" }}
                >
                  <Step n="3" title="Choose service" subtitle="On-site or pickup." icon="route" tone="dark" />
                </div>
              </div>
            </div>

            {/* Branch connector */}
            <div className="mt-6 hidden md:block">
              <div className="flex justify-center">
                <div className={`h-6 w-px ${line}`} />
              </div>
              <div className={`mx-auto h-px w-[72%] ${line}`} />
              <div className="mx-auto flex w-[72%] justify-between">
                <div className={`h-4 w-px ${line}`} />
                <div className={`h-4 w-px ${line}`} />
              </div>
            </div>

            {/* Branch cards */}
            <div className="mt-3 grid gap-4 md:grid-cols-2 md:gap-6">
              <div
                className={motion + (inView ? " opacity-100 translate-y-0" : " opacity-0 translate-y-2")}
                style={{ transitionDelay: "220ms" }}
              >
                <div className="mb-2 text-sm font-semibold text-black/70">Option A</div>
                <Step n="A" title="On-site" subtitle="We come to you and fix when suitable." icon="onsite" tone="dark" />
              </div>

              <div
                className={motion + (inView ? " opacity-100 translate-y-0" : " opacity-0 translate-y-2")}
                style={{ transitionDelay: "260ms" }}
              >
                <div className="mb-2 text-sm font-semibold text-black/70">Option B</div>
                <Step n="B" title="Pickup & return" subtitle="Collected, repaired, tested, delivered back." icon="pickup" tone="dark" />
              </div>
            </div>

            {/* Final */}
            <div className="mt-6">
              <div className="flex justify-center">
                <div className={`h-6 w-px ${line}`} />
              </div>

              <div
                className={motion + (inView ? " opacity-100 translate-y-0" : " opacity-0 translate-y-2")}
                style={{ transitionDelay: "320ms" }}
              >
                <Step n="4" title="Approval + payment" subtitle="Payment is taken after your approval of the service." icon="payment" tone="dark" />
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
