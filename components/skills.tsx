"use client"

import { ScrollReveal } from "./scroll-reveal"
import { GlowingCard } from "./glowing-card"
import { Brain, Code, Database, Cloud, Layout, Wrench, Sparkles } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      category: "Programming",
      icon: Code,
      skills: ["Python", "JavaScript", "Java", "C", "R"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "AI/ML Frameworks",
      icon: Brain,
      skills: ["TensorFlow", "PyTorch","OpenCV", "Scikit-learn", "LangChain", "HuggingFace"],
      color: "from-violet-500 to-purple-500",
    },
    {
      category: "Data & Tools",
      icon: Database,
      skills: ["Pandas", "NumPy", "Matplotlib", "Jupyter", "Google Colab"],
      color: "from-green-500 to-emerald-500",
    },
    {
      category: "AI Specializations",
      icon: Brain,
      skills: [
        "Computer Vision",
        "Natural Language Processing",
        "Time Series Forecasting",
        "Generative AI",
        "OCR & Document AI",
        "Recommendation Systems",
      ],
      color: "from-emerald-500 to-teal-500",
    },
    {
      category: "Mathematics for ML",
      icon: Brain,
      skills: ["Linear Algebra", "Probability & Statistics", "Optimization", "Loss Functions", "Gradient Descent"],
      color: "from-amber-500 to-yellow-500",
    },
    {
      category: "Research & Engineering Practices",
      icon: Wrench,
      skills: [
        "Model Evaluation",
        "A/B Testing",
        "Hyperparameter Tuning",
        "Ablation Studies",
        "Paper Reading & Reproduction",
      ],
      color: "from-slate-500 to-indigo-500",
    },
    {
      category: "Databases & Cloud",
      icon: Cloud,
      skills: ["SQL", "MongoDB", "Google Cloud", "AWS"],
      color: "from-orange-500 to-amber-500",
    },
    {
      category: "Web Frameworks",
      icon: Layout,
      skills: ["FastAPI", "Flask", "Streamlit", "ReactJS", "Next.js"],
      color: "from-pink-500 to-rose-500",
    },
    {
      category: "Tools & Platforms",
      icon: Wrench,
      skills: ["Git", "GitHub", "Docker", "GitHub Actions", "Figma"],
      color: "from-indigo-500 to-blue-500",
    }
  ]

  return (
    <section id="skills" className="py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase bg-gradient-to-r from-primary/15 via-violet-500/10 to-primary/15 text-primary border border-primary/30 shadow-[0_10px_30px_-15px_rgba(124,58,237,0.6)] backdrop-blur">
            Expertise
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-16">
            Technical{" "}
            <span className="bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent">Skills</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.category} delay={index * 100}>
              <GlowingCard className="h-full rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 group">
                <div className="p-6 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-br ${category.color} opacity-80 group-hover:opacity-100 transition-opacity`}
                    >
                      <category.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {category.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm rounded-lg bg-secondary/50 text-muted-foreground border border-transparent hover:border-primary/30 hover:bg-primary/10 hover:text-foreground transition-all duration-300 cursor-default"
                        style={{
                          animationDelay: `${skillIndex * 50}ms`,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </GlowingCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
