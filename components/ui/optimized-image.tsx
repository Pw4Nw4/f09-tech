"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  ...props
}: OptimizedImageProps & Omit<React.ComponentProps<typeof Image>, "src" | "alt">) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    // Set up intersection observer for lazy loading
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px" },
    )

    const id = `image-${src.replace(/\W/g, "")}`
    const element = document.getElementById(id)

    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [src])

  return (
    <div
      id={`image-${src.replace(/\W/g, "")}`}
      className={cn("overflow-hidden relative", className)}
      style={{ aspectRatio: width && height ? `${width}/${height}` : "16/9" }}
    >
      {(isInView || priority) && (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width || 800}
          height={height || 450}
          className={cn("object-cover transition-opacity duration-500", isLoaded ? "opacity-100" : "opacity-0")}
          onLoad={() => setIsLoaded(true)}
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          {...props}
        />
      )}
    </div>
  )
}
