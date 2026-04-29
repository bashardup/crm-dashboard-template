import { useState } from "react"
import { toast } from "sonner"
import { Badge } from "@/components/ui/badge"
import { Info, MoreHorizontal, TriangleAlert } from "lucide-react"
import { DataTable, createSelectColumn, type ColumnDef } from "@/components/ui/data-table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { ProfileSwitcher, type ProfileSwitcherOption } from "@/components/ui/profile-switcher"

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
  | "profile-switcher"

const profileOptions: ProfileSwitcherOption[] = [
  { value: "personal", label: "Personal Account", description: "Account type", icon: "" },
  { value: "lawyer",   label: "Lawyer Account",   description: "Account type", icon: "" },
]

type Request = {
  id: string
  requestNo: string
  clientName: string
  clientEmail: string
  serviceName: string
  status: "New" | "Under investigation" | "Completed" | "Pending approval"
  date: string
  lastUpdate: string
  requestedIn: string
}

const tableRows: Request[] = Array.from({ length: 47 }, (_, i) => ({
  id: String(i + 1),
  requestNo: `REQ-2025-${String(i + 1).padStart(3, "0")}`,
  clientName: ["Noura Mansour", "Ahmed Ali", "Sara Khalid", "Omar Hassan", "Layla Noor"][i % 5],
  clientEmail: ["noura@gmail.com", "ahmed@gmail.com", "sara@gmail.com", "omar@gmail.com", "layla@gmail.com"][i % 5],
  serviceName: ["TWIMC Certificate", "Criminal complaint", "Electronic agency", "Visiting an inmate", "Stop searching"][i % 5],
  status: (["New", "Under investigation", "Completed", "Pending approval", "Completed"] as Request["status"][])[i % 5],
  date: "09 Sep 2025",
  lastUpdate: "09 Sep 2025",
  requestedIn: ["Al Barsha Police Station", "Dubai Police HQ", "Deira Police Station"][i % 3],
}))

const statusVariant: Record<Request["status"], string> = {
  "New": "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  "Under investigation": "bg-yellow-500/15 text-yellow-600 dark:text-yellow-400",
  "Completed": "bg-blue-500/15 text-blue-600 dark:text-blue-400",
  "Pending approval": "bg-orange-500/15 text-orange-600 dark:text-orange-400",
}

const requestColumns: ColumnDef<Request>[] = [
  createSelectColumn<Request>(),
  {
    accessorKey: "requestNo",
    header: "Request No.",
  },
  {
    accessorKey: "clientName",
    header: "Client's name",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <div className="size-7 rounded-full bg-muted flex items-center justify-center text-xs font-medium shrink-0">
          {row.original.clientName[0]}
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-bold text-sm font-mono">{row.original.clientName}</span>
          <span className="text-xs text-muted-foreground">{row.original.clientEmail}</span>
        </div>
      </div>
    ),
  },
  { accessorKey: "serviceName", header: "Service Name" },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusVariant[row.original.status]}`}>
        {row.original.status}
      </span>
    ),
  },
  { accessorKey: "date", header: "Date", enableSorting: false },
  { accessorKey: "lastUpdate", header: "Last update", enableSorting: false },
  { accessorKey: "requestedIn", header: "Requested in", enableSorting: false },
  {
    id: "actions",
    enableSorting: false,
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex size-7 items-center justify-center rounded-md hover:bg-muted">
            <MoreHorizontal className="size-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>View details</DropdownMenuItem>
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
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
  const [profileValue, setProfileValue] = useState("personal")
  const [progress, setProgress] = useState(60)
  const [statusFilter, setStatusFilter] = useState("all")
  const [timeFilter, setTimeFilter] = useState("all")

  const filteredRows = tableRows.filter(r => {
    if (statusFilter !== "all" && r.status !== statusFilter) return false
    return true
  })

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
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </SectionCard>
        )}
        {section === "toast" && (
          <SectionCard title="Toast">
            <Button onClick={() => toast.success("Saved successfully", { description: "Your changes are now updated." })}>
              Show Toast
            </Button>
          </SectionCard>
        )}

        {section === "tabs" && (
          <SectionCard title="Tabs">
            <Tabs defaultValue="account">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <div className="rounded-md border p-4 text-sm text-muted-foreground">
                  Update your account details.
                </div>
              </TabsContent>
              <TabsContent value="password">
                <div className="rounded-md border p-4 text-sm text-muted-foreground">
                  Change your password settings.
                </div>
              </TabsContent>
            </Tabs>
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
          <Card>
            <DataTable
              columns={requestColumns}
              data={filteredRows}
              searchPlaceholder="Quick search"
              onAdd={() => {}}
              filterSlot={
                <div className="flex items-center gap-2">
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-36 text-xs">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="New">New</SelectItem>
                      <SelectItem value="Under investigation">Under investigation</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                      <SelectItem value="Pending approval">Pending approval</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={timeFilter} onValueChange={setTimeFilter}>
                    <SelectTrigger className=" w-28 text-xs">
                      <SelectValue placeholder="Time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Time</SelectItem>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="week">This Week</SelectItem>
                      <SelectItem value="month">This Month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              }
            />
          </Card>
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
              <Progress value={progress} />
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={() => setProgress((v) => Math.max(0, v - 10))}>-10%</Button>
                <Button size="sm" variant="outline" onClick={() => setProgress((v) => Math.min(100, v + 10))}>+10%</Button>
              </div>
            </div>
          </SectionCard>
        )}

        {section === "accordion" && (
          <SectionCard title="Accordion">
            <Accordion className="w-full rounded-md border px-3">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is Dashboard?</AccordionTrigger>
                <AccordionContent>
                    A collection of beautifully designed components.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I customize it?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can customize classes and behavior.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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

        {section === "profile-switcher" && (
          <SectionCard title="Profile Switcher">
            <div className="max-w-xs">
              <ProfileSwitcher
                options={profileOptions}
                value={profileValue}
                onChange={setProfileValue}
              />
              <p className="mt-3 text-xs text-muted-foreground">Selected: <span className="font-medium text-foreground">{profileValue}</span></p>
            </div>
          </SectionCard>
        )}
      </main>
    </div>
  )
}
