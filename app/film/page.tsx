import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FilmSlateCard } from "@/components/PortfolioCards";
import { PageShell } from "@/components/PageShell";
import { Pill } from "@/components/Pill";
import { SectionTitle } from "@/components/SectionTitle";
import { projects } from "@/lib/projects";
import { categoryMeta } from "@/lib/site";

export default function FilmPage() {
  const info = categoryMeta.film;
  const filmProjects = projects.filter((project) => project.category === "film");

  return (
    <PageShell variant="film" pageLabel={info.label}>
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/" className="rounded-full border border-white/18 bg-black/30 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/[0.06]">
              <ArrowLeft className="mr-2 inline h-4 w-4" /> Back home
            </Link>
            <Pill>{info.label}</Pill>
            <Pill>{info.short}</Pill>
          </div>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
            <div className="space-y-6">
              <h1 className="text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl lg:text-[6rem]">{info.hero}</h1>
              <p className="max-w-3xl text-base leading-relaxed text-white/74 md:text-lg">{info.pageText}</p>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] backdrop-blur-md">
              <div className="space-y-5 p-8">
                <div className="text-[11px] uppercase tracking-[0.28em] text-white/44">Presentation logic</div>
                <div className="text-2xl font-medium text-white">Larger narrative cards, warmer atmosphere, and a stronger emphasis on creative intent.</div>
                <div className="flex flex-wrap gap-2 pt-1"><Pill>Tone</Pill><Pill>Authorship</Pill><Pill>Production insight</Pill></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <SectionTitle
          index="01"
          title="Film projects"
          text="Each project opens like an individual piece of work, with more creative weight, more narrative context, and less client-style compression."
        />
        <div className="mt-14 space-y-8">
          {filmProjects.map((project, index) => (
            <FilmSlateCard key={project.slug} project={project} index={index} />
import { PageShell } from "@/components/PageShell";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionIntro } from "@/components/SectionIntro";
import { projects } from "@/lib/projects";

export default function FilmPage() {
  const filmProjects = projects.filter((project) => project.category === "film");

  return (
    <PageShell variant="film">
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-6 md:px-6">
        <SectionIntro
          eyebrow="Film work"
          title="Narrative projects framed through authorship, atmosphere, and emotional rhythm."
          description="This page leans into filmmaking language: tone, performance, pacing, and the visual choices that make a narrative piece feel lived in. Replace the placeholders with your actual filmography when ready."
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          {filmProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} tone="film" />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
