'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-4">Arquitectura Digital de Vanguardia</h2>
            <p className="text-gray-400">Combinamos análisis de datos profundo con un diseño impecable para crear herramientas que escalen su negocio.</p>
          </div>
          <div className="text-cyan-400 font-mono text-sm tracking-widest">[ CAPACIDADES_V.2.5 ]</div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* ERP Systems */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all group lg:col-span-1"
          >
            <div className="mb-6 h-16 w-16 flex items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-all">
              <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">Sistemas ERP</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Centralizamos y automatizamos la logística, finanzas y operaciones de tu empresa con plataformas hechas a tu medida.</p>
          </motion.div>

          {/* CRM Systems */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-400/30 transition-all group"
          >
            <div className="mb-6 h-16 w-16 flex items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition-all">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">Sistemas CRM</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Desarrollamos herramientas que te permitirán gestionar tus leads, fidelizar clientes y optimizar tu embudo de ventas.</p>
          </motion.div>

          {/* Full-Stack Dev */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-400/30 transition-all group"
          >
            <div className="mb-6 h-16 w-16 flex items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-all">
              <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">Desarrollo Web Full-Stack</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Desde plataformas e-commerce complejas hasta aplicaciones web interactivas (React, Node.js, Spring Boot, Astro).</p>
          </motion.div>

          {/* Landing Pages */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-400/30 transition-all group"
          >
            <div className="mb-6 h-16 w-16 flex items-center justify-center rounded-2xl bg-amber-500/10 border border-amber-500/20 group-hover:bg-amber-500/20 transition-all">
              <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-amber-400 transition-colors">Landing Pages</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Diseños de alta conversión, rápidos y optimizados para SEO, creados específicamente para captar clientes potenciales.</p>
          </motion.div>

          {/* Cloud & DB */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-400/30 transition-all group"
          >
            <div className="mb-6 h-16 w-16 flex items-center justify-center rounded-2xl bg-purple-500/10 border border-purple-500/20 group-hover:bg-purple-500/20 transition-all">
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">Nube y Bases de Datos</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Arquitecturas seguras y escalables que garantizan que tu información esté siempre disponible y protegida.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
