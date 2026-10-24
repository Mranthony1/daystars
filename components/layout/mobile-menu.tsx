"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { isActivePath, navItems } from "@/lib/navigation";

export function MobileMenu({
  open,
  pathname,
  onClose,
}: {
  open: boolean;
  pathname: string;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const frame = window.requestAnimationFrame(() => closeRef.current?.focus());
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(frame);
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <div
      ref={dialogRef}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      inert={!open}
      className={`fixed inset-0 z-[60] flex flex-col bg-ink text-paper ${
        open ? "visible" : "invisible pointer-events-none"
      }`}
    >
      <div className="flex h-16 items-center justify-between px-5 md:h-20 md:px-8">
        <Logo />
        <button
          ref={closeRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-stone/30"
          onClick={onClose}
        >
          <span className="sr-only">Close menu</span>
          <X aria-hidden className="h-5 w-5" />
        </button>
      </div>
      <nav className="flex flex-1 flex-col justify-center gap-2 px-5" aria-label="Mobile">
        {navItems.map((item) => {
          const active = isActivePath(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              onClick={onClose}
              className="font-display text-5xl leading-none tracking-[-0.04em] text-paper hover:text-lime"
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="px-5 pb-8">
        <Link
          href="/contact"
          data-track="cta_project"
          onClick={onClose}
          className="btn-lime inline-flex min-h-12 w-full items-center justify-center bg-lime px-5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink"
        >
          Start a Project
        </Link>
      </div>
    </div>
  );
}
