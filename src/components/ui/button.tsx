import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "relative overflow-hidden inline-flex gap-2 items-center   font-secondary font-bold justify-center whitespace-nowrap  text-sm ring-offset-background transition-all ease-custom-ease duration-300  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40 disabled:text-[#121212] disabled:bg-[#DEDEE1]   active:before:opacity-100 active:before:bg-black/10  active:before:translate-y-[60%] before:absolute before:inset-0 before:bg-[#4A4459] before:bg-opacity-10  before:rounded-[100%] before:pointer-events-none before:opacity-0 before:translate-y-full before:scale-x-[150%] before:scale-y-[140%] before:transition-all before:duration-300 active:before:duration-300  rounded-[32px] active:rounded-[12px]",
  {
    variants: {
      variant: {
        default: " bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border text-[#4B4C4D] border-input bg-background hover:bg-[#f1f1f1] hover:text-[#4B4C4D]",
        outlinePrimary: "border border-[rgba(86,189,154,1)] bg-transparent text-primary hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "bg-[#EBEBEC] text-[#4B4C4D] md:hover:bg-[#4A445914] hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        tonal: "text-primary bg-[#D9EDE6] hover:bg-[#c4dfd5] ",
      },
      size: {
        default: "before:translate-x-[100%] active:before:translate-x-[30%]  h-[48px] md:h-14 px-6 md:px-6 py-4 md:py-4 gap-2  ",
        sm: "before:translate-x-[100%] active:before:translate-x-[30%]  h-[32px] px-4 text-xs",
        md: "before:translate-x-[100%] active:before:translate-x-[30%]  h-[40px]  px-4 text-xs",
        lg: "before:translate-x-[100%] active:before:translate-x-[30%]  h-14 rounded-md px-8",
        icon: "before:translate-x-[0%] active:before:translate-x-[0%]  size-11 md:size-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
