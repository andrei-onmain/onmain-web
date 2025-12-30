"use client";

import { useEffect, useState } from "react";

export default function ScrollBrush({
  fadeDistance = 900, // px until the brush is almost gone
}: {
  fadeDistance?: number;
}) {
  const [y, setY] = useState(0);

  useEffect(() => {
    const onScroll = () => setY(window.scrollY || 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 1 -> 0 as you scroll down
  const t = Math.min(1, y / fadeDistance);
  const opacity = 1 - t; // gets dimmer
  const translateY = y;  // follows scroll

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        // follow the page as you scroll
        transform: `translateY(${translateY}px)`,
        opacity,
      }}
    >
      {/* soft fade at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />

      {/* “brushed” texture (CSS-only) */}
      <div className="absolute inset-0 brush-texture" />
    </div>
  );
}
