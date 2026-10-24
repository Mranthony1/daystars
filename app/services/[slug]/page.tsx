import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ServiceDetail } from "@/components/services/service-detail";
import { Container } from "@/components/ui/container";
import { getService, services } from "@/lib/services";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service" };
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} — DAYSTARS`,
      description: service.summary,
      url: `/services/${service.slug}`,
    },
  };
}

export default function ServicePage({ params }: { params: Params }) {
  return (
    <Suspense fallback={<ServiceFallback />}>
      <ServiceContent params={params} />
    </Suspense>
  );
}

async function ServiceContent({ params }: { params: Params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}

function ServiceFallback() {
  return (
    <div className="bg-ink pt-32 text-paper">
      <Container className="pb-20">
        <p className="text-sm uppercase tracking-[0.18em] text-mist">Loading service</p>
      </Container>
    </div>
  );
}
