const grain = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="1.15" numOctaves="2" stitchTiles="stitch"/></filter><rect width="180" height="180" filter="url(%23n)" opacity="0.95"/></svg>`;

export function FilmGrain() {
  return (
    <div
      className="pointer-events-none fixed inset-[-8%] z-[3] opacity-[0.11] mix-blend-soft-light"
      style={{
        backgroundImage: `url('${grain}')`,
        backgroundSize: "180px 180px",
        animation: "grainDrift .28s steps(2) infinite"
      }}
      aria-hidden="true"
    />
  );
}
