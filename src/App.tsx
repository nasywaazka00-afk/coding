import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react'; // Library resmi Lottie

// Import komponen
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import CertificatesSection from './components/CertificatesSection';
import ContactSection from './components/ContactSection';
import AboutSection from './components/AboutSection';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  // Simulasi loading selama 2.5 detik
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Warna transisi Galaksi
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    ["#1e1b4b", "#312e81", "#4c1d95", "#020617"]
  );

  return (
    <>
      {/* 1. LOADING SCREEN LAYER */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020617]"
          >
            {/* Container Lottie */}
            <div className="w-64 h-64 md:w-80 md:h-80">
              <DotLottieReact
                src="https://lottie.host/59bfe57f-6ff5-4a83-b9ed-9aa444fc69e8/ow9szGL5L8.lottie"
                loop
                autoplay
              />
            </div>

            {/* Teks Animasi di bawah Lottie */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-4 flex flex-col items-center gap-2"
            >
              <h2 className="text-white font-medium tracking-[0.2em] text-sm uppercase">
                Preparing Galaxy
              </h2>
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                    className="w-1.5 h-1.5 bg-purple-500 rounded-full"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. MAIN WEBSITE LAYER */}
      <motion.div 
        style={{ backgroundColor }} 
        className="transition-colors duration-1000 ease-in-out min-h-screen relative"
      >
        {/* --- BACKGROUND LAYER --- */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-5%] left-[-5%] w-[80%] h-[80%] bg-purple-700/20 rounded-full blur-[130px] animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[60%] h-[60%] bg-blue-600/15 rounded-full blur-[100px]" />

          {/* Shooting Stars */}
          <div className="absolute inset-0 rotate-[35deg]">
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
    </>
  );
}