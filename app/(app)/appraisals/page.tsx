import { Plus, ClipboardList, Clock, CheckCircle2, BarChart4 } from "lucide-react"
import { PageHeader } from "@/components/layout/page-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StatTile } from "@/components/dashboard/stat-tile"
import { appraisals } from "@/lib/mock-data"
import { formatCurrency, formatDate } from "@/lib/format"

const statusVariant = { pending: "warning", "in-progress": "default", completed: "success" } as const

export default function AppraisalsPage() {
  const pending = appraisals.filter((a) => a.status !== "completed").length
  const totalValue = appraisals.reduce((s, a) => s + a.estimatedValue, 0)
  const completed = appraisals.filter((a) => a.status === "completed").length

  return (
    <div>
      <PageHeader title="Appraisals" description="Track valuation requests and comparable market data.">
        <Button size="sm">
          <Plus className="size-4" />
          New Appraisal
        </Button>
      </PageHeader>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatTile label="Pending appraisals" value={String(pending)} icon={Clock} />
        <StatTile label="Total estimated value" value={formatCurrency(totalValue, true)} icon={BarChart4} />
        <StatTile label="Completed" value={String(completed)} icon={CheckCircle2} />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {appraisals.map((a) => (
          <Card key={a.id}>
            <CardHeader className="flex-row items-start justify-between">
              <div className="flex flex-col gap-1">
                <CardTitle className="flex items-center gap-2">
                  <ClipboardList className="size-4 text-primary" />
                  {a.property}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{a.address}</p>
              </div>
              <Badge variant={statusVariant[a.status]} className="capitalize">
                {a.status.replace("-", " ")}
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 rounded-lg bg-muted/50 p-4">
                <div>
                  <p className="text-xs text-muted-foreground">Estimated value</p>
                  <p className="text-lg font-semibold text-primary">{formatCurrency(a.estimatedValue)}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Comparables</p>
                  <p className="text-lg font-semibold">{a.comparables} listings</p>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
                <span>Requested by {a.requestedBy}</span>
                <span>{formatDate(a.requestedAt)}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
