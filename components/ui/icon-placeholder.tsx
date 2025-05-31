import type React from "react"
import { cn } from "@/lib/utils"

interface IconPlaceholderProps {
  icon: React.ReactNode
  className?: string
  bgClassName?: string
}

export function IconPlaceholder({ icon, className, bgClassName }: IconPlaceholderProps) {
  return (
    <div className={cn("flex items-center justify-center rounded-full", bgClassName)}>
      <div className={cn("flex items-center justify-center", className)}>{icon}</div>
    </div>
  )
}
