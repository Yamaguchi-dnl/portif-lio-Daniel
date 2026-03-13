"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: 2, suffix: "+", label: "anos", sublabel: "de experiência no mercado" },
  { number: 30, suffix: "+", label: "projetos", sublabel: "entregues" },
  { number: 100, suffix: "%", label: "dedicação", sublabel: "em cada projeto" },
  { number: 5, suffix: "★", label: "avaliação", sublabel: "média dos clientes" },
];

function StatItem({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const numRef = useRef<HTMLSpanElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!numRef.current || !itemRef.current) return;

    const ctx = gsap.context(() => {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: stat.number,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          if (numRef.current) {
            numRef.current.textContent = Math.round(obj.val).toString();
          }
        },
      });

      gsap.fromTo(
        itemRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: itemRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, itemRef);

    return () => ctx.revert();
  }, [stat.number, index]);

  return (
    <div
      ref={itemRef}
      className="stat-item relative"
      style={{ opacity: 0 }}
    >
      <div
        className="stat-number font-black text-white"
        style={{
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          fontFamily: "var(--font-space-grotesk)",
          lineHeight: 1,
        }}
      >
        <span ref={numRef}>0</span>
        <span>{stat.suffix}</span>
      </div>
      <div className="stat-label" style={{ fontFamily: "var(--font-inter)", color: "#555555" }}>
        <span style={{ color: "#888888", fontWeight: 500, display: "block" }}>{stat.label}</span>
        {stat.sublabel}
      </div>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section
      className="border-t border-b"
      style={{
        background: "#0a0a0a",
        borderColor: "#1e1e1e",
      }}
    >
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`relative ${
                i % 2 === 0 ? "border-r border-[#1e1e1e]" : ""
              } ${
                i < 2 ? "border-b md:border-b-0 border-[#1e1e1e]" : ""
              } ${
                i === 1 ? "md:border-r border-[#1e1e1e]" : ""
              } ${
                i === 2 ? "md:border-r border-[#1e1e1e]" : ""
              }`}
            >
              <StatItem stat={stat} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
