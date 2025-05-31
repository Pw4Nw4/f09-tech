"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, XCircle, HelpCircle } from "lucide-react"

export function SelfAssessment() {
  const [activeTab, setActiveTab] = useState("technical")

  const assessmentCategories = [
    {
      id: "technical",
      title: "Technical Aptitude",
      description: "Assess your technical skills and problem-solving abilities",
      questions: [
        {
          question: "Do you enjoy solving technical problems and puzzles?",
          positive: "You're naturally curious about how things work and enjoy the challenge of troubleshooting issues.",
          negative: "Technical problem-solving might feel more like a chore than an engaging challenge.",
        },
        {
          question: "Are you comfortable learning new technologies quickly?",
          positive: "You adapt well to new tools and platforms, seeing them as opportunities rather than obstacles.",
          negative: "You might prefer more stability and consistency in your technical environment.",
        },
        {
          question: "Do you find yourself helping friends and family with their tech issues?",
          positive: "You have a natural inclination to apply your technical knowledge to help others.",
          negative: "You might not have developed the patience required for technical support roles.",
        },
      ],
    },
    {
      id: "personality",
      title: "Personality Traits",
      description: "Evaluate if your personality aligns with IT career demands",
      questions: [
        {
          question: "Are you detail-oriented and methodical in your approach to tasks?",
          positive: "Your attention to detail is valuable for identifying issues and implementing precise solutions.",
          negative: "You might prefer more creative, less structured work environments.",
        },
        {
          question: "Do you remain calm under pressure when systems fail?",
          positive: "Your ability to stay composed during technical emergencies is a valuable asset in IT.",
          negative: "High-pressure technical situations might cause you significant stress.",
        },
        {
          question: "Are you comfortable working both independently and as part of a team?",
          positive: "Your adaptability to different work dynamics suits the varied nature of IT projects.",
          negative: "You might prefer more consistent team structures in your work environment.",
        },
      ],
    },
    {
      id: "career",
      title: "Career Goals",
      description: "Clarify your long-term objectives and career aspirations",
      questions: [
        {
          question: "Are you interested in continuous learning throughout your career?",
          positive: "Your commitment to ongoing education aligns perfectly with the ever-evolving IT field.",
          negative: "You might prefer a field with more stable, established knowledge requirements.",
        },
        {
          question: "Do you see technology as central to your career path?",
          positive: "Your focus on technology as a career cornerstone positions you well for IT roles.",
          negative: "You might be more fulfilled in a field where technology is a tool rather than the focus.",
        },
        {
          question: "Are you motivated by solving real-world problems through technology?",
          positive: "Your drive to create practical solutions is well-suited to the applied nature of IT work.",
          negative: "You might prefer more theoretical or creative professional challenges.",
        },
      ],
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
            Is IT Right For You?
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 sm:mt-4 sm:text-lg">
            Use our self-assessment tool to determine if a career in IT and cybersecurity aligns with your skills,
            interests, and career goals.
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <Tabs defaultValue="technical" onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-2 flex w-full flex-wrap justify-center gap-1 sm:mb-0 sm:grid sm:grid-cols-3">
              {assessmentCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex-1 text-xs sm:text-sm md:text-base">
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {assessmentCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-4 sm:mt-6">
                <Card>
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-lg sm:text-xl">{category.title}</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 p-4 sm:space-y-6 sm:p-6">
                    {category.questions.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="rounded-lg border border-slate-200 p-3 dark:border-slate-800 sm:p-4"
                      >
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
                          <div className="flex items-center gap-2 sm:mt-1 sm:block">
                            <div className="rounded-full bg-blue-100 p-1 dark:bg-blue-900">
                              <HelpCircle className="h-4 w-4 text-blue-600 dark:text-blue-400 sm:h-5 sm:w-5" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-slate-900 dark:text-white sm:text-base">
                              {item.question}
                            </h4>

                            <div className="mt-3 flex flex-col gap-3 sm:grid sm:grid-cols-2">
                              <div className="flex items-start gap-2 rounded-md border border-green-100 bg-green-50 p-2 dark:border-green-900/50 dark:bg-green-900/20 sm:p-3">
                                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600 dark:text-green-400 sm:h-5 sm:w-5" />
                                <p className="text-xs text-slate-700 dark:text-slate-300 sm:text-sm">{item.positive}</p>
                              </div>
                              <div className="flex items-start gap-2 rounded-md border border-red-100 bg-red-50 p-2 dark:border-red-900/50 dark:bg-red-900/20 sm:p-3">
                                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-600 dark:text-red-400 sm:h-5 sm:w-5" />
                                <p className="text-xs text-slate-700 dark:text-slate-300 sm:text-sm">{item.negative}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 sm:p-6">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs sm:text-sm"
                      onClick={() => {
                        const currentIndex = assessmentCategories.findIndex((c) => c.id === activeTab)
                        const prevIndex = (currentIndex - 1 + assessmentCategories.length) % assessmentCategories.length
                        setActiveTab(assessmentCategories[prevIndex].id)
                      }}
                      disabled={activeTab === assessmentCategories[0].id}
                    >
                      Previous
                    </Button>
                    <Button
                      size="sm"
                      className="text-xs sm:text-sm"
                      onClick={() => {
                        const currentIndex = assessmentCategories.findIndex((c) => c.id === activeTab)
                        const nextIndex = (currentIndex + 1) % assessmentCategories.length
                        setActiveTab(assessmentCategories[nextIndex].id)
                      }}
                      disabled={activeTab === assessmentCategories[assessmentCategories.length - 1].id}
                    >
                      Next
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
