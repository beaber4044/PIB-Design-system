import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";
import { Icon } from "./Icon";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items, className, ...props }: BreadcrumbProps) {
  return (
    <nav
      aria-label="breadcrumb"
      className={cn("flex items-center gap-1.5 text-xs text-neutral-500", className)}
      {...props}
    >
      {items.map((item, i) => {
        const last = i === items.length - 1;
        return (
          <span key={item.label} className="flex items-center gap-1.5">
            {item.href && !last ? (
              <a href={item.href} className="hover:text-neutral-900">
                {item.label}
              </a>
            ) : (
              <span className={last ? "text-neutral-900 font-medium" : undefined}>
                {item.label}
              </span>
            )}
            {!last && <Icon name="chevronRight" size={12} className="text-neutral-300" />}
          </span>
        );
      })}
    </nav>
  );
}
