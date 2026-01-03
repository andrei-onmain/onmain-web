"use client";

import Link from "next/link";

function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: "contact" | "quote" | "route" | "service" | "payment";
  className?: string;
}) {
  const common = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  switch (name) {
    case "contact":
      return (
        <svg {...common}>
          <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
          <path d="M8 9h8" />
          <path d="M8 13h6" />
        </svg>
      );
    case "quote":
      return (
        <svg {...common}>
          <path d="M7 3h7l3 3v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
          <path d="M14 3v4h4" />
          <path d="M8 12h8" />
          <path d="M8 16h6" />
        </svg>
      );
    case "route":
      return (
        <svg {...common}>
          <path d="M6 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4z" />
          <path d="M18 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4z" />
          <path d="M6 15c0-6 6-2 6-8" />
          <path d="M12 7c0 6 6 2 6 8" />
        </svg>
      );
    case "service":
      // centered truck icon (prevents visual offset)
      return (
        <svg {...common}>
          <path d="M3 8h11v9H3z" />
          <path d="M14 11h4l3 3v3h-7z" />
          <path d="M6.5 20a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3z" />
          <path d="M18.5 20a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3z" />
        </svg>
      );
    case "payment":
      return (
        <svg {...common}>
          <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
          <path d="M2 10h20" />
          <path d="M6 14h4" />
        </svg>
      );
  }
}

function Dot() {
  return (
    <div className="h-3.5 w-3.5 rounded-full bg-[#0b5560]/80 ring-4 ring-[#0b5560]/10" />
  );
}

function Badge({ icon }: { icon: Parameters<typeof Icon>[0]["name"] }) {
  return (
    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#061f26] text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)] ring-1 ring-white/10">
      <Icon name={icon} className="h-5 w-5" />
    </div>
  );
}

export default function OnmainSystemsFlow() {
  const steps: Array<{ title: string; icon: Parameters<typeof Icon>[0]["name"] }> = [
    { title: "Contact", icon: "contact" },
    { title: "Quote", icon: "quote" },
    { title: "Choose service", icon: "route" },
    { title: "On-site / pickup", icon: "service" },
    { title: "Approval + payment", icon: "payment" },
  ];

  return (
    <section className="pt-1 pb-6 sm:pt-2 sm:pb-8">
      <div className="mx-auto max-w-6xl px-1 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0b5560]/18 via-white to-white" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background:radial-gradient(circle_at_15%_30%,#0b5560,transparent_55%),radial-gradient(circle_at_85%_40%,#062a33,transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />

          <div className="relative p-5 sm:p-7">
            <div className="text-xs uppercase tracking-[0.25em] text-black/45">Onmain Systems</div>
            <h3 className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight text-black/90">
              How it works
            </h3>

            {/* MOBILE: zigzag (fixed half-width so long labels don’t shift alignment) */}
            <div className="relative mt-6 md:hidden">
              <div aria-hidden className="absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2 bg-[#0b5560]/18" />

              <div className="space-y-1">
                {steps.map((s, i) => {
                  const left = i % 2 === 0;

                  return (
                    <div key={s.title} className="relative py-6">
                      <div aria-hidden className="absolute left-1/2 top-7 -translate-x-1/2">
                        <Dot />
                      </div>

                      {left ? (
                        <div
                          aria-hidden
                          className="absolute right-1/2 top-7 h-10 w-24 border-b border-r border-[#0b5560]/25 rounded-br-full"
                        />
                      ) : (
                        <div
                          aria-hidden
                          className="absolute left-1/2 top-7 h-10 w-24 border-b border-l border-[#0b5560]/25 rounded-bl-full"
                        />
                      )}

                      <div
                        className={
                          left
                            ? "w-[calc(50%-3rem)] pr-6"
                            : "ml-auto w-[calc(50%-3rem)] pl-12 pr-1"
                        }
                      >
                        <div className={`flex ${left ? "justify-start" : "justify-end"}`}>
                          <div className="w-[130px] flex flex-col items-center text-center">
                            <Badge icon={s.icon} />
                            <div className="mt-2 text-[14px] font-semibold tracking-tight text-black/80 leading-tight">
                              {s.title}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* DESKTOP: horizontal (no dots) */}
            <div className="relative mt-7 hidden md:block">
              <div aria-hidden className="absolute left-6 right-6 top-8 h-px bg-[#0b5560]/20" />

              <div className="grid grid-cols-5 gap-6">
                {steps.map((s) => (
                  <div key={s.title} className="relative">
                    <div className="flex flex-col items-center pt-2">
                      <Badge icon={s.icon} />
                      <div className="mt-3 text-center text-sm font-semibold tracking-tight text-black/80">
                        {s.title}
                      </div>
                    </div>

                    <div aria-hidden className="mx-auto mt-3 h-8 w-px bg-[#0b5560]/12" />
                  </div>
                ))}
              </div>

              <div aria-hidden className="mx-auto mt-2 h-px w-[92%] bg-black/8" />
            </div>

            {/* FIND OUT MORE BUTTON (UNDER THE HOW IT WORKS RECTANGLE) */}
            <div className="mt-5 flex justify-center">
              <Link
                href="/it-maintenance"
                className="
                  inline-flex items-center justify-center
                  rounded-xl border border-black/10 bg-white
                  px-6 py-3 text-sm font-semibold text-black/80
                  shadow-[0_12px_40px_rgba(0,0,0,0.08)]
                  hover:bg-black/[0.03]
                "
              >
                Find out more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
