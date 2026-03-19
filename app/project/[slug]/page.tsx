import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { getProjectBySlug, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.logline
  };
}

export default async function ProjectPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const variant = project.category === "film" ? "film" : "commercial";

  return (
    <PageShell variant={variant}>
      <section className="section-frame space-y-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.32em] text-paper/68">
              {project.category === "film" ? "Narrative project" : "Commercial case study"}
            </p>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-paper md:text-6xl">
                {project.title}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-paper/82">{project.logline}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-white/12 px-4 py-2 text-sm text-paper/78">
                {project.year}
              </span>
              {project.client ? (
                <span className="rounded-full border border-white/12 px-4 py-2 text-sm text-paper/78">
                  Client: {project.client}
                </span>
              ) : null}
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/12 px-4 py-2 text-sm text-paper/72">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="surface-panel p-5 sm:p-6">
            <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black/35">
              {project.mediaType === "embed" && project.embedUrl ? (
                <iframe
                  className="h-full w-full"
                  src={project.embedUrl}
                  title={`${project.title} embed placeholder`}
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(183,194,255,0.18),transparent_45%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] px-8 text-center text-sm leading-7 text-paper/72">
                  Placeholder poster / still frame area. Replace this block with your real poster image, gallery, or embedded player.
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <article className="surface-panel p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-paper/58">Role</p>
            <p className="mt-4 text-base leading-7 text-paper/84">{project.role}</p>
          </article>
          <article className="surface-panel p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-paper/58">What I learned</p>
            <p className="mt-4 text-base leading-7 text-paper/80">{project.whatILearned}</p>
          </article>
          <article className="surface-panel p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-paper/58">What I got from it</p>
            <p className="mt-4 text-base leading-7 text-paper/80">{project.whatIGotFromIt}</p>
          </article>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="surface-panel p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-paper/58">Overview</p>
            <p className="mt-5 text-base leading-8 text-paper/84">{project.description}</p>
          </article>
          <article className="surface-panel p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-paper/58">Impact / outcome</p>
            <p className="mt-5 text-base leading-8 text-paper/80">{project.impact}</p>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
