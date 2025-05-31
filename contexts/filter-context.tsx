"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, useCallback } from "react"

type FilterContextType = {
  filters: Record<string, any>
  setFilter: (key: string, value: any) => void
  resetFilters: () => void
  searchQuery: string
  setSearchQuery: (query: string) => void
  isFiltering: boolean
}

const FilterContext = createContext<FilterContextType | undefined>(undefined)

export function FilterProvider({
  children,
  initialFilters = {},
}: {
  children: React.ReactNode
  initialFilters?: Record<string, any>
}) {
  const [filters, setFilters] = useState<Record<string, any>>(initialFilters)
  const [searchQuery, setSearchQuery] = useState("")
  const [isFiltering, setIsFiltering] = useState(false)

  // Use useCallback to prevent recreation of these functions on each render
  const setFilter = useCallback((key: string, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }))
  }, [])

  const resetFilters = useCallback(() => {
    setFilters(initialFilters)
    setSearchQuery("")
  }, [initialFilters])

  // Check if any filters are active
  useEffect(() => {
    const hasActiveFilters =
      Object.values(filters).some((value) => {
        if (Array.isArray(value)) return value.length > 0
        return value !== "" && value !== "all" && value !== "All" && value !== undefined
      }) || searchQuery.trim() !== ""

    setIsFiltering(hasActiveFilters)
  }, [filters, searchQuery])

  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilter,
        resetFilters,
        searchQuery,
        setSearchQuery,
        isFiltering,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export function useFilter() {
  const context = useContext(FilterContext)
  if (context === undefined) {
    throw new Error("useFilter must be used within a FilterProvider")
  }
  return context
}
