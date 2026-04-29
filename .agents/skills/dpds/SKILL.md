---
name: dpds
description: Dubai Police Design System (DPDS) — guidelines for building UI consistent with the DP brand. Applies when working on Dubai Police dashboards, portals, or apps using the DPDS token system. Covers colors, typography, icons, component composition, and branding rules.
user-invocable: false
---

# Dubai Police Design System (DPDS)

A design system built on top of shadcn/ui, tailored to the Dubai Police brand. Components use DPDS tokens defined in `src/index.css` and `@theme inline` in Tailwind v4.

> **Logo assets:** See [assets/dp-logo-color.svg](./assets/dp-logo-color.svg) and [assets/Dubai-Police-Default-Icon.svg](./assets/Dubai-Police-Default-Icon.svg)

---

## Principles

1. **Brand first.** Always use DPDS semantic tokens — never raw color values.
2. **Primary = DP Green.** `--color-primary-*` is the main brand green (oklch hue ~160–170).
3. **Secondary = Dark green.** `--color-secondary-*` is darker teal-green for supporting elements.
4. **Semantic tokens only.** Use `bg-primary`, `text-muted-foreground`, `text-destructive` etc. Never `bg-green-500`.
5. **Dubai font stack.** Use `font-sans` (dubai) for body, `font-mono` (bukra) for code/mono contexts.

---

## Color System

Defined in `src/index.css` under `@theme inline`. All OKLCH, all themed for light + dark.

### Brand Palette

| Token family | Hue / purpose | Usage |
|---|---|---|
| `primary-*` | Green ~158–170° | CTAs, active states, links |
| `secondary-*` | Dark teal ~170–180° | Supporting actions, sidebar |
| `error-*` | Red ~23–29° | Destructive, form errors |
| `warning-*` | Amber ~62–87° | Warnings, caution states |
| `success-*` | Green ~155–157° | Positive feedback, confirmations |
| `informative-*` | Blue ~253–259° | Info banners, tooltips |
| `gray-*` | Neutral | Borders, muted text, backgrounds |

### Semantic Tokens (`:root` / `.dark`)

| Token | Light | Dark |
|---|---|---|
| `--primary` | `primary-500` | `primary-300` |
| `--background` | white | near-black |
| `--foreground` | near-black | near-white |
| `--muted-foreground` | gray-mid | gray-mid |
| `--destructive` | `error-50` bg / `error-600` text | `error-900` bg / `error-300` text |
| `--warning` | `warning-50` bg / `warning-600` text | `warning-900` bg / `warning-300` text |
| `--border` | gray-100 | white/10% |
| `--sidebar` | `gray-10` | — |

### Usage rules

```tsx
// Correct — semantic tokens
<div className="bg-primary text-primary-foreground">CTA</div>
<p className="text-muted-foreground">Helper text</p>
<span className="text-destructive">Error</span>

// Wrong — raw palette
<div className="bg-green-500 text-white">CTA</div>
<p className="text-gray-500">Helper text</p>
```

For status badges, use palette tokens only when a dedicated semantic token doesn't exist, and only via a CSS variable:

```tsx
// Correct — DPDS status badge
<span className="bg-success-50 text-success-600 dark:bg-success-900 dark:text-success-300 ...">Active</span>

// Wrong — raw Tailwind
<span className="bg-emerald-100 text-emerald-700">Active</span>
```

---

## Typography

| Use | Font | Class |
|---|---|---|
| Body / UI | Dubai | `font-sans` (default) |
| Monospace / code | Bukra | `font-mono` |
| Headings | Dubai (same as sans) | `font-heading` |

Never specify raw `font-family` strings. Use `font-sans`, `font-mono`, `font-heading` only.

---

## Icons

Two icon systems in this project:

1. **Lucide React** (`lucide-react`) — general UI icons.
2. **DP Icon Font** (`dp-icon-font`) — Dubai Police custom icon set, loaded via `@font-face` in `src/index.css`.

### Rules

