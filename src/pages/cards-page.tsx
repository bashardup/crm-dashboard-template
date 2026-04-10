import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const cardItems = [
  { title: "Starter", description: "Good for personal projects", price: "$9/mo" },
  { title: "Pro", description: "For growing teams and products", price: "$29/mo" },
  { title: "Enterprise", description: "Advanced controls and support", price: "Contact us" },
]

export default function CardsPage() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Cards</h1>
          <p className="text-sm text-muted-foreground">A dedicated route to preview card layouts.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cardItems.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{item.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
