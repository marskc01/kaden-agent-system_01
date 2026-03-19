export function SectionIntro({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="text-xs uppercase tracking-[0.32em] text-paper/70">{eyebrow}</p>
      <h1 className="text-4xl font-semibold tracking-tight text-paper md:text-6xl">{title}</h1>
      <p className="max-w-2xl text-base leading-7 text-paper/82 md:text-lg">{description}</p>
    </div>
  );
}
