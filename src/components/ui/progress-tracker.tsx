import * as React from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

export type StepStatus = "completed" | "in-progress" | "pending"


const StepContext = React.createContext<{ isFirst: boolean; isLast: boolean }>({
  isFirst: false,
  isLast: false,
})

const statusStyles: Record<StepStatus, { dot: string; badgeClass: string }> = {
  completed: {
    dot: "bg-primary border-primary",
    badgeClass: "bg-primary/10 text-primary dark:bg-primary/20 border-0",
  },
  "in-progress": {
    dot: "bg-warning-400 border-warning-400",
    badgeClass: "bg-warning-50 text-warning-600 dark:bg-warning-400/20 dark:text-warning-400 border-0",
  },
  pending: {
    dot: "bg-gray-25 border-border",
    badgeClass: "bg-muted text-muted-foreground border-0",
  },
}
export interface ProgressTrackerItemProps {
  status: StepStatus
  title: string
  statusLabel?: string
  description?: string
  children?: React.ReactNode
  className?: string
}

function ProgressTrackerItem({
  status,
  title,
  statusLabel,
  description,
  children,
  className,
}: ProgressTrackerItemProps) {
  const { isFirst, isLast } = React.useContext(StepContext)

  return (
    <div
      data-slot="progress-tracker-item"
      className={cn(
        // 2-col grid by default; adds 3rd col (action) when ProgressTrackerHeader present
        "relative grid grid-cols-[auto_1fr] gap-x-4 px-6",
        "has-data-[slot=progress-tracker-header]:grid-cols-[auto_1fr_auto]",
        "bg-white dark:bg-[#15161E] rounded-3xl border border-[#d9dddb29] overflow-hidden",
        className
      )}
    >
      {/* Radial gradient decor */}
      <span className="pointer-events-none absolute top-0 left-0 h-full w-1/2 dark:bg-[linear-gradient(171deg,#26D07C33_-10%,transparent_50%)]" />

      {/* ── Dot + line col — spans both rows so line covers content area too ── */}
      <div className="row-span-2 col-start-1 flex flex-col items-center justify-center self-stretch z-10 w-3">
        {/* Line: top half */}
        <div className={cn(
          "w-px flex-1",
          isFirst ? "opacity-0" : "bg-black/10 dark:bg-white/10",
        )} />
        {/* Dot */}
        <div className={cn("size-3 rounded-full border-2 shrink-0", statusStyles[status].dot)} />
        {/* Line: bottom half */}
        <div className={cn(
          "w-px flex-1",
          isLast ? "opacity-0" : "bg-black/10 dark:bg-white/10",
        )} />
      </div>

      {/* ── Title + badge row (col 2, row 1) ── */}
      <div className="col-start-2 row-start-1 flex items-center min-h-[88px] py-5 has-data-[slot=progress-tracker-content]:pb-3 z-10">
        <div className="min-w-0">
          <p className={cn("font-mono font-bold text-sm leading-tight", status === "pending" && "text-muted-foreground")}>
            {title}
          </p>
          {statusLabel && (
            <div className="flex items-center gap-2 mt-1.5 flex-wrap">
              <Badge className={cn("h-auto px-2 py-0.5 text-xs font-medium rounded-md", statusStyles[status].badgeClass)}>
                {statusLabel}
              </Badge>
              {description && <span className="text-xs text-muted-foreground">{description}</span>}
            </div>
          )}
        </div>
      </div>

      {/* Children — ProgressTrackerHeader and ProgressTrackerContent place themselves via data-slot + grid */}
      {children}
    </div>
  )
}

function ProgressTrackerHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="progress-tracker-header"
      className={cn("col-start-3 row-start-1 self-center z-10 shrink-0", className)}
      {...props}
    />
  )
}

function ProgressTrackerContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="progress-tracker-content"
      className={cn(
        "col-start-2 col-span-2 row-start-2 pb-5 pt-3 z-10",
        "border-t border-border/50 text-sm text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}


function ProgressTracker({ children, className }: { children: React.ReactNode; className?: string }) {
  const items = React.Children.toArray(children)
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {items.map((child, i) => (
        <StepContext.Provider key={i} value={{ isFirst: i === 0, isLast: i === items.length - 1 }}>
          {child}
        </StepContext.Provider>
      ))}
    </div>
  )
}

export { ProgressTracker, ProgressTrackerItem, ProgressTrackerHeader, ProgressTrackerContent }
