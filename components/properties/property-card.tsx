import Image from "next/image"
import { Bed, Bath, Maximize, TrendingUp, Pencil, Upload, Share2, ClipboardCheck, FileText, MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { formatCurrency } from "@/lib/format"
import type { Property, PropertyStatus } from "@/types"

const statusMap: Record<PropertyStatus, { label: string; variant: "success" | "warning" | "muted" | "default" }> = {
  available: { label: "Available", variant: "success" },
  reserved: { label: "Reserved", variant: "warning" },
  sold: { label: "Sold", variant: "muted" },
  rented: { label: "Rented", variant: "default" },
  draft: { label: "Draft", variant: "muted" },
}

export function PropertyCard({ property }: { property: Property }) {
  const status = statusMap[property.status]
  return (
    <Card className="flex flex-col overflow-hidden p-0">
      <div className="relative h-44 w-full">
        <Image
          src={property.image || "/placeholder.svg"}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
        <Badge variant={status.variant} className="absolute left-3 top-3 shadow-sm">
          {status.label}
        </Badge>
        <span className="absolute right-3 top-3 rounded-full bg-card/90 px-2 py-0.5 text-xs font-medium text-foreground shadow-sm">
          {property.id}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="truncate font-semibold">{property.title}</h3>
            <p className="mt-0.5 flex items-center gap-1 truncate text-sm text-muted-foreground">
              <MapPin className="size-3.5 shrink-0" />
              {property.address}, {property.city}
            </p>
          </div>
        </div>

        <div className="mt-3 flex items-end justify-between">
          <span className="text-xl font-semibold">{formatCurrency(property.price)}</span>
          <span className="flex items-center gap-1 text-sm font-medium text-success">
            <TrendingUp className="size-4" />
            {property.roi}% ROI
          </span>
        </div>

        <div className="mt-3 flex items-center gap-4 border-t border-border pt-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Bed className="size-4" /> {property.bedrooms}
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="size-4" /> {property.bathrooms}
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize className="size-4" /> {property.area} m²
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <Button variant="outline" size="sm">
            <Pencil className="size-3.5" /> Edit
          </Button>
          <Button variant="outline" size="sm">
            <Upload className="size-3.5" /> Publish
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="size-3.5" /> Share
          </Button>
          <Button variant="outline" size="sm">
            <ClipboardCheck className="size-3.5" /> Appraise
          </Button>
          <Button variant="secondary" size="sm">
            <FileText className="size-3.5" /> PDF
          </Button>
        </div>
      </div>
    </Card>
  )
}
