"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll(".cta-element"),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-32 md:py-44 lg:py-52"
      style={{ background: "#ffffff" }}
    >
      {/* Background noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundSize: "256px 256px",
        }}
      />

      <div className="relative container-main text-center">
        <div
          className="cta-element display-heading font-black text-black mb-10"
          style={{
            fontSize: "clamp(3.5rem, 9vw, 10rem)",
            fontFamily: "var(--font-space-grotesk)",
            lineHeight: 1.05,
            opacity: 0,
          }}
        >
          <div>PRONTO PARA</div>
          <div>
            ELEVAR SUA{" "}
            <span
              className="relative inline-block"
              style={{
                WebkitTextStroke: "3px #000",
                color: "transparent",
              }}
            >
              MARCA?
            </span>
          </div>
        </div>

        <p
          className="cta-element text-black/50 text-base max-w-[500px] mx-auto leading-[1.7] mb-14"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Vamos transformar sua ideia em uma marca que as pessoas não conseguem ignorar.
          Me chama, a primeira conversa é por minha conta.
        </p>

        <a
          href="http://wa.me/5541995824179"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-element inline-flex items-center gap-2 px-10 py-5 bg-black text-white font-bold rounded-full text-lg hover:bg-[#111] transition-all duration-200 magnetic group"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Iniciar projeto agora
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  );
}
