"use client";

import Link from "next/link";
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

type Props = {
  title?: string;
  description: string;
  href: string;
  linkText: string;
};

export default function OnmainSystemsSection({
  title = "Onmain Systems",
  description,
  href,
  linkText,
}: Props) {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px",
  });

  const motion =
    "transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)]";

  return (
    // less gap from the bar above
   <section className="pt-5 pb-4 sm:pt-8 sm:pb-6">

      {/* closer to edges on mobile */}
      <div className="mx-auto max-w-6xl px-1 sm:px-6" ref={ref}>
        {/* Headline banner */}
        <div
          className={[
            "relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.08)]",
            motion,
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          ].join(" ")}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0b5560]/25 via-white to-white" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background:radial-gradient(circle_at_15%_30%,#0b5560,transparent_55%),radial-gradient(circle_at_85%_40%,#062a33,transparent_55%)]" />
          <div className="pointer-events-none absolute -inset-y-10 left-[-40%] w-[55%] rotate-12 bg-gradient-to-r from-transparent via-[#0b5560]/25 to-transparent blur-xl opacity-80 onmain-glare" />
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />

          {/* centred title */}
          <div className="relative flex min-h-[90px] items-center justify-center px-4 py-6 sm:px-8 text-center">
            <h2 className="text-[clamp(2.2rem,2.6vw,3.4rem)] font-semibold tracking-tight text-black/100">
              {title}
            </h2>
          </div>
        </div>

        {/* Description panel */}
        <div
          className={[
            "mt-2 relative overflow-hidden", // slightly tighter than mt-5
            motion,
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          ].join(" ")}
          style={{ transitionDelay: "80ms" }}
        >
          <div
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#061f26] shadow-[0_24px_80px_rgba(0,0,0,0.18)]"
            style={{
              clipPath: "polygon(0 0, 82% 0, 100% 18%, 100% 100%, 0 100%)",
            }}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0b5560]/55 via-[#062a33]/70 to-black/75" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background:radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.14),transparent_55%)]" />
            <div className="pointer-events-none absolute -inset-y-16 left-[-40%] w-[55%] rotate-12 bg-gradient-to-r from-transparent via-white/12 to-transparent blur-2xl opacity-70 onmain-glare" />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />

            {/* slightly tighter padding on mobile */}
            <div className="relative p-6 sm:p-8 md:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <p className="max-w-xl leading-relaxed text-white/100">
                  {description}
                </p>

                <Link
                  href={href}
                  className="text-white/ underline underline-offset-4 transition hover:text-white/90 md:text-right"
                >
                  {linkText}
                </Link>
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
    </section>
  );
}
