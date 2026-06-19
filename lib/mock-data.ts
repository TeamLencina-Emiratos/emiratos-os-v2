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
  { label: "Monthly Sales", value: "€4.82M", change: 12.4, trend: "up" },
  { label: "Generated Commissions", value: "€142,600", change: 8.1, trend: "up" },
  { label: "Active Properties", value: "186", change: 3.2, trend: "up" },
  { label: "New Leads", value: "324", change: 18.7, trend: "up" },
  { label: "Conversion Rate", value: "24.6%", change: -2.3, trend: "down" },
]

export const salesEvolution = [
  { month: "Jan", sales: 2.1, target: 2.5 },
  { month: "Feb", sales: 2.8, target: 2.6 },
  { month: "Mar", sales: 3.2, target: 3.0 },
  { month: "Apr", sales: 2.9, target: 3.1 },
  { month: "May", sales: 3.8, target: 3.4 },
  { month: "Jun", sales: 4.2, target: 3.8 },
  { month: "Jul", sales: 4.82, target: 4.2 },
]

export const propertyAcquisition = [
  { month: "Jan", acquired: 12, listed: 18 },
  { month: "Feb", acquired: 18, listed: 22 },
  { month: "Mar", acquired: 15, listed: 25 },
  { month: "Apr", acquired: 22, listed: 28 },
  { month: "May", acquired: 28, listed: 31 },
  { month: "Jun", acquired: 24, listed: 29 },
  { month: "Jul", acquired: 31, listed: 36 },
]

export const leadConversion = [
  { stage: "New Lead", count: 324 },
  { stage: "Contacted", count: 218 },
  { stage: "Visit", count: 142 },
  { stage: "Offer", count: 86 },
  { stage: "Reserved", count: 54 },
  { stage: "Closed", count: 38 },
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
  { id: "L-301", name: "Carlos Mendoza", email: "carlos@mail.com", phone: "+34 600 11 22 33", source: "Website", budget: 850000, interest: "Villa in Marbella", stage: "new", agent: "Lucía Fernández", createdAt: "2026-06-14" },
  { id: "L-302", name: "Emma Schmidt", email: "emma@mail.com", phone: "+34 600 22 33 44", source: "Instagram", budget: 1200000, interest: "Penthouse Madrid", stage: "new", agent: "Marco Ruiz", createdAt: "2026-06-13" },
  { id: "L-303", name: "Yusuf Ali", email: "yusuf@mail.com", phone: "+34 600 33 44 55", source: "Referral", budget: 600000, interest: "Townhouse Valencia", stage: "contacted", agent: "Sara Khan", createdAt: "2026-06-12" },
  { id: "L-304", name: "Nora Beltran", email: "nora@mail.com", phone: "+34 600 44 55 66", source: "Portal", budget: 480000, interest: "Beach apartment", stage: "contacted", agent: "Diego Soler", createdAt: "2026-06-11" },
  { id: "L-305", name: "Liam O'Brien", email: "liam@mail.com", phone: "+34 600 55 66 77", source: "Website", budget: 2000000, interest: "Luxury villa", stage: "visit", agent: "Aisha Noor", createdAt: "2026-06-10" },
  { id: "L-306", name: "Sofia Rossi", email: "sofia@mail.com", phone: "+34 600 66 77 88", source: "Instagram", budget: 950000, interest: "Sea view", stage: "visit", agent: "Lucía Fernández", createdAt: "2026-06-09" },
  { id: "L-307", name: "Hugo Martin", email: "hugo@mail.com", phone: "+34 600 77 88 99", source: "Referral", budget: 1380000, interest: "Sky Penthouse", stage: "offer", agent: "Marco Ruiz", createdAt: "2026-06-08" },
  { id: "L-308", name: "Amara Diallo", email: "amara@mail.com", phone: "+34 600 88 99 00", source: "Portal", budget: 720000, interest: "Garden Townhouse", stage: "reserved", agent: "Sara Khan", createdAt: "2026-06-06" },
  { id: "L-309", name: "Tom Becker", email: "tom@mail.com", phone: "+34 600 12 34 56", source: "Website", budget: 540000, interest: "Costa Azul Suite", stage: "closed", agent: "Diego Soler", createdAt: "2026-06-02" },
]

export const clients: Client[] = [
  { id: "C-201", name: "Amara Diallo", email: "amara@mail.com", phone: "+34 600 88 99 00", type: "buyer", status: "active", properties: 1, totalValue: 720000, joinedAt: "2025-11-02" },
  { id: "C-202", name: "Tom Becker", email: "tom@mail.com", phone: "+34 600 12 34 56", type: "buyer", status: "active", properties: 2, totalValue: 1080000, joinedAt: "2025-09-18" },
  { id: "C-203", name: "Isabella Moretti", email: "isa@mail.com", phone: "+34 600 21 43 65", type: "investor", status: "active", properties: 5, totalValue: 4200000, joinedAt: "2024-12-01" },
  { id: "C-204", name: "Khalid Rahman", email: "khalid@mail.com", phone: "+34 600 98 76 54", type: "seller", status: "inactive", properties: 1, totalValue: 2450000, joinedAt: "2025-03-22" },
  { id: "C-205", name: "Greta Lindqvist", email: "greta@mail.com", phone: "+34 600 45 67 89", type: "tenant", status: "active", properties: 1, totalValue: 410000, joinedAt: "2026-01-15" },
]

