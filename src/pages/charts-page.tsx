import { CardWidget } from "@/components/ui/card-widget"
import { useTranslation } from "react-i18next"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const trafficData = [
  { month: "Jan", visitors: 2200 },
  { month: "Feb", visitors: 2800 },
  { month: "Mar", visitors: 3100 },
  { month: "Apr", visitors: 2900 },
  { month: "May", visitors: 3600 },
  { month: "Jun", visitors: 4020 },
]

const revenueData = [
  { month: "Jan", online: 24, retail: 18 },
  { month: "Feb", online: 28, retail: 20 },
  { month: "Mar", online: 32, retail: 25 },
  { month: "Apr", online: 35, retail: 27 },
  { month: "May", online: 31, retail: 26 },
  { month: "Jun", online: 38, retail: 30 },
]

const conversionData = [
  { week: "W1", rate: 2.4 },
  { week: "W2", rate: 2.8 },
  { week: "W3", rate: 3.1 },
  { week: "W4", rate: 3.5 },
  { week: "W5", rate: 3.2 },
  { week: "W6", rate: 3.8 },
]

export default function ChartsPage() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col flex-1 w-full">
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div>
          <h1 className="text-[40px] font-bold font-mono tracking-tight text-secondary-600 dark:text-success-300 text-4xl">
            {t("charts.title")}
          </h1>
          <p className="text-sm md:text-2xl text-gray-500">{t("charts.subtitle")}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <CardWidget title={t("charts.monthlyTraffic")} icon="/icons/steps.svg">
            <div className="min-h-[260px] w-full">
              <ResponsiveContainer width="100%" height={260}>
                <AreaChart data={trafficData}>
                  <defs>
                    <linearGradient id="trafficGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#16a34a" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#16a34a" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} strokeDasharray="4 4" />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="visitors"
                    stroke="#15803d"
                    fill="url(#trafficGradient)"
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardWidget>

          <CardWidget title={t("charts.revenueSplit")} icon="/icons/steps.svg">
            <div className="min-h-[260px] w-full">
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={revenueData} barGap={8}>
                  <CartesianGrid vertical={false} strokeDasharray="4 4" />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} />
                  <Tooltip />
                  <Bar dataKey="online" fill="#16a34a" radius={6} />
                  <Bar dataKey="retail" fill="#86efac" radius={6} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardWidget>

          <CardWidget title={t("charts.conversionTrend")} icon="/icons/steps.svg">
            <div className="min-h-[260px] w-full">
              <ResponsiveContainer width="100%" height={260}>
                <LineChart data={conversionData}>
                  <CartesianGrid vertical={false} strokeDasharray="4 4" />
                  <XAxis dataKey="week" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="rate"
                    stroke="#22c55e"
                    strokeWidth={3}
                    dot={{ fill: "#15803d", r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardWidget>
        </div>
      </main>
    </div>
  )
}
