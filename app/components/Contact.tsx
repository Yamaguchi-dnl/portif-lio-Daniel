"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projectTypes = [
  "Identidade Visual",
  "Web Design",
  "Social Media",
  "Direção de Arte",
  "Outro",
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll(".contact-header"),
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

      gsap.fromTo(
        ".contact-form-field",
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".contact-info-item",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-info",
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Olá Daniel! Me chamo ${formData.name}.\n\nTipo de projeto: ${formData.type}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.open(`http://wa.me/5541995824179?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-[#111111] border border-[#222222] rounded-xl px-5 py-4 text-white text-sm form-field transition-all duration-200 focus:border-white/40 focus:outline-none focus:ring-0 placeholder:text-[#444444]";
  const labelClass = "block section-label text-[#555555] mb-2.5";

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-py bg-black"
    >
      <div className="container-main">
        {/* Header */}
        <div className="mb-16">
          <div className="contact-header inline-flex items-center gap-2.5 mb-5 px-3.5 py-1.5 rounded-full border border-[#2a2a2a]" style={{ opacity: 0 }}>
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="section-label text-[#555555]" style={{ fontFamily: "var(--font-inter)" }}>
              Bora trabalhar juntos
            </span>
          </div>
          <h2
            className="contact-header display-heading font-black text-white mb-4"
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
              fontFamily: "var(--font-space-grotesk)",
              opacity: 0,
            }}
          >
            VAMOS CRIAR ALGO INCRÍVEL.
          </h2>
          <p
            className="contact-header text-[#888888] text-base mt-3 leading-relaxed"
            style={{ fontFamily: "var(--font-inter)", opacity: 0 }}
          >
            Me conte sobre seu projeto. Respondo em até 24h.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-28">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-[#2a2a2a]"
                  style={{ background: "#111111" }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3
                  className="text-white font-black text-2xl mb-2"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Mensagem enviada!
                </h3>
                <p className="text-[#888888]" style={{ fontFamily: "var(--font-inter)" }}>
                  Você foi redirecionado para o WhatsApp. Aguarde meu retorno em até 24h.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form-field" style={{ opacity: 0 }}>
                  <label
                    className={labelClass}
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    placeholder="Como posso te chamar?"
                    className={inputClass}
                    style={{ fontFamily: "var(--font-inter)" }}
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="contact-form-field" style={{ opacity: 0 }}>
                  <label
                    className={labelClass}
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className={inputClass}
                    style={{ fontFamily: "var(--font-inter)" }}
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="contact-form-field" style={{ opacity: 0 }}>
                  <label
                    className={labelClass}
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Tipo de Projeto
                  </label>
                  <select
                    className={`${inputClass} cursor-pointer`}
                    style={{ fontFamily: "var(--font-inter)" }}
                    required
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  >
                    <option value="" disabled>Selecione um tipo</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t} style={{ background: "#111111" }}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="contact-form-field" style={{ opacity: 0 }}>
                  <label
                    className={labelClass}
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Mensagem
                  </label>
                  <textarea
                    placeholder="Descreva brevemente o que você precisa..."
                    rows={5}
                    className={inputClass}
                    style={{ fontFamily: "var(--font-inter)", resize: "none" }}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="contact-form-field" style={{ opacity: 0 }}>
                  <button
                    type="submit"
                    className="w-full py-4 bg-white text-black font-bold rounded-xl text-sm tracking-widest uppercase hover:bg-[#e8e8e8] transition-all duration-200 group flex items-center justify-center gap-3 mt-2"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Enviar mensagem
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </button>
                </div>

                <div className="contact-form-field text-center pt-2" style={{ opacity: 0 }}>
                  <a
                    href="http://wa.me/5541995824179"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#555555] hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Prefere falar direto? Me chama no WhatsApp →
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Right: Contact info */}
          <div className="contact-info contact-sidebar">
            {/* Motivational phrase */}
            <div
              className="contact-info-item p-8 rounded-2xl border"
              style={{ background: "#111111", borderColor: "#1e1e1e", opacity: 0 }}
            >
              <p
                className="font-black text-white text-2xl leading-tight mb-4"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                &ldquo;Cada grande marca começou com uma conversa.&rdquo;
              </p>
              <p
                className="text-[#888888] text-sm"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Não importa o tamanho da sua ideia, vamos juntos transformá-la em algo que o mercado não vai ignorar.
              </p>
            </div>

            {/* Contact info items */}
            <div className="contact-info-item contact-info-items" style={{ opacity: 0 }}>
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  ),
                  label: "WhatsApp",
                  value: "+55 (41) 99582-4179",
                  href: "http://wa.me/5541995824179",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: "Localização",
                  value: "Curitiba, Paraná, Brasil",
                  href: null,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-xl border border-[#1e1e1e] hover:border-white/15 transition-colors duration-200"
                  style={{ background: "#111111" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "#1e1e1e", color: "#888888" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      className="text-xs text-[#888888] mb-0.5"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-sm font-medium hover:text-[#888888] transition-colors"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span
                        className="text-white text-sm font-medium"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Response time */}
            <div
              className="contact-info-item flex items-center gap-3 p-4 rounded-xl border border-white/8"
              style={{ background: "rgba(255,255,255,0.02)", opacity: 0 }}
            >
              <div className="w-2 h-2 rounded-full bg-white opacity-50 animate-pulse flex-shrink-0" />
              <p
                className="text-sm text-[#888888]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Tempo médio de resposta:{" "}
                <span className="text-white font-medium">menos de 24 horas</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
