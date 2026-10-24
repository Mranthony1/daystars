import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { CopyrightYear } from "@/components/layout/copyright-year";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { services } from "@/lib/services";
import { siteConfig, socialLinks } from "@/lib/site-config";
import { footerNav } from "@/lib/navigation";
import { whatsappHref } from "@/lib/utils";

export function Footer() {
  const whatsapp = siteConfig.contact.whatsapp
    ? whatsappHref(siteConfig.contact.whatsapp, siteConfig.whatsappMessage)
    : "";
  const hasContact =
    siteConfig.contact.email ||
    siteConfig.contact.phone ||
    siteConfig.contact.address ||
    whatsapp;

  return (
    <footer className="border-t border-line bg-ink text-paper">
      <Container className="grid gap-14 py-16 md:py-20 lg:grid-cols-[1.3fr_0.7fr_0.9fr_0.9fr]">
        <div>
          <Logo />
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-stone">
            {siteConfig.statement}
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact" track="cta_project">
              Start a Project
            </ButtonLink>
          </div>
        </div>
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-lime">
            Navigate
          </p>
          <ul className="mt-4 space-y-2">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-stone hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-lime">
            Services
          </p>
          <ul className="mt-4 space-y-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-stone hover:text-paper"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-lime">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-stone">
            {siteConfig.contact.email ? (
              <li>
                <a className="hover:text-paper" href={`mailto:${siteConfig.contact.email}`}>
                  {siteConfig.contact.email}
                </a>
              </li>
            ) : null}
            {siteConfig.contact.phone ? (
              <li>
                <a className="hover:text-paper" href={`tel:${siteConfig.contact.phone}`}>
                  {siteConfig.contact.phone}
                </a>
              </li>
            ) : null}
            {whatsapp ? (
              <li>
                <a className="hover:text-paper" href={whatsapp} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </li>
            ) : null}
            {siteConfig.contact.address ? <li>{siteConfig.contact.address}</li> : null}
            {hasContact ? null : (
              <li>
                <Link href="/contact" className="hover:text-paper">
                  Project enquiries
                </Link>
              </li>
            )}
          </ul>
          {socialLinks.length > 0 ? (
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-stone hover:text-lime"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Container>
      <div className="overflow-hidden border-t border-line">
        <Container>
          <p className="py-4 font-display text-[clamp(3.2rem,13vw,11rem)] font-medium leading-[0.8] tracking-[-0.06em] text-paper">
            DAYSTARS
          </p>
        </Container>
      </div>
      <Container className="flex flex-col gap-3 border-t border-line py-5 text-sm text-mist sm:flex-row sm:items-center sm:justify-between">
        <p>
          © <CopyrightYear /> DAYSTARS. All rights reserved.
        </p>
        <div className="flex gap-5">
          <Link href="/privacy" className="hover:text-paper">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-paper">
            Terms
          </Link>
        </div>
      </Container>
    </footer>
  );
}
