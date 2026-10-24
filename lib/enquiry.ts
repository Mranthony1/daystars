import "server-only";
import type { EnquiryInput } from "@/lib/validation";
import { labelFor } from "@/lib/enquiry-labels";

export function isEnquiryDeliveryConfigured() {
  return Boolean(
    process.env.RESEND_API_KEY &&
      process.env.CONTACT_TO_EMAIL &&
      process.env.CONTACT_FROM_EMAIL,
  );
}

function line(label: string, value: string) {
  return value.trim() ? `${label}: ${value.trim()}` : "";
}

export async function deliverEnquiry(input: EnquiryInput) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    throw new Error("Enquiry delivery is not configured.");
  }

  const text = [
    "New project enquiry from the DAYSTARS website.",
    "",
    line("Name", input.fullName),
    line("Email", input.email),
    line("Company", input.company),
    line("Website", input.website),
    line("Service", labelFor("service", input.service)),
    line("Engagement", labelFor("engagement", input.engagement)),
    line("Budget direction", labelFor("budget", input.budget)),
    line("Timeline", labelFor("timeline", input.timeline)),
    line("Preferred contact", labelFor("contactMethod", input.contactMethod)),
    "",
    "Project",
    input.description,
  ]
    .filter(Boolean)
    .join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: input.email,
      subject: `Project enquiry — ${input.fullName}`,
      text,
    }),
  });

  if (!response.ok) {
    throw new Error("Email delivery failed.");
  }
}
