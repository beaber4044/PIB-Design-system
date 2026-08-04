import type { FormEvent, ReactNode } from "react";
import { cn } from "../lib/cn";
import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
import { Icon, type IconName } from "./Icon";
import { Input } from "./Input";
import { PasswordInput } from "./PasswordInput";

export interface LoginCardLink {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface LoginCardSecondaryAction {
  label: string;
  icon?: IconName;
  onClick?: () => void;
}

export interface LoginCardProps {
  logo?: ReactNode;
  title: string;
  idLabel?: string;
  idPlaceholder?: string;
  pwLabel?: string;
  pwPlaceholder?: string;
  submitLabel?: string;
  /** Checkbox label rendered above the submit row, e.g. "로그인 상태 유지". Omit to hide it. */
  rememberLabel?: string;
  /** An outline button next to the submit button — an alternate sign-in method (패스키, SSO, ...). */
  secondaryAction?: LoginCardSecondaryAction;
  /** Text links under the card, e.g. 아이디 찾기 / 비밀번호 찾기 / 회원가입. */
  footerLinks?: LoginCardLink[];
  hint?: ReactNode;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  /** Fill the viewport (the real login-page usage). Set false to embed the card in a normal-flow container instead. */
  fullScreen?: boolean;
  className?: string;
}

/**
 * Full login screen composition — big centered brand mark above the card,
 * ID + password fields, an optional "stay signed in" checkbox, and a
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
  rememberLabel,
  secondaryAction,
  footerLinks,
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
      <div className="flex w-full max-w-md flex-col items-center">
        <div className="mb-9 flex flex-col items-center gap-3">
          {logo ?? <span className="h-12 w-12 shrink-0 rounded-2xl bg-brand-500" />}
          <span className="text-xl font-extrabold text-neutral-900">{title}</span>
        </div>

        <form
          onSubmit={onSubmit}
          className="w-full rounded-xl border border-neutral-200 bg-neutral-0 p-8 shadow-sm"
        >
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

          {rememberLabel && (
            <Checkbox label={rememberLabel} className="mt-4" />
          )}

          <div className={cn("mt-6 flex gap-2", secondaryAction && "flex-col sm:flex-row")}>
            {secondaryAction && (
              <Button
                type="button"
                variant="outline"
                onClick={secondaryAction.onClick}
                className="flex-1"
              >
                {secondaryAction.icon && <Icon name={secondaryAction.icon} size={16} />}
                {secondaryAction.label}
              </Button>
            )}
            <Button type="submit" className="flex-1">
              {submitLabel}
            </Button>
          </div>

          {hint && <p className="mt-4 text-center text-xs text-neutral-400">{hint}</p>}
        </form>

        {footerLinks && footerLinks.length > 0 && (
          <div className="mt-6 flex items-center gap-3 text-xs text-neutral-400">
            {footerLinks.map((link, i) => (
              <span key={link.label} className="flex items-center gap-3">
                {i > 0 && <span className="text-neutral-200">|</span>}
                {link.href ? (
                  <a href={link.href} className="hover:text-neutral-600">
                    {link.label}
                  </a>
                ) : (
                  <button type="button" onClick={link.onClick} className="hover:text-neutral-600">
                    {link.label}
                  </button>
                )}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
