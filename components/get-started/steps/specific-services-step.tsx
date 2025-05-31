"use client"

import { useState, useEffect } from "react"
import type { ServiceCategory, UserType } from "../get-started-form"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface SpecificServicesStepProps {
  selectedServices: string[]
  userType: UserType
  serviceCategory: ServiceCategory
  onSelect: (services: string[]) => void
}

// Service options based on user type and category
const serviceOptions: Record<string, Record<string, string[]>> = {
  individual: {
    repair: ["PC Repair", "Laptop Repair", "Virus Removal", "Data Recovery", "Hardware Replacement"],
    security: [
      "Antivirus Setup",
      "Password Management",
      "Home Network Security",
      "Device Encryption",
      "Security Audit",
    ],
    network: [
      "Home Network Setup",
      "WiFi Optimization",
      "Smart Home Integration",
      "Internet Troubleshooting",
      "Device Connection",
    ],
    cloud: [
      "Cloud Backup Setup",
      "Cloud Storage Solutions",
      "Media Streaming Setup",
      "Cloud Sync Configuration",
      "Personal Cloud Setup",
    ],
    custom: ["Custom PC Building", "Gaming Setup", "Home Office Setup", "Media Center Setup", "Smart Home Automation"],
    support: ["Remote Support", "In-Home Support", "Tech Training", "Software Tutorials", "Device Setup"],
  },
  retail: {
    repair: [
      "POS System Repair",
      "Business Computer Repair",
      "Network Equipment Repair",
      "Printer/Scanner Repair",
      "Emergency Repair Service",
    ],
    security: [
      "PCI Compliance",
      "Surveillance Systems",
      "Data Breach Prevention",
      "Employee Access Control",
      "Security Monitoring",
    ],
    network: [
      "Store Network Setup",
      "Multi-Location Networking",
      "Guest WiFi Setup",
      "POS Network Integration",
      "Network Monitoring",
    ],
    cloud: [
      "Inventory Cloud Solutions",
      "Cloud POS Systems",
      "Customer Data Management",
      "Cloud Backup for Retail",
      "Multi-store Synchronization",
    ],
    custom: [
      "Custom POS Development",
      "Retail Analytics Solutions",
      "Customer Loyalty Systems",
      "Digital Signage Setup",
      "Kiosk Development",
    ],
    support: [
      "24/7 Retail Support",
      "Staff Training",
      "Preventative Maintenance",
      "Holiday Season Prep",
      "Technology Consulting",
    ],
  },
  enterprise: {
    repair: [
      "Server Repair",
      "Enterprise Hardware Maintenance",
      "Data Center Equipment Repair",
      "Critical System Recovery",
      "Legacy System Support",
    ],
    security: [
      "Enterprise Security Solutions",
      "Compliance Management",
      "Penetration Testing",
      "Security Operations Center",
      "Employee Security Training",
    ],
    network: [
      "Enterprise Network Design",
      "WAN/LAN Implementation",
      "Network Performance Optimization",
      "SD-WAN Solutions",
      "Global Network Management",
    ],
    cloud: [
      "Enterprise Cloud Migration",
      "Hybrid Cloud Solutions",
      "Cloud Infrastructure Management",
      "Multi-cloud Strategy",
      "Cloud Cost Optimization",
    ],
    custom: [
      "Custom Enterprise Software",
      "Business Process Automation",
      "Legacy System Integration",
      "Enterprise Mobile Solutions",
      "Custom API Development",
    ],
    support: [
      "Enterprise SLA Support",
      "Dedicated Support Team",
      "CIO Advisory Services",
      "IT Staff Augmentation",
      "24/7 Mission Critical Support",
    ],
  },
}

export default function SpecificServicesStep({
  selectedServices,
  userType,
  serviceCategory,
  onSelect,
}: SpecificServicesStepProps) {
  const [availableServices, setAvailableServices] = useState<string[]>([])

  useEffect(() => {
    if (userType && serviceCategory) {
      setAvailableServices(serviceOptions[userType]?.[serviceCategory] || [])
    }
  }, [userType, serviceCategory])

  const handleToggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      onSelect(selectedServices.filter((s) => s !== service))
    } else {
      onSelect([...selectedServices, service])
    }
  }

  const getStepTitle = () => {
    if (userType === "individual") {
      return "Which specific services do you need?"
    } else if (userType === "retail") {
      return "Select the retail services you're interested in"
    } else {
      return "Which enterprise solutions are you looking for?"
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">{getStepTitle()}</h2>
      <p className="text-muted-foreground mb-6">Select all that apply to your current needs.</p>

      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {availableServices.map((service) => (
          <div
            key={service}
            className={cn(
              "flex items-start space-x-3 rounded-lg border p-4 transition-all",
              selectedServices.includes(service)
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50",
            )}
          >
            <Checkbox
              id={`service-${service}`}
              checked={selectedServices.includes(service)}
              onCheckedChange={() => handleToggleService(service)}
              className="mt-1"
            />
            <div className="space-y-1">
              <Label htmlFor={`service-${service}`} className="text-base font-medium cursor-pointer">
                {service}
              </Label>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
