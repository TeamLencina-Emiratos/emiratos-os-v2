import { ArrowDownRight, ArrowUpRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { KpiData } from "@/types"

export function KpiCard({ kpi }: { kpi: KpiData }) {
  const positive = kpi.trend === "up"
  return (
    <Card className="p-5">
      <p className="text-sm text-muted-foreground">{kpi.label}</p>
      <p className="mt-2 text-2xl font-semibold tracking-tight">{kpi.value}</p>
      <div className="mt-2 flex items-center gap-1.5">
        <span
          className={cn(
            "inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-xs font-medium",
            positive ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive",
          )}
        >
          {positive ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />}
          {Math.abs(kpi.change)}%
        </span>
        <span className="text-xs text-muted-foreground">vs last month</span>
      </div>
    </Card>
  )
}
