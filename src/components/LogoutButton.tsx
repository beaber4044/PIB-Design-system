import type { ButtonHTMLAttributes } from "react";
import { cn } from "../lib/cn";
import { Icon } from "./Icon";

export interface LogoutButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "text" | "box";
}

export function LogoutButton({
  variant = "text",
  className,
  children,
  ...props
}: LogoutButtonProps) {
  if (variant === "box") {
    return (
      <button
        type="button"
        className={cn(
          "inline-flex items-center justify-center gap-2 h-10 px-4 rounded-md border border-neutral-300 text-sm font-medium text-neutral-700 transition-colors",
          "hover:border-danger-300 hover:bg-danger-50 hover:text-danger-600",
          className
        )}
        {...props}
      >
        {children ?? "로그아웃"}
      </button>
    );
  }

  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center gap-1.5 text-sm text-neutral-600 transition-colors hover:text-danger-500",
        className
      )}
      {...props}
    >
      <Icon name="logout" size={16} />
      {children ?? "로그아웃"}
    </button>
  );
}
