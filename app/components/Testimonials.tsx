"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    text: "O site que foi criado para mim ficou incrível! Como proprietária do Pulso ASAP, estou muito satisfeita com o design moderno, responsivo e navegação super fluida. Recomendo demais!",
    name: "Rosa Azevedo",
    company: "Pulso ASAP",
    stars: 5,
  },
  {
    text: "O site que foi criado para a minha empresa impressiona desde o primeiro acesso. A combinação de animações suaves e layout clean torna a experiência única para nossos clientes.",
    name: "Carlos Mendes",
    company: "Cortz",
    stars: 5,
  },
  {
    text: "O site que foi criado para o Pulso ASAP é uma extensão perfeita do talento. Cada seção conta uma história e mantém o visitante engajado do início ao fim. Estou muito feliz!",
    name: "Mariana Costa",
    company: "Pulso ASAP",
    stars: 5,
  },
  {
    text: "Excelente trabalho no site que foi criado para a Cortz! Performance impecável, design inovador e uma usabilidade que facilita a conversão de visitantes em clientes.",
    name: "Bruno Oliveira",
    company: "Cortz",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="testimonial-stars flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 fill-white opacity-80" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div
      className="testimonial-card flex-shrink-0 w-[340px] md:w-[400px] rounded-2xl border mx-4"
      style={{
        background: "#111111",
        borderColor: "#1e1e1e",
      }}
    >
      <StarRating count={testimonial.stars} />
      <p
        className="testimonial-quote text-[#888888] text-sm"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="testimonial-author">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs text-black flex-shrink-0"
          style={{ background: "#ffffff", fontFamily: "var(--font-space-grotesk)" }}
        >
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div
            className="testimonial-author-name text-white text-sm"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {testimonial.name}
          </div>
          <div
            className="text-[#555555] text-xs"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll(".testimonials-header"),
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Duplicate for seamless loop
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      ref={sectionRef}
      className="section-py overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      <div className="container-main mb-16">
        <div className="testimonials-header inline-flex items-center gap-2.5 mb-5 px-3.5 py-1.5 rounded-full border border-[#2a2a2a]" style={{ opacity: 0 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="section-label text-[#555555]" style={{ fontFamily: "var(--font-inter)" }}>
            O que dizem sobre mim
          </span>
        </div>
        <h2
          className="testimonials-header display-heading font-black text-white"
          style={{
            fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
            fontFamily: "var(--font-space-grotesk)",
            opacity: 0,
          }}
        >
          CLIENTES QUE CONFIARAM
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #0a0a0a, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #0a0a0a, transparent)" }}
        />

        <div className="overflow-hidden">
          <div className="marquee-track">
            {allTestimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
