import type {
  Property,
  Lead,
  Client,
  Appraisal,
  CalendarEvent,
  Contract,
  Investor,
  Payment,
  TokenProject,
  GlampingProject,
  KpiData,
} from "@/types"

export const kpis: KpiData[] = [
  { label: "Ventas del mes", value: "$4.82M", change: 12.4, trend: "up" },
  { label: "Comisiones generadas", value: "$142,600", change: 8.1, trend: "up" },
  { label: "Propiedades activas", value: "186", change: 3.2, trend: "up" },
  { label: "Nuevos leads", value: "324", change: 18.7, trend: "up" },
  { label: "Tasa de conversión", value: "24.6%", change: -2.3, trend: "down" },
]

export const salesEvolution = [
  { month: "Ene", sales: 2.1, target: 2.5 },
  { month: "Feb", sales: 2.8, target: 2.6 },
  { month: "Mar", sales: 3.2, target: 3.0 },
  { month: "Abr", sales: 2.9, target: 3.1 },
  { month: "May", sales: 3.8, target: 3.4 },
  { month: "Jun", sales: 4.2, target: 3.8 },
  { month: "Jul", sales: 4.82, target: 4.2 },
]

export const propertyAcquisition = [
  { month: "Ene", acquired: 12, listed: 18 },
  { month: "Feb", acquired: 18, listed: 22 },
  { month: "Mar", acquired: 15, listed: 25 },
  { month: "Abr", acquired: 22, listed: 28 },
  { month: "May", acquired: 28, listed: 31 },
  { month: "Jun", acquired: 24, listed: 29 },
  { month: "Jul", acquired: 31, listed: 36 },
]

export const leadConversion = [
  { stage: "Nuevo lead", count: 324 },
  { stage: "Contactado", count: 218 },
  { stage: "Visita", count: 142 },
  { stage: "Oferta", count: 86 },
  { stage: "Reservado", count: 54 },
  { stage: "Cerrado", count: 38 },
]

export const advisorCommissions = [
  { name: "Lucía Fernández", value: 38600 },
  { name: "Marco Ruiz", value: 31200 },
  { name: "Sara Khan", value: 27800 },
  { name: "Diego Soler", value: 24100 },
  { name: "Aisha Noor", value: 20900 },
]

export const properties: Property[] = [
  {
    id: "P-1042",
    title: "Villa Aurora",
    address: "Calle del Mar 24",
    city: "Marbella",
    price: 2450000,
    roi: 7.8,
    status: "available",
    bedrooms: 5,
    bathrooms: 4,
    area: 480,
    image: "/properties/villa-marbella.png",
    agent: "Lucía Fernández",
  },
  {
    id: "P-1043",
    title: "Sky Penthouse",
    address: "Gran Vía 102",
    city: "Madrid",
    price: 1380000,
    roi: 6.2,
    status: "reserved",
    bedrooms: 3,
    bathrooms: 3,
    area: 210,
    image: "/properties/penthouse-madrid.png",
    agent: "Marco Ruiz",
  },
  {
    id: "P-1044",
    title: "Garden Townhouse",
    address: "Av. del Puerto 58",
    city: "Valencia",
    price: 720000,
    roi: 5.4,
    status: "available",
    bedrooms: 4,
    bathrooms: 3,
    area: 260,
    image: "/properties/townhouse-valencia.png",
    agent: "Sara Khan",
  },
  {
    id: "P-1045",
    title: "Costa Azul Suite",
    address: "Paseo Marítimo 11",
    city: "Málaga",
    price: 540000,
    roi: 8.9,
    status: "sold",
    bedrooms: 2,
    bathrooms: 2,
    area: 120,
    image: "/properties/beach-apartment.png",
    agent: "Diego Soler",
  },
  {
    id: "P-1046",
    title: "Villa Aurora II",
    address: "Calle del Mar 26",
    city: "Marbella",
    price: 2890000,
    roi: 7.1,
    status: "available",
    bedrooms: 6,
    bathrooms: 5,
    area: 520,
    image: "/properties/villa-marbella.png",
    agent: "Aisha Noor",
  },
  {
    id: "P-1047",
    title: "Marina View Flat",
    address: "Muelle Uno 4",
    city: "Málaga",
    price: 410000,
    roi: 9.2,
    status: "rented",
    bedrooms: 2,
    bathrooms: 1,
    area: 95,
    image: "/properties/beach-apartment.png",
    agent: "Lucía Fernández",
  },
]