export const appraisals: Appraisal[] = [
  { id: "A-101", property: "Villa Aurora", address: "Calle del Mar 24, Marbella", requestedBy: "Khalid Rahman", estimatedValue: 2450000, status: "pending", comparables: 6, requestedAt: "2026-06-14" },
  { id: "A-102", property: "Sky Penthouse", address: "Gran Vía 102, Madrid", requestedBy: "Hugo Martin", estimatedValue: 1380000, status: "in-progress", comparables: 8, requestedAt: "2026-06-12" },
  { id: "A-103", property: "Garden Townhouse", address: "Av. del Puerto 58, Valencia", requestedBy: "Amara Diallo", estimatedValue: 712000, status: "completed", comparables: 5, requestedAt: "2026-06-08" },
  { id: "A-104", property: "Marina View Flat", address: "Muelle Uno 4, Málaga", requestedBy: "Greta Lindqvist", estimatedValue: 405000, status: "pending", comparables: 4, requestedAt: "2026-06-15" },
]

export const events: CalendarEvent[] = [
  { id: "E-1", title: "Property visit", type: "visit", date: "2026-06-16", time: "10:00", with: "Liam O'Brien", location: "Villa Aurora, Marbella" },
  { id: "E-2", title: "Contract signing", type: "meeting", date: "2026-06-16", time: "13:30", with: "Amara Diallo", location: "Office HQ" },
  { id: "E-3", title: "Follow up call", type: "task", date: "2026-06-16", time: "16:00", with: "Sofia Rossi", location: "Phone" },
  { id: "E-4", title: "Investor meeting", type: "meeting", date: "2026-06-17", time: "11:00", with: "Isabella Moretti", location: "Office HQ" },
  { id: "E-5", title: "Penthouse viewing", type: "visit", date: "2026-06-18", time: "12:00", with: "Hugo Martin", location: "Gran Vía 102, Madrid" },
  { id: "E-6", title: "Prepare appraisal report", type: "task", date: "2026-06-19", time: "09:00", with: "Internal", location: "Office HQ" },
]

export const contracts: Contract[] = [
  { id: "CT-501", property: "Garden Townhouse", client: "Amara Diallo", type: "reservation", value: 720000, status: "signed", createdAt: "2026-06-06", signedAt: "2026-06-09" },
  { id: "CT-502", property: "Costa Azul Suite", client: "Tom Becker", type: "sale", value: 540000, status: "completed", createdAt: "2026-05-28", signedAt: "2026-06-02" },
  { id: "CT-503", property: "Sky Penthouse", client: "Hugo Martin", type: "reservation", value: 1380000, status: "sent", createdAt: "2026-06-13" },
  { id: "CT-504", property: "Marina View Flat", client: "Greta Lindqvist", type: "rental", value: 24000, status: "draft", createdAt: "2026-06-15" },
]

export const investors: Investor[] = [
  { id: "I-701", name: "Isabella Moretti", email: "isa@mail.com", capitalInvested: 4200000, roiAccumulated: 612000, activeProjects: 5, joinedAt: "2024-12-01" },
  { id: "I-702", name: "Omar Haddad", email: "omar@mail.com", capitalInvested: 2800000, roiAccumulated: 358000, activeProjects: 3, joinedAt: "2025-02-14" },
  { id: "I-703", name: "Helena Vogt", email: "helena@mail.com", capitalInvested: 1500000, roiAccumulated: 184000, activeProjects: 2, joinedAt: "2025-06-30" },
]

export const payments: Payment[] = [
  { id: "PM-1", investor: "Isabella Moretti", project: "Marbella Residences", amount: 32000, date: "2026-06-01", status: "paid" },
  { id: "PM-2", investor: "Omar Haddad", project: "Costa Token Fund", amount: 18500, date: "2026-06-01", status: "paid" },
  { id: "PM-3", investor: "Helena Vogt", project: "Glamping Sierra", amount: 9200, date: "2026-06-01", status: "pending" },
  { id: "PM-4", investor: "Isabella Moretti", project: "Glamping Sierra", amount: 12400, date: "2026-05-01", status: "paid" },
]

export const tokenProjects: TokenProject[] = [
  { id: "T-01", name: "Marbella Residences", totalTokens: 50000, soldTokens: 41200, tokenPrice: 100, roi: 9.4, investors: 312, status: "active" },
  { id: "T-02", name: "Costa Token Fund", totalTokens: 30000, soldTokens: 30000, tokenPrice: 75, roi: 11.2, investors: 198, status: "closed" },
  { id: "T-03", name: "Madrid Skyline", totalTokens: 40000, soldTokens: 16800, tokenPrice: 120, roi: 8.1, investors: 124, status: "funding" },
]

export const tokenPerformance = [
  { month: "Jan", value: 100 },
  { month: "Feb", value: 103 },
  { month: "Mar", value: 107 },
  { month: "Apr", value: 105 },
  { month: "May", value: 111 },
  { month: "Jun", value: 116 },
  { month: "Jul", value: 122 },
]

export const glampingProjects: GlampingProject[] = [
  { id: "G-01", name: "Sierra Eco Domes", location: "Granada", construction: 82, raisedCapital: 1640000, targetCapital: 2000000, occupancy: 74, monthlyYield: 6.8, image: "/glamping/forest-domes.png" },
  { id: "G-02", name: "Costa Luxury Tents", location: "Cádiz", construction: 45, raisedCapital: 980000, targetCapital: 1800000, occupancy: 61, monthlyYield: 5.9, image: "/glamping/coastal-tents.png" },
]

export const occupancyData = [
  { month: "Jan", occupancy: 48 },
  { month: "Feb", occupancy: 52 },
  { month: "Mar", occupancy: 60 },
  { month: "Apr", occupancy: 67 },
  { month: "May", occupancy: 71 },
  { month: "Jun", occupancy: 74 },
]
