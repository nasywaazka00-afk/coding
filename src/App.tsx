import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Import komponen (Pastikan path file ini benar sesuai folder kamu)
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function App() {
  const { scrollYProgress } = useScroll();

  // Warna transisi Galaksi
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    ["#020617", "#1e1b4b", "#312e81", "#020617"]
  );

  return (
    <motion.div 
      style={{ backgroundColor }} 
      className="transition-colors duration-1000 ease-in-out min-h-screen relative"
    >
      {/* --- BACKGROUND LAYER (Nebula & Stars) --- */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[120px] opacity-60" />

        {/* Shooting Stars */}
        <div className="absolute inset-0 rotate-[30deg]">
          <div className="shooting-star" style={{ top: '10%', left: '15%', animationDelay: '0s' } as React.CSSProperties}></div>
          <div className="shooting-star" style={{ top: '40%', left: '30%', animationDelay: '2.5s' } as React.CSSProperties}></div>
          <div className="shooting-star" style={{ top: '65%', left: '10%', animationDelay: '5s' } as React.CSSProperties}></div>
          <div className="shooting-star" style={{ top: '20%', left: '70%', animationDelay: '1s' } as React.CSSProperties}></div>
          <div className="shooting-star" style={{ top: '80%', left: '60%', animationDelay: '3.5s' } as React.CSSProperties}></div>
        </div>

        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10">
        <HeroSection />
        <div className="space-y-0">
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </div>

        <footer className="py-12 text-center text-white/20 text-sm border-t border-white/5">
          <p>© {new Date().getFullYear()} Nasywa Azka • Created with Passion ✨</p>
        </footer>
      </div>
    </motion.div>
  );
}