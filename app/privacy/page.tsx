import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { createMetadata } from "@/lib/metadata";
import { isAnalyticsEnabled, siteConfig } from "@/lib/site-config";

export const metadata = createMetadata({
  title: "Privacy",
  description:
    "How the DAYSTARS website handles project enquiries and optional analytics. A draft for the business owner to review.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Privacy" title="How this site handles information.">
        <p>
          This is a draft for the DAYSTARS owner to review and finalize. It is
          not legal advice, and it should not be published as a finished policy
          until it has been checked against the studio’s actual providers and obligations.
        </p>
      </PageHeader>
      <section className="bg-paper text-ink">
        <Container className="max-w-3xl space-y-8 py-16 text-lg leading-relaxed text-mute md:py-20">
          <p className="border border-ink/15 px-4 py-3 text-sm text-ink">
            Draft for owner review. Update it before relying on it with clients.
          </p>
          <section>
            <h2 className="font-display text-3xl tracking-tight text-ink">What the form collects</h2>
            <p className="mt-3">
              The enquiry form asks for your name, email, the service you are
              interested in, a project description, and your consent to be
              contacted. You can also add a company, website, engagement type,
              budget direction, timeline, and preferred contact method.
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl tracking-tight text-ink">Why it is collected</h2>
            <p className="mt-3">
              The only purpose built into this site is to let DAYSTARS understand
              and reply to a project enquiry. The form is not a mailing list,
              and it does not ask for information that is irrelevant to that reply.
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl tracking-tight text-ink">Where an enquiry goes</h2>
            <p className="mt-3">
              If email delivery is configured, the enquiry is sent to the studio
              inbox through Resend. The site does not keep its own database of
              enquiries. If email delivery is not configured, the form rejects
              the submission and does not store it.
            </p>
            <p className="mt-3">
              A hidden field is used to reduce automated spam. The server also
              keeps a short-lived, in-memory count of submission attempts by IP
              address so the form cannot be flooded. That count is not written
              to a database and is lost when the server restarts.
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl tracking-tight text-ink">Analytics</h2>
            <p className="mt-3">
              {isAnalyticsEnabled()
                ? "Plausible analytics is configured. It is used to count page views and events such as project clicks and successful form submissions. Enquiry names, emails, and project descriptions are not sent in those events."
                : "No analytics provider is configured. The site does not load a tracker, and it does not send enquiry details to an analytics tool."}
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl tracking-tight text-ink">Retention and providers</h2>
            <p className="mt-3">
              Once an email is delivered, retention depends on the studio’s
              inbox and on Resend. Hosting logs, which can include IP address
              and browser data, depend on the host the owner chooses. Those
              providers should be named in the final policy. The site currency
              setting ({siteConfig.currency}) and market notes are configuration,
              not personal data.
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl tracking-tight text-ink">Asking about your information</h2>
            <p className="mt-3">
              {siteConfig.contact.email
                ? `To ask about an enquiry, email ${siteConfig.contact.email}.`
                : "A public studio email has not been added yet. Use the contact form once delivery is connected, or add an email address in the site configuration."}
            </p>
          </section>
        </Container>
      </section>
    </>
  );
}
