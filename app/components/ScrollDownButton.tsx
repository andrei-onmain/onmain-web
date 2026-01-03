"use client";

import { useCallback } from "react";

type Props = {
  targetId: string;
  className?: string;
};

export default function ScrollDownButton({ targetId, className }: Props) {
  const onClick = useCallback(() => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const headerOffset = 64; // header is h-16
    const y = window.scrollY + target.getBoundingClientRect().top - headerOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }, [targetId]);

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
