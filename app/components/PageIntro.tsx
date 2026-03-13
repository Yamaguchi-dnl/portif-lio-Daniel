"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function PageIntro() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const logo = logoRef.current;
    const line = lineRef.current;
    const tagline = taglineRef.current;
    if (!overlay || !logo || !line || !tagline) return;

    const tl = gsap.timeline();

    // DY aparece com blur saindo
    tl.fromTo(
      logo,
      { opacity: 0, filter: "blur(12px)", scale: 0.92 },
      { opacity: 1, filter: "blur(0px)", scale: 1, duration: 0.7, ease: "power3.out" }
    );

    // Linha expande
    tl.fromTo(
      line,
      { scaleX: 0 },
      { scaleX: 1, duration: 0.45, ease: "power2.out" },
      "-=0.15"
    );

    // Tagline sobe
    tl.fromTo(
      tagline,
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" },
      "-=0.15"
    );

    // Segura 0.5s
    tl.to({}, { duration: 0.5 });

    // Logo some com blur
    tl.to([logo, line, tagline], {
      opacity: 0,
      filter: "blur(6px)",
      duration: 0.35,
      ease: "power2.in",
    });

    // Overlay varre pra cima
    tl.to(
      overlay,
      {
        yPercent: -100,
        duration: 0.85,
        ease: "power4.inOut",
      },
      "-=0.1"
    );

    tl.call(() => {
      if (overlay) overlay.style.display = "none";
    });
  }, []);

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        inset: 0,
        background: "#000000",
        zIndex: 9999999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.25rem",
        pointerEvents: "none",
      }}
    >
      {/* Logo */}
      <div
        ref={logoRef}
        style={{ opacity: 0 }}
      >
        <Image
          src="/Logo DANIEL.png"
          alt="Daniel Yamaguchi"
          width={180}
          height={80}
          style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
          priority
        />
      </div>

      {/* Linha */}
      <div
        ref={lineRef}
        style={{
          width: "2.5rem",
          height: "1px",
          background: "#333333",
          transformOrigin: "left center",
          transform: "scaleX(0)",
        }}
      />

      {/* Tagline */}
      <div
        ref={taglineRef}
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "0.625rem",
          fontWeight: 600,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#555555",
          opacity: 0,
        }}
      >
        Design que vende. Marca que fica.
      </div>
    </div>
  );
}
