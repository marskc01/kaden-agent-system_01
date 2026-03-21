export type ProjectCategory = "film" | "commercial";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  type: string;
  year: string;
  summary: string;
  role: string[];
  experience: string[];
  learned: string[];
  gained: string[];
  tags: string[];
  focus?: string[];
  clientFocus?: string;
  deliverables?: string[];
  media: string;
  mediaType: "embed" | "posterOnly";
  embedUrl?: string;
  client?: string;
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
    slug: "voiceless",
    title: "Voiceless",
    category: "film",
    type: "Short Film",
    year: "2024",
    summary: "A grounded period film centred on injustice, survival, and emotional weight.",
    role: ["Associate Producer", "Production Management Support", "Operations & Coordination"],
    experience: [
      "Supported planning, logistics, and communication under pressure.",
      "Worked in a demanding narrative environment where tone and execution both mattered.",
      "Contributed to a project with historical and ethical weight."
    ],
    learned: [
      "Narrative productions demand emotional sensitivity and operational control.",
      "Creative intent still needs practical problem-solving.",
      "Leadership on set is often structural and preventative."
    ],
    gained: [
      "Greater confidence in narrative production systems.",
      "A stronger sense of story-led filmmaking beyond aesthetics.",
      "A clearer standard for the kind of work I want to build."
    ],
    tags: ["Narrative", "Period", "Emotion-led"],
    focus: ["Tone", "Historical weight", "Production pressure"],
    media: "Trailer, stills, BTS, director notes, and festival assets can live here.",
    mediaType: "embed",
    embedUrl: "https://player.vimeo.com/video/000000000"
  },
  {
    slug: "future-narrative-project",
    title: "Future Narrative Project",
    category: "film",
    type: "Feature / Short Development",
    year: "In Development",
    summary:
      "A placeholder for future film-facing work so the film page carries creative momentum and evolving authorship.",
    role: ["Writer / Producer / Director"],
    experience: [
      "Reserved for development notes, lookbooks, script direction, or concept materials.",
      "Useful for showing creative intent even before a project is fully public.",
      "Lets the film section feel alive rather than archival only."
    ],
    learned: ["Development reflections.", "Tone and process experimentation.", "Future filmmaking growth."],
    gained: ["New direction and authorship.", "Personal creative evolution.", "Next-level narrative ambition."],
    tags: ["Creative Direction", "Development", "Auteur"],
    focus: ["Worldbuilding", "Tone development", "Directorial voice"],
    media: "Lookbook, treatments, frame references, and development notes can sit here.",
    mediaType: "posterOnly"
  },
  {
    slug: "jetwave-quayside",
    title: "Jetwave Quayside",
    category: "commercial",
    type: "Brand Film",
    year: "2025",
    summary: "High-energy branded storytelling built around movement, atmosphere, and premium visual pacing.",
    role: ["Producer", "Editor", "Creative Direction Support"],
    experience: [
      "Shaped branded content to feel elevated, fast-moving, and visually premium.",
      "Worked across production and post to maintain energy, clarity, and polish.",
      "Balanced audience attention with brand positioning."
    ],
    learned: [
      "Pacing and tone can lift branded content beyond standard promo language.",
      "Commercial work can feel cinematic without losing clarity.",
      "Brand energy can be built through rhythm and edit design."
    ],
    gained: [
      "A stronger grasp of premium commercial language.",
      "More confidence translating product and lifestyle into visual identity.",
      "A repeatable structure for high-end brand storytelling."
    ],
    tags: ["Commercial", "Lifestyle", "Kinetic"],
    client: "Jetwave Quayside",
    clientFocus: "Premium lifestyle positioning and high-energy brand perception.",
    deliverables: ["Hero brand film", "Social cutdowns", "Campaign frames"],
    media: "Hero film embed, short social cuts, still frames, and campaign outputs can sit here.",
    mediaType: "embed",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    slug: "emeco",
    title: "Emeco",
    category: "commercial",
    type: "Case Study",
    year: "2025",
    summary: "Human-centred industry storytelling translated into a more polished visual system.",
    role: ["Producer", "Editor", "Interview / Story Structure"],
    experience: [
      "Developed a more human framing for industry and people-focused content.",
      "Used structure, tone, and rhythm to create trust and clarity.",
      "Worked in a client-facing environment where polish and communication mattered equally."
    ],
    learned: [
      "Case-study work improves through narrative framing.",
      "Clarity can be preserved while adding a premium visual layer.",
      "Business storytelling improves when you lead with people."
    ],
    gained: [
      "Greater confidence in high-trust commercial work.",
      "A stronger understanding of bridging corporate communication and cinematic polish.",
      "A more adaptable structure for interview-led storytelling."
    ],
    tags: ["Corporate", "Interview-led", "Polished"],
    client: "Emeco",
    clientFocus: "Trust, clarity, and human-centred communication for a serious business context.",
    deliverables: ["Case-study film", "Interview cut", "Client-facing edit"],
    media: "Case-study video, testimonial extracts, graphic frames, and client-facing cutdowns can sit here.",
    mediaType: "posterOnly"
  },
  {
    slug: "longreach-recruitment",
    title: "Longreach Recruitment",
    category: "commercial",
    type: "Brand / Recruitment",
    year: "2025",
    summary: "Commercial work shaped for trust, positioning, and communication with a cleaner marketing aesthetic.",
    role: ["Creative Producer", "Editor", "Content Structuring"],
    experience: [
      "Developed messaging-led content that retained a premium finish.",
      "Worked around clarity, audience targeting, and brand tone.",
      "Balanced direct business communication with visual style."
    ],
    learned: [
      "Clarity-driven marketing content can still feel elevated.",
      "Business positioning improves when the visual system matches the message.",
      "Content can be clean, usable, and persuasive at the same time."
    ],
    gained: [
      "More fluency in marketing-led video systems.",
      "A stronger sense of how to present client value visually.",
      "A usable model for conversion-focused storytelling."
    ],
    tags: ["Marketing", "Brand Messaging", "Trust"],
    client: "Longreach Recruitment",
    clientFocus:
      "Clearer business positioning, stronger message delivery, and usable brand communication.",
    deliverables: ["Brand video", "Message-led cutdowns", "Campaign assets"],
    media: "Brand video, role cutdowns, graphics, and campaign deliverables can sit here.",
    mediaType: "posterOnly"
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
