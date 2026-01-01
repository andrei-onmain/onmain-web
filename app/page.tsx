import Image from "next/image";
import Link from "next/link";
import ReviewsCarousel from "./components/ReviewsCarousel";


export default function HomePage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative w-full overflow-hidden h-[clamp(420px,70vh,780px)]">
        <Image
          src="/hero-bg3.png"
          alt="Onmain background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* bottom fade like your design */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />

        <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-semibold tracking-[0.25em]">
            ONMAIN
          </h1>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-2xl md:text-3xl text-black/65 leading-relaxed">
            Onmain aims to become a conglomerate of industries that passion us, with a focus on innovation.
          </p>
        </div>
      </section>

      {/* SPLIT BAR */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-3 w-full overflow-hidden rounded-sm">
          <div className="w-[70%] bg-[#0b5560]" />
          <div className="w-[30%] bg-[#062a33]" />
        </div>
      </div>

      {/* ONMAIN SYSTEMS */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-xl font-semibold text-black/80">Onmain Systems</h2>

          <div className="mt-4 border-t border-black/15" />

          {/* angled panel */}
          <div className="mt-5">
            <div
              className="relative rounded-sm bg-[#efefef] p-8 md:p-10"
              style={{
                clipPath:
                  "polygon(0 0, 82% 0, 100% 18%, 100% 100%, 0 100%)",
              }}
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <p className="max-w-xl text-black/70 leading-relaxed">
                  Our IT maintenance division that specialises in device diagnostics and repairs,
                  along with software solutions and website development.
                </p>

                <Link
                  href="/it-maintenance"
                  className="text-black/60 underline underline-offset-4 hover:text-black/80 md:text-right"
                >
                  Find out more (IT maintenance)
                </Link>
              </div>
            </div>
          </div>

          {/* real-time rating + carousel */}
          <ReviewsCarousel />
        </div>
      </section>

      {/* MAINSEARCH AI */}
      <section className="py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center gap-5">
            <div className="h-px flex-1 bg-black/25" />
            <h2 className="text-2xl text-black/55">MainSearch AI</h2>
            <div className="h-px flex-1 bg-black/25" />
          </div>

          <p className="mt-10 text-center text-2xl text-black/55">
            A new way to find the business you need
          </p>
        </div>
      </section>

    {/* FOOTER */}
<footer className="mt-16 bg-[#061f26] text-white">
  <div className="mx-auto max-w-6xl px-6 py-14">
    <div className="grid gap-10 md:grid-cols-4">
      {/* Brand */}
      <div>
        <div className="text-lg font-semibold tracking-[0.2em]">ONMAIN</div>
        <p className="mt-4 text-sm leading-relaxed text-white/70">
          Onmain is the parent company for a group of specialist products and services,
          including Onmain Systems and MainSearch AI.
        </p>

        <div className="mt-6 space-y-2 text-sm text-white/75">
          <div className="flex items-center gap-2">
            <span className="text-white/50">Email:</span>
            <a className="hover:text-white" href="mailto:sales@onmain.co.uk">
              sales@onmain.co.uk
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white/50">Phone:</span>
            <a className="hover:text-white" href="tel:+44XXXXXXXXXX">
              +44 7926 230863
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white/50">Location:</span>
            <span className="text-white/75">London, United Kingdom</span>
          </div>
        </div>
      </div>

      {/* Group */}
      <div>
        <div className="text-sm font-semibold text-white/90">Group</div>
        <ul className="mt-4 space-y-3 text-sm text-white/70">
          <li><Link className="hover:text-white" href="/">Home</Link></li>
          <li><Link className="hover:text-white" href="/about-us">About</Link></li>
          <li><Link className="hover:text-white" href="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Divisions */}
      <div>
        <div className="text-sm font-semibold text-white/90">Divisions</div>
        <ul className="mt-4 space-y-3 text-sm text-white/70">
          <li>
            <Link className="hover:text-white" href="/it-maintenance">
              Onmain Systems (IT maintenance)
            </Link>
          </li>
          <li>
            <Link className="hover:text-white" href="/mainsearch-ai">
              MainSearch AI
            </Link>
          </li>
        </ul>

        <div className="mt-7 text-sm font-semibold text-white/90">Resources</div>
        <ul className="mt-4 space-y-3 text-sm text-white/70">
          <li><Link className="hover:text-white" href="/privacy">Privacy policy</Link></li>
          <li><Link className="hover:text-white" href="/terms">Terms</Link></li>
          <li><Link className="hover:text-white" href="/cookies">Cookie policy</Link></li>
          <li><Link className="hover:text-white" href="/accessibility">Accessibility</Link></li>
        </ul>
      </div>

      {/* Compliance */}
      <div>
        <div className="text-sm font-semibold text-white/90">Business</div>

        <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="text-sm font-semibold text-white/90">Operating hours</div>
          <div className="mt-2 text-sm text-white/70">Mon–Sun: 09:00–19:00</div>
          

          <div className="mt-4 h-px bg-white/10" />

          <div className="mt-4 text-sm font-semibold text-white/90">Company details</div>
          <div className="mt-2 space-y-1 text-sm text-white/70">
            <div>Registered in England &amp; Wales</div>
            <div>Company No: <span className="text-white/80">14844512</span></div>
            
          </div>
        </div>

        <div className="mt-5 text-xs text-white/55">
        </div>
      </div>
    </div>

    <div className="mt-12 h-px bg-white/10" />

    <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="text-xs text-white/55">
        © {new Date().getFullYear()} Onmain. All rights reserved.
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/55">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
          Security-minded engineering
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
          London • UK
        </span>
      </div>
    </div>
  </div>
</footer>

    </main>
  );


  
}


