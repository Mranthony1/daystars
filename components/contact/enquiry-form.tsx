"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  budgetOptions,
  contactMethodOptions,
  engagementOptions,
  serviceOptions,
  timelineOptions,
} from "@/lib/form-options";
import { track } from "@/lib/analytics";
import { enquirySchema, fieldErrorsFromSchema } from "@/lib/validation";

type FormState = {
  fullName: string;
  email: string;
  company: string;
  website: string;
  service: string;
  engagement: string;
  budget: string;
  timeline: string;
  contactMethod: string;
  description: string;
  consent: boolean;
  companyFax: string;
};

const emptyErrors: Record<string, string> = {};

export function EnquiryForm({
  deliveryConfigured,
  initialService,
  initialEngagement,
}: {
  deliveryConfigured: boolean;
  initialService: string;
  initialEngagement: string;
}) {
  const [values, setValues] = useState<FormState>({
    fullName: "",
    email: "",
    company: "",
    website: "",
    service: initialService,
    engagement: initialEngagement,
    budget: "",
    timeline: "",
    contactMethod: "",
    description: "",
    consent: false,
    companyFax: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>(emptyErrors);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const started = useRef(false);
  const lock = useRef(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key]) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
  }

  function noteStart() {
    if (started.current) return;
    started.current = true;
    track("contact_form_start");
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (lock.current) return;

    const parsed = enquirySchema.safeParse({
      fullName: values.fullName,
      email: values.email,
      company: values.company,
      website: values.website,
      service: values.service,
      engagement: values.engagement,
      budget: values.budget,
      timeline: values.timeline,
      contactMethod: values.contactMethod,
      description: values.description,
      consent: values.consent,
    });

    if (!parsed.success) {
      setStatus("error");
      setMessage("Please check the highlighted fields.");
      setErrors(fieldErrorsFromSchema(parsed.error));
      return;
    }

    if (values.companyFax.trim()) {
      setStatus("error");
      setMessage("We couldn't submit that enquiry. Please try again.");
      return;
    }

    lock.current = true;
    setStatus("submitting");
    setMessage("");
    setErrors(emptyErrors);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...parsed.data, companyFax: values.companyFax }),
      });
      const payload = (await response.json()) as {
        ok?: boolean;
        message?: string;
        fieldErrors?: Record<string, string>;
      };

      if (response.ok && payload.ok) {
        setStatus("success");
        setMessage("Your enquiry was delivered. The studio can reply to the email you provided.");
        track("contact_form_success");
        return;
      }

      setStatus("error");
      setMessage(payload.message || "We couldn't send your enquiry.");
      if (payload.fieldErrors) setErrors(payload.fieldErrors);
    } catch {
      setStatus("error");
      setMessage("The enquiry could not be sent. Check your connection and try again.");
    } finally {
      lock.current = false;
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="border border-ink/15 bg-paper p-8 text-ink">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-mute">
          Enquiry delivered
        </p>
        <h2 className="mt-3 font-display text-4xl tracking-tight">Thank you. It’s with the studio.</h2>
        <p className="mt-4 max-w-xl leading-relaxed text-mute">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5" aria-describedby="form-status">
      {!deliveryConfigured ? (
        <p className="border border-ink/15 bg-ink/[0.03] px-4 py-3 text-sm leading-relaxed text-mute">
          Email delivery is not configured yet, so this form cannot send an
          enquiry. You can still review the fields. A submission will not be
          stored or delivered until the studio connects an inbox.
        </p>
      ) : null}

      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="companyFax">Fax</label>
        <input
          id="companyFax"
          name="companyFax"
          tabIndex={-1}
          autoComplete="off"
          value={values.companyFax}
          onChange={(event) => update("companyFax", event.target.value)}
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field
          id="fullName"
          label="Full name"
          required
          value={values.fullName}
          error={errors.fullName}
          onFocus={noteStart}
          onChange={(value) => update("fullName", value)}
        />
        <Field
          id="email"
          label="Email"
          type="email"
          required
          autoComplete="email"
          value={values.email}
          error={errors.email}
          onFocus={noteStart}
          onChange={(value) => update("email", value)}
        />
        <Field
          id="company"
          label="Company or brand"
          value={values.company}
          error={errors.company}
          onFocus={noteStart}
          onChange={(value) => update("company", value)}
        />
        <Field
          id="website"
          label="Website"
          type="url"
          placeholder="https://"
          value={values.website}
          error={errors.website}
          onFocus={noteStart}
          onChange={(value) => update("website", value)}
        />
      </div>

      <SelectField
        id="service"
        label="Service of interest"
        required
        value={values.service}
        error={errors.service}
        onFocus={noteStart}
        onChange={(value) => update("service", value)}
        options={serviceOptions}
        placeholder="Select a service"
      />
      <div className="grid gap-5 md:grid-cols-2">
        <SelectField
          id="engagement"
          label="Engagement"
          value={values.engagement}
          error={errors.engagement}
          onFocus={noteStart}
          onChange={(value) => update("engagement", value)}
          options={engagementOptions}
          placeholder="Optional"
        />
        <SelectField
          id="budget"
          label="Estimated budget"
          value={values.budget}
          error={errors.budget}
          onFocus={noteStart}
          onChange={(value) => update("budget", value)}
          options={budgetOptions}
          placeholder="Optional"
        />
        <SelectField
          id="timeline"
          label="Project timeline"
          value={values.timeline}
          error={errors.timeline}
          onFocus={noteStart}
          onChange={(value) => update("timeline", value)}
          options={timelineOptions}
          placeholder="Optional"
        />
        <SelectField
          id="contactMethod"
          label="Preferred contact method"
          value={values.contactMethod}
          error={errors.contactMethod}
          onFocus={noteStart}
          onChange={(value) => update("contactMethod", value)}
          options={contactMethodOptions}
          placeholder="Optional"
        />
      </div>
      <p className="text-sm text-mute">
        Approved budget ranges have not been published. These choices describe
        the kind of engagement, not a price.
      </p>

      <div>
        <label htmlFor="description" className="text-sm font-semibold">
          Project description <span className="text-mute">(required)</span>
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={6}
          value={values.description}
          aria-invalid={errors.description ? true : undefined}
          aria-describedby={errors.description ? "description-error" : undefined}
          onFocus={noteStart}
          onChange={(event) => update("description", event.target.value)}
          className="mt-2 w-full border border-ink/20 bg-transparent px-3 py-3 text-base text-ink outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        />
        {errors.description ? <FieldError id="description-error" message={errors.description} /> : null}
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm leading-relaxed" htmlFor="consent">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            checked={values.consent}
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? "consent-error" : "consent-note"}
            onFocus={noteStart}
            onChange={(event) => update("consent", event.target.checked)}
            className="mt-1 h-4 w-4 accent-ink"
          />
          <span id="consent-note">
            I agree that DAYSTARS may use this information to respond to my enquiry.
            Read the <Link href="/privacy" className="underline">privacy draft</Link>.
          </span>
        </label>
        {errors.consent ? <FieldError id="consent-error" message={errors.consent} /> : null}
      </div>

      <div id="form-status" role="status" aria-live="polite">
        {message && status === "error" ? (
          <p className="text-sm font-medium text-ink">{message}</p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        aria-busy={status === "submitting"}
        className="inline-flex min-h-12 items-center justify-center bg-ink px-6 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-paper disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  required,
  type = "text",
  autoComplete,
  placeholder,
  onFocus,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  onFocus?: () => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold">
        {label} {required ? <span className="text-mute">(required)</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onFocus={onFocus}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 min-h-12 w-full border border-ink/20 bg-transparent px-3 text-base text-ink outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
      />
      {error ? <FieldError id={`${id}-error`} message={error} /> : null}
    </div>
  );
}

function SelectField({
  id,
  label,
  value,
  onChange,
  error,
  required,
  options,
  placeholder,
  onFocus,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  options: readonly { value: string; label: string }[];
  placeholder: string;
  onFocus?: () => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold">
        {label} {required ? <span className="text-mute">(required)</span> : null}
      </label>
      <select
        id={id}
        name={id}
        required={required}
        value={value}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onFocus={onFocus}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 min-h-12 w-full border border-ink/20 bg-paper px-3 text-base text-ink outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? <FieldError id={`${id}-error`} message={error} /> : null}
    </div>
  );
}

function FieldError({ id, message }: { id: string; message: string }) {
  return (
    <p id={id} className="mt-2 text-sm font-medium text-ink">
      Error: {message}
    </p>
  );
}
