"use client";

import { useState } from "react";
import Link from "next/link";
import { ProjectArt } from "@/components/portfolio/project-art";
import { projectCategories, type Project, type ProjectCategory } from "@/lib/projects";
import { cn } from "@/lib/utils";

export function ProjectBrowser({ projects }: { projects: Project[] }) {
  const [category, setCategory] = useState<ProjectCategory>("all");
  const visible =
    category === "all"
      ? projects
      : projects.filter((project) => project.categories.includes(category));

  return (
    <div>
      <div
        role="toolbar"
        aria-label="Filter projects"
        className="flex flex-wrap gap-2"
      >
        {projectCategories.map((item) => {
          const selected = category === item.value;
          return (
            <button
              key={item.value}
              type="button"
              aria-pressed={selected}
              onClick={() => setCategory(item.value)}
              className={cn(
                "min-h-11 px-4 text-[0.72rem] font-semibold uppercase tracking-[0.14em]",
                selected
                  ? "bg-lime text-ink"
                  : "border border-ink/15 text-ink hover:border-ink",
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <p className="mt-6 text-sm text-mute" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
        {category === "all" ? "" : ` in ${projectCategories.find((item) => item.value === category)?.label}`}.
      </p>
      {visible.length === 0 ? (
        <p className="mt-10 text-lg">No concept projects in this category yet.</p>
      ) : (
        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((project, index) => (
            <article key={project.slug} className={index === 0 && category === "all" ? "md:col-span-2 xl:col-span-2" : undefined}>
              <Link href={`/portfolio/${project.slug}`} className="group block h-full">
                <div className={`overflow-hidden bg-ink ${index === 0 && category === "all" ? "aspect-[16/10]" : "aspect-[5/4]"}`}>
                  <ProjectArt art={project.art} alt={project.alt} />
                </div>
                <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-mute">
                  {project.designation} · {project.industry}
                </p>
                <h2 className="mt-2 font-display text-3xl tracking-tight group-hover:underline">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm text-mute">{project.services.join(" · ")}</p>
                <p className="mt-3 text-sm leading-relaxed text-mute">{project.summary}</p>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
