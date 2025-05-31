"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const categories = [
  { name: "All", count: 24 },
  { name: "Cybersecurity", count: 10 },
  { name: "Cloud Computing", count: 8 },
  { name: "IT Strategy", count: 6 },
  { name: "Digital Transformation", count: 5 },
  { name: "Artificial Intelligence", count: 4 },
]

export function BlogCategories() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search articles..."
          className="pl-9"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div>
        <h3 className="mb-3 text-lg font-semibold">Categories</h3>
        <div className="space-y-1">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={activeCategory === category.name ? "default" : "ghost"}
              className="w-full justify-between"
              onClick={() => setActiveCategory(category.name)}
            >
              <span>{category.name}</span>
              <span className="rounded-full bg-muted px-2 py-0.5 text-xs">{category.count}</span>
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-semibold">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {["Security", "Cloud", "AI", "DevOps", "Compliance", "Remote Work", "Data Privacy"].map((tag) => (
            <Button key={tag} variant="outline" size="sm">
              {tag}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
