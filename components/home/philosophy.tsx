import { Container } from "@/components/ui/container";

export function Philosophy() {
  return (
    <section className="bg-paper text-ink">
      <Container className="grid gap-10 py-20 md:py-28 lg:grid-cols-2">
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-mute">
            How the work is approached
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.1rem,4vw,3.6rem)] font-medium leading-[0.98] tracking-[-0.04em]">
            Creativity is a decision. So is the evidence that follows it.
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-mute">
          <p>
            DAYSTARS treats brand, website, and marketing as one system. The
            identity should make the site clearer. The site should make the
            campaign more convincing. The campaign should teach the business
            something it can use next month.
          </p>
          <p>
            Collaboration stays practical. The client brings the business. The
            studio brings the craft, the questions, and a point of view. Both
            should be able to explain the work when it is done.
          </p>
          <p>
            Growth is discussed without theatre. Search visibility, response to
            creative, and the quality of enquiries can be observed. Rankings,
            revenue, and lead totals are never promised in advance.
          </p>
        </div>
      </Container>
    </section>
  );
}
