"use client"

import type React from "react"

import { useState } from "react"
import { Search, Filter, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
import { useFilter } from "@/contexts/filter-context"
import { Badge } from "@/components/ui/badge"
import { useMobileDetection } from "@/hooks/use-mobile-detection"

const categories = [
  { value: "all", label: "All Categories" },
  { value: "web-development", label: "Web Development" },
  { value: "mobile-app", label: "Mobile Apps" },
  { value: "cybersecurity", label: "Cybersecurity" },
  { value: "cloud-migration", label: "Cloud Migration" },
  { value: "custom-software", label: "Custom Software" },
  { value: "it-consulting", label: "IT Consulting" },
]

const industries = [
  { value: "all", label: "All Industries" },
  { value: "financial-services", label: "Financial Services" },
  { value: "healthcare", label: "Healthcare" },
  { value: "retail", label: "Retail" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "education", label: "Education" },
  { value: "technology", label: "Technology" },
  { value: "government", label: "Government" },
]

export function PortfolioFilter() {
  const { filters, setFilters, searchQuery, setSearchQuery, isFiltering, resetFilters } = useFilter()
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery)
  const [localFilters, setLocalFilters] = useState(filters)
  const { isMobile } = useMobileDetection()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchQuery(localSearchQuery)
  }

  const handleFilterChange = (key: string, value: string) => {
    setFilters({ ...filters, [key]: value })
  }

  const handleMobileFilterChange = (key: string, value: string) => {
    setLocalFilters({ ...localFilters, [key]: value })
  }

  const applyFilters = () => {
    setFilters(localFilters)
    setSearchQuery(localSearchQuery)
  }

  const handleResetFilters = () => {
    resetFilters()
    setLocalSearchQuery("")
    setLocalFilters({ category: "all", industry: "all" })
  }

  // Desktop filter view
  if (!isMobile) {
    return (
      <div className="mb-8 space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row">
          <form onSubmit={handleSearch} className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search projects..."
              className="pl-8"
              value={localSearchQuery}
              onChange={(e) => setLocalSearchQuery(e.target.value)}
            />
          </form>

          <div className="flex gap-2">
            <Select value={filters.category} onValueChange={(value) => handleFilterChange("category", value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={filters.industry} onValueChange={(value) => handleFilterChange("industry", value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((industry) => (
                  <SelectItem key={industry.value} value={industry.value}>
                    {industry.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {isFiltering && (
              <Button variant="outline" size="icon" onClick={handleResetFilters} title="Clear filters">
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        {isFiltering && (
          <div className="flex flex-wrap gap-2">
            {filters.category !== "all" && (
              <Badge variant="secondary" className="flex items-center gap-1">
                Category: {categories.find((c) => c.value === filters.category)?.label}
                <X className="h-3 w-3 cursor-pointer" onClick={() => handleFilterChange("category", "all")} />
              </Badge>
            )}

            {filters.industry !== "all" && (
              <Badge variant="secondary" className="flex items-center gap-1">
                Industry: {industries.find((i) => i.value === filters.industry)?.label}
                <X className="h-3 w-3 cursor-pointer" onClick={() => handleFilterChange("industry", "all")} />
              </Badge>
            )}

            {searchQuery && (
              <Badge variant="secondary" className="flex items-center gap-1">
                Search: {searchQuery}
                <X className="h-3 w-3 cursor-pointer" onClick={() => setSearchQuery("")} />
              </Badge>
            )}
          </div>
        )}
      </div>
    )
  }

  // Mobile filter view
  return (
    <div className="mb-8 space-y-4">
      <div className="flex gap-2">
        <form onSubmit={handleSearch} className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search projects..."
            className="pl-8"
            value={localSearchQuery}
            onChange={(e) => setLocalSearchQuery(e.target.value)}
          />
        </form>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filter Projects</SheetTitle>
            </SheetHeader>

            <div className="py-6 space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <Select
                  value={localFilters.category}
                  onValueChange={(value) => handleMobileFilterChange("category", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Industry</label>
                <Select
                  value={localFilters.industry}
                  onValueChange={(value) => handleMobileFilterChange("industry", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((industry) => (
                      <SelectItem key={industry.value} value={industry.value}>
                        {industry.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Search</label>
                <Input
                  type="search"
                  placeholder="Search projects..."
                  value={localSearchQuery}
                  onChange={(e) => setLocalSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <SheetFooter>
              <SheetClose asChild>
                <Button variant="outline" onClick={handleResetFilters}>
                  Reset
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button onClick={applyFilters}>Apply Filters</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {isFiltering && (
        <div className="flex flex-wrap gap-2">
          {filters.category !== "all" && (
            <Badge variant="secondary" className="flex items-center gap-1">
              {categories.find((c) => c.value === filters.category)?.label}
              <X className="h-3 w-3 cursor-pointer" onClick={() => handleFilterChange("category", "all")} />
            </Badge>
          )}

          {filters.industry !== "all" && (
            <Badge variant="secondary" className="flex items-center gap-1">
              {industries.find((i) => i.value === filters.industry)?.label}
              <X className="h-3 w-3 cursor-pointer" onClick={() => handleFilterChange("industry", "all")} />
            </Badge>
          )}

          {searchQuery && (
            <Badge variant="secondary" className="flex items-center gap-1">
              "{searchQuery}"
              <X className="h-3 w-3 cursor-pointer" onClick={() => setSearchQuery("")} />
            </Badge>
          )}
        </div>
      )}
    </div>
  )
}
