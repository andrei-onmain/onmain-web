"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import TopHero from "./TopHero";

const NAV = [
  { href: "/it-maintenance", label: "IT maintenance" },
  { href: "/mainsearch-ai", label: "MainSearch AI" },
  { href: "/contact", label: "Contact" },
  { href: "/about-us", label: "About us" },
];

export default function SiteFrame({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const match = NAV.find((n) => pathname === n.href || pathname.startsWith(n.href + "/"));

  // Pages that have their own custom header strip/banner
  const hideTopHero =
    isHome ||
    pathname === "/contact" ||
    pathname.startsWith("/contact/") ||
    pathname === "/about-us" ||
    pathname.startsWith("/about-us/");

  return (
    <>
      <Header />

      {!hideTopHero && <TopHero title={match?.label ?? "Onmain"} />}

      {children}

      <Footer />
    </>
  );
}
