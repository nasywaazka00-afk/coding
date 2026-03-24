import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Youtube, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
      <ThreeScene />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          
          {/* --- BAGIAN FOTO (Sisi Kiri) --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex-shrink-0 group"
          >
            {/* Efek Glow di belakang bulat */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
            
            {/* Container Bulat untuk Foto */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-2 border-white/20 shadow-2xl">
              <img
                src="Nasywa Pic.jpg" 
                alt="Nasywa Azka"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Floating Badge */}
            <motion.div 
              className="absolute -bottom-4 -right-4 glass px-4 py-2 rounded-lg shadow-xl border border-white/20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-xs font-bold text-primary">AVAILABLE FOR WORK 🚀</span>
            </motion.div>
          </motion.div>

          {/* --- BAGIAN TEKS (Sisi Kanan) --- */}
          <div className="text-center lg:text-left flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                👋 Selamat datang di portfolio saya
              </motion.span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-gradient">portofolio nasywaazka</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl lg:mx-0 mx-auto"
            >
              i'm Nasywa Azka Nalani a student of MAN 1 Banda Aceh, a beginner
             in the world of coding and currently learning new things in coding.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 mb-12"
            >
              <Button 
                size="lg" 
                className="rounded-full px-8 shadow-glow w-full sm:w-auto"
                onClick={() => {
                  const element = document.querySelector('#projects');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Lihat Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 w-full sm:w-auto"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Hubungi Saya
              </Button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex items-center justify-center lg:justify-start gap-6"
            >
              {[
                { icon: Github, href: 'https://github.com/nasywaazka00-afk/coding', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/nasywa-azka-00-afk', label: 'LinkedIn' },
                { icon: Youtube, href: 'https://www.youtube.com/', label: 'YouTube' },
                { icon: Instagram, href: 'https://www.instagram.com/nsywazka_n/?hl=en', label: 'Instagram' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-foreground" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full glass animate-float cursor-pointer"
        whileHover={{ scale: 1.1 }}
        aria-label="Scroll to About"
      >
        <ArrowDown className="h-5 w-5 text-primary" />
      </motion.button>
    </section>
  );
}