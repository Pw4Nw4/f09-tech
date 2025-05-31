"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { CheckCircle, ChevronLeft, ChevronRight, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { submitApplication } from "./actions"

// Form steps components
import PersonalInfoStep from "./steps/PersonalInfoStep"
import EducationStep from "./steps/EducationStep"
import ExperienceStep from "./steps/ExperienceStep"
import InterestsStep from "./steps/InterestsStep"
import GoalsStep from "./steps/GoalsStep"
import ReviewStep from "./steps/ReviewStep"

export default function MentorshipApplicationClient() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",

    // Education
    highestEducation: "",
    fieldOfStudy: "",
    schoolName: "",
    graduationYear: "",
    relevantCourses: "",
    certifications: "",

    // Experience
    yearsExperience: "",
    currentRole: "",
    currentCompany: "",
    relevantSkills: "",
    technicalBackground: "",
    projectExperience: "",

    // Interests
    areasOfInterest: [] as string[],
    preferredTechnologies: [] as string[],
    careerPath: "",
    mentorshipType: "",
    timeCommitment: "",

    // Goals
    shortTermGoals: "",
    longTermGoals: "",
    expectationsFromProgram: "",
    contributionToProgram: "",
    challengesToOvercome: "",

    // Additional
    howDidYouHear: "",
    additionalComments: "",
  })

  const steps = [
    { name: "Personal Information", component: PersonalInfoStep },
    { name: "Education", component: EducationStep },
    { name: "Experience", component: ExperienceStep },
    { name: "Interests", component: InterestsStep },
    { name: "Goals", component: GoalsStep },
    { name: "Review", component: ReviewStep },
  ]

  const updateFormData = (stepData: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...stepData }))
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      await submitApplication(formData)
      router.push("/mentorship/apply/success")
    } catch (error) {
      console.error("Error submitting application:", error)
      setIsSubmitting(false)
      // Handle error state
    }
  }

  const CurrentStepComponent = steps[currentStep].component

  return (
    <main className="bg-slate-50 min-h-screen pb-16">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Mentorship Program Application
            </h1>
            <p className="mt-2 text-lg text-slate-600">Complete the form below to apply for our mentorship program</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center ${index <= currentStep ? "text-blue-600" : "text-slate-400"}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
                      index < currentStep
                        ? "bg-blue-600 text-white"
                        : index === currentStep
                          ? "border-2 border-blue-600 text-blue-600"
                          : "border-2 border-slate-300 text-slate-300"
                    }`}
                  >
                    {index < currentStep ? <CheckCircle className="w-5 h-5" /> : index + 1}
                  </div>
                  <span className="text-xs hidden sm:block">{step.name}</span>
                </div>
              ))}
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Form Step */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-md p-6 sm:p-8"
          >
            <h2 className="text-xl font-semibold mb-4 text-slate-800">{steps[currentStep].name}</h2>

            <CurrentStepComponent formData={formData} updateFormData={updateFormData} />

            <div className="mt-8 flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="flex items-center"
              >
                <ChevronLeft className="mr-1 h-4 w-4" />
                Previous
              </Button>

              {currentStep < steps.length - 1 ? (
                <Button type="button" onClick={handleNext} className="flex items-center bg-blue-600 hover:bg-blue-700">
                  Next
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex items-center bg-green-600 hover:bg-green-700"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>Submit Application</>
                  )}
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
