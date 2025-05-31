"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export function useScrollToTop() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Scroll to top when the route changes
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [pathname, searchParams])
}

export function useScrollToHash() {
  const pathname = usePathname()

  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      const element = document.getElementById(id)

      if (element) {
        // Wait a bit for the page to fully render
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
        }, 100)
      }
    }
  }, [pathname])
}
