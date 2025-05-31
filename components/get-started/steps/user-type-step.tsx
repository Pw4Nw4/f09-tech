"use client"

import type React from "react"

import { motion } from "framer-motion"
import type { UserType } from "../get-started-form"
import { User, Store, Building2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface UserTypeStepProps {
  selectedType: UserType
  onSelect: (type: UserType) => void
}

interface TypeCardProps {
  type: UserType
  title: string
  description: string
  icon: React.ReactNode
  isSelected: boolean
  onClick: () => void
}

function TypeCard({ type, title, description, icon, isSelected, onClick }: TypeCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative cursor-pointer rounded-xl p-6 transition-all duration-200",
        "border-2 shadow-sm hover:shadow-md",
        isSelected ? "border-primary bg-primary/5 shadow-primary/10" : "border-border bg-card hover:border-primary/50",
      )}
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
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
          <p className="text-muted-foreground">{description}</p>
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

export default function UserTypeStep({ selectedType, onSelect }: UserTypeStepProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">What best describes you?</h2>
      <p className="text-muted-foreground mb-6">This helps us tailor our services to your specific needs.</p>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3">
        <TypeCard
          type="individual"
          title="Individual"
          description="Personal technology needs for home or personal use"
          icon={<User className="w-6 h-6" />}
          isSelected={selectedType === "individual"}
          onClick={() => onSelect("individual")}
        />

        <TypeCard
          type="retail"
          title="Retail Business"
          description="Solutions for retail stores, restaurants, and small businesses"
          icon={<Store className="w-6 h-6" />}
          isSelected={selectedType === "retail"}
          onClick={() => onSelect("retail")}
        />

        <TypeCard
          type="enterprise"
          title="Enterprise"
          description="Advanced solutions for larger organizations and corporations"
          icon={<Building2 className="w-6 h-6" />}
          isSelected={selectedType === "enterprise"}
          onClick={() => onSelect("enterprise")}
        />
      </div>
    </div>
  )
}
