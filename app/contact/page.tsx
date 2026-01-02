"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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

type Status = null | "ok" | "err";

export default function ContactPage() {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.12,
    rootMargin: "0px 0px -10% 0px",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<Status>(null);
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setMsg("");

    const fd = new FormData(e.currentTarget);

    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      issueType: String(fd.get("issueType") || ""),
      description: String(fd.get("description") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      let data: any = {};
      try {
        data = text ? JSON.parse(text) : {};
      } catch {}

      if (!res.ok) {
        setStatus("err");
        setMsg(data?.error || "Thank you for contacting us, we will get back to you as soon as possible.");
      } else {
        setStatus("ok");
        setMsg("Thank you for contacting us, we will get back to you as soon as possible.");
        e.currentTarget.reset();
      }
    } catch {
      setStatus("err");
      setMsg("Thank you for contacting us, we will get back to you as soon as possible.");
    } finally {
      setLoading(false);
    }
  }

  const motion =
    "transition-[opacity,transform,filter] duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)]";

  return (
    <main className="bg-white pt-16">
      {/* Short background strip ONLY behind the header */}
    

      <div className="relative z-10">
        {/* Banner (short + clean) */}
        <section className="relative">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[#061f26]" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0b5560]/35 via-[#062a33]/60 to-black/75" />

            {/* Subtle ambient (no glare sweep) */}
            <div className="absolute -left-52 top-[-240px] h-[520px] w-[520px] rounded-full bg-white/6 blur-3xl" />
            <div className="absolute -right-52 bottom-[-260px] h-[560px] w-[560px] rounded-full bg-[#0b5560]/18 blur-3xl" />
            <div className="absolute inset-0 opacity-[0.07] [background:radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.16),transparent_55%)]" />
          </div>

          <div className="relative mx-auto max-w-6xl px-6 py-12 sm:py-14" ref={ref}>
            <div
              className={[
                motion,
                inView ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-2 blur-[1px]",
              ].join(" ")}
            >
              <h1 className="text-center text-white text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-[0.18em]">
                CONTACT
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-center text-white/75 text-[clamp(1rem,2vw,1.25rem)] leading-relaxed">
                Get in touch with Onmain Systems. We’ll reply quickly.
              </p>
            </div>
          </div>
        </section>

        {/* Content (cards sit BELOW banner — no negative margins) */}
        <section className="relative py-10 sm:py-14">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-8 lg:grid-cols-5">
              {/* Info card */}
              <div
                className={[
                  "lg:col-span-2 relative overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.08)]",
                  motion,
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
                ].join(" ")}
                style={{ transitionDelay: "80ms" }}
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0b5560]/14 via-white to-white" />
                <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background:radial-gradient(circle_at_15%_30%,#0b5560,transparent_55%),radial-gradient(circle_at_85%_40%,#062a33,transparent_55%)]" />

                <div className="relative p-8">
                  <div className="text-xs uppercase tracking-[0.28em] text-black/50">Onmain Systems</div>
                  <h2 className="mt-3 text-[clamp(1.4rem,2.4vw,2rem)] font-semibold tracking-tight text-black/85">
                    Business contact details
                  </h2>

                  <div className="mt-6 space-y-4 text-sm">
                    <div>
                      <div className="text-black/45">Email</div>
                      <a
                        className="text-black/75 underline underline-offset-4 hover:text-black/90"
                        href="mailto:sales@onmain.co.uk"
                      >
                        sales@onmain.co.uk
                      </a>
                    </div>

                    <div>
                      <div className="text-black/45">Phone</div>
                      <a
                        className="text-black/75 underline underline-offset-4 hover:text-black/90"
                        href="tel:+447926230863"
                      >
                        +44 7926 230863
                      </a>
                    </div>

                    <div className="pt-2 text-black/55 leading-relaxed">
                      For repairs, maintenance, builds, or anything else — send the form and we’ll get back to you.
                    </div>
                  </div>

                  <div className="mt-8 h-px bg-black/10" />

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-xs text-black/55">
                      London • UK
                    </span>
                    <span className="rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-xs text-black/55">
                      Same-day options
                    </span>
                  </div>
                </div>
              </div>

              {/* Form card */}
              <div
                className={[
                  "lg:col-span-3 relative overflow-hidden rounded-[28px] border border-white/10 bg-[#061f26] shadow-[0_24px_80px_rgba(0,0,0,0.18)]",
                  motion,
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
                ].join(" ")}
                style={{ transitionDelay: "140ms" }}
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0b5560]/40 via-[#062a33]/65 to-black/80" />
                <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background:radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.14),transparent_55%)]" />
                <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/10" />

                <div className="relative p-8 sm:p-10">
                  <div className="text-xs uppercase tracking-[0.28em] text-white/55">Contact form</div>
                  <h2 className="mt-3 text-[clamp(1.5rem,2.6vw,2.2rem)] font-semibold text-white">
                    Tell us what you need
                  </h2>

                  <form onSubmit={onSubmit} className="mt-8 space-y-4">
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

                    <div className="grid gap-4 sm:grid-cols-2">
                      <input
                        name="phone"
                        required
                        placeholder="Phone number (required)"
                        className="h-12 rounded-2xl border border-white/15 bg-white/5 px-4 text-white placeholder:text-white/40 outline-none focus:border-white/25"
                      />

                      <select
                        name="issueType"
                        required
                        defaultValue=""
                        className="h-12 rounded-2xl border border-white/15 bg-white/5 px-4 text-white outline-none focus:border-white/25"
                      >
                        <option value="" disabled className="bg-[#061f26]">
                          Select issue type (required)
                        </option>
                        <option value="Device Repair" className="bg-[#061f26]">Device Repair</option>
                        <option value="Software Maintenance" className="bg-[#061f26]">Software Maintenance</option>
                        <option value="Computer Build" className="bg-[#061f26]">Computer Build</option>
                        <option value="Other" className="bg-[#061f26]">Other</option>
                      </select>
                    </div>

                    <textarea
                      name="description"
                      rows={5}
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
          </div>
        </section>
      </div>
    </main>
  );
}
