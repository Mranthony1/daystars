import Link from "next/link";
import { ViewEvent } from "@/components/analytics/view-event";
import { ServiceIconMark } from "@/components/services/service-icon";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { isAnalyticsEnabled } from "@/lib/site-config";
import { getAdjacentServices, type Service } from "@/lib/services";

export function ServiceDetail({ service }: { service: Service }) {
  const { previous, next } = getAdjacentServices(service.slug);

  return (
    <article>
      {isAnalyticsEnabled() ? (
        <ViewEvent name="service_view" page={service.slug} />
      ) : null}
      <header className="bg-ink pb-16 pt-28 text-paper md:pb-20 md:pt-36">
        <Container>
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { label: service.title },
            ]}
          />
          <p className="mt-8 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-lime">
            {service.number}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.6rem,6vw,5.4rem)] font-medium leading-[0.94] tracking-[-0.04em]">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone">{service.summary}</p>
          <div className="mt-8">
            <ButtonLink href={`/contact?service=${service.slug}`} track="cta_project">
              Start a Project
            </ButtonLink>
          </div>
        </Container>
      </header>
      <section className="bg-paper text-ink">
        <Container className="grid gap-12 py-16 md:py-24 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <ServiceIconMark icon={service.icon} className="h-6 w-6" />
            <h2 className="mt-4 font-display text-4xl tracking-tight">What this work is for</h2>
            <p className="mt-4 text-lg leading-relaxed text-mute">{service.narrative}</p>
          </div>
          <div className="grid gap-10">
            <Block title="Problems this service addresses" items={service.problems} />
            <Block title="Deliverables, depending on scope" items={service.deliverables} />
            <Block title="Who it suits" items={service.fit} />
            <Block title="Measures worth watching" items={service.measures} />
          </div>
        </Container>
      </section>
      <section className="border-t border-line bg-ink text-paper">
        <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
          {previous ? (
            <Link href={`/services/${previous.slug}`} className="hover:text-lime">
              <span className="block text-[0.68rem] uppercase tracking-[0.18em] text-mist">Previous</span>
              {previous.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/services/${next.slug}`} className="md:text-right hover:text-lime">
              <span className="block text-[0.68rem] uppercase tracking-[0.18em] text-mist">Next</span>
              {next.title}
            </Link>
          ) : null}
        </Container>
      </section>
    </article>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.18em]">{title}</h3>
      <ul className="mt-3 space-y-2 text-mute">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
