"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import UserTypeStep from "./steps/user-type-step"
import ServiceCategoryStep from "./steps/service-category-step"
import SpecificServicesStep from "./steps/specific-services-step"
import UserDetailsStep from "./steps/user-details-step"
import BusinessDetailsStep from "./steps/business-details-step"
import SchedulingStep from "./steps/scheduling-step"
import QuotePreviewStep from "./steps/quote-preview-step"
import SummaryStep from "./steps/summary-step"
import FormProgress from "./form-progress"
import FormNavigation from "./form-navigation"
import { useToast } from "@/components/ui/use-toast"

export type UserType = "individual" | "retail" | "enterprise" | null
export type ServiceCategory = "repair" | "security" | "network" | "cloud" | "custom" | "support" | null
export type FormData = {
  userType: UserType
  serviceCategory: ServiceCategory
  specificServices: string[]
  userDetails: {
    name: string
    email: string
    phone: string
    company?: string
    message: string
    budget?: string
    timeline?: string
    preferredContact: "email" | "phone"
  }
  businessDetails?: {
    companySize: string
    industry: string
    existingInfrastructure: string[]
    urgency: string
  }
  scheduling?: {
    preferredDate: Date | null
    preferredTime: string
    alternateDate: Date | null
    consultationType: string
  }
}

const initialFormData: FormData = {
  userType: null,
  serviceCategory: null,
  specificServices: [],
  userDetails: {
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    budget: "",
    timeline: "",
    preferredContact: "email",
  },
  businessDetails: {
    companySize: "",
    industry: "",
    existingInfrastructure: [],
    urgency: "normal",
  },
  scheduling: {
    preferredDate: null,
    preferredTime: "morning",
    alternateDate: null,
    consultationType: "video",
  },
}

