import { useState } from "react"
import { ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import useIsRtl from "@/hooks/useIsRtl"

export interface ProfileSwitcherOption {
  value: string
  label: string
  description?: string
  icon: string
}

interface ProfileSwitcherProps {
  options: ProfileSwitcherOption[]
  value?: string
  onChange?: (value: string) => void
  className?: string
}

export function ProfileSwitcher({ options, value, onChange, className }: ProfileSwitcherProps) {
  const [expanded, setExpanded] = useState(false)
  const isRtl = useIsRtl()
  const selected = value ?? options[0]?.value

  function handleSelect(val: string) {
    if (val !== selected) onChange?.(val)
    setExpanded(false)
  }

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* Expand toggle */}
      <button
        onClick={() => setExpanded((p) => !p)}
        className={cn(
          "z-20 absolute bottom-[22px] p-1 text-muted-foreground transition-all duration-300 ease-in-out",
          isRtl ? "left-[15px]" : "right-[15px]",
          expanded ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto delay-100"
        )}
      >
        <ChevronsUpDown className="h-4 w-4" />
      </button>

      {/* Glow accent */}
      <span
        className={cn(
          "z-[1] block absolute pointer-events-none top-0 -translate-y-[30%] bg-[radial-gradient(#7af2c729,transparent_75%)] rounded-full w-full h-full",
          isRtl ? "-translate-x-[10%]" : "translate-x-[10%]"
        )}
      />

      {/* Animated container */}
      <div
        className={cn(
          "relative border overflow-hidden bg-white dark:bg-zinc-900 rounded-2xl border-border transition-all duration-700 ease-[cubic-bezier(.77,0,.18,1)]",
          expanded ? `h-[${options.length * 82}px]` : "h-[82px]"
        )}
        style={{ height: expanded ? options.length * 82 : 82 }}
      >
        {options.map((opt, i) => {
          const isSelected = selected === opt.value
          const isSecond = i === 1

          return (
            <button
              key={opt.value}
              onClick={() => handleSelect(opt.value)}
              className={cn(
                "absolute bottom-0 left-0 w-full p-5 text-left transition-all duration-700 ease-[cubic-bezier(.77,0,.18,1)] overflow-hidden bg-white dark:bg-zinc-900 group",
                isSelected ? "z-10" : "z-0",
                isSecond && expanded ? "-translate-y-full" : "translate-y-0",
                !expanded && !isSelected ? "blur-sm scale-75" : "scale-100 blur-0"
              )}
            >
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className={cn("size-10 relative shrink-0 transition-opacity duration-300", isSelected ? "opacity-100" : "opacity-50")}>
                  <img
                    src="/img/services/Bg.svg"
                    alt=""
                    className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-[cubic-bezier(.77,0,.18,1)] scale-110 translate-x-[31%] -translate-y-[20%] group-hover:scale-110 group-hover:translate-x-0 group-hover:translate-y-0"
                  />
                  <img
                    src={opt.icon}
                    alt={opt.label}
                    className="absolute inset-0 size-full object-cover rounded-lg backdrop-blur transition-transform duration-700 ease-[cubic-bezier(.77,0,.18,1)]"
                  />
                </div>

                {/* Text */}
                <div className="flex-grow min-w-0">
                  {opt.description && (
                    <p className="text-muted-foreground text-xs font-normal leading-none mb-1">{opt.description}</p>
                  )}
                  <h3 className={cn("text-xs font-bold leading-none truncate transition-colors duration-300", isSelected ? "text-foreground" : "text-muted-foreground")}>
                    {opt.label}
                  </h3>
                </div>

                {/* Radio indicator */}
                <div
                  className={cn(
                    "shrink-0 p-[2px] w-4 h-4 border-2 relative bg-white rounded-full transition-all duration-300",
                    isSelected ? "border-emerald-600" : "border-muted-foreground/40",
                    expanded ? "opacity-100" : "opacity-0 pointer-events-none"
                  )}
                >
                  <div className={cn("size-full rounded-full bg-emerald-600 transition-all duration-300", isSelected ? "opacity-100 scale-100" : "opacity-0 scale-0")} />
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
