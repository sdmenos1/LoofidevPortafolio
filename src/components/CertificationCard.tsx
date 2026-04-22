'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { createPortal } from 'react-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TechTagProps {
  children: React.ReactNode
  colorClass?: string
}

export const TechTag = ({ children, colorClass = "text-cyan-400" }: TechTagProps) => (
  <span className={`inline-flex items-center gap-1.5 font-mono text-xs md:text-sm mx-1 px-2.5 py-1 rounded-md bg-[#ffffff0a] border border-white/10 ${colorClass} shadow-sm align-baseline hover:bg-white/10 transition-colors cursor-default`}>
    {children}
  </span>
);

interface CertificationCardProps {
  title: string
  issuer: string
  description: string
  details?: { label: string; value: string | React.ReactNode }[]
  imageSrc: string
  isVerified?: boolean
  issuerIcon?: React.ReactNode
  verifyUrl?: string
}

export default function CertificationCard({
  title,
  issuer,
  description,
  details,
  imageSrc,
  isVerified = false,
  issuerIcon,
  verifyUrl,
}: CertificationCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Smooth Entrance Animation
    if (cardRef.current) {
      gsap.fromTo(cardRef.current,
        { 
          opacity: 0, 
          y: 40, 
          scale: 0.96,
          filter: "blur(4px)" 
        },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          filter: "blur(0px)",
          duration: 1.2, 
          ease: "power4.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  return (
    <>
      <div 
        ref={cardRef}
        className="bg-[#111113]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 md:p-10 shadow-2xl overflow-hidden relative group transition-all duration-700 hover:border-cyan-500/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(6,182,212,0.05)] mb-10 will-change-transform"
      >
        {/* Background glow animated on hover */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-cyan-500/10 group-hover:scale-110 transition-all duration-1000" />
        
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-center relative z-10">
          {/* Left Content */}
          <div className="group-hover:translate-x-1 transition-transform duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-[10px] md:text-xs font-bold tracking-widest uppercase group-hover:bg-white/10 transition-colors">
                {issuerIcon}
                {issuer}
              </div>
              {isVerified && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[9px] md:text-[10px] font-black uppercase tracking-tighter shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                  <svg className="w-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.64.304 1.24.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Verified
                </div>
              )}
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-cyan-50 transition-colors">
              {title}
            </h3>
            
            <div className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
              <p dangerouslySetInnerHTML={{ __html: description }} />
              {verifyUrl && (
                <a 
                  href={verifyUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 mt-4 text-cyan-400 hover:text-cyan-300 font-bold transition-colors group/link"
                >
                  Verificar Credencial
                  <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              )}
            </div>

            <div className="space-y-4">
              {details?.map((detail, idx) => (
                <div key={idx} className="flex gap-4 items-start group/detail">
                  <span className="text-gray-550 text-[10px] md:text-xs font-mono uppercase tracking-wider w-24 mt-1 group-hover/detail:text-gray-400 transition-colors">{detail.label}:</span>
                  <div className="flex-1">
                    {typeof detail.value === 'string' ? (
                      <span className="text-gray-300 text-sm group-hover/detail:text-white transition-colors">{detail.value}</span>
                    ) : (
                      detail.value
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div 
            className="relative group/img overflow-hidden rounded-[1.5rem] border border-white/10 aspect-[4/3] bg-black/50 shadow-inner cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity z-10 duration-500 mix-blend-overlay"></div>
            <Image 
              src={imageSrc} 
              alt={title} 
              fill
              className="object-cover object-top opacity-80 group-hover/img:opacity-110 group-hover/img:scale-105 transition-all duration-1000 ease-out" 
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 z-20">
              <div className="bg-black/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest translate-y-4 group-hover/img:translate-y-0 transition-transform duration-500">
                Ver Certificado Completo
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Portal */}
      {isModalOpen && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />
          
          <button 
            className="absolute top-6 right-6 z-[10001] w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsModalOpen(false)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div 
            className="relative w-full max-w-6xl aspect-[4/3] z-[10000] animate-in zoom-in-95 duration-300 shadow-2xl rounded-2xl overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src={imageSrc} 
              alt={`Full ${title}`} 
              fill
              className="object-contain bg-black"
              priority
            />
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
