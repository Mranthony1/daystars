import { cn } from "@/lib/utils";

export function Mark({
  className,
  accent = true,
  title,
}: {
  className?: string;
  accent?: boolean;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("h-8 w-8", className)}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      fill="none"
    >
      {title ? <title>{title}</title> : null}
      <path
        fill="currentColor"
        d="M5 4.5h4.2v23H5v-23Zm0 0h16.4v4.2H5V4.5Zm0 18.8h16.4v4.2H5v-4.2Z"
      />
      <path
        fill={accent ? "#D7FF64" : "currentColor"}
        d="m16.1 8.4 10.2 7.8-2.7 3.4L13.4 11.8l2.7-3.4Z"
      />
    </svg>
  );
}

export function Logo({
  className,
  tone = "paper",
  accent = true,
}: {
  className?: string;
  tone?: "paper" | "ink";
  accent?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Mark
        accent={accent}
        className={cn("h-7 w-7", tone === "paper" ? "text-paper" : "text-ink")}
      />
      <span
        className={cn(
          "font-display text-[0.95rem] font-semibold tracking-[0.18em]",
          tone === "paper" ? "text-paper" : "text-ink",
        )}
      >
        DAYSTARS
      </span>
    </span>
  );
}
