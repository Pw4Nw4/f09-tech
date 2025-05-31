"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useMobileDetection } from "@/hooks/use-mobile-detection"
import {
  Shield,
  Server,
  Cloud,
  LineChart,
  CheckCircle2,
  ArrowRight,
  Lock,
  FileSearch,
  AlertTriangle,
  Database,
  BarChart4,
  Workflow,
  Lightbulb,
  Clock,
  Headset,
  MonitorCheck,
  Wifi,
  HardDriveDownload,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useSearchParams } from "next/navigation"

const services = [
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    icon: Shield,
    description:
      "Comprehensive security solutions to protect your business from evolving threats and ensure regulatory compliance.",
    image: "/images/services/cybersecurity.jpg",
    color: "from-cyan-500 to-blue-500",
    features: [
      {
        title: "Vulnerability Assessment",
        description:
          "Identify and prioritize security vulnerabilities in your systems and applications before they can be exploited.",
        icon: FileSearch,
      },
      {
        title: "Penetration Testing",
        description:
          "Simulate real-world attacks to test your defenses and identify security weaknesses in your infrastructure.",
        icon: AlertTriangle,
      },
      {
        title: "Security Audits",
        description: "Comprehensive evaluation of your security posture against industry standards and best practices.",
        icon: CheckCircle2,
      },
      {
        title: "Zero Trust Implementation",
        description:
          "Deploy advanced security frameworks that verify every user and device before granting access to resources.",
        icon: Lock,
      },
    ],
    benefits: [
      "Reduced risk of data breaches and financial loss",
      "Compliance with industry regulations (HIPAA, PCI DSS, GDPR)",
      "Protection of sensitive customer and business data",
      "Enhanced trust from customers and partners",
      "Rapid incident response capabilities",
    ],
    caseStudy: {
      title: "Financial Services Firm",
      description:
        "Implemented a comprehensive security solution for a mid-size financial services firm, reducing security incidents by 87% and ensuring compliance with industry regulations.",
      results: [
        "87% reduction in security incidents",
        "100% compliance with regulations",
        "$1.2M saved in potential breach costs",
      ],
    },
  },
  {
    id: "cloud",
    title: "Cloud Services",
    icon: Cloud,
    description:
      "Scalable cloud solutions to optimize your infrastructure, reduce costs, and enhance flexibility and performance.",
    image: "/images/services/cloud.jpg",
    color: "from-purple-500 to-indigo-500",
    features: [
      {
        title: "Cloud Migration",
        description:
          "Seamlessly transition your applications and data to the cloud with minimal disruption to your operations.",
        icon: HardDriveDownload,
      },
      {
        title: "Infrastructure as a Service",
        description:
          "Flexible, scalable computing resources that grow with your business needs without capital expenditure.",
        icon: Server,
      },
      {
        title: "Cloud Security",
        description:
          "Comprehensive security measures to protect your cloud environment from threats and unauthorized access.",
        icon: Lock,
      },
      {
        title: "Hybrid Cloud Solutions",
        description:
          "Integrate on-premises infrastructure with cloud services for optimal performance, security, and cost-efficiency.",
        icon: Database,
      },
    ],
    benefits: [
      "Reduced IT infrastructure costs",
      "Improved scalability and flexibility",
      "Enhanced disaster recovery capabilities",
      "Increased business agility",
      "Access to cutting-edge technologies",
    ],
    caseStudy: {
      title: "Healthcare Provider",
      description:
        "Migrated a healthcare provider's infrastructure to a secure hybrid cloud environment, reducing IT costs by 40% while improving performance and ensuring HIPAA compliance.",
      results: ["40% reduction in IT costs", "99.99% uptime achieved", "3x faster application performance"],
    },
  },
  {
    id: "consulting",
    title: "IT Consulting",
    icon: LineChart,
    description:
      "Strategic guidance to align your technology with your business objectives and drive digital transformation.",
    image: "/images/services/consulting.jpg",
    color: "from-amber-500 to-orange-500",
    features: [
      {
        title: "IT Strategy Development",
        description:
          "Create a comprehensive technology roadmap aligned with your business goals and market opportunities.",
        icon: Lightbulb,
      },
      {
        title: "Digital Transformation",
        description:
          "Leverage emerging technologies to reimagine your business processes, products, and customer experiences.",
        icon: Workflow,
      },
      {
        title: "Technology Assessment",
        description:
          "Evaluate your current IT infrastructure and identify opportunities for optimization and innovation.",
        icon: BarChart4,
      },
      {
        title: "IT Governance",
        description:
          "Establish frameworks and policies to ensure your technology investments deliver maximum business value.",
        icon: CheckCircle2,
      },
    ],
    benefits: [
      "Aligned IT and business strategies",
      "Improved operational efficiency",
      "Reduced technology costs",
      "Enhanced competitive advantage",
      "Accelerated innovation",
    ],
    caseStudy: {
      title: "Manufacturing Company",
      description:
        "Developed and implemented a digital transformation strategy for a manufacturing company, resulting in 35% improved operational efficiency and new revenue streams.",
      results: [
        "35% improvement in operational efficiency",
        "20% reduction in IT costs",
        "2 new digital revenue streams created",
      ],
    },
  },
  {
    id: "managed",
    title: "Managed Services",
    icon: Server,
    description:
      "Proactive IT management to ensure your systems run smoothly and efficiently, allowing you to focus on your core business.",
    image: "/images/services/managed.jpg",
    color: "from-emerald-500 to-teal-500",
    features: [
      {
        title: "24/7 Monitoring",
        description:
          "Continuous monitoring of your IT infrastructure to detect and address issues before they impact your business.",
        icon: Clock,
      },
      {
        title: "Help Desk Support",
        description: "Responsive technical support for your team to quickly resolve issues and minimize downtime.",
        icon: Headset,
      },
      {
        title: "Network Management",
        description:
          "Comprehensive management of your network infrastructure to ensure optimal performance and security.",
        icon: Wifi,
      },
      {
        title: "System Administration",
        description:
          "Expert management of your servers, applications, and systems to maintain peak performance and reliability.",
        icon: MonitorCheck,
      },
    ],
    benefits: [
      "Reduced IT operational costs",
      "Minimized downtime and disruptions",
      "Access to specialized expertise",
      "Predictable monthly IT expenses",
      "Focus on core business activities",
    ],
    caseStudy: {
      title: "Legal Services Firm",
      description:
        "Provided comprehensive managed services for a growing legal firm, reducing IT issues by 75% and enabling their team to focus on serving clients.",
      results: ["75% reduction in IT issues", "99.9% system uptime", "30% increase in staff productivity"],
    },
  },
]

