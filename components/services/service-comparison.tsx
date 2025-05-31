"use client"

import { useMobileDetection } from "@/hooks/use-mobile-detection"
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export function ServiceComparison() {
  const { isMobile } = useMobileDetection()

  const comparisonData = [
    {
      category: "Security",
      conventional: { text: "Basic", status: "warning", icon: AlertCircle },
      solution: { text: "Enterprise-Grade", status: "success", icon: CheckCircle2 },
    },
    {
      category: "Performance",
      conventional: { text: "Variable", status: "warning", icon: AlertCircle },
      solution: { text: "Optimized", status: "success", icon: CheckCircle2 },
    },
    {
      category: "Cost Efficiency",
      conventional: { text: "High Capital Expense", status: "error", icon: XCircle },
      solution: { text: "Predictable OpEx", status: "success", icon: CheckCircle2 },
    },
    {
      category: "Scalability",
      conventional: { text: "Limited", status: "error", icon: XCircle },
      solution: { text: "Unlimited", status: "success", icon: CheckCircle2 },
    },
    {
      category: "Support",
      conventional: { text: "Business Hours", status: "warning", icon: AlertCircle },
      solution: { text: "24/7/365", status: "success", icon: CheckCircle2 },
    },
  ]

  // Mobile accordion view
  if (isMobile) {
    return (
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-4">Why Choose Our Solutions?</h2>
            <p className="text-muted-foreground">Compare our innovative approach with conventional solutions</p>
          </div>

          <div className="space-y-4">
            {comparisonData.map((item, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <div className="bg-muted p-3 font-semibold text-lg">{item.category}</div>
                <div className="p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span
                        className={cn(
                          "flex h-8 w-8 items-center justify-center rounded-full mr-2",
                          item.conventional.status === "success"
                            ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                            : item.conventional.status === "warning"
                              ? "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"
                              : "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
                        )}
                      >
                        <item.conventional.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm text-muted-foreground">Conventional</p>
                        <p className="font-medium">{item.conventional.text}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span
                        className={cn(
                          "flex h-8 w-8 items-center justify-center rounded-full mr-2",
                          "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
                        )}
                      >
                        <item.solution.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm text-muted-foreground">Our Solution</p>
                        <p className="font-medium">{item.solution.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Desktop table view
  return (
    <section className="py-16 bg-white dark:bg-slate-950">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Solutions?</h2>
          <p className="text-muted-foreground">Compare our innovative approach with conventional solutions</p>
        </div>

        <div className="overflow-hidden rounded-xl border">
          <div className="grid grid-cols-3">
            <div className="bg-muted p-6 border-b border-r">
              <h3 className="text-xl font-semibold">Comparison</h3>
            </div>
            <div className="bg-muted p-6 border-b border-r text-center">
              <h3 className="text-xl font-semibold">Conventional approach</h3>
              <p className="text-sm text-muted-foreground mt-1">with on-premises infrastructure</p>
            </div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6 border-b text-white text-center">
              <h3 className="text-xl font-semibold">Solutions</h3>
              <p className="text-sm text-white/80 mt-1">Our innovative, comprehensive approach</p>
            </div>

            {comparisonData.map((item, index) => (
              <>
                <div key={`category-${index}`} className="p-6 border-b border-r flex items-center">
                  <h4 className="text-xl font-semibold">{item.category}</h4>
                </div>
                <div key={`conventional-${index}`} className="p-6 border-b border-r flex items-center justify-center">
                  <span
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-full mr-2",
                      item.conventional.status === "success"
                        ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                        : item.conventional.status === "warning"
                          ? "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"
                          : "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
                    )}
                  >
                    <item.conventional.icon className="h-5 w-5" />
                  </span>
                  <span className="font-medium">{item.conventional.text}</span>
                </div>
                <div key={`solution-${index}`} className="p-6 border-b flex items-center justify-center">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full mr-2 bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                    <item.solution.icon className="h-5 w-5" />
                  </span>
                  <span className="font-medium">{item.solution.text}</span>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
