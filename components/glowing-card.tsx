"use client"

import type React from "react"

import type { ReactNode } from "react"
import { useRef, useState } from "react"

interface GlowingCardProps {
  children: ReactNode
  className?: string
}

export function GlowingCard({ children, className = "" }: GlowingCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setGlowPosition({ x, y })
  }

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(139, 92, 246, 0.15), transparent 40%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />
      {/* Border glow */}
      <div
        className="absolute inset-0 pointer-events-none rounded-lg transition-opacity duration-500"
        style={{
          background: `radial-gradient(400px circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(139, 92, 246, 0.3), transparent 40%)`,
          opacity: isHovered ? 1 : 0,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
