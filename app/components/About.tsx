"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  "Design Gráfico",
  "Identidade Visual",
  "Branding",
  "UI/UX Design",
  "Estratégia Digital",
  "Social Media",
  "Figma",
  "Photoshop",
  "After Effects",
  "Web Design",
];

const experience = [
  {
    role: "Designer Gráfico Freelancer",
    company: "Autônomo",
    period: "Jul 2025 até Presente",
    current: true,
  },
  {
    role: "Designer Gráfico & Estrategista Digital",
    company: "First MKT WEB",
    period: "Out 2023 até Ago 2025",
    current: false,
  },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        sectionRef.current!.querySelectorAll(".about-header"),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      // Content paragraphs
      gsap.fromTo(
        sectionRef.current!.querySelectorAll(".about-text"),
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-content",
            start: "top 80%",
            once: true,
          },
        }
      );

      // Timeline items
      gsap.fromTo(
        sectionRef.current!.querySelectorAll(".timeline-item"),
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 80%",
            once: true,
          },
        }
      );

      // Skills tags
      if (skillsRef.current) {
        gsap.fromTo(
          skillsRef.current.querySelectorAll(".skill-tag-anim"),
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            stagger: 0.05,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: skillsRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // Visual element
      gsap.fromTo(
        ".about-visual",
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-visual",
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-py bg-black"
    >
      <div className="container-main">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <div className="about-header inline-flex items-center gap-2.5 mb-5 px-3.5 py-1.5 rounded-full border border-[#2a2a2a]" style={{ opacity: 0 }}>
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="section-label text-[#555555]" style={{ fontFamily: "var(--font-inter)" }}>
              Quem está por trás
            </span>
          </div>
          <h2
            className="about-header display-heading font-black text-white"
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
              fontFamily: "var(--font-space-grotesk)",
              opacity: 0,
              maxWidth: "720px",
            }}
          >
            SOU O DANIEL. FAÇO MARCAS QUE IMPORTAM.
          </h2>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-32 items-start">
          {/* Left: Text content */}
          <div className="about-content">
            <div className="about-paragraphs max-w-[540px]">
              <p
                className="about-text text-[#a3a3a3] leading-[1.8] text-base"
                style={{ fontFamily: "var(--font-inter)", opacity: 0 }}
              >
                Tenho mais de 2 anos criando marcas, interfaces e estratégias que conectam
                negócios com as pessoas certas. Acredito que design vai além da estética,
                é uma ferramenta poderosa de comunicação e negócios.
              </p>
              <p
                className="about-text text-[#a3a3a3] leading-[1.8] text-base"
                style={{ fontFamily: "var(--font-inter)", opacity: 0 }}
              >
                Cada projeto que entrego começa com uma pergunta: <em className="text-white not-italic font-medium">"O que essa marca precisa comunicar para vencer?"</em> A resposta se torna o projeto. Trabalho com clareza, comprometimento e obsessão por qualidade.
              </p>
            </div>

            {/* CTA */}
            <a
              className="about-text about-cta-link inline-flex items-center gap-2 text-white font-medium hover:text-[#888888] transition-colors duration-200 group"
              href="http://wa.me/5541995824179"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-inter)", opacity: 0 }}
            >
              Bora construir algo juntos →
            </a>

            {/* Skills */}
            <div ref={skillsRef} className="about-skills-wrapper">
              <h4
                className="about-skills-label section-label text-[#444444]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Habilidades
              </h4>
              <div className="about-skills-grid">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag skill-tag-anim px-4 py-2 rounded-full border border-[#1e1e1e] text-sm text-[#888888] cursor-default"
                    style={{ fontFamily: "var(--font-inter)", opacity: 0 }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h4
                className="about-experience-label section-label text-[#444444]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Experiência
              </h4>
              <div className="timeline-container relative">
                <div>
                  {experience.map((exp, i) => (
                    <div key={i} className="about-timeline-item timeline-item relative" style={{ opacity: 0 }}>
                      <div
                        className="about-timeline-period text-xs text-[#555555] tracking-wide"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {exp.period}
                        {exp.current && (
                          <span
                            className="ml-2 px-2 py-0.5 rounded-full text-black text-xs font-medium"
                            style={{ background: "#ffffff" }}
                          >
                            Atual
                          </span>
                        )}
                      </div>
                      <div
                        className="about-timeline-role text-white font-semibold text-base"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {exp.role}
                      </div>
                      <div
                        className="text-[#555555] text-sm"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {exp.company}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual element */}
          <div className="about-visual" style={{ opacity: 0 }}>
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #111111 0%, #0a0a0a 100%)",
                border: "1px solid #1e1e1e",
                aspectRatio: "4/5",
              }}
            >
              {/* Decorative elements */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-5"
                style={{ background: "#ffffff" }}
              />

              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Central content */}
              <div className="about-visual-card absolute inset-0">
                {/* Logo image */}
                <div className="relative flex items-center justify-center" style={{height: 'clamp(5rem, 8vw, 7rem)', transform: 'translate(10%, -10%)'}}>
                  <img
                    src="/Logo DANIEL.png"
                    alt="Daniel Yamaguchi Logo"
                    className="h-full w-auto object-contain"
                  />
                </div>

                <p
                  className="dy-role text-[#555555] text-center text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Curitiba, Brasil<br />
                  <span className="text-[#888888]">Designer Gráfico & Estrategista Digital</span>
                </p>

                {/* Stats */}
                <div className="dy-stats">
                  {[
                    { n: "2+", l: "Anos" },
                    { n: "30+", l: "Projetos" },
                    { n: "5★", l: "Avaliação" },
                  ].map((s) => (
                    <div key={s.l} className="text-center">
                      <div
                        className="dy-stat-number font-black text-white"
                        style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "1.75rem" }}
                      >
                        {s.n}
                      </div>
                      <div
                        className="text-[#555555] text-xs tracking-wider"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
