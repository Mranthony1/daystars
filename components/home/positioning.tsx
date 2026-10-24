import { Container } from "@/components/ui/container";

const capabilities = [
  "Discoverability",
  "Recognition",
  "Demand",
  "Identity",
  "Experience",
];

export function Positioning() {
  return (
    <section className="bg-paper text-ink">
      <Container className="py-20 md:py-28">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-mute">
          The point of the studio
        </p>
        <h2 className="mt-5 max-w-4xl font-display text-[clamp(2.1rem,4.6vw,4.4rem)] font-medium leading-[0.96] tracking-[-0.04em]">
          A strategic partner for brands that want to be seen, understood, and chosen.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mute">
          DAYSTARS is not a vendor for isolated posts or a template website.
          The work connects strategy, design, technology, and marketing so a
          business can build a presence that earns attention and holds it.
        </p>
        <ul className="mt-12 grid border-y border-line-strong sm:grid-cols-2 lg:grid-cols-5">
          {capabilities.map((item, index) => (
            <li
              key={item}
              className="flex items-baseline gap-3 border-line-strong px-0 py-4 sm:px-4 lg:border-l lg:first:border-l-0"
            >
              <span className="font-display text-sm text-mute">0{index + 1}</span>
              <span className="font-display text-xl tracking-tight">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-mute">
          Client logos, testimonials, and performance figures are not shown
          here until they can be published with permission and real evidence.
        </p>
      </Container>
    </section>
  );
}
