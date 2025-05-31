"use client"

import type { FormData } from "../get-started-form"
import { motion } from "framer-motion"
import { CheckCircle, AlertCircle, Clock, Building, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface QuotePreviewStepProps {
  formData: FormData
  estimatedCost: {
    minCost: number
    maxCost: number
    currency: string
    disclaimer: string
  } | null
}

export default function QuotePreviewStep({ formData, estimatedCost }: QuotePreviewStepProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: estimatedCost?.currency || "USD",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getUrgencyLabel = () => {
    switch (formData.businessDetails?.urgency) {
      case "urgent":
        return { label: "Urgent", color: "text-red-500 bg-red-100 dark:bg-red-950/30" }
      case "high":
        return { label: "High Priority", color: "text-amber-500 bg-amber-100 dark:bg-amber-950/30" }
      case "normal":
        return { label: "Normal", color: "text-blue-500 bg-blue-100 dark:bg-blue-950/30" }
      case "low":
        return { label: "Low Priority", color: "text-green-500 bg-green-100 dark:bg-green-950/30" }
      default:
        return { label: "Normal", color: "text-blue-500 bg-blue-100 dark:bg-blue-950/30" }
    }
  }

  const urgency = getUrgencyLabel()

  const getServiceCategoryLabel = () => {
    switch (formData.serviceCategory) {
      case "repair":
        return "Repair & Maintenance"
      case "security":
        return "Security & Protection"
      case "network":
        return "Network Solutions"
      case "cloud":
        return "Cloud Services"
      case "custom":
        return "Custom Solutions"
      case "support":
        return "Ongoing Support"
      default:
        return "Services"
    }
  }

  const getEstimatedTimeframe = () => {
    switch (formData.businessDetails?.urgency) {
      case "urgent":
        return "1-3 business days"
      case "high":
        return "1-2 weeks"
      case "normal":
        return "2-4 weeks"
      case "low":
        return "4-6 weeks"
      default:
        return "2-4 weeks"
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Your Custom Quote Preview</h2>
      <p className="text-muted-foreground mb-6">
        Based on your selections, we've prepared an estimated quote for your review.
      </p>

      <div className="space-y-6">
        <Card className="border-primary/20">
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <span>Estimated Quote</span>
              {estimatedCost && (
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {formatCurrency(estimatedCost.minCost)} - {formatCurrency(estimatedCost.maxCost)}
                </span>
              )}
            </CardTitle>
            <CardDescription>
              Customized {formData.userType === "retail" ? "Retail" : "Enterprise"} {getServiceCategoryLabel()} Solution
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Selected Services</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formData.specificServices.map((service) => (
                      <Badge key={service} variant="outline" className="bg-primary/5">
                        {service}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {formData.specificServices.length} service{formData.specificServices.length !== 1 ? "s" : ""}{" "}
                    selected
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Building className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Business Profile</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    <span className="font-medium">{formData.businessDetails?.industry}</span> industry with{" "}
                    <span className="font-medium">{formData.businessDetails?.companySize}</span> employees
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Infrastructure:{" "}
                    {formData.businessDetails?.existingInfrastructure.length
                      ? formData.businessDetails?.existingInfrastructure.join(", ")
                      : "Not specified"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Priority & Timeline</h3>
                  <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-2">
                    <Badge className={urgency.color}>{urgency.label}</Badge>
                    <span className="text-sm text-muted-foreground">Est. delivery: {getEstimatedTimeframe()}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Implementation Team</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    Your project will be handled by our specialized{" "}
                    {formData.serviceCategory === "security"
                      ? "cybersecurity"
                      : formData.serviceCategory === "network"
                        ? "network infrastructure"
                        : formData.serviceCategory === "cloud"
                          ? "cloud solutions"
                          : "technical"}{" "}
                    team.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-muted/50 flex items-start gap-2 text-sm">
            <AlertCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <p className="text-muted-foreground">
              {estimatedCost?.disclaimer ||
                "This is an estimated range based on your selections. Final pricing will be determined after a detailed consultation."}
            </p>
          </CardFooter>
        </Card>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-muted/50 rounded-lg p-4 border border-border"
        >
          <h3 className="font-medium mb-2">What's included in this quote:</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
              <span>Initial consultation and needs assessment</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
              <span>Custom solution design based on your requirements</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
              <span>Implementation and setup of selected services</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
              <span>Testing and quality assurance</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
              <span>30 days of post-implementation support</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}
