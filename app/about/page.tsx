import Link from "next/link";
import { ArrowLeft, ArrowRight, Instagram, Mail } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Pill } from "@/components/Pill";
import { SectionTitle } from "@/components/SectionTitle";

export default function AboutPage() {
  return (
    <PageShell variant="home" pageLabel="About Kaden">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/" className="rounded-full border border-white/18 bg-black/30 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/[0.06]">
              <ArrowLeft className="mr-2 inline h-4 w-4" /> Back home
            </Link>
            <Pill>About Kaden</Pill>
            <Pill>Story / Emotion Lead</Pill>
          </div>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
            <div className="space-y-6">
              <h1 className="text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl lg:text-[6rem]">A filmmaker driven by story, emotion, and visual impact.</h1>
              <p className="max-w-3xl text-base leading-relaxed text-white/74 md:text-lg">I am a Perth-based filmmaker, producer, and editor focused on creating work that feels cinematic, emotionally precise, and memorable. Whether I am building narrative work or shaping brand stories, I care most about tone, meaning, and how a project makes people feel.</p>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] backdrop-blur-md">
              <div className="space-y-5 p-8">
                <div className="text-[11px] uppercase tracking-[0.28em] text-white/44">Core ethos</div>
                <div className="text-2xl font-medium text-white">Story first. Emotion-led. Cinematic without becoming empty style.</div>
                <div className="flex flex-wrap gap-2 pt-1"><Pill>Integrity</Pill><Pill>Creativity</Pill><Pill>Collaboration</Pill><Pill>Excellence</Pill></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <SectionTitle index="01" title="Bio" text="This page is here for people who want context on who you are, how you work, and what drives the creative direction behind the portfolio." />
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-8 backdrop-blur-md">
            <div className="text-[11px] uppercase tracking-[0.28em] text-white/44">Who I am</div>
            <div className="mt-5 space-y-5 text-white/70">
              <p>I studied film because I want to create work that moves people and carries meaning. I am drawn to projects where visual storytelling is not just decorative, but purposeful. My strongest instinct is always to ask what a story is really saying and how the filmmaking can make that land with weight.</p>
              <p>Across production, post-production, and creative development, I care about both the artistic and practical sides of a project. I want the final work to feel intentional, premium, and emotionally grounded — whether that is a short film, a brand piece, or a case-study video.</p>
              <p>Long term, I want to build a body of work and a business that sit at the intersection of cinematic storytelling, strong creative leadership, and meaningful impact.</p>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-8 backdrop-blur-md">
              <div className="text-[11px] uppercase tracking-[0.28em] text-white/44">How I work</div>
              <div className="mt-5 space-y-3 text-white/70">
                <p>I approach projects through tone, pacing, and emotional clarity.</p>
                <p>I value reliability, structure, and making thoughtful decisions under pressure.</p>
                <p>I am interested in both narrative filmmaking and premium commercial storytelling.</p>
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-8 backdrop-blur-md">
              <div className="text-[11px] uppercase tracking-[0.28em] text-white/44">Skills &amp; tools</div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Pill>Producing</Pill><Pill>Editing</Pill><Pill>Creative Direction</Pill><Pill>Adobe Suite</Pill><Pill>Google Suite</Pill><Pill>Story Development</Pill>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <SectionTitle index="02" title="Get in touch" text="This page can function as both a biography and a direct contact page for collaborators, clients, and future partners." />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-8 backdrop-blur-md">
              <div className="text-[11px] uppercase tracking-[0.28em] text-white/44">Contact</div>
              <div className="mt-5 space-y-4">
                <a href="mailto:kadencondie2@gmail.com" className="flex items-center justify-between rounded-[1.25rem] border border-white/10 bg-black/30 px-5 py-4 text-white/86 transition hover:bg-black/42"><span className="flex items-center gap-3"><Mail className="h-4 w-4" /> kadencondie2@gmail.com</span><ArrowRight className="h-4 w-4" /></a>
                <a href="https://instagram.com" className="flex items-center justify-between rounded-[1.25rem] border border-white/10 bg-black/30 px-5 py-4 text-white/86 transition hover:bg-black/42"><span className="flex items-center gap-3"><Instagram className="h-4 w-4" /> Instagram</span><ArrowRight className="h-4 w-4" /></a>
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-8 backdrop-blur-md">
              <div className="text-[11px] uppercase tracking-[0.28em] text-white/44">What this page should communicate</div>
              <div className="mt-5 space-y-3 text-white/70">
                <p>That you are not just a camera operator or editor, but a story-led creative with a clear point of view.</p>
                <p>That you can move between filmmaking and commercial work without losing your identity.</p>
                <p>That people should reach out if they want thoughtful, cinematic, emotionally-aware work.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
