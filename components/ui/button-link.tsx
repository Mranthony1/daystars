import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = {
  lime: "btn-lime bg-lime text-ink hover:bg-paper",
  ink: "bg-ink text-paper hover:bg-ink-2",
  ghost: "border border-stone/35 text-paper hover:border-lime hover:text-lime",
  "ghost-ink": "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-paper",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "lime",
  className,
  track,
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  track?: string;
}) {
  return (
    <Link
      href={href}
      data-track={track}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 px-5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] transition-colors",
        variants[variant],
        className,
      )}
    >
      {children}
      <ArrowUpRight aria-hidden className="h-4 w-4" />
    </Link>
  );
}
