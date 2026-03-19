export type ProjectCategory = "film" | "commercial";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  year: string;
  poster: string;
  logline: string;
  summary: string;
  client?: string;
  deliverables?: string[];
  tags: string[];
  role: string;
  creativeFocus: string;
  whatILearned: string;
  whatIGotFromIt: string;
  mediaType: "embed" | "posterOnly";
  embedUrl?: string;
  credits?: string[];
};

export const projects: Project[] = [
  {
    slug: "after-the-rain",
    title: "After the Rain",
    category: "film",
    year: "2026",
    poster: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    logline: "A quiet narrative short about memory, distance, and the way a city changes after grief.",
    summary:
      "Use this section for your real synopsis. This placeholder is structured for a story-led overview, themes, and the emotional promise of the piece.",
    tags: ["Narrative Short", "Drama", "Festival Cut"],
    role: "Writer / Director / Editor",
    creativeFocus:
      "Built around performance, visual restraint, and letting silence hold emotional weight.",
    mediaType: "embed",
    embedUrl: "https://player.vimeo.com/video/000000000",
    credits: ["Producer — Placeholder Name", "Composer — Placeholder Name", "Lead Cast — Placeholder Name"],
    whatILearned:
      "How to sustain tension through blocking, lens choice, and negative space instead of dialogue density.",
    whatIGotFromIt:
      "A clearer sense of authorship: what I want a frame to feel like, and how pacing shapes empathy."
  },
  {
    slug: "static-between-us",
    title: "Static Between Us",
    category: "film",
    year: "2025",
    poster: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
    logline: "An intimate late-night piece about connection found in the margins.",
    summary:
      "Use this block for a fuller project description, festival history, or the story context you want programmers or collaborators to read.",
    tags: ["Narrative", "Character Study", "Moody Interiors"],
    role: "Director / DP",
    creativeFocus:
      "Performance-led coverage paired with expressive practical lighting and a tactile, handheld camera language.",
    mediaType: "posterOnly",
    credits: ["Producer — Placeholder Name", "Production Designer — Placeholder Name"],
    whatILearned:
      "How production design, wardrobe, and color temperature can carry subtext before a character speaks.",
    whatIGotFromIt:
      "Confidence in shaping atmosphere deliberately instead of treating mood as an afterthought."
  },
  {
    slug: "northline-launch",
    title: "Northline Launch Film",
    category: "commercial",
    year: "2026",
    poster: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
    logline: "A premium launch film translating product value into cinematic brand feeling.",
    summary:
      "Use this section to outline the brief, target audience, campaign goal, and how the creative execution supported conversion or awareness.",
    client: "Northline",
    deliverables: ["Hero launch film", "15s cutdowns", "Vertical social edits"],
    tags: ["Launch Campaign", "Social", "Product Storytelling"],
    role: "Director / DP",
    creativeFocus:
      "Balancing strategy and emotion so the brand message lands without flattening the cinematic tone.",
    mediaType: "embed",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    credits: ["Agency — Placeholder Agency", "Creative Strategist — Placeholder Name"],
    whatILearned:
      "How to protect visual ambition while staying aligned to approval rounds, deadlines, and a multi-format delivery plan.",
    whatIGotFromIt:
      "A stronger repeatable process for translating campaign goals into a visual system clients can trust."
  },
  {
    slug: "atlas-brand-story",
    title: "Atlas Brand Story",
    category: "commercial",
    year: "2025",
    poster: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    logline: "A story-driven client piece designed to position a brand with clarity, warmth, and ambition.",
    summary:
      "Use this area for results, campaign notes, target audience details, or a concise creative rationale you can later customize with real outcomes.",
    client: "Atlas Studio",
    deliverables: ["Brand anthem", "Homepage header edit", "Paid media variants"],
    tags: ["Brand Film", "Strategy", "Client Delivery"],
    role: "Director / Editor",
    creativeFocus:
      "Using character, environment, and rhythm to make the value proposition feel human and memorable.",
    mediaType: "posterOnly",
    credits: ["Producer — Placeholder Name", "Brand Lead — Placeholder Name"],
    whatILearned:
      "How to design a shoot plan that serves both cinematic storytelling and efficient content capture for downstream marketing needs.",
    whatIGotFromIt:
      "A sharper commercial instinct for where craft creates tangible value in client work."
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
