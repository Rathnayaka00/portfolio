"use client"

import { ScrollReveal } from "./scroll-reveal"
import { AnimatedCounter } from "./animated-counter"
import { GlowingCard } from "./glowing-card"
import { Sparkles } from "lucide-react"

export function About() {
  const stats = [
    { value: "5+", label: "Projects Shipped" },
    { value: "2024", label: "Tech-Triathlon Champions" },
    { value: "10+", label: "Skills Mastered" },
    { value: "11mo", label: "Industry Experience" },
  ]

  return (
    <section id="about" className="py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase bg-gradient-to-r from-primary/15 via-violet-500/10 to-primary/15 text-primary border border-primary/30 shadow-[0_10px_30px_-15px_rgba(124,58,237,0.6)] backdrop-blur">
            About Me
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-16">
            Passionate about{" "}
            <span className="bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent">
              AI Innovation
            </span>
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <ScrollReveal delay={100}>
              <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                I'm an innovative and driven technologist with a deep passion for machine learning. I thrive in dynamic,
                collaborative environments where I can transform complex challenges into creative, elegant solutions.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                Currently pursuing my{" "}
                <span className="text-foreground font-semibold">B.Sc. (Hons) in Artificial Intelligence</span> at the
                University of Moratuwa, I work as an{" "}
                <span className="text-foreground font-semibold">Associate AI Engineer at Zelora Pvt Ltd</span>, where
                I've been developing cutting edge AI solutions since 2025.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              I specialize in building end to end AI systems that combine advanced machine learning with scalable software engineering. My primary interest lies in computer vision exploring how deep neural networks can interpret, reason, and learn from visual data. Alongside vision, I work with NLP, RAG architectures, and multimodal models, with a strong focus on translating research driven ideas into impactful real world AI solutions.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={100 + index * 100} direction={index % 2 === 0 ? "left" : "right"}>
                <GlowingCard className="rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500">
                  <div className="p-6 md:p-8">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                      <AnimatedCounter value={stat.value} />
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </GlowingCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
