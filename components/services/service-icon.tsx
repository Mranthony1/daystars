import {
  Megaphone,
  MessagesSquare,
  Monitor,
  Search,
  Shapes,
} from "lucide-react";
import type { ServiceIcon } from "@/lib/services";

const icons = {
  search: Search,
  social: MessagesSquare,
  paid: Megaphone,
  brand: Shapes,
  web: Monitor,
} as const;

export function ServiceIconMark({
  icon,
  className = "h-5 w-5",
}: {
  icon: ServiceIcon;
  className?: string;
}) {
  const Icon = icons[icon];
  return <Icon aria-hidden className={className} />;
}
