import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Import komponen (Pastikan path file ini benar sesuai folder kamu)
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import CertificatesSection from './components/CertificatesSection';
import ContactSection from './components/ContactSection';
import AboutSection from './components/AboutSection';

export default function App() {
  const { scrollYProgress } = useScroll();

  // Warna transisi Galaksi
 const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    ["#1e1b4b", "#312e81", "#4c1d95", "#020617"] 
    // Dimulai dari Indigo (Ungu Gelap) -> Violet -> Hitam
  );

  return (
   <motion.div 
      style={{ backgroundColor }} 
      className="transition-colors duration-1000 ease-in-out min-h-screen relative"
    >
      {/* --- BACKGROUND LAYER --- */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        
        {/* Nebula Utama (Ungu Lebih Kuat) */}
        <div className="absolute top-[-5%] left-[-5%] w-[80%] h-[80%] bg-purple-700/20 rounded-full blur-[130px] animate-pulse" />
        
        {/* Cahaya Tambahan (Biru Elektrik) */}
        <div className="absolute bottom-0 right-0 w-[60%] h-[60%] bg-blue-600/15 rounded-full blur-[100px]" />

        {/* Shooting Stars Container */}
        <div className="absolute inset-0 rotate-[35deg]">
          <div className="shooting-star" style={{ top: '10%', left: '15%', animationDelay: '0s' } as React.CSSProperties}></div>
          <div className="shooting-star" style={{ top: '40%', left: '30%', animationDelay: '2.5s' } as React.CSSProperties}></div>
          <div className="shooting-star" style={{ top: '65%', left: '10%', animationDelay: '5s' } as React.CSSProperties}></div>
          <div className="shooting-star" style={{ top: '20%', left: '70%', animationDelay: '1s' } as React.CSSProperties}></div>
          <div className="shooting-star" style={{ top: '80%', left: '60%', animationDelay: '3.5s' } as React.CSSProperties}></div>
        </div>

        {/* Efek Tekstur Stardust */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10">
        <HeroSection />
        <div className="space-y-0">
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <CertificatesSection />
          <ContactSection />
        </div>

        <footer className="py-12 text-center text-white/20 text-sm border-t border-white/5">
          <p>© {new Date().getFullYear()} Nasywa Azka • Created with love ✨</p>
        </footer>
      </div>
    </motion.div>
  );
}