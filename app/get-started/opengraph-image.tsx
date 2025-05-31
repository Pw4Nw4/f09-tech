import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        fontSize: 128,
        background: "linear-gradient(to bottom right, #0ea5e9, #0891b2)",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        padding: 48,
      }}
    >
      <div
        style={{
          fontSize: 48,
          fontWeight: "bold",
          marginBottom: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(255, 255, 255, 0.1)",
          padding: "12px 24px",
          borderRadius: 12,
        }}
      >
        F09 Tech
      </div>
      <div
        style={{
          fontSize: 64,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 24,
        }}
      >
        Get Started
      </div>
      <div
        style={{
          fontSize: 32,
          opacity: 0.8,
          textAlign: "center",
          maxWidth: "80%",
        }}
      >
        Tailored IT solutions for your specific needs
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  )
}
