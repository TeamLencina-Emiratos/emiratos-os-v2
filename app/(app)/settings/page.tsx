"use client"

import { useState } from "react"
import { Bell, Building2, CreditCard, Shield, User } from "lucide-react"
import { PageHeader } from "@/components/layout/page-header"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

function Field({ label, defaultValue }: { label: string; defaultValue: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium">{label}</label>
      <input
        defaultValue={defaultValue}
        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none ring-ring/50 focus-visible:ring-2"
      />
    </div>
  )
}

function Toggle({ label, description, on }: { label: string; description: string; on?: boolean }) {
  const [active, setActive] = useState(!!on)
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <div>
        <p className="text-sm font-medium">{label}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={active}
        aria-label={label}
        onClick={() => setActive((v) => !v)}
        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${active ? "bg-primary" : "bg-muted"}`}
      >
        <span
          className={`absolute top-0.5 size-5 rounded-full bg-background shadow transition-transform ${active ? "translate-x-5" : "translate-x-0.5"}`}
        />
      </button>
    </div>
  )
}

export default function SettingsPage() {
  return (
    <div>
      <PageHeader title="Settings" description="Manage your profile, agency and preferences." />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <User className="size-5" />
              </div>
              <CardTitle>Profile</CardTitle>
            </div>
            <CardDescription>Your personal account details.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Field label="Full name" defaultValue="Lucía Fernández" />
            <Field label="Email" defaultValue="lucia@emiratos.com" />
            <Field label="Phone" defaultValue="+34 600 11 22 33" />
            <Button className="self-start">Save changes</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Building2 className="size-5" />
              </div>
              <CardTitle>Agency</CardTitle>
            </div>
            <CardDescription>Organization-wide configuration.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Field label="Agency name" defaultValue="Emiratos Real Estate" />
            <Field label="License number" defaultValue="ES-RE-204815" />
            <Field label="Default currency" defaultValue="EUR (€)" />
            <Button variant="outline" className="self-start">
              Update agency
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Bell className="size-5" />
              </div>
              <CardTitle>Notifications</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="divide-y divide-border py-0">
            <Toggle label="New lead alerts" description="Get notified when a new lead arrives." on />
            <Toggle label="Appointment reminders" description="Reminders before scheduled visits." on />
            <Toggle label="Weekly digest" description="Summary of performance every Monday." />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Shield className="size-5" />
              </div>
              <CardTitle>Security &amp; Billing</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Toggle label="Two-factor authentication" description="Add an extra layer of security." on />
            <div className="flex items-center justify-between gap-4 rounded-lg border border-border p-3">
              <div className="flex items-center gap-3">
                <CreditCard className="size-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Professional Plan</p>
                  <p className="text-sm text-muted-foreground">€129 / month · renews Jul 1</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Manage
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
