import { useState } from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Toggle } from "@/components/ui/toggle"
import { cn } from "@/lib/utils"

type FormSection =
  | "form"
  | "input"
  | "select"
  | "checkbox"
  | "radio"
  | "textarea"
  | "datepicker"
  | "fileupload"
  | "slider"
  | "toggle"
  | "switch"
  | "text-editor"

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

export default function FormsPage({ section }: { section: FormSection }) {
  const [sliderValue, setSliderValue] = useState([50])
  const [switchOn, setSwitchOn] = useState(true)
  const [date, setDate] = useState<Date | undefined>(undefined)

  return (
    <div className="flex flex-col flex-1 w-full">
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div>
          <h1 className="text-[40px] font-bold font-mono tracking-tight text-secondary-600 dark:text-success-300 text-4xl">Forms</h1>
          <p className="text-sm md:text-2xl text-gray-500">shadcn form controls showcase</p>
        </div>

        {section === "form" && (
          <SectionCard title="Form">
            <form className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="md:col-span-2">
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </SectionCard>
        )}

        {section === "input" && (
          <SectionCard title="Input">
            <Input placeholder="Type here..." />
          </SectionCard>
        )}

        {section === "select" && (
          <SectionCard title="Select">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Single Select</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Disabled Select</Label>
                <Select disabled>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Disabled" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="a">A</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </SectionCard>
        )}

        {section === "checkbox" && (
          <SectionCard title="Checkbox">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="newsletter" defaultChecked />
                <Label htmlFor="newsletter">Subscribe to newsletter</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="disabled" disabled />
                <Label htmlFor="disabled" className="text-muted-foreground">
                  Disabled option
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="disabled-checked" disabled defaultChecked />
                <Label htmlFor="disabled-checked" className="text-muted-foreground">
                  Disabled &amp; checked
                </Label>
              </div>
            </div>
          </SectionCard>
        )}

        {section === "radio" && (
          <SectionCard title="Radio">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Subscription plan</Label>
                <RadioGroup defaultValue="pro">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="starter" id="starter" />
                    <Label htmlFor="starter">Starter</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pro" id="pro" />
                    <Label htmlFor="pro">Pro</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="enterprise" id="enterprise" />
                    <Label htmlFor="enterprise">Enterprise</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label>Disabled group</Label>
                <RadioGroup defaultValue="a" disabled>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="a" id="da" />
                    <Label htmlFor="da" className="text-muted-foreground">Option A</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="b" id="db" />
                    <Label htmlFor="db" className="text-muted-foreground">Option B</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </SectionCard>
        )}

        {section === "textarea" && (
          <SectionCard title="Textarea">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" aria-invalid placeholder="Write your message..." className="min-h-[120px]" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="disabled-ta">Disabled</Label>
                <Textarea id="disabled-ta" aria-invalid placeholder="Cannot type here" disabled />
              </div>
            </div>
          </SectionCard>
        )}

        {section === "datepicker" && (
          <SectionCard title="Date Picker">
            <div className="space-y-2">
              <Label>Pick a date</Label>
              <Popover>
                <PopoverTrigger
                  className={cn(
                    "inline-flex w-[240px] items-center justify-start gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm font-normal shadow-xs hover:bg-accent hover:text-accent-foreground",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </SectionCard>
        )}

        {section === "fileupload" && (
          <SectionCard title="File Upload">
            <Input type="file" />
          </SectionCard>
        )}

        {section === "slider" && (
          <SectionCard title="Slider">
            <div className="space-y-6 max-w-sm">
              <div className="space-y-2">
                <Label>Volume: {sliderValue[0]}</Label>
                <Slider
                  min={0}
                  max={100}
                  step={1}
                  value={sliderValue}
                  onValueChange={(val) =>
                    setSliderValue(Array.isArray(val) ? [...val] : [val as number])
                  }
                />
              </div>
              <div className="space-y-2">
                <Label>Disabled Slider</Label>
                <Slider defaultValue={[30]} disabled />
              </div>
            </div>
          </SectionCard>
        )}

        {section === "toggle" && (
          <SectionCard title="Toggle">
            <div className="flex flex-wrap gap-3">
              <Toggle aria-label="Bold" variant="default">
                <span className="font-bold">B</span>
              </Toggle>
              <Toggle aria-label="Italic" variant="outline">
                <span className="italic">I</span>
              </Toggle>
              <Toggle aria-label="Underline" variant="outline" defaultPressed>
                <span className="underline">U</span>
              </Toggle>
              <Toggle aria-label="Disabled" disabled>
                Disabled
              </Toggle>
            </div>
          </SectionCard>
        )}

        {section === "switch" && (
          <SectionCard title="Switch">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch
                  id="notifications"
                  checked={switchOn}
                  onCheckedChange={setSwitchOn}
                />
                <Label htmlFor="notifications">
                  Notifications {switchOn ? "on" : "off"}
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="airplane" />
                <Label htmlFor="airplane">Airplane mode</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="disabled-sw" disabled />
                <Label htmlFor="disabled-sw" className="text-muted-foreground">
                  Disabled
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="disabled-sw-on" disabled defaultChecked />
                <Label htmlFor="disabled-sw-on" className="text-muted-foreground">
                  Disabled &amp; on
                </Label>
              </div>
            </div>
          </SectionCard>
        )}

        {section === "text-editor" && (
          <SectionCard title="Text Editor">
            <div className="space-y-2">
              <div className="flex gap-2">
                <Button size="sm" variant="outline">B</Button>
                <Button size="sm" variant="outline">I</Button>
                <Button size="sm" variant="outline">U</Button>
              </div>
              <div contentEditable className="min-h-[140px] rounded-md border p-3 text-sm outline-none">
                Start writing rich text content...
              </div>
            </div>
          </SectionCard>
        )}
      </main>
    </div>
  )
}
