# Styling & Customization

See [../SKILL.md](../SKILL.md) for the full DPDS token reference.

## Contents

- Semantic colors
- DPDS palette tokens (when semantic isn't enough)
- Built-in variants first
- className for layout only
- No space-x-* / space-y-*
- Prefer size-* over w-* h-* when equal
- Prefer truncate shorthand
- No manual dark: color overrides
- Use cn() for conditional classes
- No manual z-index on overlay components

---

## Semantic colors

**Incorrect:**
```tsx
<div className="bg-green-500 text-white">
  <p className="text-gray-500">Secondary text</p>
</div>
```

**Correct:**
```tsx
<div className="bg-primary text-primary-foreground">
  <p className="text-muted-foreground">Secondary text</p>
</div>
```

---

## DPDS palette tokens for status/state 

When no semantic token covers a state (e.g. "success"), use DPDS palette tokens — not raw Tailwind colors.

**Incorrect:**
```tsx
<span className="text-emerald-600 bg-emerald-100">Active</span>
<span className="text-red-600">Error</span>
<span className="text-yellow-600">Warning</span>
<span className="text-blue-600">Info</span>
```

**Correct:**
```tsx
<span className="text-success-600 bg-success-50 dark:text-success-300 dark:bg-success-900">Active</span>
<span className="text-destructive">Error</span>
<span className="text-warning-foreground bg-warning">Warning</span>
<span className="text-informative-600 bg-informative-50 dark:text-informative-300 dark:bg-informative-900">Info</span>
```

Available DPDS status palette families: `primary`, `secondary`, `error`, `warning`, `success`, `informative`, `gray`.
Each has shades `10, 25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900`.

---

## Built-in variants first

**Incorrect:**
```tsx
<Button className="border border-input bg-transparent hover:bg-accent">Click</Button>
```

**Correct:**
```tsx
<Button variant="outline">Click</Button>
```

---

## className for layout only

Use `className` for layout (`max-w-md`, `mx-auto`, `mt-4`), not for overriding colors or typography.

**Incorrect:**
```tsx
<Card className="bg-primary-50 text-primary-900">...</Card>
```

**Correct:**
```tsx
<Card className="max-w-md mx-auto">...</Card>
```

---

## No space-x-* / space-y-*

`space-y-4` → `flex flex-col gap-4`. `space-x-2` → `flex gap-2`.

---

## Prefer size-* over w-* h-* when equal

`size-10` not `w-10 h-10`.

---

## Prefer truncate shorthand

`truncate` not `overflow-hidden text-ellipsis whitespace-nowrap`.

---

## No manual dark: color overrides

Semantic tokens handle light/dark automatically. Never write `bg-white dark:bg-zinc-900` when a semantic token exists.

**Incorrect:**
```tsx
<div className="bg-white dark:bg-zinc-900 text-black dark:text-white">
```

**Correct:**
```tsx
<div className="bg-background text-foreground">
```

---

## Use cn() for conditional classes

```tsx
import { cn } from "@/lib/utils"

// Correct
<div className={cn("flex items-center", isActive && "bg-primary text-primary-foreground")}>

// Wrong
<div className={`flex items-center ${isActive ? "bg-primary text-primary-foreground" : ""}`}>
```

---

## No manual z-index on overlay components

`Dialog`, `Sheet`, `Drawer`, `DropdownMenu`, `Popover`, `Tooltip` manage their own stacking. Never add `z-50` or `z-[999]`.
