"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="bg-ink px-5 py-36 text-paper md:py-48">
      <div className="mx-auto max-w-3xl">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-lime">
          Something failed
        </p>
        <h1 className="mt-4 font-display text-5xl tracking-tight">
          This page could not be loaded.
        </h1>
        <p className="mt-4 text-stone">
          Try again. If it keeps happening, use the contact page once you can.
        </p>
        <button
          type="button"
          onClick={reset}
          className="btn-lime mt-8 inline-flex min-h-12 items-center bg-lime px-5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink"
        >
          Try again
        </button>
      </div>
    </section>
  );
}
