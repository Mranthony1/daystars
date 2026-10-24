import { safeEmail, safeHttpUrl, safePhone } from "@/lib/utils";

function siteUrl() {
  const fallback = "http://localhost:3000";
  const raw = process.env.NEXT_PUBLIC_SITE_URL || fallback;
  try {
    const url = new URL(raw);
    if (url.protocol === "http:" || url.protocol === "https:") {
      return url.origin;
    }
  } catch {
    return fallback;
  }
  return fallback;
}

const social = {
  instagram: safeHttpUrl(process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM),
  linkedin: safeHttpUrl(process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN),
  x: safeHttpUrl(process.env.NEXT_PUBLIC_SOCIAL_X),
  facebook: safeHttpUrl(process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK),
};

export const siteConfig = {
  name: "DAYSTARS",
  tagline: "Creative Thinking. Digital Precision. Meaningful Growth.",
  campaignHeadline: "Make Your Brand Impossible to Ignore.",
  statement:
    "We turn ambitious ideas into distinctive brands, powerful digital experiences, and marketing that moves businesses forward.",
  description:
    "DAYSTARS is a creative growth agency combining strategy, design, websites, and digital marketing to help ambitious businesses stand out and grow.",
  url: siteUrl(),
  locale: "en",
  contentUpdated: "2026-10-24",
  currency: process.env.NEXT_PUBLIC_CURRENCY?.trim() || "GHS",
  markets: ["Ghana", "International"],
  contact: {
    email: safeEmail(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
    phone: safePhone(process.env.NEXT_PUBLIC_CONTACT_PHONE),
    whatsapp: safePhone(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER),
    address: process.env.NEXT_PUBLIC_CONTACT_ADDRESS?.trim() || "",
  },
  social,
  schedulingUrl: safeHttpUrl(process.env.NEXT_PUBLIC_SCHEDULING_URL),
  whatsappMessage:
    "Hello DAYSTARS, I would like to talk about a project.",
} as const;

export const socialLinks = [
  { label: "Instagram", href: siteConfig.social.instagram },
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "X", href: siteConfig.social.x },
  { label: "Facebook", href: siteConfig.social.facebook },
].filter((item) => item.href);

export function isAnalyticsEnabled() {
  return (
    process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER === "plausible" &&
    Boolean(process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN?.trim())
  );
}
