"use client"

import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Props = {
  formData: any
  updateFormData: (data: any) => void
}

export default function InterestsStep({ formData, updateFormData }: Props) {
  const handleSelectChange = (name: string, value: string) => {
    updateFormData({ [name]: value })
  }

  const handleCheckboxChange = (category: string, value: string, checked: boolean) => {
    let updatedArray = [...formData[category]]

    if (checked) {
      updatedArray.push(value)
    } else {
      updatedArray = updatedArray.filter((item) => item !== value)
    }

    updateFormData({ [category]: updatedArray })
  }

  const areasOfInterest = [
    { id: "cybersecurity", label: "Cybersecurity" },
    { id: "networking", label: "Networking" },
    { id: "cloud_computing", label: "Cloud Computing" },
    { id: "software_development", label: "Software Development" },
    { id: "data_analytics", label: "Data Analytics" },
    { id: "ai_ml", label: "AI & Machine Learning" },
    { id: "devops", label: "DevOps" },
    { id: "it_support", label: "IT Support" },
  ]

  const technologies = [
    { id: "aws", label: "AWS" },
    { id: "azure", label: "Microsoft Azure" },
    { id: "gcp", label: "Google Cloud" },
    { id: "linux", label: "Linux" },
    { id: "windows_server", label: "Windows Server" },
    { id: "python", label: "Python" },
    { id: "javascript", label: "JavaScript" },
    { id: "java", label: "Java" },
    { id: "csharp", label: "C#" },
    { id: "docker", label: "Docker" },
    { id: "kubernetes", label: "Kubernetes" },
    { id: "cisco", label: "Cisco Networking" },
  ]

  return (
    <div className="space-y-6">
      <p className="text-sm text-slate-600 mb-4">
        Tell us about your interests and preferences for the mentorship program.
      </p>

      <div className="space-y-3">
        <Label>Areas of Interest (Select all that apply) *</Label>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {areasOfInterest.map((area) => (
            <div key={area.id} className="flex items-center space-x-2">
              <Checkbox
                id={`interest-${area.id}`}
                checked={formData.areasOfInterest.includes(area.id)}
                onCheckedChange={(checked) => handleCheckboxChange("areasOfInterest", area.id, checked as boolean)}
              />
              <Label htmlFor={`interest-${area.id}`} className="text-sm font-normal">
                {area.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <Label>Preferred Technologies (Select all that apply)</Label>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {technologies.map((tech) => (
            <div key={tech.id} className="flex items-center space-x-2">
              <Checkbox
                id={`tech-${tech.id}`}
                checked={formData.preferredTechnologies.includes(tech.id)}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("preferredTechnologies", tech.id, checked as boolean)
                }
              />
              <Label htmlFor={`tech-${tech.id}`} className="text-sm font-normal">
                {tech.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <Label htmlFor="careerPath">Desired Career Path *</Label>
        <RadioGroup value={formData.careerPath} onValueChange={(value) => handleSelectChange("careerPath", value)}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="technical_specialist" id="technical_specialist" />
            <Label htmlFor="technical_specialist" className="text-sm font-normal">
              Technical Specialist
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="management" id="management" />
            <Label htmlFor="management" className="text-sm font-normal">
              Management Track
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="consulting" id="consulting" />
            <Label htmlFor="consulting" className="text-sm font-normal">
              Consulting
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="entrepreneurship" id="entrepreneurship" />
            <Label htmlFor="entrepreneurship" className="text-sm font-normal">
              Entrepreneurship
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="undecided" id="undecided" />
            <Label htmlFor="undecided" className="text-sm font-normal">
              Undecided/Exploring
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="mentorshipType">Preferred Mentorship Type *</Label>
        <Select value={formData.mentorshipType} onValueChange={(value) => handleSelectChange("mentorshipType", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select mentorship type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="one_on_one">One-on-One Mentorship</SelectItem>
            <SelectItem value="group">Group Mentorship</SelectItem>
            <SelectItem value="project_based">Project-Based Mentorship</SelectItem>
            <SelectItem value="no_preference">No Preference</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="timeCommitment">Weekly Time Commitment *</Label>
        <Select value={formData.timeCommitment} onValueChange={(value) => handleSelectChange("timeCommitment", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select time commitment" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1_to_5">1-5 hours per week</SelectItem>
            <SelectItem value="5_to_10">5-10 hours per week</SelectItem>
            <SelectItem value="10_to_20">10-20 hours per week</SelectItem>
            <SelectItem value="20_plus">20+ hours per week</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
