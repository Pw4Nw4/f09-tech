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

export default function ExperienceStep({ formData, updateFormData }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    updateFormData({ [name]: value })
  }

  const handleSelectChange = (name: string, value: string) => {
    updateFormData({ [name]: value })
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-600 mb-4">Tell us about your professional experience and technical skills.</p>

      <div className="space-y-2">
        <Label htmlFor="yearsExperience">Years of IT/Tech Experience *</Label>
        <Select
          value={formData.yearsExperience}
          onValueChange={(value) => handleSelectChange("yearsExperience", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select years of experience" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">No experience yet</SelectItem>
            <SelectItem value="less_than_1">Less than 1 year</SelectItem>
            <SelectItem value="1_to_3">1-3 years</SelectItem>
            <SelectItem value="3_to_5">3-5 years</SelectItem>
            <SelectItem value="5_to_10">5-10 years</SelectItem>
            <SelectItem value="10_plus">10+ years</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="currentRole">Current Role</Label>
          <Input
            id="currentRole"
            name="currentRole"
            value={formData.currentRole}
            onChange={handleChange}
            placeholder="e.g., Student, IT Support, Developer"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="currentCompany">Current Company/Organization</Label>
          <Input
            id="currentCompany"
            name="currentCompany"
            value={formData.currentCompany}
            onChange={handleChange}
            placeholder="Where you currently work or study"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="relevantSkills">Technical Skills</Label>
        <Textarea
          id="relevantSkills"
          name="relevantSkills"
          value={formData.relevantSkills}
          onChange={handleChange}
          placeholder="List your technical skills (e.g., programming languages, tools, platforms)"
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="technicalBackground">Technical Background</Label>
        <Textarea
          id="technicalBackground"
          name="technicalBackground"
          value={formData.technicalBackground}
          onChange={handleChange}
          placeholder="Briefly describe your technical background and experience"
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="projectExperience">Project Experience</Label>
        <Textarea
          id="projectExperience"
          name="projectExperience"
          value={formData.projectExperience}
          onChange={handleChange}
          placeholder="Describe any relevant projects you've worked on"
          rows={3}
        />
      </div>
    </div>
  )
}
