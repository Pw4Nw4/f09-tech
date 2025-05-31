"use client"

import type { FormData } from "../get-started-form"
import { Button } from "@/components/ui/button"
import { CheckCircle, Loader2, CalendarCheck, FileText } from "lucide-react"
import { motion } from "framer-motion"
import { format } from "date-fns"

interface SummaryStepProps {
  formData: FormData
  isSubmitting: boolean
  isSubmitted: boolean
  onSubmit: () => void
}

export default function SummaryStep({ formData, isSubmitting, isSubmitted, onSubmit }: SummaryStepProps) {
  const userTypeLabel = {
    individual: "Individual",
    retail: "Retail Business",
    enterprise: "Enterprise",
  }[formData.userType || ""]

  const serviceCategoryLabel = {
    repair: "Repair & Maintenance",
    security: "Security & Protection",
    network: "Network Solutions",
    cloud: "Cloud Services",
    custom: "Custom Solutions",
    support: "Ongoing Support",
  }[formData.serviceCategory || ""]

  const getNextSteps = () => {
    if (formData.userType === "individual") {
      return "A specialist will contact you to confirm your consultation appointment."
    } else {
      return "Our team will review your requirements and prepare a detailed quote."
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        className="text-center py-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 mb-6">
          <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-300" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Request Submitted Successfully!</h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Thank you for reaching out to F09 Tech.{" "}
          {formData.userType === "individual"
            ? "Our specialist will contact you within 24 hours to confirm your consultation details."
            : "Our team will analyze your requirements and prepare a detailed custom quote within 2 business days."}
          We'll be in touch shortly via your preferred contact method.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="outline" onClick={() => (window.location.href = "/")}>
            Return to Home
          </Button>
          <Button onClick={() => (window.location.href = "/services")}>Explore Our Services</Button>
        </div>

        {formData.userType !== "individual" && (
          <div className="mt-8 p-4 bg-muted/40 rounded-lg max-w-md mx-auto">
            <h3 className="font-medium mb-2">What happens next?</h3>
            <ol className="text-sm text-left space-y-2">
              <li className="flex items-start gap-2">
                <span className="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  1
                </span>
                <span>Our team reviews your requirements in detail</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  2
                </span>
                <span>We prepare a customized quote based on your needs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  3
                </span>
                <span>A specialist contacts you to discuss the proposal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  4
                </span>
                <span>We finalize the details and begin implementation</span>
              </li>
            </ol>
          </div>
        )}
      </motion.div>
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Review Your Request</h2>
      <p className="text-muted-foreground mb-6">Please review your information before submitting.</p>

      <div className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="bg-muted/50 rounded-lg p-4">
            <h3 className="font-medium text-sm text-muted-foreground mb-2">User Type</h3>
            <p className="font-medium">{userTypeLabel}</p>
          </div>

          <div className="bg-muted/50 rounded-lg p-4">
            <h3 className="font-medium text-sm text-muted-foreground mb-2">Service Category</h3>
            <p className="font-medium">{serviceCategoryLabel}</p>
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-4">
          <h3 className="font-medium text-sm text-muted-foreground mb-2">Selected Services</h3>
          <div className="flex flex-wrap gap-2 mt-1">
            {formData.specificServices.map((service) => (
              <span
                key={service}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-4">
          <h3 className="font-medium text-sm text-muted-foreground mb-2">Contact Information</h3>
          <div className="grid gap-1">
            <p>
              <span className="text-muted-foreground">Name:</span> {formData.userDetails.name}
            </p>
            <p>
              <span className="text-muted-foreground">Email:</span> {formData.userDetails.email}
            </p>
            {formData.userDetails.phone && (
              <p>
                <span className="text-muted-foreground">Phone:</span> {formData.userDetails.phone}
              </p>
            )}
            {formData.userDetails.company && (
              <p>
                <span className="text-muted-foreground">Company:</span> {formData.userDetails.company}
              </p>
            )}
            <p>
              <span className="text-muted-foreground">Preferred Contact:</span>{" "}
              {formData.userDetails.preferredContact === "email" ? "Email" : "Phone"}
            </p>
          </div>
        </div>

        {formData.userType === "individual" && formData.scheduling?.preferredDate && (
          <div className="bg-muted/50 rounded-lg p-4">
            <h3 className="font-medium text-sm text-muted-foreground mb-2">Consultation Details</h3>
            <div className="flex items-center gap-2 mb-2">
              <CalendarCheck className="h-4 w-4 text-primary" />
              <p>
                <span className="font-medium">Preferred Date:</span>{" "}
                {format(formData.scheduling.preferredDate, "EEEE, MMMM d, yyyy")}
              </p>
            </div>
            <p>
              <span className="font-medium">Preferred Time:</span>{" "}
              {formData.scheduling.preferredTime === "morning"
                ? "Morning (9:00 AM - 12:00 PM)"
                : formData.scheduling.preferredTime === "afternoon"
                  ? "Afternoon (1:00 PM - 4:00 PM)"
                  : "Evening (4:00 PM - 6:00 PM)"}
            </p>
            <p>
              <span className="font-medium">Consultation Type:</span>{" "}
              {formData.scheduling.consultationType === "video"
                ? "Video Call"
                : formData.scheduling.consultationType === "phone"
                  ? "Phone Call"
                  : "In-Person Meeting"}
            </p>
            {formData.scheduling.alternateDate && (
              <p>
                <span className="font-medium">Alternate Date:</span>{" "}
                {format(formData.scheduling.alternateDate, "EEEE, MMMM d, yyyy")}
              </p>
            )}
          </div>
        )}

        {(formData.userType === "retail" || formData.userType === "enterprise") && formData.businessDetails && (
          <div className="bg-muted/50 rounded-lg p-4">
            <h3 className="font-medium text-sm text-muted-foreground mb-2">Business Details</h3>
            <div className="flex items-center gap-2 mb-2">
              <FileText className="h-4 w-4 text-primary" />
              <p>
                <span className="font-medium">Company Size:</span> {formData.businessDetails.companySize} employees
              </p>
            </div>
            <p>
              <span className="font-medium">Industry:</span> {formData.businessDetails.industry}
            </p>
            <p>
              <span className="font-medium">Project Urgency:</span>{" "}
              {formData.businessDetails.urgency.charAt(0).toUpperCase() + formData.businessDetails.urgency.slice(1)}
            </p>
            {formData.businessDetails.existingInfrastructure.length > 0 && (
              <div className="mt-2">
                <span className="font-medium">Existing Infrastructure:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {formData.businessDetails.existingInfrastructure.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {formData.userDetails.message && (
          <div className="bg-muted/50 rounded-lg p-4">
            <h3 className="font-medium text-sm text-muted-foreground mb-2">Additional Details</h3>
            <p className="text-sm">{formData.userDetails.message}</p>
          </div>
        )}

        <div className="pt-4">
          <Button onClick={onSubmit} disabled={isSubmitting} className="w-full" size="lg">
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Request"
            )}
          </Button>

          <p className="text-center text-sm text-muted-foreground mt-4">
            By submitting, you agree to our{" "}
            <a href="/terms" className="underline hover:text-primary">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="underline hover:text-primary">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
