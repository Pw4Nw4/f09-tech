"use client"

import type React from "react"

import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Props = {
  formData: any
  updateFormData: (data: any) => void
}

export default function GoalsStep({ formData, updateFormData }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target
    updateFormData({ [name]: value })
  }

  const handleSelectChange = (name: string, value: string) => {
    updateFormData({ [name]: value })
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-600 mb-4">
        Tell us about your goals and what you hope to achieve through the mentorship program.
      </p>

      <div className="space-y-2">
        <Label htmlFor="shortTermGoals">Short-Term Goals (3-6 months) *</Label>
        <Textarea
          id="shortTermGoals"
          name="shortTermGoals"
          value={formData.shortTermGoals}
          onChange={handleChange}
          placeholder="What do you hope to achieve in the next 3-6 months?"
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="longTermGoals">Long-Term Goals (1-3 years) *</Label>
        <Textarea
          id="longTermGoals"
          name="longTermGoals"
          value={formData.longTermGoals}
          onChange={handleChange}
          placeholder="What are your career goals for the next 1-3 years?"
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="expectationsFromProgram">Expectations from the Program *</Label>
        <Textarea
          id="expectationsFromProgram"
          name="expectationsFromProgram"
          value={formData.expectationsFromProgram}
          onChange={handleChange}
          placeholder="What specific skills, knowledge, or opportunities do you hope to gain from this mentorship program?"
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contributionToProgram">How You Can Contribute *</Label>
        <Textarea
          id="contributionToProgram"
          name="contributionToProgram"
          value={formData.contributionToProgram}
          onChange={handleChange}
          placeholder="How do you think you can contribute to the mentorship program and community?"
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="challengesToOvercome">Challenges to Overcome</Label>
        <Textarea
          id="challengesToOvercome"
          name="challengesToOvercome"
          value={formData.challengesToOvercome}
          onChange={handleChange}
          placeholder="What challenges or obstacles do you hope to overcome through this program?"
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="howDidYouHear">How did you hear about our mentorship program? *</Label>
        <Select value={formData.howDidYouHear} onValueChange={(value) => handleSelectChange("howDidYouHear", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="website">F09 Tech Website</SelectItem>
            <SelectItem value="social_media">Social Media</SelectItem>
            <SelectItem value="friend">Friend or Colleague</SelectItem>
            <SelectItem value="event">Event or Conference</SelectItem>
            <SelectItem value="search">Search Engine</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="additionalComments">Additional Comments</Label>
        <Textarea
          id="additionalComments"
          name="additionalComments"
          value={formData.additionalComments}
          onChange={handleChange}
          placeholder="Any additional information you'd like to share with us"
          rows={3}
        />
      </div>
    </div>
  )
}