export const leads: Lead[] = [
  { id: "L-301", name: "Carlos Mendoza", email: "carlos@mail.com", phone: "+54 9 11 1122 3344", source: "Web", budget: 850000, interest: "Villa en Nordelta", stage: "new", agent: "Lucía Fernández", createdAt: "2026-06-14" },
  { id: "L-302", name: "Emma Schmidt", email: "emma@mail.com", phone: "+54 9 11 2233 4455", source: "Instagram", budget: 1200000, interest: "Penthouse Puerto Madero", stage: "new", agent: "Marco Ruiz", createdAt: "2026-06-13" },
  { id: "L-303", name: "Yusuf Ali", email: "yusuf@mail.com", phone: "+54 9 11 3344 5566", source: "Referido", budget: 600000, interest: "Casa en San Isidro", stage: "contacted", agent: "Sara Khan", createdAt: "2026-06-12" },
  { id: "L-304", name: "Nora Beltran", email: "nora@mail.com", phone: "+54 9 11 4455 6677", source: "Portal", budget: 480000, interest: "Departamento Palermo", stage: "contacted", agent: "Diego Soler", createdAt: "2026-06-11" },
  { id: "L-305", name: "Liam O'Brien", email: "liam@mail.com", phone: "+54 9 11 5566 7788", source: "Web", budget: 2000000, interest: "Villa de lujo", stage: "visit", agent: "Aisha Noor", createdAt: "2026-06-10" },
  { id: "L-306", name: "Sofia Rossi", email: "sofia@mail.com", phone: "+54 9 11 6677 8899", source: "Instagram", budget: 950000, interest: "Vista al río", stage: "visit", agent: "Lucía Fernández", createdAt: "2026-06-09" },
  { id: "L-307", name: "Hugo Martin", email: "hugo@mail.com", phone: "+54 9 11 7788 9900", source: "Referido", budget: 1380000, interest: "Penthouse", stage: "offer", agent: "Marco Ruiz", createdAt: "2026-06-08" },
  { id: "L-308", name: "Amara Diallo", email: "amara@mail.com", phone: "+54 9 11 8899 0011", source: "Portal", budget: 720000, interest: "Casa con jardín", stage: "reserved", agent: "Sara Khan", createdAt: "2026-06-06" },
  { id: "L-309", name: "Tom Becker", email: "tom@mail.com", phone: "+54 9 11 1234 5678", source: "Web", budget: 540000, interest: "Departamento", stage: "closed", agent: "Diego Soler", createdAt: "2026-06-02" },
]

export const clients: Client[] = [
  { id: "C-201", name: "Amara Diallo", email: "amara@mail.com", phone: "+54 9 11 8899 0011", type: "buyer", status: "active", properties: 1, totalValue: 720000, joinedAt: "2025-11-02" },
  { id: "C-202", name: "Tom Becker", email: "tom@mail.com", phone: "+54 9 11 1234 5678", type: "buyer", status: "active", properties: 2, totalValue: 1080000, joinedAt: "2025-09-18" },
  { id: "C-203", name: "Isabella Moretti", email: "isa@mail.com", phone: "+54 9 11 2143 6500", type: "investor", status: "active", properties: 5, totalValue: 4200000, joinedAt: "2024-12-01" },
  { id: "C-204", name: "Khalid Rahman", email: "khalid@mail.com", phone: "+54 9 11 9876 5400", type: "seller", status: "inactive", properties: 1, totalValue: 2450000, joinedAt: "2025-03-22" },
  { id: "C-205", name: "Greta Lindqvist", email: "greta@mail.com", phone: "+54 9 11 4567 8900", type: "tenant", status: "active", properties: 1, totalValue: 410000, joinedAt: "2026-01-15" },
]

export const appraisals: Appraisal[] = [
  { id: "A-101", property: "Villa Aurora", address: "Calle del Mar 24, Marbella", requestedBy: "Khalid Rahman", estimatedValue: 2450000, status: "pending", comparables: 6, requestedAt: "2026-06-14" },
  { id: "A-102", property: "Sky Penthouse", address: "Gran Vía 102, Madrid", requestedBy: "Hugo Martin", estimatedValue: 1380000, status: "in-progress", comparables: 8, requestedAt: "2026-06-12" },
  { id: "A-103", property: "Garden Townhouse", address: "Av. del Puerto 58, Valencia", requestedBy: "Amara Diallo", estimatedValue: 712000, status: "completed", comparables: 5, requestedAt: "2026-06-08" },
  { id: "A-104", property: "Marina View Flat", address: "Muelle Uno 4, Málaga", requestedBy: "Greta Lindqvist", estimatedValue: 405000, status: "pending", comparables: 4, requestedAt: "2026-06-15" },
]

