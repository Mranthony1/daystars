import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Engagements } from "@/components/home/engagements";
import { FaqList } from "@/components/home/faq-list";
import { ServiceIconMark } from "@/components/services/service-icon";
import { ClosingCta } from "@/components/ui/closing-cta";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { faqs } from "@/lib/faqs";
import { createMetadata } from "@/lib/metadata";
import { services } from "@/lib/services";

export const metadata = createMetadata({
  title: "Services",
  description:
    "SEO, social media, paid advertising, branding, and web design from DAYSTARS — scoped to the business, never sold as a guarantee.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="Services" title="The work DAYSTARS is built to do.">
        <p>
          Strategy, creative, and marketing for businesses that want a sharper
          presence and a clearer path to customers. Deliverables follow the
          agreed scope. Results are measured. They are not promised in advance.
        </p>
      </PageHeader>
      <section className="bg-paper text-ink">
        <Container className="py-16 md:py-20">
          <ol className="divide-y divide-line-strong border-y border-line-strong">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`#${service.slug}`}
                  className="grid grid-cols-[3rem_1fr_auto] items-center gap-4 py-5 md:grid-cols-[4rem_1.2fr_2fr_auto]"
                >
                  <span className="font-display text-xl">{service.number}</span>
                  <span className="font-display text-2xl tracking-tight">{service.title}</span>
                  <span className="hidden text-mute md:block">{service.benefit}</span>
                  <ArrowUpRight aria-hidden className="h-4 w-4" />
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      {services.map((service, index) => {
        const paper = index % 2 === 0;
        return (
          <section
            key={service.slug}
            id={service.slug}
            className={`scroll-mt-28 ${paper ? "bg-paper text-ink" : "bg-ink text-paper"}`}
          >
            <Container className="grid gap-10 py-16 md:py-24 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className={paper ? "text-ink" : "text-lime"}>
                  <ServiceIconMark icon={service.icon} />
                </div>
                <p className={`mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] ${paper ? "text-mute" : "text-lime"}`}>
                  {service.number}
                </p>
                <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
                  {service.title}
                </h2>
                <p className={`mt-4 text-lg leading-relaxed ${paper ? "text-mute" : "text-stone"}`}>
                  {service.narrative}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em]"
                >
                  Service detail
                  <ArrowUpRight aria-hidden className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid gap-8 sm:grid-cols-2">
                <DetailList title="The problem" items={service.problems} muted={paper ? "text-mute" : "text-stone"} />
                <DetailList title="Deliverables" items={service.deliverables} muted={paper ? "text-mute" : "text-stone"} />
                <DetailList title="A good fit" items={service.fit} muted={paper ? "text-mute" : "text-stone"} />
                <DetailList title="What can be observed" items={service.measures} muted={paper ? "text-mute" : "text-stone"} />
              </div>
            </Container>
          </section>
        );
      })}
      <section className="bg-paper text-ink">
        <Container className="pb-4 pt-16">
          <p className="max-w-2xl text-mute">
            Lists describe the kind of work available. A proposal confirms what
            is included. DAYSTARS does not guarantee rankings, revenue, leads,
            or advertising returns.
          </p>
        </Container>
      </section>
      <Engagements tone="paper" />
      <FaqList items={faqs.slice(0, 4)} title="Before you brief a project" />
      <ClosingCta
        title="Have a brief, or just a direction?"
        text="Share the business and the challenge. DAYSTARS will tell you whether there is a useful way to help."
      />
    </>
  );
}

function DetailList({
  title,
  items,
  muted,
}: {
  title: string;
  items: string[];
  muted: string;
}) {
  return (
    <div>
      <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.18em]">{title}</h3>
      <ul className={`mt-3 space-y-2 text-sm leading-relaxed ${muted}`}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
