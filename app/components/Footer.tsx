import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
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
                <a className="hover:text-white" href="tel:+447926230863">
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

          {/* Divisions + Resources */}
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

          {/* Business */}
          <div>
            <div className="text-sm font-semibold text-white/90">Business</div>

            <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm font-semibold text-white/90">Operating hours</div>
              <div className="mt-2 text-sm text-white/70">Mon–Sun: 09:00–19:00</div>

              <div className="mt-4 h-px bg-white/10" />

              <div className="mt-4 text-sm font-semibold text-white/90">Company details</div>
              <div className="mt-2 space-y-1 text-sm text-white/70">
                <div>Registered in England &amp; Wales</div>
                <div>
                  Company No: <span className="text-white/80">14844512</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 h-px bg-white/10" />

        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-white/55">© {year} Onmain. All rights reserved.</div>

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
  );
}
