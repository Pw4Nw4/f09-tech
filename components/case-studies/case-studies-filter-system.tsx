"use client"

import { useState, useEffect } from "react"
import { useFilter } from "@/contexts/filter-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Slider } from "@/components/ui/slider"
import { Search, X, SlidersHorizontal } from "lucide-react"

// Updated data for security-focused case studies
const industries = [
  { id: "all", name: "All Industries" },
  { id: "retail", name: "Retail" },
  { id: "e-commerce", name: "E-Commerce" },
  { id: "food-service", name: "Food Service" },
  { id: "healthcare", name: "Healthcare" },
  { id: "financial-services", name: "Financial Services" },
]

const services = [
  { id: "all", name: "All Services" },
  { id: "cybersecurity", name: "Cybersecurity" },
  { id: "security-monitoring", name: "Security Monitoring" },
  { id: "managed-security", name: "Managed Security" },
  { id: "endpoint-security", name: "Endpoint Security" },
  { id: "cloud-migration", name: "Cloud Migration" },
]

const challenges = [
  { id: "security", name: "Security Vulnerabilities" },
  { id: "compliance", name: "Regulatory Compliance" },
  { id: "legacy-systems", name: "Legacy Systems" },
  { id: "remote-work", name: "Remote Work Security" },
  { id: "cost-optimization", name: "Cost Optimization" },
  { id: "data-management", name: "Data Protection" },
]

const technologies = [
  { id: "endpoint-protection", name: "Endpoint Protection" },
  { id: "backup-solutions", name: "Backup Solutions" },
  { id: "security-training", name: "Security Training" },
  { id: "siem", name: "SIEM" },
  { id: "vpn", name: "VPN" },
  { id: "disk-encryption", name: "Disk Encryption" },
  { id: "hybrid-cloud", name: "Hybrid Cloud" },
]

