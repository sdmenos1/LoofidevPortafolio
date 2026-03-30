'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

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

  const handleTilt = (e: React.MouseEvent<HTMLDivElement>, card: HTMLDivElement) => {
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = (y - centerY) / 15
    const rotateY = (centerX - x) / 15
    
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const resetTilt = (card: HTMLDivElement) => {
    card.style.transform = `rotateX(0deg) rotateY(0deg)`
  }

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
            Nuestra Trayectoria
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500"
          >
            Un legado de eficiencia construido píxel a píxel.
          </motion.p>
        </div>

        <div className="relative py-10" ref={containerRef}>
          <div className="w-[2px] bg-white/10 absolute left-1/2 -translate-x-1/2 h-full" />
          <motion.div 
            style={{ scaleY }}
            className="w-[2px] bg-gradient-to-b from-cyan-400 via-emerald-400 to-amber-400 absolute left-1/2 -translate-x-1/2 h-full origin-top transition-shadow shadow-[0_0_15px_#00f2ff]" 
          />

          {/* Item 1 */}
          <div className="relative flex justify-between items-center w-full mb-32 md:odd:flex-row md:even:flex-row-reverse flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-[45%] card-container"
            >
              <div 
                className="card-3d p-8 rounded-3xl cursor-pointer" 
                onMouseMove={(e) => handleTilt(e, e.currentTarget)} 
                onMouseLeave={(e) => resetTilt(e.currentTarget)}
              >
                <div className="card-inner">
                  <span className="text-xs font-mono text-cyan-400 mb-2 block">2024 • FINTECH SYSTEM</span>
                  <h4 className="text-2xl font-bold mb-4">Global Assets Platform</h4>
                  <p className="text-sm text-gray-400 mb-6">Arquitectura escalable para el manejo de activos en tiempo real con latencia inferior a 20ms.</p>
                  <div className="w-full h-40 bg-black/60 rounded-xl flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all">
                    <div className="w-32 h-20 border-2 border-cyan-400/20 rounded-lg flex items-center justify-center">
                      <div className="w-16 h-1 bg-cyan-400/50"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 border-cyan-400 rounded-full z-10 shadow-[0_0_10px_#00f2ff]"></div>
            <div className="hidden md:block w-[45%]"></div>
          </div>

          {/* Item 2 */}
          <div className="relative flex justify-between items-center w-full mb-32 flex-col md:flex-row-reverse gap-8">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-[45%] card-container"
            >
              <div 
                className="card-3d p-8 rounded-3xl cursor-pointer" 
                onMouseMove={(e) => handleTilt(e, e.currentTarget)} 
                onMouseLeave={(e) => resetTilt(e.currentTarget)}
              >
                <div className="card-inner text-right md:text-left">
                  <span className="text-xs font-mono text-amber-400 mb-2 block">2023 • LOGISTICS AI</span>
                  <h4 className="text-2xl font-bold mb-4">Neural Supply Chain</h4>
                  <p className="text-sm text-gray-400 mb-6">Optimización inteligente de rutas que resultó en una reducción del 35% en costos de combustible.</p>
                  <div className="w-full h-40 bg-black/60 rounded-xl flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all">
                    <div className="flex gap-2 items-end h-24">
                      <div className="w-4 bg-amber-400/40 h-10"></div>
                      <div className="w-4 bg-amber-400/60 h-16"></div>
                      <div className="w-4 bg-amber-400/80 h-24"></div>
                      <div className="w-4 bg-amber-400 h-20"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 border-amber-400 rounded-full z-10 shadow-[0_0_10px_#ffb800]"></div>
            <div className="hidden md:block w-[45%]"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
