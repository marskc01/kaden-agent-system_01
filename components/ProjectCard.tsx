"use client";

import Link from "next/link";
import { useState, type PointerEvent } from "react";
import type { Project } from "@/lib/projects";

export function ProjectCard({
  project,
  emphasis
}: {
  project: Project;
  emphasis: "film" | "commercial";
}) {
  const [transform, setTransform] = useState("perspective(1200px) rotateX(0deg) rotateY(0deg) translate3d(0,0,0)");

  const handleMove = (event: PointerEvent<HTMLAnchorElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    const rotateY = (x - 0.5) * 10;
    const rotateX = (0.5 - y) * 8;
    setTransform(
      `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(0,-6px,0)`
    );
  };

  const handleLeave = () => {
    setTransform("perspective(1200px) rotateX(0deg) rotateY(0deg) translate3d(0,0,0)");
  };

  const accentClass =
    emphasis === "film"
      ? "from-accent/18 via-accent/6 to-transparent"
      : "from-accentWarm/18 via-accent/6 to-transparent";

  return (
    <Link
      href={`/project/${project.slug}`}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className="group block h-full"
      style={{ transform, transformStyle: "preserve-3d", transition: "transform 180ms ease, border-color 180ms ease" }}
    >
      <article className="surface-panel relative h-full overflow-hidden p-6 transition duration-300 group-hover:border-white/20 group-hover:bg-white/[0.075]">
        <div className={`absolute inset-0 bg-gradient-to-br ${accentClass} opacity-70`} />
        <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <div className="relative flex h-full flex-col gap-6" style={{ transform: "translateZ(28px)" }}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-paper/60">{project.year}</p>
              <h2 className="mt-2 text-2xl font-semibold text-paper">{project.title}</h2>
            </div>
            <span className="rounded-full border border-white/12 px-3 py-1 text-xs text-paper/70">
              {emphasis === "film" ? "Narrative" : project.client ?? "Client Project"}
            </span>
          </div>

          <p className="max-w-lg text-sm leading-6 text-paper/78">{project.logline}</p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-black/20 px-3 py-1 text-xs text-paper/72">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-end justify-between gap-4 border-t border-white/10 pt-5">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-paper/55">Role</p>
              <p className="mt-2 text-sm text-paper/82">{project.role}</p>
            </div>
            <span className="text-sm text-paper/86 transition group-hover:translate-x-1">Open project →</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
