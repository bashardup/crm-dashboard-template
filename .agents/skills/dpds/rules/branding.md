# Branding

## Logo Assets

| Asset | Path | Use |
|---|---|---|
| Full color logo | `public/img/dp-logo-color.svg` | Light backgrounds, headers |
| Icon only | `public/img/Dubai-Police-Default-Icon.svg` | Favicon, compact spaces, dark backgrounds |

Skill assets (reference copies): [dp-logo-color.svg](../assets/dp-logo-color.svg) · [Dubai-Police-Default-Icon.svg](../assets/Dubai-Police-Default-Icon.svg)

## Logo Usage Rules

```tsx
// Full logo — light background
<img src="/img/dp-logo-color.svg" alt="Dubai Police" className="h-10 w-auto" />

// Icon only — compact / dark bg
<img src="/img/Dubai-Police-Default-Icon.svg" alt="Dubai Police" className="size-8" />
```

### Don'ts

- Never apply CSS `filter`, `opacity`, or color overrides to logos.
- Never stretch or distort — always use `w-auto` or `h-auto` to preserve aspect ratio.
- Never place the full color logo on a dark background — use the icon variant or check contrast.
- Clear space: maintain padding equal to the height of the "D" letterform on all sides.

## Brand Colors

Primary brand color is DP Green — `--color-primary-500` (`oklch(0.5495 0.1269 158.75)`).

Never substitute with generic Tailwind greens (`green-500`, `emerald-500`). Always use `bg-primary` or `--color-primary-*` tokens.

## Sidebar

Sidebar background uses `--sidebar` (`gray-10` in light mode). Don't override with custom colors.

```tsx
// Correct — uses --sidebar token automatically via sidebar component
<Sidebar>...</Sidebar>

// Wrong
<div className="bg-gray-50 w-64">...</div>
```
