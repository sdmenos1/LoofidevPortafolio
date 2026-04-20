import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-black/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image 
              src="/logo_oficial.jpeg" 
              alt="LOOFIDEV Logo Oficial" 
              width={32} 
              height={32} 
              className="w-8 h-8 object-contain rounded-lg"
            />
            <span className="font-bold text-xl">LOOFIDEV</span>
          </div>
          <p className="text-xs text-gray-600">© 2024 LOOFIDEV Software & Engineering. Todos los derechos reservados.</p>
        </div>
        <div className="flex gap-8 text-xs font-mono text-gray-500">
          <a href="#" className="hover:text-white transition-colors">POLÍTICA DE PRIVACIDAD</a>
          <a href="#" className="hover:text-white transition-colors">TÉRMINOS DE SERVICIO</a>
          <a href="#" className="hover:text-white transition-colors">SLA</a>
        </div>
      </div>
    </footer>
  )
}
