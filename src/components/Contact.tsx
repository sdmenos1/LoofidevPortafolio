'use client'

import React, { useState } from 'react'

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 5000)
  }

  return (
    <section id="contacto" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto p-12 rounded-[40px] bg-gradient-to-b from-white/5 to-transparent border border-white/10 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">¿Listo para el siguiente nivel?</h2>
          <p className="text-gray-400">Nuestro equipo está listo para digitalizar sus procesos corporativos.</p>
        </div>
        
        <form className="grid md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">Nombre completo</label>
            <input 
              type="text" 
              placeholder="Ej. Alexander Pierce" 
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-400 transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">Correo Corporativo</label>
            <input 
              type="email" 
              placeholder="alex@empresa.com" 
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-400 transition-all"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">Descripción del Proyecto</label>
            <textarea 
              rows={4} 
              placeholder="Cuéntanos sobre tus objetivos de optimización..." 
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-400 transition-all"
              required
            />
          </div>
          <div className="md:col-span-2">
            <button className="w-full btn-primary p-4 rounded-xl font-bold text-black uppercase tracking-tighter">
              Enviar Consulta de Estrategia
            </button>
          </div>
        </form>

        {showSuccess && (
          <div className="mt-6 p-4 bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 rounded-xl text-center">
            Mensaje enviado. Nuestro equipo se pondrá en contacto en menos de 24 horas.
          </div>
        )}
      </div>
    </section>
  )
}
