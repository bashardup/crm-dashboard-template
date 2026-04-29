import { ActiveTickets, CompletedRequest, Icon01 } from "@/components/lottie/registry"
import { ActivityCard } from "@/components/ui/activity-card"
import { CardWidget } from "@/components/ui/card-widget"
import { UpcomingAppointments } from "@/components/ui/upcoming-appointments"
import { useTranslation } from "react-i18next"

const cardItems = [
  { titleKey: "cards.completedOrders", description: "124", lottieId: CompletedRequest },
  { titleKey: "cards.completedOrders", description: "124", lottieId: ActiveTickets },
  { titleKey: "cards.completedOrders", description: "45",  lottieId: Icon01 },
]

export default function DashboardPage() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col flex-1 w-full">
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div>
          <h1 className="text-[40px] font-bold font-mono tracking-tight  text-secondary-600 dark:text-success-300 text-4xl">{t("cards.title")}</h1>
          <p className=" text-sm md:text-2xl text-gray-500">{t("cards.subtitle")}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {cardItems.map((item, index) => (
            <ActivityCard
              key={`activity-${index}`}
              title={t(item.titleKey)}
              description={item.description}
              lottieId={item.lottieId}
            />
          ))}
        </div>


        <div className="grid gap-4 md:grid-cols-2 ">
          {cardItems.map((item, index) => (
            <CardWidget
              key={`widget-${index}`}
              title={t(item.titleKey)}
              icon="/img/icon-channel.svg"
            >
             sdf
            </CardWidget>
          ))}
          <UpcomingAppointments />
        </div>
      </main>
    </div>
  )
}