// Mobile accordion component for services
function MobileServiceAccordion({ service, isOpen, toggleAccordion }) {
  return (
    <div className="mb-4 border rounded-lg overflow-hidden" id={service.id}>
      <button
        onClick={toggleAccordion}
        className={cn(
          "w-full flex items-center justify-between p-4",
          isOpen ? "bg-gradient-to-r text-white" : "bg-white dark:bg-slate-900",
          isOpen ? service.color : "",
        )}
      >
        <div className="flex items-center">
          <service.icon className="h-5 w-5 mr-2" />
          <span className="font-medium">{service.title}</span>
        </div>
        {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </button>

      {isOpen && (
        <div className="p-4">
          <p className="mb-4 text-slate-700 dark:text-slate-300">{service.description}</p>

          <h4 className="font-medium mb-3">Key Features</h4>
          <div className="space-y-3 mb-4">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-start border rounded-md p-3">
                <feature.icon className={`h-5 w-5 mr-2 mt-0.5 text-gradient bg-gradient-to-r ${service.color}`} />
                <div>
                  <h5 className="font-medium text-sm">{feature.title}</h5>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h4 className="font-medium mb-2">Key Benefits</h4>
          <ul className="space-y-1 mb-4">
            {service.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start">
                <CheckCircle2
                  className={`h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-gradient bg-gradient-to-r ${service.color}`}
                />
                <span className="text-sm">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-lg overflow-hidden mb-4">
            <div className="relative h-48 w-full">
              <Image
                src={service.image || "/placeholder.svg?height=400&width=600"}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className={`rounded-lg border p-3 mb-4`}>
            <h4 className="font-medium mb-2 text-sm">Case Study: {service.caseStudy.title}</h4>
            <p className="text-xs mb-2">{service.caseStudy.description}</p>
            <div>
              <h5 className="text-xs font-medium mb-1">Results:</h5>
              <ul className="space-y-1">
                {service.caseStudy.results.map((result, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className={`h-2 w-2 rounded-full mr-2 bg-gradient-to-r ${service.color}`}></div>
                    <span className="text-xs">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Button asChild className={`w-full bg-gradient-to-r ${service.color} text-white`}>
            <Link href="/contact">
              Request a Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      )}
    </div>
  )
}

export function ServicesTabs() {
  const [activeTab, setActiveTab] = useState("cybersecurity")
  const [openAccordion, setOpenAccordion] = useState("cybersecurity")
  const { isMobile, isTablet } = useMobileDetection()
  const searchParams = useSearchParams()
  const servicesRef = useRef({})

  // Handle hash in URL or search params
  useEffect(() => {
    // Check for hash in URL
    const hash = window.location.hash?.substring(1)

    // If there's a valid service ID in the hash, set it as active
    if (hash && services.some((service) => service.id === hash)) {
      setActiveTab(hash)
      setOpenAccordion(hash)

      // Scroll to the section after a short delay to ensure rendering
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }, [searchParams])

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

  // Mobile view with accordions
  if (isMobile) {
    return (
      <section className="bg-white py-12 dark:bg-slate-950" id="services">
        <div className="container px-4">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="mb-3 font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Tailored Solutions for Modern Businesses
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400">
              Our comprehensive suite of services is designed to address your most complex technology challenges
            </p>
          </div>

          <div className="space-y-4">
            {services.map((service) => (
              <MobileServiceAccordion
                key={service.id}
                service={service}
                isOpen={openAccordion === service.id}
                toggleAccordion={() => toggleAccordion(service.id)}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Tablet and desktop view with tabs
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 dark:bg-slate-950" id="services">
      <div className="container">
        <div className="mx-auto mb-12 sm:mb-16 max-w-3xl text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            Tailored Solutions for Modern Businesses
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Our comprehensive suite of services is designed to address your most complex technology challenges
          </p>
        </div>

        <Tabs defaultValue="cybersecurity" value={activeTab} onValueChange={setActiveTab} className="mx-auto max-w-5xl">
          <TabsList className="mb-8 grid w-full grid-cols-2 gap-2 sm:gap-4 md:grid-cols-4">
            {services.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-3 sm:p-4 data-[state=active]:border-transparent data-[state=active]:text-white dark:border-slate-800 dark:bg-slate-950 dark:data-[state=active]:border-transparent"
                id={`tab-${service.id}`}
                onClick={() => {
                  // Update URL hash without scrolling
                  const url = new URL(window.location.href)
                  url.hash = service.id
                  window.history.replaceState({}, "", url)
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 data-[state=active]:opacity-100 ${service.color}`}
                ></div>
                <div className="relative z-10 flex flex-col items-center">
                  <service.icon className="mb-1 sm:mb-2 h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="text-sm sm:text-base">{service.title}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent
              key={service.id}
              value={service.id}
              className="focus-visible:outline-none focus-visible:ring-0"
              id={service.id}
              ref={(el) => (servicesRef.current[service.id] = el)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid gap-6 md:gap-8 md:grid-cols-2">
                    <div>
                      <div className="mb-5 sm:mb-6 flex items-center">
                        <div
                          className={`mr-3 sm:mr-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-gradient-to-r ${service.color}`}
                        >
                          <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                          {service.title}
                        </h3>
                      </div>

                      <p className="mb-5 sm:mb-6 text-base sm:text-lg text-slate-700 dark:text-slate-300">
                        {service.description}
                      </p>

                      <div className="mb-6 sm:mb-8 space-y-4">
                        <h4 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                          Key Features
                        </h4>
                        <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                          {service.features.map((feature, index) => (
                            <div
                              key={index}
                              className="rounded-lg border border-slate-200 bg-white p-3 sm:p-4 transition-all hover:border-slate-300 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
                            >
                              <div className="mb-1 sm:mb-2 flex items-center">
                                <feature.icon
                                  className={`mr-1.5 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5 text-gradient bg-gradient-to-r ${service.color}`}
                                />
                                <h5 className="font-medium text-sm sm:text-base text-slate-900 dark:text-white">
                                  {feature.title}
                                </h5>
                              </div>
                              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                                {feature.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-5 sm:mb-6">
                        <h4 className="mb-2 sm:mb-3 text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                          Key Benefits
                        </h4>
                        <ul className="space-y-1.5 sm:space-y-2">
                          {service.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle2
                                className={`mr-1.5 sm:mr-2 mt-0.5 sm:mt-1 h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0 text-gradient bg-gradient-to-r ${service.color}`}
                              />
                              <span className="text-sm sm:text-base text-slate-700 dark:text-slate-300">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button asChild className={`mt-4 bg-gradient-to-r ${service.color} text-white`}>
                        <Link href="/contact">
                          Request a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>

                    <div className="space-y-6 sm:space-y-8">
                      <div className="overflow-hidden rounded-xl">
                        <div className="relative h-56 sm:h-64 w-full overflow-hidden rounded-xl md:h-80">
                          <Image
                            src={service.image || "/placeholder.svg?height=400&width=600"}
                            alt={service.title}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                      </div>

                      <div
                        className={`rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-6 dark:border-slate-800 dark:bg-slate-900`}
                      >
                        <h4 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                          Case Study: {service.caseStudy.title}
                        </h4>
                        <p className="mb-3 sm:mb-4 text-sm sm:text-base text-slate-700 dark:text-slate-300">
                          {service.caseStudy.description}
                        </p>
                        <div className="space-y-1 sm:space-y-2">
                          <h5 className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white">Results:</h5>
                          <ul className="space-y-1">
                            {service.caseStudy.results.map((result, index) => (
                              <li key={index} className="flex items-center">
                                <div
                                  className={`mr-2 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-gradient-to-r ${service.color}`}
                                ></div>
                                <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
