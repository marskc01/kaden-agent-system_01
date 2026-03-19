import { FilmGrain } from "./FilmGrain";
import { NavBar } from "./NavBar";
import { NeuralField } from "./NeuralField";

export function PageShell({
  children,
  variant = "default"
}: {
  children: React.ReactNode;
  variant?: "default" | "film" | "commercial";
}) {
  const overlayClass =
    variant === "film"
      ? "from-accent/12 via-transparent to-transparent"
      : variant === "commercial"
        ? "from-accentWarm/10 via-transparent to-transparent"
        : "from-accent/10 via-transparent to-transparent";

  return (
    <div className="relative min-h-screen overflow-hidden bg-ink text-paper">
      <div className="pointer-events-none fixed inset-0 bg-vignette opacity-90" />
      <div className={`pointer-events-none fixed inset-0 bg-gradient-to-b ${overlayClass}`} />
      <NeuralField intensity={variant === "commercial" ? 0.95 : 1.12} />
      <FilmGrain />
      <NavBar />

      <main className="relative z-20 pt-28 pb-16">{children}</main>
    </div>
  );
}
