import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { Suspense } from "react";
import { Analytics } from "@/components/analytics/analytics";
import { Footer } from "@/components/layout/footer";
import { Navbar, NavbarFallback } from "@/components/layout/navbar";
import { siteConfig, socialLinks } from "@/lib/site-config";
import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "DAYSTARS — Creative Thinking. Digital Precision. Meaningful Growth.",
    template: "%s — DAYSTARS",
  },
  description: siteConfig.description,
  applicationName: "DAYSTARS",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "DAYSTARS",
    locale: "en",
    title: "DAYSTARS — Creative Thinking. Digital Precision. Meaningful Growth.",
    description: siteConfig.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "DAYSTARS",
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#141512",
  width: "device-width",
  initialScale: 1,
};

const organization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "DAYSTARS",
  description: siteConfig.description,
  url: siteConfig.url,
  slogan: siteConfig.tagline,
  logo: `${siteConfig.url}/brand/mark.svg`,
  areaServed: siteConfig.markets,
  knowsAbout: [
    "SEO",
    "Social media marketing",
    "Paid advertising",
    "Branding",
    "Web design",
    "Web development",
  ],
  ...(siteConfig.contact.email ? { email: siteConfig.contact.email } : {}),
  ...(siteConfig.contact.phone ? { telephone: siteConfig.contact.phone } : {}),
  ...(socialLinks.length > 0 ? { sameAs: socialLinks.map((item) => item.href) } : {}),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${grotesk.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <Suspense fallback={<NavbarFallback />}>
          <Navbar />
        </Suspense>
        <main id="content">{children}</main>
        <Footer />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
      </body>
    </html>
  );
}
