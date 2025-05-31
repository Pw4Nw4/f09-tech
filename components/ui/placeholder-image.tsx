import type React from "react"
import { cn } from "@/lib/utils"

interface PlaceholderImageProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  category?: string
  variant?: "portfolio" | "success-story"
  seed?: number
}

export function PlaceholderImage({
  title = "Project Title",
  category = "Category",
  variant = "portfolio",
  seed = 1,
  className,
  ...props
}: PlaceholderImageProps) {
  // Generate consistent colors based on seed
  const getColor = (base: number) => {
    const hue = (base * 137.5 + seed * 40) % 360
    return `hsl(${hue}, 65%, 65%)`
  }

  const primaryColor = getColor(1)
  const secondaryColor = getColor(2)
  const accentColor = getColor(3)

  // Different patterns for portfolio vs success story
  const isPortfolio = variant === "portfolio"

  return (
    <div
      className={cn("relative w-full h-full flex items-center justify-center overflow-hidden bg-muted", className)}
      {...props}
    >
      <div className="absolute inset-0" style={{ opacity: 0.7 }}>
        {isPortfolio ? (
          // Portfolio pattern - geometric shapes
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 800 600"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <rect width="100%" height="100%" fill={primaryColor} opacity="0.3" />
            <circle cx="400" cy="300" r="200" fill={secondaryColor} opacity="0.4" />
            <rect
              x="100"
              y="100"
              width="600"
              height="400"
              fill="none"
              stroke={accentColor}
              strokeWidth="20"
              opacity="0.5"
            />
            <path d="M100,300 L700,300" stroke="white" strokeWidth="5" opacity="0.7" />
            <path d="M400,100 L400,500" stroke="white" strokeWidth="5" opacity="0.7" />
            <circle cx="400" cy="300" r="50" fill="white" opacity="0.2" />
          </svg>
        ) : (
          // Success story pattern - more organic/flowing
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 800 600"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <rect width="100%" height="100%" fill={primaryColor} opacity="0.3" />
            <path
              d="M0,100 Q200,50 400,200 T800,300"
              fill="none"
              stroke={secondaryColor}
              strokeWidth="15"
              opacity="0.5"
            />
            <path
              d="M0,300 Q200,400 400,300 T800,400"
              fill="none"
              stroke={accentColor}
              strokeWidth="15"
              opacity="0.5"
            />
            <path d="M0,500 Q200,450 400,500 T800,450" fill="none" stroke="white" strokeWidth="10" opacity="0.3" />
            <circle cx="150" cy="150" r="50" fill="white" opacity="0.2" />
            <circle cx="650" cy="450" r="50" fill="white" opacity="0.2" />
          </svg>
        )}
      </div>

      <div className="relative z-10 text-center p-4 bg-background/80 rounded-md backdrop-blur-sm max-w-[80%]">
        <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">{category}</div>
        <div className="font-bold text-foreground">{title}</div>
      </div>
    </div>
  )
}
