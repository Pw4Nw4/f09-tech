"use client"

import { useState, useEffect } from "react"

export function usePerformance() {
  const [isHighPerformanceDevice, setIsHighPerformanceDevice] = useState(true)

  useEffect(() => {
    // Simple performance check based on hardware concurrency
    if (typeof navigator !== "undefined" && navigator.hardwareConcurrency) {
      if (navigator.hardwareConcurrency < 4) {
        setIsHighPerformanceDevice(false)
      }
    }
  }, [])

  return { isHighPerformanceDevice }
}
