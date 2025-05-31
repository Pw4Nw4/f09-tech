import Link from "next/link"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function BlogTags({ tags }: { tags: string[] }) {
  return (
    <Card>
      <CardContent className="p-4">
        <CardTitle className="mb-3 text-sm">Tags</CardTitle>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link key={tag} href={`/blog?tag=${tag.toLowerCase()}`}>
              <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                {tag}
              </Badge>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
