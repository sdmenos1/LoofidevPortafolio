import React from 'react'

export default function Navbar() {
  return (
    <header className="fixed w-full z-50 px-6 py-4 flex justify-between items-center bg-black/40 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-lg"></div>
        <span className="text-xl font-extrabold tracking-tighter">NEXUS<span className="text-cyan-400">TECH</span></span>
      </div>
      <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
        <a href="#servicios" className="hover:text-cyan-400 transition-colors">Servicios</a>
        <a href="#proyectos" className="hover:text-cyan-400 transition-colors">Trayectoria</a>
        <a href="#beneficios" className="hover:text-cyan-400 transition-colors">Valor</a>
        <a href="#contacto" className="hover:text-cyan-400 transition-colors">Contacto</a>
      </nav>
      <button className="px-5 py-2 border border-cyan-400/30 rounded-full text-xs font-bold hover:bg-cyan-400/10 transition-all">
        EMPEZAR PROYECTO
      </button>
    </header>
  )
}
