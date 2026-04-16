import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> & {
    size?: "sm" | "default"
  }
>(({ className, size = "default", ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    data-slot="switch"
    data-size={size}
    className={cn(
      "peer group/switch inline-flex shrink-0 cursor-pointer items-center rounded-md border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      size === "default" ? "h-6 w-12" : "h-[14px] w-[24px]",
      className
    )}
    {...props}
  >
    <SwitchPrimitive.Thumb
      data-slot="switch-thumb"
      className={cn(
        "pointer-events-none p-0.5 block rounded-md bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-[80%] data-[state=unchecked]:translate-x-0",
        size === "default" ? "w-6 h-5" : "size-3"
      )}
    >
      <span className="w-full h-full bg-white block rounded-sm"></span>
    </SwitchPrimitive.Thumb>
  </SwitchPrimitive.Root>
))
Switch.displayName = SwitchPrimitive.Root.displayName

export { Switch }
