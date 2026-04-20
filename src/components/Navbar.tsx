import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="fixed w-full z-50 px-6 py-4 flex justify-between items-center bg-black/40 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center gap-2">
        <a href="/" className="flex items-center gap-3">
          <Image 
            src="/logo_oficial.jpeg" 
            alt="LOOFIDEV Logo Oficial" 
            width={64} 
            height={64} 
            className="w-16 h-16 object-contain rounded-xl shadow-[0_0_15px_rgba(0,242,255,0.3)]"
          />
          <span className="text-2xl font-black tracking-tighter hidden sm:block">LOOFI<span className="text-cyan-400">DEV</span></span>
        </a>
      </div>
      <nav className="hidden md:flex gap-8 text-sm font-bold text-gray-300 items-center">
        <a href="/#nosotros" className="hover:text-cyan-400 transition-colors uppercase tracking-[0.15em] text-[11px]">Nosotros</a>
        <a href="/#servicios" className="hover:text-cyan-400 transition-colors uppercase tracking-[0.15em] text-[11px]">Servicios</a>
        <a href="/#proyectos" className="hover:text-cyan-400 transition-colors uppercase tracking-[0.15em] text-[11px]">Proyectos</a>
        
        {/* Nuestro Equipo Dropdown */}
        <div className="relative group py-4">
          <button className="flex items-center gap-1 hover:text-cyan-400 transition-colors uppercase tracking-[0.15em] text-[11px] font-bold focus:outline-none">
            Nuestro Equipo
            <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* Menu Dropdown con Glassmorphism */}
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-64 bg-[#0a0a0b]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
            <div className="p-2 flex flex-col">
              <a href="/equipo/marcelo" className="px-4 py-3 hover:bg-white/5 rounded-xl transition-colors flex flex-col group/item">
                <span className="text-white text-xs font-extrabold group-hover/item:text-cyan-400 transition-colors">Marcelo Dev</span>
                <span className="text-[10px] text-gray-400 font-mono mt-1 font-bold">Co-fundador / UI/UX Engineer</span>
              </a>
              <a href="/equipo/adrian" className="px-4 py-3 hover:bg-white/5 rounded-xl transition-colors flex flex-col group/item">
                <span className="text-white text-xs font-extrabold group-hover/item:text-blue-400 transition-colors">Adrian Dev</span>
                <span className="text-[10px] text-gray-400 font-mono mt-1 font-bold">Co-fundador / Fullstack Developer</span>
              </a>
            </div>
          </div>
        </div>

        <a href="/#contacto" className="hover:text-cyan-400 transition-colors uppercase tracking-[0.15em] text-[11px]">Contacto</a>
      </nav>
      <button className="px-6 py-2.5 border border-cyan-400/50 rounded-full text-[11px] font-extrabold hover:bg-cyan-400/20 transition-all uppercase tracking-widest text-cyan-400">
        INICIAR PROYECTO
      </button>
    </header>
  )
}
