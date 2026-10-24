"use client";

import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { isActivePath, navItems } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function NavbarFallback() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink">
      <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between px-5 md:h-20 md:px-8 lg:px-12">
        <Logo />
      </div>
    </header>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const close = useCallback(() => {
    setOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink">
      <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between px-5 md:h-20 md:px-8 lg:px-12">
        <Link href="/" aria-label="DAYSTARS home" onClick={close}>
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "border-b text-[0.75rem] font-semibold uppercase tracking-[0.16em]",
                  active
                    ? "border-lime text-lime"
                    : "border-transparent text-stone hover:text-paper",
                )}
              >
                {item.label}
                {active ? <span className="sr-only">, current page</span> : null}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            data-track="cta_project"
            className="btn-lime hidden min-h-11 items-center bg-lime px-4 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink lg:inline-flex"
          >
            Start a Project
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-stone/30 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <Menu aria-hidden className="h-5 w-5" />
          </button>
        </div>
      </div>
      <MobileMenu open={open} pathname={pathname} onClose={close} />
    </header>
  );
}
