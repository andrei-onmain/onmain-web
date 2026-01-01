"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/it-maintenance", label: "IT maintenance" },
  { href: "/mainsearch-ai", label: "MainSearch AI" },
  { href: "/contact", label: "Contact" },
  { href: "/about-us", label: "About us" },
];

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [open, setOpen] = useState(false);
  const ticking = useRef(false);
  const pathname = usePathname();

  // Close menu after route change
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Scroll tracking
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

  // IMPORTANT: no gradual tint -> same colour as soon as user scrolls
  const isScrolled = scrollY > 2;

  const GLASS_TINT = "rgba(8, 49, 58, 0.90)";

  const linkClass =
    "group relative px-2 py-1 text-white/90 transition-colors duration-200 hover:text-white";
  const underlineClass =
    "absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 bg-white/80 transition-transform duration-200 group-hover:scale-x-100";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16">
      <div className="relative h-full">
        {/* Glass background (snaps to full tint once scrolled) */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundColor: isScrolled ? GLASS_TINT : "transparent",
            borderBottom: isScrolled ? "1px solid rgba(255,255,255,0.12)" : "none",
            boxShadow: isScrolled ? "0 10px 30px rgba(0,0,0,0.22)" : "none",
            backdropFilter: isScrolled ? "blur(16px) saturate(180%)" : "none",
            WebkitBackdropFilter: isScrolled ? "blur(16px) saturate(180%)" : "none",
            transition: "background-color 200ms ease, box-shadow 200ms ease, border-color 200ms ease",
          }}
        />

        {/* Highlights (only when scrolled) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: isScrolled ? 1 : 0,
            transition: "opacity 200ms ease",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/14 via-white/7 to-transparent" />
          <div className="absolute -left-24 -top-10 h-24 w-64 rounded-full bg-white/18 blur-2xl" />
          <div className="absolute -right-20 top-2 h-16 w-44 rounded-full bg-white/10 blur-2xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4 sm:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Onmain"
              width={160}
              height={32}
              priority
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="ml-auto hidden items-center gap-8 text-sm md:flex">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass}>
                {item.label}
                <span className={underlineClass} />
              </Link>
            ))}
          </nav>

          {/* Mobile burger */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md md:hidden"
          >
            {/* Animated icon */}
            <span className="relative block h-4 w-5">
              <span
                className="absolute left-0 top-0 h-[2px] w-5 bg-white transition-transform duration-200"
                style={{ transform: open ? "translateY(7px) rotate(45deg)" : "none" }}
              />
              <span
                className="absolute left-0 top-[7px] h-[2px] w-5 bg-white transition-opacity duration-200"
                style={{ opacity: open ? 0 : 1 }}
              />
              <span
                className="absolute left-0 top-[14px] h-[2px] w-5 bg-white transition-transform duration-200"
                style={{ transform: open ? "translateY(-7px) rotate(-45deg)" : "none" }}
              />
            </span>
          </button>
        </div>

        {/* Mobile overlay + sheet */}
        <div
          className={`fixed inset-0 md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
          style={{ zIndex: 60 }}
          aria-hidden={!open}
        >
          {/* Backdrop */}
          <div
            onClick={() => setOpen(false)}
            className={`absolute inset-0 bg-black/45 transition-opacity duration-200 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Sheet */}
          <div
            className={`absolute right-0 top-0 h-full w-[86%] max-w-sm transform transition-transform duration-300 ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
            style={{
              backgroundColor: GLASS_TINT,
              backdropFilter: "blur(18px) saturate(180%)",
              WebkitBackdropFilter: "blur(18px) saturate(180%)",
              borderLeft: "1px solid rgba(255,255,255,0.12)",
            }}
            role="dialog"
            aria-modal="true"
          >
            {/* Close button (INSIDE the sheet so it can’t get covered) */}
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/15"
            >
              <span className="relative h-4 w-4">
                <span className="absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 rotate-45 bg-white" />
                <span className="absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 -rotate-45 bg-white" />
              </span>
            </button>

            <div className="px-6 pt-20">
              <div className="text-xs uppercase tracking-[0.25em] text-white/60">Menu</div>

              <div className="mt-4 flex flex-col gap-2">
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-6 h-px bg-white/10" />
              <div className="mt-4 text-xs text-white/50">Onmain · London</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