export default function GetStartedForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  // Determine steps based on user type
  const getSteps = () => {
    const baseSteps = ["User Type", "Service Category", "Specific Services", "Your Details"]

    if (formData.userType === "individual") {
      return [...baseSteps, "Schedule Consultation", "Summary"]
    } else if (formData.userType === "retail" || formData.userType === "enterprise") {
      return [...baseSteps, "Business Details", "Quote Preview", "Summary"]
    }

    return baseSteps
  }

  const steps = getSteps()

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const updateUserDetails = (field: keyof FormData["userDetails"], value: any) => {
    setFormData((prev) => ({
      ...prev,
      userDetails: {
        ...prev.userDetails,
        [field]: value,
      },
    }))
  }

  const updateBusinessDetails = (field: keyof NonNullable<FormData["businessDetails"]>, value: any) => {
    setFormData((prev) => ({
      ...prev,
      businessDetails: {
        ...prev.businessDetails!,
        [field]: value,
      },
    }))
  }

  const updateScheduling = (field: keyof NonNullable<FormData["scheduling"]>, value: any) => {
    setFormData((prev) => ({
      ...prev,
      scheduling: {
        ...prev.scheduling!,
        [field]: value,
      },
    }))
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  const calculateEstimatedCost = () => {
    if (formData.userType !== "retail" && formData.userType !== "enterprise") return null

    // Base costs for different service categories
    const baseCosts = {
      repair: 150,
      security: 500,
      network: 750,
      cloud: 1000,
      custom: 1500,
      support: 300,
    }

    // Multipliers based on business size
    const sizeMultipliers = {
      "1-10": 1,
      "11-50": 1.5,
      "51-200": 2,
      "201-500": 2.5,
      "501+": 3,
    }

    // Urgency factors
    const urgencyFactors = {
      urgent: 1.5,
      high: 1.25,
      normal: 1,
      low: 0.9,
    }

    const baseServiceCost = baseCosts[formData.serviceCategory || "repair"] || 300
    const servicesCount = formData.specificServices.length || 1
    const sizeMultiplier = sizeMultipliers[formData.businessDetails?.companySize as keyof typeof sizeMultipliers] || 1
    const urgencyFactor = urgencyFactors[formData.businessDetails?.urgency as keyof typeof urgencyFactors] || 1

    // Calculate estimated cost range
    const baseCost = baseServiceCost * servicesCount * sizeMultiplier * urgencyFactor
    const minCost = Math.round((baseCost * 0.8) / 100) * 100
    const maxCost = Math.round((baseCost * 1.2) / 100) * 100

    return {
      minCost,
      maxCost,
      currency: "USD",
      disclaimer: "This is an estimated range. Final pricing will be determined after consultation.",
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
      // Determine department based on user type and service category
      let department = ""
      let routingId = ""

      if (formData.userType === "individual") {
        department = "individual-services"
        routingId = "IND-" + Math.floor(100000 + Math.random() * 900000)
      } else if (formData.userType === "retail") {
        department = "retail-services"
        routingId = "RET-" + Math.floor(100000 + Math.random() * 900000)
      } else {
        department = "enterprise-services"
        routingId = "ENT-" + Math.floor(100000 + Math.random() * 900000)
      }

      // Further refine routing based on service category
      if (formData.serviceCategory === "security") {
        department += "-security"
      } else if (formData.serviceCategory === "network") {
        department += "-network"
      } else if (formData.serviceCategory === "cloud") {
        department += "-cloud"
      }

      // In a real implementation, this would send data to your backend
      // Here we're simulating the API call
      console.log(`Routing request ${routingId} to department: ${department}`)
      console.log("Form data:", formData)

      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Show success toast with more specific information
      toast({
        title: "Request submitted successfully!",
        description:
          formData.userType === "individual"
            ? `A specialist will contact you to confirm your consultation. Reference: ${routingId}`
            : `Your quote request has been sent to our team. Reference: ${routingId}`,
        variant: "default",
      })

      // Show success state
      setIsSubmitted(true)
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <UserTypeStep selectedType={formData.userType} onSelect={(type) => updateFormData("userType", type)} />
      case 1:
        return (
          <ServiceCategoryStep
            selectedCategory={formData.serviceCategory}
            userType={formData.userType}
            onSelect={(category) => updateFormData("serviceCategory", category)}
          />
        )
      case 2:
        return (
          <SpecificServicesStep
            selectedServices={formData.specificServices}
            userType={formData.userType}
            serviceCategory={formData.serviceCategory}
            onSelect={(services) => updateFormData("specificServices", services)}
          />
        )
      case 3:
        return (
          <UserDetailsStep
            userDetails={formData.userDetails}
            userType={formData.userType}
            onUpdate={updateUserDetails}
          />
        )
      case 4:
        if (formData.userType === "individual") {
          return <SchedulingStep scheduling={formData.scheduling!} onUpdate={updateScheduling} />
        } else {
          return (
            <BusinessDetailsStep
              businessDetails={formData.businessDetails!}
              userType={formData.userType}
              onUpdate={updateBusinessDetails}
            />
          )
        }
      case 5:
        if (formData.userType === "individual") {
          return (
            <SummaryStep
              formData={formData}
              isSubmitting={isSubmitting}
              isSubmitted={isSubmitted}
              onSubmit={handleSubmit}
            />
          )
        } else {
          return <QuotePreviewStep formData={formData} estimatedCost={calculateEstimatedCost()} />
        }
      case 6:
        return (
          <SummaryStep
            formData={formData}
            isSubmitting={isSubmitting}
            isSubmitted={isSubmitted}
            onSubmit={handleSubmit}
          />
        )
      default:
        return null
    }
  }

  const isNextDisabled = () => {
    switch (currentStep) {
      case 0:
        return !formData.userType
      case 1:
        return !formData.serviceCategory
      case 2:
        return formData.specificServices.length === 0
      case 3:
        return !formData.userDetails.name || !formData.userDetails.email
      case 4:
        if (formData.userType === "individual") {
          return !formData.scheduling?.preferredDate
        } else {
          return !formData.businessDetails?.companySize || !formData.businessDetails?.industry
        }
      default:
        return false
    }
  }

  return (
    <div className="bg-gradient-to-b from-background to-background/80 min-h-screen">
      <div className="container py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-2">Get Started with F09 Tech</h1>
          <p className="text-xl text-muted-foreground">
            Tell us about your needs and we'll connect you with the right solution
          </p>
        </div>

        <FormProgress currentStep={currentStep} totalSteps={steps.length} stepTitles={steps} />

        <div className="bg-card rounded-xl shadow-lg p-6 sm:p-8 mt-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-5 z-0"></div>
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>

            {!isSubmitted && (
              <FormNavigation
                currentStep={currentStep}
                totalSteps={steps.length}
                onNext={handleNext}
                onBack={handleBack}
                isNextDisabled={isNextDisabled()}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
