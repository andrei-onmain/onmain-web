"use client";

import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect(); // reveal once
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -15% 0px", // triggers as you scroll down into it
      }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={[
        className,
        "will-change-transform",
        "transition-[opacity,transform] duration-1000 ease-out",
        "motion-reduce:transition-none motion-reduce:transform-none",
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
      ].join(" ")}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function MainSearchAISection() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-6">
        {/* Title line */}
        <div className="flex items-center gap-5">
          <div className="h-px flex-1 bg-black/25" />
          <h2 className="text-2xl text-black/55">MainSearch AI</h2>
          <div className="h-px flex-1 bg-black/25" />
        </div>

        {/* Content */}
        <div className="mx-auto mt-14 max-w-3xl text-center">
          <Reveal delay={0}>
            <div className="flex items-start justify-center gap-6">
              <span className="mt-3.5 h-px w-14 bg-black/40" />
              <p className="text-xl md:text-2xl text-black/55 leading-relaxed">
                A new way to find the business you need
              </p>
            </div>
          </Reveal>

          <Reveal delay={500} className="mt-9">
            <div className="flex items-start justify-center gap-6">
              <span className="mt-3.5 h-px w-14 bg-black/40" />
              <p className="text-xl md:text-2xl text-black/55 leading-relaxed">
                AI-powered to revolutionise the ease of connecting the client with a business.
              </p>
            </div>
          </Reveal>

          <Reveal delay={1000} className="mt-10">
            <p className="text-lg md:text-xl text-black/60 leading-relaxed">
              Starting with accurate pricing quotations for Onmain Systems.
            </p>
          </Reveal>

          <Reveal delay={1500} className="mt-8">
            <Link
              href="/mainsearch-ai"
              className="inline-flex items-baseline gap-2 text-lg md:text-xl text-black/60 hover:text-black/80"
            >
              <span className="underline underline-offset-4">Find out more</span>
              <span className="text-black/50">(Link to MainSearch AI)</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
