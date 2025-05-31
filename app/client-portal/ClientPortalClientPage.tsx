"use client"

import type React from "react"

import { useState } from "react"

export default function ClientPortalClientPage() {
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
        <h1>Client Portal</h1>
      </header>

      <section className="content-section">
        <div className="container">
          <p>
            Welcome to the F09 Tech Client Portal. Please log in to access your personalized dashboard, manage your
            projects, track support tickets, and communicate securely with our team.
          </p>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username-client">Username or Email:</label>
              <input
                type="text"
                id="username-client"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password-client">Password:</label>
              <input
                type="password"
                id="password-client"
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
            Don&apos;t have an account? Please <a href="/contact">contact us</a> to set up your client access.
          </p>
        </div>
      </section>
    </main>
  )
}
