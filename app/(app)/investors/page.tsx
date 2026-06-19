import { Plus, Wallet, TrendingUp, Layers } from "lucide-react"
import { PageHeader } from "@/components/layout/page-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { StatTile } from "@/components/dashboard/stat-tile"
import { investors, payments } from "@/lib/mock-data"
import { formatCurrency, formatDate } from "@/lib/format"

export default function InvestorsPage() {
  const totalCapital = investors.reduce((s, i) => s + i.capitalInvested, 0)
  const totalRoi = investors.reduce((s, i) => s + i.roiAccumulated, 0)
  const activeProjects = investors.reduce((s, i) => s + i.activeProjects, 0)

  return (
    <div>
      <PageHeader title="Investors" description="Capital, returns and payment history across your investor base.">
        <Button size="sm">
          <Plus className="size-4" />
          Add Investor
        </Button>
      </PageHeader>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatTile label="Capital invested" value={formatCurrency(totalCapital, true)} icon={Wallet} />
        <StatTile label="ROI accumulated" value={formatCurrency(totalRoi, true)} icon={TrendingUp} />
        <StatTile label="Active projects" value={String(activeProjects)} icon={Layers} />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Investor portfolio</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {investors.map((inv) => (
              <div key={inv.id} className="rounded-lg border border-border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {inv.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                    <div>
                      <p className="text-sm font-medium">{inv.name}</p>
                      <p className="text-xs text-muted-foreground">Since {formatDate(inv.joinedAt)}</p>
                    </div>
                  </div>
                  <Badge variant="success">{inv.activeProjects} projects</Badge>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-3 border-t border-border pt-3">
                  <div>
                    <p className="text-xs text-muted-foreground">Invested</p>
                    <p className="font-semibold">{formatCurrency(inv.capitalInvested, true)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">ROI accumulated</p>
                    <p className="font-semibold text-success">{formatCurrency(inv.roiAccumulated, true)}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment history</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Investor</TableHead>
                  <TableHead className="hidden sm:table-cell">Project</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payments.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">{p.investor}</span>
                        <span className="text-xs text-muted-foreground">{formatDate(p.date)}</span>
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell text-muted-foreground">{p.project}</TableCell>
                    <TableCell className="text-right font-medium tabular-nums">{formatCurrency(p.amount)}</TableCell>
                    <TableCell>
                      <Badge variant={p.status === "paid" ? "success" : "warning"} className="capitalize">
                        {p.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
