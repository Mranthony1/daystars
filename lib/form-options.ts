export const serviceOptions = [
  { value: "seo", label: "SEO and Organic Growth" },
  { value: "social", label: "Social Media Marketing" },
  { value: "paid", label: "Paid Advertising" },
  { value: "branding", label: "Branding and Creative" },
  { value: "web", label: "Web Design and Development" },
  { value: "multiple", label: "Multiple Services" },
  { value: "unsure", label: "Not Sure Yet" },
] as const;

export const serviceValues = serviceOptions.map((option) => option.value) as [
  (typeof serviceOptions)[number]["value"],
  ...(typeof serviceOptions)[number]["value"][],
];

export const budgetOptions = [
  { value: "discuss", label: "Prefer to discuss" },
  { value: "focused", label: "A focused project" },
  { value: "ongoing", label: "An ongoing engagement" },
  { value: "partnership", label: "A broader partnership" },
] as const;

export const budgetValues = budgetOptions.map((option) => option.value) as [
  (typeof budgetOptions)[number]["value"],
  ...(typeof budgetOptions)[number]["value"][],
];

export const timelineOptions = [
  { value: "soon", label: "As soon as the scope is clear" },
  { value: "quarter", label: "Within the next few months" },
  { value: "flexible", label: "Flexible" },
  { value: "unsure", label: "Not sure yet" },
] as const;

export const timelineValues = timelineOptions.map((option) => option.value) as [
  (typeof timelineOptions)[number]["value"],
  ...(typeof timelineOptions)[number]["value"][],
];

export const contactMethodOptions = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "none", label: "No preference" },
] as const;

export const contactMethodValues = contactMethodOptions.map(
  (option) => option.value,
) as [
  (typeof contactMethodOptions)[number]["value"],
  ...(typeof contactMethodOptions)[number]["value"][],
];

export const engagementOptions = [
  { value: "foundation", label: "Foundation" },
  { value: "growth", label: "Growth" },
  { value: "acceleration", label: "Acceleration" },
] as const;

export const engagementValues = engagementOptions.map((option) => option.value) as [
  (typeof engagementOptions)[number]["value"],
  ...(typeof engagementOptions)[number]["value"][],
];

export function isServiceValue(value: string) {
  return serviceOptions.some((option) => option.value === value);
}

export function isEngagementValue(value: string) {
  return engagementOptions.some((option) => option.value === value);
}
