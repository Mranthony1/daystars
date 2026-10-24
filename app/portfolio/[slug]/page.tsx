import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ViewEvent } from "@/components/analytics/view-event";
import { ProjectArt } from "@/components/portfolio/project-art";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { getAdjacentProjects, getProject, projects } from "@/lib/projects";
import { isAnalyticsEnabled } from "@/lib/site-config";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: `${project.title} concept`,
    description: project.summary,
    alternates: { canonical: `/portfolio/${project.slug}` },
    openGraph: {
      title: `${project.title} — DAYSTARS concept`,
      description: project.summary,
      url: `/portfolio/${project.slug}`,
    },
  };
}

export default function ProjectPage({ params }: { params: Params }) {
  return (
    <Suspense
      fallback={
        <div className="bg-ink pt-32 text-paper">
          <Container className="pb-20">
            <p className="text-sm uppercase tracking-[0.18em] text-mist">Loading project</p>
          </Container>
        </div>
      }
    >
      <ProjectContent params={params} />
    </Suspense>
  );
}

async function ProjectContent({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const { previous, next } = getAdjacentProjects(project.slug);

  return (
    <article>
      {isAnalyticsEnabled() ? (
        <ViewEvent name="portfolio_view" page={project.slug} />
      ) : null}
      <header className="bg-ink pb-12 pt-28 text-paper md:pt-36">
        <Container>
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/portfolio", label: "Portfolio" },
              { label: project.title },
            ]}
          />
          <p className="mt-8 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-lime">
            {project.designation}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.7rem,6vw,5.6rem)] font-medium leading-[0.94] tracking-[-0.04em]">
            {project.title}
          </h1>
          <p className="mt-5 text-stone">
            {project.industry} · {project.services.join(" · ")}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone">{project.summary}</p>
        </Container>
      </header>
      <div className="bg-ink">
        <Container className="pb-12">
          <div className="aspect-[16/10] overflow-hidden bg-paper">
            <ProjectArt art={project.art} alt={project.alt} />
          </div>
        </Container>
      </div>
      <section className="bg-paper text-ink">
        <Container className="grid gap-12 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl tracking-tight">Context and challenge</h2>
            <p className="mt-4 leading-relaxed text-mute">{project.challenge}</p>
            <h2 className="mt-10 font-display text-3xl tracking-tight">Strategy</h2>
            <p className="mt-4 leading-relaxed text-mute">{project.strategy}</p>
          </div>
          <div>
            <h2 className="font-display text-3xl tracking-tight">Execution</h2>
            <ul className="mt-4 space-y-3 text-mute">
              {project.execution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h2 className="mt-10 font-display text-3xl tracking-tight">Outcome</h2>
            <p className="mt-4 leading-relaxed text-mute">{project.outcome}</p>
            <h2 className="mt-10 font-display text-3xl tracking-tight">What it suggests next</h2>
            <p className="mt-4 leading-relaxed text-mute">{project.lessons}</p>
          </div>
        </Container>
        <Container className="pb-16">
          <div className="border border-ink/15 p-6 md:p-8">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-mute">
              A similar goal
            </p>
            <p className="mt-3 max-w-2xl text-lg">
              If this is the kind of problem your business is facing, start with
              the real constraints. DAYSTARS will say whether there is a useful brief.
            </p>
            <div className="mt-6">
              <ButtonLink href="/contact?service=multiple" variant="ink" track="cta_project">
                Start a Project
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
      <nav className="border-t border-line bg-ink text-paper" aria-label="More projects">
        <Container className="grid gap-6 py-10 md:grid-cols-2">
          {previous ? (
            <Link href={`/portfolio/${previous.slug}`} className="hover:text-lime">
              <span className="block text-[0.68rem] uppercase tracking-[0.18em] text-mist">Previous</span>
              {previous.title}
            </Link>
          ) : null}
          {next ? (
            <Link href={`/portfolio/${next.slug}`} className="md:text-right hover:text-lime">
              <span className="block text-[0.68rem] uppercase tracking-[0.18em] text-mist">Next</span>
              {next.title}
            </Link>
          ) : null}
        </Container>
      </nav>
    </article>
  );
}
