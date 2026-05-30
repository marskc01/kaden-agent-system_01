import Link from "next/link";
import { ArrowLeft, ArrowRight, Instagram, Mail } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Pill } from "@/components/Pill";
import { SectionTitle } from "@/components/SectionTitle";
import { siteConfig } from "@/lib/site";

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
              <h1 className="text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl lg:text-[6rem]">{siteConfig.about.headline}</h1>
              <p className="max-w-3xl text-base leading-relaxed text-white/74 md:text-lg">{siteConfig.about.intro}</p>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] backdrop-blur-md">
              <div className="space-y-5 p-8">
                <div className="text-[11px] uppercase tracking-[0.28em] text-white/44">Core ethos</div>
                <div className="text-2xl font-medium text-white">{siteConfig.about.ethos}</div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {siteConfig.about.values.map((value) => (
                    <Pill key={value}>{value}</Pill>
                  ))}
                </div>
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
              {siteConfig.about.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="grid gap-6">
            <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-8 backdrop-blur-md">
              <div className="text-[11px] uppercase tracking-[0.28em] text-white/44">How I work</div>
              <div className="mt-5 space-y-3 text-white/70">
                {siteConfig.about.workStyle.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-8 backdrop-blur-md">
              <div className="text-[11px] uppercase tracking-[0.28em] text-white/44">Skills &amp; tools</div>
              <div className="mt-5 flex flex-wrap gap-2">
                {siteConfig.about.skills.map((skill) => (
                  <Pill key={skill}>{skill}</Pill>
                ))}
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
                <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center justify-between rounded-[1.25rem] border border-white/10 bg-black/30 px-5 py-4 text-white/86 transition hover:bg-black/42"><span className="flex items-center gap-3"><Mail className="h-4 w-4" /> {siteConfig.contact.email}</span><ArrowRight className="h-4 w-4" /></a>
                <a href={siteConfig.contact.instagramUrl} className="flex items-center justify-between rounded-[1.25rem] border border-white/10 bg-black/30 px-5 py-4 text-white/86 transition hover:bg-black/42"><span className="flex items-center gap-3"><Instagram className="h-4 w-4" /> {siteConfig.contact.instagramLabel}</span><ArrowRight className="h-4 w-4" /></a>
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-8 backdrop-blur-md">
              <div className="text-[11px] uppercase tracking-[0.28em] text-white/44">What this page should communicate</div>
              <div className="mt-5 space-y-3 text-white/70">
                {siteConfig.about.positioning.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
