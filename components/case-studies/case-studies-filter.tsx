"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

const industries = [
  "All Industries",
  "Financial Services",
  "Healthcare",
  "Manufacturing",
  "Retail",
  "Technology",
  "Education",
  "Government",
]

const services = [
  "All Services",
  "Cybersecurity",
  "Cloud Migration",
  "IT Consulting",
  "Managed Services",
  "Digital Transformation",
]

export function CaseStudiesFilter() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries")
  const [selectedService, setSelectedService] = useState("All Services")

  return (
    <div className="mb-10 rounded-lg border bg-card p-6">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search case studies..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
          <SelectTrigger>
            <SelectValue placeholder="Select industry" />
          </SelectTrigger>
          <SelectContent>
            {industries.map((industry) => (
              <SelectItem key={industry} value={industry}>
                {industry}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedService} onValueChange={setSelectedService}>
          <SelectTrigger>
            <SelectValue placeholder="Select service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service} value={service}>
                {service}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-medium">9</span> case studies
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setSearchQuery("")
            setSelectedIndustry("All Industries")
            setSelectedService("All Services")
          }}
        >
          Reset Filters
        </Button>
      </div>
    </div>
  )
}
