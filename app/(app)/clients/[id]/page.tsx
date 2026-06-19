import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Mail, Phone, Building2, Wallet, Calendar, Pencil } from "lucide-react"
import { PageHeader } from "@/components/layout/page-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StatTile } from "@/components/dashboard/stat-tile"
import { clients, properties, contracts } from "@/lib/mock-data"
import { formatCurrency, formatDate } from "@/lib/format"

export default async function ClientDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const client = clients.find((c) => c.id === id)
  if (!client) notFound()

  const clientContracts = contracts.filter((ct) => ct.client === client.name)
  const relatedProperties = properties.slice(0, 2)

  return (
    <div>
      <Link
        href="/clients"
        className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Back to clients
      </Link>

      <PageHeader title={client.name} description={`Client ${client.id} · joined ${formatDate(client.joinedAt)}`}>
        <Button variant="outline" size="sm">
          <Mail className="size-4" />
          Message
        </Button>
        <Button size="sm">
          <Pencil className="size-4" />
          Edit
        </Button>
      </PageHeader>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="flex flex-col gap-4 lg:col-span-1">
          <Card>
            <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
              <span className="flex size-20 items-center justify-center rounded-full bg-primary/10 text-2xl font-semibold text-primary">
                {client.name.split(" ").map((n) => n[0]).join("")}
              </span>
              <div>
                <h2 className="text-lg font-semibold">{client.name}</h2>
                <Badge variant="success" className="mt-1.5 capitalize">
                  {client.type}
                </Badge>
              </div>
              <div className="mt-2 flex w-full flex-col gap-2.5 text-sm">
                <span className="flex items-center gap-2.5 text-muted-foreground">
                  <Mail className="size-4" /> {client.email}
                </span>
                <span className="flex items-center gap-2.5 text-muted-foreground">
                  <Phone className="size-4" /> {client.phone}
                </span>
                <span className="flex items-center gap-2.5 text-muted-foreground">
                  <Calendar className="size-4" /> Joined {formatDate(client.joinedAt)}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-2">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <StatTile label="Properties" value={String(client.properties)} icon={Building2} />
            <StatTile label="Portfolio value" value={formatCurrency(client.totalValue)} icon={Wallet} />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Contracts</CardTitle>
            </CardHeader>
            <CardContent>
              {clientContracts.length === 0 ? (
                <p className="text-sm text-muted-foreground">No contracts on file yet.</p>
              ) : (
                <ul className="flex flex-col gap-3">
                  {clientContracts.map((ct) => (
                    <li key={ct.id} className="flex items-center justify-between rounded-lg border border-border p-3">
                      <div>
                        <p className="text-sm font-medium">{ct.property}</p>
                        <p className="text-xs text-muted-foreground capitalize">{ct.type} · {ct.id}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{formatCurrency(ct.value)}</p>
                        <Badge variant="success" className="mt-1 capitalize">{ct.status}</Badge>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Interested properties</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col gap-3">
                {relatedProperties.map((p) => (
                  <li key={p.id} className="flex items-center justify-between rounded-lg border border-border p-3">
                    <div>
                      <p className="text-sm font-medium">{p.title}</p>
                      <p className="text-xs text-muted-foreground">{p.address}, {p.city}</p>
                    </div>
                    <p className="text-sm font-medium">{formatCurrency(p.price)}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
