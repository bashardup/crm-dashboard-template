# DPDS Color System

All colors are defined in `src/index.css`. OKLCH color space throughout.

## Semantic Tokens

These are the tokens to use in components. They adapt to light/dark mode automatically.

| Token | Light value | Dark value | Use |
|---|---|---|---|
| `--background` | white | near-black | Page background |
| `--foreground` | near-black | near-white | Body text |
| `--card` | white | `oklch(0.205)` | Card surfaces |
| `--card-foreground` | near-black | near-white | Card text |
| `--primary` | `primary-500` | `primary-300` | Brand green, CTAs |
| `--primary-foreground` | `primary-100` | near-black | Text on primary bg |
| `--secondary` | `oklch(0.97)` | `oklch(0.269)` | Secondary surfaces |
| `--secondary-foreground` | near-black | near-white | Text on secondary |
| `--muted` | `oklch(0.97)` | `oklch(0.269)` | Subtle backgrounds |
| `--muted-foreground` | `oklch(0.556)` | `oklch(0.708)` | Placeholder/helper text |
| `--accent` | `oklch(0.97)` | `oklch(0.269)` | Hover states |
| `--destructive` | `error-50` | `error-900` | Error background |
| `--destructive-foreground` | `error-600` | `error-300` | Error text |
| `--warning` | `warning-50` | `warning-900` | Warning background |
| `--warning-foreground` | `warning-600` | `warning-300` | Warning text |
| `--border` | `oklch(0.922)` | white/10% | Borders |
| `--input` | `gray-100` | white/15% | Input borders |
| `--ring` | `oklch(0.708)` | `oklch(0.556)` | Focus rings |
| `--sidebar` | `gray-10` | — | Sidebar background |

## Brand Palette Families

Use these only when no semantic token fits. Prefer semantic tokens.

### Primary (DP Green) — hue ~158–170°
`primary-10` through `primary-900`
- Light UI: `primary-500` for active, `primary-100` for subtle tint
- Dark UI: `primary-300` for active, `primary-900` for subtle tint

### Secondary (Dark Teal) — hue ~170–180°
`secondary-10` through `secondary-900`
- Use for supporting/secondary brand elements

### Error (Red) — hue ~23–29°
`error-10` through `error-900`
- Mapped to `--destructive` and `--destructive-foreground`

### Warning (Amber) — hue ~62–87°
`warning-10` through `warning-900`
- Mapped to `--warning` and `--warning-foreground`

### Success (Green) — hue ~155–157°
`success-10` through `success-900`
- No semantic token — use palette directly for success states

### Informative (Blue) — hue ~253–259°
`informative-10` through `informative-900`
- No semantic token — use palette directly for info states

### Gray — neutral
`gray-10` through `gray-900`
- `gray-10` → lightest (sidebar bg)
- `gray-900` → darkest

## Status Badge Pattern

```tsx
// Success
<span className="bg-success-50 text-success-600 dark:bg-success-900 dark:text-success-300 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium">
  Active
</span>

// Warning
<span className="bg-warning text-warning-foreground inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium">
  Pending
</span>

// Error / Destructive
<span className="bg-destructive text-destructive-foreground inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium">
  Rejected
</span>

// Informative
<span className="bg-informative-50 text-informative-600 dark:bg-informative-900 dark:text-informative-300 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium">
  New
</span>
```
