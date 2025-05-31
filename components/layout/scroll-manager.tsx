"use client"

import { useScrollToTop, useScrollToHash } from "@/hooks/use-scroll"

export function ScrollManager() {
  // Use both scroll hooks
  useScrollToTop()
  useScrollToHash()

  // This is a utility component that doesn't render anything
  return null
}
