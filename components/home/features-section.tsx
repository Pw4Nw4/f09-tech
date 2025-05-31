"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { Shield, Lock, Clock, Zap, Server, Cloud } from "lucide-react"
import { useMobileDetection } from "@/hooks/use-mobile-detection"
import { usePerformance } from "@/hooks/use-performance"

const features = [
  {
    icon: Shield,
    title: "Advanced Threat Protection",
    description: "Proactively detect and neutralize cyber threats before they impact your business.",
    color: "text-brand-500",
  },
  {
    icon: Lock,
    title: "Zero Trust Architecture",
    description: "Implement security frameworks that verify every user and device before granting access.",
    color: "text-accent1-500",
  },
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description: "Round-the-clock surveillance of your systems to ensure continuous protection.",
    color: "text-accent2-500",
  },
  {
    icon: Zap,
    title: "Rapid Incident Response",
    description: "Swift action when security incidents occur to minimize impact and recovery time.",
    color: "text-brand-500",
  },
  {
    icon: Server,
    title: "Infrastructure Optimization",
    description: "Streamline your IT infrastructure for maximum efficiency and performance.",
    color: "text-accent1-500",
  },
  {
    icon: Cloud,
    title: "Cloud Transformation",
    description: "Seamlessly migrate and optimize your operations in the cloud environment.",
    color: "text-accent2-500",
  },
]

export function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const { isMobile, isTablet } = useMobileDetection()
  const { isHighPerformanceDevice } = usePerformance()
  const [isInView, setIsInView] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Set up intersection observer for performance
  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [sectionRef])

  // Only use parallax effect on high performance devices
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  // Adjust animation settings based on device capabilities
  const shouldAnimate = isClient && !prefersReducedMotion && isHighPerformanceDevice
  const animationDuration = shouldAnimate ? 0.5 : 0

  if (!isClient) {
    return null // Prevent hydration mismatch
  }

  return (
    <section ref={sectionRef} className="section bg-background py-12 md:py-20">
      <div className="container">
        <div className="mx-auto mb-10 md:mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
            Our Capabilities
          </span>
          <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold">Comprehensive Security & IT Solutions</h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            We deliver end-to-end solutions designed to protect, optimize, and transform your business technology.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={shouldAnimate ? { opacity: 0, y: 20 } : {}}
              whileInView={shouldAnimate ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: animationDuration, delay: shouldAnimate ? index * 0.1 : 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="card-hover rounded-xl border border-border bg-card p-4 sm:p-6"
            >
              <div className="mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-muted">
                <feature.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${feature.color}`} />
              </div>
              <h3 className="mb-2 text-lg sm:text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {isInView && (
          <motion.div style={shouldAnimate ? { y } : {}} className="mt-12 md:mt-20">
            <div className="relative mx-auto h-[300px] sm:h-[350px] md:h-[400px] max-w-4xl overflow-hidden rounded-xl border border-border">
              <OptimizedImage
                src="/images/security-dashboard.png"
                alt="Security Dashboard"
                size="large"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent p-4 sm:p-6 md:p-8 backdrop-blur-sm">
                <div className="max-w-md">
                  <h3 className="mb-2 sm:mb-4 text-xl sm:text-2xl font-bold">Real-time Security Monitoring</h3>
                  <p className="mb-4 sm:mb-6 text-sm sm:text-base text-muted-foreground">
                    Our advanced dashboard provides comprehensive visibility into your security posture with real-time
                    threat detection and response capabilities.
                  </p>
                  <ul className="space-y-2 text-sm sm:text-base">
                    {[
                      "Threat Intelligence",
                      "Vulnerability Management",
                      "Compliance Monitoring",
                      "Incident Response",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <Shield className="mr-2 h-4 w-4 text-brand-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
