"use client"

import { useEffect } from "react"
import Script from "next/script"

interface ScriptOptimizerProps {
  src: string
  strategy?: "beforeInteractive" | "afterInteractive" | "lazyOnload" | "worker"
  onLoad?: () => void
  id?: string
}

export function ScriptOptimizer({ src, strategy = "lazyOnload", onLoad, id }: ScriptOptimizerProps) {
  useEffect(() => {
    // Track script loading performance
    return () => {
      if (id && typeof window !== "undefined") {
        const scriptElement = document.getElementById(id)
        if (scriptElement) {
          const loadTime = performance.getEntriesByName(src, "resource")
          if (loadTime.length > 0) {
            console.log(`Script ${id} loaded in ${loadTime[0].duration.toFixed(2)}ms`)
          }
        }
      }
    }
  }, [src, id])

  return <Script src={src} strategy={strategy} onLoad={onLoad} id={id} />
}
