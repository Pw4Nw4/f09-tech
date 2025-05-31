import type React from "react"
import { cn } from "@/lib/utils"

interface ResponsiveContainerProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export function ResponsiveContainer({ children, className, as: Component = "div" }: ResponsiveContainerProps) {
  return (
    <Component
      className={cn(
        "w-full px-4 sm:px-6 md:px-8 mx-auto",
        "max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1140px] xl:max-w-[1320px]",
        className,
      )}
    >
      {children}
    </Component>
  )
}
