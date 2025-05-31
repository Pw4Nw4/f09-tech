"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, CheckCircle, FileText, Users, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

interface IndustrySolutionTemplateProps {
  industry: string
  title: string
  description: string
  icon: React.ReactNode
  challenges: {
    title: string
    description: string
  }[]
  solutions: {
    title: string
    description: string
    icon?: React.ReactNode
  }[]
  benefits: string[]
  technologies: string[]
  caseStudies: {
    title: string
    description: string
    link: string
  }[]
  faqs: {
    question: string
    answer: string
  }[]
}

export function IndustrySolutionTemplate({
  industry,
  title,
  description,
  icon,
  challenges,
  solutions,
  benefits,
  technologies,
  caseStudies,
  faqs,
}: IndustrySolutionTemplateProps) {
  const [activeTab, setActiveTab] = useState("challenges")

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild>
              <Link
                href="/services/enterprise"
                className="flex items-center text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Enterprise Services
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 mb-4">
                Enterprise Solutions
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">{description}</p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#solutions">Explore Solutions</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 relative flex items-center justify-center">
                <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full p-8 w-full h-full flex items-center justify-center">
                  <div className="text-amber-600 dark:text-amber-400">{icon}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16" id="solutions">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Tailored Solutions for {industry}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We understand the unique challenges facing the {industry.toLowerCase()} industry and provide specialized
              technology solutions to address them.
            </p>
          </div>

          <Tabs defaultValue="challenges" value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="challenges">Challenges</TabsTrigger>
              <TabsTrigger value="solutions">Solutions</TabsTrigger>
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
            </TabsList>

            <TabsContent value="challenges" className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Key Challenges in {industry}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {challenges.map((challenge, index) => (
                  <Card key={index} className="border border-gray-200 dark:border-gray-700">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-3">{challenge.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{challenge.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="solutions" className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Our {industry} Solutions</h3>
              <div className="space-y-8">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col md:flex-row gap-6 items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0">
                      <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full p-3 flex items-center justify-center">
                        <div className="text-amber-600 dark:text-amber-400 w-6 h-6">
                          {solution.icon || <Shield className="h-6 w-6" />}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">{solution.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{solution.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="benefits" className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Benefits for {industry} Organizations</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 dark:text-gray-200">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We leverage industry-leading technologies to deliver secure, scalable, and efficient solutions for{" "}
              {industry.toLowerCase()} organizations.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 shadow-sm"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              See how we've helped {industry.toLowerCase()} organizations overcome their technology challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <Link key={index} href={study.link} className="group">
                <Card className="h-full border border-gray-200 dark:border-gray-700 transition-all duration-300 group-hover:border-amber-500 dark:group-hover:border-amber-400 group-hover:shadow-lg">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4">
                      <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full p-3 w-12 h-12 flex items-center justify-center">
                        <FileText className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {study.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{study.description}</p>
                    <div className="flex items-center text-amber-600 dark:text-amber-400 font-medium">
                      Read Case Study
                      <svg
                        className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Common questions about our {industry.toLowerCase()} technology solutions.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border border-gray-200 dark:border-gray-700">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3">{faq.question}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-600 dark:to-amber-700 rounded-2xl p-8 md:p-12 text-white shadow-xl">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to transform your {industry.toLowerCase()} technology?
                </h2>
                <p className="text-amber-50 mb-6">
                  Schedule a consultation with our {industry.toLowerCase()} technology specialists to discuss your
                  specific needs and challenges.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-white text-amber-600 hover:bg-gray-100">
                    <Link href="/contact">Schedule a Consultation</Link>
                  </Button>
                  <Button variant="outline" asChild className="border-white text-white hover:bg-white/10">
                    <Link href="/services/enterprise">Explore Other Industries</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="bg-white/20 rounded-full p-6 w-32 h-32 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
