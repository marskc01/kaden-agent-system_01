import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { PageShell } from "@/components/PageShell";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const variant = project.category === "film" ? "film" : "commercial";

  return (
    <PageShell variant={variant}>
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex items-baseline justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-paper/60">
              {project.category === "film" ? "Narrative" : "Commercial"}
            </p>
            <h1 className="mt-1 text-3xl font-semibold md:text-4xl">
              {project.title}
            </h1>
          </div>
          <div className="text-sm text-paper/60">{project.year}</div>
        </div>

        <div className="mt-2 text-sm text-paper/70">
          {project.client ? `Client: ${project.client}` : null}
        </div>

        <div className="mt-6 rounded-xl border border-paper/10 bg-black/20 p-4">
          {project.mediaType === "embed" && project.embedUrl ? (
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full rounded-lg border border-paper/10"
                src={project.embedUrl}
                title={`${project.title} media embed`}
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="aspect-video w-full rounded-lg border border-paper/10 bg-white/5" />
          )}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-xl border border-paper/10 bg-white/5 p-5">
            <h2 className="text-sm font-medium text-paper">Role &amp; experience</h2>
            <p className="mt-2 text-sm text-paper/75">{project.role}</p>
          </div>

          <div className="rounded-xl border border-paper/10 bg-white/5 p-5">
            <h2 className="text-sm font-medium text-paper">What I learned</h2>
            <p className="mt-2 text-sm text-paper/75">{project.whatILearned}</p>
          </div>

          <div className="md:col-span-2 rounded-xl border border-paper/10 bg-white/5 p-5">
            <h2 className="text-sm font-medium text-paper">What I got from it</h2>
            <p className="mt-2 text-sm text-paper/75">{project.whatIGotFromIt}</p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
