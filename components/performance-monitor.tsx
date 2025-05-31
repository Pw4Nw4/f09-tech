"use client"

import { useEffect, useState } from "react"
import { isClient } from "@/lib/performance-utils"

interface PerformanceMetrics {
  fcp: number | null
  lcp: number | null
  cls: number | null
  fid: number | null
  ttfb: number | null
}

export function PerformanceMonitor({ debug = false }: { debug?: boolean }) {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    cls: null,
    fid: null,
    ttfb: null,
  })

  useEffect(() => {
    if (!isClient || !debug) return

    // First Contentful Paint
    const paintObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (entry.name === "first-contentful-paint") {
          setMetrics((prev) => ({ ...prev, fcp: entry.startTime }))
        }
      }
    })
    paintObserver.observe({ type: "paint", buffered: true })

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      const lastEntry = entries[entries.length - 1]
      setMetrics((prev) => ({ ...prev, lcp: lastEntry.startTime }))
    })
    lcpObserver.observe({ type: "largest-contentful-paint", buffered: true })

    // Cumulative Layout Shift
    let clsValue = 0
    const clsObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value
          setMetrics((prev) => ({ ...prev, cls: clsValue }))
        }
      }
    })
    clsObserver.observe({ type: "layout-shift", buffered: true })

    // First Input Delay
    const fidObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        setMetrics((prev) => ({ ...prev, fid: (entry as any).processingStart - entry.startTime }))
      }
    })
    fidObserver.observe({ type: "first-input", buffered: true })

    // Time to First Byte
    const navigationEntries = performance.getEntriesByType("navigation")
    if (navigationEntries.length > 0) {
      const ttfb = (navigationEntries[0] as any).responseStart
      setMetrics((prev) => ({ ...prev, ttfb }))
    }

    return () => {
      paintObserver.disconnect()
      lcpObserver.disconnect()
      clsObserver.disconnect()
      fidObserver.disconnect()
    }
  }, [debug])

  if (!debug) return null

  return (
    <div className="fixed bottom-0 left-0 z-50 p-2 bg-black/80 text-white text-xs font-mono">
      <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : "N/A"}</div>
      <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : "N/A"}</div>
      <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : "N/A"}</div>
      <div>FID: {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : "N/A"}</div>
      <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : "N/A"}</div>
    </div>
  )
}
