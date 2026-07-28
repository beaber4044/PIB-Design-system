import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";
import { Icon } from "./Icon";

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  title?: string;
  footer?: ReactNode;
}

export function Modal({
  open,
  onClose,
  title,
  footer,
  className,
  children,
  ...props
}: ModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/40 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "w-full max-w-sm rounded-lg bg-neutral-0 shadow-lg p-6",
          className
        )}
        {...props}
      >
        <div className="flex items-start justify-between mb-4">
          {title && (
            <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="닫기"
            className="ml-auto text-neutral-400 hover:text-neutral-700"
          >
            <Icon name="close" size={18} />
          </button>
        </div>

        <div className="text-sm text-neutral-600">{children}</div>

        {footer && (
          <div className="flex justify-end gap-2 mt-6">{footer}</div>
        )}
      </div>
    </div>
  );
}
