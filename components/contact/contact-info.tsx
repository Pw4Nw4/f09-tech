import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="rounded-lg border p-4 sm:p-6">
      <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold">Contact Information</h3>
      <div className="space-y-3 sm:space-y-4">
        <div className="flex items-start">
          <MapPin
            className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 mt-0.5 text-brand-500"
            style={{ color: "var(--brand-500)" }}
          />
          <div>
            <p className="font-medium text-sm sm:text-base">Address</p>
            <p className="text-sm sm:text-base text-muted-foreground">123 Tech Avenue, Atlanta, GA 30308</p>
          </div>
        </div>

        <div className="flex items-start">
          <Phone
            className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 mt-0.5 text-brand-500"
            style={{ color: "var(--brand-500)" }}
          />
          <div>
            <p className="font-medium text-sm sm:text-base">Phone</p>
            <p className="text-sm sm:text-base text-muted-foreground">
              <a href="tel:+11234567890" className="hover:underline">
                (123) 456-7890
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <Mail
            className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 mt-0.5 text-brand-500"
            style={{ color: "var(--brand-500)" }}
          />
          <div>
            <p className="font-medium text-sm sm:text-base">Email</p>
            <p className="text-sm sm:text-base text-muted-foreground">
              <a href="mailto:info@f09tech.com" className="hover:underline">
                info@f09tech.com
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <Clock
            className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 mt-0.5 text-brand-500"
            style={{ color: "var(--brand-500)" }}
          />
          <div>
            <p className="font-medium text-sm sm:text-base">Business Hours</p>
            <p className="text-sm sm:text-base text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-sm sm:text-base text-muted-foreground">Saturday - Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  )
}
