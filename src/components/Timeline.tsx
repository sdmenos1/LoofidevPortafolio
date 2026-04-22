'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

// Tech Icons Collection
const Icons = {
  TypeScript: () => (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.102.156.254.304.455.444s.465.276.791.41c.326.132.711.272 1.155.421 1.057.355 1.863.76 2.419 1.214.556.453.834 1.053.834 1.799 0 .285-.051.574-.151.867a3.004 3.004 0 0 1-.491.854 3.73 3.73 0 0 1-.951.78c-.407.24-.925.434-1.556.582-.63.148-1.413.222-2.348.222-1.127 0-2.01-.135-2.65-.405a8.707 8.707 0 0 1-1.633-.873l1.373-1.928c.11.066.24.137.387.213.147.075.321.154.524.234.204.08.455.156.755.23.3.073.66.11 1.08.11.758 0 1.35-.116 1.774-.348.423-.231.635-.548.635-.95 0-.256-.051-.47-.154-.64-.103-.171-.258-.323-.465-.457-.207-.134-.48-.258-.816-.372-.336-.113-.74-.239-1.21-.378-.507-.153-.962-.338-1.365-.555a3.176 3.176 0 0 1-1.002-.857c-.255-.335-.382-.777-.382-1.325 0-.414.093-.8.278-1.156.185-.356.452-.663.803-.923a4.706 4.706 0 0 1 1.266-.66c.484-.176 1.042-.31 1.67-.404.629-.094 1.341-.141 2.138-.141zM12.172 11.412c0 1.061-.016 1.834-.047 2.32h.063c.125-.338.274-.69.445-1.055l1.383-3.048h2.72v10.125h-2.438V13.88c0-.623.016-1.332.047-2.126h-.063c-.156.425-.328.847-.516 1.266l-1.39 3.111h-2.36l-1.422-3.14c-.172-.392-.336-.786-.492-1.182h-.063c.016.516.032 1.24.047 2.172v5.77H5.625V9.75h2.828l1.71 3.516c.172.36.328.711.47 1.055h.062c.032-.234.047-.547.047-.938V9.75h1.43z"/></svg>
  ),
  NextJS: () => (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.862 18.95l-7.234-9.288v6.78H9.417V7.2H10.7l7.08 9.176V7.2h1.21v11.75h-1.128z"/></svg>
  ),
  React: () => (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="2"/><path d="M21 12c0 1-.3 1.9-1 2.8-1.5 2.1-4.2 3.6-7.5 4-1-.1-1.9-.1-2.9-.1-3.3-.4-6-1.9-7.5-3.9-.7-.9-1-1.8-1-2.8 0-1 .3-1.9 1-2.8 1.5-2.1 4.2-3.6 7.5-4 1-.1 1.9-.1 2.9.1 3.3.4 6 1.9 7.5 3.9.7.9 1 1.8 1 2.8z" fill="none" stroke="currentColor" strokeWidth="1.2"/><path d="M12 21c-1.1 0-2.1-.3-3-1-2.2-1.5-3.8-4.2-4.2-7.5-.1-1-.1-1.9.1-2.9.4-3.3 1.9-6 3.9-7.5.9-.7 1.8-1 2.8-1 1.1 0 2.1.3 3 1 2.2 1.5 3.8 4.2 4.2 7.5.1 1 .1 1.9-.1 2.9-.4 3.3-1.9 6-3.9 7.5-.9.7-1.8 1-2.8 1z" fill="none" stroke="currentColor" strokeWidth="1.2"/><path d="M18.4 18.4c-.8.8-1.7 1.2-2.7 1.4-2.6.4-5.6-.2-8.3-1.8-.8-.5-1.1-1.1-2.3-1.7-2.3-2.4-3.3-5.2-3.3-7.8.1-1.1.4-2 .9-2.8.8-.8 1.7-1.2 2.7-1.4 2.6-.4 5.6.2 8.3 1.8.8.5 1.6 1.1 2.3 1.7 2.3 2.4 3.5 5.2 3.3 7.8-.1 1.1-.4 2-.9 2.8z" fill="none" stroke="currentColor" strokeWidth="1.2"/></svg>
  ),
  Tailwind: () => (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>
  ),
  Astro: () => (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M19 2l-7 7-7-7v14l7 7 7-7V2z"/></svg>
  ),
  Svelte: () => (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.23 15.18l-3.32-1.92a2.022 2.022 0 0 0-2.02.01L14.4 15.2a1.996 1.996 0 0 1-2.01-.01L9.07 13.27a1.996 1.996 0 0 1-1.02-1.74V7.65c0-.77.44-1.48 1.14-1.81l3.32-1.92c.7-.33 1.52-.33 2.22 0l3.32 1.92c.7.33 1.14 1.04 1.14 1.81v3.88c0 .77-.44 1.48-1.14 1.81l-.66.38a.5.5 0 0 1-.5 0L12.75 11l-.01 5.92 4.14 2.39a1.996 1.996 0 0 0 2.01.01l3.32-1.92c.7-.33 1.14-1.04 1.14-1.81v-3.88c0-.77-.44-1.48-1.14-1.81zM1.14 7.65L4.46 5.73c.7-.33 1.52-.33 2.22 0l3.32 1.92c.7.33 1.14 1.04 1.14 1.81v3.88c0 .77-.44 1.48-1.14 1.81l-3.32 1.92a1.996 1.996 0 0 1-2.01-.01L1.14 13.27C.44 12.94 0 12.23 0 11.46V7.65c0-.77.44-1.48 1.14-1.81zm11.61 10.43l3.32 1.92c.7.33 1.52.33 2.22 0l3.32-1.92c.7-.33 1.14-1.04 1.14-1.81v-3.88c0-.77-.44-1.48-1.14-1.81l-3.32-1.92a1.996 1.996 0 0 0-2.01.01l-3.32 1.92c-.7.33-1.14 1.04-1.14 1.81v3.88z"/></svg>
  ),
  NodeJS: () => (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 15.5l-4-4 1.41-1.41L10.5 14.67l6.59-6.59L18.5 9.5l-8 8z"/></svg>
  ),
  PostgreSQL: () => (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-.5 15.5L7 13l1.41-1.41L11.5 14.67l5.59-5.59L18.5 10.5l-7 7z"/></svg>
  ),
  MySQL: () => (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-.5 15.5l-5-5 1.41-1.41L11.5 14.67l6.59-6.59L19.5 9.5l-8 8z"/></svg>
  ),
  AWS: () => (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
  ),
  Framer: () => (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h12l12 12H12L0 24V12h12L0 24z"/></svg>
  ),
  Chart: () => (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>
  ),
  Drizzle: () => (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9 13l3 3 3-3V8h-2v4h-2V8H9v5z"/></svg>
  ),
  Prisma: () => (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 19.74h20L12 2zm0 4.19l7.08 12.55H4.92L12 6.19z"/></svg>
  ),
  GoogleSheets: () => (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-2h2v2zm0-4H7v-2h2v2zm0-4H7V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/></svg>
  ),
  Meta: () => (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 18.25c-3.446 0-6.25-2.804-6.25-6.25S8.554 5.75 12 5.75c3.446 0 6.25 2.804 6.25 6.25s-2.804 6.25-6.25 6.25zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/></svg>
  ),
}

