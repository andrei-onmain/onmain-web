"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Review = {
  author: string;
  photo: string | null;
  rating: number | null;
  timeText: string | null;
  text: string;
  authorUrl: string | null;
};

type Payload = {
  rating: number | null;
  total: number | null;
  reviews: Review[];
};

function Stars({ value }: { value: number }) {
  const full = Math.round(value);
  return (
    <div className="flex items-center gap-1" aria-label={`${value} stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < full ? "text-[#f4b400]" : "text-black/15"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewsCarousel() {
  const [data, setData] = useState<Payload | null>(null);
  const [error, setError] = useState<string | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const headline = useMemo(() => {
    const rating = data?.rating;
    const total = data?.total;
    if (!rating || !total) return "Reviews";
    return `${rating.toFixed(1)} Stars. From ${total} reviews and counting.`;
  }, [data]);

  async function load() {
    try {
      setError(null);
      const res = await fetch("/api/reviews", { cache: "no-store" });
      const json = (await res.json()) as Payload & { error?: string };
      if (!res.ok || (json as any).error) throw new Error((json as any).error || "Failed to load");
      setData({ rating: json.rating, total: json.total, reviews: json.reviews ?? [] });
    } catch (e: any) {
      setError(e?.message || "Failed to load");
    }
  }

  useEffect(() => {
    load();
    const id = window.setInterval(load, 60_000); // refresh client every minute
    return () => window.clearInterval(id);
  }, []);

  const scrollByCards = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <div className="mt-8">
      <div className="text-center text-xl text-black/80">{headline}</div>

      {error && <div className="mt-3 text-center text-sm text-red-600">{error}</div>}

      <div className="relative mt-6">
        {/* arrows */}
        <button
          type="button"
          onClick={() => scrollByCards(-1)}
          className="hidden md:flex absolute left-0 top-1/2 z-10 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-black/10 hover:bg-black/15"
          aria-label="Previous reviews"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => scrollByCards(1)}
          className="hidden md:flex absolute right-0 top-1/2 z-10 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-black/10 hover:bg-black/15"
          aria-label="Next reviews"
        >
          ›
        </button>

        <div
          ref={scrollerRef}
          className="mx-auto flex max-w-5xl gap-4 overflow-x-auto px-2 pb-3 [scrollbar-width:thin] snap-x snap-mandatory"
        >
          {(data?.reviews?.length ? data.reviews : Array.from({ length: 4 }).map(() => null)).map(
            (r, idx) => (
              <div
                key={idx}
                className="snap-start min-w-[300px] max-w-[300px] rounded-xl border border-black/10 bg-white p-4 shadow-sm"
              >
                {!r ? (
                  <div className="animate-pulse">
                    <div className="h-4 w-40 rounded bg-black/10" />
                    <div className="mt-2 h-3 w-24 rounded bg-black/10" />
                    <div className="mt-4 h-20 w-full rounded bg-black/10" />
                  </div>
                ) : (
                  <>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 overflow-hidden rounded-full bg-black/10">
                          {r.photo ? (
                            // eslint-disable-next-line @next/next/no-img-element
<img
  src={`/api/image-proxy?u=${encodeURIComponent(r.photo)}`}
  alt=""
  className="h-full w-full object-cover"
  referrerPolicy="no-referrer"
/>
                          ) : null}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-black/85">{r.author}</div>
                          <div className="text-xs text-black/50">{r.timeText ?? ""}</div>
                        </div>
                      </div>

                      <div className="text-xs text-black/50">Google</div>
                    </div>

                    <div className="mt-2">{typeof r.rating === "number" ? <Stars value={r.rating} /> : null}</div>

                    <div className="mt-3 text-sm leading-relaxed text-black/75 line-clamp-5">
                      {r.text || "—"}
                    </div>

                    {r.authorUrl ? (
                      <a
                        className="mt-3 inline-block text-sm text-black/60 underline hover:text-black/80"
                        href={r.authorUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View
                      </a>
                    ) : null}
                  </>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
