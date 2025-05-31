export type ImageSize = "thumbnail" | "small" | "medium" | "large" | "original"

export interface OptimizedImageProps {
  src: string
  alt: string
  size?: ImageSize
  className?: string
  priority?: boolean
}

export const getImageSizeProps = (size: ImageSize) => {
  switch (size) {
    case "thumbnail":
      return { width: 100, height: 100 }
    case "small":
      return { width: 300, height: 200 }
    case "medium":
      return { width: 600, height: 400 }
    case "large":
      return { width: 900, height: 600 }
    case "original":
    default:
      return {}
  }
}
