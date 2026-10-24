import type { Metadata } from "next";
import { Difference } from "@/components/home/difference";
import { Engagements } from "@/components/home/engagements";
import { FaqList } from "@/components/home/faq-list";
import { Hero } from "@/components/home/hero";
import { Philosophy } from "@/components/home/philosophy";
import { Positioning } from "@/components/home/positioning";
import { Process } from "@/components/home/process";
import { SelectedWork } from "@/components/home/selected-work";
import { ServicesOverview } from "@/components/home/services-overview";
import { ClosingCta } from "@/components/ui/closing-cta";
import { faqs } from "@/lib/faqs";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    absolute: "DAYSTARS — Creative Thinking. Digital Precision. Meaningful Growth.",
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Positioning />
      <ServicesOverview />
      <SelectedWork />
      <Difference />
      <Process />
      <Engagements />
      <Philosophy />
      <FaqList items={faqs} />
      <ClosingCta />
    </>
  );
}