export function CaseStudiesFilterSystem() {
  const { filters, setFilter, resetFilters, searchQuery, setSearchQuery, isFiltering } = useFilter()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([])
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([])
  const [projectSize, setProjectSize] = useState<[number, number]>([0, 100])
  const [projectDuration, setProjectDuration] = useState<[number, number]>([0, 24])

  // Update context when local state changes
  useEffect(() => {
    setFilter("challenges", selectedChallenges)
  }, [selectedChallenges, setFilter])

  useEffect(() => {
    setFilter("technologies", selectedTechnologies)
  }, [selectedTechnologies, setFilter])

  useEffect(() => {
    setFilter("projectSize", projectSize)
  }, [projectSize, setFilter])

  useEffect(() => {
    setFilter("projectDuration", projectDuration)
  }, [projectDuration, setFilter])

  // Handle challenge selection
  const handleChallengeToggle = (challengeId: string) => {
    setSelectedChallenges((prev) =>
      prev.includes(challengeId) ? prev.filter((id) => id !== challengeId) : [...prev, challengeId],
    )
  }

  // Handle technology selection
  const handleTechnologyToggle = (technologyId: string) => {
    setSelectedTechnologies((prev) =>
      prev.includes(technologyId) ? prev.filter((id) => id !== technologyId) : [...prev, technologyId],
    )
  }

  // Reset all filters
  const handleResetFilters = () => {
    resetFilters()
    setSelectedChallenges([])
    setSelectedTechnologies([])
    setProjectSize([0, 100])
    setProjectDuration([0, 24])
  }

  // Get active filter count
  const getActiveFilterCount = () => {
    let count = 0
    if (filters.industry && filters.industry !== "all") count++
    if (filters.service && filters.service !== "all") count++
    if (selectedChallenges.length > 0) count++
    if (selectedTechnologies.length > 0) count++
    if (projectSize[0] > 0 || projectSize[1] < 100) count++
    if (projectDuration[0] > 0 || projectDuration[1] < 24) count++
    return count
  }

  return (
    <div className="mb-10 rounded-lg border bg-card p-6">
      {/* Desktop Search and Filter Bar */}
      <div className="hidden md:grid gap-4 md:grid-cols-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search security case studies..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2"
              onClick={() => setSearchQuery("")}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Clear search</span>
            </Button>
          )}
        </div>

        <Select value={filters.industry || "all"} onValueChange={(value) => setFilter("industry", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select industry" />
          </SelectTrigger>
          <SelectContent>
            {industries.map((industry) => (
              <SelectItem key={industry.id} value={industry.id}>
                {industry.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filters.service || "all"} onValueChange={(value) => setFilter("service", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service.id} value={service.id}>
                {service.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Mobile Search and Filter */}
      <div className="md:hidden space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search security case studies..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Select value={filters.industry || "all"} onValueChange={(value) => setFilter("industry", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Industry" />
            </SelectTrigger>
            <SelectContent>
              {industries.map((industry) => (
                <SelectItem key={industry.id} value={industry.id}>
                  {industry.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={filters.service || "all"} onValueChange={(value) => setFilter("service", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service.id} value={service.id}>
                  {service.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Advanced Filters */}
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          <span className="font-medium">Showing results</span>
          {isFiltering && <span> with applied filters</span>}
        </div>

        <div className="flex gap-2">
          {/* Desktop Advanced Filters */}
          <div className="hidden md:block">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4" />
                  <span>Advanced Filters</span>
                  {getActiveFilterCount() > 0 && (
                    <Badge variant="secondary" className="ml-1">
                      {getActiveFilterCount()}
                    </Badge>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[400px] p-6" align="end">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-3">Security Challenges</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {challenges.map((challenge) => (
                        <div key={challenge.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={`challenge-${challenge.id}`}
                            checked={selectedChallenges.includes(challenge.id)}
                            onCheckedChange={() => handleChallengeToggle(challenge.id)}
                          />
                          <Label htmlFor={`challenge-${challenge.id}`} className="text-sm">
                            {challenge.name}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Security Technologies</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {technologies.map((technology) => (
                        <div key={technology.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={`tech-${technology.id}`}
                            checked={selectedTechnologies.includes(technology.id)}
                            onCheckedChange={() => handleTechnologyToggle(technology.id)}
                          />
                          <Label htmlFor={`tech-${technology.id}`} className="text-sm">
                            {technology.name}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Project Size (Budget in $K)</h4>
                    <div className="px-2">
                      <Slider
                        defaultValue={projectSize}
                        max={100}
                        step={5}
                        onValueChange={(value) => setProjectSize(value as [number, number])}
                        className="mb-2"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>${projectSize[0]}K</span>
                        <span>${projectSize[1]}K+</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Project Duration (Months)</h4>
                    <div className="px-2">
                      <Slider
                        defaultValue={projectDuration}
                        max={24}
                        step={1}
                        onValueChange={(value) => setProjectDuration(value as [number, number])}
                        className="mb-2"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{projectDuration[0]} months</span>
                        <span>{projectDuration[1]} months+</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between pt-2">
                    <Button variant="outline" size="sm" onClick={handleResetFilters}>
                      Reset all
                    </Button>
                    <Button size="sm">Apply filters</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Mobile Advanced Filters */}
          <div className="md:hidden">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4" />
                  <span>Filters</span>
                  {getActiveFilterCount() > 0 && (
                    <Badge variant="secondary" className="ml-1">
                      {getActiveFilterCount()}
                    </Badge>
                  )}
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Advanced Filters</DrawerTitle>
                  <DrawerDescription>Refine your search with additional filters</DrawerDescription>
                </DrawerHeader>
                <div className="px-4 py-2">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="challenges">
                      <AccordionTrigger>Security Challenges</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid grid-cols-1 gap-2 pt-2">
                          {challenges.map((challenge) => (
                            <div key={challenge.id} className="flex items-center space-x-2">
                              <Checkbox
                                id={`mobile-challenge-${challenge.id}`}
                                checked={selectedChallenges.includes(challenge.id)}
                                onCheckedChange={() => handleChallengeToggle(challenge.id)}
                              />
                              <Label htmlFor={`mobile-challenge-${challenge.id}`} className="text-sm">
                                {challenge.name}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="technologies">
                      <AccordionTrigger>Security Technologies</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid grid-cols-1 gap-2 pt-2">
                          {technologies.map((technology) => (
                            <div key={technology.id} className="flex items-center space-x-2">
                              <Checkbox
                                id={`mobile-tech-${technology.id}`}
                                checked={selectedTechnologies.includes(technology.id)}
                                onCheckedChange={() => handleTechnologyToggle(technology.id)}
                              />
                              <Label htmlFor={`mobile-tech-${technology.id}`} className="text-sm">
                                {technology.name}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="size">
                      <AccordionTrigger>Project Size (Budget)</AccordionTrigger>
                      <AccordionContent>
                        <div className="px-2 pt-4">
                          <Slider
                            defaultValue={projectSize}
                            max={100}
                            step={5}
                            onValueChange={(value) => setProjectSize(value as [number, number])}
                            className="mb-2"
                          />
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>${projectSize[0]}K</span>
                            <span>${projectSize[1]}K+</span>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="duration">
                      <AccordionTrigger>Project Duration (Months)</AccordionTrigger>
                      <AccordionContent>
                        <div className="px-2 pt-4">
                          <Slider
                            defaultValue={projectDuration}
                            max={24}
                            step={1}
                            onValueChange={(value) => setProjectDuration(value as [number, number])}
                            className="mb-2"
                          />
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>{projectDuration[0]} months</span>
                            <span>{projectDuration[1]} months+</span>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <DrawerFooter>
                  <Button onClick={handleResetFilters} variant="outline">
                    Reset Filters
                  </Button>
                  <DrawerClose asChild>
                    <Button>Apply Filters</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>

          <Button variant="outline" size="sm" onClick={handleResetFilters} disabled={!isFiltering}>
            Reset Filters
          </Button>
        </div>
      </div>

      {/* Active Filters Display */}
      {isFiltering && (
        <div className="flex flex-wrap gap-2 mt-4">
          {filters.industry && filters.industry !== "all" && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Industry: {industries.find((i) => i.id === filters.industry)?.name}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 p-0 ml-1"
                onClick={() => setFilter("industry", "all")}
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove</span>
              </Button>
            </Badge>
          )}

          {filters.service && filters.service !== "all" && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Service: {services.find((s) => s.id === filters.service)?.name}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 p-0 ml-1"
                onClick={() => setFilter("service", "all")}
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove</span>
              </Button>
            </Badge>
          )}

          {selectedChallenges.map((challengeId) => (
            <Badge key={challengeId} variant="secondary" className="flex items-center gap-1">
              {challenges.find((c) => c.id === challengeId)?.name}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 p-0 ml-1"
                onClick={() => handleChallengeToggle(challengeId)}
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove</span>
              </Button>
            </Badge>
          ))}

          {selectedTechnologies.map((techId) => (
            <Badge key={techId} variant="secondary" className="flex items-center gap-1">
              {technologies.find((t) => t.id === techId)?.name}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 p-0 ml-1"
                onClick={() => handleTechnologyToggle(techId)}
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove</span>
              </Button>
            </Badge>
          ))}

          {(projectSize[0] > 0 || projectSize[1] < 100) && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Budget: ${projectSize[0]}K - ${projectSize[1]}K+
              <Button variant="ghost" size="icon" className="h-4 w-4 p-0 ml-1" onClick={() => setProjectSize([0, 100])}>
                <X className="h-3 w-3" />
                <span className="sr-only">Remove</span>
              </Button>
            </Badge>
          )}

          {(projectDuration[0] > 0 || projectDuration[1] < 24) && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Duration: {projectDuration[0]} - {projectDuration[1]}+ months
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 p-0 ml-1"
                onClick={() => setProjectDuration([0, 24])}
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove</span>
              </Button>
            </Badge>
          )}

          {searchQuery && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Search: {searchQuery}
              <Button variant="ghost" size="icon" className="h-4 w-4 p-0 ml-1" onClick={() => setSearchQuery("")}>
                <X className="h-3 w-3" />
                <span className="sr-only">Remove</span>
              </Button>
            </Badge>
          )}
        </div>
      )}
    </div>
  )
}
