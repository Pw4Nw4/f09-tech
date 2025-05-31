import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ApplicationSuccessPage() {
  return (
    <main className="bg-slate-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Application Submitted!</h2>
          <p className="mt-2 text-sm text-gray-600">
            Thank you for applying to our mentorship program. We've received your application and will review it
            shortly.
          </p>
        </div>

        <div className="mt-6">
          <p className="text-sm text-gray-600 mb-4">What happens next:</p>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-600">
            <li>Our team will review your application (typically within 5-7 business days)</li>
            <li>You'll receive an email with the status of your application</li>
            <li>If selected, we'll schedule an interview to discuss the program in more detail</li>
          </ol>
        </div>

        <div className="mt-6 flex flex-col space-y-4">
          <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
            <Link href="/mentorship">Return to Mentorship Page</Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
