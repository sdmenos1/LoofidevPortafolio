'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Nosotros', href: '/#nosotros' },
    { name: 'Servicios', href: '/#servicios' },
    { name: 'Proyectos', href: '/#proyectos' },
    { name: 'Contacto', href: '/#contacto' },
  ]

  const teamMembers = [
    { name: 'Marcelo Dev', role: 'Co-fundador / UI/UX Engineer', href: '/equipo/marcelo', color: 'text-cyan-400' },
    { name: 'Adrian Dev', role: 'Co-fundador / Fullstack Developer', href: '/equipo/adrian', color: 'text-blue-400' },
  ]

  return (
    <header 
      className={`fixed inset-x-0 z-[100] transition-all duration-500 px-4 md:px-8 py-4 ${
        scrolled ? 'bg-black/60 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image 
                src="/logo_oficial.jpeg" 
                alt="LOOFIDEV Logo Oficial" 
                width={50} 
                height={50} 
                className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-xl shadow-[0_0_20px_rgba(0,242,255,0.2)] group-hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-xl bg-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter hidden sm:block text-white">
              LOOFI<span className="text-cyan-400">DEV</span>
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 text-sm font-bold text-gray-300 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="relative group py-2"
            >
              <span className="hover:text-cyan-400 transition-colors uppercase tracking-[0.15em] text-[11px] font-bold">
                {link.name}
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          
          {/* Desktop Dropdown */}
          <div className="relative group py-2">
            <button className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors uppercase tracking-[0.15em] text-[11px] font-bold focus:outline-none">
              Equipo
              <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 bg-[#0a0a0b]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 overflow-hidden">
              <div className="p-2 flex flex-col">
                {teamMembers.map((member) => (
                  <a 
                    key={member.name}
                    href={member.href} 
                    className="px-4 py-3 hover:bg-white/5 rounded-xl transition-all flex flex-col group/item"
                  >
                    <span className={`text-white text-xs font-extrabold group-hover/item:${member.color} transition-colors`}>
                      {member.name}
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono mt-1 font-bold">
                      {member.role}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block px-6 py-2.5 bg-cyan-400/10 border border-cyan-400/50 rounded-full text-[11px] font-extrabold hover:bg-cyan-400 hover:text-black transition-all duration-300 uppercase tracking-widest text-cyan-400 shadow-[0_0_15px_rgba(0,242,255,0.1)] hover:shadow-[0_0_25px_rgba(0,242,255,0.3)]">
            INICIAR PROYECTO
          </button>

          {/* Hamburger Menu Icon */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors z-[110]"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] lg:hidden"
            />
            
            {/* Menu Content */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-screen w-[80%] max-w-sm bg-[#0a0a0b] border-l border-white/10 z-[105] lg:hidden flex flex-col p-8 pt-24 shadow-[-20px_0_50px_rgba(0,0,0,0.5)]"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-black text-white hover:text-cyan-400 transition-colors uppercase tracking-wider"
                  >
                    {link.name}
                  </a>
                ))}
                
                <div className="h-px bg-white/10 my-4" />
                
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mb-2">Nuestro Equipo</p>
                {teamMembers.map((member) => (
                  <a 
                    key={member.name}
                    href={member.href} 
                    onClick={() => setIsOpen(false)}
                    className="flex flex-col mb-4 group"
                  >
                    <span className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{member.name}</span>
                    <span className="text-[10px] text-gray-400 font-mono font-bold uppercase">{member.role}</span>
                  </a>
                ))}

                <button className="mt-8 px-6 py-4 bg-cyan-400 text-black rounded-2xl text-sm font-black uppercase tracking-widest shadow-[0_10px_30px_rgba(0,242,255,0.2)]">
                  INICIAR PROYECTO
                </button>
              </div>

              <div className="mt-auto pt-10">
                <p className="text-[10px] text-gray-600 font-mono">© 2026 LOOFIDEV. All rights reserved.</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
