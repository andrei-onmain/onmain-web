"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const clamp01 = (n: number) => Math.max(0, Math.min(1, n));

const NAV = [
  { href: "/", label: "Home" },
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

  const showHeaderBg = pathname === "/contact" || pathname === "/about-us";

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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

  const t = clamp01(scrollY / 80);
  const isScrolled = scrollY > 0;

  const GLASS_TINT = "rgba(8, 49, 58, 0.85)";

  const linkClass =
    "group relative px-2 py-1 text-white/90 transition-colors duration-200 hover:text-white";

  const underlineClass =
    "absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 bg-white/80 transition-transform duration-200 group-hover:scale-x-100";

  return (
    <header className="fixed top-0 left-0 right-0 z-[70] h-16 isolate">
      <div className="relative h-full">
        {/* Page-specific header background (contact/about) */}
        {showHeaderBg && (
          <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
            <Image
              src="/hero-bg3.png"
              alt=""
              fill
              priority
              quality={70}
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/60" />
          </div>
        )}

        {/* Glass */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            opacity: t,
            backgroundColor: GLASS_TINT,
            borderBottom: `1px solid rgba(255, 255, 255, ${0.12 * t})`,
            boxShadow: `0 10px 30px rgba(0, 0, 0, ${0.18 * t})`,
            backdropFilter: isScrolled ? "blur(16px) saturate(180%)" : "none",
            WebkitBackdropFilter: isScrolled ? "blur(16px) saturate(180%)" : "none",
            transition: "opacity 180ms ease",
          }}
        />

        {/* Highlights */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20"
          style={{ opacity: t, transition: "opacity 180ms ease" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/18 via-white/8 to-transparent" />
          <div className="absolute -left-24 -top-10 h-24 w-64 rounded-full bg-white/20 blur-2xl" />
          <div className="absolute -right-20 top-2 h-16 w-44 rounded-full bg-white/12 blur-2xl" />
        </div>

        <div className="relative z-30 mx-auto flex h-full max-w-6xl items-center px-4 sm:px-6">
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

          <nav className="ml-auto hidden items-center gap-8 text-sm md:flex">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass}>
                {item.label}
                <span className={underlineClass} />
              </Link>
            ))}
          </nav>

          {/* Mobile burger (this is your working X version) */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-[80] ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md md:hidden"
          >
            <span className="relative h-4 w-5 translate-y-[1px]">
              <span
                className={`absolute left-1/2 h-[2px] -translate-x-1/2 bg-white
                  will-change-transform
                  transition-[transform,top,width,opacity] duration-300 ease-[cubic-bezier(.22,1,.36,1)]
                  ${open ? "top-[7px] w-[19px] rotate-45 scale-105" : "top-0 w-5 rotate-0 scale-100"}`}
              />
              <span
                className={`absolute left-1/2 h-[2px] -translate-x-1/2 bg-white
                  will-change-transform
                  transition-[opacity,transform,width] duration-250 ease-[cubic-bezier(.22,1,.36,1)]
                  ${open ? "top-[7px] w-[19px] opacity-0 scale-95" : "top-[7px] w-5 opacity-100 scale-100"}`}
              />
              <span
                className={`absolute left-1/2 h-[2px] -translate-x-1/2 bg-white
                  will-change-transform
                  transition-[transform,top,width,opacity] duration-300 ease-[cubic-bezier(.22,1,.36,1)]
                  ${open ? "top-[7px] w-[19px] -rotate-45 scale-105" : "top-[14px] w-5 rotate-0 scale-100"}`}
              />
            </span>
          </button>
        </div>

        {/* Mobile menu overlay */}
        <div
  className={`fixed left-0 right-0 top-16 bottom-0 z-[60] md:hidden ${
    open ? "pointer-events-auto" : "pointer-events-none"
  }`}
>

          <div
            onClick={() => setOpen(false)}
            className={`absolute inset-0 bg-black/40 transition-opacity duration-200 ${open ? "opacity-100" : "opacity-0"}`}
          />
          <div
            className={`absolute right-0 top-0 h-full w-[86%] max-w-sm transform transition-transform duration-250 ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
            style={{
              backgroundColor: GLASS_TINT,
              backdropFilter: "blur(18px) saturate(180%)",
              WebkitBackdropFilter: "blur(18px) saturate(180%)",
              borderLeft: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <div className="pt-20 px-6">
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
