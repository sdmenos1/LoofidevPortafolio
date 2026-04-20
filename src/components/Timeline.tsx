'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Image from 'next/image'

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section id="proyectos" className="py-24 bg-black relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold mb-4"
          >
            Nuestros Proyectos
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 font-medium"
          >
            Soluciones tecnológicas de alto impacto desplegadas con éxito.
          </motion.p>
        </div>

        <div className="relative py-10" ref={containerRef}>
          <div className="w-[2px] bg-white/10 absolute left-1/2 -translate-x-1/2 h-full" />
          <motion.div 
            style={{ scaleY }}
            className="w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-emerald-400 absolute left-1/2 -translate-x-1/2 h-full origin-top transition-shadow shadow-[0_0_15px_#00f2ff]" 
          />
          {/* Item: JKO Asfaltos */}
          <div className="relative flex justify-between items-center w-full mb-32 md:flex-row flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.03, y: -10 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-full md:w-[45%]"
            >
              <div 
                className="p-6 md:p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 group shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(0,242,255,0.05)]" 
              >
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2 block font-mono">2024 • INFRAESTRUCTURA PREMIUM</span>
                      <h4 className="text-3xl font-extrabold text-white">JKO Asfaltos</h4>
                    </div>
                    <div className="bg-cyan-500/10 border border-cyan-500/20 p-2.5 rounded-xl">
                      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>

                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
                    <Image 
                      src="/proyectos/asfalto_imagen.jpeg" 
                      alt="JKO Asfaltos Preview" 
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed font-medium">
                    Landing Page de alto impacto para logística de asfaltos en Perú. Transformamos la presencia digital con una estética tipo "Apple" y optimización para conversiones masivas.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {[
                      { name: 'TypeScript', color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20', icon: (
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.102.156.254.304.455.444s.465.276.791.41c.326.132.711.272 1.155.421 1.057.355 1.863.76 2.419 1.214.556.453.834 1.053.834 1.799 0 .285-.051.574-.151.867a3.004 3.004 0 0 1-.491.854 3.73 3.73 0 0 1-.951.78c-.407.24-.925.434-1.556.582-.63.148-1.413.222-2.348.222-1.127 0-2.01-.135-2.65-.405a8.707 8.707 0 0 1-1.633-.873l1.373-1.928c.11.066.24.137.387.213.147.075.321.154.524.234.204.08.455.156.755.23.3.073.66.11 1.08.11.758 0 1.35-.116 1.774-.348.423-.231.635-.548.635-.95 0-.256-.051-.47-.154-.64-.103-.171-.258-.323-.465-.457-.207-.134-.48-.258-.816-.372-.336-.113-.74-.239-1.21-.378-.507-.153-.962-.338-1.365-.555a3.176 3.176 0 0 1-1.002-.857c-.255-.335-.382-.777-.382-1.325 0-.414.093-.8.278-1.156.185-.356.452-.663.803-.923a4.706 4.706 0 0 1 1.266-.66c.484-.176 1.042-.31 1.67-.404.629-.094 1.341-.141 2.138-.141zM12.172 11.412c0 1.061-.016 1.834-.047 2.32h.063c.125-.338.274-.69.445-1.055l1.383-3.048h2.72v10.125h-2.438V13.88c0-.623.016-1.332.047-2.126h-.063c-.156.425-.328.847-.516 1.266l-1.39 3.111h-2.36l-1.422-3.14c-.172-.392-.336-.786-.492-1.182h-.063c.016.516.032 1.24.047 2.172v5.77H5.625V9.75h2.828l1.71 3.516c.172.36.328.711.47 1.055h.062c.032-.234.047-.547.047-.938V9.75h1.43z"/></svg>
                      ) },
                      { name: 'Next.js 15+', color: 'text-white', bg: 'bg-white/10', border: 'border-white/20', icon: (
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M18.663 20.356L9.181 8.2h-1.38v7.6h1.217V9.758l8.281 10.435a9.92 9.92 0 0 0 1.365-.837zM12 0C5.378 0 0 5.378 0 12c0 6.622 5.378 12 12 12s12-5.378 12-12c0-6.622-5.378-12-12-12zm0 1.217c4.646 0 8.536 3.125 9.704 7.373L9.13 5.421a1.215 1.215 0 0 0-1.329.173 1.215 1.215 0 0 0-.301 1.334v12.264l-.001.002H6.283V8.2c0-.671-.545-1.217-1.217-1.217s-1.217.546-1.217 1.217v12a9.904 9.904 0 0 0 8.151-1.29V12.17c0-.672-.544-1.217-1.217-1.217-.671 0-1.217.545-1.217 1.217v5.52l-.001.003h-1.213V7.073l12.188 15.176A10.742 10.742 0 0 1 12 22.783c-5.955 0-10.783-4.828-10.783-10.783S6.045 1.217 12 1.217z"/></svg>
                      ) },
                      { name: 'React', color: 'text-cyan-400', bg: 'bg-cyan-400/10', border: 'border-cyan-400/20', icon: (
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="2"/><path d="M21 12c0 1-.3 1.9-1 2.8-1.5 2.1-4.2 3.6-7.5 4-1 .1-1.9.1-2.9-.1-3.3-.4-6-1.9-7.5-3.9-.7-.9-1-1.8-1-2.8 0-1 .3-1.9 1-2.8 1.5-2.1 4.2-3.6 7.5-4 1-.1 1.9-.1 2.9.1 3.3.4 6 1.9 7.5 3.9.7.9 1 1.8 1 2.8z" fill="none" stroke="currentColor" strokeWidth="1.2"/><path d="M12 21c-1.1 0-2.1-.3-3-1-2.2-1.5-3.8-4.2-4.2-7.5-.1-1-.1-1.9.1-2.9.4-3.3 1.9-6 3.9-7.5.9-.7 1.8-1 2.8-1 1.1 0 2.1.3 3 1 2.2 1.5 3.8 4.2 4.2 7.5.1 1 .1 1.9-.1 2.9-.4 3.3-1.9 6-3.9 7.5-.9.7-1.8 1-2.8 1z" fill="none" stroke="currentColor" strokeWidth="1.2"/><path d="M18.4 18.4c-.8.8-1.7 1.2-2.7 1.4-2.6.4-5.6-.2-8.3-1.8-.8-.5-1.1-1.1-2.3-1.7-2.3-2.4-3.3-5.2-3.3-7.8.1-1.1.4-2 .9-2.8.8-.8 1.7-1.2 2.7-1.4 2.6-.4 5.6.2 8.3 1.8.8.5 1.6 1.1 2.3 1.7 2.3 2.4 3.5 5.2 3.3 7.8-.1 1.1-.4 2-.9 2.8z" fill="none" stroke="currentColor" strokeWidth="1.2"/></svg>
                      ) },
                      { name: 'Tailwind CSS', color: 'text-blue-300', bg: 'bg-blue-300/10', border: 'border-blue-300/20', icon: (
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>
                      ) },
                      { name: 'GSAP', color: 'text-green-400', bg: 'bg-green-400/10', border: 'border-green-400/20', icon: (
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M10 8l6 4-6 4V8z" /></svg>
                      ) },
                      { name: 'Framer Motion', color: 'text-pink-400', bg: 'bg-pink-400/10', border: 'border-pink-400/20', icon: (
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h12l12 12H12L0 24V12h12L0 0z"/></svg>
                      ) }
                    ].map(tech => (
                      <span key={tech.name} className={`flex items-center gap-1.5 text-[10px] font-bold px-3 py-1.5 ${tech.bg} ${tech.border} border rounded-xl ${tech.color} backdrop-blur-md`}>
                        {tech.icon}
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <a 
                      href="https://jko-asfaltos.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-cyan-500/10 hover:bg-cyan-500 border border-cyan-500/30 hover:border-cyan-500 text-cyan-400 hover:text-black font-extrabold rounded-full transition-all duration-300 group/btn"
                    >
                      VER PROYECTO
                      <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-[#0a0a0b] border-4 border-white rounded-full z-10 shadow-[0_0_20px_rgba(255,255,255,0.5)]"></div>
            <div className="hidden md:block w-[45%]">
              <div className="p-8 border-l-2 border-white/5 space-y-4">
                <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">Metas Alcanzadas</div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Arquitectura robusta con App Router
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Interfaces cinemáticas (GSAP)
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Optimización SEO & Performance
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Item: Panizzeria Astro */}
          <div className="relative flex justify-between items-center w-full mb-32 flex-col md:flex-row-reverse gap-8">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.03, y: -10 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-full md:w-[45%]"
            >
              <div className="p-6 md:p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300 group shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(255,107,0,0.05)]">
                <div className="text-right md:text-left space-y-6">
                  <div className="flex justify-between items-start md:flex-row-reverse">
                    <div>
                      <span className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-2 block font-mono text-right md:text-left">2024 • FOOD & EXPERIENCE</span>
                      <h4 className="text-3xl font-extrabold text-white text-right md:text-left">Panizzeria Astro</h4>
                    </div>
                    <div className="bg-orange-500/10 border border-orange-500/20 p-2.5 rounded-xl">
                      <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>

                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
                    <Image 
                      src="/proyectos/panizzeria_imagen.jpeg" 
                      alt="Panizzeria Preview" 
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed font-medium">
                    Plataforma gastronómica de alto rendimiento. Optimización de carga extrema mediante el uso de Astro e interacciones refinadas para una experiencia de usuario superior.
                  </p>

                  <div className="flex flex-wrap gap-3 justify-end md:justify-start">
                    {[
                      { name: 'Astro', color: 'text-orange-400', bg: 'bg-orange-400/10', border: 'border-orange-400/20', icon: (
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M19 2l-7 7-7-7v14l7 7 7-7V2z"/></svg>
                      ) },
                      { name: 'GSAP', color: 'text-green-400', bg: 'bg-green-400/10', border: 'border-green-400/20', icon: (
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M10 8l6 4-6 4V8z" /></svg>
                      ) },
                      { name: 'MySQL', color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20', icon: (
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                      ) },
                      { name: 'AWS RDS', color: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-400/20', icon: (
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
                      ) }
                    ].map(tech => (
                      <span key={tech.name} className={`flex items-center gap-1.5 text-[10px] font-bold px-3 py-1.5 ${tech.bg} ${tech.border} border rounded-xl ${tech.color} backdrop-blur-md`}>
                        {tech.icon}
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <a 
                      href="https://panizzeria-astro.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-orange-500/10 hover:bg-orange-500 border border-orange-500/30 hover:border-orange-500 text-orange-400 hover:text-black font-extrabold rounded-full transition-all duration-300 group/btn"
                    >
                      VER PROYECTO
                      <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-[#0a0a0b] border-4 border-white rounded-full z-10 shadow-[0_0_20px_rgba(255,255,255,0.5)]"></div>
            <div className="hidden md:block w-[45%]"></div>
          </div>

          {/* Item: CONEIMERA 2025 */}
          <div className="relative flex justify-between items-center w-full mb-32 md:flex-row flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.03, y: -10 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-full md:w-[45%]"
            >
              <div 
                className="p-6 md:p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-emerald-400/50 transition-all duration-300 group shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(52,211,153,0.05)]" 
              >
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2 block font-mono">2025 • ACADEMIC & TECHNOLOGY</span>
                      <h4 className="text-3xl font-extrabold text-white">CONEIMERA 2025</h4>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/20 p-2.5 rounded-xl">
                      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  </div>

                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
                    <Image 
                      src="/proyectos/coneimera_imagen.jpeg" 
                      alt="CONEIMERA Preview" 
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed font-medium">
                    Plataforma oficial para el Congreso Nacional de Estudiantes de Ingeniería Mecánica, Eléctrica y Ramas Afines. Diseño orientado a la gestión de eventos y alta concurrencia.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {[
                      { name: 'Astro', color: 'text-orange-400', bg: 'bg-orange-400/10', border: 'border-orange-400/20', icon: (
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M19 2l-7 7-7-7v14l7 7 7-7V2z"/></svg>
                      ) },
                      { name: 'Svelte', color: 'text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500/20', icon: (
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
                      ) },
                      { name: 'CSS', color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20', icon: (
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
                      ) }
                    ].map(tech => (
                      <span key={tech.name} className={`flex items-center gap-1.5 text-[10px] font-bold px-3 py-1.5 ${tech.bg} ${tech.border} border rounded-xl ${tech.color} backdrop-blur-md`}>
                        {tech.icon}
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <a 
                      href="https://coneimera.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-emerald-500/10 hover:bg-emerald-500 border border-emerald-500/30 hover:border-emerald-500 text-emerald-400 hover:text-black font-extrabold rounded-full transition-all duration-300 group/btn"
                    >
                      VER PROYECTO
                      <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-[#0a0a0b] border-4 border-white rounded-full z-10 shadow-[0_0_20px_rgba(255,255,255,0.5)]"></div>
            <div className="hidden md:block w-[45%]"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
