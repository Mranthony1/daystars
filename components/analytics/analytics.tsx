import Script from "next/script";
import { TrackClicks } from "@/components/analytics/track-clicks";
import { isAnalyticsEnabled } from "@/lib/site-config";

export function Analytics() {
  if (!isAnalyticsEnabled()) return null;
  const domain = process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN?.trim();
  if (!domain) return null;

  return (
    <>
      <Script
        defer
        src="https://plausible.io/js/script.js"
        data-domain={domain}
        strategy="afterInteractive"
      />
      <TrackClicks />
    </>
  );
}
