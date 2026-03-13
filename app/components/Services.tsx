"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Identidade Visual & UI Design",
    description:
      "Criação de identidades visuais completas que comunicam o que sua marca representa. Do logotipo ao manual de identidade visual, passando por interfaces que convertem.",
    tags: ["Branding", "Logotipo", "UI/UX", "Figma"],
    badge: null,
  },
  {
    number: "02",
    title: "Estratégia Digital",
    description:
      "Planejamento e execução de estratégias digitais para posicionar sua marca onde seu cliente está. Mais que presença, impacto mensurável.",
    tags: ["Marketing", "Posicionamento", "Conteúdo"],
    badge: null,
  },
  {
    number: "03",
    title: "Social Media Design",
    description:
      "Design de conteúdo para redes sociais que gera engajamento real. Artes, stories e reels que fazem as pessoas pararem e prestarem atenção.",
    tags: ["Instagram", "Conteúdo Visual", "Engajamento"],
    badge: null,
  },
  {
    number: "04",
    title: "Web Design",
    description:
      "Criação de sites modernos e funcionais que representam sua marca com profissionalismo. Design responsivo, foco em experiência do usuário e conversão.",
    tags: ["Landing Page", "Responsivo", "Figma", "Next.js"],
    badge: null,
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Left panel entrance
      gsap.fromTo(
        sectionRef.current!.querySelectorAll(".services-left-panel > *"),
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
          },
        }
      );

      // Cards entrance
      gsap.fromTo(
        sectionRef.current!.querySelectorAll(".service-sticky-card"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current!.querySelector(".service-cards-list"),
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
      id="services"
      ref={sectionRef}
      style={{ background: "#ffffff", padding: "24px 0" }}
    >
      {/* Inner container */}
      <div
        style={{
          width: "98%",
          maxWidth: "1216px",
          margin: "0 auto",
          background: "#ffffff",
          border: "1px solid #e0e0e0",
          borderRadius: "16px",
        }}
      >
        {/* Two-column row */}
        <div className="services-row">
          {/* ── Left panel ── */}
          <div
            className="services-left-panel"
            style={{
              flex: "1 0 0px",
              position: "sticky",
              top: "80px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              alignSelf: "flex-start",
              zIndex: 10,
            }}
          >
            {/* Tag */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                borderRadius: "100px",
                padding: "8px 16px",
                width: "fit-content",
                opacity: 0,
                border: "1px solid #000000",
                background: "transparent",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span
                style={{
                  fontSize: "13px",
                  color: "#000000",
                  fontFamily: "var(--font-inter)",
                  fontWeight: 500,
                }}
              >
                O que eu faço
              </span>
            </div>

            {/* Title */}
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.2,
                fontFamily: "var(--font-space-grotesk)",
                color: "#000000",
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                opacity: 0,
              }}
            >
              Serviços que{" "}
              <span
                style={{
                  WebkitTextStroke: "0px #000000",
                  color: "#000000",
                }}
              >
                transformam
              </span>
            </h2>

            {/* Subtitle */}

            {/* Subtitle */}
            <div
              style={{
                fontSize: "15px",
                lineHeight: 1.6,
                fontFamily: "var(--font-inter)",
                opacity: 0,
              }}
            >
              <p
                style={{
                  color: "#000000",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                }}
              >
                Design não é só estética.
              </p>
              <p style={{ color: "#888888", fontWeight: 400 }}>
                Cada projeto é uma solução visual estratégica pensada para
                gerar impacto real no seu negócio.
              </p>
            </div>
          </div>

          {/* ── Right panel ── */}
          <div
            style={{
              flex: "1 0 0px",
              display: "flex",
              flexDirection: "row",
              gap: "32px",
            }}
          >
            {/* Timeline track */}
            <div
              className="services-timeline-track"
              style={{
                width: "32px",
                flexShrink: 0,
                position: "relative",
              }}
            >
              {/* Background line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "2px",
                  background: "#e0e0e0",
                }}
              />
              {/* Progress bar */}
              <div
                style={{
                  position: "sticky",
                  top: "196px",
                  width: "3px",
                  height: "40vh",
                  background: "#000000",
                  borderRadius: "100px 100px 0 0",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              {/* Cursor pill */}
              <div
                style={{
                  position: "sticky",
                  top: "calc(196px + 40vh)",
                  width: "20px",
                  height: "40px",
                  background: "#ffffff",
                  border: "2px solid #000000",
                  borderRadius: "100px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            </div>
            {/* Cards list */}
            <div
              className="service-cards-list"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "52px",
                flex: 1,
                minWidth: 0,
              }}
            >
              {services.map((service, i) => (
                <div
                  key={service.number}
                  className="service-sticky-card"
                  style={{
                    position: "sticky",
                    /* stop near top of viewport so first card locks in quickly */
                    top: "80px",
                    zIndex: i + 1,
                    opacity: 0,
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                  }}
                >
                  {/* Image placeholder */}
                  <div
                    style={{
                      width: "100%",
                      height: "181px",
                      background: "#f5f5f5",
                      borderRadius: "8px 8px 0 0",
                      border: "1px solid #e0e0e0",
                      borderBottom: "none",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    {/* Grid pattern */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                          "linear-gradient(#e0e0e0 1px, transparent 1px), linear-gradient(90deg, #e0e0e0 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                        opacity: 0.3,
                      }}
                    />
                    {/* Large number */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-space-grotesk)",
                          fontSize: "6rem",
                          fontWeight: 900,
                          color: "#000000",
                          opacity: 0.06,
                          lineHeight: 1,
                          userSelect: "none",
                        }}
                      >
                        {service.number}
                      </span>
                    </div>
                  </div>

                  {/* Content box */}
                  <div
                    style={{
                      background: "#ffffff",
                      borderRadius: "0 0 8px 8px",
                      border: "1px solid #e0e0e0",
                      borderTop: "none",
                      padding: "20px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                    }}
                  >
                    {/* Number badge + optional badge */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          background: "#ffffff",
                          borderRadius: "100px",
                          border: "2px solid rgba(255,255,255,0.1)",
                          padding: "0 12px",
                          height: "32px",
                          display: "inline-flex",
                          alignItems: "center",
                          color: "#0a0a0a",
                          fontSize: "12px",
                          fontWeight: 700,
                          fontFamily: "var(--font-inter)",
                        }}
                      >
                        {service.number}
                      </div>
                      {service.badge && (
                        <div
                          style={{
                            background: "#f0f0f0",
                            borderRadius: "1000px",
                            padding: "4px 12px",
                            fontSize: "11px",
                            color: "#555555",
                            fontFamily: "var(--font-inter)",
                          }}
                        >
                          {service.badge}
                        </div>
                      )}
                    </div>

                    {/* Title + description */}
                    <div>
                      <h4
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "#000000",
                          textTransform: "uppercase",
                          letterSpacing: "0.02em",
                          fontFamily: "var(--font-space-grotesk)",
                          marginBottom: "8px",
                        }}
                      >
                        {service.title}
                      </h4>
                      <p
                        style={{
                          fontSize: "14px",
                          lineHeight: "21px",
                          color: "#333333",
                          fontFamily: "var(--font-inter)",
                        }}
                      >
                        {service.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="skill-tag"
                          style={{
                            background: "#f5f5f5",
                            border: "1px solid #e0e0e0",
                            borderRadius: "100px",
                            padding: "4px 12px",
                            fontSize: "11px",
                            color: "#333333",
                            fontFamily: "var(--font-inter)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
