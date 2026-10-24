"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

export function TrackClicks() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>(
        "[data-track]",
      );
      const name = target?.dataset.track;
      if (!name) return;
      track(name);
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
