import React from 'react'

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

        <div className="grid md:grid-cols-2 gap-8">
          {/* Service 1 */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all group">
            <div className="mb-6 h-32 flex items-center justify-center relative overflow-hidden bg-black/40 rounded-xl">
              <svg width="200" height="80" viewBox="0 0 200 80" className="w-full">
                <path d="M0 40 Q 50 10, 100 40 T 200 40" fill="none" stroke="#00f2ff" strokeWidth="2" className="opacity-50">
                  <animate attributeName="d" values="M0 40 Q 50 10, 100 40 T 200 40; M0 40 Q 50 70, 100 40 T 200 40; M0 40 Q 50 10, 100 40 T 200 40" dur="5s" repeatCount="indefinite" />
                </path>
                <circle cx="50" cy="25" r="3" fill="#00f2ff" className="data-dot" />
                <circle cx="150" cy="45" r="3" fill="#ffb800" className="data-dot" style={{ animationDelay: '1s' }} />
                <rect x="90" y="30" width="20" height="2" fill="#00f2ff" opacity="0.5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">Desarrollo Web Enterprise</h3>
            <p className="text-gray-400 text-sm">Sitios web de alto rendimiento diseñados para la conversión y la seguridad, utilizando las últimas tecnologías de stack moderno.</p>
          </div>

          {/* Service 2 */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all group">
            <div className="mb-6 h-32 flex items-center justify-center relative overflow-hidden bg-black/40 rounded-xl">
              <svg width="200" height="80" viewBox="0 0 200 80">
                <rect x="40" y="20" width="30" height="30" rx="4" fill="none" stroke="#00f2ff" strokeWidth="2" />
                <rect x="130" y="20" width="30" height="30" rx="4" fill="none" stroke="#ffb800" strokeWidth="2" />
                <line x1="70" y1="35" x2="130" y2="35" stroke="white" strokeDasharray="4" opacity="0.3" />
                <circle cx="100" cy="35" r="4" fill="#00f2ff">
                  <animate attributeName="cx" from="70" to="130" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">Optimización de Procesos</h3>
            <p className="text-gray-400 text-sm">Automatización de flujos de trabajo críticos que reducen costos operativos y eliminan cuellos de botella mediante IA aplicada.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
