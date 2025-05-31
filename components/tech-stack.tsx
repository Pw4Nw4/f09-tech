"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const categories = [
  {
    id: "cloud",
    label: "Cloud",
    technologies: [
      { name: "AWS", logo: "/images/tech/aws.png" },
      { name: "Azure", logo: "/images/tech/azure.png" },
      { name: "Google Cloud", logo: "/images/tech/gcp.png" },
      { name: "Digital Ocean", logo: "/images/tech/digitalocean.png" },
    ],
  },
  {
    id: "security",
    label: "Security",
    technologies: [
      { name: "Cloudflare", logo: "/images/tech/cloudflare.png" },
      { name: "Okta", logo: "/images/tech/okta.png" },
      { name: "CrowdStrike", logo: "/images/tech/crowdstrike.png" },
      { name: "Palo Alto", logo: "/images/tech/paloalto.png" },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    technologies: [
      { name: "Docker", logo: "/images/tech/docker.png" },
      { name: "Kubernetes", logo: "/images/tech/kubernetes.png" },
      { name: "Terraform", logo: "/images/tech/terraform.png" },
      { name: "Jenkins", logo: "/images/tech/jenkins.png" },
    ],
  },
  {
    id: "data",
    label: "Data",
    technologies: [
      { name: "Snowflake", logo: "/images/tech/snowflake.png" },
      { name: "MongoDB", logo: "/images/tech/mongodb.png" },
      { name: "PostgreSQL", logo: "/images/tech/postgresql.png" },
      { name: "Elasticsearch", logo: "/images/tech/elasticsearch.png" },
    ],
  },
]

export function TechStack() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-900">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            Our Technology Stack
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            We leverage industry-leading technologies to deliver innovative solutions
          </p>
        </div>

        <Tabs defaultValue="cloud" className="mx-auto max-w-4xl">
          <TabsList className="mb-8 grid w-full grid-cols-2 gap-4 md:grid-cols-4">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="rounded-lg border border-slate-200 bg-white data-[state=active]:border-cyan-500 data-[state=active]:bg-cyan-50 data-[state=active]:text-cyan-700 dark:border-slate-800 dark:bg-slate-950 dark:data-[state=active]:border-cyan-700 dark:data-[state=active]:bg-cyan-950 dark:data-[state=active]:text-cyan-300"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                {category.technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex flex-col items-center justify-center rounded-lg border border-slate-200 bg-white p-6 text-center dark:border-slate-800 dark:bg-slate-950"
                  >
                    <div className="relative mb-4 h-16 w-16">
                      <Image src={tech.logo || "/placeholder.svg"} alt={tech.name} fill className="object-contain" />
                    </div>
                    <h3 className="text-sm font-medium text-slate-900 dark:text-white">{tech.name}</h3>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
