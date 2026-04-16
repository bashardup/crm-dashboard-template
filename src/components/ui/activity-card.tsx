import * as React from "react"
import { cn } from "@/lib/utils"

interface ActivityCardProps extends React.ComponentProps<"div"> {
  title: string
  description: string
  icon: {
    src: string
    alt: string
  }
}

function ActivityCard({
  className,
  title,
  description,
  icon,
  ...props
}: ActivityCardProps) {
  return (
    <div
      data-slot="activity-card"
      className={cn(
        "p-6 md:p-8 cursor-pointer overflow-hidden group bg-white dark:bg-zinc-900 relative ",
        "shadow-[-2px_3px_9px_0px_rgba(230,239,235,1.00)] dark:shadow-none rounded-[32px]",
        "flex  items-stretch h-full gap-1 md:gap-4",
        "transition-transform duration-300 ease-custom-ease hover:md:-translate-y-2 will-change-transform",
        className
      )}
      {...props}
    >
      <div
        className="w-96 h-96 opacity-50 translate-x-[-37%] translate-y-[60%] rtl:right-0 ltr:left-0 bottom-0 absolute rounded-full dark:bg-[radial-gradient(#26d07c59,#26d07c00_65%)] bg-[radial-gradient(#cbf1d8,#eaf9ef00_65%)]"
      />

      <div className="flex-col-auto w-full order-2 md:order-1 md:w-[45%]">
        <div className="z-40 relative flex flex-col justify-between h-full">
          <h3 className="font-mono leading-normal text-center md:text-start text-sm md:text-base font-bold mb-0.5">
            {title}
          </h3>
          <p className="text-center md:text-start justify-center md:justify-start text-2xl md:text-4xl font-mono font-bold leading-none text-gray-600 dark:text-green-400 flex items-center gap-1">
            {description}
          </p>
        </div>
      </div>

      <div className="flex-col-full w-full order-1 md:order-2">
        <div className="w-[80%] md:w-full max-w-[160px] mx-auto">
          <div className="aspect-square relative  translate-y-2">
            <img
              src={icon.src}
              alt={icon.alt}
              className="object-contain absolute inset-0 size-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export { ActivityCard }