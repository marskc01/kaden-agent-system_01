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
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/film", label: "Film Work" },
  { href: "/commercial", label: "Commercial Work" },
  { href: "/about", label: "About Kaden" }
];

export function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/35 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex flex-col leading-none text-paper transition-opacity hover:opacity-90">
          <span className="text-sm uppercase tracking-cinematic text-paper/65">Kaden Condie</span>
          <span className="mt-2 text-lg font-semibold tracking-tight">Cinematic Portfolio</span>
        </Link>

        <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-paper/80 md:gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition hover:text-white ${pathname === link.href ? "text-white" : ""}`}
              className="rounded-full px-3 py-2 transition hover:bg-white/8 hover:text-paper"
            >
              {link.label}
            </Link>
          ))}
          <div className="text-white/35">{pageLabel}</div>
        </div>
        </nav>
      </div>
    </header>
  );
}
