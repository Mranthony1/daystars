import { Suspense } from "react";
import { EnquiryForm } from "@/components/contact/enquiry-form";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { isEnquiryDeliveryConfigured } from "@/lib/enquiry";
import { isEngagementValue, isServiceValue } from "@/lib/form-options";
import { createMetadata } from "@/lib/metadata";
import { siteConfig, socialLinks } from "@/lib/site-config";
import { whatsappHref } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Tell DAYSTARS about your business, your goals, and the challenge you want to solve. Project enquiries start here.",
  path: "/contact",
});

type ContactPageProps = {
  searchParams: Promise<{ service?: string; package?: string }>;
};

export default function ContactPage({ searchParams }: ContactPageProps) {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Let’s Talk About What’s Next.">
        <p>
          Tell us about your business, your goals, and the challenge you’re
          ready to solve. We’ll use that information to understand how DAYSTARS
          might help.
        </p>
      </PageHeader>
      <section className="bg-paper text-ink">
        <Container className="grid gap-12 py-16 md:py-20 lg:grid-cols-[0.8fr_1.2fr]">
          <aside>
            <h2 className="font-display text-3xl tracking-tight">What happens next</h2>
            <ol className="mt-5 space-y-4 text-mute">
              <li>1. You send the context the studio needs to understand the work.</li>
              <li>2. DAYSTARS reviews it and replies if there is a useful way to help.</li>
              <li>3. A proposal, if one is warranted, defines scope before any commitment.</li>
            </ol>
            <p className="mt-5 text-sm text-mute">
              A response time is not published here. Do not treat the form as a
              booking. Nothing is scheduled unless a scheduling link has been configured.
            </p>
            <ContactFacts />
          </aside>
          <Suspense fallback={<p className="text-mute">Loading the enquiry form…</p>}>
            <ContactPanel searchParams={searchParams} />
          </Suspense>
        </Container>
      </section>
    </>
  );
}

async function ContactPanel({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const service = typeof params.service === "string" ? params.service : "";
  const engagement = typeof params.package === "string" ? params.package : "";

  return (
    <EnquiryForm
      deliveryConfigured={isEnquiryDeliveryConfigured()}
      initialService={isServiceValue(service) ? service : ""}
      initialEngagement={isEngagementValue(engagement) ? engagement : ""}
    />
  );
}

function ContactFacts() {
  const whatsapp = siteConfig.contact.whatsapp
    ? whatsappHref(siteConfig.contact.whatsapp, siteConfig.whatsappMessage)
    : "";
  const hasDirect =
    siteConfig.contact.email ||
    siteConfig.contact.phone ||
    siteConfig.contact.address ||
    whatsapp ||
    siteConfig.schedulingUrl ||
    socialLinks.length > 0;

  return (
    <div className="mt-10 border-t border-line-strong pt-6">
      <h2 className="text-[0.72rem] font-semibold uppercase tracking-[0.18em]">
        Direct contact
      </h2>
      {hasDirect ? (
        <ul className="mt-4 space-y-2 text-mute">
          {siteConfig.contact.email ? (
            <li>
              <a className="underline" href={`mailto:${siteConfig.contact.email}`}>
                {siteConfig.contact.email}
              </a>
            </li>
          ) : null}
          {siteConfig.contact.phone ? (
            <li>
              <a className="underline" href={`tel:${siteConfig.contact.phone}`}>
                {siteConfig.contact.phone}
              </a>
            </li>
          ) : null}
          {whatsapp ? (
            <li>
              <a className="underline" href={whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
          ) : null}
          {siteConfig.contact.address ? <li>{siteConfig.contact.address}</li> : null}
          {siteConfig.schedulingUrl ? (
            <li>
              <a
                className="underline"
                href={siteConfig.schedulingUrl}
                target="_blank"
                rel="noreferrer"
                data-track="discovery_call"
              >
                Schedule a conversation
              </a>
            </li>
          ) : null}
          {socialLinks.map((item) => (
            <li key={item.label}>
              <a className="underline" href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-sm leading-relaxed text-mute">
          Email, phone, address, and social profiles have not been published
          yet. Use the enquiry form once delivery is connected, or add those
          details in the site configuration.
        </p>
      )}
    </div>
  );
}
