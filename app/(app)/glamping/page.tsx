import Image from "next/image"
import { Hammer, Percent, TentTree, TrendingUp } from "lucide-react"
import { PageHeader } from "@/components/layout/page-header"
import { StatTile } from "@/components/dashboard/stat-tile"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { OccupancyAreaChart } from "@/components/charts"
import { glampingProjects, occupancyData } from "@/lib/mock-data"
import { formatCurrency } from "@/lib/format"

export default function GlampingPage() {
  const totalRaised = glampingProjects.reduce((s, p) => s + p.raisedCapital, 0)
  const totalTarget = glampingProjects.reduce((s, p) => s + p.targetCapital, 0)
  const avgOccupancy = Math.round(
    glampingProjects.reduce((s, p) => s + p.occupancy, 0) / glampingProjects.length,
  )

  return (
    <div>
      <PageHeader
        title="Glamping"
        description="Eco-luxury hospitality developments, construction progress and yields."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatTile label="Capital Raised" value={formatCurrency(totalRaised, true)} icon={TrendingUp} />
        <StatTile
          label="Funding Progress"
          value={`${Math.round((totalRaised / totalTarget) * 100)}%`}
          icon={Hammer}
        />
        <StatTile label="Avg. Occupancy" value={`${avgOccupancy}%`} icon={Percent} />
        <StatTile label="Active Resorts" value={String(glampingProjects.length)} icon={TentTree} />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {glampingProjects.map((p) => (
          <Card key={p.id} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src={p.image || "/placeholder.svg"}
                alt={`${p.name} in ${p.location}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <Badge className="absolute left-3 top-3 bg-card/90 text-foreground backdrop-blur">
                {p.location}
              </Badge>
            </div>
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle>{p.name}</CardTitle>
              <Badge variant="success">
                <TrendingUp className="size-3" />
                {p.monthlyYield}% / mo
              </Badge>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Construction</span>
                  <span className="tabular-nums">{p.construction}%</span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-chart-3" style={{ width: `${p.construction}%` }} />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Capital raised</span>
                  <span className="tabular-nums">
                    {formatCurrency(p.raisedCapital, true)} / {formatCurrency(p.targetCapital, true)}
                  </span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${Math.round((p.raisedCapital / p.targetCapital) * 100)}%` }}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-border pt-3 text-sm">
                <span className="text-muted-foreground">Current occupancy</span>
                <span className="font-medium">{p.occupancy}%</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Occupancy Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <OccupancyAreaChart data={occupancyData} />
        </CardContent>
      </Card>
    </div>
  )
}
