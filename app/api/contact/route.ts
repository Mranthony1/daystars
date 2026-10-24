import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { deliverEnquiry, isEnquiryDeliveryConfigured } from "@/lib/enquiry";
import { consumeRateLimit } from "@/lib/rate-limit";
import { enquirySchema, fieldErrorsFromSchema } from "@/lib/validation";

export async function POST(request: Request) {
  const headerList = await headers();
  const length = Number(headerList.get("content-length") ?? 0);
  if (length > 20_000) {
    return NextResponse.json(
      { ok: false, code: "too_large", message: "That enquiry is too large to send." },
      { status: 413 },
    );
  }

  const forwarded = headerList.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwarded || headerList.get("x-real-ip") || "unknown";
  if (!consumeRateLimit(ip)) {
    return NextResponse.json(
      {
        ok: false,
        code: "rate_limited",
        message: "Too many enquiries were sent from this network. Please wait and try again.",
      },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, code: "invalid", message: "The enquiry could not be read." },
      { status: 400 },
    );
  }

  if (
    body &&
    typeof body === "object" &&
    "companyFax" in body &&
    String((body as { companyFax?: unknown }).companyFax ?? "").trim().length > 0
  ) {
    return NextResponse.json(
      {
        ok: false,
        code: "rejected",
        message: "We couldn't submit that enquiry. Please try again.",
      },
      { status: 400 },
    );
  }

  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        code: "invalid",
        message: "Please check the highlighted fields.",
        fieldErrors: fieldErrorsFromSchema(parsed.error),
      },
      { status: 400 },
    );
  }

  if (!isEnquiryDeliveryConfigured()) {
    return NextResponse.json(
      {
        ok: false,
        code: "not_configured",
        message:
          "This enquiry was not sent. Email delivery is not configured, and the details were not stored.",
      },
      { status: 503 },
    );
  }

  try {
    await deliverEnquiry(parsed.data);
  } catch {
    return NextResponse.json(
      {
        ok: false,
        code: "delivery_failed",
        message: "The enquiry could not be delivered. Please try again shortly.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
