'use client'

import { motion } from 'framer-motion'
import React from 'react'

export default function About() {
  return (
    <section id="nosotros" className="py-24 px-6 relative bg-black overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              ¿Quiénes <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Somos</span>?
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Bienvenidos a <span className="text-white font-semibold">LOOFIDEV</span>, una agencia de desarrollo y consultoría tecnológica fundada por <span className="text-cyan-400">Marcelo</span> y <span className="text-blue-400">Adrian Dev</span>. 
                Somos un equipo apasionado por la ingeniería de sistemas y el desarrollo de software, dedicados a construir herramientas digitales que impulsan el crecimiento de las empresas.
              </p>
              <p>
                Nuestra visión va más allá de escribir código: analizamos las necesidades reales de tu negocio para diseñar arquitecturas robustas y eficientes. 
                Combinamos nuestra experiencia en desarrollo full-stack con las mejores prácticas de la industria para entregar productos de alto impacto.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-video rounded-3xl bg-white/5 border border-white/10 p-1 backdrop-blur-sm overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="h-full w-full rounded-[1.4rem] bg-black/40 flex items-center justify-center border border-white/5 relative overflow-hidden">
                {/* Visual Engineering Element */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                  <div className="w-full h-[1px] bg-cyan-500/50 absolute top-1/4" />
                  <div className="w-full h-[1px] bg-cyan-500/50 absolute top-2/4" />
                  <div className="w-full h-[1px] bg-cyan-500/50 absolute top-3/4" />
                  <div className="h-full w-[1px] bg-cyan-500/50 absolute left-1/4" />
                  <div className="h-full w-[1px] bg-cyan-500/50 absolute left-2/4" />
                  <div className="h-full w-[1px] bg-cyan-500/50 absolute left-3/4" />
                </div>
                
                <div className="text-center p-8">
                  <div className="mb-4 inline-block p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
                    <svg className="w-12 h-12 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Pasión por la Ingeniería</h3>
                  <p className="text-gray-500 font-mono text-sm tracking-tighter">[ 01001100 01001111 01001111 01000110 ]</p>
                </div>
              </div>
            </div>

            {/* Floating stats or labels */}
            <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl bg-[#0a0a0b] border border-white/10 shadow-2xl">
              <div className="text-3xl font-bold text-cyan-400">100%</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-mono">Custom Dev</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
