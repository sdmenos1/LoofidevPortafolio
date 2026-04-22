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

export default function AdrianPage() {
  const containerRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const textRefs = useRef<(HTMLParagraphElement | HTMLDivElement | null)[]>([])
  const certSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // GSAP Animation Sequence
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // Animate Image
      if (imageRef.current) {
        tl.fromTo(imageRef.current, 
          { opacity: 0, x: -50, scale: 0.95 },
          { opacity: 1, x: 0, scale: 1, duration: 1, ease: "power3.out" }
        );
      }
      
      // Animate Paragraphs with Stagger
      if (textRefs.current.length > 0) {
        tl.fromTo(textRefs.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" },
          "-=0.5" // Start slightly before image finishes
        );
      }

      // Animate Certification Section
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
    
    return () => ctx.revert(); // Cleanup GSAP context
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
        {/* Deep Background Glows */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10 w-full grid md:grid-cols-[1fr_1.5fr] gap-16 items-start">
          
          {/* Profile Card & Image (Left Side) */}
          <div className="relative" ref={imageRef}>
            <div className="inline-block px-4 py-2 rounded-full border border-blue-400/30 bg-blue-400/10 text-blue-400 text-xs font-bold tracking-widest uppercase mb-8">
              Co-fundador & Fullstack Developer
            </div>
            
            <div className="relative rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-2 overflow-hidden shadow-2xl group">
              <div className="w-full aspect-[4/5] bg-[#0a0a0b] rounded-[1.2rem] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <Image 
                  src="/fotos_dev/adrian_foto.jpg" 
                  alt="Foto de perfil de Adrián, Desarrollador Fullstack" 
                  priority
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-center opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" 
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <h1 className="text-4xl font-extrabold text-white mb-1">Adrián</h1>
                  <div className="font-mono text-blue-400/80 tracking-widest text-sm">/fullstack-dev</div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Content (Right Side) */}
          <div className="flex flex-col justify-center h-full pt-12 md:pt-20">
            <h2 className="text-3xl font-bold mb-8 text-white tracking-tight">Sobre Mí</h2>
            
            <div className="space-y-8 text-lg text-gray-400 font-light leading-[1.8]">
              
              <p ref={addToRefs}>
                Soy un desarrollador Fullstack y emprendedor tecnológico enfocado en la creación de software de alto impacto. Como fundador de mi propia startup, lidero la arquitectura de soluciones escalables integrando 
                <TechTag colorClass="text-emerald-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                  microservicios
                </TechTag> 
                y servicios de 
                <TechTag colorClass="text-orange-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
                  AWS
                </TechTag> 
                para optimizar la productividad empresarial.
              </p>

              <p ref={addToRefs}>
                Mi especialidad es el desarrollo de interfaces modernas y de alto rendimiento utilizando 
                <TechTag colorClass="text-cyan-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg>
                  React
                </TechTag> 
                y 
                <TechTag colorClass="text-white">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                  Next.js
                </TechTag>, potenciadas con 
                <TechTag colorClass="text-blue-500">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
                  CSS
                </TechTag> Responsive y 
                <TechTag colorClass="text-teal-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                  Tailwind
                </TechTag> 
                para garantizar experiencias de usuario impecables en cualquier dispositivo. Además, aporto un nivel superior de interactividad mediante animaciones avanzadas con 
                <TechTag colorClass="text-green-500">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  GSAP
                </TechTag>.
              </p>

              <p ref={addToRefs}>
                Cuento con una sólida experiencia en la gestión de 
                <TechTag colorClass="text-indigo-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                  bases de datos
                </TechTag> 
                relacionales y el diseño de sistemas que no solo funcionan, sino que escalan y evolucionan bajo una infraestructura robusta en la nube. Mi trayectoria combina la visión técnica con la capacidad estratégica, permitiéndome transformar ideas complejas en productos digitales de alto rendimiento.
              </p>
            </div>
            
            <div className="mt-12 opacity-0 flex gap-4" ref={addToRefs}>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(0,242,255,0.3)] hover:shadow-[0_0_40px_rgba(0,242,255,0.6)] transition-all">
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
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">Logros &<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Certificaciones</span></h2>
            <div className="h-px bg-gradient-to-r from-blue-500/50 to-transparent flex-1 hidden md:block"></div>
          </div>

          <CertificationCard 
            title="Autor & Expositor - IEEE EDUNINE 2026"
            issuer="IEEE World Engineering Education"
            issuerIcon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>}
            description="Certificado como Autor y Expositor en la <strong class='text-blue-400 font-medium'>X IEEE World Engineering Education Conference</strong> en Ciudad de México. Investigación sobre la integración de <code class='font-mono text-blue-400'>Business Intelligence</code> y marcos de trabajo <code class='font-mono text-blue-400'>Scrum</code> para la optimización de la colaboración universidad-empresa."
            isVerified={true}
            details={[
              { label: "Ubicación", value: "Ciudad de México, México 🇲🇽" },
              { label: "Enfoque", value: (
                <div className="flex flex-wrap gap-2">
                   <TechTag colorClass="text-blue-400">BI & Data</TechTag>
                   <TechTag colorClass="text-emerald-400">Scrum Master</TechTag>
                </div>
              )},
              { label: "Impacto", value: "Validación internacional de modelos de datos para la toma de decisiones estratégicas en el sector académico y profesional." }
            ]}
            imageSrc="/fotos_dev/certificado_adrian_congreso.jpg"
          />
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
