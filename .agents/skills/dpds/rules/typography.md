# Typography

## Font Stack

Defined in `src/index.css` via `@font-face` and `@theme inline`.

| Class | Font | Weights | Use |
|---|---|---|---|
| `font-sans` | Dubai | 300 (Light), 400 (Regular), 500 (Medium), Bold | All UI text (default) |
| `font-mono` | Bukra | 300, 400, 900 | Code, mono, reference numbers |
| `font-heading` | Dubai (same as sans) | — | Headings |

## Rules

- Never write `font-family` inline. Use `font-sans`, `font-mono`, `font-heading` only.
- Default font is `dubai` — don't apply `font-sans` everywhere, it's the cascade default.
- Use `font-mono` for: request numbers (REQ-2025-001), codes, IDs, technical strings.
- Use `font-heading` explicitly only when overriding heading style in non-heading elements.

## Scale

Use Tailwind's default type scale. No custom font sizes unless absolutely required.

| Class | Size | Use |
|---|---|---|
| `text-xs` | 12px | Table cells, labels, helper text |
| `text-sm` | 14px | Body, card content |
| `text-base` | 16px | Standard body |
| `text-lg` | 18px | Section subheadings |
| `text-2xl` | 24px | Page subheadings |
| `text-3xl` | 30px | Page titles |
| `text-4xl` | 36px | Hero headings |

## Correct usage

```tsx
// Page title
<h1 className="text-4xl font-bold">Requests</h1>

// Reference number — mono
<span className="font-mono text-sm">REQ-2025-001</span>

// Helper text
<p className="text-xs text-muted-foreground">Last updated 09 Sep 2025</p>

// Wrong — raw font-family
<h1 style={{ fontFamily: 'Dubai' }}>Title</h1>
```
