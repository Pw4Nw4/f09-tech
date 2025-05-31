"use client"

import React from "react"

import { ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ServiceFeature {
  title: string
  description: string
}

interface ServiceBenefit {
  title: string
  description: string
}

interface ServiceImplementation {
  title: string
  description: string
}

interface ServiceTechnology {
  name: string
  description: string
  icon?: React.ReactNode
}

interface DetailedServiceTemplateProps {
  title: string
  description: string
  category: string
  icon: React.ReactNode
  features: ServiceFeature[]
  benefits: ServiceBenefit[]
  implementation: ServiceImplementation[]
  technologies: ServiceTechnology[]
  useCases: string[]
}

export function DetailedServiceTemplate({
  title,
  description,
  category,
  icon,
  features,
  benefits,
  implementation,
  technologies,
  useCases,
}: DetailedServiceTemplateProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back button */}
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/services/enterprise" className="flex items-center text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Enterprise Services
          </Link>
        </Button>
      </div>

      {/* Hero section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div>
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 mb-4">
            {category}
          </div>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg text-muted-foreground mb-6">{description}</p>
          <div className="flex flex-wrap gap-4 mb-8">
            <Button asChild>
              <Link href="/contact">Request a Consultation</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-48 h-48 rounded-full bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center">
            <div className="text-amber-600 dark:text-amber-400">
              {React.cloneElement(icon as React.ReactElement, { className: "w-24 h-24" })}
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="mb-16">
        <Tabs defaultValue="features" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
            <TabsTrigger value="implementation">Implementation</TabsTrigger>
            <TabsTrigger value="technologies">Technologies</TabsTrigger>
          </TabsList>
          <TabsContent value="features" className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border border-muted">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-3 text-amber-600 dark:text-amber-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="benefits" className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Business Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border border-muted">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-3 text-amber-600 dark:text-amber-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="implementation" className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Implementation Process</h2>
            <div className="space-y-6">
              {implementation.map((step, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 flex flex-col items-center mr-4">
                    <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    {index < implementation.length - 1 && <div className="w-0.5 h-full bg-muted mt-2"></div>}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-medium mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="technologies" className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Technologies & Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <Card key={index} className="border border-muted">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center mb-4 text-amber-600 dark:text-amber-400">
                        {tech.icon}
                      </div>
                      <h3 className="font-medium mb-2">{tech.name}</h3>
                      <p className="text-muted-foreground">{tech.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Use Cases */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Common Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-muted p-4 rounded-lg">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                <p>{useCase}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Transform Your {title} Strategy?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Contact our team of experts to discuss how our {title.toLowerCase()} services can help your business achieve
          its goals and overcome challenges.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/services/enterprise">Explore Other Enterprise Services</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