- Icons inside `Button` use `data-icon` attribute, no manual sizing classes.
- Never hardcode `size-4` or `w-4 h-4` on icons inside components — let the component handle sizing.
- Prefer DP icon font for domain-specific icons (police, services, legal).

```tsx
// Correct
<Button>
  <SearchIcon data-icon="inline-start" />
  Search
</Button>

// Wrong
<Button>
  <SearchIcon className="size-4 mr-2" />
  Search
</Button>
```

---

## Branding

### Logo usage

```tsx
// Full color logo (light bg)
<img src="/img/dp-logo-color.svg" alt="Dubai Police" />

// Icon only
<img src="/img/Dubai-Police-Default-Icon.svg" alt="Dubai Police" />
```

- Never change logo colors or apply CSS filters.
- Maintain clear space — minimum padding equal to the logo's "D" letter width on all sides.
- On dark backgrounds, check contrast — use the icon variant if the full logo contrast is insufficient.

---

## Component Composition

Same rules as shadcn/ui — see [rules/composition.md](./rules/composition.md). Key additions for DPDS:

- **Empty states** use `EmptyState` from `@/components/ui/empty-state` — not custom markup.
- **Data tables** use `DataTable` from `@/components/ui/data-table` (TanStack React Table) — not raw `<table>`.
- **Search inputs** use `InputGroup` + `InputGroupAddon` + `InputGroupInput` — not `Input` with absolute-positioned icon.
- **Status badges** use `Badge` or inline `<span>` with DPDS palette tokens — never raw Tailwind colors.

---

## Styling

See [rules/styling.md](./rules/styling.md) for full rules. Summary:

- `className` for layout only — never override colors via className.
- No `space-x-*` / `space-y-*` — use `flex gap-*`.
- `size-*` when width = height.
- `truncate` shorthand.
- No manual `dark:` color overrides — semantic tokens handle it.
- Use `cn()` for conditional classes.
- No manual `z-index` on overlays.

---

## Key Patterns

```tsx
// DP-branded button
<Button>Submit Request</Button>  // uses --primary (DP green) automatically

// Status badge — DPDS style
<span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
  bg-success-50 text-success-600 dark:bg-success-900 dark:text-success-300">
  Active
</span>

// Search input — DPDS pattern
<InputGroup className="h-9 rounded-xl bg-background">
  <InputGroupAddon align="inline-start">
    <InputGroupText><Search className="size-3.5" /></InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="Quick search" className="text-xs" />
</InputGroup>

// Empty state
<EmptyState
  title="No results found"
  description="Try a different search term"
  isLottie
  lottieData={lottieData}
  variant="wide"
/>

// Data table
<DataTable columns={columns} data={data} searchPlaceholder="Quick search" onAdd={() => {}} />
```

---

## File References

| Purpose | Path |
|---|---|
| Color tokens | `src/index.css` — `@theme inline` block |
| Semantic tokens | `src/index.css` — `:root` and `.dark` |
| EmptyState | `src/components/ui/empty-state.tsx` |
| DataTable | `src/components/ui/data-table.tsx` |
| InputGroup | `src/components/ui/input-group.tsx` |
| ProfileSwitcher | `src/components/ui/profile-switcher.tsx` |
| Lottie icons | `src/components/lottie/` |
| DP logo (color) | `public/img/dp-logo-color.svg` |
| DP icon | `public/img/Dubai-Police-Default-Icon.svg` |

---

## Detailed References

- [rules/styling.md](./rules/styling.md) — Semantic colors, variants, spacing, size, dark mode, cn()
- [rules/composition.md](./rules/composition.md) — Component groups, overlays, Card, Tabs, Avatar, Empty, Toast
- [rules/colors.md](./rules/colors.md) — Full DPDS color palette and semantic token map
- [rules/typography.md](./rules/typography.md) — Dubai / Bukra font usage
- [rules/icons.md](./rules/icons.md) — Lucide + DP icon font rules
- [rules/branding.md](./rules/branding.md) — Logo, clear space, dark background handling
