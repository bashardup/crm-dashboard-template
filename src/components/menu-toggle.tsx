import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className={cn(
        "relative h-[40px] w-[96px] rounded-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        isDark ? "bg-[#3a3a4a]" : "bg-[#dceee8]"
      )}
    >
        <div className="grid grid-cols-2 text-center">
            <span className="flex items-center justify-center">
                 <Sun
          className={cn(
            " h-5 w-5 stroke-[#5DCAA5] transition-all duration-300"
          )}
        />
            </span>
            <span className="flex items-center justify-center">
                <Moon
          className={cn(
            " h-5 w-5 fill-[#9FE1CB] stroke-none transition-all duration-300"
          )}
        />
            </span>
        </div>
      <span
        className={cn(
          "absolute  top-1/2 left-[6px] flex h-8 w-11 items-center justify-center rounded-full transition-all duration-300",
          isDark
            ? "translate-x-[40px] -translate-y-1/2 bg-[#2a2a3a]"
            : "translate-x-0 -translate-y-1/2 bg-white"
        )}
      >
        <Sun
          className={cn(
            "absolute h-5 w-5 stroke-[#5DCAA5] transition-all duration-300",
            isDark ? "scale-50 rotate-[30deg] " : "scale-100 rotate-0 opacity-100"
          )}
        />
        <Moon
          className={cn(
            "absolute h-5 w-5 fill-[#9FE1CB] stroke-none transition-all duration-300",
            isDark ? "scale-100 rotate-0 opacity-100" : "scale-50 -rotate-[30deg] "
          )}
        />
      </span>
    </button>
  )
}