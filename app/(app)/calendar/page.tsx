import { Plus, MapPin, Clock, Home, Users, CheckSquare } from "lucide-react"
import { PageHeader } from "@/components/layout/page-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { events } from "@/lib/mock-data"
import { formatDate } from "@/lib/format"
import type { CalendarEvent } from "@/types"

const typeMeta = {
  visit: { label: "Visit", variant: "default" as const, icon: Home },
  meeting: { label: "Meeting", variant: "success" as const, icon: Users },
  task: { label: "Task", variant: "warning" as const, icon: CheckSquare },
}

export default function CalendarPage() {
  const grouped = events.reduce<Record<string, CalendarEvent[]>>((acc, e) => {
    ;(acc[e.date] ??= []).push(e)
    return acc
  }, {})
  const dates = Object.keys(grouped).sort()

  const counts = {
    visit: events.filter((e) => e.type === "visit").length,
    meeting: events.filter((e) => e.type === "meeting").length,
    task: events.filter((e) => e.type === "task").length,
  }

  return (
    <div>
      <PageHeader title="Calendar" description="Your upcoming visits, meetings and tasks.">
        <Button size="sm">
          <Plus className="size-4" />
          New Event
        </Button>
      </PageHeader>

      <div className="mb-6 flex flex-wrap gap-3">
        {(["visit", "meeting", "task"] as const).map((t) => {
          const meta = typeMeta[t]
          const Icon = meta.icon
          return (
            <Card key={t} className="flex items-center gap-3 px-4 py-3">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-4" />
              </span>
              <div>
                <p className="text-sm font-semibold">{counts[t]}</p>
                <p className="text-xs text-muted-foreground">{meta.label}s</p>
              </div>
            </Card>
          )
        })}
      </div>

      <div className="flex flex-col gap-5">
        {dates.map((date) => (
          <div key={date}>
            <h3 className="mb-2.5 text-sm font-semibold text-muted-foreground">{formatDate(date)}</h3>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
              {grouped[date].map((e) => {
                const meta = typeMeta[e.type]
                return (
                  <Card key={e.id}>
                    <CardHeader className="flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm">{e.title}</CardTitle>
                      <Badge variant={meta.variant}>{meta.label}</Badge>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-1.5 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Clock className="size-3.5" /> {e.time}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="size-3.5" /> {e.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <Users className="size-3.5" /> {e.with}
                      </span>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
