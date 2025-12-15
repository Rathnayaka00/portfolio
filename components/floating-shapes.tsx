"use client"

import { useEffect, useState } from "react"

export function FloatingShapes() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large gradient orb */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[100px]"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)",
          top: "10%",
          right: "-10%",
          animation: "float 20s ease-in-out infinite",
        }}
      />

      {/* Secondary orb */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-[80px]"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
          bottom: "20%",
          left: "-5%",
          animation: "float 15s ease-in-out infinite reverse",
        }}
      />

      {/* Accent orb */}
      <div
        className="absolute w-[300px] h-[300px] rounded-full opacity-10 blur-[60px]"
        style={{
          background: "radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)",
          top: "50%",
          left: "30%",
          animation: "float 25s ease-in-out infinite",
        }}
      />
    </div>
  )
}
