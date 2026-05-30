import type { ProjectCategory } from "./projects";

export const siteConfig = {
  name: "Kaden Condie",
  navLabel: "Portfolio V0.2",
  location: "Perth, WA",
  metadata: {
    title: "Kaden Condie | Cinematic Portfolio",
    description:
      "A cinematic portfolio for narrative film and commercial directing work, built with Next.js and tailored for Vercel deployment."
  },
  contact: {
    email: "kadencondie2@gmail.com",
    instagramLabel: "Instagram",
    instagramUrl: "https://instagram.com"
  },
  home: {
    pills: ["V0.2", "Story / Emotion Lead", "Perth, WA"],
    headline: "Cinematic work built on",
    headlineEmphasis: "story, tone, and emotional weight.",
    intro:
      "Director, producer, and editor creating commercial, narrative, and brand films that feel considered, cinematic, and human. The cover page stays as the main entry point, with deeper pages branching into narrative-facing and client-facing work.",
    stats: [
      ["Format", "2.39:1"],
      ["Motion", "User-controlled"],
      ["Focus", "Proof of Work"]
    ],
    reelTitle: "Featured Showreel",
    reelPlaceholder: "Replace with Vimeo / YouTube / self-hosted hero film.",
    reelTags: ["Commercial", "Narrative", "Brand Storytelling"],
    contactTitle: "Built to convert interest into real work.",
    contactText:
      "The homepage remains a premium entry point. The browsing path underneath it is now more intentional, with clearer film and commercial experiences before viewers reach the project pages."
  },
  about: {
    headline: "A filmmaker driven by story, emotion, and visual impact.",
    intro:
      "I am a Perth-based filmmaker, producer, and editor focused on creating work that feels cinematic, emotionally precise, and memorable. Whether I am building narrative work or shaping brand stories, I care most about tone, meaning, and how a project makes people feel.",
    ethos: "Story first. Emotion-led. Cinematic without becoming empty style.",
    values: ["Integrity", "Creativity", "Collaboration", "Excellence"],
    bio: [
      "I studied film because I want to create work that moves people and carries meaning. I am drawn to projects where visual storytelling is not just decorative, but purposeful. My strongest instinct is always to ask what a story is really saying and how the filmmaking can make that land with weight.",
      "Across production, post-production, and creative development, I care about both the artistic and practical sides of a project. I want the final work to feel intentional, premium, and emotionally grounded — whether that is a short film, a brand piece, or a case-study video.",
      "Long term, I want to build a body of work and a business that sit at the intersection of cinematic storytelling, strong creative leadership, and meaningful impact."
    ],
    workStyle: [
      "I approach projects through tone, pacing, and emotional clarity.",
      "I value reliability, structure, and making thoughtful decisions under pressure.",
      "I am interested in both narrative filmmaking and premium commercial storytelling."
    ],
    skills: ["Producing", "Editing", "Creative Direction", "Adobe Suite", "Google Suite", "Story Development"],
    positioning: [
      "That you are not just a camera operator or editor, but a story-led creative with a clear point of view.",
      "That you can move between filmmaking and commercial work without losing your identity.",
      "That people should reach out if they want thoughtful, cinematic, emotionally-aware work."
    ]
  }
};

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
