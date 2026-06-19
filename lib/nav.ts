import {
  LayoutDashboard,
  Building2,
  Users,
  UserRound,
  ClipboardCheck,
  CalendarDays,
  FileSignature,
  Sparkles,
  BarChart3,
  Settings,
  type LucideIcon,
} from "lucide-react"

export interface NavItem {
  label: string
  href: string
  icon: LucideIcon
}

export const navItems: NavItem[] = [
  { label: "Panel", href: "/", icon: LayoutDashboard },
  { label: "Propiedades", href: "/properties", icon: Building2 },
  { label: "Leads", href: "/leads", icon: Users },
  { label: "Clientes", href: "/clients", icon: UserRound },
  { label: "Tasaciones", href: "/appraisals", icon: ClipboardCheck },
  { label: "Calendario", href: "/calendar", icon: CalendarDays },
  { label: "Contratos", href: "/contracts", icon: FileSignature },
  { label: "Herramientas IA", href: "/ai-tools", icon: Sparkles },
  { label: "Reportes", href: "/reports", icon: BarChart3 },
  { label: "Configuracion", href: "/settings", icon: Settings },
]
