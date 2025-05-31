"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Monitor, Code, Wifi } from "lucide-react"

export function PracticalExperience() {
  const practicalAreas = [
    {
      id: "virus-removal",
      title: "Virus Removal",
      icon: Shield,
      description: "Learn to identify, isolate, and remove malware while implementing preventative measures.",
      skills: ["Malware identification", "System scanning", "Safe removal procedures", "Security hardening"],
      projects: ["Malware analysis lab", "System recovery", "Security assessment"],
      image: "/placeholder-kbyyf.png",
    },
    {
      id: "pc-building",
      title: "PC Building",
      icon: Monitor,
      description: "Master the art of building custom PCs, from component selection to final optimization.",
      skills: ["Hardware compatibility", "Assembly techniques", "BIOS configuration", "Performance tuning"],
      projects: ["Custom PC builds", "Upgrade consultations", "Benchmark testing"],
      image: "/custom-pc-build.png",
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      icon: Shield,
      description: "Develop skills in protecting systems and networks from digital attacks.",
      skills: ["Vulnerability assessment", "Penetration testing", "Security monitoring", "Incident response"],
      projects: ["Security audits", "Firewall configuration", "Intrusion detection setup"],
      image: "/placeholder-qd6ma.png",
    },
    {
      id: "software-dev",
      title: "Software Development",
      icon: Code,
      description: "Learn to design, code, test, and deploy software applications and systems.",
      skills: ["Programming fundamentals", "Version control", "Testing methodologies", "Deployment processes"],
      projects: ["Web applications", "Mobile apps", "Automation scripts"],
      image: "/placeholder-iekui.png",
    },
    {
      id: "networking",
      title: "Networking",
      icon: Wifi,
      description: "Master the fundamentals of network design, implementation, and troubleshooting.",
      skills: ["Network protocols", "Router configuration", "Troubleshooting", "Network security"],
      projects: ["Network design", "Wireless setup", "VPN implementation"],
      image: "/it-professional-network.png",
    },
  ]

  return (
    <section className="bg-white py-16 dark:bg-slate-950 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl md:text-4xl">
            Hands-On Experience
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 sm:mt-4 sm:text-lg">
            Gain practical experience across various IT disciplines through real-world projects and guided practice.
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          <Tabs defaultValue="virus-removal" className="w-full">
            <TabsList className="mb-4 flex w-full flex-wrap justify-start gap-2 overflow-x-auto pb-2 sm:flex-nowrap sm:justify-center sm:pb-0">
              {practicalAreas.map((area) => (
                <TabsTrigger key={area.id} value={area.id} className="flex-shrink-0 text-xs sm:text-sm">
                  <area.icon className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                  <span className="whitespace-nowrap">{area.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {practicalAreas.map((area) => (
              <TabsContent key={area.id} value={area.id} className="mt-4 sm:mt-8">
                <div className="grid gap-6 md:grid-cols-2 md:gap-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col justify-between space-y-4 sm:space-y-6"
                  >
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">{area.title}</h3>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 sm:text-base">{area.description}</p>
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white sm:text-base">
                          Skills You'll Develop
                        </h4>
                        <ul className="mt-2 grid grid-cols-1 gap-x-2 gap-y-1 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-2">
                          {area.skills.map((skill, index) => (
                            <li
                              key={index}
                              className="flex items-center text-xs text-slate-700 dark:text-slate-300 sm:text-sm"
                            >
                              <div className="mr-2 h-1.5 w-1.5 rounded-full bg-cyan-500"></div>
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white sm:text-base">
                          Sample Projects
                        </h4>
                        <ul className="mt-2 grid grid-cols-1 gap-y-1 sm:gap-y-2">
                          {area.projects.map((project, index) => (
                            <li
                              key={index}
                              className="flex items-center text-xs text-slate-700 dark:text-slate-300 sm:text-sm"
                            >
                              <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                              {project}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative h-48 overflow-hidden rounded-lg sm:h-64 md:h-full"
                  >
                    <Image
                      src={area.image || "/placeholder.svg"}
                      alt={`${area.title} practical experience`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
