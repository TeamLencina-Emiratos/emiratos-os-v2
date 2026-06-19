"use client"

import { useState } from "react"
import { Bot, FileText, MessageSquareText, Sparkles, Wand2 } from "lucide-react"
import { PageHeader } from "@/components/layout/page-header"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const tools = [
  {
    id: "description",
    icon: FileText,
    title: "Listing Description Generator",
    description: "Turn property specs into polished, persuasive listing copy.",
    placeholder: "e.g. 5-bed villa, sea view, infinity pool, Marbella, 480 m²",
    sample:
      "Discover an exceptional 5-bedroom villa in the heart of Marbella, where 480 m² of refined living open onto breathtaking sea views. A private infinity pool anchors the sun-drenched terrace, while floor-to-ceiling glass blurs the line between indoors and the Mediterranean horizon. A rare opportunity for the most discerning buyer.",
  },
  {
    id: "email",
    icon: MessageSquareText,
    title: "Follow-up Email Writer",
    description: "Draft warm, on-brand follow-ups for any lead stage.",
    placeholder: "e.g. Follow up with Liam after villa viewing, mention financing",
    sample:
      "Hi Liam,\n\nThank you for taking the time to view Villa Aurora today — it was a pleasure showing you the property. I'd love to hear your thoughts. If helpful, I can prepare a tailored financing overview so you can picture the full picture with confidence.\n\nWould Thursday work for a quick call?\n\nWarm regards,\nLucía",
  },
  {
    id: "valuation",
    icon: Sparkles,
    title: "Smart Valuation Assistant",
    description: "Get an instant estimated range from comparable signals.",
    placeholder: "e.g. 3-bed penthouse, 210 m², central Madrid, renovated",
    sample:
      "Estimated value range: €1.31M – €1.44M (mid-point €1.38M).\nConfidence: High. Based on 8 recent comparables within 1.2 km, adjusted for renovation premium (+6%) and prime central location. Suggested list price: €1.42M to allow negotiation headroom.",
  },
]

function ToolCard({ tool }: { tool: (typeof tools)[number] }) {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [loading, setLoading] = useState(false)
  const Icon = tool.icon

  function generate() {
    setLoading(true)
    setOutput("")
    setTimeout(() => {
      setOutput(tool.sample)
      setLoading(false)
    }, 700)
  }

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="size-5" />
          </div>
          <div>
            <CardTitle>{tool.title}</CardTitle>
          </div>
        </div>
        <CardDescription className="mt-1">{tool.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-3">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={tool.placeholder}
          rows={3}
          className="w-full resize-none rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none ring-ring/50 placeholder:text-muted-foreground focus-visible:ring-2"
        />
        <Button onClick={generate} disabled={loading} className="gap-2 self-start">
          <Wand2 className="size-4" />
          {loading ? "Generating…" : "Generate"}
        </Button>
        {output && (
          <div className="mt-1 flex-1 whitespace-pre-line rounded-lg border border-border bg-muted/40 p-3 text-sm leading-relaxed">
            {output}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default function AiToolsPage() {
  return (
    <div>
      <PageHeader title="AI Tools" description="Generative assistants to speed up everyday real estate work.">
        <Badge variant="default">
          <Bot className="size-3" />
          Powered by Emiratos AI
        </Badge>
      </PageHeader>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {tools.map((t) => (
          <ToolCard key={t.id} tool={t} />
        ))}
      </div>
    </div>
  )
}
