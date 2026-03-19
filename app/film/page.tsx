import { PageShell } from "@/components/PageShell";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionIntro } from "@/components/SectionIntro";
import { filmProjects } from "@/lib/projects";

export default function FilmPage() {
  return (
    <PageShell variant="film">
      <section className="section-frame space-y-10">
        <SectionIntro
          eyebrow="Narrative projects"
          title="Film Work"
          description="This page leans into authorship: narrative projects, atmosphere, character, and the emotional shape of a frame. Each project page is structured so you can later add stills, festival notes, collaborators, and full embedded media."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filmProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} emphasis="film" />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
