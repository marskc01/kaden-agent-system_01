import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CommercialCaseCard } from "@/components/PortfolioCards";
import { PageShell } from "@/components/PageShell";
import { Pill } from "@/components/Pill";
import { SectionTitle } from "@/components/SectionTitle";
import { projects } from "@/lib/projects";
import { categoryMeta } from "@/lib/site";

export default function CommercialPage() {
  const info = categoryMeta.commercial;
  const commercialProjects = projects.filter((project) => project.category === "commercial");

  return (
    <PageShell variant="commercial" pageLabel={info.label}>
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
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Orientation", "Clear"],
                ["Style", "Premium"],
                ["Use", "Client-facing"]
              ].map(([label, value]) => (
                <div key={label} className="rounded-[1.4rem] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-md">
                  <div className="text-[11px] uppercase tracking-[0.26em] text-white/42">{label}</div>
                  <div className="mt-3 text-lg font-medium text-white">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <SectionTitle
          index="01"
          title="Commercial case studies"
          text="These entries are structured to feel easier for clients, collaborators, and agencies to scan. The information hierarchy is sharper and the layout is more strategic."
        />
        <div className="mt-14 grid gap-6 xl:grid-cols-2">
          {commercialProjects.map((project) => (
            <CommercialCaseCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
