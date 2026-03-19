import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionIntro } from "@/components/SectionIntro";
import { commercialProjects, filmProjects } from "@/lib/projects";

export default function HomePage() {
  return (
    <PageShell>
      <section className="section-frame">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="space-y-8 pb-6">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.34em] text-paper/68">
                Cinematic director • story-first • emotion-led
              </p>
              <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.02] text-paper text-shadow-soft md:text-7xl">
                Films and brand work built to be felt before they are explained.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-paper/82">
                This portfolio is designed as a real, scrollable website: a cinematic cover page, dedicated spaces for narrative and commercial work, and structured project pages ready for your actual media, copy, and case studies.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/film"
                className="rounded-full border border-white/14 bg-white/8 px-5 py-3 text-sm font-medium text-paper transition hover:border-white/25 hover:bg-white/12"
              >
                Enter Film Work
              </Link>
              <Link
                href="/commercial"
                className="rounded-full border border-white/14 px-5 py-3 text-sm font-medium text-paper/90 transition hover:border-white/25 hover:bg-white/8 hover:text-paper"
              >
                Enter Commercial Work
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-white/14 px-5 py-3 text-sm font-medium text-paper/90 transition hover:border-white/25 hover:bg-white/8 hover:text-paper"
              >
                About Kaden
              </Link>
            </div>
          </div>

          <div className="surface-panel relative overflow-hidden p-6 sm:p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-accentWarm/10" />
            <div className="relative space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-paper/62">Current structure</p>
                <h2 className="mt-3 text-2xl font-semibold text-paper">A deployable portfolio foundation.</h2>
              </div>
              <ul className="space-y-4 text-sm leading-6 text-paper/80">
                <li>Normal scroll behavior with full viewer control—no forced motion.</li>
                <li>Dedicated pages for home, film, commercial, about, and individual projects.</li>
                <li>Subtle neural background, premium grain overlay, and responsive hover depth.</li>
                <li>Readable contrast throughout, so the atmosphere never compromises clarity.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-frame mt-24 space-y-8">
        <SectionIntro
          eyebrow="Selected directions"
          title="Two modes, one point of view."
          description="Narrative work is framed around authorship, pacing, and emotional atmosphere. Commercial work is framed around strategy, clarity, and client delivery—without giving up cinematic language."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <ProjectCard project={filmProjects[0]} emphasis="film" />
          <ProjectCard project={commercialProjects[0]} emphasis="commercial" />
        </div>
      </section>
    </PageShell>
  );
}
