import { type LucideIcon } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface HeaderLinkProps {
  Icon: LucideIcon;
  hiddenOnMobile?: boolean;
  title: string;
  superText?: string;
  href: string;
}

export const HeaderLink = ({
  Icon,
  hiddenOnMobile,
  title,
  superText,
  href,
}: HeaderLinkProps) => {
  return (
    <Link
      href={href}
      prefetch={false}
      className={cn(
        "focus:bg-walmart-dark items-center gap-x-2 rounded-full px-4 py-2 text-sm font-bold text-white outline-none transition focus:ring-1 focus:ring-white",
        hiddenOnMobile ? "hidden xl:flex" : "flex",
      )}
    >
      <Icon size={20} />
      <div>
        {!!superText && <p className="text-xs font-extralight">{superText}</p>}
        <p>{title}</p>
      </div>
    </Link>
  );
};