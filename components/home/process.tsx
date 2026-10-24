import { Container } from "@/components/ui/container";
import { processSteps } from "@/lib/faqs";

export function Process() {
  return (
    <section className="bg-paper text-ink">
      <Container className="py-20 md:py-28">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-mute">
          How an engagement runs
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.2rem,4.8vw,4.4rem)] font-medium leading-[0.96] tracking-[-0.04em]">
          Four movements. The path changes with the scope.
        </h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li key={step.number}>
              <p className="font-display text-6xl leading-none text-ink/15">{step.number}</p>
              <h3 className="mt-4 font-display text-2xl tracking-tight">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-mute">
          A focused identity does not follow the same path as a monthly marketing
          partnership. Discovery still comes first. The deliverables, the team,
          and the measures are set for the work in front of us.
        </p>
      </Container>
    </section>
  );
}
