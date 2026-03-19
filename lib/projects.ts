export type ProjectCategory = "film" | "commercial";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  year: string;
  logline: string;
  poster?: string;
  client?: string;
  tags: string[];
  role: string;
  whatILearned: string;
  whatIGotFromIt: string;
  description: string;
  impact: string;
  mediaType: "embed" | "posterOnly";
  embedUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "after-the-static",
    title: "After the Static",
    category: "film",
    year: "2026",
    logline:
      "A memory-driven short about two siblings tracing the last radio transmission from their childhood home.",
    tags: ["Narrative Short", "Character Drama", "Festival Cut"],
    role: "Writer / Director / Editor",
    description:
      "This placeholder narrative project is structured for your future festival short or passion project. Use this section for the emotional premise, creative intention, and any story context you want programmers, collaborators, or curators to understand immediately.",
    impact:
      "Use this block to describe reception, release strategy, screenings, notable collaborators, or how the project advanced your voice as a filmmaker.",
    mediaType: "embed",
    embedUrl: "https://player.vimeo.com/video/76979871",
    whatILearned:
      "Working with quiet scenes reinforced how much tension can come from restraint, composition, and the timing of a cut rather than constant motion.",
    whatIGotFromIt:
      "A clearer sense of authorship: how to keep visual motifs, sound, and performance all aligned around a single emotional thesis."
  },
  {
    slug: "night-window",
    title: "Night Window",
    category: "film",
    year: "2025",
    logline:
      "A nocturnal city portrait that lives between documentary texture and scripted intimacy.",
    tags: ["Hybrid Film", "Mood Piece", "Director's Cut"],
    role: "Director / Cinematographer",
    description:
      "Use this placeholder entry for another narrative or auteur-led piece. The structure is ready for synopsis, collaborators, process notes, or the emotional hook behind the work.",
    impact:
      "Use this area to speak about why the project mattered artistically, what audiences responded to, and what it opened up next.",
    mediaType: "posterOnly",
    whatILearned:
      "How to preserve spontaneity on set without losing formal control, especially when relying on practical light and time-sensitive locations.",
    whatIGotFromIt:
      "Confidence in building narrative atmosphere through texture, environment, and performance rather than exposition alone."
  },
  {
    slug: "northline-launch-film",
    title: "Northline Launch Film",
    category: "commercial",
    year: "2026",
    logline:
      "A premium brand launch film designed to convert product clarity into emotional desire.",
    client: "Northline Studio",
    tags: ["Launch Film", "Paid Social", "Cutdown Suite"],
    role: "Director / DP",
    description:
      "Use this placeholder project for commercial work where strategy and aesthetics need equal weight. You can insert brief, deliverables, audience, or campaign objectives here.",
    impact:
      "This slot is designed for outcomes: campaign lift, client feedback, rollout scope, and how the work balanced performance goals with visual identity.",
    mediaType: "embed",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    whatILearned:
      "How to protect cinematic texture inside a tight production schedule by planning modular setups that can feed hero, social, and cutdown outputs.",
    whatIGotFromIt:
      "A repeatable client-delivery workflow that keeps trust high while still leaving room for taste, pacing, and a point of view."
  },
  {
    slug: "atlas-campaign-system",
    title: "Atlas Campaign System",
    category: "commercial",
    year: "2025",
    logline:
      "A cross-platform campaign framework for a product story spanning hero film, website motion, and social edits.",
    client: "Atlas Health",
    tags: ["Campaign Direction", "Brand System", "Multi-Format Delivery"],
    role: "Creative Lead / Director",
    description:
      "Use this placeholder for a broader strategic engagement where the visual language had to work across multiple deliverables and stakeholders.",
    impact:
      "Use this area to summarize the business case, rollout scale, or campaign performance without losing the creative story behind the execution.",
    mediaType: "posterOnly",
    whatILearned:
      "How to frame creative recommendations in terms that help clients make confident decisions quickly without flattening the work into generic content.",
    whatIGotFromIt:
      "A stronger bridge between strategy, presentation, and production execution—especially when multiple deliverables must feel like one coherent world."
  }
];

export const filmProjects = projects.filter((project) => project.category === "film");
export const commercialProjects = projects.filter(
  (project) => project.category === "commercial"
);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
