"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// Use useLayoutEffect on client, useEffect on server (SSR safety)
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

function scrollEverythingToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

export default function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const prevPathname = useRef(pathname);

  // Disable browser scroll restoration
  useEffect(() => {
    try {
      window.history.scrollRestoration = "manual";
    } catch {}
  }, []);

  // Intercept all internal link clicks to scroll BEFORE navigation
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      
      if (!anchor) return;
      
      const href = anchor.getAttribute("href");
      if (!href) return;
      
      // Only handle internal navigation (starts with / and not external)
      const isInternal = href.startsWith("/") && !href.startsWith("//");
      const isSamePage = href === pathname || href.startsWith("#");
      
      if (isInternal && !isSamePage) {
        // Scroll to top IMMEDIATELY before Next.js navigation happens
        scrollEverythingToTop();
      }
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, [pathname]);

  // Also scroll on route change (catches programmatic navigation)
  useIsomorphicLayoutEffect(() => {
    if (prevPathname.current !== pathname) {
      scrollEverythingToTop();
      prevPathname.current = pathname;
    }
  }, [pathname, searchParams?.toString()]);

  // BFCache handling
  useEffect(() => {
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        scrollEverythingToTop();
      }
    };
    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);

  return null;
}
