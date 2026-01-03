"use client";

import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";

type Service = {
  id: string;
  title: string;
  paragraphs: string[];
};

function useInView<T extends Element>(opts?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, opts);

    io.observe(el);
    return () => io.disconnect();
  }, [opts]);

  return { ref, inView };
}

function RevealLines({
  lines,
  active,
  baseDelayMs = 120,
  stepDelayMs = 280,
}: {
  lines: string[];
  active: boolean;
  baseDelayMs?: number;
  stepDelayMs?: number;
}) {
  return (
    <div className="space-y-3">
      {lines.map((txt, i) => (
        <p
          key={i}
          className={[
            "text-center text-[clamp(0.98rem,1.55vw,1.18rem)] leading-relaxed text-white/85",
            "transition-[opacity,transform,filter] duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)]",
            active ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-2 blur-[1.2px]",
          ].join(" ")}
          style={{ transitionDelay: `${baseDelayMs + i * stepDelayMs}ms` }}
        >
          {txt}
        </p>
      ))}
    </div>
  );
}

function Slab({ service, index }: { service: Service; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -12% 0px",
  });

  const commonCard =
    "relative overflow-hidden rounded-[24px] border border-white/10 bg-[#061f26] shadow-[0_22px_72px_rgba(0,0,0,0.18)]";
  const motion =
    "transition-[opacity,transform] duration-[850ms] ease-[cubic-bezier(.22,1,.36,1)]";

  return (
    <section id={service.id} className="py-5 sm:py-6">
      <div className="mx-auto max-w-6xl px-6">
        <div
          ref={ref}
          className={[
            commonCard,
            motion,
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          ].join(" ")}
        >
          {/* Variant backgrounds */}
          {index === 0 && (
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0b5560]/70 via-[#062a33]/70 to-black/70" />
              <div className="absolute -left-44 top-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -right-44 bottom-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
              <div
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(0 0, 62% 0, 100% 40%, 100% 100%, 0 100%)",
                  background:
                    "linear-gradient(135deg, rgba(11,85,96,0.45), rgba(6,42,51,0.55))",
                }}
              />
              <div className="absolute inset-0 [background:radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.10),transparent_55%)]" />
            </div>
          )}

          {index === 1 && (
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-b from-[#0b5560]/35 via-[#062a33]/55 to-black/65" />
              <div className="absolute inset-0 opacity-[0.16] [background:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:52px_52px]" />
              <div className="absolute left-0 top-0 h-full w-[10px] bg-gradient-to-b from-white/25 via-white/10 to-transparent" />
              <div className="absolute right-[-220px] top-[-220px] h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />
              <div className="absolute left-[-160px] bottom-[-220px] h-[520px] w-[520px] rounded-full bg-[#0b5560]/25 blur-3xl" />
              <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
            </div>
          )}

          {index === 2 && (
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-[#062a33]/70 to-[#0b5560]/55" />
              <div className="absolute inset-0 [background:radial-gradient(circle_at_70%_25%,rgba(255,255,255,0.12),transparent_55%)]" />
              <div
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 62%, 42% 100%, 0 100%)",
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                }}
              />
              <div className="absolute inset-0 border border-white/10 rounded-[24px]" />
              <div className="absolute -right-44 bottom-[-180px] h-[520px] w-[520px] rounded-full bg-white/8 blur-3xl" />
            </div>
          )}

          {index === 3 && (
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-b from-[#062a33]/70 via-[#061f26] to-black/75" />
              <div className="absolute inset-x-0 top-0 h-[130px] bg-gradient-to-b from-white/10 to-transparent" />
              <div className="absolute inset-0 opacity-[0.16] [background:radial-gradient(circle_at_20%_80%,rgba(11,85,96,0.30),transparent_55%)]" />
              <div className="absolute inset-0 opacity-[0.12] [background:radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.14),transparent_55%)]" />
              <div className="absolute inset-x-10 bottom-9 h-px bg-white/10" />
            </div>
          )}

          {/* Content (smaller) */}
          <div className="relative px-6 py-10 sm:px-10 sm:py-12">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-center text-[clamp(1.7rem,3.0vw,2.35rem)] font-semibold text-white">
                {service.title}
              </h2>
              <div className="mt-4">
                <RevealLines lines={service.paragraphs} active={inView} />
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/10" />
        </div>
      </div>
    </section>
  );
}

