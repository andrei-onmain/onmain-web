"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        setScrollY(window.scrollY || 0);
        ticking.current = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Switch to glass as soon as the user scrolls (prevents colour shifting)
  const scrolled = scrollY > 0;

  const glassBg = "rgba(8, 49, 58, 0.78)"; // darker blue
  const glassBorder = "rgba(255, 255, 255, 0.14)";
  const glassShadow = "0 10px 30px rgba(0, 0, 0, 0.18)";

  const linkClass =
    "group relative px-2 py-1 text-white/90 transition-colors duration-200 hover:text-gray-200";

  const underlineClass =
    "absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 bg-gray-200 transition-transform duration-200 group-hover:scale-x-100";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16">
      <div
        className="relative h-full transition-all duration-200 ease-out"
        style={{
          backgroundColor: scrolled ? glassBg : "transparent",
          borderBottom: scrolled ? `1px solid ${glassBorder}` : "1px solid transparent",
          backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
          boxShadow: scrolled ? glassShadow : "none",
        }}
      >
        {/* liquid-glass highlights (fade in, but keep the same tint) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 transition-opacity duration-200 ease-out"
          style={{ opacity: scrolled ? 1 : 0 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-white/8 to-transparent" />
          <div className="absolute -left-24 -top-10 h-24 w-64 rounded-full bg-white/18 blur-2xl" />
          <div className="absolute -right-20 top-2 h-16 w-44 rounded-full bg-white/10 blur-2xl" />
        </div>

        <div className="mx-auto flex h-full max-w-6xl items-center px-6">
          <Link href="/" className="relative z-10 flex items-center">
            <Image src="/logo.png" alt="Onmain" width={200} height={40} priority />
          </Link>

          <nav className="relative z-10 ml-auto flex items-center gap-8 text-sm">
            <Link href="/it-maintenance" className={linkClass}>
              IT maintenance
              <span className={underlineClass} />
            </Link>

            <Link href="/mainsearch-ai" className={linkClass}>
              MainSearch AI
              <span className={underlineClass} />
            </Link>

            <Link href="/contact" className={linkClass}>
              Contact
              <span className={underlineClass} />
            </Link>

            <Link href="/about-us" className={linkClass}>
              About us
              <span className={underlineClass} />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
