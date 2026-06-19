import type { LucideIcon } from "lucide-react"
import { Card } from "@/components/ui/card"

export function StatTile({
  label,
  value,
  icon: Icon,
  hint,
}: {
  label: string
  value: string
  icon?: LucideIcon
  hint?: string
}) {
  return (
    <Card className="flex items-center gap-4 p-5">
      {Icon && (
        <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="size-5" />
        </div>
      )}
      <div className="min-w-0">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="mt-0.5 truncate text-xl font-semibold tracking-tight">{value}</p>
        {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
      </div>
    </Card>
  )
}
