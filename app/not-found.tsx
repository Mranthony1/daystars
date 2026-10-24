import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="bg-ink text-paper">
      <Container className="py-36 md:py-48">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-lime">
          404
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.8rem,7vw,6rem)] font-medium leading-[0.92] tracking-[-0.045em]">
          This page is not in the system.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-stone">
          The link may be out of date. The work is still on the site — start
          from the homepage or go straight to an enquiry.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" variant="ghost">
            Back home
          </ButtonLink>
          <ButtonLink href="/contact" track="cta_project">
            Start a Project
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
