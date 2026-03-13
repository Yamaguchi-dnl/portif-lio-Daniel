"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    name: "CORTZ",
    category: "SaaS Landing Page + Conversão",
    href: "https://cortz-saas.vercel.app/",
    featured: false,
    image: "/CORTZ.png",
    gradient: "linear-gradient(135deg, #0a1428 0%, #1a1f4e 40%, #0f1a3e 70%, #050a1a 100%)",
    accentColor: "#6366f1",
    description: "Landing page SaaS de alta conversão com design moderno, animações fluidas e foco em vendas.",
  },
  {
    id: 2,
    name: "Aquila Fund FCR",
    category: "Web Design + UX",
    href: "https://aquila-flame.vercel.app/",
    featured: true,
    image: "/AQUILA FOUND.png",
    gradient: "linear-gradient(135deg, #0d0d1a 0%, #1a1a3e 30%, #0f1f3a 60%, #0a0a15 100%)",
    accentColor: "#4169e1",
    description: "Site estruturado com foco em conversão e experiência do usuário para fundo de investimento português.",
  },
  {
    id: 3,
    name: "ASAP",
    category: "UI/UX Design",
    href: "https://asap-bay.vercel.app/",
    featured: false,
    image: "/ASAP.png",
    gradient: "linear-gradient(135deg, #000a1a 0%, #001a3d 40%, #000d2a 70%, #000510 100%)",
    accentColor: "#00d4ff",
    description: "Interface moderna e minimalista focada em conversão.",
  },
  {
    id: 4,
    name: "IAP Barreirinha",
    category: "Landing Page",
    href: "https://comunicacao.iapbarreirinha.com.br/",
    featured: false,
    image: "/iap-barreirinha.png",
    gradient: "linear-gradient(135deg, #0a1a28 0%, #1a3d4e 40%, #0d2a4e 70%, #051028 100%)",
    accentColor: "#3b82f6",
    description: "Landing page SaaS otimizada para vendas com fluxos de conversão, pricing inteligente e integrações modernas.",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: (index % 3) * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`portfolio-card group relative overflow-hidden rounded-2xl cursor-pointer ${
        project.featured ? "col-span-full" : ""
      }`}
      style={{
        height: project.featured ? "clamp(340px, 48vh, 560px)" : "clamp(280px, 38vh, 400px)",
        opacity: 0,
      }}
      onClick={() => window.open(project.href, "_blank")}
    >
      {/* Background: image or gradient */}
      {project.image ? (
        <img
          src={project.image}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
          style={{ background: project.gradient }}
        />
      )}

      {/* Dark overlay so text stays readable */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.15) 100%)" }}
      />

      {/* Decorative accent (only for gradient cards) */}
      {!project.image && (
        <>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at 30% 50%, ${project.accentColor}15 0%, transparent 60%)` }}
          />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(${project.accentColor}20 1px, transparent 1px), linear-gradient(90deg, ${project.accentColor}20 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </>
      )}

      {/* Bottom Info (always visible) */}
      <div className="portfolio-text-overlay absolute bottom-0 left-0 right-0 z-10">
        <span
          className="portfolio-overlay-category inline-block px-3 py-1 rounded-full text-xs font-medium"
          style={{
            background: `${project.accentColor}20`,
            color: project.accentColor,
            fontFamily: "var(--font-inter)",
          }}
        >
          {project.category}
        </span>
        <h3
          className="text-white font-black text-2xl"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          {project.name}
        </h3>
      </div>

      {/* Hover Overlay */}
      <div
        className="portfolio-card-overlay absolute inset-0 flex flex-col items-center justify-center z-20"
        style={{
          background: "rgba(0,0,0,0.85)",
          backdropFilter: "blur(4px)",
          padding: "2.5rem",
        }}
      >
        <div className="text-center flex flex-col items-center gap-5">
          <p
            className="text-[#888888] text-sm max-w-xs leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {project.description}
          </p>
          <h3
            className="text-white font-black text-3xl"
            style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.02em" }}
          >
            {project.name}
          </h3>
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black font-semibold rounded-full text-sm hover:bg-[#e8e8e8] transition-colors duration-200"
            style={{ fontFamily: "var(--font-inter)", padding: "0.75rem 1.5rem" }}
            onClick={(e) => e.stopPropagation()}
          >
            Ver projeto →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll(".portfolio-header"),
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

  const featuredProject = projects.find((p) => p.featured)!;
  const gridProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="section-py bg-black"
    >
      <div className="container-main">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <div className="portfolio-header inline-flex items-center gap-2.5 mb-5 px-3.5 py-1.5 rounded-full border border-[#2a2a2a]" style={{ opacity: 0 }}>
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="section-label text-[#555555]" style={{ fontFamily: "var(--font-inter)" }}>
              Trabalhos Selecionados
            </span>
          </div>
          <h2
            className="portfolio-header display-heading font-black text-white mb-4"
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
              fontFamily: "var(--font-space-grotesk)",
              opacity: 0,
            }}
          >
            O QUE EU CONSTRUO
          </h2>
          <p
            className="portfolio-header text-[#888888] max-w-[520px] text-base leading-relaxed"
            style={{ fontFamily: "var(--font-inter)", opacity: 0 }}
          >
            Cada projeto é uma solução visual estratégica pensada para gerar impacto real.
          </p>
        </div>

        {/* Featured project */}
        <div className="mb-4 md:mb-5">
          <ProjectCard project={featuredProject} index={0} />
        </div>

        {/* Grid projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {gridProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
