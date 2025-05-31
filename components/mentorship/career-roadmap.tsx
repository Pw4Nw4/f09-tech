"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, Award, TrendingUp, Briefcase, Shield, Server, Code, Database } from "lucide-react"

export function CareerRoadmap() {
  const careerPaths = [
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      icon: Shield,
      description: "Protect organizations from digital threats and vulnerabilities",
      stages: [
        {
          title: "Entry Level",
          roles: ["Security Analyst", "SOC Analyst"],
          skills: ["Network security basics", "Security tools", "Monitoring"],
          certifications: ["CompTIA Security+", "SSCP"],
        },
        {
          title: "Mid Level",
          roles: ["Security Engineer", "Penetration Tester"],
          skills: ["Vulnerability assessment", "Security architecture", "Incident response"],
          certifications: ["CEH", "CISSP Associate"],
        },
        {
          title: "Advanced",
          roles: ["Security Architect", "CISO"],
          skills: ["Risk management", "Security strategy", "Leadership"],
          certifications: ["CISSP", "CISM"],
        },
      ],
    },
    {
      id: "networking",
      title: "Networking",
      icon: Server,
      description: "Design, implement and manage network infrastructure",
      stages: [
        {
          title: "Entry Level",
          roles: ["Network Technician", "Help Desk Specialist"],
          skills: ["Network fundamentals", "Troubleshooting", "Basic configurations"],
          certifications: ["CompTIA Network+", "CCNA"],
        },
        {
          title: "Mid Level",
          roles: ["Network Administrator", "Network Engineer"],
          skills: ["Advanced routing", "Network security", "WAN technologies"],
          certifications: ["CCNP", "Juniper JNCIS"],
        },
        {
          title: "Advanced",
          roles: ["Network Architect", "Infrastructure Manager"],
          skills: ["Network design", "Cloud networking", "Strategic planning"],
          certifications: ["CCIE", "Juniper JNCIE"],
        },
      ],
    },
    {
      id: "development",
      title: "Software Development",
      icon: Code,
      description: "Create applications and systems through programming",
      stages: [
        {
          title: "Entry Level",
          roles: ["Junior Developer", "QA Engineer"],
          skills: ["Programming fundamentals", "Version control", "Testing"],
          certifications: ["Microsoft MTA", "Oracle Java Associate"],
        },
        {
          title: "Mid Level",
          roles: ["Software Developer", "DevOps Engineer"],
          skills: ["Advanced programming", "CI/CD", "System design"],
          certifications: ["AWS Developer", "Oracle Java Professional"],
        },
        {
          title: "Advanced",
          roles: ["Senior Developer", "Software Architect"],
          skills: ["Architecture patterns", "Technical leadership", "Performance optimization"],
          certifications: ["AWS Solutions Architect", "Oracle Java Master"],
        },
      ],
    },
    {
      id: "cloud",
      title: "Cloud Computing",
      icon: Database,
      description: "Manage and optimize cloud-based infrastructure and services",
      stages: [
        {
          title: "Entry Level",
          roles: ["Cloud Support", "Junior Cloud Admin"],
          skills: ["Cloud fundamentals", "Basic administration", "Monitoring"],
          certifications: ["AWS Cloud Practitioner", "Azure Fundamentals"],
        },
        {
          title: "Mid Level",
          roles: ["Cloud Administrator", "Cloud Engineer"],
          skills: ["Cloud architecture", "Automation", "Multi-cloud strategies"],
          certifications: ["AWS SysOps Admin", "Azure Administrator"],
        },
        {
          title: "Advanced",
          roles: ["Cloud Architect", "Cloud Security Specialist"],
          skills: ["Complex architectures", "Cost optimization", "Cloud governance"],
          certifications: ["AWS Solutions Architect Pro", "Azure Solutions Architect"],
        },
      ],
    },
  ]

  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-900 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl md:text-4xl">
            Your Career Roadmap
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 sm:mt-4 sm:text-lg">
            Explore potential career paths and progression opportunities in various IT specializations.
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          <Tabs defaultValue="cybersecurity" className="w-full">
            <TabsList className="mb-4 flex w-full flex-wrap justify-start gap-2 overflow-x-auto pb-2 sm:flex-nowrap sm:justify-center sm:pb-0">
              {careerPaths.map((path) => (
                <TabsTrigger key={path.id} value={path.id} className="flex-shrink-0 text-xs sm:text-sm">
                  <path.icon className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                  <span className="whitespace-nowrap">{path.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {careerPaths.map((path) => (
              <TabsContent key={path.id} value={path.id} className="mt-4 sm:mt-8">
                <Card>
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-lg sm:text-2xl">{path.title} Career Path</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">{path.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6">
                    <div className="grid gap-4 sm:gap-8 md:grid-cols-3">
                      {path.stages.map((stage, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="relative"
                        >
                          {/* Horizontal connector line - visible only on desktop */}
                          {index < path.stages.length - 1 && (
                            <div className="absolute right-0 top-10 hidden h-0.5 w-full translate-x-1/2 bg-gradient-to-r from-cyan-500 to-transparent md:block"></div>
                          )}

                          {/* Vertical connector line - visible only on mobile */}
                          {index < path.stages.length - 1 && (
                            <div className="absolute bottom-0 left-1/2 h-4 w-0.5 translate-x-[-50%] translate-y-full bg-gradient-to-b from-cyan-500 to-transparent md:hidden"></div>
                          )}

                          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-800 sm:p-6">
                            <div className="mb-3 flex items-center sm:mb-4">
                              {index === 0 && <GraduationCap className="mr-2 h-4 w-4 text-cyan-500 sm:h-5 sm:w-5" />}
                              {index === 1 && <TrendingUp className="mr-2 h-4 w-4 text-blue-500 sm:h-5 sm:w-5" />}
                              {index === 2 && <Award className="mr-2 h-4 w-4 text-indigo-500 sm:h-5 sm:w-5" />}
                              <h3 className="text-sm font-bold text-slate-900 dark:text-white sm:text-base">
                                {stage.title}
                              </h3>
                            </div>

                            <div className="space-y-3 sm:space-y-4">
                              <div>
                                <h4 className="text-xs font-semibold text-slate-900 dark:text-white sm:text-sm">
                                  Potential Roles
                                </h4>
                                <ul className="mt-1 space-y-1">
                                  {stage.roles.map((role, roleIndex) => (
                                    <li
                                      key={roleIndex}
                                      className="flex items-center text-xs text-slate-700 dark:text-slate-300 sm:text-sm"
                                    >
                                      <Briefcase className="mr-1 h-3 w-3 text-slate-400 sm:mr-2 sm:h-3.5 sm:w-3.5" />
                                      {role}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h4 className="text-xs font-semibold text-slate-900 dark:text-white sm:text-sm">
                                  Key Skills
                                </h4>
                                <ul className="mt-1 space-y-1">
                                  {stage.skills.map((skill, skillIndex) => (
                                    <li
                                      key={skillIndex}
                                      className="flex items-center text-xs text-slate-700 dark:text-slate-300 sm:text-sm"
                                    >
                                      <div className="mr-1 h-1 w-1 rounded-full bg-cyan-500 sm:mr-2 sm:h-1.5 sm:w-1.5"></div>
                                      {skill}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h4 className="text-xs font-semibold text-slate-900 dark:text-white sm:text-sm">
                                  Recommended Certifications
                                </h4>
                                <ul className="mt-1 space-y-1">
                                  {stage.certifications.map((cert, certIndex) => (
                                    <li
                                      key={certIndex}
                                      className="flex items-center text-xs text-slate-700 dark:text-slate-300 sm:text-sm"
                                    >
                                      <Award className="mr-1 h-3 w-3 text-amber-500 sm:mr-2 sm:h-3.5 sm:w-3.5" />
                                      {cert}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
