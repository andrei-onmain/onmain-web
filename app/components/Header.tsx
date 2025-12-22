import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-[#003449] to-[#008caa]">
      <div className="mx-auto flex h-14 max-w-6xl items-center px-6">
        {/* Logo (left) */}
        <Link href="/" className="text-white font-extrabold tracking-[0.18em]">
          ONMAIN
        </Link>

        {/* Menu (right) */}
        <nav className="ml-auto flex items-center gap-8 text-sm text-white">
          <Link className="hover:text-white/100 text-white/90" href="/it-maintenance">
            IT maintenance
          </Link>
          <Link className="hover:text-white/100 text-white/90" href="/mainsearch-ai">
            MainSearch AI
          </Link>
          <Link className="hover:text-white/100 text-white/90" href="/contact">
            Contact
          </Link>
          <Link className="hover:text-white/100 text-white/90" href="/about-us">
            About us
          </Link>
        </nav>
      </div>
    </header>
  );
}
