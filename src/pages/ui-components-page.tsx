import { useMemo, useState } from "react"
import { ChevronRight, Info, TriangleAlert } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

type UiSection =
  | "badges"
  | "toast"
  | "tabs"
  | "modal-popups"
  | "side-drawers"
  | "table"
  | "dropdown-menu"
  | "progress-bar"
  | "accordion"
  | "breadcrumb"
  | "navigation-menu"
  | "alert"

const tableRows = [
  { name: "Ali", role: "Admin", status: "Active" },
  { name: "Mona", role: "Editor", status: "Pending" },
  { name: "Omar", role: "Viewer", status: "Active" },
  { name: "Lina", role: "Editor", status: "Inactive" },
  { name: "Hassan", role: "Admin", status: "Active" },
  { name: "Noor", role: "Viewer", status: "Pending" },
]

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

export default function UiComponentsPage({ section }: { section: UiSection }) {
  const [toastOpen, setToastOpen] = useState(false)
  const [tab, setTab] = useState<"account" | "password">("account")
  const [accordion, setAccordion] = useState<string | null>("item-1")
  const [sortAsc, setSortAsc] = useState(true)
  const [page, setPage] = useState(1)
  const [progress, setProgress] = useState(60)

  const sortedRows = useMemo(() => {
    return [...tableRows].sort((a, b) => (sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)))
  }, [sortAsc])

  const pageSize = 3
  const totalPages = Math.ceil(sortedRows.length / pageSize)
  const paginatedRows = sortedRows.slice((page - 1) * pageSize, page * pageSize)

  return (
    <div className="flex flex-col flex-1 w-full">
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div>
          <h1 className="text-[40px] font-bold font-mono tracking-tight text-secondary-600 dark:text-success-300 text-4xl">UI Components</h1>
          <p className="text-sm md:text-2xl text-gray-500">shadcn components showcase</p>
        </div>

        {section === "badges" && (
          <SectionCard title="Badges">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">Default</span>
              <span className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">Secondary</span>
              <span className="rounded-full bg-destructive px-3 py-1 text-xs text-destructive-foreground">Destructive</span>
              <span className="rounded-full border px-3 py-1 text-xs">Outline</span>
            </div>
          </SectionCard>
        )}
        {section === "toast" && (
          <SectionCard title="Toast">
            <Button
              onClick={() => {
                setToastOpen(true)
                window.setTimeout(() => setToastOpen(false), 2500)
              }}
            >
              Show Toast
            </Button>
            {toastOpen && (
              <div className="mt-4 rounded-md border bg-card p-3 text-sm shadow">
                <p className="font-medium">Saved successfully</p>
                <p className="text-muted-foreground">Your changes are now updated.</p>
              </div>
            )}
          </SectionCard>
        )}

        {section === "tabs" && (
          <SectionCard title="Tabs">
            <div className="space-y-4">
              <div className="inline-flex rounded-md border p-1">
                <Button variant={tab === "account" ? "default" : "ghost"} size="sm" onClick={() => setTab("account")}>Account</Button>
                <Button variant={tab === "password" ? "default" : "ghost"} size="sm" onClick={() => setTab("password")}>Password</Button>
              </div>
              <div className="rounded-md border p-4 text-sm text-muted-foreground">
                {tab === "account" ? "Update your account details." : "Change your password settings."}
              </div>
            </div>
          </SectionCard>
        )}

        {section === "modal-popups" && (
          <SectionCard title="Modal Popups">
            <Sheet>
              <SheetTrigger asChild>
                <Button>Open Modal</Button>
              </SheetTrigger>
              <SheetContent side="top" className="mx-auto mt-16 h-auto w-full max-w-lg rounded-lg border">
                <SheetHeader>
                  <SheetTitle>Confirm action</SheetTitle>
                  <SheetDescription>This behaves like a modal popup.</SheetDescription>
                </SheetHeader>
                <div className="p-4 flex justify-end gap-2">
                  <Button variant="ghost">Cancel</Button>
                  <Button>Confirm</Button>
                </div>
              </SheetContent>
            </Sheet>
          </SectionCard>
        )}

        {section === "side-drawers" && (
          <SectionCard title="Side Drawers">
            <Sheet>
              <SheetTrigger asChild>
                <Button>Open Drawer</Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>User Preferences</SheetTitle>
                  <SheetDescription>Configure settings from the side drawer.</SheetDescription>
                </SheetHeader>
                <div className="space-y-3 p-4">
                  <Label htmlFor="drawer-email">Email</Label>
                  <Input id="drawer-email" placeholder="name@example.com" />
                </div>
              </SheetContent>
            </Sheet>
          </SectionCard>
        )}

        {section === "table" && (
          <SectionCard title="Table (pagination + sorting)">
            <div className="mb-3 flex items-center justify-between">
              <Button size="sm" variant="outline" onClick={() => setSortAsc((v) => !v)}>Sort by Name {sortAsc ? "A-Z" : "Z-A"}</Button>
              <span className="text-xs text-muted-foreground">Page {page} of {totalPages}</span>
            </div>
            <div className="overflow-x-auto rounded-md border">
              <table className="w-full text-sm">
                <thead className="bg-muted/30">
                  <tr>
                    <th className="p-3 text-left">Name</th>
                    <th className="p-3 text-left">Role</th>
                    <th className="p-3 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedRows.map((row) => (
                    <tr key={row.name} className="border-t">
                      <td className="p-3">{row.name}</td>
                      <td className="p-3">{row.role}</td>
                      <td className="p-3">{row.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-3 flex gap-2">
              <Button size="sm" variant="outline" disabled={page === 1} onClick={() => setPage((p) => p - 1)}>Prev</Button>
              <Button size="sm" variant="outline" disabled={page === totalPages} onClick={() => setPage((p) => p + 1)}>Next</Button>
            </div>
          </SectionCard>
        )}

        {section === "dropdown-menu" && (
          <SectionCard title="Dropdown Menu">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Open Menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SectionCard>
        )}

        {section === "progress-bar" && (
          <SectionCard title="Progress Bar">
            <div className="space-y-3">
              <div className="h-3 w-full rounded-full bg-muted">
                <div className="h-3 rounded-full bg-primary transition-all" style={{ width: `${progress}%` }} />
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={() => setProgress((v) => Math.max(0, v - 10))}>-10%</Button>
                <Button size="sm" variant="outline" onClick={() => setProgress((v) => Math.min(100, v + 10))}>+10%</Button>
              </div>
            </div>
          </SectionCard>
        )}

        {section === "accordion" && (
          <SectionCard title="Accordion">
            <div className="space-y-2">
              {[
                { id: "item-1", title: "What is shadcn?", content: "A collection of beautifully designed components." },
                { id: "item-2", title: "Can I customize it?", content: "Yes, you can customize classes and behavior." },
              ].map((item) => (
                <div key={item.id} className="rounded-md border">
                  <button className="flex w-full items-center justify-between p-3 text-left" onClick={() => setAccordion((v) => (v === item.id ? null : item.id))}>
                    {item.title}
                    <ChevronRight className={`h-4 w-4 transition-transform ${accordion === item.id ? "rotate-90" : ""}`} />
                  </button>
                  {accordion === item.id && <div className="border-t p-3 text-sm text-muted-foreground">{item.content}</div>}
                </div>
              ))}
            </div>
          </SectionCard>
        )}

        {section === "breadcrumb" && (
          <SectionCard title="BreadCrumb">
            <nav className="text-sm text-muted-foreground">
              <ol className="flex items-center gap-2">
                <li>Dashboard</li>
                <li>/</li>
                <li>UI Components</li>
                <li>/</li>
                <li className="text-foreground">BreadCrumb</li>
              </ol>
            </nav>
          </SectionCard>
        )}

        {section === "navigation-menu" && (
          <SectionCard title="Navigation Menu">
            <div className="flex flex-wrap gap-2">
              <Button variant="outline">Overview</Button>
              <Button variant="outline">Docs</Button>
              <Button variant="outline">Components</Button>
              <Button variant="outline">Support</Button>
            </div>
          </SectionCard>
        )}

        {section === "alert" && (
          <SectionCard title="Alert">
            <div className="space-y-3">
              <div className="flex items-start gap-2 rounded-md border p-3">
                <Info className="mt-0.5 h-4 w-4 text-primary" />
                <div>
                  <p className="font-medium">Information</p>
                  <p className="text-sm text-muted-foreground">This is an informative alert.</p>
                </div>
              </div>
              <div className="flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/10 p-3">
                <TriangleAlert className="mt-0.5 h-4 w-4 text-destructive" />
                <div>
                  <p className="font-medium text-destructive">Warning</p>
                  <p className="text-sm text-muted-foreground">This is a destructive alert variant.</p>
                </div>
              </div>
            </div>
          </SectionCard>
        )}
      </main>
    </div>
  )
}
