"use client"

import type React from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Props = {
  formData: any
  updateFormData: (data: any) => void
}

export default function EducationStep({ formData, updateFormData }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    updateFormData({ [name]: value })
  }

  const handleSelectChange = (name: string, value: string) => {
    updateFormData({ [name]: value })
  }

  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 30 }, (_, i) => currentYear - i)

  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-600 mb-4">
        Tell us about your educational background and any relevant certifications.
      </p>

      <div className="space-y-2">
        <Label htmlFor="highestEducation">Highest Level of Education *</Label>
        <Select
          value={formData.highestEducation}
          onValueChange={(value) => handleSelectChange("highestEducation", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select your highest education level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="high_school">High School</SelectItem>
            <SelectItem value="associate">Associate's Degree</SelectItem>
            <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
            <SelectItem value="master">Master's Degree</SelectItem>
            <SelectItem value="doctorate">Doctorate</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="fieldOfStudy">Field of Study</Label>
          <Input
            id="fieldOfStudy"
            name="fieldOfStudy"
            value={formData.fieldOfStudy}
            onChange={handleChange}
            placeholder="e.g., Computer Science"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="schoolName">School/Institution</Label>
          <Input
            id="schoolName"
            name="schoolName"
            value={formData.schoolName}
            onChange={handleChange}
            placeholder="Name of school or institution"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="graduationYear">Graduation Year</Label>
        <Select value={formData.graduationYear} onValueChange={(value) => handleSelectChange("graduationYear", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select graduation year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="in_progress">Currently Enrolled</SelectItem>
            {years.map((year) => (
              <SelectItem key={year} value={year.toString()}>
                {year}
              </SelectItem>
            ))}
            <SelectItem value="before_1995">Before 1995</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="relevantCourses">Relevant Courses</Label>
        <Textarea
          id="relevantCourses"
          name="relevantCourses"
          value={formData.relevantCourses}
          onChange={handleChange}
          placeholder="List any relevant courses you've taken"
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="certifications">Certifications</Label>
        <Textarea
          id="certifications"
          name="certifications"
          value={formData.certifications}
          onChange={handleChange}
          placeholder="List any relevant certifications (e.g., CompTIA A+, CCNA, etc.)"
          rows={3}
        />
      </div>
    </div>
  )
}
