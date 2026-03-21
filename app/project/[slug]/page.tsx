import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Play } from "lucide-react";
import { CommercialCaseCard, FilmSlateCard } from "@/components/PortfolioCards";
import { PageShell } from "@/components/PageShell";
import { Pill } from "@/components/Pill";
import { SectionTitle } from "@/components/SectionTitle";
import { TiltCard } from "@/components/TiltCard";
import { getProjectBySlug, projects } from "@/lib/projects";
import { categoryMeta } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { getProjectBySlug, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
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

  const film = project.category === "film";
  const related = projects.filter((entry) => entry.category === project.category && entry.slug !== project.slug).slice(0, 2);

  return (
    <PageShell variant={project.category} pageLabel={project.title}>
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="flex flex-wrap items-center gap-3">
            <Link href={project.category === "film" ? "/film" : "/commercial"} className="rounded-full border border-white/18 bg-black/30 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/[0.06]">
              <ArrowLeft className="mr-2 inline h-4 w-4" /> Back to {categoryMeta[project.category].label}
            </Link>
            <Pill>{project.type}</Pill>
            <Pill>{project.year}</Pill>
            <Pill>{categoryMeta[project.category].short}</Pill>
          </div>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="space-y-6">
              <h1 className="text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl lg:text-[6rem]">{project.title}</h1>
              <p className="max-w-3xl text-base leading-relaxed text-white/74 md:text-lg">{project.summary}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => <Pill key={tag}>{tag}</Pill>)}
              </div>
            </div>
            <TiltCard>
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] backdrop-blur-md">
                <div className={`relative aspect-[16/10] ${film ? "bg-[linear-gradient(145deg,rgba(255,206,158,0.18),rgba(255,255,255,0.04)_46%,transparent_74%)]" : "bg-[linear-gradient(145deg,rgba(124,214,255,0.18),rgba(255,255,255,0.04)_46%,transparent_74%)]"}`}>
                  <div className="absolute inset-6 rounded-[1.5rem] border border-white/12 bg-black/28" />
                  <div className="absolute bottom-6 left-6 right-6 rounded-[1.4rem] border border-white/10 bg-black/46 p-5 backdrop-blur-md">
                    <div className="flex items-center gap-2 text-sm text-white/72"><Play className="h-4 w-4" /> Project media</div>
                    <div className="mt-3 text-xl font-medium text-white">{project.media}</div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        {film ? (
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-8 backdrop-blur-md">
              <div className="text-[11px] uppercase tracking-[0.28em] text-white/44">Role &amp; creative contribution</div>
              <div className="mt-5 space-y-2">{project.role.map((role) => <div key={role} className="text-lg font-medium text-white">{role}</div>)}</div>
              <div className="space-y-3 pt-6">{project.experience.map((entry) => <p key={entry} className="leading-relaxed text-white/68">{entry}</p>)}</div>
            </div>
            <div className="grid gap-6">
              <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-8 backdrop-blur-md">
                <div className="text-[11px] uppercase tracking-[0.28em] text-white/44">What I learned</div>
                <div className="mt-5 space-y-4">{project.learned.map((entry) => <div key={entry} className="rounded-[1rem] border border-white/10 bg-white/[0.03] p-4 leading-relaxed text-white/70">{entry}</div>)}</div>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-8 backdrop-blur-md">
                <div className="text-[11px] uppercase tracking-[0.28em] text-white/44">What I got from it</div>
                <div className="mt-5 space-y-4">{project.gained.map((entry) => <div key={entry} className="rounded-[1rem] border border-white/10 bg-white/[0.03] p-4 leading-relaxed text-white/70">{entry}</div>)}</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 xl:grid-cols-3">
            <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-8 backdrop-blur-md xl:col-span-1">
              <div className="text-[11px] uppercase tracking-[0.28em] text-white/44">Client focus</div>
              <div className="mt-5 leading-relaxed text-white/78">{project.clientFocus}</div>
              <div className="pt-6">
                <div className="text-[11px] uppercase tracking-[0.28em] text-white/44">Deliverables</div>
                <div className="mt-3 flex flex-wrap gap-2">{(project.deliverables ?? []).map((deliverable) => <Pill key={deliverable}>{deliverable}</Pill>)}</div>
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-8 backdrop-blur-md">
              <div className="text-[11px] uppercase tracking-[0.28em] text-white/44">Role &amp; experience</div>
              <div className="mt-5 space-y-2">{project.role.map((role) => <div key={role} className="text-lg font-medium text-white">{role}</div>)}</div>
              <div className="space-y-3 pt-6">{project.experience.map((entry) => <p key={entry} className="leading-relaxed text-white/68">{entry}</p>)}</div>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-8 backdrop-blur-md">
              <div className="text-[11px] uppercase tracking-[0.28em] text-white/44">What I learned / value gained</div>
              <div className="mt-5 space-y-4">{[...project.learned, ...project.gained].map((entry) => <div key={entry} className="rounded-[1rem] border border-white/10 bg-white/[0.03] p-4 leading-relaxed text-white/70">{entry}</div>)}</div>
            </div>
          </div>
        )}
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <SectionTitle
            index="Next"
            title="More work in the same world."
            text="These related entries keep people moving through the portfolio while preserving the category-specific aesthetic."
          />
          <div className={`mt-12 ${film ? "space-y-6" : "grid gap-6 lg:grid-cols-2"}`}>
            {related.map((entry, index) =>
              film ? (
                <FilmSlateCard key={entry.slug} project={entry} index={index} />
              ) : (
                <CommercialCaseCard key={entry.slug} project={entry} />
              )
            )}
          </div>
        </div>
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
