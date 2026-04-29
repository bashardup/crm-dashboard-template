# Icons

Two icon systems in this project.

## 1. Lucide React

General-purpose UI icons. Import from `lucide-react`.

```tsx
import { Search, ChevronDown, Filter } from "lucide-react"
```

## 2. DP Icon Font

Dubai Police custom icon set. Loaded via `@font-face` (`dp-icon-font`) in `src/index.css`. Use for domain-specific icons (police services, legal, government).

```tsx
// Via CSS class (font icon)
<span className="dp-icon dp-icon-service" aria-hidden="true" />
```

## Rules

### Icons in Button — use data-icon

```tsx
// Correct
<Button>
  <SearchIcon data-icon="inline-start" />
  Search
</Button>

<Button>
  Actions
  <ChevronDownIcon data-icon="inline-end" />
</Button>

// Wrong — manual sizing and margin
<Button>
  <SearchIcon className="size-4 mr-2" />
  Search
</Button>
```

### No manual sizing on icons inside components

Components control icon sizing via CSS. Don't add `size-4`, `w-4 h-4`, `h-5 w-5` to icons inside `Button`, `Badge`, `Alert`, `Input`, etc.

Exception: standalone icons outside of components — size them explicitly.

```tsx
// Correct — standalone icon
<Search className="size-3.5 text-muted-foreground" />

// Correct — inside Button
<Button><Search data-icon="inline-start" /> Search</Button>

// Wrong — inside Button with size
<Button><Search className="size-4 mr-1" /> Search</Button>
```

### Pass icons as objects, not strings

```tsx
// Correct
icon={SearchIcon}

// Wrong
icon="search"
icon="SearchIcon"
```
