"use client"

import type React from "react"

import { useState } from "react"

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you for your message! We will get back to you soon.",
    })

    // Reset form after successful submission
    setFormData({ name: "", email: "", subject: "", message: "" })

    // In a real implementation, you would send the form data to your server
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // })
    // const data = await response.json()
    // setFormStatus({ submitted: true, success: data.success, message: data.message })
  }

  return (
    <main>
      <header className="page-header">
        <h1>Contact Us</h1>
      </header>

      <section className="contact-us-section">
        <div className="container">
          <p>Ready to empower your business with innovative IT solutions from F09 Tech? Reach out to us today!</p>

          {formStatus.submitted && (
            <div className={`form-message ${formStatus.success ? "success" : "error"}`}>{formStatus.message}</div>
          )}

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                aria-required="true"
              ></textarea>
            </div>

            <button type="submit" className="submit-button cta-button">
              Send Message
            </button>
          </form>

          <div className="contact-details">
            <h2>Contact Details</h2>
            <p>
              Email: <a href="mailto:info@f09tech.com">info@f09tech.com</a>
            </p>
            <p>
              Phone: <a href="tel:+11234567890">(123) 456-7890</a>
            </p>
            <p>Address: Atlanta, Georgia</p>
          </div>
        </div>
      </section>
    </main>
  )
}
