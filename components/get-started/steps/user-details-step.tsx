"use client"

import type { UserType, FormData } from "../get-started-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface UserDetailsStepProps {
  userDetails: FormData["userDetails"]
  userType: UserType
  onUpdate: (field: keyof FormData["userDetails"], value: any) => void
}

export default function UserDetailsStep({ userDetails, userType, onUpdate }: UserDetailsStepProps) {
  const isBusinessUser = userType === "retail" || userType === "enterprise"

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Your Details</h2>
      <p className="text-muted-foreground mb-6">
        Please provide your contact information so we can follow up with you.
      </p>

      <div className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              placeholder="Your name"
              value={userDetails.name}
              onChange={(e) => onUpdate("name", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              Email Address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={userDetails.email}
              onChange={(e) => onUpdate("email", e.target.value)}
              required
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              placeholder="(123) 456-7890"
              value={userDetails.phone}
              onChange={(e) => onUpdate("phone", e.target.value)}
            />
          </div>

          {isBusinessUser && (
            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input
                id="company"
                placeholder="Your company"
                value={userDetails.company}
                onChange={(e) => onUpdate("company", e.target.value)}
              />
            </div>
          )}
        </div>

        {isBusinessUser && (
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="budget">Budget Range</Label>
              <Select value={userDetails.budget || ""} onValueChange={(value) => onUpdate("budget", value)}>
                <SelectTrigger id="budget">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-5k">Under $5,000</SelectItem>
                  <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                  <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                  <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                  <SelectItem value="over-50k">Over $50,000</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeline">Project Timeline</Label>
              <Select value={userDetails.timeline || ""} onValueChange={(value) => onUpdate("timeline", value)}>
                <SelectTrigger id="timeline">
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="urgent">Urgent (ASAP)</SelectItem>
                  <SelectItem value="1-month">Within 1 month</SelectItem>
                  <SelectItem value="1-3-months">1-3 months</SelectItem>
                  <SelectItem value="3-6-months">3-6 months</SelectItem>
                  <SelectItem value="6-plus-months">6+ months</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="message">Additional Details</Label>
          <Textarea
            id="message"
            placeholder="Tell us more about your specific needs or questions..."
            rows={4}
            value={userDetails.message}
            onChange={(e) => onUpdate("message", e.target.value)}
          />
        </div>

        <div className="space-y-3">
          <Label>Preferred Contact Method</Label>
          <RadioGroup
            value={userDetails.preferredContact}
            onValueChange={(value) => onUpdate("preferredContact", value)}
            className="flex flex-col space-y-1"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="email" id="contact-email" />
              <Label htmlFor="contact-email" className="cursor-pointer">
                Email
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="phone" id="contact-phone" />
              <Label htmlFor="contact-phone" className="cursor-pointer">
                Phone
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  )
}
