export type PropertyStatus = "available" | "reserved" | "sold" | "rented" | "draft"

export interface Property {
  id: string
  title: string
  address: string
  city: string
  price: number
  roi: number
  status: PropertyStatus
  bedrooms: number
  bathrooms: number
  area: number
  image: string
  agent: string
}

export type LeadStage = "new" | "contacted" | "visit" | "offer" | "reserved" | "closed"

export interface Lead {
  id: string
  name: string
  email: string
  phone: string
  source: string
  budget: number
  interest: string
  stage: LeadStage
  agent: string
  createdAt: string
}

export interface Client {
  id: string
  name: string
  email: string
  phone: string
  type: "buyer" | "seller" | "investor" | "tenant"
  status: "active" | "inactive"
  properties: number
  totalValue: number
  joinedAt: string
}

export interface Appraisal {
  id: string
  property: string
  address: string
  requestedBy: string
  estimatedValue: number
  status: "pending" | "in-progress" | "completed"
  comparables: number
  requestedAt: string
}

export interface CalendarEvent {
  id: string
  title: string
  type: "visit" | "meeting" | "task"
  date: string
  time: string
  with: string
  location: string
}

export interface Contract {
  id: string
  property: string
  client: string
  type: "sale" | "rental" | "reservation"
  value: number
  status: "draft" | "sent" | "signed" | "completed"
  createdAt: string
  signedAt?: string
}

export interface Investor {
  id: string
  name: string
  email: string
  capitalInvested: number
  roiAccumulated: number
  activeProjects: number
  joinedAt: string
}

export interface Payment {
  id: string
  investor: string
  project: string
  amount: number
  date: string
  status: "paid" | "pending"
}

export interface TokenProject {
  id: string
  name: string
  totalTokens: number
  soldTokens: number
  tokenPrice: number
  roi: number
  investors: number
  status: "active" | "funding" | "closed"
}

export interface GlampingProject {
  id: string
  name: string
  location: string
  construction: number
  raisedCapital: number
  targetCapital: number
  occupancy: number
  monthlyYield: number
  image: string
}

export interface KpiData {
  label: string
  value: string
  change: number
  trend: "up" | "down"
}
