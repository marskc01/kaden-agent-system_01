import type { ProjectCategory } from "./projects";

export const marqueeRows = [
  ["Narrative", "Commercial", "Director", "Producer", "Editor", "Brand Films", "Case Studies", "Showreel"],
  ["Emotion-Led", "Story First", "24 FPS", "2.39:1", "Perth, WA", "Cinematic", "Visual Tone", "Proof of Work"],
  ["Campaign Films", "Short Films", "Corporate Storytelling", "Social Ads", "Creative Direction", "Post-Production"]
];

export const categoryMeta: Record<
  ProjectCategory,
  {
    label: string;
    short: string;
    intro: string;
    hero: string;
    pageText: string;
  }
> = {
  film: {
    label: "Film Work",
    short: "Filmmaking-led",
    intro: "Narrative work presented with more atmosphere, more authorship, and more emotional gravity.",
    hero: "Narrative projects presented more like a film slate than a client case-study grid.",
    pageText:
      "This page foregrounds authorship, tone, atmosphere, and what the project meant rather than compressing everything into client language."
  },
  commercial: {
    label: "Commercial Work",
    short: "Client-facing",
    intro:
      "Commercial, brand, and case-study work presented with clearer hierarchy, sharper positioning, and cleaner communication.",
    hero: "Commercial work presented more like premium strategy-led case studies.",
    pageText:
      "This page is intentionally cleaner and more structured. It surfaces client focus, deliverables, and message clarity while retaining the premium look."
  }
};
