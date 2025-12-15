"use client"

import { Github, ArrowUpRight, Sparkles } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { GlowingCard } from "./glowing-card"
import { MagneticButton } from "./magnetic-button"

export function Projects() {
  const projects = [
    {
      title: "Intelligent Human Capital Management System",
      description: "Comprehensive web app with AI chatbot, bill scanning, CV filtering, and employee leave prediction",
      tech: ["ReactJS", "FastAPI", "MongoDB", "Google Cloud", "Figma"],
      role: "Full Stack Developer",
      links: {
        github: "https://github.com/Rathnayaka00/intelligent-hcm-api-project",
        external: "https://www.linkedin.com/posts/udarabandara224_ihcms-ai-hrtech-ugcPost-7221975418155716608-1_B0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETB6SIBtWy7QSUbiOOiD9yhIrQidTyv2q0",
      },
      featured: true,
    },
    {
      title: "Sentiment Analysis Web Application",
      description: "NLP-powered web app providing real-time sentiment classification with interactive user interface",
      tech: ["Python", "Flask", "Streamlit", "NLP"],
      role: "Full Stack Developer",
      links: { github: "https://github.com/Rathnayaka00/sentiment-analysis.git", 
        external: "https://www.linkedin.com/posts/malinda-rathnayaka_sentimentanalysis-machinelearning-nlp-activity-7268735037078953984-yvoK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETB6SIBtWy7QSUbiOOiD9yhIrQidTyv2q0" },
    },
    {
      title: "YOLOv8 Object Detection & Multi-Object Tracking System",
      description:
        "Real-time video pipeline with YOLOv8 + Deep SORT to detect and persistently track people, emitting annotated video with IDs and colored boxes.",
      tech: ["Python", "OpenCV", "NumPy", "YOLOv8", "Deep SORT", "ReID (MARS)", "PyTorch", "Git"],
      role: "Computer Vision Engineer",
      links: { github: "https://github.com/Rathnayaka00/object-detection.git", external: "https://drive.google.com/file/d/1eWmGS93iMhlHncDVa548s-r_Jz_cIGO3/view?usp=sharing" },
    },
    {
      title: "Store Sales Time Series Forecasting System",
      description:
        "End-to-end forecasting stack using a Temporal Convolutional Network (TCN), FastAPI backend, and Streamlit UI to predict 16-day sales across stores.",
      tech: ["Python", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Plotly Express", "FastAPI", "Streamlit", "Git"],
      role: "Machine Learning Engineer",
      links: { github: "https://github.com/Rathnayaka00/sales-prediction-timeseries.git", external: "https://drive.google.com/file/d/1_mhkFJDGGgVqZ7bNaSG_8Oaqf46qghMG/view?usp=sharing" },
    },
    {
      title: "Hand Gesture-Based Virtual Keyboard",
      description:
        "Interactive virtual keyboard controlled entirely by hand gestures, enabling typing and key actions through real-time hand tracking and gesture recognition.",
      tech: ["Python", "OpenCV", "cvzone", "Pynput", "Computer Vision", "HCI"],
      role: "Computer Vision Engineer",
      links: {
        github: "https://github.com/Rathnayaka00/Virtual-Keyboard.git",
        external: "https://www.linkedin.com/posts/malinda-rathnayaka_handgesturerecognition-computervision-opencv-activity-7262503273318764545-27XO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETB6SIBtWy7QSUbiOOiD9yhIrQidTyv2q0",
      },
    },
    {
      title: "AI Health Assistant for Disease Prediction",
      description:
        "AI-powered health assistant that predicts risks for diseases like Diabetes, Heart Disease, and Parkinson’s, and provides personalized medical recommendations via an intuitive interface.",
      tech: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "NumPy", "Streamlit"],
      role: "Machine Learning Engineer",
      links: {
        github: "https://github.com/Rathnayaka00/multiple-disease-prediction-system.git",
        external: "https://www.linkedin.com/posts/malinda-rathnayaka_machinelearning-ai-healthcaretech-activity-7261479284358172672-_fnI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETB6SIBtWy7QSUbiOOiD9yhIrQidTyv2q0",
      },
    },
    {
      title: "Semantic & Instance Segmentation App (Mask R-CNN)",
      description:
        "Mask R-CNN (COCO) with FastAPI + Streamlit frontend for pixel-accurate semantic and instance segmentation on images and frames.",
      tech: ["FastAPI", "Mask R-CNN", "COCO Dataset", "OpenCV DNN", "NumPy", "TensorFlow", "Streamlit", "Git"],
      role: "Computer Vision Engineer",
      links: { github: "https://github.com/Rathnayaka00/semantic-segmentation.git", external: "https://drive.google.com/file/d/1rlooGzEdIAStW8hCe1x4A-maluinPruI/view?usp=sharing" },
    },
    {
      title: "Conversational RAG Chatbots",
      description:
        "Context-aware intelligent chatbots leveraging OpenAI GPT and HuggingFace models with RAG capabilities",
      tech: ["Python", "LangChain", "OpenAI API", "HuggingFace", "Chroma"],
      role: "Prompt Engineer & Developer",
      links: { github: "https://github.com/Rathnayaka00/RAG-chatbots"},
      featured: true,
    },
    {
      title: "Iris Flower Prediction App",
      description: "Interactive machine learning application predicting iris species with multiple trained models",
      tech: ["Python", "Streamlit", "Scikit-learn", "ML"],
      role: "Model Developer",
      links: { github: "https://github.com/Rathnayaka00/Iris"},
    },
    {
      title: "Next Word Prediction Model",
      description: "Deep learning LSTM model predicting next word in sequences with interactive deployment",
      tech: ["Python", "TensorFlow", "Keras", "NumPy"],
      role: "Model Developer",
      links: { github: "https://github.com/Rathnayaka00/next-word-prediction.git"},
    }
  ]

  return (
    <section id="projects" className="py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase bg-gradient-to-r from-primary/15 via-violet-500/10 to-primary/15 text-primary border border-primary/30 shadow-[0_10px_30px_-15px_rgba(124,58,237,0.6)] backdrop-blur">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-16">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent">Projects</span>
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 150} direction={index % 2 === 0 ? "left" : "right"}>
              <GlowingCard className="h-full rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 group">
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {project.role}
                    </span>
                    <div className="flex gap-1.5">
                      {project.links.github && (
                        <MagneticButton strength={0.5}>
                          <a
                            href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                            className="p-2 rounded-lg text-muted-foreground hover:text-primary transition-colors"
                            aria-label="View code"
                          >
                            <Github size={18} />
                          </a>
                        </MagneticButton>
                      )}
                      {project.links.external && (
                        <MagneticButton strength={0.5}>
                          <a
                            href={project.links.external}
                          target="_blank"
                          rel="noopener noreferrer"
                            className="p-2 rounded-lg text-muted-foreground hover:text-primary transition-colors"
                            aria-label="View live demo"
                          >
                            <ArrowUpRight size={18} />
                          </a>
                        </MagneticButton>
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-secondary/50 text-muted-foreground border border-border/50"
                      >
                        {tech}
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
