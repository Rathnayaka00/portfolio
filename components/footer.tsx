"use client"

import { Mail, ExternalLink, Github, Linkedin, Heart } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { MagneticButton } from "./magnetic-button"

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-16 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <ScrollReveal delay={0}>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-primary via-violet-400 to-primary bg-clip-text text-transparent mb-3">
                About Me
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI/ML Engineer crafting intelligent solutions that make a difference.
              </p>
            </div>
          </ScrollReveal>

          {/* Links */}
          <ScrollReveal delay={100}>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Navigation</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-primary transition-colors duration-300 inline-flex items-center gap-1 group"
                    >
                      <span className="w-0 h-px bg-primary group-hover:w-3 transition-all duration-300" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Social */}
          <ScrollReveal delay={200}>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: "https://github.com", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:malindarathnayaka811@gmail.com", label: "Email" },
                ].map((social) => (
                  <MagneticButton key={social.label} strength={0.3}>
                    <a
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="p-3 rounded-lg bg-card/50 hover:bg-primary/10 border border-border/50 hover:border-primary/30 transition-all duration-300 inline-flex group"
                      aria-label={social.label}
                    >
                      <social.icon size={18} className="group-hover:text-primary transition-colors" />
                    </a>
                  </MagneticButton>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={300}>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Let's Talk</h4>
              <MagneticButton strength={0.2}>
                <a
                  href="mailto:malindarathnayaka811@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary rounded-lg transition-all duration-300 text-sm font-medium group"
                >
                  <Mail size={16} />
                  Get in Touch
                  <ExternalLink
                    size={14}
                    className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                  />
                </a>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom */}
        <ScrollReveal delay={400}>
  <div className="border-t border-border/40 pt-8 flex justify-center items-center text-sm text-muted-foreground text-center">
    <p>&copy; 2025 Malinda Rathnayaka. All rights reserved.</p>
  </div>
</ScrollReveal>

      </div>
    </footer>
  )
}
