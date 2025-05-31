"use client"

import { CheckIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface FormProgressProps {
  currentStep: number
  totalSteps: number
  stepTitles: string[]
}

export default function FormProgress({ currentStep, totalSteps, stepTitles }: FormProgressProps) {
  return (
    <div className="hidden sm:block">
      <div className="relative">
        {/* Progress bar */}
        <div className="absolute top-5 left-0 w-full h-0.5 bg-muted">
          <div
            className="h-full bg-primary transition-all duration-500 ease-in-out"
            style={{ width: `${(currentStep / (totalSteps - 1)) * 100}%` }}
          ></div>
        </div>

        {/* Steps */}
        <div className="relative flex justify-between">
          {stepTitles.map((title, index) => {
            const isCompleted = index < currentStep
            const isActive = index === currentStep

            return (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                    isCompleted
                      ? "bg-primary text-primary-foreground"
                      : isActive
                        ? "bg-primary/90 text-primary-foreground ring-4 ring-primary/20"
                        : "bg-muted text-muted-foreground",
                  )}
                >
                  {isCompleted ? <CheckIcon className="w-5 h-5" /> : <span>{index + 1}</span>}
                </div>
                <span
                  className={cn("mt-2 text-sm font-medium", isActive ? "text-foreground" : "text-muted-foreground")}
                >
                  {title}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
