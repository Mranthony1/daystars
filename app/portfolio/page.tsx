import { ViewEvent } from "@/components/analytics/view-event";
import { ProjectBrowser } from "@/components/portfolio/project-browser";
import { ClosingCta } from "@/components/ui/closing-cta";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { createMetadata } from "@/lib/metadata";
import { projects } from "@/lib/projects";
import { isAnalyticsEnabled } from "@/lib/site-config";

export const metadata = createMetadata({
  title: "Portfolio",
  description:
    "Self-initiated DAYSTARS concept studies in branding, websites, SEO, social media, and paid advertising. Not client results.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      {isAnalyticsEnabled() ? <ViewEvent name="portfolio_view" page="index" /> : null}
      <PageHeader eyebrow="Portfolio" title="Work that shows the thinking.">
        <p>
          Every project on this page is a self-initiated concept. The studies
          are here to show judgment, craft, and how a brief could be framed.
          They are not client case histories, and they do not claim results.
        </p>
      </PageHeader>
      <section className="bg-paper text-ink">
        <Container className="py-16 md:py-20">
          <ProjectBrowser projects={projects} />
        </Container>
      </section>
      <ClosingCta
        title="Want work with this level of intention?"
        text="Tell us about the business. If the fit is right, DAYSTARS will propose a way to start."
      />
    </>
  );
}
