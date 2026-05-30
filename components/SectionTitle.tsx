export function SectionTitle({
  index,
  title,
  text
}: {
  index: string;
  title: string;
  text: string;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-[140px_1fr] md:gap-8">
      <div className="pt-2 text-xs uppercase tracking-[0.35em] text-white/38">{index}</div>
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">{title}</h2>
        <p className="max-w-3xl text-base leading-relaxed text-white/68 md:text-lg">{text}</p>
      </div>
    </div>
  );
}
