"use client"

import { useState } from "react"
import { Plus, LayoutGrid } from "lucide-react"
import { PageHeader } from "@/components/layout/page-header"
import { PropertyCard } from "@/components/properties/property-card"
import { Button } from "@/components/ui/button"
import { properties } from "@/lib/mock-data"
import { cn } from "@/lib/utils"
import type { PropertyStatus } from "@/types"

const filters: { label: string; value: PropertyStatus | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Available", value: "available" },
  { label: "Reserved", value: "reserved" },
  { label: "Sold", value: "sold" },
  { label: "Rented", value: "rented" },
]

export default function PropertiesPage() {
  const [active, setActive] = useState<PropertyStatus | "all">("all")
  const filtered = active === "all" ? properties : properties.filter((p) => p.status === active)

  return (
    <div>
      <PageHeader title="Properties" description={`${properties.length} properties in your portfolio`}>
        <Button size="sm">
          <Plus className="size-4" />
          Add Property
        </Button>
      </PageHeader>

      <div className="mb-5 flex flex-wrap items-center gap-2">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setActive(f.value)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
              active === f.value
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:bg-muted",
            )}
          >
            {f.label}
          </button>
        ))}
        <span className="ml-auto flex items-center gap-1.5 text-sm text-muted-foreground">
          <LayoutGrid className="size-4" />
          {filtered.length} shown
        </span>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border py-16 text-center text-sm text-muted-foreground">
          No properties match this filter.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      )}
    </div>
  )
}