export const events: CalendarEvent[] = [
  { id: "E-1", title: "Visita a propiedad", type: "visit", date: "2026-06-16", time: "10:00", with: "Liam O'Brien", location: "Villa Aurora, Nordelta" },
  { id: "E-2", title: "Firma de contrato", type: "meeting", date: "2026-06-16", time: "13:30", with: "Amara Diallo", location: "Oficina central" },
  { id: "E-3", title: "Llamada de seguimiento", type: "task", date: "2026-06-16", time: "16:00", with: "Sofia Rossi", location: "Teléfono" },
  { id: "E-4", title: "Reunión con inversor", type: "meeting", date: "2026-06-17", time: "11:00", with: "Isabella Moretti", location: "Oficina central" },
  { id: "E-5", title: "Visita penthouse", type: "visit", date: "2026-06-18", time: "12:00", with: "Hugo Martin", location: "Puerto Madero" },
  { id: "E-6", title: "Preparar informe de tasación", type: "task", date: "2026-06-19", time: "09:00", with: "Interno", location: "Oficina central" },
]

export const contracts: Contract[] = [
  { id: "CT-501", property: "Casa con jardín", client: "Amara Diallo", type: "reservation", value: 720000, status: "signed", createdAt: "2026-06-06", signedAt: "2026-06-09" },
  { id: "CT-502", property: "Departamento", client: "Tom Becker", type: "sale", value: 540000, status: "completed", createdAt: "2026-05-28", signedAt: "2026-06-02" },
  { id: "CT-503", property: "Penthouse", client: "Hugo Martin", type: "reservation", value: 1380000, status: "sent", createdAt: "2026-06-13" },
  { id: "CT-504", property: "Marina View Flat", client: "Greta Lindqvist", type: "rental", value: 24000, status: "draft", createdAt: "2026-06-15" },
]

export const investors: Investor[] = [
  { id: "I-701", name: "Isabella Moretti", email: "isa@mail.com", capitalInvested: 4200000, roiAccumulated: 612000, activeProjects: 5, joinedAt: "2024-12-01" },
  { id: "I-702", name: "Omar Haddad", email: "omar@mail.com", capitalInvested: 2800000, roiAccumulated: 358000, activeProjects: 3, joinedAt: "2025-02-14" },
  { id: "I-703", name: "Helena Vogt", email: "helena@mail.com", capitalInvested: 1500000, roiAccumulated: 184000, activeProjects: 2, joinedAt: "2025-06-30" },
]

export const payments: Payment[] = [
  { id: "PM-1", investor: "Isabella Moretti", project: "Nordelta Residences", amount: 32000, date: "2026-06-01", status: "paid" },
  { id: "PM-2", investor: "Omar Haddad", project: "Puerto Madero Fund", amount: 18500, date: "2026-06-01", status: "paid" },
  { id: "PM-3", investor: "Helena Vogt", project: "Glamping Sierra", amount: 9200, date: "2026-06-01", status: "pending" },
  { id: "PM-4", investor: "Isabella Moretti", project: "Glamping Sierra", amount: 12400, date: "2026-05-01", status: "paid" },
]

export const tokenProjects: TokenProject[] = [
  { id: "T-01", name: "Nordelta Residences", totalTokens: 50000, soldTokens: 41200, tokenPrice: 100, roi: 9.4, investors: 312, status: "active" },
  { id: "T-02", name: "Puerto Madero Fund", totalTokens: 30000, soldTokens: 30000, tokenPrice: 75, roi: 11.2, investors: 198, status: "closed" },
  { id: "T-03", name: "Palermo Skyline", totalTokens: 40000, soldTokens: 16800, tokenPrice: 120, roi: 8.1, investors: 124, status: "funding" },
]

export const tokenPerformance = [
  { month: "Ene", value: 100 },
  { month: "Feb", value: 103 },
  { month: "Mar", value: 107 },
  { month: "Abr", value: 105 },
  { month: "May", value: 111 },
  { month: "Jun", value: 116 },
  { month: "Jul", value: 122 },
]

export const glampingProjects: GlampingProject[] = [
  { id: "G-01", name: "Sierra Eco Domes", location: "Córdoba", construction: 82, raisedCapital: 1640000, targetCapital: 2000000, occupancy: 74, monthlyYield: 6.8, image: "/glamping/forest-domes.png" },
  { id: "G-02", name: "Costa Luxury Tents", location: "Mar del Plata", construction: 45, raisedCapital: 980000, targetCapital: 1800000, occupancy: 61, monthlyYield: 5.9, image: "/glamping/coastal-tents.png" },
]

export const occupancyData = [
  { month: "Ene", occupancy: 48 },
  { month: "Feb", occupancy: 52 },
  { month: "Mar", occupancy: 60 },
  { month: "Abr", occupancy: 67 },
  { month: "May", occupancy: 71 },
  { month: "Jun", occupancy: 74 },
]
