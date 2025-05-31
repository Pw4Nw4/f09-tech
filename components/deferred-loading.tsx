"use client"

import { useState, useEffect, type ReactNode } from "react"

interface DeferredLoadingProps {
  children: ReactNode
  delay?: number
  fallback?: ReactNode
  priority?: "low" | "medium" | "high"
}

export function DeferredLoading({ children, delay = 1000, fallback = null, priority = "low" }: DeferredLoadingProps) {
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    if (priority === "high") {
      // High priority - load almost immediately
      timeoutId = setTimeout(() => setShouldRender(true), 100)
    } else if (priority === "medium") {
      // Medium priority - load after a short delay
      timeoutId = setTimeout(() => setShouldRender(true), 500)
    } else {
      // Low priority - use requestIdleCallback if available, otherwise use the specified delay
      if ("requestIdleCallback" in window) {
        const idleCallbackId = (window as any).requestIdleCallback(
          () => {
            setShouldRender(true)
          },
          { timeout: delay + 1000 },
        ) // Add 1s to the timeout as a fallback

        return () => {
          if ("cancelIdleCallback" in window) {
            ;(window as any).cancelIdleCallback(idleCallbackId)
          }
        }
      } else {
        timeoutId = setTimeout(() => setShouldRender(true), delay)
      }
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [delay, priority])

  return shouldRender ? children : fallback
}
