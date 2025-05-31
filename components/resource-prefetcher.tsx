"use client"

import { useEffect } from "react"
import { preloadCriticalResources } from "@/lib/performance-utils"

// Critical resources to preload
const criticalResources = [
  // Main navigation pages
  "/services",
  "/about",
  "/contact",

  // Critical images
  "/images/hero-bg.jpg",

  // Critical scripts
  // Add any critical third-party scripts here
]

export function ResourcePrefetcher() {
  useEffect(() => {
    // Wait until the page has loaded and is idle
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      ;(window as any).requestIdleCallback(() => {
        preloadCriticalResources(criticalResources)
      })
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      setTimeout(() => {
        preloadCriticalResources(criticalResources)
      }, 2000)
    }
  }, [])

  return null
}
