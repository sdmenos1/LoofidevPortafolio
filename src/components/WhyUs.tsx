'use client'

import { motion } from 'framer-motion'
import React from 'react'

const features = [
  {
    title: "Enfoque de Ingeniería",
    description: "No usamos plantillas genéricas. Aplicamos un rigor técnico desde el diseño de la base de datos hasta el despliegue final para garantizar calidad.",
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    )
  },
  {
    title: "Tecnología de Vanguardia",
    description: "Trabajamos con los stacks tecnológicos más demandados y eficientes del mercado, asegurando que tu producto sea rápido, moderno y mantenible.",
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Atención Personalizada",
    description: "Como cofundadores, Marcelo y Adrian se involucran directamente en cada proyecto, garantizando una comunicación transparente y resultados excepcionales.",
    icon: (
      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  }
]

export default function WhyUs() {
  return (
    <section className="py-24 px-4 md:px-8 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center mb-16 gap-12">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6">
              ¿Por qué elegir <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">LOOFIDEV</span>?
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Nos distanciamos del desarrollo convencional enfocado en la cantidad. Nuestra prioridad es el rigor técnico y el impacto real en el negocio.
            </p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[#0a0a0b] border border-white/5 hover:border-white/10 transition-all flex flex-col items-start gap-6 group"
            >
              <div className="p-4 rounded-2xl bg-white/5 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
