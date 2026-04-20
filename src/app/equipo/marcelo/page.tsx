'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CertificationCard, { TechTag } from "@/components/CertificationCard"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MarceloPage() {
  const containerRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const textRefs = useRef<(HTMLParagraphElement | HTMLDivElement | null)[]>([])
  const certSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      if (imageRef.current) {
        tl.fromTo(imageRef.current, 
          { opacity: 0, x: -40, scale: 0.95 },
          { opacity: 1, x: 0, scale: 1, duration: 1, ease: "power3.out" }
        );
      }

      if (titleRef.current) {
        tl.fromTo(titleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.7"
        );
      }

      if (textRefs.current.length > 0) {
        tl.fromTo(textRefs.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out" },
          "-=0.5"
        );
      }

      if (certSectionRef.current) {
        gsap.fromTo(certSectionRef.current,
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: "power2.out",
            scrollTrigger: {
              trigger: certSectionRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

    }, containerRef);
    return () => ctx.revert();
  }, [])

  const addToRefs = (el: HTMLParagraphElement | HTMLDivElement | null) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el)
    }
  }

  return (
    <main className="min-h-screen bg-[#0a0a0b]" ref={containerRef}>
      <Navbar />
      
      <section className="pt-40 pb-16 px-6 relative overflow-hidden flex items-center">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10 w-full grid md:grid-cols-[1fr_1.5fr] gap-16 items-start">
          <div className="relative" ref={imageRef}>
            <div className="inline-block px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-8">
              Co-fundador & Fullstack / UI UX
            </div>
            
            <div className="relative rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-2 overflow-hidden shadow-2xl group">
              <div className="w-full aspect-[4/5] bg-[#0a0a0b] rounded-[1.2rem] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <Image 
                  src="/fotos_dev/foto_marcelo.jpg" 
                  alt="Foto de perfil de Marcelo, UI/UX y Fullstack Engineer" 
                  priority
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-center opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" 
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <h1 className="text-4xl font-extrabold text-white mb-1">Marcelo</h1>
                  <div className="font-mono text-cyan-400/80 tracking-widest text-sm">/fullstack-engineer</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center h-full pt-12 md:pt-0">
            <h2 ref={titleRef} className="text-3xl font-bold mb-8 text-white tracking-tight">Sobre Mí</h2>
            
            <div className="space-y-6 md:space-y-8 text-base md:text-lg text-gray-400 font-light leading-[1.8]">
              <p ref={addToRefs}>
                Soy un Desarrollador Fullstack e Ingeniero de Sistemas en formación, apasionado por construir soluciones digitales que fusionan un rendimiento excepcional con una estética de vanguardia. Mi enfoque combina la arquitectura técnica robusta con la creación de experiencias de usuario memorables y fluidas.
              </p>

              <p ref={addToRefs}>
                Especialista en el ecosistema moderno de JavaScript, utilizo
                <TechTag colorClass="text-cyan-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg>
                  React
                </TechTag>
                y 
                <TechTag colorClass="text-orange-500">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  Astro
                </TechTag> 
                para desarrollar interfaces de alto rendimiento y 
                <TechTag colorClass="text-blue-500">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
                  CSS
                </TechTag> 
                Diseños Responsive que se adaptan a cualquier entorno. Mi sello distintivo es la interactividad avanzada, dominando 
                <TechTag colorClass="text-green-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  GSAP
                </TechTag> 
                para crear animaciones complejas que elevan la narrativa visual de cada proyecto.
              </p>

              <p ref={addToRefs}>
                En el lado del servidor, diseño arquitecturas eficientes derivadas de 
                <TechTag colorClass="text-emerald-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  API REST
                </TechTag> 
                y gestiono datos críticos mediante 
                <TechTag colorClass="text-indigo-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                  AWS RDS
                </TechTag> 
                y servicios de 
                <TechTag colorClass="text-blue-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
                  Cloud
                </TechTag> 
                Computing. Además, optimizo la productividad empresarial a través de 
                <TechTag colorClass="text-cyan-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  GHL
                </TechTag> 
                Automatización de procesos en GoHighLevel.
              </p>
            </div>
            
            <div className="mt-12 opacity-0 flex flex-wrap gap-4" ref={addToRefs}>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan-400 text-black font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(0,242,255,0.3)] hover:shadow-[0_0_50px_rgba(0,242,255,0.7)] transition-all">
                Conectar
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative z-10 border-t border-white/5 bg-gradient-to-b from-[#0a0a0b] to-[#050505]">
        <div className="max-w-6xl mx-auto opacity-0" ref={certSectionRef}>
          <div className="flex flex-col md:flex-row items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">Logros &<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Certificaciones</span></h2>
            <div className="h-px bg-gradient-to-r from-emerald-500/50 to-transparent flex-1 hidden md:block"></div>
          </div>

          <CertificationCard 
            title="Implementación de Chatbot con NLP y Deep Learning"
            issuer="CIMPS 2024"
            issuerIcon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>}
            description="Presentación de artículo científico internacional sobre soporte preventivo en salud mental para la detección de cuadros de depresión severa. <strong class='text-cyan-400 font-medium ml-1'>Ponente Internacional IEEE - CIMPS 2024</strong>."
            tags={[]}
            details={[
              { label: "Proyecto", value: 'Chatbot "Baymax"' },
              { label: "Core Tech", value: (
                <div className="flex flex-wrap gap-2">
                  <TechTag colorClass="text-emerald-400">NLP</TechTag>
                  <TechTag colorClass="text-fuchsia-400">Deep Learning (DNN)</TechTag>
                  <TechTag colorClass="text-yellow-400">Python</TechTag>
                </div>
              )},
              { label: "Impacto", value: "Presentación de artículo científico sobre Inteligencia Artificial aplicada a la depresión severa en Mérida, México." }
            ]}
            imageSrc="/fotos_dev/certificado_marcelo_congreso.jpg"
          />

          <CertificationCard 
            title="Python Essentials"
            issuer="Cisco Networking Academy"
            issuerIcon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>}
            description="Acreditación técnica en el desarrollo, depuración y refactorización de programas utilizando <code class='font-mono text-cyan-400'>Python 3</code>. Implementación de lógica algorítmica y manejo de la <code class='font-mono text-cyan-400'>Standard Library</code> para la resolución de problemas complejos."
            isVerified={true}
            tags={[]}
            details={[
              { label: "Institución", value: "Cisco & Python Institute" },
              { label: "Nivel", value: (
                <div className="flex flex-wrap gap-2">
                   <TechTag colorClass="text-cyan-400">Python 3</TechTag>
                   <TechTag colorClass="text-blue-400">PCEP Verified</TechTag>
                </div>
              )},
              { label: "Meta", value: "Avala los conocimientos para la certificación internacional Certified Entry-Level Python Programmer (PCEP)." }
            ]}
            imageSrc="/fotos_dev/CERTIFICADO_MARCELO_PYTHON.jfif"
          />

          <CertificationCard 
            title="Responsive Web Design Developer"
            issuer="freeCodeCamp"
            issuerIcon={<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.175 12.164c.264-.492.385-.828.385-1.18 0-.585-.303-1.04-.954-1.258-2.155-.724-4.322-1.444-6.497-2.138-.456-.145-.985-.246-1.411-.19-.504.067-.932.327-1.163.753-.255.47-.358.783-.358 1.134 0 .584.293 1.026.917 1.25 1.579.566 3.167 1.11 4.755 1.66 1.77.615 3.535 1.24 5.312 1.83.475.144.975.253 1.415.188.468-.066.864-.326 1.1-.73s1.175.731.73-.32zm-7.65-2.072a.855.855 0 0 0-.17-1.135 1.054 1.054 0 0 0-1.416.14l-4.526 4.542a.844.844 0 0 0-.131 1.157c.36.42.36.42.753-.404l3.1-3.088c.184.283.456.452.835.485s.827-.14 1.1-.53z"/></svg>}
            description="Acreditación técnica que representa <span class='text-white font-black text-lg bg-white/5 px-2 py-0.5 rounded border border-white/10'>300 horas</span> de desarrollo práctico. Implementación avanzada de <code class='font-mono text-cyan-400'>HTML5</code>, <code class='font-mono text-cyan-400'>CSS3</code>, <code class='font-mono text-cyan-400'>Flexbox</code> y <code class='font-mono text-cyan-400'>CSS Grid</code>."
            verifyUrl="https://www.freecodecamp.org/certification/fccd5082163-455b-4172-9694-8fcd215801ff/responsive-web-design"
            tags={[]}
            details={[
              { label: "Duración", value: "300 Horas de Ingeniería Frontend" },
              { label: "Tecnologías", value: (
                <div className="flex flex-wrap gap-2">
                  <TechTag colorClass="text-orange-400">HTML5</TechTag>
                  <TechTag colorClass="text-blue-400">CSS3</TechTag>
                  <TechTag colorClass="text-indigo-400">Layout Engine</TechTag>
                </div>
              )},
              { label: "Foco", value: "Accesibilidad web, diseño adaptativo y arquitectura de layouts modernos." }
            ]}
            imageSrc="/fotos_dev/CERTIFICADO_MARCELO_FREECODECAMP.jfif"
          />

        </div>
      </section>

      <Footer />
    </main>
  );
}

