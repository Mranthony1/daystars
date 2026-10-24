import Link from "next/link";
import { Container } from "@/components/ui/container";
import { packages } from "@/lib/packages";

export function Engagements({ tone = "ink" }: { tone?: "ink" | "paper" }) {
  const dark = tone === "ink";
  return (
    <section className={dark ? "bg-ink text-paper" : "bg-paper text-ink"}>
      <Container className="py-20 md:py-28">
        <p className={`text-[0.72rem] font-semibold uppercase tracking-[0.24em] ${dark ? "text-lime" : "text-mute"}`}>
          Ways to work together
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.2rem,4.8vw,4.4rem)] font-medium leading-[0.96] tracking-[-0.04em]">
          Choose a direction. The proposal defines the scope.
        </h2>
        <p className={`mt-5 max-w-2xl ${dark ? "text-stone" : "text-mute"}`}>
          These are ways of working, not priced offers. Nothing here is a
          contractual package. Fees are confirmed only in a proposal.
        </p>
        <div className={`mt-12 divide-y ${dark ? "divide-line border-y border-line" : "divide-line-strong border-y border-line-strong"}`}>
          {packages.map((item) => (
            <article
              key={item.id}
              className="grid gap-6 py-8 lg:grid-cols-[12rem_1fr_14rem] lg:items-start"
            >
              <h3 className="font-display text-3xl tracking-tight">{item.name}</h3>
              <div>
                <p className={dark ? "text-stone" : "text-mute"}>{item.audience}</p>
                <p className="mt-3 max-w-xl">{item.description}</p>
                <ul className="mt-4 space-y-1 text-sm">
                  {item.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
                <p className={`mt-4 text-xs uppercase tracking-[0.16em] ${dark ? "text-mist" : "text-mute"}`}>
                  {item.engagement} · {item.priceLabel}
                </p>
              </div>
              <Link
                href={`/contact?service=multiple&package=${item.id}`}
                data-track="cta_project"
                className={`inline-flex min-h-12 items-center justify-center px-4 text-center text-[0.72rem] font-semibold uppercase tracking-[0.16em] ${
                  dark ? "bg-lime text-ink" : "bg-ink text-paper"
                }`}
              >
                Request a Proposal
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
