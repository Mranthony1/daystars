"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

export function ViewEvent({ name, page }: { name: string; page: string }) {
  useEffect(() => {
    track(name, { page });
  }, [name, page]);

  return null;
}
