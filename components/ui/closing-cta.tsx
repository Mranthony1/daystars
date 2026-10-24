import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function ClosingCta({
  title = "Ready to Make Your Next Move?",
  text = "Tell us where your business is going. We’ll help you explore the strategy, creativity, and digital opportunities to get there.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="surface-lime bg-lime text-ink">
      <Container className="grid gap-8 py-20 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:py-28">
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em]">
            Start a project
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-[clamp(2.5rem,6vw,5.2rem)] font-medium leading-[0.94] tracking-[-0.04em]">
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed">{text}</p>
        </div>
        <ButtonLink href="/contact" variant="ink" track="cta_project">
          Start a Project
        </ButtonLink>
      </Container>
    </section>
  );
}
