import { Download, Plus } from "lucide-react"
import { PageHeader } from "@/components/layout/page-header"
import { KpiCard } from "@/components/dashboard/kpi-card"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  SalesAreaChart,
  AcquisitionBarChart,
  ConversionFunnel,
  CommissionsBarChart,
} from "@/components/charts"
import {
  kpis,
  salesEvolution,
  propertyAcquisition,
  leadConversion,
  advisorCommissions,
} from "@/lib/mock-data"

export default function DashboardPage() {
  return (
    <div>
      <PageHeader title="Dashboard" description="Welcome back, Lucía. Here is your agency performance overview.">
        <Button variant="outline" size="sm">
          <Download className="size-4" />
          Export
        </Button>
        <Button size="sm">
          <Plus className="size-4" />
          New Deal
        </Button>
      </PageHeader>

      {/* KPI cards */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
        {kpis.map((kpi) => (
          <KpiCard key={kpi.label} kpi={kpi} />
        ))}
      </div>

      {/* Charts */}
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <div className="flex flex-col gap-1">
              <CardTitle>Sales Evolution</CardTitle>
              <CardDescription>Monthly closed volume vs. target (€M)</CardDescription>
            </div>
            <Badge variant="success">+12.4%</Badge>
          </CardHeader>
          <CardContent>
            <SalesAreaChart data={salesEvolution} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <div className="flex flex-col gap-1">
              <CardTitle>Property Acquisition</CardTitle>
              <CardDescription>Listed vs. acquired units</CardDescription>
            </div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-sm bg-chart-3" /> Listed
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-sm bg-chart-1" /> Acquired
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <AcquisitionBarChart data={propertyAcquisition} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lead Conversion Funnel</CardTitle>
            <CardDescription>Pipeline distribution this quarter</CardDescription>
          </CardHeader>
          <CardContent>
            <ConversionFunnel data={leadConversion} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Advisor Commissions</CardTitle>
            <CardDescription>Generated commissions this month</CardDescription>
          </CardHeader>
          <CardContent>
            <CommissionsBarChart data={advisorCommissions} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
