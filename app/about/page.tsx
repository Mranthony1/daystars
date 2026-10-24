import { ClosingCta } from "@/components/ui/closing-cta";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { values } from "@/lib/faqs";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description:
    "DAYSTARS helps ambitious businesses become easier to notice, understand, and choose — through strategy, creative, and digital marketing.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title="Helping ambitious brands shine.">
        <p>
          DAYSTARS is a creative growth agency. The mission is straightforward:
          help a business stand out, attract the right customers, and build a
          digital presence that can keep working after the first launch.
        </p>
      </PageHeader>
      <section className="bg-paper text-ink">
        <Container className="grid gap-12 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl tracking-tight">The approach</h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-mute">
              <p>
                Growth starts with a clearer business, not a louder one. Who it
                is for, what it should be known for, and what a stranger should
                do next — those decisions shape the identity, the website, and
                the marketing that follows.
              </p>
              <p>
                Strategy and creativity are not separate departments here. A
                sharp idea that cannot be explained is unfinished. A sensible
                plan that looks like everyone else will be ignored. The studio
                holds both.
              </p>
              <p>
                The relationship is meant to feel direct. You should know what
                is being made, why it exists, and how you will tell whether it
                is working. DAYSTARS will not dress up a guess as a guarantee.
              </p>
            </div>
          </div>
          <div className="border border-ink/15 p-6 md:p-8">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-mute">
              The studio
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              DAYSTARS is built as a partner for founders, operators, and teams
              who want the brand and the growth system considered together.
              Leadership and team profiles will be added when the people behind
              the studio publish them. Until then, the work and the way of
              working are the introduction.
            </p>
            <p className="mt-4 text-mute">
              The studio is prepared for clients in Ghana and for clients
              elsewhere. Markets, currency, and contact details are configured
              rather than assumed.
            </p>
          </div>
        </Container>
      </section>
      <section className="bg-ink text-paper">
        <Container className="py-16 md:py-24">
          <h2 className="font-display text-[clamp(2.2rem,4vw,3.8rem)] font-medium tracking-[-0.04em]">
            What the studio holds itself to
          </h2>
          <ol className="mt-12 divide-y divide-line border-y border-line">
            {values.map((value, index) => (
              <li key={value.title} className="grid gap-3 py-6 md:grid-cols-[4rem_14rem_1fr] md:items-baseline">
                <span className="font-display text-lime">0{index + 1}</span>
                <h3 className="font-display text-2xl tracking-tight">{value.title}</h3>
                <p className="text-stone">{value.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      <ClosingCta
        title="If the approach fits, start a conversation."
        text="Share the business, the goal, and the constraint that matters most. DAYSTARS will respond if there is a useful way to help."
      />
    </>
  );
}
