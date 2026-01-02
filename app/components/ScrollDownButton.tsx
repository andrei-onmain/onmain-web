"use client";

import { useCallback, useRef } from "react";

type Props = {
  targetId: string;
  className?: string;
};

export default function ScrollDownButton({ targetId, className }: Props) {
  const rafRef = useRef<number | null>(null);

  const stop = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;

    window.removeEventListener("wheel", stop, { passive: true } as any);
    window.removeEventListener("touchstart", stop, { passive: true } as any);
    window.removeEventListener("mousedown", stop);
    window.removeEventListener("keydown", stop);
  }, []);

  const onClick = useCallback(() => {
    const target = document.getElementById(targetId);
    if (!target) return;

    // Stop any previous animation
    stop();

    // Scroll so the first words hit just below the header
    const headerOffset = 64; // your header is h-16
    const startY = window.scrollY;
    const targetY =
      window.scrollY + target.getBoundingClientRect().top - headerOffset;

    const distance = targetY - startY;
    const duration = 900; // slow + smooth
    const startTime = performance.now();

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    // Allow user to interrupt instantly
    window.addEventListener("wheel", stop, { passive: true } as any);
    window.addEventListener("touchstart", stop, { passive: true } as any);
    window.addEventListener("mousedown", stop);
    window.addEventListener("keydown", stop);

    const tick = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration);
      const y = startY + distance * easeOutCubic(t);
      window.scrollTo(0, y);

      if (t < 1 && rafRef.current !== null) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        stop();
      }
    };

    rafRef.current = requestAnimationFrame(tick);
  }, [stop, targetId]);

  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      aria-label="Scroll to content"
    >
      <span className="relative grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
        <span className="pointer-events-none absolute inset-0 rounded-full bg-white/10 blur-md opacity-40" />
        <svg className="relative h-7 w-7 animate-floatDown" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 5v12m0 0 5-5m-5 5-5-5"
            stroke="rgba(255,255,255,0.95)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
}
