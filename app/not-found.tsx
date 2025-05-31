import Link from "next/link"
import { FileSearch } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-amber-100 dark:bg-amber-900/20">
        <FileSearch className="w-8 h-8 text-amber-600 dark:text-amber-400" />
      </div>
      <h1 className="text-3xl font-bold tracking-tight mb-2">Page not found</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
        Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="px-6 py-3 rounded-lg bg-amber-600 text-white font-medium hover:bg-amber-700 transition-colors"
        >
          Go back home
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
        >
          Contact support
        </Link>
      </div>
    </div>
  )
}
