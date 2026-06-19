import { Coins, TrendingUp, Users, Wallet } from "lucide-react"
import { PageHeader } from "@/components/layout/page-header"
import { StatTile } from "@/components/dashboard/stat-tile"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MiniLineChart } from "@/components/charts"
import { tokenProjects, tokenPerformance } from "@/lib/mock-data"
import { formatCurrency, formatNumber } from "@/lib/format"

const statusVariant = {
  active: "success",
  funding: "warning",
  closed: "muted",
} as const

export default function TokenPage() {
  const totalRaised = tokenProjects.reduce((s, p) => s + p.soldTokens * p.tokenPrice, 0)
  const totalInvestors = tokenProjects.reduce((s, p) => s + p.investors, 0)
  const avgRoi = (tokenProjects.reduce((s, p) => s + p.roi, 0) / tokenProjects.length).toFixed(1)

  return (
    <div>
      <PageHeader
        title="Emiratos Token"
        description="Tokenized real estate projects, capital raised and token performance."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatTile label="Capital Raised" value={formatCurrency(totalRaised, true)} icon={Wallet} />
        <StatTile label="Token Holders" value={formatNumber(totalInvestors)} icon={Users} />
        <StatTile label="Average ROI" value={`${avgRoi}%`} icon={TrendingUp} />
        <StatTile label="Active Projects" value={String(tokenProjects.length)} icon={Coins} />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Token Value Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <MiniLineChart data={tokenPerformance} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Index</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Current index value</p>
              <p className="text-3xl font-semibold tracking-tight">122.0</p>
              <Badge variant="success" className="mt-2">
                <TrendingUp className="size-3" />
                +22% YTD
              </Badge>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The Emiratos Token index tracks the blended value of all tokenized assets under management,
              rebalanced monthly across active and funding projects.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tokenProjects.map((p) => {
          const pct = Math.round((p.soldTokens / p.totalTokens) * 100)
          return (
            <Card key={p.id}>
              <CardHeader className="flex-row items-center justify-between">
                <CardTitle>{p.name}</CardTitle>
                <Badge variant={statusVariant[p.status]} className="capitalize">
                  {p.status}
                </Badge>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-semibold tracking-tight text-primary">{p.roi}%</span>
                  <span className="text-sm text-muted-foreground">{formatCurrency(p.tokenPrice)} / token</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{pct}% sold</span>
                    <span className="tabular-nums">
                      {formatNumber(p.soldTokens)} / {formatNumber(p.totalTokens)}
                    </span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-border pt-3 text-sm">
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <Users className="size-4" />
                    {formatNumber(p.investors)} holders
                  </span>
                  <span className="font-medium">{formatCurrency(p.soldTokens * p.tokenPrice, true)}</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
