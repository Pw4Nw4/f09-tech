"use client"

import type React from "react"

import { motion } from "framer-motion"
import type { ServiceCategory, UserType } from "../get-started-form"
import { Wrench, Shield, Network, Cloud, Cpu, HeadphonesIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceCategoryStepProps {
  selectedCategory: ServiceCategory
  userType: UserType
  onSelect: (category: ServiceCategory) => void
}

interface CategoryCardProps {
  category: ServiceCategory
  title: string
  description: string
  icon: React.ReactNode
  isSelected: boolean
  onClick: () => void
}

function CategoryCard({ category, title, description, icon, isSelected, onClick }: CategoryCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative cursor-pointer rounded-xl p-5 transition-all duration-200",
        "border-2 shadow-sm hover:shadow-md",
        isSelected ? "border-primary bg-primary/5 shadow-primary/10" : "border-border bg-card hover:border-primary/50",
      )}
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center gap-3">
        <div
          className={cn(
            "p-3 rounded-full",
            isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
          )}
        >
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>

      {isSelected && (
        <motion.div
          className="absolute top-3 right-3 w-3 h-3 rounded-full bg-primary"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        />
      )}
    </motion.div>
  )
}

export default function ServiceCategoryStep({ selectedCategory, userType, onSelect }: ServiceCategoryStepProps) {
  // Customize categories based on user type
  const getCategoryTitle = (userType: UserType) => {
    switch (userType) {
      case "individual":
        return "What service do you need help with?"
      case "retail":
        return "What retail technology service are you looking for?"
      case "enterprise":
        return "What enterprise solution are you interested in?"
      default:
        return "What service category are you interested in?"
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">{getCategoryTitle(userType)}</h2>
      <p className="text-muted-foreground mb-6">Select the category that best matches your current needs.</p>

      <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
        <CategoryCard
          category="repair"
          title="Repair & Maintenance"
          description="Fix issues with existing technology"
          icon={<Wrench className="w-5 h-5" />}
          isSelected={selectedCategory === "repair"}
          onClick={() => onSelect("repair")}
        />

        <CategoryCard
          category="security"
          title="Security & Protection"
          description="Secure your digital assets and data"
          icon={<Shield className="w-5 h-5" />}
          isSelected={selectedCategory === "security"}
          onClick={() => onSelect("security")}
        />

        <CategoryCard
          category="network"
          title="Network Solutions"
          description="Connectivity and network infrastructure"
          icon={<Network className="w-5 h-5" />}
          isSelected={selectedCategory === "network"}
          onClick={() => onSelect("network")}
        />

        <CategoryCard
          category="cloud"
          title="Cloud Services"
          description="Cloud storage and computing solutions"
          icon={<Cloud className="w-5 h-5" />}
          isSelected={selectedCategory === "cloud"}
          onClick={() => onSelect("cloud")}
        />

        <CategoryCard
          category="custom"
          title="Custom Solutions"
          description="Tailored technology solutions"
          icon={<Cpu className="w-5 h-5" />}
          isSelected={selectedCategory === "custom"}
          onClick={() => onSelect("custom")}
        />

        <CategoryCard
          category="support"
          title="Ongoing Support"
          description="Maintenance and technical assistance"
          icon={<HeadphonesIcon className="w-5 h-5" />}
          isSelected={selectedCategory === "support"}
          onClick={() => onSelect("support")}
        />
      </div>
    </div>
  )
}
