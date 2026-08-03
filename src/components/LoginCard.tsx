import type { FormEvent, ReactNode } from "react";
import { cn } from "../lib/cn";
import { Button } from "./Button";
import { Input } from "./Input";
import { PasswordInput } from "./PasswordInput";

export interface LoginCardProps {
  logo?: ReactNode;
  title: string;
  idLabel?: string;
  idPlaceholder?: string;
  pwLabel?: string;
  pwPlaceholder?: string;
  submitLabel?: string;
  hint?: ReactNode;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  /** Fill the viewport (the real login-page usage). Set false to embed the card in a normal-flow container instead. */
  fullScreen?: boolean;
  className?: string;
}

/**
 * Full login screen composition — logo/title, ID + password fields, and a
 * full-width primary submit button. Use this instead of hand-assembling
 * Input/PasswordInput/Button for a login form: a bare `<Button>` defaults to
 * its inline width, not the full-bleed shape a login button needs.
 */
export function LoginCard({
  logo,
  title,
  idLabel = "ID",
  idPlaceholder = "아이디를 입력하세요",
  pwLabel = "PW",
  pwPlaceholder = "비밀번호를 입력하세요",
  submitLabel = "로그인",
  hint,
  onSubmit,
  fullScreen = true,
  className,
}: LoginCardProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-neutral-50 p-6",
        fullScreen ? "min-h-screen" : "h-full",
        className
      )}
    >
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm rounded-xl border border-neutral-200 bg-neutral-0 p-8 shadow-sm"
      >
        <div className="mb-8 flex items-center gap-2.5">
          {logo ?? <span className="h-9 w-9 shrink-0 rounded-lg bg-brand-500" />}
          <span className="text-lg font-bold text-neutral-900">{title}</span>
        </div>

        <div className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-neutral-700">{idLabel}</label>
            <Input placeholder={idPlaceholder} className="w-full" />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-neutral-700">{pwLabel}</label>
            <PasswordInput placeholder={pwPlaceholder} />
          </div>
        </div>

        <Button type="submit" className="mt-6 w-full">
          {submitLabel}
        </Button>

        {hint && <p className="mt-4 text-center text-xs text-neutral-400">{hint}</p>}
      </form>
    </div>
  );
}
