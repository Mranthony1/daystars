import {
  budgetOptions,
  contactMethodOptions,
  engagementOptions,
  serviceOptions,
  timelineOptions,
} from "@/lib/form-options";

const groups = {
  service: serviceOptions,
  engagement: engagementOptions,
  budget: budgetOptions,
  timeline: timelineOptions,
  contactMethod: contactMethodOptions,
} as const;

export function labelFor(
  group: keyof typeof groups,
  value: string,
) {
  const match = groups[group].find((option) => option.value === value);
  return match?.label ?? "";
}
