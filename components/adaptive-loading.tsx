"use client"

import { useState, useEffect, type ReactNode } from "react"
import { isLowEndDevice } from "@/lib/performance-utils"

interface AdaptiveLoadingProps {
  children: ReactNode
  fallback: ReactNode
  threshold?: "low" | "medium" | "high"
}

export function AdaptiveLoading({ children, fallback, threshold = "low" }: AdaptiveLoadingProps) {
  const [shouldRenderFull, setShouldRenderFull] = useState(false)

  useEffect(() => {
    // For medium and high thresholds, we're more aggressive about using the fallback
    const isLowEnd = isLowEndDevice()
    const shouldUseSimpleVersion =
      (threshold === "low" && isLowEnd) ||
      (threshold === "medium" && (isLowEnd || window.innerWidth < 768)) ||
      (threshold === "high" && (isLowEnd || window.innerWidth < 1024))

    setShouldRenderFull(!shouldUseSimpleVersion)
  }, [threshold])

  return shouldRenderFull ? children : fallback
}
