import { Plus, FileSignature, PenLine, FileCheck2, FileClock } from "lucide-react"
import { PageHeader } from "@/components/layout/page-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { StatTile } from "@/components/dashboard/stat-tile"
import { contracts } from "@/lib/mock-data"
import { formatCurrency, formatDate } from "@/lib/format"

const statusVariant = {
  draft: "muted",
  sent: "warning",
  signed: "default",
  completed: "success",
} as const

export default function ContractsPage() {
  const signed = contracts.filter((c) => c.status === "signed" || c.status === "completed").length
  const pending = contracts.filter((c) => c.status === "sent" || c.status === "draft").length
  const totalValue = contracts.reduce((s, c) => s + c.value, 0)

  return (
    <div>
      <PageHeader title="Contracts" description="Digital contracts, signatures and full history.">
        <Button size="sm">
          <Plus className="size-4" />
          New Contract
        </Button>
      </PageHeader>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatTile label="Signed & completed" value={String(signed)} icon={FileCheck2} />
        <StatTile label="Awaiting signature" value={String(pending)} icon={FileClock} />
        <StatTile label="Total contract value" value={formatCurrency(totalValue, true)} icon={FileSignature} />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Contract</TableHead>
            <TableHead className="hidden sm:table-cell">Client</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="text-right">Value</TableHead>
            <TableHead className="hidden md:table-cell">Status</TableHead>
            <TableHead className="hidden lg:table-cell">Created</TableHead>
            <TableHead className="w-10" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {contracts.map((c) => (
            <TableRow key={c.id}>
              <TableCell>
                <div className="flex flex-col">
                  <span className="font-medium">{c.property}</span>
                  <span className="text-xs text-muted-foreground">{c.id}</span>
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">{c.client}</TableCell>
              <TableCell>
                <Badge variant="outline" className="capitalize">{c.type}</Badge>
              </TableCell>
              <TableCell className="text-right font-medium tabular-nums">{formatCurrency(c.value)}</TableCell>
              <TableCell className="hidden md:table-cell">
                <Badge variant={statusVariant[c.status]} className="capitalize">{c.status}</Badge>
              </TableCell>
              <TableCell className="hidden lg:table-cell text-muted-foreground">{formatDate(c.createdAt)}</TableCell>
              <TableCell>
                <Button variant="ghost" size="icon-sm" aria-label="Sign contract">
                  <PenLine className="size-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
