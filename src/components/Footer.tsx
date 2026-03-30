import React from 'react'

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-black/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded"></div>
            <span className="font-bold">NEXUS TECH</span>
          </div>
          <p className="text-xs text-gray-600">© 2025 Nexus Technologies Global. Todos los derechos reservados.</p>
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
