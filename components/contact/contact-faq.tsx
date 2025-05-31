"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What services does F09 Tech offer?",
    answer:
      "F09 Tech offers a comprehensive range of IT and cybersecurity services including network security, cloud solutions, IT consulting, managed services, and digital transformation. Our solutions are tailored to meet the specific needs of businesses of all sizes.",
  },
  {
    question: "How quickly can you respond to IT emergencies?",
    answer:
      "For our managed services clients, we provide 24/7 emergency support with guaranteed response times. Critical issues are typically addressed within 1 hour, and our team is always on standby to ensure your business operations continue smoothly.",
  },
  {
    question: "Do you offer services for small businesses?",
    answer:
      "Yes, we have tailored solutions specifically designed for small businesses. Our small business packages provide enterprise-grade security and IT support at a scale and price point that makes sense for growing companies.",
  },
  {
    question: "Can you help with cloud migration?",
    answer:
      "Cloud migration is one of our core services. We provide end-to-end migration support, from assessment and planning to implementation and post-migration optimization, ensuring a smooth transition to the cloud with minimal disruption to your operations.",
  },
  {
    question: "How do you ensure the security of our data?",
    answer:
      "We implement multi-layered security measures including advanced threat protection, encryption, access controls, regular security assessments, and employee training. Our security solutions are continuously updated to address emerging threats and comply with industry regulations.",
  },
]

export function ContactFAQ() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
