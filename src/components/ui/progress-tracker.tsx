import * as React from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

export type StepStatus = "completed" | "in-progress" | "pending"

export interface ProgressStep {
  title: string
  status: StepStatus
  statusLabel?: string
  description?: string
  action?: React.ReactNode
}

interface ProgressTrackerProps {
  steps: ProgressStep[]
  className?: string
}

const statusStyles: Record<StepStatus, { dot: string; badgeClass: string }> = {
  "completed": {
    dot: "bg-primary border-primary",
    badgeClass: "bg-primary/10 text-primary dark:bg-primary/20 border-0",
  },
  "in-progress": {
    dot: "bg-warning-400 border-warning-400",
    badgeClass: "bg-warning-50 text-warning-600 dark:bg-warning-400/20 dark:text-warning-400 border-0",
  },
  "pending": {
    dot: "bg-gray-25 border-border",
    badgeClass: "bg-muted text-muted-foreground border-0",
  },
}

export function ProgressTracker({ steps, className }: ProgressTrackerProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {steps.map((step, i) => {
        const isLast = i === steps.length - 1

        return (
          <div key={i} className="flex gap-4">
            <div className="flex-1 relative flex items-center min-h-[88px] gap-4 px-6 bg-white dark:bg-[#15161E] rounded-3xl border border-[#d9dddb29] overflow-hidden">
              <span className="pointer-events-none absolute top-0 left-0 h-full w-1/2  bg-[linear-gradient(171deg,#26D07C33_-10%,transparent_50%)]" />

              <div className="flex justify-center h-full items-center w-3 shrink-0 relative">
                <div className={cn("absolute w-px left-1/2 -translate-x-1/2 bg-white/10",
                    i === 0 && "top-1/2 bottom-0",
                    isLast && "top-0 bottom-1/2",
                    !i && isLast && "hidden",
                    i > 0 && !isLast && "top-0 bottom-0",
                  )}
                /> 

                <div
                  className={cn(
                    "size-3 rounded-full border-2 shrink-0 z-10",
                    statusStyles[step.status].dot,
                  )}
                />
              </div>

              <div className="flex-1 min-w-0">
                <p
                  className={cn(
                    "font-mono font-bold text-sm leading-tight",
                    step.status === "pending" && "text-muted-foreground"
                  )}
                >
                  {step.title}
                </p>
                {step.statusLabel && (
                  <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                    <Badge
                      className={cn(
                        "h-auto px-2 py-0.5 text-xs font-medium rounded-md",
                        statusStyles[step.status].badgeClass
                      )}
                    >
                      {step.statusLabel}
                    </Badge>
                    {step.description && (
                      <span className="text-xs text-muted-foreground">{step.description}</span>
                    )}
                  </div>
                )}
              </div>
              {step.action && <div className="shrink-0">{step.action}</div>}
            </div>
          </div>
        )
      })}
    </div>
  )
}
