import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"

const variants = [
  "default",
  "destructive",
  "warning",
  "outline",
  "outlinePrimary",
  "secondary",
  "ghost",
  "link",
  "tonal",
] as const

const sizes = ["default", "sm", "md", "icon"] as const;

export default function ButtonsPage() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col flex-1 w-full">
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div>
          <h1 className="text-[40px] font-bold font-mono tracking-tight text-secondary-600 dark:text-success-300 text-4xl">
            {t("buttons.title")}
          </h1>
          <p className="text-sm md:text-2xl text-gray-500">{t("buttons.subtitle")}</p>
        </div>

        <section className="rounded-lg border bg-card p-4 md:p-6">
          <h2 className="mb-4 text-lg font-semibold">{t("buttons.variants")}</h2>
          <div className="flex flex-wrap gap-3">
            {variants.map((variant) => (
              <Button key={variant} variant={variant}>
                {variant}
              </Button>
            ))}
          </div>
        </section>

        <section className="rounded-lg border bg-card p-4 md:p-6">
          <h2 className="mb-4 text-lg font-semibold">{t("buttons.sizes")}</h2>
          <div className="flex flex-wrap items-center gap-3">
            {sizes.map((size) => (
              <Button key={size} size={size}>
                {size === "icon" ? "I" : size}
              </Button>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
