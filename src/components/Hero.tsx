'use client'

import { motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollToPlugin)
}

class Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number

  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth
    this.y = Math.random() * canvasHeight
    this.size = Math.random() * 1.5
    this.speedX = (Math.random() - 0.5) * 0.5
    this.speedY = (Math.random() - 0.5) * 0.5
    this.opacity = Math.random() * 0.5
  }

  update(canvasWidth: number, canvasHeight: number) {
    this.x += this.speedX
    this.y += this.speedY
    if (this.x > canvasWidth) this.x = 0
    if (this.x < 0) this.x = canvasWidth
    if (this.y > canvasHeight) this.y = 0
    if (this.y < 0) this.y = canvasHeight
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = `rgba(0, 242, 255, ${this.opacity})`
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
  }
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const particles: Particle[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)
    resize()

    for (let i = 0; i < 120; i++) {
      particles.push(new Particle(canvas.width, canvas.height))
    }

    let animationId: number
    const animate = () => {
      if (!canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.update(canvas.width, canvas.height)
        p.draw(ctx)
      })
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0b] pt-20 px-4 md:px-8">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Professional Overlay Mask - Reduced darkness */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b]/80 via-transparent to-[#0a0a0b]/80 z-1" />
        <div className="absolute inset-0 bg-black/20 z-1" />
      </div>

      {/* Background Glowing Orbs - Increased intensity */}
      <div className="absolute top-1/3 left-[20%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/20 blur-[150px] rounded-[100%] pointer-events-none z-2" />
      <div className="absolute top-2/3 right-[10%] w-[500px] h-[500px] bg-blue-500/20 blur-[150px] rounded-[100%] pointer-events-none z-2" />

      {/* Particle Canvas - Increased opacity */}
      <canvas ref={canvasRef} className="absolute inset-0 z-2 pointer-events-none opacity-60" id="heroCanvas" />
      
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">
        <div className="flex-1 text-center lg:text-left mt-10 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono font-bold tracking-widest uppercase mb-8 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Ingeniería de Software Premium
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-[110px] font-bold tracking-[-0.04em] mb-6 leading-[0.9]"
          >
            LOOFI<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">DEV</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl font-medium leading-relaxed lg:border-l-2 lg:border-cyan-500/30 lg:pl-6 mx-auto lg:mx-0"
          >
            <strong className="text-white font-bold">Desarrollo Web</strong> de Alto Impacto para tu Negocio. Transformamos ideas complejas en arquitecturas altamente escalables y eficientes.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
          >
            <button 
              onClick={() => {
                gsap.to(window, {
                  duration: 1.5,
                  scrollTo: "#contacto",
                  ease: "power4.inOut"
                });
              }}
              className="relative overflow-hidden group btn-primary px-10 py-5 rounded-2xl font-bold text-black uppercase tracking-widest text-sm shadow-[0_0_40px_rgba(0,242,255,0.4)] hover:shadow-[0_0_60px_rgba(0,242,255,0.6)] transition-all cursor-pointer"
            >
              <span className="relative z-10">Iniciar Transformación</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button 
              onClick={() => {
                gsap.to(window, {
                  duration: 1.5,
                  scrollTo: "#proyectos",
                  ease: "power4.inOut"
                });
              }}
              className="px-10 py-5 rounded-2xl border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-900/10 transition-all font-bold uppercase tracking-widest text-sm backdrop-blur-md cursor-pointer"
            >
              Explorar Soluciones
            </button>
          </motion.div>
        </div>

        {/* Floating Architect Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex-1 w-full flex justify-center lg:justify-end relative"
        >
          <motion.div 
            animate={{ y: [-15, 15, -15] }} 
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative w-full max-w-[460px] lg:mr-[-2rem]"
          >
            {/* Super Glow background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 blur-[80px] z-0" />
            
            <div className="relative z-10 bg-[#0a0a0b]/40 backdrop-blur-3xl border border-white/10 p-6 md:p-8 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
              {/* Window Controls */}
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                </div>
                <div className="font-mono text-xs font-bold text-gray-500 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                  runtime.config.ts
                </div>
              </div>
              
              <div className="font-mono text-sm text-cyan-400 mb-2">import <span className="text-white">{`{ Core, Data }`}</span> from <span className="text-blue-400">&apos;@loofidev/system&apos;</span>;</div>
              <div className="font-mono text-sm text-gray-500 mb-8">{"// Inicializando arquitectura empresarial"}</div>
              
              {/* Fake IDE Output */}
              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                  <span className="text-gray-300 font-semibold">Infraestructura DB</span>
                  <span className="text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-lg border border-emerald-400/20 shadow-[0_0_15px_rgba(52,211,153,0.15)]">ESTABLE</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                  <span className="text-gray-300 font-semibold">Latencia Global</span>
                  <span className="text-blue-400 bg-blue-400/10 px-3 py-1.5 rounded-lg border border-blue-400/20 shadow-[0_0_15px_rgba(96,165,250,0.15)]">{"< 20ms"}</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-2xl border border-cyan-500/40 bg-cyan-500/10 scale-[1.02] transform transition-all shadow-[0_0_30px_rgba(0,242,255,0.15)]">
                  <span className="text-cyan-100 font-bold">Arquitectura LOOFIDEV</span>
                  <span className="text-cyan-400 font-bold flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(0,242,255,1)]" />
                    DESPLEGADA
                  </span>
                </div>
              </div>
            </div>
            
            {/* Floating Image element */}
            <motion.div 
              animate={{ y: [10, -10, 10], rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -right-4 md:-bottom-12 md:-right-12 w-32 h-32 md:w-40 md:h-40 bg-[#0a0a0b]/40 border border-white/20 rounded-[2rem] p-3 shadow-[0_30px_60px_rgba(0,0,0,0.8)] z-20 backdrop-blur-md"
            >
              <Image src="/logo_oficial.jpeg" alt="Logo" width={160} height={160} className="w-full h-full object-contain rounded-2xl shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
