"use client"

import { useState, useEffect, useCallback } from "react"
import { useFilter } from "@/contexts/filter-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, CalendarIcon, X, Filter } from "lucide-react"
import { format } from "date-fns"

// Updated categories for cybersecurity focus
const categories = [
  { id: "all", name: "All Categories", count: 10 },
  { id: "cybersecurity", name: "Cybersecurity", count: 2 },
  { id: "network-security", name: "Network Security", count: 1 },
  { id: "remote-work", name: "Remote Work Security", count: 1 },
  { id: "data-security", name: "Data Security", count: 1 },
  { id: "email-security", name: "Email Security", count: 1 },
  { id: "managed-services", name: "Managed Services", count: 1 },
  { id: "security-tools", name: "Security Tools", count: 1 },
  { id: "ai-security", name: "AI Security", count: 1 },
  { id: "disaster-recovery", name: "Disaster Recovery", count: 1 },
  { id: "ransomware", name: "Ransomware", count: 1 },
]

// Updated tags for cybersecurity focus
const tags = [
  { id: "security", name: "Security" },
  { id: "small-business", name: "Small Business" },
  { id: "cyber-threats", name: "Cyber Threats" },
  { id: "network-security", name: "Network Security" },
  { id: "cost-effective", name: "Cost-Effective" },
  { id: "remote-work", name: "Remote Work" },
  { id: "vpn", name: "VPN" },
  { id: "data-breach", name: "Data Breach" },
  { id: "phishing", name: "Phishing" },
  { id: "managed-services", name: "Managed Services" },
  { id: "security-tools", name: "Security Tools" },
  { id: "ai", name: "AI" },
  { id: "cloud-backup", name: "Cloud Backup" },
  { id: "ransomware", name: "Ransomware" },
]

const authors = [
  { id: "rock-frederic", name: "Rock Frederic" },
  { id: "sarah-johnson", name: "Sarah Johnson" },
  { id: "michael-chen", name: "Michael Chen" },
  { id: "jennifer-adams", name: "Jennifer Adams" },
  { id: "david-wilson", name: "David Wilson" },
]

export function BlogFilterSystem() {
  const { filters, setFilter, resetFilters, searchQuery, setSearchQuery, isFiltering } = useFilter()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Initialize local state from context to prevent circular updates
  const [selectedTags, setSelectedTags] = useState<string[]>(filters.tags || [])
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>(filters.authors || [])
  const [dateRange, setDateRange] = useState<{
    from?: Date
    to?: Date
  }>(filters.dateRange || {})

  // Handle tag selection with useCallback to prevent recreation on each render
  const handleTagToggle = useCallback((tagId: string) => {
    setSelectedTags((prev) => {
      const newTags = prev.includes(tagId) ? prev.filter((id) => id !== tagId) : [...prev, tagId]
      return newTags
    })
  }, [])

  // Handle author selection with useCallback
  const handleAuthorToggle = useCallback((authorId: string) => {
    setSelectedAuthors((prev) => {
      const newAuthors = prev.includes(authorId) ? prev.filter((id) => id !== authorId) : [...prev, authorId]
      return newAuthors
    })
  }, [])

  // Update context when local state changes, but with a debounce effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setFilter("tags", selectedTags)
    }, 100)
    return () => clearTimeout(timer)
  }, [selectedTags, setFilter])

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilter("authors", selectedAuthors)
    }, 100)
    return () => clearTimeout(timer)
  }, [selectedAuthors, setFilter])

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilter("dateRange", dateRange)
    }, 100)
    return () => clearTimeout(timer)
  }, [dateRange, setFilter])

  // Reset all filters
  const handleResetFilters = useCallback(() => {
    resetFilters()
    setSelectedTags([])
    setSelectedAuthors([])
    setDateRange({})
  }, [resetFilters])

  // Get active filter count
  const getActiveFilterCount = useCallback(() => {
    let count = 0
    if (filters.category && filters.category !== "all") count++
    if (selectedTags.length > 0) count++
    if (selectedAuthors.length > 0) count++
    if (dateRange.from || dateRange.to) count++
    return count
  }, [filters.category, selectedTags, selectedAuthors, dateRange])

  return (
    <div className="mb-8 space-y-4">
      {/* Desktop Search and Filter Bar */}
      <div className="hidden md:flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search cybersecurity articles..."
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

        <Select value={filters.category || "all"} onValueChange={(value) => setFilter("category", value)}>
          <SelectTrigger className="w-[220px]">
            <SelectValue placeholder="Select security category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.name} ({category.count})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span>More Filters</span>
              {getActiveFilterCount() > 0 && (
                <Badge variant="secondary" className="ml-1">
                  {getActiveFilterCount()}
                </Badge>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[320px] p-4" align="end">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Security Topics</h4>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge
                      key={tag.id}
                      variant={selectedTags.includes(tag.id) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => handleTagToggle(tag.id)}
                    >
                      {tag.name}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Authors</h4>
                <div className="space-y-2">
                  {authors.map((author) => (
                    <div key={author.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`author-${author.id}`}
                        checked={selectedAuthors.includes(author.id)}
                        onCheckedChange={() => handleAuthorToggle(author.id)}
                      />
                      <Label htmlFor={`author-${author.id}`}>{author.name}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Date Range</h4>
                <div className="grid gap-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {dateRange.from ? (
                          dateRange.to ? (
                            <>
                              {format(dateRange.from, "LLL dd, y")} - {format(dateRange.to, "LLL dd, y")}
                            </>
                          ) : (
                            format(dateRange.from, "LLL dd, y")
                          )
                        ) : (
                          <span>Pick a date range</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="range" selected={dateRange} onSelect={setDateRange} initialFocus />
                    </PopoverContent>
                  </Popover>
                  {(dateRange.from || dateRange.to) && (
                    <Button variant="ghost" size="sm" onClick={() => setDateRange({})} className="mt-1">
                      Clear dates
                    </Button>
                  )}
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

        {isFiltering && (
          <Button variant="ghost" size="sm" onClick={handleResetFilters}>
            <X className="mr-2 h-4 w-4" />
            Clear all
          </Button>
        )}
      </div>

      {/* Mobile Search and Filter - simplified for brevity */}
      <div className="md:hidden space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search security articles..."
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

        <div className="flex gap-2">
          <Select value={filters.category || "all"} onValueChange={(value) => setFilter("category", value)}>
            <SelectTrigger className="flex-1">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          >
            <Filter className="h-4 w-4" />
            <span>Filters</span>
            {getActiveFilterCount() > 0 && (
              <Badge variant="secondary" className="ml-1">
                {getActiveFilterCount()}
              </Badge>
            )}
          </Button>
        </div>

        {/* Mobile filters panel - simplified for brevity */}
        {mobileFiltersOpen && (
          <div className="rounded-lg border bg-card p-4 shadow-sm">
            {/* Mobile filters content */}
            <div className="flex justify-between mt-4">
              <Button variant="outline" size="sm" onClick={handleResetFilters}>
                Reset all
              </Button>
              <Button size="sm" onClick={() => setMobileFiltersOpen(false)}>
                Apply filters
              </Button>
            </div>
          </div>
        )}

        {isFiltering && (
          <Button variant="ghost" size="sm" onClick={handleResetFilters} className="w-full justify-center">
            <X className="mr-2 h-4 w-4" />
            Clear all filters
          </Button>
        )}
      </div>

      {/* Active Filters Display - simplified for brevity */}
      {isFiltering && <div className="flex flex-wrap gap-2 pt-2">{/* Active filters badges */}</div>}
    </div>
  )
}
