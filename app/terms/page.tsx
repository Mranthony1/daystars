import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Terms",
  description:
    "Draft terms for using the DAYSTARS website, including concept projects, enquiries, and the limits of what the site promises.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Terms" title="Using this website.">
        <p>
          This is a draft for the DAYSTARS owner to review with appropriate
          advice. It is not a client contract, and it is not legal advice.
        </p>
      </PageHeader>
      <section className="bg-paper text-ink">
        <Container className="max-w-3xl space-y-8 py-16 text-lg leading-relaxed text-mute md:py-20">
          <p className="border border-ink/15 px-4 py-3 text-sm text-ink">
            Draft for owner review. Do not treat it as a finished agreement.
          </p>
          <section>
            <h2 className="font-display text-3xl tracking-tight text-ink">The site</h2>
            <p className="mt-3">
              The pages, writing, mark, and original graphics are the property of
              DAYSTARS unless a page says otherwise. You may read them and share
              links. You may not copy the site design or present the concept
              projects as your own client work.
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl tracking-tight text-ink">Concept projects</h2>
            <p className="mt-3">
              Portfolio studies marked “Self-Initiated Concept” are illustrative.
              They are not completed engagements, and they do not describe a real
              client’s results.
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl tracking-tight text-ink">Enquiries</h2>
            <p className="mt-3">
              Sending the form starts a conversation. It does not create a
              project, reserve a date, or accept a budget. Scope and fees exist
              only in a proposal the studio issues and a client accepts. Engagement
              names on the site are ways of working, not offers with a fixed price.
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl tracking-tight text-ink">No guaranteed outcomes</h2>
            <p className="mt-3">
              DAYSTARS does not guarantee search rankings, revenue, leads,
              advertising returns, or a particular business result. Any measure
              discussed on the site is something that can be observed, not a
              promise.
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl tracking-tight text-ink">Acceptable use</h2>
            <p className="mt-3">
              Do not misuse the enquiry form, attempt to disrupt the site, or
              submit information you do not have the right to share. The studio
              may ignore submissions that look automated or abusive.
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl tracking-tight text-ink">Changes</h2>
            <p className="mt-3">
              The owner may update these terms as the business, the providers,
              and the site change. The version on this page is the one that
              applies to use of the site.
            </p>
          </section>
        </Container>
      </section>
    </>
  );
}
