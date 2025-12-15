"use client"

import { Mail, Phone, MapPin, ArrowRight, Send } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { GlowingCard } from "./glowing-card"
import { MagneticButton } from "./magnetic-button"

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "malindarathnayaka811@gmail.com",
      href: "mailto:malindarathnayaka811@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+94 77 130 4811",
      href: "tel:+94771304811",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Colombo,Sri Lanka",
      href: null,
    },
  ]

  return (
    <section id="contact" className="py-32 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Contact</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
              Let's{" "}
              <span className="bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-lg mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {contactMethods.map((method, index) => (
            <ScrollReveal key={method.label} delay={100 + index * 100}>
              <GlowingCard className="rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 group h-full">
                {method.href ? (
                  <a href={method.href} className="block p-6">
                    <method.icon className="text-primary mb-4 group-hover:scale-110 transition-transform" size={28} />
                    <h3 className="font-semibold mb-2">{method.label}</h3>
                    <p className="text-sm text-muted-foreground break-all group-hover:text-foreground transition-colors">
                      {method.value}
                    </p>
                  </a>
                ) : (
                  <div className="p-6">
                    <method.icon className="text-primary mb-4" size={28} />
                    <h3 className="font-semibold mb-2">{method.label}</h3>
                    <p className="text-sm text-muted-foreground">{method.value}</p>
                  </div>
                )}
              </GlowingCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <GlowingCard className="rounded-2xl bg-gradient-to-br from-card via-card to-primary/5 border border-border/50 overflow-hidden">
            <div className="p-8 md:p-12 text-center relative">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Send className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to collaborate?</h3>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Whether you have a project idea, a question, or just want to say hello, my inbox is always open!
                </p>
                <MagneticButton strength={0.2}>
                  <a
                    href="mailto:malindarathnayaka811@gmail.com"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    Send Email
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </MagneticButton>
              </div>
            </div>
          </GlowingCard>
        </ScrollReveal>
      </div>
    </section>
  )
}
