import { Download, FileBarChart, TrendingUp } from "lucide-react"
import { PageHeader } from "@/components/layout/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SalesAreaChart, CommissionsBarChart, ConversionFunnel } from "@/components/charts"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { salesEvolution, advisorCommissions, leadConversion } from "@/lib/mock-data"
import { formatCurrency } from "@/lib/format"

const savedReports = [
  { name: "Monthly Sales Summary — July", type: "Sales", date: "2026-07-01", value: "€4.82M" },
  { name: "Advisor Commission Breakdown", type: "Commissions", date: "2026-07-01", value: "€142,600" },
  { name: "Lead Conversion Funnel Q2", type: "CRM", date: "2026-06-30", value: "24.6%" },
  { name: "Investor Returns Statement", type: "Investors", date: "2026-06-30", value: "€1.15M" },
  { name: "Tokenization Performance", type: "Token", date: "2026-06-30", value: "+22%" },
]

export default function ReportsPage() {
  return (
    <div>
      <PageHeader title="Reports" description="Performance analytics across sales, CRM and commissions.">
        <Button variant="outline" className="gap-2">
          <Download className="size-4" />
          Export all
        </Button>
      </PageHeader>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Sales vs Target</CardTitle>
          </CardHeader>
          <CardContent>
            <SalesAreaChart data={salesEvolution} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Conversion Funnel</CardTitle>
          </CardHeader>
          <CardContent className="pt-2">
            <ConversionFunnel data={leadConversion} />
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Commissions by Advisor</CardTitle>
          </CardHeader>
          <CardContent>
            <CommissionsBarChart data={advisorCommissions} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>Saved Reports</CardTitle>
            <Badge variant="muted">
              <FileBarChart className="size-3" />
              {savedReports.length}
            </Badge>
          </CardHeader>
          <CardContent className="px-0 pb-0">
            <Table className="border-0">
              <TableHeader>
                <TableRow>
                  <TableHead>Report</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead className="text-right">Result</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {savedReports.map((r) => (
                  <TableRow key={r.name}>
                    <TableCell className="font-medium">{r.name}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{r.type}</Badge>
                    </TableCell>
                    <TableCell className="text-right font-medium tabular-nums">{r.value}</TableCell>
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
