import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ServiceIconMark } from "@/components/services/service-icon";
import { Container } from "@/components/ui/container";
import { getService } from "@/lib/services";

export function ServicesOverview() {
  const seo = getService("seo");
  const social = getService("social");
  const paid = getService("paid");
  const branding = getService("branding");
  const web = getService("web");
  if (!seo || !social || !paid || !branding || !web) return null;

  return (
    <section className="bg-ink text-paper">
      <Container className="py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-lime">
              Services
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.2rem,4.8vw,4.5rem)] font-medium leading-[0.96] tracking-[-0.04em]">
              Five disciplines. One commercial purpose.
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm font-semibold uppercase tracking-[0.16em] text-stone hover:text-lime"
          >
            All services
          </Link>
        </div>

        <article className="mt-14 grid gap-8 border-t border-line pt-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="font-display text-6xl leading-none text-lime">{seo.number}</p>
            <h3 className="mt-4 font-display text-4xl tracking-tight">{seo.title}</h3>
          </div>
          <div>
            <p className="max-w-xl text-lg leading-relaxed text-stone">{seo.summary}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {seo.deliverables.slice(0, 4).map((item) => (
                <li key={item} className="border border-line px-3 py-1 text-sm text-stone">
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href={`/services/${seo.slug}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-lime"
            >
              View SEO
              <ArrowUpRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>
        </article>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[social, paid].map((service) => (
            <article key={service.slug} className="border border-line bg-ink-2 p-6 md:p-8">
              <div className="flex items-center justify-between text-lime">
                <ServiceIconMark icon={service.icon} />
                <span className="font-display text-2xl">{service.number}</span>
              </div>
              <h3 className="mt-8 font-display text-3xl tracking-tight">{service.title}</h3>
              <p className="mt-3 text-stone">{service.benefit}</p>
              <p className="mt-4 text-sm leading-relaxed text-mist">{service.summary}</p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em]"
              >
                View service
                <ArrowUpRight aria-hidden className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>

        <article className="mt-4 grid items-center gap-6 bg-paper px-6 py-8 text-ink md:grid-cols-[auto_1fr_auto] md:px-8">
          <p className="font-display text-5xl leading-none">{branding.number}</p>
          <div>
            <h3 className="font-display text-3xl tracking-tight">{branding.title}</h3>
            <p className="mt-2 max-w-xl text-mute">{branding.summary}</p>
          </div>
          <Link
            href={`/services/${branding.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em]"
          >
            View branding
            <ArrowUpRight aria-hidden className="h-4 w-4" />
          </Link>
        </article>

        <article className="mt-4 grid gap-8 border border-lime/40 p-6 md:grid-cols-[1fr_0.8fr] md:p-8">
          <div>
            <div className="flex items-center gap-3 text-lime">
              <ServiceIconMark icon={web.icon} />
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.2em]">
                {web.number} — Web
              </span>
            </div>
            <h3 className="mt-4 font-display text-4xl tracking-tight">{web.title}</h3>
            <p className="mt-4 max-w-xl text-stone">{web.summary}</p>
            <Link
              href={`/services/${web.slug}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-lime"
            >
              View websites
              <ArrowUpRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>
          <ul className="space-y-3 border-t border-line pt-4 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            {web.deliverables.slice(0, 5).map((item) => (
              <li key={item} className="text-stone">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </Container>
    </section>
  );
}
