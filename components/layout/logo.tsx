"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("flex items-center", className)}
    >
      <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-md bg-gradient-primary">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
        >
          <path
            d="M12 2L4 6V12C4 15.31 7.58 19.5 12 21C16.42 19.5 20 15.31 20 12V6L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 12L11 14L15 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="text-xl font-bold tracking-tight">
        <span className="text-gradient">F09</span> Tech
      </span>
    </motion.div>
  )
}
