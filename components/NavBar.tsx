"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/film", label: "Film" },
  { href: "/commercial", label: "Commercial" },
  { href: "/about", label: "About" }
];

export function NavBar({ pageLabel = "Portfolio V0.2" }: { pageLabel?: string }) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/20 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="text-sm uppercase tracking-[0.38em] text-white/90">
          Kaden Condie
        </Link>
        <div className="hidden items-center gap-6 text-sm text-white/62 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition hover:text-white ${pathname === link.href ? "text-white" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="text-white/35">{pageLabel}</div>
        </div>
      </div>
    </header>
  );
}
