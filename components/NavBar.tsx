import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/film", label: "Film Work" },
  { href: "/commercial", label: "Commercial Work" },
  { href: "/about", label: "About Kaden" }
];

export function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="section-frame pt-4">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/35 px-4 py-3 shadow-[0_12px_48px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-6">
          <Link href="/" className="text-sm font-semibold tracking-[0.24em] text-paper uppercase">
            Kaden Condie
          </Link>

          <nav className="flex flex-wrap items-center justify-end gap-2 text-sm text-paper/85 sm:gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-1.5 transition hover:bg-white/8 hover:text-paper"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
