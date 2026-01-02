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
  const match = NAV.find(
    (n) => pathname === n.href || pathname.startsWith(n.href + "/")
  );

  return (
    <>
      <Header />

      {/* Keep homepage exactly as-is (it already has its own hero). */}
     {!isHome && pathname !== "/contact" && (
  <TopHero title={match?.label ?? "Onmain"} />
)}


      {children}

      <Footer />
    </>
  );
}
