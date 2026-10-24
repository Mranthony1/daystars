export type EngagementPackage = {
  id: "foundation" | "growth" | "acceleration";
  name: string;
  audience: string;
  description: string;
  services: string[];
  engagement: string;
  priceLabel: string;
};

export const packages: EngagementPackage[] = [
  {
    id: "foundation",
    name: "Foundation",
    audience: "Businesses establishing a clear and professional digital presence.",
    description:
      "A defined project to clarify the offer and put a credible brand or website into the market.",
    services: [
      "Positioning and messaging",
      "Identity, or a focused refinement of one",
      "A marketing website",
    ],
    engagement: "One-time project",
    priceLabel: "Request a proposal",
  },
  {
    id: "growth",
    name: "Growth",
    audience:
      "Businesses developing consistent marketing and a steadier flow of enquiries.",
    description:
      "An ongoing engagement that keeps search, social, or paid activity tied to a clear offer.",
    services: [
      "Monthly marketing direction",
      "Content or campaign production",
      "Reporting on the actions that matter",
    ],
    engagement: "Monthly retainer",
    priceLabel: "Request a proposal",
  },
  {
    id: "acceleration",
    name: "Acceleration",
    audience:
      "Businesses that want brand, website, and marketing moving as one system.",
    description:
      "A broader partnership across creative and acquisition, for companies ready to coordinate the work.",
    services: [
      "Brand and website evolution",
      "Organic and paid growth activity",
      "Shared priorities and a regular review",
    ],
    engagement: "Integrated partnership",
    priceLabel: "Request a proposal",
  },
];
