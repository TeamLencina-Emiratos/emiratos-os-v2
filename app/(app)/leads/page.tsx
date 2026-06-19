"use client"

import { useState } from "react"
import { Plus, GripVertical } from "lucide-react"
import { PageHeader } from "@/components/layout/page-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { leads as initialLeads } from "@/lib/mock-data"
import { formatCurrency } from "@/lib/format"
import { cn } from "@/lib/utils"
import type { Lead, LeadStage } from "@/types"

const columns: { stage: LeadStage; label: string; accent: string }[] = [
  { stage: "new", label: "New Lead", accent: "bg-chart-4" },
  { stage: "contacted", label: "Contacted", accent: "bg-chart-5" },
  { stage: "visit", label: "Visit Scheduled", accent: "bg-chart-3" },
  { stage: "offer", label: "Offer", accent: "bg-chart-2" },
  { stage: "reserved", label: "Reserved", accent: "bg-warning" },
  { stage: "closed", label: "Closed", accent: "bg-primary" },
]

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>(initialLeads)
  const [dragId, setDragId] = useState<string | null>(null)
  const [overStage, setOverStage] = useState<LeadStage | null>(null)

  function moveTo(stage: LeadStage) {
    if (!dragId) return
    setLeads((prev) => prev.map((l) => (l.id === dragId ? { ...l, stage } : l)))
    setDragId(null)
    setOverStage(null)
  }

  return (
    <div>
      <PageHeader title="Leads" description="Drag leads across the pipeline to update their stage.">
        <Button size="sm">
          <Plus className="size-4" />
          New Lead
        </Button>
      </PageHeader>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {columns.map((col) => {
          const items = leads.filter((l) => l.stage === col.stage)
          return (
            <div
              key={col.stage}
              onDragOver={(e) => {
                e.preventDefault()
                setOverStage(col.stage)
              }}
              onDrop={() => moveTo(col.stage)}
              className={cn(
                "flex w-72 shrink-0 flex-col rounded-xl border bg-muted/40 transition-colors",
                overStage === col.stage ? "border-primary bg-primary/5" : "border-border",
              )}
            >
              <div className="flex items-center justify-between gap-2 border-b border-border px-3 py-3">
                <div className="flex items-center gap-2">
                  <span className={cn("size-2.5 rounded-full", col.accent)} />
                  <span className="text-sm font-medium">{col.label}</span>
                </div>
                <Badge variant="muted">{items.length}</Badge>
              </div>

              <div className="flex flex-1 flex-col gap-2.5 p-3">
                {items.map((lead) => (
                  <div
                    key={lead.id}
                    draggable
                    onDragStart={() => setDragId(lead.id)}
                    onDragEnd={() => {
                      setDragId(null)
                      setOverStage(null)
                    }}
                    className={cn(
                      "group cursor-grab rounded-lg border border-border bg-card p-3 shadow-sm transition-all active:cursor-grabbing",
                      dragId === lead.id && "opacity-50",
                    )}
                  >
                    <div className="flex items-start justify-between gap-1">
                      <span className="text-sm font-semibold">{lead.name}</span>
                      <GripVertical className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                    <p className="mt-0.5 text-xs text-muted-foreground">{lead.interest}</p>
                    <div className="mt-2.5 flex items-center justify-between">
                      <span className="text-sm font-medium text-primary">{formatCurrency(lead.budget, true)}</span>
                      <Badge variant="outline">{lead.source}</Badge>
                    </div>
                    <div className="mt-2.5 flex items-center gap-2 border-t border-border pt-2.5">
                      <span className="flex size-6 items-center justify-center rounded-full bg-secondary text-[10px] font-semibold text-secondary-foreground">
                        {lead.agent
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                      <span className="truncate text-xs text-muted-foreground">{lead.agent}</span>
                    </div>
                  </div>
                ))}
                {items.length === 0 && (
                  <div className="rounded-lg border border-dashed border-border py-6 text-center text-xs text-muted-foreground">
                    Drop here
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