const techStyle = (name: string) => {
  switch(name) {
    case 'TypeScript': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
    case 'Next.js 15+':
    case 'Next.js': return 'text-white bg-white/10 border-white/20';
    case 'React':
    case 'React 18': return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20';
    case 'Tailwind': return 'text-sky-400 bg-sky-400/10 border-sky-400/20';
    case 'Astro': return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
    case 'Svelte': return 'text-orange-600 bg-orange-600/10 border-orange-600/20';
    case 'Node.js': return 'text-green-400 bg-green-400/10 border-green-400/20';
    case 'PostgreSQL': return 'text-blue-300 bg-blue-300/10 border-blue-300/20';
    case 'MySQL': return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
    case 'AWS RDS': return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
    case 'Framer Motion': return 'text-pink-400 bg-pink-400/10 border-pink-400/20';
    case 'GSAP': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
    case 'Chart.js': return 'text-rose-400 bg-rose-400/10 border-rose-400/20';
    case 'Drizzle ORM': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
    case 'Prisma ORM': return 'text-emerald-300 bg-emerald-300/10 border-emerald-300/20';
    case 'Google Sheets': return 'text-green-500 bg-green-500/10 border-green-500/20';
    case 'Meta API':
    case 'Meta': return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
    default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
  }
}

const techIcon = (name: string) => {
  if (name.includes('TypeScript')) return <Icons.TypeScript />;
  if (name.includes('Next.js')) return <Icons.NextJS />;
  if (name.includes('React')) return <Icons.React />;
  if (name.includes('Tailwind')) return <Icons.Tailwind />;
  if (name.includes('Astro')) return <Icons.Astro />;
  if (name.includes('Svelte')) return <Icons.Svelte />;
  if (name.includes('Node.js')) return <Icons.NodeJS />;
  if (name.includes('PostgreSQL')) return <Icons.PostgreSQL />;
  if (name.includes('MySQL')) return <Icons.MySQL />;
  if (name.includes('AWS')) return <Icons.AWS />;
  if (name.includes('Motion')) return <Icons.Framer />;
  if (name.includes('Chart')) return <Icons.Chart />;
  if (name.includes('Drizzle')) return <Icons.Drizzle />;
  if (name.includes('Prisma')) return <Icons.Prisma />;
  if (name.includes('Google Sheets')) return <Icons.GoogleSheets />;
  if (name.includes('Meta')) return <Icons.Meta />;
  return null;
}

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  const [topBeautyTab, setTopBeautyTab] = React.useState(0);
  const topBeautyImages = [
    { src: '/proyectos/top_beauty_caja.png', label: 'Caja' },
    { src: '/proyectos/top_beauty_chatbot.png', label: 'Citas' },
    { src: '/proyectos/top_beauty_asesoras.png', label: 'Asesoras' },
    { src: '/proyectos/top_beauty_clientes.png', label: 'Clientes' },
    { src: '/proyectos/top_beauty_reportes.png', label: 'Reportes' },
    { src: '/proyectos/top_beauty_marketing.png', label: 'Marketing' },
  ];

  const [chatbotTab, setChatbotTab] = React.useState(0);
  const chatbotImages = [
    { src: '/proyectos/chatbot_meta_1.png', label: 'Inicio' },
    { src: '/proyectos/chatbot_meta_2.png', label: 'Selección' },
    { src: '/proyectos/chatbot_meta_3.png', label: 'Confirmación' },
    { src: '/proyectos/chatbot_meta_4.png', label: 'Éxito' },
  ];

  const Badge = ({ name }: { name: string }) => (
    <span className={`flex items-center gap-1.5 text-[10px] font-bold px-3 py-1.5 rounded-xl border backdrop-blur-md transition-all hover:scale-105 ${techStyle(name)}`}>
      {techIcon(name)}
      {name}
    </span>
  )

  return (
    <section id="proyectos" className="py-24 bg-black relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-extrabold mb-4">Nuestros Proyectos</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-gray-500 font-medium italic">Cronología de soluciones tecnológicas de alto impacto.</motion.p>
        </div>

        <div className="relative py-10" ref={containerRef}>
          <div className="w-[2px] bg-white/10 absolute left-1/2 -translate-x-1/2 h-full" />
          <motion.div style={{ scaleY }} className="w-[2px] bg-gradient-to-b from-orange-400 via-blue-500 to-violet-500 absolute left-1/2 -translate-x-1/2 h-full origin-top shadow-[0_0_15px_#fb923c]" />

          {/* 1. La Panizzeria (2024) - LEFT */}
          <div className="relative flex justify-between items-center w-full mb-32 md:flex-row flex-col gap-8">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} whileHover={{ scale: 1.03, y: -10 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="w-full md:w-[45%]">
              <div className="p-6 md:p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-orange-500/50 transition-all group shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-2 block font-mono">2024 • FOOD & EXPERIENCE</span>
                      <h4 className="text-3xl font-extrabold text-white">La Panizzeria</h4>
                    </div>
                    <div className="bg-orange-500/10 border border-orange-500/20 p-2.5 rounded-xl"><Icons.Astro /></div>
                  </div>
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
                    <Image src="/proyectos/panizzeria_imagen.jpeg" alt="Panizzeria" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed font-medium">Plataforma gastronómica de alto rendimiento. Optimización extrema con Astro e interacciones refinadas.</p>
                  <div className="flex flex-wrap gap-2.5">
                    {['Astro', 'GSAP', 'MySQL', 'AWS RDS'].map(t => <Badge key={t} name={t} />)}
                  </div>
                  <div className="pt-2">
                    <a href="https://panizzeria-astro.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 bg-orange-500/10 hover:bg-orange-500 border border-orange-500/30 text-orange-400 hover:text-black font-extrabold rounded-full transition-all">VER PROYECTO</a>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-[#0a0a0b] border-4 border-white rounded-full z-10 shadow-[0_0_20px_rgba(251,146,60,0.5)]"></div>
            <div className="hidden md:block w-[45%]"></div>
          </div>


          {/* 2. CONEIMERA 2025 (2025) - RIGHT */}
          <div className="relative flex justify-between items-center w-full mb-32 flex-col md:flex-row-reverse gap-8">
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} whileHover={{ scale: 1.03, y: -10 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="w-full md:w-[45%]">
              <div className="p-6 md:p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-emerald-400/50 transition-all group shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                <div className="text-right md:text-left space-y-6">
                  <div className="flex justify-between items-start md:flex-row-reverse">
                    <div>
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2 block font-mono">2025 • ACADEMIC & TECHNOLOGY</span>
                      <h4 className="text-3xl font-extrabold text-white">CONEIMERA 2025</h4>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/20 p-2.5 rounded-xl"><Icons.Svelte /></div>
                  </div>
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
                    <Image src="/proyectos/coneimera_imagen.jpeg" alt="CONEIMERA" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed font-medium">Plataforma oficial para el Congreso Nacional de Estudiantes de Ingeniería. Gestión de eventos y alta concurrencia.</p>
                  <div className="flex flex-wrap gap-2.5 justify-end md:justify-start">
                    {['Astro', 'Svelte', 'Tailwind'].map(t => <Badge key={t} name={t} />)}
                  </div>
                  <div className="pt-2 flex justify-end md:justify-start">
                    <a href="https://coneimera.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-500/10 hover:bg-emerald-500 border border-emerald-500/30 text-emerald-400 hover:text-black font-extrabold rounded-full transition-all">VER PROYECTO</a>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-[#0a0a0b] border-4 border-white rounded-full z-10 shadow-[0_0_20px_rgba(52,211,153,0.5)]"></div>
            <div className="hidden md:block w-[45%]"></div>
          </div>

          {/* 3. Multi-Tenant BI & CRM (2026) - LEFT */}
          <div className="relative flex justify-between items-center w-full mb-32 md:flex-row flex-col gap-8">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} whileHover={{ scale: 1.03, y: -10 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="w-full md:w-[45%]">
              <div className="p-6 md:p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-blue-500/50 transition-all group shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2 block font-mono">2026 • BUSINESS INTELLIGENCE</span>
                      <h4 className="text-3xl font-extrabold text-white">Multi-Tenant BI & CRM</h4>
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500/20 p-2.5 rounded-xl"><Icons.React /></div>
                  </div>
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
                    <Image src="/proyectos/crm_imagen.jpeg" alt="CRM" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed font-medium">Plataforma BI Multi-Tenant. Centraliza leads y automatiza ROAS/CPA con motor ETL masivo.</p>
                  <div className="flex flex-wrap gap-2.5">
                    {['React', 'Node.js', 'PostgreSQL', 'AWS RDS', 'Chart.js'].map(t => <Badge key={t} name={t} />)}
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-[#0a0a0b] border-4 border-white rounded-full z-10 shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
            <div className="hidden md:block w-[45%]"></div>
          </div>

          {/* 4. Falcon Towers System (2026) - RIGHT */}
          <div className="relative flex justify-between items-center w-full mb-32 flex-col md:flex-row-reverse gap-8">
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} whileHover={{ scale: 1.03, y: -10 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="w-full md:w-[45%]">
              <div className="p-6 md:p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-violet-500/50 transition-all group shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                <div className="text-right md:text-left space-y-6">
                  <div className="flex justify-between items-start md:flex-row-reverse">
                    <div>
                      <span className="text-xs font-bold text-violet-400 uppercase tracking-widest mb-2 block font-mono">2026 • TELECOM & ASSET MANAGEMENT</span>
                      <h4 className="text-3xl font-extrabold text-white">Gestor de Reportes de Torres de Telecomunicaciones</h4>
                    </div>
                    <div className="bg-violet-500/10 border border-violet-500/20 p-2.5 rounded-xl"><Icons.NodeJS /></div>
                  </div>
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
                    <Image src="/proyectos/telecomunicaciones_imagen.jpeg" alt="Falcon" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed font-medium">Gestión de activos de telecomunicaciones. Control operativo, dashboards en tiempo real y geolocalización.</p>
                  <div className="flex flex-wrap gap-2.5 justify-end md:justify-start">
                    {['React 18', 'Node.js', 'MySQL', 'Drizzle ORM', 'TanStack Query'].map(t => <Badge key={t} name={t} />)}
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-[#0a0a0b] border-4 border-white rounded-full z-10 shadow-[0_0_20px_rgba(139,92,246,0.5)]"></div>
            <div className="hidden md:block w-[45%]"></div>
          </div>

          {/* 5. JKO Asfaltos (2026) - LEFT */}
          <div className="relative flex justify-between items-center w-full mb-32 md:flex-row flex-col gap-8">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} whileHover={{ scale: 1.03, y: -10 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="w-full md:w-[45%]">
              <div className="p-6 md:p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-cyan-400/50 transition-all group shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2 block font-mono">2026 • INFRAESTRUCTURA PREMIUM</span>
                      <h4 className="text-3xl font-extrabold text-white">JKO Asfaltos</h4>
                    </div>
                    <div className="bg-cyan-500/10 border border-cyan-500/20 p-2.5 rounded-xl"><Icons.TypeScript /></div>
                  </div>
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
                    <Image src="/proyectos/asfalto_imagen.jpeg" alt="JKO" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed font-medium">Landing Page de alto impacto para logística de asfaltos. Estética "Apple" y optimización extrema.</p>
                  <div className="flex flex-wrap gap-2.5">
                    {['Next.js 15+', 'TypeScript', 'Tailwind', 'GSAP'].map(t => <Badge key={t} name={t} />)}
                  </div>
                  <div className="pt-2">
                    <a href="https://jko-asfaltos.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 bg-cyan-500/10 hover:bg-cyan-500 border border-cyan-500/30 text-cyan-400 hover:text-black font-extrabold rounded-full transition-all">VER PROYECTO</a>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-[#0a0a0b] border-4 border-white rounded-full z-10 shadow-[0_0_20px_rgba(34,211,238,0.5)]"></div>
            <div className="hidden md:block w-[45%]"></div>
          </div>

          {/* 6. Sistemas de caja Top Beauty (2026) - RIGHT */}
          <div className="relative flex justify-between items-center w-full mb-32 flex-col md:flex-row-reverse gap-8">
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} whileHover={{ scale: 1.03, y: -10 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="w-full md:w-[45%]">
              <div className="p-6 md:p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-blue-400/50 transition-all group shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                <div className="text-right md:text-left space-y-6">
                  <div className="flex justify-between items-start md:flex-row-reverse">
                    <div>
                      <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2 block font-mono">2026 • BUSINESS MANAGEMENT & AUTOMATION</span>
                      <h4 className="text-3xl font-extrabold text-white">Top Beauty Box System</h4>
                    </div>
                  <div className="bg-blue-500/10 border border-blue-500/20 p-2.5 rounded-xl"><Icons.MySQL /></div>
                  </div>
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group-project bg-black">
                    <AnimatePresence>
                      <motion.div
                        key={topBeautyTab}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="absolute inset-0"
                      >
                        <Image 
                          src={topBeautyImages[topBeautyTab].src} 
                          alt={`Top Beauty ${topBeautyImages[topBeautyTab].label}`} 
                          fill 
                          className="object-cover" 
                        />
                      </motion.div>
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 pointer-events-none" />
                    
                    {/* Visualizer Tabs */}
                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5 justify-end md:justify-start">
                      {topBeautyImages.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.preventDefault();
                            setTopBeautyTab(idx);
                          }}
                          className={`px-3 py-1.5 text-[9px] font-bold rounded-lg border transition-all ${
                            topBeautyTab === idx 
                              ? 'bg-blue-500 text-white border-blue-400' 
                              : 'bg-black/50 text-gray-400 border-white/10 hover:bg-black/70'
                          }`}
                        >
                          {img.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed font-medium">Sistema integral para Top Beauty que centraliza citas vía chatbot, gestión de asesoras, clientes y logística. Control administrativo total con integraciones en AWS y Google Sheets.</p>
                  <div className="flex flex-wrap gap-2.5 justify-end md:justify-start">
                    {['Next.js', 'MySQL', 'Prisma ORM', 'AWS', 'Google Sheets'].map(t => <Badge key={t} name={t} />)}
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-[#0a0a0b] border-4 border-white rounded-full z-10 shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
            <div className="hidden md:block w-[45%]"></div>
          </div>

          {/* 7. Chatbot Automatizado Meta (2026) - LEFT */}
          <div className="relative flex justify-between items-center w-full mb-32 md:flex-row flex-col gap-8">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} whileHover={{ scale: 1.03, y: -10 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="w-full md:w-[45%]">
              <div className="p-6 md:p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-green-500/50 transition-all group shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-bold text-green-400 uppercase tracking-widest mb-2 block font-mono">2026 • AI & AUTOMATION</span>
                      <h4 className="text-3xl font-extrabold text-white">WhatsApp AI Chatbot</h4>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/20 p-2.5 rounded-xl"><Icons.Meta /></div>
                  </div>
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group-project bg-black">
                    <AnimatePresence>
                      <motion.div
                        key={chatbotTab}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="absolute inset-0"
                      >
                        <Image 
                          src={chatbotImages[chatbotTab].src} 
                          alt={`Chatbot ${chatbotImages[chatbotTab].label}`} 
                          fill 
                          className="object-cover" 
                        />
                      </motion.div>
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 pointer-events-none" />
                    
                    {/* Visualizer Tabs */}
                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5">
                      {chatbotImages.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.preventDefault();
                            setChatbotTab(idx);
                          }}
                          className={`px-3 py-1.5 text-[9px] font-bold rounded-lg border transition-all ${
                            chatbotTab === idx 
                              ? 'bg-green-500 text-white border-green-400' 
                              : 'bg-black/50 text-gray-400 border-white/10 hover:bg-black/70'
                          }`}
                        >
                          {img.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed font-medium">Asistente inteligente de WhatsApp integrado con Meta Cloud API. Automatiza la toma de citas, consulta de servicios y sincronización inmediata con Google Sheets.</p>
                  <div className="flex flex-wrap gap-2.5">
                    {['Node.js', 'TypeScript', 'Meta API', 'Google Sheets'].map(t => <Badge key={t} name={t} />)}
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-[#0a0a0b] border-4 border-white rounded-full z-10 shadow-[0_0_20px_rgba(34,197,94,0.5)]"></div>
            <div className="hidden md:block w-[45%]"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
