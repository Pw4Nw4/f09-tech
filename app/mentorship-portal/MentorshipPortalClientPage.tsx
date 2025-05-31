"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

export default function MentorshipPortalClientPage() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCredentials((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would authenticate the user
    console.log("Login attempt with:", credentials)
  }

  return (
    <main>
      <header className="page-header">
        <h1>Mentorship Portal</h1>
      </header>

      <section className="content-section">
        <div className="container">
          <p>
            Welcome to the F09 Tech Mentorship Portal. Log in to access course materials, participate in discussions,
            submit assignments, and track your learning progress.
          </p>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username-mentor">Username or Email:</label>
              <input
                type="text"
                id="username-mentor"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password-mentor">Password:</label>
              <input
                type="password"
                id="password-mentor"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>
            <button type="submit" className="submit-button cta-button">
              Login
            </button>
          </form>

          <p className="portal-link">
            Interested in joining our mentorship program? <Link href="/mentorship">Learn more and apply here.</Link>
          </p>
        </div>
      </section>
    </main>
  )
}
