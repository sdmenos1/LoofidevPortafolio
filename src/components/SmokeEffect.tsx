"use client";

import React, { useEffect, useRef } from 'react';

class Spark {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  life: number;
  decay: number;

  constructor(x: number, y: number, color: string) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = (Math.random() - 0.5) * 8;
    this.speedY = (Math.random() - 0.5) * 8;
    this.color = color;
    this.life = 1.0;
    this.decay = Math.random() * 0.03 + 0.015;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.speedX *= 0.98;
    this.speedY *= 0.98;
    this.life -= this.decay;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.globalAlpha = Math.max(0, this.life);
    ctx.fillStyle = this.color;
    ctx.shadowBlur = 15;
    ctx.shadowColor = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

const SmokeEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    interface TrailPoint {
      x: number;
      y: number;
      life: number;
      color: string;
    }

    const trail: TrailPoint[] = [];
    const sparks: Spark[] = [];
    let colorIndex = 0;
    let targetColor: string | null = null;
    
    const PALETTE = [
      '#00f2ff', // neon-blue
      '#00ffcc', // neon-cyan
      '#ffb800', // gold-accent
    ];

    function resize() {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    }

    window.addEventListener('resize', resize);
    resize();

    const handleInput = (clientX: number, clientY: number) => {
      // Logic for color adaptation
      let baseColor;
      if (targetColor) {
        baseColor = targetColor;
      } else {
        colorIndex = (colorIndex + 0.05) % PALETTE.length;
        baseColor = PALETTE[Math.floor(colorIndex)];
      }
      
      trail.push({ 
        x: clientX, 
        y: clientY, 
        life: 1.0, 
        color: baseColor 
      });

      if (Math.random() > 0.4) {
        sparks.push(new Spark(clientX, clientY, baseColor));
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      handleInput(e.clientX, e.clientY);
      
      // Dynamic color detection on hover
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a'))) {
        const style = window.getComputedStyle(target.closest('button') || target.closest('a') || target);
        const color = style.color || style.backgroundColor;
        // If the color is not a standard gray/black/white, use it.
        if (color && !color.includes('0, 0, 0') && !color.includes('255, 255, 255')) {
          targetColor = color;
        } else {
          targetColor = null;
        }
      } else {
        targetColor = null;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        handleInput(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    let animationId: number;
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update trail
      for (let i = 0; i < trail.length; i++) {
        trail[i].life -= 0.025;
      }
      while (trail.length > 0 && trail[0].life <= 0) {
        trail.shift();
      }

      // Draw trail line
      if (trail.length > 1) {
        ctx.save();
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
        for (let i = 1; i < trail.length; i++) {
          const p1 = trail[i - 1];
          const p2 = trail[i];

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          
          ctx.lineWidth = p2.life * 6;
          ctx.strokeStyle = p2.color;
          ctx.globalAlpha = Math.max(0, p2.life * 0.8);
          ctx.shadowBlur = 20;
          ctx.shadowColor = p2.color;
          
          ctx.stroke();
        }
        ctx.restore();
      }

      // Draw sparks
      for (let i = 0; i < sparks.length; i++) {
        sparks[i].update();
        sparks[i].draw(ctx);
        if (sparks[i].life <= 0) {
          sparks.splice(i, 1);
          i--;
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="smoke-effect-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 100, // Above content but non-blocking
        mixBlendMode: 'screen', // Makes it vibrant against dark backgrounds
      }}
    />
  );
};

export default SmokeEffect;
