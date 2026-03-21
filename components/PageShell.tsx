"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FilmGrain } from "./FilmGrain";
import { NavBar } from "./NavBar";
import { NeuralField } from "./NeuralField";

const themes = {
  home: {
    base: "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(178,168,255,0.08),transparent_24%),linear-gradient(to_bottom,#111216,#0d0d10_36%,#0a0a0d_100%)]",
    grid: "opacity-[0.08]"
  },
  film: {
    base: "bg-[radial-gradient(circle_at_18%_14%,rgba(255,187,129,0.16),transparent_24%),radial-gradient(circle_at_78%_28%,rgba(255,112,112,0.08),transparent_20%),linear-gradient(to_bottom,#120f0d,#0b0a0a_38%,#080808_100%)]",
    grid: "opacity-[0.04]"
  },
  commercial: {
    base: "bg-[radial-gradient(circle_at_18%_14%,rgba(124,214,255,0.14),transparent_24%),radial-gradient(circle_at_80%_24%,rgba(155,188,255,0.10),transparent_22%),linear-gradient(to_bottom,#0d1116,#090c10_38%,#07090b_100%)]",
    grid: "opacity-[0.1]"
  }
} as const;

export function PageShell({
  children,
  variant = "home",
  pageLabel
}: {
  children: React.ReactNode;
  variant?: "home" | "film" | "commercial";
  pageLabel?: string;
}) {
  const [mouse, setMouse] = useState({ x: 62, y: 24 });
  const theme = themes[variant];

  useEffect(() => {
    const move = (event: MouseEvent) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0b0d] text-white selection:bg-white selection:text-black">
      <style>{`@keyframes grainDrift{0%{transform:translate3d(0,0,0)}20%{transform:translate3d(-1.5%,1%,0)}40%{transform:translate3d(1.2%,-1.4%,0)}60%{transform:translate3d(-.8%,-1.1%,0)}80%{transform:translate3d(1.4%,1.1%,0)}100%{transform:translate3d(0,0,0)}}`}</style>
      <div className={`fixed inset-0 z-0 ${theme.base}`} />
      <div className={`fixed inset-0 z-0 ${theme.grid} [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:44px_44px]`} />
      <NeuralField theme={variant} />
      <motion.div
        className="pointer-events-none fixed inset-0 z-[2]"
        animate={{
          background: `radial-gradient(560px circle at ${mouse.x}% ${mouse.y}%, rgba(255,255,255,0.10), transparent 34%)`
        }}
        transition={{ type: "spring", damping: 32, stiffness: 90, mass: 1.2 }}
      />
      <FilmGrain />
      {variant === "film" ? (
        <>
          <div className="pointer-events-none fixed inset-x-0 top-0 z-[4] h-20 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.55),transparent)]" />
          <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[4] h-20 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),transparent)]" />
          <div className="pointer-events-none fixed left-[6%] top-[-4%] z-[2] h-[55vh] w-[30vw] rotate-[-8deg] bg-[radial-gradient(circle_at_top,rgba(255,203,158,0.14),transparent_62%)] blur-3xl" />
        </>
      ) : null}
      {variant === "commercial" ? (
        <>
          <div className="pointer-events-none fixed inset-y-0 left-[8%] z-[2] w-px bg-white/10" />
          <div className="pointer-events-none fixed inset-y-0 right-[8%] z-[2] w-px bg-white/10" />
          <div className="pointer-events-none fixed right-[4%] top-[12%] z-[2] h-[36vh] w-[22vw] bg-[radial-gradient(circle_at_center,rgba(124,214,255,0.12),transparent_70%)] blur-3xl" />
        </>
      ) : null}
      <div className="pointer-events-none fixed inset-0 z-[4] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_20%,transparent_80%,rgba(0,0,0,0.18))]" />

      <div className="relative z-20 flex min-h-screen flex-col">
        <NavBar pageLabel={pageLabel} />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
