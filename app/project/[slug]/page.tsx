import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { getProjectBySlug, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
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
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-6 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-cinematic text-paper/55">
              {project.category === "film" ? "Narrative project" : "Commercial project"}
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight text-paper md:text-6xl">{project.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-paper/82">{project.summary}</p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs text-paper/75">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/12 px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <aside className="surface rounded-[28px] p-6 shadow-card">
            <div className="text-xs uppercase tracking-cinematic text-paper/55">Project details</div>
            <dl className="mt-5 space-y-4 text-sm text-paper/78">
              <div>
                <dt className="text-paper/55">Year</dt>
                <dd className="mt-1 text-paper">{project.year}</dd>
              </div>
              <div>
                <dt className="text-paper/55">Role</dt>
                <dd className="mt-1 text-paper">{project.role}</dd>
              </div>
              {project.client ? (
                <div>
                  <dt className="text-paper/55">Client</dt>
                  <dd className="mt-1 text-paper">{project.client}</dd>
                </div>
              ) : null}
              {project.deliverables ? (
                <div>
                  <dt className="text-paper/55">Deliverables</dt>
                  <dd className="mt-1 text-paper">{project.deliverables.join(" • ")}</dd>
                </div>
              ) : null}
            </dl>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 md:px-6">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-black/30 shadow-card">
          {project.mediaType === "embed" && project.embedUrl ? (
            <div className="aspect-video w-full bg-black">
              <iframe
                className="h-full w-full"
                src={project.embedUrl}
                title={`${project.title} embed placeholder`}
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="relative aspect-video w-full overflow-hidden bg-black">
              <Image
                src={project.poster}
                alt={`${project.title} poster placeholder`}
                fill
                sizes="100vw"
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/35">
                <div className="rounded-full border border-white/15 bg-black/45 px-6 py-3 text-sm text-paper/85">
                  Poster placeholder — swap for final video or stills
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr_1fr]">
          <div className="surface rounded-[28px] p-6 shadow-card">
            <div className="text-xs uppercase tracking-cinematic text-paper/55">Creative focus</div>
            <p className="mt-4 text-base leading-8 text-paper/82">{project.creativeFocus}</p>
          </div>
          <div className="surface rounded-[28px] p-6 shadow-card">
            <div className="text-xs uppercase tracking-cinematic text-paper/55">What I learned</div>
            <p className="mt-4 text-base leading-8 text-paper/82">{project.whatILearned}</p>
          </div>
          <div className="surface rounded-[28px] p-6 shadow-card">
            <div className="text-xs uppercase tracking-cinematic text-paper/55">What I got from it</div>
            <p className="mt-4 text-base leading-8 text-paper/82">{project.whatIGotFromIt}</p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="surface rounded-[28px] p-6 shadow-card">
            <div className="text-xs uppercase tracking-cinematic text-paper/55">Project structure</div>
            <p className="mt-4 text-base leading-8 text-paper/82">{project.logline}</p>
          </div>

          <div className="surface rounded-[28px] p-6 shadow-card">
            <div className="text-xs uppercase tracking-cinematic text-paper/55">Credits / notes</div>
            <div className="mt-4 space-y-3 text-base leading-7 text-paper/82">
              {project.credits?.map((credit) => <p key={credit}>{credit}</p>)}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href={project.category === "film" ? "/film" : "/commercial"}
            className="inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-paper/90 transition hover:border-white/25 hover:bg-white/8 hover:text-paper"
          >
            Back to {project.category === "film" ? "Film Work" : "Commercial Work"}
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
