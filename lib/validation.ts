import { z } from "zod";
import {
  budgetValues,
  contactMethodValues,
  engagementValues,
  serviceValues,
  timelineValues,
} from "@/lib/form-options";

const optionalChoice = <T extends string>(values: readonly T[], message: string) =>
  z.union([z.literal(""), z.enum(values, message)]);

export const enquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Enter your full name.")
    .max(80, "Use 80 characters or fewer."),
  email: z
    .string()
    .trim()
    .max(200, "That email is too long.")
    .pipe(z.email("Enter a valid email address.")),
  company: z.string().trim().max(120, "Use 120 characters or fewer."),
  website: z
    .string()
    .trim()
    .max(300, "That URL is too long.")
    .refine(
      (value) => value.length === 0 || z.url().safeParse(value).success,
      "Enter a full URL starting with https://",
    ),
  service: z.enum(serviceValues, "Choose a service."),
  engagement: optionalChoice(engagementValues, "Choose an engagement."),
  budget: optionalChoice(budgetValues, "Choose a budget direction."),
  timeline: optionalChoice(timelineValues, "Choose a timeline."),
  contactMethod: optionalChoice(contactMethodValues, "Choose a contact method."),
  description: z
    .string()
    .trim()
    .min(12, "Tell us a little more — a sentence is enough.")
    .max(4000, "Keep the description under 4,000 characters."),
  consent: z.literal(
    true,
    "Please confirm we may use these details to respond.",
  ),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export function fieldErrorsFromSchema(error: z.ZodError) {
  const errors: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    if (typeof key === "string" && !errors[key]) {
      errors[key] = issue.message;
    }
  }
  return errors;
}
