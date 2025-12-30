import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const linkClass =
    "group relative px-2 py-1 text-white/90 transition-colors duration-200 hover:text-gray-200";

  const underlineClass =
    "absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 bg-gray-200 transition-transform duration-200 group-hover:scale-x-100";

  return (
   <header className="fixed top-0 left-15 right-0 z-50 h-16 bg-transparent">
      <div className="mx-auto flex h-full max-w-6xl items-center px-6">
        {/* Logo (left) */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Onmain"
            width={200}
            height={40}
            priority
          />
        </Link>

        {/* Menu (right) */}
        <nav className="ml-auto flex items-center gap-8 text-sm">
          <Link href="/it-maintenance" className={linkClass}>
            IT maintenance
            <span className={underlineClass} />
          </Link>

          <Link href="/mainsearch-ai" className={linkClass}>
            MainSearch AI
            <span className={underlineClass} />
          </Link>

          <Link href="/contact" className={linkClass}>
            Contact
            <span className={underlineClass} />
          </Link>

          <Link href="/about-us" className={linkClass}>
            About us
            <span className={underlineClass} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
