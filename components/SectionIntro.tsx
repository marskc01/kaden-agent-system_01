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
      <p className="text-sm uppercase tracking-cinematic text-paper/60">{eyebrow}</p>
      <h1 className="text-balance text-4xl font-semibold leading-tight text-paper md:text-6xl">{title}</h1>
      <p className="max-w-2xl text-lg leading-8 text-paper/80">{description}</p>
    </div>
  );
}
