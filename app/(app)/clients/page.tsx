import Link from "next/link"
import { Plus, ChevronRight } from "lucide-react"
import { PageHeader } from "@/components/layout/page-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { clients } from "@/lib/mock-data"
import { formatCurrency, formatDate } from "@/lib/format"

const typeVariant = {
  buyer: "default",
  seller: "warning",
  investor: "success",
  tenant: "secondary",
} as const

export default function ClientsPage() {
  return (
    <div>
      <PageHeader title="Clients" description={`${clients.length} clients in your database`}>
        <Button size="sm">
          <Plus className="size-4" />
          Add Client
        </Button>
      </PageHeader>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Client</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="hidden md:table-cell">Status</TableHead>
            <TableHead className="hidden sm:table-cell">Properties</TableHead>
            <TableHead className="text-right">Portfolio value</TableHead>
            <TableHead className="hidden lg:table-cell">Joined</TableHead>
            <TableHead className="w-10" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients.map((c) => (
            <TableRow key={c.id}>
              <TableCell>
                <Link href={`/clients/${c.id}`} className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-secondary-foreground">
                    {c.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                  <span className="flex flex-col">
                    <span className="font-medium">{c.name}</span>
                    <span className="text-xs text-muted-foreground">{c.email}</span>
                  </span>
                </Link>
              </TableCell>
              <TableCell>
                <Badge variant={typeVariant[c.type]} className="capitalize">
                  {c.type}
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Badge variant={c.status === "active" ? "success" : "muted"} className="capitalize">
                  {c.status}
                </Badge>
              </TableCell>
              <TableCell className="hidden sm:table-cell tabular-nums">{c.properties}</TableCell>
              <TableCell className="text-right font-medium tabular-nums">{formatCurrency(c.totalValue)}</TableCell>
              <TableCell className="hidden lg:table-cell text-muted-foreground">{formatDate(c.joinedAt)}</TableCell>
              <TableCell>
                <Link href={`/clients/${c.id}`} className="flex justify-end text-muted-foreground hover:text-foreground">
                  <ChevronRight className="size-4" />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
