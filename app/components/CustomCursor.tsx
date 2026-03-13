"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Só ativa em dispositivos com mouse (não toque)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Centraliza os cursores no ponto do mouse via GSAP
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

    // quickTo para performance máxima
    const dotX = gsap.quickTo(dot, "x", { duration: 0 });
    const dotY = gsap.quickTo(dot, "y", { duration: 0 });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3.out" });

    const onMouseMove = (e: MouseEvent) => {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    // Clique
    const onMouseDown = () => {
      gsap.to(ring, { scale: 0.75, duration: 0.12, ease: "power2.out" });
      gsap.to(dot, { scale: 0.6, duration: 0.1 });
    };
    const onMouseUp = () => {
      gsap.to(ring, { scale: 1, duration: 0.25, ease: "elastic.out(1, 0.5)" });
      gsap.to(dot, { scale: 1, duration: 0.2 });
    };

    // Sai da janela
    const onMouseLeave = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
    };
    const onMouseEnter = () => {
      gsap.to([dot, ring], { opacity: 1, duration: 0.2 });
    };

    // Hover em elementos interativos (delegação)
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest("a, button, [data-cursor]")) {
        gsap.to(ring, { scale: 2.2, duration: 0.3, ease: "power2.out" });
        gsap.to(dot, { scale: 0, duration: 0.2 });
      }
    };
    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest("a, button, [data-cursor]")) {
        gsap.to(ring, { scale: 1, duration: 0.35, ease: "power2.out" });
        gsap.to(dot, { scale: 1, duration: 0.25 });
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return (
    <>
      {/* Ponto central — segue o mouse instantaneamente */}
      <div
        ref={dotRef}
        className="custom-cursor"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "8px",
          height: "8px",
          background: "#ffffff",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 999999,
          mixBlendMode: "difference",
        }}
      />

      {/* Bola sólida — segue com delay suave */}
      <div
        ref={ringRef}
        className="custom-cursor"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "24px",
          height: "24px",
          background: "#ffffff",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 999998,
          mixBlendMode: "difference",
        }}
      />
    </>
  );
}
