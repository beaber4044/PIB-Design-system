## Setup

No provider or wrapper is required — components read all styling from CSS custom properties and Tailwind utility classes, not React context. Just import and render:

```tsx
import { Button, Card, CardTitle, CardDescription, Badge } from 'design-system'
```

All styling ships via `styles.css` (imports the compiled component + token stylesheet) — nothing else to wire up. Every component accepts a `className` prop that merges onto its root element via `clsx`, so one-off layout tweaks compose naturally with the utility vocabulary below.

## Styling idiom: Tailwind v4 utility classes + CSS custom-property tokens

This design system is built with Tailwind v4. Its components use utility classes internally, and those SAME compiled utility classes ship in the stylesheet — use them directly for your own layout glue (spacing between components, custom containers) so hand-written markup matches the DS's visual language instead of introducing ad-hoc inline styles.

**Color tokens** (`--color-*`, also available as Tailwind utilities like `bg-brand-500`, `text-neutral-700`, `border-neutral-200`):
- `brand-{50…900}` — brand green, `500` = `#03c75a` (primary action color)
- `neutral-{0,50…950}` — grayscale, `0` = white/near-black in dark mode, `900`/`950` = near-black
- `success-{50,500,700}`, `warning-{50,500,700}`, `danger-{50,500,700}`, `info-{50,500,700}` — semantic status colors

**Type scale** (`text-xs` … `text-4xl`, each with a matched line-height token) and weight (`font-medium`, `font-semibold`, `font-bold`).

**Radius**: `rounded-sm|md|lg|full` (maps to `--radius-*`, most components use `md` or `lg`). An `xl` step is defined as a token but no shipped component currently uses it as a utility class.

**Shadow**: `shadow-sm|md|lg` (maps to `--shadow-*`, used for elevated surfaces like Card/Modal/Toast).

**Spacing**: standard Tailwind spacing scale (`p-*`, `gap-*`, `mt-*`, …), base unit `--spacing: .25rem`.

Dark mode is automatic via `prefers-color-scheme` — `neutral-0`/`neutral-50` invert; don't hand-write dark-mode overrides for these tokens.

## Where the truth lives

- `styles.css` — the stylesheet to read for the authoritative, currently-shipped set of utility classes and token values (it `@import`s the compiled `_ds_bundle.css`, which has every class actually used by the components plus the full Tailwind utility set generated at build time).
- `tokens/app.tokens.json` / `tokens/web.tokens.json` — the same color/spacing/type scale expressed as raw design tokens (W3C token format), useful for cross-referencing exact values without parsing CSS.
- Each component's own `.prompt.md` — usage reference and prop shape for that specific component.

## Example composition

A realistic product card built from real DS components, with Tailwind utilities for the surrounding layout:

```tsx
import { Card, CardTitle, CardDescription, Badge, Button } from 'design-system'

function MembershipPromo() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <Card style={{ maxWidth: 360 }}>
        <div className="flex items-center justify-between">
          <CardTitle>멤버십 혜택</CardTitle>
          <Badge tone="brand">Pro</Badge>
        </div>
        <CardDescription>
          매달 무료배송 쿠폰과 적립금 2배 혜택을 받아보세요.
        </CardDescription>
        <div className="mt-4 flex gap-2">
          <Button size="sm">지금 가입하기</Button>
          <Button size="sm" variant="ghost">더 알아보기</Button>
        </div>
      </Card>
    </div>
  )
}
```

Compose app-chrome components (`AppBar`, `Header`, `AppMainHeader`, `BottomNavigation`) inside a fixed-width mobile container (e.g. `375px`) — they're designed as full-bleed bars for a phone-width viewport, not arbitrary-width page headers.
