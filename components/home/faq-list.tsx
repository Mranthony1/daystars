import { Container } from "@/components/ui/container";
import type { Faq } from "@/lib/faqs";

export function FaqList({
  items,
  title = "Questions worth answering first",
}: {
  items: Faq[];
  title?: string;
}) {
  return (
    <section className="bg-paper text-ink">
      <Container className="pb-20 md:pb-28">
        <h2 className="max-w-xl border-t border-line-strong pt-12 font-display text-[clamp(2rem,4vw,3.4rem)] font-medium leading-[0.98] tracking-[-0.04em]">
          {title}
        </h2>
        <div className="mt-8 border-b border-line-strong">
          {items.map((item) => (
            <details key={item.question} className="group border-t border-line-strong">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-left text-lg font-medium">
                {item.question}
                <span
                  aria-hidden
                  className="font-display text-2xl leading-none text-mute transition-transform group-open:rotate-45 motion-reduce:transition-none"
                >
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-6 leading-relaxed text-mute">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
