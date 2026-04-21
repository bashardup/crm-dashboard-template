import { CardWidget } from "@/components/ui/card-widget"
import UAEHexbinMap from "@/components/ui/uae-hex"
import UAEMap from "@/components/ui/uae-map"
import { useTranslation } from "react-i18next"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
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

const radarData = [
  { metric: "Speed", value: 82 },
  { metric: "Reliability", value: 91 },
  { metric: "Security", value: 78 },
  { metric: "Scalability", value: 65 },
  { metric: "Usability", value: 88 },
  { metric: "Efficiency", value: 74 },
]


const radarsData = [
  { metric: "Response Time", current: 6, previous: 5 },
  { metric: "Ease of Use", current: 8, previous: 7.5 },
  { metric: "Satisfaction", current: 8.5, previous: 9.5 },
  { metric: "Complaint Handling", current: 7, previous: 6.5 }
];

export const kioskData = [
  { lat: 25.2048, lng: 55.2708, usage: 120 },
  { lat: 25.1972, lng: 55.2744, usage: 80 },
  { lat: 25.2040, lng: 55.2715, usage: 150 },
  { lat: 25.2100, lng: 55.2800, usage: 60 },

  { lat: 24.4539, lng: 54.3773, usage: 90 },
  { lat: 24.4600, lng: 54.3700, usage: 110 },
  { lat: 24.4700, lng: 54.3900, usage: 70 },

  { lat: 25.3463, lng: 55.4209, usage: 50 },
  { lat: 25.3500, lng: 55.4300, usage: 40 },

  { lat: 25.4052, lng: 55.5136, usage: 30 },

  { lat: 25.8007, lng: 55.9762, usage: 25 },

  { lat: 25.1288, lng: 56.3265, usage: 20 }
];


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
          <CardWidget title={t("charts.monthlyTraffic")} icon="/img/icon-channel.svg">
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

          <CardWidget title={t("charts.revenueSplit")} icon="/img/icon-channel.svg">
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

          <CardWidget title={t("charts.conversionTrend")} icon="/img/icon-channel.svg">
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

          <CardWidget title={t("charts.performanceRadar")} icon="/img/icon-channel.svg">


            <div className="min-h-[400px] w-full">
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="75%">
                  <PolarGrid strokeDasharray="4 4" />
                  <PolarAngleAxis dataKey="metric" tick={{ fontSize: 12, fill: "currentColor" }} />
                  <Radar
                    dataKey="value"
                    stroke="#16a34a"
                    fill="#16a34a"
                    fillOpacity={0.25}
                    strokeWidth={2}
                    dot={{ r: 3, fill: "#15803d" }}
                  />
                  <Tooltip formatter={(v: number) => [v, "Score"]} contentStyle={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px"
                  }} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </CardWidget>


          <CardWidget title={t("charts.performanceRadar")} icon="/img/icon-channel.svg">
            <div className="flex justify-center mt-4 sm:mt-0 sm:justify-center mx-auto items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center">
                  <div className="size-2.5 border-2 rounded-full border-[#1EA663] "></div>
                  <div className="h-[2px] w-[15px] bg-[#1EA663]"></div>
                </div>
                <span className="text-sm text-[currentColor]">Current</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative flex items-center">
                  <div className="size-2.5 border-2 rounded-full border-[#05BFD9]"></div>
                  <div className="h-[2px] w-[15px] bg-[#05BFD9]"></div>
                </div>
                <span className="text-sm text-[currentColor]">Previous</span>
              </div>

            </div>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarsData} cx="50%" cy="50%" outerRadius="70%">

                  <PolarGrid stroke="#e5e7eb" strokeDasharray="3 3" />

                  <PolarAngleAxis
                    dataKey="metric"
                    tick={{ fontSize: 12, fill: "currentColor" }}
                  />

                  <Radar
                    name="Current"
                    dataKey="current"
                    stroke="#1EA663"
                    fill="#1EA663"
                    fillOpacity={0.25}
                    strokeWidth={2}
                    dot={{ r: 4, fill: "#1EA663" }}
                  />

                  <Radar
                    name="Previous"
                    dataKey="previous"
                    stroke="#05BFD9"
                    fill="#05BFD9"
                    fillOpacity={0.2}
                    strokeWidth={2}
                    dot={{ r: 4, fill: "#1d4ed8" }}
                  />

                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#ffffff",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px"
                    }}
                    formatter={(value: number) => [`${(value).toFixed(0)}`, "Score"]}
                  />

                  {/* <Legend wrapperStyle={{ fontSize: "12px" }} /> */}

                </RadarChart>
              </ResponsiveContainer>

            </div>
          </CardWidget>


          <CardWidget title={t("charts.performanceRadar")} icon="/img/icon-channel.svg">
            <div className=" w-full">
              <UAEHexbinMap />
            </div>
          </CardWidget>
          
          <CardWidget title={t("charts.performanceRadar")} icon="/img/icon-channel.svg">
            <div className=" w-full">
              <UAEMap />
            </div>
          </CardWidget>
        </div>
      </main>
    </div>
  )
}