function BookNowStrip({ onClick }: { onClick: () => void }) {
  return (
    <section className="relative bg-white py-1">
      <div className="mx-auto max-w-6xl px-6">
        <button
          type="button"
          onClick={onClick}
          className="
            group relative w-full overflow-hidden rounded-2xl
            border border-black/10 bg-white
            shadow-[0_18px_60px_rgba(0,0,0,0.08)]
          "
          aria-label="Book now"
        >
          {/* static blue glares (no animation) */}
          <span
            aria-hidden
            className="
              pointer-events-none absolute -inset-y-10 left-[-28%] w-[60%] rotate-12
              bg-gradient-to-r from-transparent via-[#0b5560]/18 to-transparent
              blur-xl opacity-90
            "
          />
          <span
            aria-hidden
            className="
              pointer-events-none absolute -inset-y-10 right-[-28%] w-[60%] -rotate-12
              bg-gradient-to-r from-transparent via-[#0b5560]/18 to-transparent
              blur-xl opacity-90
            "
          />

          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-black/10"
          />

          <span className="relative z-10 flex items-center justify-center px-8 py-5 text-base font-semibold tracking-wide text-black/85">
            Book now
          </span>
        </button>
      </div>
    </section>
  );
}




function ProcessNode({
  step,
  title,
  lines,
  tone = "dark",
}: {
  step: string;
  title: string;
  lines: string[];
  tone?: "dark" | "light";
}) {
  const base =
    "relative overflow-hidden rounded-2xl border shadow-[0_18px_60px_rgba(0,0,0,0.08)]";
  const light = "border-black/10 bg-white";
  const dark = "border-white/10 bg-[#061f26]";

  return (
    <div className={[base, tone === "dark" ? dark : light].join(" ")}>
      {tone === "dark" ? (
        <>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0b5560]/55 via-[#062a33]/70 to-black/70" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background:radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.14),transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
        </>
      ) : (
        <>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0b5560]/18 via-white to-white" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background:radial-gradient(circle_at_15%_30%,#0b5560,transparent_55%),radial-gradient(circle_at_85%_40%,#062a33,transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
        </>
      )}

      <div className="relative p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <div
            className={[
              "shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide",
              tone === "dark" ? "bg-white/10 text-white/90" : "bg-black/5 text-black/60",
            ].join(" ")}
          >
            {step}
          </div>

          <div className="min-w-0">
            <div className={tone === "dark" ? "text-white/95 font-semibold" : "text-black/85 font-semibold"}>
              {title}
            </div>

            <ul className={tone === "dark" ? "mt-2 space-y-1 text-sm text-white/80" : "mt-2 space-y-1 text-sm text-black/60"}>
              {lines.map((t, i) => (
                <li key={i} className="flex gap-2">
                  <span className={tone === "dark" ? "mt-[7px] h-1 w-1 rounded-full bg-white/35" : "mt-[7px] h-1 w-1 rounded-full bg-black/20"} />
                  <span className="min-w-0">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailedServiceFlow() {
  const line = "bg-[#0b5560]/22";

  return (
    <section className="py-6 sm:py-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0b5560]/16 via-white to-white" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background:radial-gradient(circle_at_20%_25%,#0b5560,transparent_55%),radial-gradient(circle_at_80%_35%,#062a33,transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-inset ring-black/5" />

          <div className="relative p-5 sm:p-7">
            <div className="text-xs uppercase tracking-[0.25em] text-black/45">
              Onmain Systems
            </div>
            <h2 className="mt-2 text-[clamp(1.6rem,2.6vw,2.1rem)] font-semibold tracking-tight text-black/90">
              How the service works
            </h2>
            <p className="mt-1 text-sm text-black/60">
              Clear steps, with two delivery options: on-site or pickup & return.
            </p>

            <div className="mt-5">
              <div className="mx-auto max-w-3xl">
                <ProcessNode
                  step="1"
                  title="Contact"
                  lines={[
                    "Tell us what’s wrong (or what you want to build).",
                    "Call, email, or message — whatever is easiest.",
                  ]}
                  tone="dark"
                />

                <div className="flex justify-center">
                  <div className={`my-3 h-6 w-px ${line}`} />
                </div>

                <ProcessNode
                  step="2"
                  title="Triage + quotation"
                  lines={[
                    "We ask a few questions and confirm the scope.",
                    "You receive a clear quote before any work starts.",
                  ]}
                  tone="light"
                />

                <div className="flex justify-center">
                  <div className={`my-3 h-6 w-px ${line}`} />
                </div>

                <ProcessNode
                  step="3"
                  title="Choose the service route"
                  lines={[
                    "On-site for many jobs (software, installs, most builds).",
                    "Pickup & workshop for deeper repairs.",
                  ]}
                  tone="dark"
                />
              </div>

              {/* Branch connector */}
              <div className="mx-auto max-w-3xl">
                <div className="flex justify-center">
                  <div className={`my-3 h-6 w-px ${line}`} />
                </div>

                <div className="relative hidden md:block">
                  <div className={`mx-auto h-px w-[86%] ${line}`} />
                  <div className="mx-auto flex w-[86%] justify-between">
                    <div className={`h-4 w-px ${line}`} />
                    <div className={`h-4 w-px ${line}`} />
                  </div>
                </div>
              </div>

              {/* Branches */}
              <div className="mt-2 grid gap-4 md:grid-cols-2 md:gap-6">
                <div>
                  <div className="mb-2 text-sm font-semibold text-black/70">
                    Option A — On-site
                  </div>
                  <ProcessNode
                    step="A"
                    title="On-site visit"
                    lines={[
                      "We arrive at the agreed time.",
                      "Diagnose, repair, optimise, and verify on-site when suitable.",
                      "PC builds: parts list approved first; build & testing typically on-site.",
                    ]}
                    tone="dark"
                  />
                </div>

                <div>
                  <div className="mb-2 text-sm font-semibold text-black/70">
                    Option B — Pickup & return
                  </div>
                  <ProcessNode
                    step="B"
                    title="Pickup → workshop → return"
                    lines={[
                      "We collect the device from your address.",
                      "Workshop repair + testing, with updates if anything changes.",
                      "Delivered back once ready.",
                    ]}
                    tone="dark"
                  />
                </div>
              </div>

              {/* Merge */}
              <div className="mt-5">
                <div className="flex justify-center">
                  <div className={`my-3 h-6 w-px ${line}`} />
                </div>

                <div className="mx-auto max-w-3xl">
                  <ProcessNode
                    step="4"
                    title="Approval + payment"
                    lines={[
                      "You confirm everything is working.",
                      "Payment is taken after approval.",
                    ]}
                    tone="dark"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "ok" | "err">(null);
  const [msg, setMsg] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    setMsg("");
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      description: String(form.get("description") || ""),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });

    let data: any = {};
    try {
      data = await res.json();
    } catch {
      data = {};
    }

    if (res.ok) {
      setStatus("ok");
      setMsg(
        data?.message ||
          "Thank you for contacting us, we will get back to you as soon as possible."
      );
      (e.currentTarget as HTMLFormElement).reset();
    } else {
      setStatus("err");
      setMsg(
        data?.error ||
          "Thank you for contacting us, we will get back to you as soon as possible."
      );
    }

    setLoading(false);
  }

  return (
    <section id="book-now" className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#061f26] shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0b5560]/45 via-[#062a33]/65 to-black/70" />
          <div className="pointer-events-none absolute -right-44 top-[-220px] h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-44 bottom-[-220px] h-[520px] w-[520px] rounded-full bg-[#0b5560]/20 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/10" />

          <div className="relative px-6 py-12 sm:px-12">
            <h2 className="text-center text-[clamp(1.8rem,3vw,2.4rem)] font-semibold text-white">
              Contact us
            </h2>

            <form onSubmit={onSubmit} className="mx-auto mt-10 max-w-2xl space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="name"
                  placeholder="Name"
                  className="h-12 rounded-2xl border border-white/15 bg-white/5 px-4 text-white placeholder:text-white/40 outline-none focus:border-white/25"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email (required)"
                  className="h-12 rounded-2xl border border-white/15 bg-white/5 px-4 text-white placeholder:text-white/40 outline-none focus:border-white/25"
                />
              </div>

              <input
                name="phone"
                required
                placeholder="Phone number (required)"
                className="h-12 w-full rounded-2xl border border-white/15 bg-white/5 px-4 text-white placeholder:text-white/40 outline-none focus:border-white/25"
              />

              <textarea
                name="description"
                rows={4}
                placeholder="Description of issue"
                className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-white/25"
              />

              <button
                type="submit"
                disabled={loading}
                className="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-white/10 text-sm font-semibold text-white backdrop-blur-md ring-1 ring-inset ring-white/15 transition-[background-color,transform] duration-300 ease-[cubic-bezier(.22,1,.36,1)] hover:bg-white/15 active:scale-[0.99] disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send"}
              </button>

              {status ? <p className="text-center text-sm text-white/80">{msg}</p> : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ITMaintenancePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const services: Service[] = useMemo(
    () => [
      {
        id: "device-repairs",
        title: "Device Repairs",
        paragraphs: [
          "Diagnostics and repairs for computers, laptops, phones, tablets, printers, TVs, and more.",
          "Clear pricing and honest recommendations before any work starts.",
        ],
      },
      {
        id: "pickup-delivery",
        title: "Same-day pickup & return",
        paragraphs: [
          "We can collect your device, repair it in our workshop, and deliver it back to you.",
          "Same-day turnaround where possible — with no extra cost for pickup/return.",
        ],
      },
      {
        id: "software-maintenance",
        title: "Software maintenance & website support",
        paragraphs: [
          "Malware removal, slow PC fixes, errors, setup, backups, and data recovery options.",
          "Website development and ongoing updates for small businesses.",
        ],
      },
      {
        id: "computer-builds",
        title: "Custom computer builds",
        paragraphs: [
          "A personalised parts list based on your budget and what you need the PC for.",
          "You approve every part before purchase (order through us or yourself).",
          "Built and tested on-site (preferred) or in our workshop.",
        ],
      },
    ],
    []
  );

  function scrollToBookNow() {
    document
      .getElementById("book-now")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main className="bg-white">
      {/* WHITE STRIP BUTTON */}
      <BookNowStrip onClick={scrollToBookNow} />

      {/* Our services band (slightly smaller) */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white" />
          <div className="absolute inset-0 opacity-[0.06] [background:radial-gradient(circle_at_20%_20%,#0b5560,transparent_55%),radial-gradient(circle_at_80%_35%,#062a33,transparent_55%),radial-gradient(circle_at_45%_85%,#0b5560,transparent_55%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="flex min-h-[110px] items-center gap-6">
            <div className="h-px flex-1 bg-black/15" />
            <h2 className="text-center text-[clamp(1.8rem,3.6vw,3rem)] tracking-tight text-black/85">
              Our <span className="font-semibold">services</span>
            </h2>
            <div className="h-px flex-1 bg-black/15" />
          </div>
        </div>
      </section>

      {/* Detailed process tree (new) */}
      <DetailedServiceFlow />

      {/* Slabs (smaller) */}
      {services.map((s, idx) => (
        <Slab key={s.id} service={s} index={idx} />
      ))}

      {/* Contact form target */}
      <ContactForm />

      <div className="h-12 sm:h-20" />
    </main>
  );
}
