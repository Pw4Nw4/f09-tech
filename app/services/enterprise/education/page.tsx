import type { Metadata } from "next"
import { GraduationCap, Shield, Database, Laptop, BookOpen } from "lucide-react"
import { IndustrySolutionTemplate } from "@/components/services/enterprise/industry-solution-template"

export const metadata: Metadata = {
  title: "Education IT Solutions - F09 Tech",
  description:
    "Comprehensive IT solutions for K-12 schools, higher education institutions, and online learning platforms.",
}

export default function EducationSolutionsPage() {
  return (
    <IndustrySolutionTemplate
      industry="Education"
      title="Education Technology Solutions"
      description="Comprehensive IT solutions designed specifically for K-12 schools, higher education institutions, and online learning platforms."
      icon={<GraduationCap className="h-12 w-12" />}
      challenges={[
        {
          title: "Student Data Privacy",
          description: "Protecting sensitive student information while maintaining accessibility for authorized users.",
        },
        {
          title: "Digital Learning Infrastructure",
          description: "Building robust systems that support both in-person and remote learning environments.",
        },
        {
          title: "Budget Constraints",
          description: "Implementing effective technology solutions within limited educational budgets.",
        },
        {
          title: "Technology Integration",
          description: "Integrating diverse educational technologies and systems into a cohesive ecosystem.",
        },
      ]}
      solutions={[
        {
          title: "FERPA-Compliant Data Management",
          description:
            "Secure student information systems and data management solutions that ensure compliance with FERPA and other educational privacy regulations.",
          icon: <Shield className="h-6 w-6" />,
        },
        {
          title: "Learning Management System Integration",
          description:
            "Seamless integration and support for learning management systems, ensuring reliable access for students and educators.",
          icon: <BookOpen className="h-6 w-6" />,
        },
        {
          title: "Campus Network Infrastructure",
          description:
            "Reliable, high-performance network solutions designed for educational environments, supporting thousands of simultaneous users and devices.",
          icon: <Database className="h-6 w-6" />,
        },
        {
          title: "Educational Device Management",
          description:
            "Comprehensive management solutions for student and faculty devices, ensuring security, appropriate usage, and efficient maintenance.",
          icon: <Laptop className="h-6 w-6" />,
        },
      ]}
      benefits={[
        "Enhanced protection of sensitive student data",
        "Improved learning experiences through reliable technology",
        "Reduced IT management burden on educational staff",
        "Cost-effective solutions that maximize limited budgets",
        "Scalable infrastructure that grows with enrollment",
        "Better integration between different educational systems",
        "Support for both in-person and remote learning models",
        "24/7 support from education technology specialists",
      ]}
      technologies={[
        "Learning Management Systems",
        "Student Information Systems",
        "Educational Device Management",
        "Virtual Classroom Technology",
        "Campus WiFi Solutions",
        "Educational Data Analytics",
        "Digital Assessment Tools",
        "FERPA-Compliant Cloud Solutions",
      ]}
      caseStudies={[
        {
          title: "University Security Enhancement",
          description:
            "How we helped a university improve campus-wide security while maintaining an open learning environment.",
          link: "/case-studies",
        },
        {
          title: "K-12 District Remote Learning",
          description: "Rapidly deploying a secure remote learning infrastructure for an entire school district.",
          link: "/case-studies",
        },
        {
          title: "Community College IT Modernization",
          description:
            "Modernizing the IT infrastructure of a community college to support growing enrollment and new programs.",
          link: "/case-studies",
        },
      ]}
      faqs={[
        {
          question: "How do you ensure student data privacy?",
          answer:
            "We implement comprehensive security measures including encryption, access controls, and regular security assessments. Our team stays current with FERPA and other educational privacy regulations to ensure all solutions protect student information.",
        },
        {
          question: "Can you work within limited educational budgets?",
          answer:
            "Yes, we specialize in creating cost-effective solutions for educational institutions. We focus on maximizing value, leveraging educational discounts, and implementing solutions that reduce long-term operational costs.",
        },
        {
          question: "How do you support both in-person and remote learning?",
          answer:
            "We design hybrid infrastructure that seamlessly supports both physical classrooms and remote learning environments. Our solutions ensure consistent experiences, reliable access, and appropriate security regardless of where learning takes place.",
        },
        {
          question: "What kind of support do you provide for educational institutions?",
          answer:
            "We offer flexible support options tailored to educational needs, including after-hours support during critical academic periods, dedicated support for faculty and IT staff, and specialized assistance for educational applications.",
        },
      ]}
    />
  )
}
