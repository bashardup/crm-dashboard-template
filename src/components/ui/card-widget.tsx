import * as React from "react"
import { cn } from "@/lib/utils"

interface CardWidgetProps extends React.ComponentProps<"div"> {
  title: string
  icon: string
  children?: React.ReactNode
}

function CardWidget({
  className,
  title,
  icon,
  children,
  ...props
}: CardWidgetProps) {
  return (
    <div
      data-slot="card-widget"
      className={cn(
        "flex flex-col p-6 md:p-8 rounded-3xl md:rounded-[32px] overflow-hidden group bg-white dark:bg-zinc-900  dark:shadow-[-2px_3px_9px_0px_rgba(0,0,0,1.00)]  relative shadow-[-2px_3px_9px_0px_rgba(230,239,235,1.00)] h-full",
        className
      )}
      {...props}
    >
      <div className="pointer-events-none w-96 h-96 left-0 opacity-50 translate-x-[-37%] -translate-y-[60%] top-0 absolute rounded-full dark:bg-[radial-gradient(#26d07c59,#26d07c00_65%)] bg-[radial-gradient(#cbf1d8,#eaf9ef00_65%)]" />

      <div className="w-full flex items-center gap-4 mb-6 md:mb-8 ">
        <div className="flex-col-auto w-14">
          <div className="rounded-2xl p-2 bg-primary-25 dark:bg-emerald-50/10">
            <div className="aspect-square relative">
              <img src={icon} alt={title} />
            </div>
          </div>
        </div>
        <div className="flex-col-full w-full">
          <div className="relative">
            <h3 className="font-mono font-bold leading-tight text-base mb-1">
              {title}
            </h3>
          </div>
        </div>
      </div>

      {children}
    </div>
  )
}

export { CardWidget }