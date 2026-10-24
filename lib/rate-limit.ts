const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

type Bucket = { count: number; reset: number };

const buckets = new Map<string, Bucket>();

export function consumeRateLimit(key: string) {
  const now = Date.now();
  for (const [storedKey, bucket] of buckets) {
    if (bucket.reset < now) buckets.delete(storedKey);
  }

  const current = buckets.get(key);
  if (!current) {
    buckets.set(key, { count: 1, reset: now + WINDOW_MS });
    return true;
  }

  if (current.count >= MAX_REQUESTS) return false;
  current.count += 1;
  return true;
}
