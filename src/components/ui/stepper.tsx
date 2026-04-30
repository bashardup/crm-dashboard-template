import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

export type StepStatus = "completed" | "active" | "pending"

export interface StepperStep {
  title: string
  status: StepStatus
}

interface StepperProps {
  steps: StepperStep[]
  className?: string
}

function StepDot({ status, index }: { status: StepStatus; index: number }) {
  return (
    <div
      className={cn(
        "relative size-9 rounded-full flex items-center justify-center shrink-0 transition-all",
        status === "completed" && "bg-primary",
        status === "active" && "bg-primary ring-4 ring-primary/20",
        status === "pending" && "bg-transparent border-2 border-border"
      )}
    >
      {status === "completed" ? (
        <Check
          className={cn(
            "size-4 text-primary-foreground",
          )}
          strokeWidth={2.5}
        />
      ) : (
        <span
          className={cn(
            "font-mono font-bold text-sm leading-none",
            status === "active" && "text-primary-foreground",
            status === "pending" && "text-muted-foreground"
          )}
        >
          {index + 1}
        </span>
      )}
    </div>
  )
}

function StepConnector({ fromStatus }: { fromStatus: StepStatus }) {
  const solid = fromStatus === "completed"
  return (
    <div className="flex-1 flex items-center">
      <div
        className={cn(
          "w-full h-px",
          solid
            ? "bg-primary"
            : "border-t-2 border-dashed border-border"
        )}
      />
    </div>
  )
}

export function Stepper({ steps, className }: StepperProps) {
  return (
    <div className={cn("flex items-start gap-0", className)}>
      {steps.map((step, i) => (
        <React.Fragment key={i}>
          {/* Step */}
          <div className="flex flex-col items-center gap-2">
            <StepDot status={step.status} index={i} />
            <span
              className={cn(
                "text-xs font-medium whitespace-nowrap",
                step.status === "active" && "text-primary",
                step.status === "completed" && "text-foreground",
                step.status === "pending" && "text-muted-foreground"
              )}
            >
              {step.title}
            </span>
          </div>

          {/* Connector (between steps) */}
          {i < steps.length - 1 && (
            <div className="flex-1 pt-[18px] px-2">
              <StepConnector fromStatus={step.status} />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}
