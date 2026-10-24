import { Container } from "@/components/ui/container";
import { principles } from "@/lib/faqs";

export function Difference() {
  return (
    <section className="bg-ink text-paper">
      <Container className="py-20 md:py-28">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-lime">
          Why DAYSTARS
        </p>
        <h2 className="mt-4 max-w-4xl font-display text-[clamp(2.2rem,5vw,4.6rem)] font-medium leading-[0.96] tracking-[-0.04em]">
          The work should be explainable, distinctive, and useful to the business.
        </h2>
        <div className="mt-14 divide-y divide-line border-y border-line">
          {principles.map((item) => (
            <article
              key={item.number}
              className="grid gap-3 py-6 md:grid-cols-[6rem_16rem_1fr] md:items-baseline md:gap-8"
            >
              <p className="font-display text-2xl text-lime">{item.number}</p>
              <h3 className="font-display text-2xl tracking-tight">{item.title}</h3>
              <p className="max-w-xl text-stone">{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
