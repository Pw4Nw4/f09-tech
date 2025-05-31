"use client"

import type { UserType, FormData } from "../get-started-form"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface BusinessDetailsStepProps {
  businessDetails: NonNullable<FormData["businessDetails"]>
  userType: UserType
  onUpdate: (field: keyof NonNullable<FormData["businessDetails"]>, value: any) => void
}

const infrastructureOptions = [
  { id: "servers", label: "On-premise Servers" },
  { id: "cloud", label: "Cloud Services" },
  { id: "hybrid", label: "Hybrid Infrastructure" },
  { id: "network", label: "Network Equipment" },
  { id: "workstations", label: "Workstations/Computers" },
  { id: "pos", label: "POS Systems" },
  { id: "mobile", label: "Mobile Devices" },
  { id: "iot", label: "IoT Devices" },
]

const industryOptions = [
  { value: "retail", label: "Retail" },
  { value: "healthcare", label: "Healthcare" },
  { value: "finance", label: "Finance & Banking" },
  { value: "education", label: "Education" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "hospitality", label: "Hospitality" },
  { value: "technology", label: "Technology" },
  { value: "government", label: "Government" },
  { value: "nonprofit", label: "Non-profit" },
  { value: "other", label: "Other" },
]

export default function BusinessDetailsStep({ businessDetails, userType, onUpdate }: BusinessDetailsStepProps) {
  const handleInfrastructureChange = (id: string) => {
    const currentInfrastructure = [...businessDetails.existingInfrastructure]

    if (currentInfrastructure.includes(id)) {
      onUpdate(
        "existingInfrastructure",
        currentInfrastructure.filter((item) => item !== id),
      )
    } else {
      onUpdate("existingInfrastructure", [...currentInfrastructure, id])
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Business Details</h2>
      <p className="text-muted-foreground mb-6">
        Help us understand your business better so we can provide the most appropriate solutions.
      </p>

      <div className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="companySize">Company Size</Label>
            <Select value={businessDetails.companySize} onValueChange={(value) => onUpdate("companySize", value)}>
              <SelectTrigger id="companySize">
                <SelectValue placeholder="Select company size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10">1-10 employees</SelectItem>
                <SelectItem value="11-50">11-50 employees</SelectItem>
                <SelectItem value="51-200">51-200 employees</SelectItem>
                <SelectItem value="201-500">201-500 employees</SelectItem>
                <SelectItem value="501+">501+ employees</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="industry">Industry</Label>
            <Select value={businessDetails.industry} onValueChange={(value) => onUpdate("industry", value)}>
              <SelectTrigger id="industry">
                <SelectValue placeholder="Select your industry" />
              </SelectTrigger>
              <SelectContent>
                {industryOptions.map((industry) => (
                  <SelectItem key={industry.value} value={industry.value}>
                    {industry.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-3">
          <Label>Existing Infrastructure</Label>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {infrastructureOptions.map((option) => (
              <motion.div
                key={option.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "flex items-start space-x-3 rounded-lg border p-3 transition-all",
                  businessDetails.existingInfrastructure.includes(option.id)
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50",
                )}
              >
                <Checkbox
                  id={`infra-${option.id}`}
                  checked={businessDetails.existingInfrastructure.includes(option.id)}
                  onCheckedChange={() => handleInfrastructureChange(option.id)}
                  className="mt-1"
                />
                <div className="space-y-1">
                  <Label htmlFor={`infra-${option.id}`} className="text-base font-medium cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <Label>Project Urgency</Label>
          <RadioGroup
            value={businessDetails.urgency}
            onValueChange={(value) => onUpdate("urgency", value)}
            className="grid gap-3 sm:grid-cols-2 md:grid-cols-4"
          >
            <div
              className={cn(
                "flex flex-col items-center justify-center rounded-lg border p-4 transition-all",
                businessDetails.urgency === "urgent" ? "border-red-500 bg-red-50 dark:bg-red-950/30" : "border-border",
              )}
            >
              <RadioGroupItem value="urgent" id="urgency-urgent" className="sr-only" />
              <Label htmlFor="urgency-urgent" className="cursor-pointer text-center">
                <span className="block text-lg font-medium mb-1">Urgent</span>
                <span className="text-sm text-muted-foreground">Immediate attention needed</span>
              </Label>
            </div>

            <div
              className={cn(
                "flex flex-col items-center justify-center rounded-lg border p-4 transition-all",
                businessDetails.urgency === "high"
                  ? "border-amber-500 bg-amber-50 dark:bg-amber-950/30"
                  : "border-border",
              )}
            >
              <RadioGroupItem value="high" id="urgency-high" className="sr-only" />
              <Label htmlFor="urgency-high" className="cursor-pointer text-center">
                <span className="block text-lg font-medium mb-1">High</span>
                <span className="text-sm text-muted-foreground">Within 1-2 weeks</span>
              </Label>
            </div>

            <div
              className={cn(
                "flex flex-col items-center justify-center rounded-lg border p-4 transition-all",
                businessDetails.urgency === "normal"
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-950/30"
                  : "border-border",
              )}
            >
              <RadioGroupItem value="normal" id="urgency-normal" className="sr-only" />
              <Label htmlFor="urgency-normal" className="cursor-pointer text-center">
                <span className="block text-lg font-medium mb-1">Normal</span>
                <span className="text-sm text-muted-foreground">Within 1 month</span>
              </Label>
            </div>

            <div
              className={cn(
                "flex flex-col items-center justify-center rounded-lg border p-4 transition-all",
                businessDetails.urgency === "low"
                  ? "border-green-500 bg-green-50 dark:bg-green-950/30"
                  : "border-border",
              )}
            >
              <RadioGroupItem value="low" id="urgency-low" className="sr-only" />
              <Label htmlFor="urgency-low" className="cursor-pointer text-center">
                <span className="block text-lg font-medium mb-1">Low</span>
                <span className="text-sm text-muted-foreground">Flexible timeline</span>
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  )
}
