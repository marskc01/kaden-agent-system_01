import { PageShell } from "@/components/PageShell";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionIntro } from "@/components/SectionIntro";
import { projects } from "@/lib/projects";

export default function CommercialPage() {
  const commercialProjects = projects.filter((project) => project.category === "commercial");

  return (
    <PageShell variant="commercial">
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-6 md:px-6">
        <SectionIntro
          eyebrow="Commercial work"
          title="Client projects shaped for marketing goals, strategic clarity, and dependable delivery."
          description="The commercial page keeps the cinematic surface but shifts the framing toward campaign thinking, deliverables, process, and what makes the work effective for brands."
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          {commercialProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} tone="commercial" />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
