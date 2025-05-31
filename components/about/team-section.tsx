"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const teamMembers = [
  {
    name: "Rock Frederic",
    role: "Founder & CEO",
    bio: "With over 15 years of experience in IT and cybersecurity, Rock founded F09 Tech with a vision to make enterprise-grade technology accessible to businesses of all sizes.",
    image: "/images/about/team-rock.png",
    social: {
      linkedin: "https://linkedin.com/in/rockfrederic",
      twitter: "https://twitter.com/rockfrederic",
      email: "rock@f09tech.com",
    },
  },
  {
    name: "Sarah Johnson",
    role: "Chief Technology Officer",
    bio: "Sarah leads our technical strategy and innovation initiatives. Her background in cloud architecture and AI has been instrumental in developing our cutting-edge solutions.",
    image: "/images/about/team-sarah.png",
    social: {
      linkedin: "https://linkedin.com/in/sarahjohnson",
      twitter: "https://twitter.com/sarahjohnson",
      email: "sarah@f09tech.com",
    },
  },
  {
    name: "Michael Chen",
    role: "Chief Security Officer",
    bio: "Michael oversees our cybersecurity practice, bringing expertise from his previous roles at leading security firms and a background in ethical hacking and threat intelligence.",
    image: "/images/about/team-michael.png",
    social: {
      linkedin: "https://linkedin.com/in/michaelchen",
      twitter: "https://twitter.com/michaelchen",
      email: "michael@f09tech.com",
    },
  },
  {
    name: "Amara Washington",
    role: "Director of Client Success",
    bio: "Amara ensures our clients receive exceptional service and support. Her client-first approach has been key to our high retention rate and customer satisfaction scores.",
    image: "/images/about/team-amara.png",
    social: {
      linkedin: "https://linkedin.com/in/amarawashington",
      twitter: "https://twitter.com/amarawashington",
      email: "amara@f09tech.com",
    },
  },
]

export function TeamSection() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Our experienced team of technology experts is passionate about helping businesses succeed through innovative
            IT solutions.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={400}
                  height={500}
                  className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="flex space-x-3">
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-colors"
                    >
                      <Twitter className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-colors"
                    >
                      <Mail className="h-5 w-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{member.name}</h3>
              <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-2">{member.role}</p>
              <p className="text-slate-700 dark:text-slate-300">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
            Our team extends beyond our leadership to include talented engineers, analysts, project managers, and
            support specialists who work together to deliver exceptional results.
          </p>
          <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Join Our Team</Button>
        </motion.div>
      </div>
    </section>
  )
}
