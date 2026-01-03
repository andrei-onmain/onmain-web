"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function scrollEverythingToTop() {
  // window + document
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  // common scroll containers (in case you're scrolling inside a wrapper)
  const selectors = [
    "#scroll-root",
    "[data-scroll-root='true']",
    "main",
    "[role='main']",
  ];

  for (const sel of selectors) {
    const el = document.querySelector(sel) as HTMLElement | null;
    if (!el) continue;

    el.scrollTop = 0;
    el.scrollLeft = 0;
    if (typeof (el as any).scrollTo === "function") {
      (el as any).scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }
}

export default function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // stop browser restoring scroll on navigation/back-forward
  useEffect(() => {
    try {
      window.history.scrollRestoration = "manual";
    } catch {}
  }, []);

  // run after navigation + after paint (twice) + small fallback delay
  useEffect(() => {
    const run = () => scrollEverythingToTop();

    // immediate
    run();

    // after paint (more reliable)
    requestAnimationFrame(() => requestAnimationFrame(run));

    // fallback (images/fonts/layout shifts)
    const t = window.setTimeout(run, 80);

    return () => window.clearTimeout(t);
  }, [pathname, searchParams?.toString()]);

  // BFCache restores scroll even if you do everything else
  useEffect(() => {
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        requestAnimationFrame(() => requestAnimationFrame(scrollEverythingToTop));
      }
    };
    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);

  return null;
}
