import { Container } from "@/components/ui/container";

export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="bg-ink pb-16 pt-28 text-paper md:pb-20 md:pt-36">
      <Container>
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-lime">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-5xl font-display text-[clamp(2.6rem,6.4vw,5.6rem)] font-medium leading-[0.94] tracking-[-0.04em]">
          {title}
        </h1>
        {children ? (
          <div className="mt-6 max-w-2xl text-lg leading-relaxed text-stone">{children}</div>
        ) : null}
      </Container>
    </header>
  );
}
