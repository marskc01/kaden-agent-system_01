import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TiltCard } from "./TiltCard";
import { Pill } from "./Pill";
import type { Project } from "@/lib/projects";

export function EnterCard({
  title,
  text,
  tag,
  href
}: {
  title: string;
  text: string;
  tag: string;
  href: string;
}) {
  return (
    <TiltCard>
      <Link href={href} className="block w-full text-left">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/24 backdrop-blur-md transition hover:bg-black/30">
          <div className="grid gap-0 lg:grid-cols-[0.86fr_1.14fr]">
            <div className="relative min-h-[220px] border-b border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.17),rgba(255,255,255,0.03)_46%,transparent_74%)] lg:border-b-0 lg:border-r">
              <div className="absolute bottom-5 left-5 rounded-full border border-white/12 bg-black/45 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/58">
                {tag}
              </div>
            </div>
            <div className="space-y-4 p-8 md:p-10">
              <div className="text-[11px] uppercase tracking-[0.28em] text-white/46">Explore category</div>
              <h3 className="text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">{title}</h3>
              <p className="max-w-2xl text-base leading-relaxed text-white/66">{text}</p>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm text-white/84">
                Enter page <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </TiltCard>
  );
}

export function ProjectPreviewCard({ project }: { project: Project }) {
  return (
    <TiltCard>
      <Link href={`/project/${project.slug}`} className="block w-full text-left">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/22 backdrop-blur-md transition hover:bg-black/28">
          <div className="grid gap-0 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="relative min-h-[250px] border-b border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04)_46%,transparent_74%)] lg:border-b-0 lg:border-r">
              <div className="absolute inset-5 rounded-[1.4rem] border border-white/10" />
              <div className="absolute bottom-5 left-5 rounded-full border border-white/12 bg-black/45 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/58">
                Placeholder embed / still
              </div>
            </div>
            <div className="space-y-5 p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.26em] text-white/48">
                <span>{project.type}</span>
                <span>•</span>
                <span>{project.year}</span>
              </div>
              <h3 className="text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">{project.title}</h3>
              <p className="max-w-2xl text-base leading-relaxed text-white/68">{project.summary}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Pill key={tag}>{tag}</Pill>
                ))}
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm text-white/84">
                Open case study <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </TiltCard>
  );
}

export function FilmSlateCard({ project, index }: { project: Project; index: number }) {
  return (
    <TiltCard>
      <Link href={`/project/${project.slug}`} className="block w-full text-left">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/28 backdrop-blur-md transition hover:bg-black/34">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[360px] border-b border-white/10 bg-[linear-gradient(145deg,rgba(255,206,158,0.16),rgba(255,255,255,0.02)_50%,transparent_78%)] lg:border-b-0 lg:border-r">
              <div className="absolute left-6 top-6 text-[11px] uppercase tracking-[0.28em] text-white/48">
                Film {String(index + 1).padStart(2, "0")}
              </div>
              <div className="absolute inset-6 rounded-[1.5rem] border border-white/10" />
              <div className="absolute bottom-6 left-6 right-6 rounded-[1.3rem] border border-white/10 bg-black/46 p-5 backdrop-blur-md">
                <div className="text-[11px] uppercase tracking-[0.24em] text-white/50">Creative focus</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(project.focus ?? []).map((focus) => (
                    <Pill key={focus}>{focus}</Pill>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-6 p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-white/46">
                <span>{project.type}</span>
                <span>•</span>
                <span>{project.year}</span>
              </div>
              <h3 className="text-4xl font-semibold tracking-[-0.05em] text-white">{project.title}</h3>
              <p className="max-w-2xl text-base leading-relaxed text-white/68">{project.summary}</p>
              <div className="space-y-3">
                <div className="text-[11px] uppercase tracking-[0.28em] text-white/44">Role</div>
                <div className="flex flex-wrap gap-2">
                  {project.role.map((role) => (
                    <Pill key={role}>{role}</Pill>
                  ))}
                </div>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm text-white/84">
                Enter film case study <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </TiltCard>
  );
}

export function CommercialCaseCard({ project }: { project: Project }) {
  return (
    <TiltCard>
      <Link href={`/project/${project.slug}`} className="block h-full w-full text-left">
        <div className="h-full overflow-hidden rounded-[2rem] border border-white/10 bg-black/22 backdrop-blur-md transition hover:bg-black/28">
          <div className="space-y-6 p-0">
            <div className="relative min-h-[220px] border-b border-white/10 bg-[linear-gradient(145deg,rgba(124,214,255,0.18),rgba(255,255,255,0.03)_50%,transparent_78%)]">
              <div className="absolute inset-5 rounded-[1.4rem] border border-white/10" />
              <div className="absolute bottom-5 left-5 rounded-full border border-white/12 bg-black/44 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/58">
                Case-study preview
              </div>
            </div>
            <div className="space-y-5 px-7 pb-7">
              <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-white/46">
                <span>{project.type}</span>
                <span>•</span>
                <span>{project.year}</span>
              </div>
              <h3 className="text-3xl font-semibold tracking-[-0.04em] text-white">{project.title}</h3>
              <p className="leading-relaxed text-white/68">{project.summary}</p>
              <div className="grid gap-3 rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.26em] text-white/42">Client focus</div>
                  <div className="mt-2 text-white/78">{project.clientFocus}</div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.26em] text-white/42">Deliverables</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {(project.deliverables ?? []).map((deliverable) => (
                      <Pill key={deliverable}>{deliverable}</Pill>
                    ))}
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm text-white/84">
                Open commercial case study <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </TiltCard>
  );
}
