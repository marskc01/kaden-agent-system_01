import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { SectionIntro } from "@/components/SectionIntro";

const principles = [
  "Story and emotion lead every decision.",
  "Style matters most when it deepens meaning.",
  "Commercial delivery should still feel human, cinematic, and intentional."
];

const socials = [
  { href: "mailto:hello@placeholder.com", label: "Email", value: "hello@placeholder.com" },
  { href: "https://instagram.com/placeholder", label: "Instagram", value: "@placeholder" },
  { href: "https://vimeo.com/placeholder", label: "Vimeo", value: "vimeo.com/placeholder" }
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-6 md:px-6">
        <SectionIntro
          eyebrow="About Kaden"
          title="Bio, ethos, and the connective tissue behind the work."
          description="Use this page to introduce your point of view, your process, and the reason your work sits between emotional filmmaking and commercially useful storytelling."
        />
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-20 md:grid-cols-[1.2fr_0.8fr] md:px-6">
        <div className="surface rounded-[32px] p-8 shadow-card">
          <h2 className="text-2xl font-semibold text-paper">Bio + ethos</h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-paper/82">
            <p>
              I&apos;m a filmmaker building cinematic work around one constant: connection. Whether the format is a narrative short or a campaign film, the goal is to make an audience feel something clear and lasting.
            </p>
            <p>
              In film, that means honoring performance, pacing, image systems, and emotional subtext. In commercial work, it means translating a brief into something strategic without sanding away the human texture that makes the piece memorable.
            </p>
            <p>
              Replace this placeholder copy with your real biography, creative history, collaborators, selected achievements, or the values you want future clients and producers to understand immediately.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="surface rounded-[32px] p-8 shadow-card">
            <div className="text-xs uppercase tracking-cinematic text-paper/55">Core principles</div>
            <ul className="mt-5 space-y-4 text-base leading-7 text-paper/82">
              {principles.map((principle) => (
                <li key={principle} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="surface rounded-[32px] p-8 shadow-card">
            <div className="text-xs uppercase tracking-cinematic text-paper/55">Socials + contact</div>
            <div className="mt-5 space-y-3">
              {socials.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-2xl border border-white/10 bg-black/15 p-4 transition hover:border-white/20 hover:bg-white/8"
                >
                  <div className="text-sm font-medium text-paper">{item.label}</div>
                  <div className="mt-1 text-sm text-paper/72">{item.value}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
