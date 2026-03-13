"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Hero() {
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [particlesReady, setParticlesReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setParticlesReady(true);
    });
  }, []);

  useEffect(() => {
    if (!titleRef.current || !contentRef.current) return;

    const letters = titleRef.current.querySelectorAll(".hero-letter");
    const tl = gsap.timeline({ delay: 2.6 });

    tl.fromTo(
      letters,
      { y: 120, opacity: 0, filter: "blur(20px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        stagger: 0.03,
        ease: "power4.out",
      }
    );

    tl.fromTo(
      contentRef.current.querySelectorAll(".hero-fade"),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      },
      "-=0.4"
    );
  }, []);

  const renderAnimatedText = (text: string, extraClass?: string) => {
    return text.split("").map((char, i) => (
      <span
        key={i}
        className={`hero-letter inline-block ${extraClass || ""}`}
        style={{ whiteSpace: char === " " ? "pre" : "normal" }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black pt-20">
      {/* Particles Background */}
      {particlesReady && (
        <div className="absolute inset-0 z-0">
          <Particles
            id="hero-particles"
            options={{
              background: { color: { value: "transparent" } },
              fpsLimit: 60,
              interactivity: {
                events: {
                  onHover: { enable: true, mode: "repulse" },
                  resize: { enable: true },
                },
                modes: {
                  repulse: { distance: 80, duration: 0.4 },
                },
              },
              particles: {
                color: { value: "#ffffff" },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.08,
                  width: 1,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: { default: "bounce" },
                  speed: 0.6,
                  straight: false,
                },
                number: {
                  density: { enable: true },
                  value: 60,
                },
                opacity: { value: 0.12 },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 2 } },
              },
              detectRetina: true,
            }}
            style={{ position: "absolute", width: "100%", height: "100%" }}
          />
        </div>
      )}


      <div className="relative z-10 container-main py-8 lg:py-10 w-full">
        {/* Eyebrow */}
        <div className="hero-fade inline-flex items-center gap-2.5 mb-6 lg:mb-8 px-4 py-2 rounded-full border border-[#2a2a2a] bg-[#111111]">
          <span className="w-1.5 h-1.5 rounded-full bg-white pulse-dot" />
          <span
            className="section-label text-[#666666]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Designer gráfico & Estrategista digital
          </span>
        </div>

        {/* Main Title */}
        <div
          ref={titleRef}
          className="mb-5 md:mb-7"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          <div
            className="display-heading font-black text-white overflow-hidden"
            style={{ fontSize: "clamp(3.5rem, 4.2vw, 4.5rem)" }}
          >
            <div className="overflow-hidden pb-2 md:hidden">
              {renderAnimatedText("DESIGN")}
            </div>
            <div className="overflow-hidden pb-2 md:hidden">
              {renderAnimatedText("QUE VENDE.")}
            </div>
            <div className="overflow-hidden pb-2 md:hidden">
              {renderAnimatedText("MARCA")}
            </div>
            <div className="overflow-hidden pb-2 md:hidden">
              {renderAnimatedText("QUE FICA.")}
            </div>
            <div className="overflow-hidden pb-2 hidden md:block">
              {renderAnimatedText("DESIGN QUE VENDE.")}
            </div>
            <div className="overflow-hidden pb-2 hidden md:block">
              {renderAnimatedText("MARCA QUE FICA.")}
            </div>
          </div>
        </div>

        {/* Content below title */}
        <div ref={contentRef} className="max-w-[520px]">
          <p
            className="hero-fade text-[#a3a3a3] text-sm leading-[1.75] mb-5 lg:mb-7"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Transformo negócios em marcas que as pessoas não conseguem ignorar.
            Identidade visual, web design e estratégia digital com foco em
            resultado.
          </p>

          <div className="hero-fade flex flex-wrap items-center gap-4 mb-6 lg:mb-8">
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#portfolio")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full text-sm hover:bg-[#e8e8e8] transition-all duration-200 magnetic"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Ver meus trabalhos →
            </a>
            <a
              href="http://wa.me/5541995824179"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-full text-sm hover:border-white/60 hover:bg-white/5 transition-all duration-200 magnetic"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Iniciar um projeto
            </a>
          </div>

          {/* Availability Badge */}
          <div className="hero-fade flex items-center gap-3">
            <div className="relative flex items-center justify-center w-3 h-3">
              <span className="absolute inline-flex w-full h-full rounded-full bg-white opacity-30 animate-ping" />
              <span className="relative w-2 h-2 rounded-full bg-white" />
            </div>
            <span
              className="text-sm text-[#888888]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Disponível para novos projetos
            </span>
          </div>
        </div>
      </div>

    </section>
  );
}
