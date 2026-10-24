type Plausible = (
  event: string,
  options?: { props?: Record<string, string> },
) => void;

const allowedProps = new Set(["page"]);

export function track(event: string, props?: Record<string, string>) {
  if (process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER !== "plausible") return;
  if (typeof window === "undefined") return;

  const plausible = (window as Window & { plausible?: Plausible }).plausible;
  if (!plausible) return;

  const safe: Record<string, string> = {};
  if (props) {
    for (const [key, value] of Object.entries(props)) {
      if (allowedProps.has(key)) safe[key] = value.slice(0, 80);
    }
  }

  plausible(event, Object.keys(safe).length ? { props: safe } : undefined);
}
