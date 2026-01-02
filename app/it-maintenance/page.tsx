"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

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
  baseDelayMs = 150,
  stepDelayMs = 500,
}: {
  lines: string[];
  active: boolean;
  baseDelayMs?: number;
  stepDelayMs?: number;
}) {
  return (
    <div className="space-y-5">
      {lines.map((txt, i) => (
        <p
          key={i}
          className={[
            "text-center text-[clamp(1.05rem,2vw,1.45rem)] leading-relaxed text-white/85",
            "transition-[opacity,transform,filter] duration-[1100ms] ease-[cubic-bezier(.22,1,.36,1)]",
            active ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-2 blur-[1.5px]",
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
    "relative overflow-hidden rounded-[28px] border border-white/10 bg-[#061f26] shadow-[0_24px_80px_rgba(0,0,0,0.18)]";
  const motion =
    "transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)]";

  return (
    <section id={service.id} className="py-7 sm:py-9">
      <div className="mx-auto max-w-6xl px-6">
        <div
          ref={ref}
          className={[commonCard, motion, inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"].join(
            " "
          )}
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
                  background: "linear-gradient(135deg, rgba(11,85,96,0.45), rgba(6,42,51,0.55))",
                }}
              />
              <div className="absolute inset-0 [background:radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.10),transparent_55%)]" />
            </div>
          )}

          {index === 1 && (
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-b from-[#0b5560]/35 via-[#062a33]/55 to-black/65" />
              <div className="absolute inset-0 opacity-[0.18] [background:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:48px_48px]" />
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
                  background: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                }}
              />
              <div className="absolute inset-0 border border-white/10 rounded-[28px]" />
              <div className="absolute -right-44 bottom-[-180px] h-[520px] w-[520px] rounded-full bg-white/8 blur-3xl" />
            </div>
          )}

          {index === 3 && (
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-b from-[#062a33]/70 via-[#061f26] to-black/75" />
              <div className="absolute inset-x-0 top-0 h-[140px] bg-gradient-to-b from-white/10 to-transparent" />
              <div className="absolute inset-0 opacity-[0.18] [background:radial-gradient(circle_at_20%_80%,rgba(11,85,96,0.30),transparent_55%)]" />
              <div className="absolute inset-0 opacity-[0.12] [background:radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.14),transparent_55%)]" />
              <div className="absolute inset-x-10 bottom-10 h-px bg-white/10" />
            </div>
          )}

          {/* Content */}
          <div className="relative px-6 py-16 sm:px-12">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-center text-[clamp(2rem,3.6vw,2.9rem)] font-semibold text-white">
                {service.title}
              </h2>
              <div className="mt-5">
                <RevealLines lines={service.paragraphs} active={inView} />
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/10" />
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
      onClick={() =>
        document.getElementById("book-now")?.scrollIntoView({ behavior: "smooth", block: "start" })
      }
      className="group relative w-full overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.08)]"
      aria-label="Book now"
    >
      {/* teal fill that expands left -> right */}
      <span
        className="
          absolute inset-y-0 left-0 w-24
          bg-[#0b5560]
          transition-[width] duration-[850ms] ease-[cubic-bezier(.22,1,.36,1)]
          group-hover:w-full
        "
      />

      {/* subtle sheen (optional, feels more premium) */}
      <span
        className="
          pointer-events-none absolute inset-0 opacity-0
          transition-opacity duration-[850ms]
          group-hover:opacity-100
          [background:radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.22),transparent_55%)]
        "
      />

      {/* text: black -> white on hover */}
      <span
        className="
          relative z-10 flex items-center justify-center
          px-8 py-5
          text-base font-semibold tracking-wide
          text-black transition-colors duration-[850ms]
          group-hover:text-white
        "
      >
        Book now
      </span>
    </button>
  </div>
    </section>
  );
}

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "ok" | "err">(null);
  const [msg, setMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
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

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("err");
        setMsg(data?.error || "Something went wrong.");
      } else {
        setStatus("ok");
        setMsg("Thank you for contacting us, we will get back to you as soon as possible.");
        (e.currentTarget as HTMLFormElement).reset();
      }
    } catch {
      setStatus("err");
      setMsg("Failed to send.");
    } finally {
      setLoading(false);
    }
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

              {status ? (
                <p className="text-center text-sm text-white/80">{msg}</p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ITMaintenancePage() {
  const services: Service[] = useMemo(
    () => [
      {
        id: "device-repairs",
        title: "Device Repairs",
        paragraphs: [
          "We offer our premium repair service for the following devices: Computers | Laptops | Phones | Tablets | Printers | TVs",
        ],
      },
      {
        id: "pickup-delivery",
        title: "Same day pick-up and delivery service",
        paragraphs: [
          "Our technician can collect your device from your doorstep, repair it at the Onmain Systems workshop, and deliver it straight back to you at no extra cost.",
        ],
      },
      {
        id: "software-maintenance",
        title: "General software maintenance and website development",
        paragraphs: [
          "If you require software support, we provide a general service to help with any issue, such as: virus and malware removal, data recovery and backup solutions, blue screen or no display fix, system cleanup and optimisation, and more.",
        ],
      },
      {
        id: "computer-builds",
        title: "Computer builds",
        paragraphs: [
          "Our computer building service offers you personalised recommendations based on your budget.",
          "The technician can build the computer for you at your home or at our workshop.",
          "The price of each part is communicated with the customer, which can be either ordered by us or by you.",
        ],
      },
    ],
    []
  );

  function scrollToBookNow() {
    document.getElementById("book-now")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main className="bg-white pt-16">
      {/* HERO */}
       
      {/* WHITE STRIP BUTTON (your red-circled area) */}
      <BookNowStrip onClick={scrollToBookNow} />

      {/* Our services band */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white" />
          <div className="absolute inset-0 opacity-[0.06] [background:radial-gradient(circle_at_20%_20%,#0b5560,transparent_55%),radial-gradient(circle_at_80%_35%,#062a33,transparent_55%),radial-gradient(circle_at_45%_85%,#0b5560,transparent_55%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="flex min-h-[140px] items-center gap-6">
            <div className="h-px flex-1 bg-black/15" />
            <h2 className="text-center text-[clamp(2rem,4vw,3.25rem)] tracking-tight text-black/85">
              Our <span className="font-semibold">services</span>
            </h2>
            <div className="h-px flex-1 bg-black/15" />
          </div>
        </div>
      </section>

      {/* Slabs */}
      {services.map((s, idx) => (
        <Slab key={s.id} service={s} index={idx} />
      ))}

      {/* Contact form target */}
      <ContactForm />

      <div className="h-12 sm:h-20" />
    </main>
  );
}
