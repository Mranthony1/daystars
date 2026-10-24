import { connection } from "next/server";
import { Suspense } from "react";

async function Year() {
  await connection();
  return new Date().getFullYear();
}

export function CopyrightYear() {
  return (
    <Suspense fallback={2026}>
      <Year />
    </Suspense>
  );
}
