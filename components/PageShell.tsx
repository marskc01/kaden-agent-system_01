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
      ? "from-ember/10 via-transparent to-transparent"
      : variant === "commercial"
        ? "from-accent/12 via-transparent to-transparent"
        : "from-white/8 via-transparent to-transparent";

  return (
    <div className="relative min-h-screen overflow-hidden bg-ink text-paper">
      <div className={`pointer-events-none fixed inset-0 z-0 bg-gradient-to-b ${overlayClass}`} />
      <NeuralField intensity={variant === "commercial" ? 1.05 : 1.15} />
      <FilmGrain />
      <NavBar />
      <main className="relative z-20 pt-24">{children}</main>
    </div>
  );
}
