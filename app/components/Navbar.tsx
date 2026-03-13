"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (!navRef.current) return;
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(0,0,0,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid #1e1e1e" : "1px solid transparent",
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <div className="container-main py-5 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center text-white"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          {/* logo image from public folder */}
          <img
            src="/Logo DANIEL.png"
            alt="Daniel Yamaguchi Logo"
            className="h-8 w-auto"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { label: "Trabalhos", href: "#portfolio" },
            { label: "Serviços", href: "#services" },
            { label: "Sobre", href: "#about" },
            { label: "Contato", href: "#contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm text-[#888888] hover:text-white transition-colors duration-200 font-medium tracking-wide"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="http://wa.me/5541995824179"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white text-white text-sm font-medium transition-all duration-200 hover:bg-white hover:text-black magnetic"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Iniciar Projeto
        </a>

        {/* Mobile Menu Button */}
        <MobileMenu />
      </div>
    </nav>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // prevent page scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // animate menu slide in/out
  useEffect(() => {
    if (menuRef.current) {
      gsap.to(menuRef.current, {
        x: open ? 0 : '100%',
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="text-white p-2 mr-4 flex flex-col gap-1.5"
        aria-label="Menu"
      >
        <span
          className="block w-6 h-0.5 bg-white transition-all duration-300"
          style={{ transform: open ? "rotate(45deg) translate(4px, 4px)" : "none" }}
        />
        <span
          className="block w-6 h-0.5 bg-white transition-all duration-300"
          style={{ opacity: open ? 0 : 1 }}
        />
        <span
          className="block w-6 h-0.5 bg-white transition-all duration-300"
          style={{ transform: open ? "rotate(-45deg) translate(4px, -4px)" : "none" }}
        />
      </button>

      {/* Slide-in drawer */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-96 bg-gradient-to-b from-black/95 to-black/80 backdrop-blur-xl z-60 transform translate-x-full flex flex-col justify-start items-center gap-2 pt-16"
        style={{ transform: 'translateX(100%)' }}
      >
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-12 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white text-xl hover:bg-white/30 transition-colors"
          aria-label="Close menu"
        >
          ✕
        </button>

        {[
          { label: "Trabalhos", href: "#portfolio" },
          { label: "Serviços", href: "#services" },
          { label: "Sobre", href: "#about" },
          { label: "Contato", href: "#contact" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-xl font-bold text-white hover:text-[#888888] transition-colors"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
              const el = document.querySelector(link.href);
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="http://wa.me/5541995824179"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-8 py-3 rounded-full border border-white text-white font-medium hover:bg-white hover:text-black transition-all"
        >
          Iniciar Projeto
        </a>
      </div>

      {/* Overlay to close */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-50"
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  );
}
