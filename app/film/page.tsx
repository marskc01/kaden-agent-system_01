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
