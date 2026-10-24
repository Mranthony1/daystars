import Link from "next/link";
import { ProjectArt } from "@/components/portfolio/project-art";
import { Container } from "@/components/ui/container";
import { projects } from "@/lib/projects";

const spans = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-4",
];

export function SelectedWork() {
  return (
    <section className="bg-paper text-ink">
      <Container className="py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-mute">
              Selected work
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.2rem,4.8vw,4.5rem)] font-medium leading-[0.96] tracking-[-0.04em]">
              Concept studies in brand, web, and growth.
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="text-sm font-semibold uppercase tracking-[0.16em] hover:text-mute"
          >
            Open the portfolio
          </Link>
        </div>
        <p className="mt-5 max-w-2xl text-mute">
          These are self-initiated concepts. They show how DAYSTARS thinks.
          They are not completed client engagements, and they do not report real results.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-12">
          {projects.map((project, index) => (
            <article key={project.slug} className={spans[index] ?? "md:col-span-4"}>
              <Link href={`/portfolio/${project.slug}`} className="group block">
                <div className={index === 0 ? "aspect-[4/5] overflow-hidden bg-ink" : "aspect-[5/4] overflow-hidden bg-ink"}>
                  <ProjectArt art={project.art} alt={project.alt} />
                </div>
                <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-mute">
                  {project.designation}
                </p>
                <h3 className="mt-2 font-display text-3xl tracking-tight group-hover:underline">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-mute">
                  {project.industry} · {project.services.join(", ")}
                </p>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-mute">
                  {project.summary}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
