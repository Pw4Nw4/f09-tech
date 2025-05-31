"use client"

import { useEffect } from "react"

export function PerformanceOptimizer() {
  useEffect(() => {
    if (typeof window === "undefined") return

    // Preconnect to external domains
    const domains = ["https://fonts.googleapis.com", "https://fonts.gstatic.com"]
    domains.forEach((domain) => {
      const link = document.createElement("link")
      link.rel = "preconnect"
      link.href = domain
      link.crossOrigin = "anonymous"
      document.head.appendChild(link)
    })

    // Prefetch likely navigation paths
    const prefetchPaths = ["/services", "/contact", "/about", "/portfolio"]
    if (
      navigator.connection &&
      navigator.connection.saveData === false &&
      navigator.connection.effectiveType === "4g"
    ) {
      prefetchPaths.forEach((path) => {
        const link = document.createElement("link")
        link.rel = "prefetch"
        link.href = path
        document.head.appendChild(link)
      })
    }

    // Lazy load images
    const lazyLoadObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            const dataSrc = target.getAttribute("data-src")
            if (dataSrc) {
              if (target.tagName === "IMG") {
                ;(target as HTMLImageElement).src = dataSrc
              } else {
                target.style.backgroundImage = `url(${dataSrc})`
              }
              target.removeAttribute("data-src")
              lazyLoadObserver.unobserve(target)
            }
          }
        })
      },
      { rootMargin: "200px" },
    )

    document.querySelectorAll("[data-src]").forEach((el) => {
      lazyLoadObserver.observe(el)
    })

    return () => {
      lazyLoadObserver.disconnect()
    }
  }, [])

  return null
}
