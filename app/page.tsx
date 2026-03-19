import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { SectionIntro } from "@/components/SectionIntro";

const highlights = [
  {
    title: "Narrative-led filmmaking",
    copy: "A cover page that frames your work around atmosphere, character, and emotional clarity before anyone clicks deeper."
  },
  {
    title: "Commercial craft with strategy",
    copy: "A separate client-facing path that speaks to campaign goals, deliverables, and dependable execution without losing cinematic intent."
  },
  {
    title: "Built for deployment",
    copy: "A real Next.js App Router codebase with reusable components, structured data, and a Vercel-ready README."
  }
];

export default function HomePage() {
  return (
    <PageShell>
      <section className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col justify-center gap-14 px-4 pb-16 pt-10 md:px-6 lg:flex-row lg:items-end lg:gap-20">
        <div className="flex-1 space-y-8">
          <SectionIntro
            eyebrow="Filmmaker • story-first • emotion-led"
            title="A cinematic portfolio that feels like a cover page, then opens into the full body of work."
            description="This site keeps the original mood intact while turning the prototype into a scrollable, readable, deployable portfolio. No forced motion. Just atmosphere, control, and clear pathways into film, commercial, and personal context."
          />

          <div className="flex flex-wrap gap-4">
            <Link
              href="/film"
              className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-paper transition hover:bg-white/16"
            >
              Explore film work
            </Link>
            <Link
              href="/commercial"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-paper/90 transition hover:border-white/25 hover:bg-white/8 hover:text-paper"
            >
              Explore commercial work
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-paper/90 transition hover:border-white/25 hover:bg-white/8 hover:text-paper"
            >
              About Kaden
            </Link>
          </div>
        </div>

        <div className="w-full max-w-xl space-y-4 lg:pb-3">
          {highlights.map((item) => (
            <div key={item.title} className="surface rounded-[28px] p-6 shadow-card">
              <div className="text-xs uppercase tracking-cinematic text-paper/50">Portfolio direction</div>
              <h2 className="mt-4 text-2xl font-semibold text-paper">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-paper/78">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
        <div className="grid gap-6 rounded-[32px] border border-white/10 bg-black/20 p-8 shadow-glow md:grid-cols-3">
          <div>
            <div className="text-xs uppercase tracking-cinematic text-paper/50">Viewer control</div>
            <p className="mt-4 text-lg font-medium leading-8 text-paper">Standard scrolling throughout the site keeps the experience elegant without taking control away from the audience.</p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-cinematic text-paper/50">Readable typography</div>
            <p className="mt-4 text-lg font-medium leading-8 text-paper">High-contrast text, restrained overlays, and premium motion details protect clarity across every page.</p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-cinematic text-paper/50">Expandable structure</div>
            <p className="mt-4 text-lg font-medium leading-8 text-paper">Project data lives in one place so you can swap in real films, campaigns, posters, embeds, credits, and copy later.</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
