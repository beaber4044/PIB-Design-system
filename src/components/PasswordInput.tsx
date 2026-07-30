import { useState, type InputHTMLAttributes } from "react";
import { cn } from "../lib/cn";
import { Icon } from "./Icon";

export interface PasswordInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  error?: boolean;
}

export function PasswordInput({
  error,
  className,
  disabled,
  ...props
}: PasswordInputProps) {
  const [visible, setVisible] = useState(false);

  return (
    <span className="relative inline-block w-full">
      <input
        type={visible ? "text" : "password"}
        disabled={disabled}
        className={cn(
          "h-10 w-full rounded-md border bg-neutral-0 pl-3 pr-10 text-sm text-neutral-900",
          "placeholder:text-neutral-400 transition-colors",
          "focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-brand-500",
          "disabled:opacity-50 disabled:pointer-events-none",
          error
            ? "border-danger-500 focus:outline-danger-500"
            : "border-neutral-300",
          className
        )}
        {...props}
      />
      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        disabled={disabled}
        aria-label={visible ? "비밀번호 숨기기" : "비밀번호 표시"}
        tabIndex={-1}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 disabled:pointer-events-none"
      >
        <Icon name={visible ? "eyeOff" : "eye"} size={17} />
      </button>
    </span>
  );
}
