"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { CSSProperties, PointerEvent } from "react";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project, tone }: { project: Project; tone: "film" | "commercial" }) {
  const [style, setStyle] = useState<CSSProperties>({});

  const label = useMemo(
    () => (tone === "film" ? "Narrative / auteur-led" : "Strategy / delivery-led"),
    [tone]
  );

  const onMove = (event: PointerEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - py) * 8;
    const rotateY = (px - 0.5) * 10;

    setStyle({
      transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`
    });
  };

  const reset = () => setStyle({ transform: "perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0px)" });

  return (
    <Link
      href={`/project/${project.slug}`}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className="group block"
      style={style}
    >
      <article className="surface overflow-hidden rounded-[28px] shadow-card transition duration-300 will-change-transform group-hover:border-white/20 group-hover:bg-white/[0.07]">
        <div className="relative aspect-[4/3] overflow-hidden border-b border-white/10">
          <Image
            src={project.poster}
            alt={`${project.title} poster placeholder`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/10" />
          <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-3 text-[11px] uppercase tracking-[0.25em] text-paper/80">
            <span>{label}</span>
            <span>{project.year}</span>
          </div>
          <div className="absolute bottom-5 left-5 right-5">
            <h3 className="text-2xl font-semibold text-paper">{project.title}</h3>
            <p className="mt-2 max-w-lg text-sm leading-6 text-paper/80">{project.logline}</p>
          </div>
        </div>

        <div className="space-y-4 p-5">
          <div className="flex flex-wrap gap-2 text-xs text-paper/75">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/12 px-3 py-1">
                {tag}
              </span>
            ))}
          </div>

          <div className="grid gap-3 text-sm leading-6 text-paper/80 md:grid-cols-[1.3fr_1fr]">
            <p>{project.creativeFocus}</p>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="text-xs uppercase tracking-[0.22em] text-paper/55">Role</div>
              <div className="mt-2 font-medium text-paper">{project.role}</div>
              <div className="mt-3 text-paper/70">
                {tone === "commercial" ? project.client ?? "Client placeholder" : "Independent narrative project"}
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
