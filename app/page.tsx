import Link from "next/link";
import { ArrowRight, Camera, Clapperboard, Film, Instagram, Mail, Play, ScanLine, Sparkles } from "lucide-react";
import { MarqueeRow } from "@/components/MarqueeRow";
import { PageShell } from "@/components/PageShell";
import { EnterCard, ProjectPreviewCard } from "@/components/PortfolioCards";
import { Pill } from "@/components/Pill";
import { SectionTitle } from "@/components/SectionTitle";
import { marqueeRows } from "@/lib/site";
import { projects } from "@/lib/projects";

const featuredProjects = projects.slice(0, 4);

export default function HomePage() {
  return (
    <PageShell variant="home" pageLabel="Portfolio V0.2">
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-24 pt-8 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-14 lg:pt-16">
          <div className="space-y-8">
            <div className="flex flex-wrap gap-2">
              <Pill>V0.2</Pill>
              <Pill>Story / Emotion Lead</Pill>
              <Pill>Perth, WA</Pill>
            </div>
            <div className="space-y-6">
              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-white md:text-7xl lg:text-[6.4rem]">
                Cinematic work built on
                <span className="block text-white">story, tone, and emotional weight.</span>
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-white/74 md:text-lg">
                Director, producer, and editor creating commercial, narrative, and brand films that feel considered, cinematic, and human. The cover page stays as the main entry point, with deeper pages branching into narrative-facing and client-facing work.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/film" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/92">
                Enter film work <ArrowRight className="ml-2 inline h-4 w-4" />
              </Link>
              <Link href="/commercial" className="rounded-full border border-white/18 bg-transparent px-6 py-3 text-sm font-medium text-white transition hover:bg-white/[0.06]">
                Enter commercial work
              </Link>
              <Link href="/about" className="rounded-full border border-white/18 bg-transparent px-6 py-3 text-sm font-medium text-white transition hover:bg-white/[0.06]">
                About Kaden
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["Format", "2.39:1"],
                ["Motion", "User-controlled"],
                ["Focus", "Proof of Work"]
              ].map(([label, value]) => (
                <div key={label} className="rounded-[1.25rem] border border-white/10 bg-black/18 p-4 backdrop-blur-sm">
                  <div className="text-[11px] uppercase tracking-[0.28em] text-white/46">{label}</div>
                  <div className="mt-2 text-lg font-medium text-white">{value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] shadow-2xl shadow-black/35 backdrop-blur-md">
            <div className="relative aspect-[4/5] overflow-hidden bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04)_42%,transparent_65%)]">
              <div className="absolute inset-5 rounded-[1.4rem] border border-white/12 bg-black/30 backdrop-blur-md" />
              <div className="absolute inset-x-5 top-5 flex items-center justify-between rounded-full border border-white/10 bg-black/35 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/62">
                <span className="flex items-center gap-2"><ScanLine className="h-3.5 w-3.5" /> Reel Preview</span>
                <span>24 FPS</span>
              </div>
              <div className="absolute inset-x-5 bottom-5 space-y-4 rounded-[1.4rem] border border-white/10 bg-black/48 p-5 backdrop-blur-md">
                <div className="flex items-center gap-2 text-sm text-white/70"><Play className="h-4 w-4" /> Featured Showreel</div>
                <div className="text-2xl font-medium tracking-tight text-white">Replace with Vimeo / YouTube / self-hosted hero film.</div>
                <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.24em] text-white/56">
                  <span>Commercial</span>
                  <span>•</span>
                  <span>Narrative</span>
                  <span>•</span>
                  <span>Brand Storytelling</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-[1px] bg-white/0 py-10">
        {marqueeRows.map((row, index) => (
          <MarqueeRow key={index} items={row} reverse={index === 1} speed={30 + index * 2} />
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <SectionTitle
          index="01"
          title="One cover page. Two very different worlds underneath it."
          text="The homepage remains restrained and cinematic, but the category pages diverge more clearly. Film leans into mood, authorship, and narrative presentation. Commercial leans into clarity, client value, and case-study structure."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <EnterCard
            href="/film"
            title="Film Work"
            tag="Creative / narrative"
            text="A darker, more filmmaking-led presentation system with stronger tone, creative focus, and a more cinematic way of surfacing projects."
          />
          <EnterCard
            href="/commercial"
            title="Commercial Work"
            tag="Brand / client"
            text="A cleaner, sharper case-study system with more marketing clarity, more structured project information, and more client-facing logic."
          />
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] backdrop-blur-[2px]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <SectionTitle
            index="02"
            title="Interactive atmosphere stays. Forced movement goes."
            text="The neural field, mouse-reactive light, film grain, and hover-sensitive cards remain. The forced looping scroll is removed, so viewers keep full control while still getting the premium interactive feel."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              { icon: Film, title: "Story first", copy: "The emotional logic of the project still sits in front of everything else." },
              { icon: Camera, title: "Mouse-responsive depth", copy: "Background light, particles, and cards still respond to pointer movement." },
              { icon: Clapperboard, title: "Different category systems", copy: "Film and Commercial no longer feel like the same page with swapped labels." },
              { icon: Sparkles, title: "Viewer control", copy: "No auto scroll and no movement that steals control from the visitor." }
            ].map(({ icon: Icon, title, copy }) => (
              <div key={title} className="h-full rounded-[1.6rem] border border-white/10 bg-black/18 p-6 backdrop-blur-md">
                <Icon className="h-5 w-5 text-white/72" />
                <h3 className="mt-4 text-xl font-medium tracking-tight text-white">{title}</h3>
                <p className="mt-4 leading-relaxed text-white/66">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <SectionTitle
          index="03"
          title="Selected projects still open into deeper case studies."
          text="The clickable case-study structure remains, but the category pages now do more of the heavy lifting so viewers can browse by type of work before entering each project."
        />
        <div className="mt-14 space-y-6">
          {featuredProjects.map((project) => (
            <ProjectPreviewCard key={project.slug} project={project} />
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

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] backdrop-blur-md">
            <div className="grid gap-8 p-8 md:p-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div className="space-y-5">
                <div className="text-xs uppercase tracking-[0.35em] text-white/40">04 / Contact</div>
                <h2 className="text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">Built to convert interest into real work.</h2>
                <p className="max-w-2xl text-base leading-relaxed text-white/68 md:text-lg">
                  The homepage remains a premium entry point. The browsing path underneath it is now more intentional, with clearer film and commercial experiences before viewers reach the project pages.
                </p>
              </div>
              <div className="space-y-4">
                <a href="mailto:kadencondie2@gmail.com" className="flex items-center justify-between rounded-[1.25rem] border border-white/10 bg-black/30 px-5 py-4 text-white/86 transition hover:bg-black/42">
                  <span className="flex items-center gap-3"><Mail className="h-4 w-4" /> kadencondie2@gmail.com</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="https://instagram.com" className="flex items-center justify-between rounded-[1.25rem] border border-white/10 bg-black/30 px-5 py-4 text-white/86 transition hover:bg-black/42">
                  <span className="flex items-center gap-3"><Instagram className="h-4 w-4" /> Instagram</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
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
