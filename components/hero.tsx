"use client"

import { ArrowRight, Github, Linkedin, Mail, Download, Sparkles } from "lucide-react"
import { MagneticButton } from "./magnetic-button"
import { ScrollReveal } from "./scroll-reveal"
import Image from "next/image"
import profileImg from "../src/profile.png"

export function Hero() {
  return (
    <section className="min-h-[100vh] flex items-center py-24 px-4 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full opacity-20"
          style={{
            background: "conic-gradient(from 0deg, transparent, rgba(139, 92, 246, 0.4), transparent 30%)",
            animation: "spin 25s linear infinite",
          }}
        />
        {/* Additional ambient glow */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 left-20 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            {/* Name and Title */}
            <div className="space-y-3">
              <ScrollReveal delay={100}>
                <p className="inline-flex items-center justify-center lg:justify-start gap-2 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase bg-gradient-to-r from-primary/15 via-violet-500/10 to-primary/15 text-primary border border-primary/30 shadow-[0_10px_30px_-15px_rgba(124,58,237,0.6)] backdrop-blur">
                  Hello, I'm
                </p>
              </ScrollReveal>

              <ScrollReveal delay={200}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tight">
  <span className="block text-foreground">Malinda</span>
  <span className="block mb-8 bg-gradient-to-r from-primary via-violet-400 to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
  Rathnayaka
</span>
</h1>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <p className="text-xl md:text-2xl font-semibold text-foreground/90">
                    AI/ML Engineer & Research Enthusiast 
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty leading-relaxed">
                Designing and exploring intelligent systems grounded in advanced AI and machine learning research. Focused on bridging theoretical innovation with realworld impact by transforming cutting edge models into scalable, production grade solutions.
                </p>
              </ScrollReveal>
            </div>

            {/* CTA Buttons */}
            <ScrollReveal delay={500}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <MagneticButton strength={0.2}>
                  <a
                    href="#projects"
                    className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    View My Work
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </MagneticButton>
                <MagneticButton strength={0.2}>
                  <a
                    href="https://drive.google.com/file/d/1tiM-0DB-HZCebcNU0R3ndYnFD8FfZNfS/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 rounded-xl font-semibold hover:-translate-y-1"
                  >
                    <Download size={18} />
                    Download CV
                  </a>
                </MagneticButton>
              </div>
            </ScrollReveal>

            {/* Social Links */}
            <ScrollReveal delay={600}>
              <div className="flex gap-3 justify-center lg:justify-start pt-2">
                {[
                  { icon: Github, href: "https://github.com", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:malindarathnayaka811@gmail.com", label: "Email" },
                ].map((social, index) => (
                  <MagneticButton key={social.label} strength={0.3}>
                    <a
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex h-12 w-12 items-center justify-center rounded-xl text-foreground/80 transition-all duration-300 hover:-translate-y-1 hover:text-primary"
                      aria-label={social.label}
                    >
                      <social.icon size={24} className="transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  </MagneticButton>
                ))}
              </div>
            </ScrollReveal>

            {/* Stats row */}
            <ScrollReveal delay={700}>
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border/50 max-w-md mx-auto lg:mx-0">
                {[
                  { value: "3+", label: "Years Exp" },
                  { value: "10+", label: "Projects" },
                  { value: "15+", label: "Technologies" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <ScrollReveal delay={200} direction="right">
              <div className="relative">
                {/* Decorative rings */}
                <div className="absolute inset-0 -m-4 rounded-full border border-primary/20 animate-pulse" />
                <div className="absolute inset-0 -m-8 rounded-full border border-primary/10" />
                <div className="absolute inset-0 -m-12 rounded-full border border-primary/5" />

                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-violet-500/20 to-primary/30 rounded-full blur-2xl scale-110" />

                {/* Image container */}
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background shadow-2xl shadow-primary/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-violet-500/10 z-10" />
                  <Image src={profileImg} alt="Malinda Rathnayaka - AI/ML Engineer" fill className="object-cover" priority />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <ScrollReveal delay={1000}>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
