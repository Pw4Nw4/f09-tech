"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface FormNavigationProps {
  currentStep: number
  totalSteps: number
  onNext: () => void
  onBack: () => void
  isNextDisabled: boolean
}

export default function FormNavigation({
  currentStep,
  totalSteps,
  onNext,
  onBack,
  isNextDisabled,
}: FormNavigationProps) {
  const isLastStep = currentStep === totalSteps - 1

  return (
    <div className="flex justify-between mt-8 pt-4 border-t border-border">
      <Button variant="outline" onClick={onBack} disabled={currentStep === 0} className="flex items-center gap-2">
        <ArrowLeft className="w-4 h-4" />
        Back
      </Button>

      <Button onClick={onNext} disabled={isNextDisabled} className="flex items-center gap-2">
        {isLastStep ? "Review" : "Next"}
        {!isLastStep && <ArrowRight className="w-4 h-4" />}
      </Button>
    </div>
  )
}
