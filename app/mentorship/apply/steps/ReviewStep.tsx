type Props = {
  formData: any
  updateFormData: (data: any) => void
}

export default function ReviewStep({ formData }: Props) {
  const formatArrayToString = (array: string[]) => {
    if (!array || array.length === 0) return "None selected"
    return array.join(", ")
  }

  const sections = [
    {
      title: "Personal Information",
      fields: [
        { label: "Name", value: `${formData.firstName} ${formData.lastName}` },
        { label: "Email", value: formData.email },
        { label: "Phone", value: formData.phone },
        {
          label: "Address",
          value:
            `${formData.address || ""} ${formData.city || ""} ${formData.state || ""} ${formData.zipCode || ""}`.trim(),
        },
      ],
    },
    {
      title: "Education",
      fields: [
        { label: "Highest Education", value: formData.highestEducation },
        { label: "Field of Study", value: formData.fieldOfStudy },
        { label: "School/Institution", value: formData.schoolName },
        { label: "Graduation Year", value: formData.graduationYear },
        { label: "Relevant Courses", value: formData.relevantCourses },
        { label: "Certifications", value: formData.certifications },
      ],
    },
    {
      title: "Experience",
      fields: [
        { label: "Years of Experience", value: formData.yearsExperience },
        { label: "Current Role", value: formData.currentRole },
        { label: "Current Company", value: formData.currentCompany },
        { label: "Technical Skills", value: formData.relevantSkills },
        { label: "Technical Background", value: formData.technicalBackground },
        { label: "Project Experience", value: formData.projectExperience },
      ],
    },
    {
      title: "Interests",
      fields: [
        { label: "Areas of Interest", value: formatArrayToString(formData.areasOfInterest) },
        { label: "Preferred Technologies", value: formatArrayToString(formData.preferredTechnologies) },
        { label: "Desired Career Path", value: formData.careerPath },
        { label: "Preferred Mentorship Type", value: formData.mentorshipType },
        { label: "Weekly Time Commitment", value: formData.timeCommitment },
      ],
    },
    {
      title: "Goals",
      fields: [
        { label: "Short-Term Goals", value: formData.shortTermGoals },
        { label: "Long-Term Goals", value: formData.longTermGoals },
        { label: "Expectations from Program", value: formData.expectationsFromProgram },
        { label: "How You Can Contribute", value: formData.contributionToProgram },
        { label: "Challenges to Overcome", value: formData.challengesToOvercome },
      ],
    },
    {
      title: "Additional Information",
      fields: [
        { label: "How Did You Hear About Us", value: formData.howDidYouHear },
        { label: "Additional Comments", value: formData.additionalComments || "None" },
      ],
    },
  ]

  return (
    <div className="space-y-6">
      <p className="text-sm text-slate-600 mb-4">
        Please review your application information before submitting. You can go back to previous steps to make changes
        if needed.
      </p>

      {sections.map((section, index) => (
        <div key={index} className="space-y-3">
          <h3 className="font-medium text-slate-900 border-b pb-1">{section.title}</h3>
          <div className="grid grid-cols-1 gap-2">
            {section.fields.map((field, fieldIndex) => (
              <div key={fieldIndex} className="grid grid-cols-3 gap-2 text-sm">
                <div className="font-medium text-slate-700">{field.label}:</div>
                <div className="col-span-2 text-slate-600 break-words">{field.value || "Not provided"}</div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-6 p-4 bg-blue-50 rounded-md">
        <p className="text-sm text-blue-800">
          By submitting this application, you confirm that all information provided is accurate and complete. We'll
          review your application and contact you regarding next steps.
        </p>
      </div>
    </div>
  )
}
