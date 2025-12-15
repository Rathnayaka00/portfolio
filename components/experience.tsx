"use client"

import { Briefcase, GraduationCap, Trophy, Sparkles } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { GlowingCard } from "./glowing-card"

export function Experience() {
  const workExperience = [
    {
      title: "Associate AI Engineer",
      company: "Zelora Pvt Ltd",
      period: "Aug 2025 – Present",
      current: true,
    },
    {
      title: "Intern AI Engineer",
      company: "Zelora Pvt Ltd",
      period: "Feb 2025 – Aug 2025",
    },
  ]

  const education = [
    {
      title: "B.Sc. (Hons) in Artificial Intelligence",
      institution: "University of Moratuwa",
      period: "2022 – Present",
      current: true,
    },
    {
      title: "G.C.E A/L: Physical Science Stream",
      institution: "Badulla Central College",
      period: "2020",
    },
  ]

  const achievements = [
    { title: "Champions of Triathlon", year: "2024", org: "Root Code" },
    { title: "Predicta 1.0 ML Competition", year: "2024", org: "IEEE Student Branch Sri Lanka" },
    { title: "Mora Xtreame 9.0", year: "2024", org: "University of Moratuwa" },
  ]

  return (
    <section id="experience" className="py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase bg-gradient-to-r from-primary/15 via-violet-500/10 to-primary/15 text-primary border border-primary/30 shadow-[0_10px_30px_-15px_rgba(124,58,237,0.6)] backdrop-blur">
            Journey
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-16">
            Experience &{" "}
            <span className="bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent">Education</span>
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <ScrollReveal delay={100}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Work Experience</h3>
              </div>
            </ScrollReveal>

            <div className="relative pl-8 border-l-2 border-primary/20 space-y-8">
              {workExperience.map((item, index) => (
                <ScrollReveal key={item.title} delay={200 + index * 100} direction="left">
                  <div className="relative">
                    <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-background border-4 border-primary" />
                    {item.current && (
                      <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-primary animate-ping opacity-30" />
                    )}
                    <GlowingCard className="rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500">
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-lg font-semibold text-primary">{item.title}</h4>
                          {item.current && (
                            <span className="px-2 py-0.5 text-[10px] rounded-full bg-primary/20 text-primary font-medium">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-muted-foreground">{item.company}</p>
                        <p className="text-sm text-muted-foreground/70 mt-1">{item.period}</p>
                      </div>
                    </GlowingCard>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <ScrollReveal delay={100}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
            </ScrollReveal>

            <div className="relative pl-8 border-l-2 border-primary/20 space-y-8">
              {education.map((item, index) => (
                <ScrollReveal key={item.title} delay={200 + index * 100} direction="right">
                  <div className="relative">
                    <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-background border-4 border-primary" />
                    {item.current && (
                      <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-primary animate-ping opacity-30" />
                    )}
                    <GlowingCard className="rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500">
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-lg font-semibold">{item.title}</h4>
                          {item.current && (
                            <span className="px-2 py-0.5 text-[10px] rounded-full bg-primary/20 text-primary font-medium">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-muted-foreground">{item.institution}</p>
                        <p className="text-sm text-muted-foreground/70 mt-1">{item.period}</p>
                      </div>
                    </GlowingCard>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <ScrollReveal delay={400}>
          <div className="mt-16 pt-16 border-t border-border/40">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-lg bg-primary/10">
                <Trophy className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Competitions & Achievements</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <ScrollReveal key={achievement.title} delay={500 + index * 100}>
                  <GlowingCard className="rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 group">
                    <div className="p-5">
                      <span className="text-xs font-semibold text-primary">{achievement.year}</span>
                      <h4 className="font-semibold mt-1 group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">{achievement.org}</p>
                    </div>
                  </GlowingCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
