import { PageShell } from "@/components/PageShell";
import { SectionIntro } from "@/components/SectionIntro";

const socials = [
  { label: "Email", value: "hello@placeholder.com", href: "mailto:hello@placeholder.com" },
  { label: "Instagram", value: "@placeholder", href: "https://instagram.com/placeholder" },
  { label: "Vimeo", value: "vimeo.com/placeholder", href: "https://vimeo.com/placeholder" },
  { label: "LinkedIn", value: "linkedin.com/in/placeholder", href: "https://linkedin.com/in/placeholder" }
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="section-frame grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <SectionIntro
            eyebrow="Bio • ethos • contact"
            title="About Kaden"
            description="Use this page for the clearest articulation of who you are, what you value, and how you work. The copy below is intentionally structured so you can replace it line by line with your real bio and ethos later."
          />

          <div className="surface-panel space-y-5 p-6 sm:p-8">
            <p className="text-base leading-8 text-paper/84">
              I build work around audience connection. Whether the format is a short film or a client campaign, the goal is the same: shape feeling, direct attention, and make the visual language serve something meaningful.
            </p>
            <p className="text-base leading-8 text-paper/80">
              In narrative work, that usually means protecting mood, character, and pacing. In commercial work, it means translating a brand or product strategy into something emotionally legible and visually precise. The point is never empty style. The point is resonance.
            </p>
            <p className="text-base leading-8 text-paper/80">
              Replace these paragraphs with your actual background, creative philosophy, collaborators, location, and the kind of projects you want to attract.
            </p>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="surface-panel p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-paper/58">Working ethos</p>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-paper/80">
              <li>Story and emotion come first.</li>
              <li>Readable design over low-contrast styling.</li>
              <li>Premium craft without taking control away from the viewer.</li>
              <li>Clear communication from concept through delivery.</li>
            </ul>
          </div>

          <div className="surface-panel p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-paper/58">Socials & contact</p>
            <div className="mt-5 space-y-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/15 px-4 py-4 transition hover:border-white/18 hover:bg-white/[0.05]"
                >
                  <span className="text-sm font-medium text-paper">{social.label}</span>
                  <span className="text-sm text-paper/72">{social.value}</span>
                </a>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </PageShell>
  );
}
