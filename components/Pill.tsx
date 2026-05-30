export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-white/70 backdrop-blur-md">
      {children}
    </div>
  );
}
