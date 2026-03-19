import { PageShell } from "@/components/PageShell";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionIntro } from "@/components/SectionIntro";
import { commercialProjects } from "@/lib/projects";

export default function CommercialPage() {
  return (
    <PageShell variant="commercial">
      <section className="section-frame space-y-10">
        <SectionIntro
          eyebrow="Client-based projects"
          title="Commercial Work"
          description="This page shifts the framing toward marketing strategy, campaign intent, deliverables, and client trust—while keeping the visual presentation cinematic and premium."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {commercialProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} emphasis="commercial" />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
