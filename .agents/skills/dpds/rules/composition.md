# Component Composition

Same base rules as shadcn/ui. DPDS-specific additions below.

## Contents

- Items always inside their Group
- DPDS-specific components (EmptyState, DataTable, InputGroup)
- Overlays always need a Title
- Card structure
- Avatar always needs AvatarFallback
- Use Separator not hr
- Use Skeleton for loading
- Use Badge not custom spans

---

## Items always inside their Group

| Item | Must be inside |
|---|---|
| `SelectItem`, `SelectLabel` | `SelectGroup` |
| `DropdownMenuItem`, `DropdownMenuLabel` | `DropdownMenuGroup` |
| `CommandItem` | `CommandGroup` |

---

## DPDS-specific components

### EmptyState — never custom markup

**Incorrect:**
```tsx
<div className="flex flex-col items-center gap-4 py-16">
  <img src="/img/empty.svg" />
  <h3>No results</h3>
  <p>Try a different search</p>
</div>
```

**Correct:**
```tsx
import { EmptyState } from "@/components/ui/empty-state"

<EmptyState
  title="No results found"
  description="Try a different search term or filter"
  isLottie
  lottieData={lottieData}
  variant="wide"
/>
```

### DataTable — never raw table markup

**Incorrect:**
```tsx
<table>
  <thead>...</thead>
  <tbody>...</tbody>
</table>
```

**Correct:**
```tsx
import { DataTable, createSelectColumn } from "@/components/ui/data-table"

<DataTable columns={columns} data={data} searchPlaceholder="Quick search" onAdd={() => {}} />
```

### Search inputs — always InputGroup

**Incorrect:**
```tsx
<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5" />
  <Input className="pl-8" placeholder="Search" />
</div>
```

**Correct:**
```tsx
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@/components/ui/input-group"

<InputGroup className="h-9 rounded-xl bg-background">
  <InputGroupAddon align="inline-start">
    <InputGroupText><Search className="size-3.5" /></InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="Quick search" className="text-xs" />
</InputGroup>
```

---

## Dialog, Sheet, Drawer — always need a Title

```tsx
<Sheet>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Request Details</SheetTitle>  {/* required */}
    </SheetHeader>
    ...
  </SheetContent>
</Sheet>
```

Use `className="sr-only"` on `SheetTitle` if visually hidden.

---

## Full Card composition

```tsx
<Card>
  <CardHeader>
    <CardTitle>Requests</CardTitle>
    <CardDescription>Manage citizen service requests</CardDescription>
  </CardHeader>
  <CardContent>...</CardContent>
  <CardFooter>...</CardFooter>
</Card>
```

Don't dump everything into `CardContent`.

---

## Avatar always needs AvatarFallback

```tsx
<Avatar>
  <AvatarImage src={user.avatar} alt={user.name} />
  <AvatarFallback>{user.name[0]}</AvatarFallback>
</Avatar>
```

---

## Separator not hr or border divs

```tsx
// Correct
<Separator />

// Wrong
<hr />
<div className="border-t" />
```

---

## Skeleton for loading

```tsx
// Correct
<Skeleton className="h-4 w-32" />

// Wrong
<div className="h-4 w-32 bg-muted animate-pulse rounded" />
```

---

## Badge not custom spans

```tsx
// Correct
<Badge variant="secondary">Active</Badge>

// Wrong
<span className="rounded-full bg-green-100 px-2 text-xs text-green-700">Active</span>
```

For DPDS status colors not covered by Badge variants, use the palette token pattern from [colors.md](./colors.md#status-badge-pattern).
