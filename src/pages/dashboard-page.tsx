import { ActiveTickets, CompletedRequest, Icon01 } from "@/components/lottie/registry"
import { ActivityCard } from "@/components/ui/activity-card"
import { CardWidget } from "@/components/ui/card-widget"
import { UpcomingAppointments } from "@/components/ui/upcoming-appointments"
import { Walkthrough, useWalkthrough, type WalkthroughStep } from "@/components/ui/walkthrough"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

const cardItems = [
  { titleKey: "cards.completedOrders", description: "124", lottieId: CompletedRequest },
  { titleKey: "cards.completedOrders", description: "124", lottieId: ActiveTickets },
  { titleKey: "cards.completedOrders", description: "45",  lottieId: Icon01 },
]

const steps: WalkthroughStep[] = [
  {
    target: "[data-sidebar]",
    title: "Navigation",
    description: "Use the sidebar to navigate between sections of the dashboard.",
    icon: <div className="size-9 rounded-xl bg-primary flex items-center justify-center text-white font-mono font-bold text-sm">01</div>,
    placement: "right",
  },
  {
    target: "[data-walkthrough='stats']",
    title: "Stats Overview",
    description: "These cards show real-time stats: completed orders, active tickets, and more.",
    icon: <div className="size-9 rounded-xl bg-primary flex items-center justify-center text-white font-mono font-bold text-sm">02</div>,
    placement: "bottom",
  },
  {
    target: "[data-walkthrough='widgets']",
    title: "Widgets",
    description: "Each widget gives a focused view of a specific data stream or service.",
    icon: <div className="size-9 rounded-xl bg-primary flex items-center justify-center text-white font-mono font-bold text-sm">03</div>,
    placement: "top",
  },
  {
    target: "[data-walkthrough='appointments']",
    title: "Upcoming Appointments",
    description: "Track your scheduled appointments. Switch between Today, Tomorrow, and This Week.",
    icon: <div className="size-9 rounded-xl bg-primary flex items-center justify-center text-white font-mono font-bold text-sm">04</div>,
    placement: "top",
  },
  {
    title: "You're all set",
    description: "Explore the dashboard at your own pace. Start a service or check your requests anytime.",
    icon: <div className="size-9 rounded-xl bg-primary flex items-center justify-center text-white font-mono font-bold text-sm">✓</div>,
  },
]

export default function DashboardPage() {
  const { t } = useTranslation()
  const tour = useWalkthrough()

  return (
    <div className="flex flex-col flex-1 w-full">
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-[40px] font-bold font-mono tracking-tight text-secondary-600 dark:text-success-300 text-4xl">{t("cards.title")}</h1>
            <p className="text-sm md:text-2xl text-gray-500">{t("cards.subtitle")}</p>
          </div>
          <Button variant="secondary" size="sm" className="gap-2 mt-2 shrink-0" onClick={tour.start}>
            <Sparkles className="size-4" />
            Take a tour
          </Button>
        </div>

        <div data-walkthrough="stats" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {cardItems.map((item, index) => (
            <ActivityCard
              key={`activity-${index}`}
              title={t(item.titleKey)}
              description={item.description}
              lottieId={item.lottieId}
            />
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div data-walkthrough="widgets" className="contents">
            {cardItems.map((item, index) => (
              <CardWidget
                key={`widget-${index}`}
                title={t(item.titleKey)}
                icon="/img/icon-channel.svg"
              >
                sdf
              </CardWidget>
            ))}
          </div>
          <div data-walkthrough="appointments">
            <UpcomingAppointments />
          </div>
        </div>
      </main>

      <Walkthrough steps={steps} open={tour.open} onClose={tour.close} />
    </div>
  )
}
