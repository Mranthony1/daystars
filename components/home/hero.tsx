import { Mark } from "@/components/brand/logo";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div
        className="pointer-events-none absolute -right-10 top-24 hidden w-[46%] max-w-xl lg:block"
        aria-hidden
      >
        <Mark accent className="h-auto w-full text-paper/10" />
      </div>
      <Container className="relative pb-16 pt-32 md:pb-24 md:pt-40">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-lime motion-safe:animate-rise">
          Strategy / Creative / Digital Growth
        </p>
        <h1 className="mt-6 max-w-[14ch] font-display text-[clamp(2.7rem,8.2vw,7.4rem)] font-medium leading-[0.9] tracking-[-0.045em] motion-safe:animate-rise [animation-delay:80ms]">
          <span className="block">Make Your Brand</span>
          <span className="block">Impossible</span>
          <span className="block">to Ignore.</span>
        </h1>
        <div className="mt-8 grid items-end gap-8 lg:grid-cols-[minmax(0,38rem)_auto] lg:justify-between">
          <p className="max-w-xl text-base leading-relaxed text-stone sm:text-lg md:text-xl motion-safe:animate-rise [animation-delay:160ms]">
            DAYSTARS combines bold creative, intelligent digital marketing, and
            high-performing websites to help ambitious businesses stand out,
            attract customers, and grow.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row motion-safe:animate-rise [animation-delay:220ms]">
            <ButtonLink href="/contact" track="cta_project">
              Start a Project
            </ButtonLink>
            <ButtonLink href="/portfolio" variant="ghost">
              Explore Our Work
            </ButtonLink>
          </div>
        </div>
        <p className="mt-12 text-[0.72rem] uppercase tracking-[0.22em] text-mist">
          Creative thinking. Digital precision. Meaningful growth.
        </p>
      </Container>
    </section>
  );
}
