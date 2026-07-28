import { useState } from "react";
import { cn } from "../lib/cn";
import { Icon } from "./Icon";

export interface AccordionItemData {
  value: string;
  title: string;
  content: string;
}

export interface AccordionProps {
  items: AccordionItemData[];
  defaultOpen?: string;
  className?: string;
}

export function Accordion({ items, defaultOpen, className }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen ?? "");

  return (
    <div className={cn("divide-y divide-neutral-200 border-y border-neutral-200", className)}>
      {items.map((item) => {
        const expanded = open === item.value;
        return (
          <div key={item.value}>
            <button
              type="button"
              onClick={() => setOpen(expanded ? "" : item.value)}
              aria-expanded={expanded}
              className="flex w-full items-center justify-between py-3.5 text-left text-sm font-medium text-neutral-900"
            >
              {item.title}
              <Icon
                name="chevronDown"
                size={16}
                className={cn(
                  "text-neutral-400 transition-transform",
                  expanded && "rotate-180"
                )}
              />
            </button>
            {expanded && (
              <p className="pb-4 text-sm text-neutral-600 leading-relaxed">
                {item.content}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
