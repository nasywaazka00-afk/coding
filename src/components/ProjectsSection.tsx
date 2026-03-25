import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const projects = [
  {
    title: 'Personal Portfolio Web',
    description: 'Website portofolio interaktif yang dibangun dengan React dan Framer Motion untuk menampilkan karya secara profesional.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    image: '🌐',
    color: 'from-blue-500/20 to-cyan-500/20',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]', // Biru Glow
    github: '#',
    demo: '#',
  },
  {
    title: 'Desain Poster Digital Canva',
    description: 'Koleksi desain poster promosi dan event yang dibuat menggunakan Canva dengan prinsip tipografi dan tata letak yang menarik.',
    tags: ['Canva', 'Graphic Design', 'Branding'],
    image: '🎨',
    color: 'from-purple-500/20 to-pink-500/20',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]', // Ungu Glow
    isContent: true,
    demo: '#',
  },
  {
    title: 'Redesign UI Landing Page',
    description: 'Proyek eksplorasi desain antarmuka pengguna (UI) untuk meningkatkan pengalaman user pada website edukasi.',
    tags: ['Figma', 'UI/UX', 'Web Design'],
    image: '📱',
    color: 'from-orange-500/20 to-red-500/20',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]', // Orange Glow
    demo: '#',
  },
  {
    title: 'Social Media Content Kit',
    description: 'Paket konten Instagram (Feed & Stories) yang dirancang untuk meningkatkan engagement audience secara visual.',
    tags: ['Canva', 'Social Media', 'Content Creator'],
    image: '✨',
    color: 'from-green-500/20 to-teal-500/20',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]', // Hijau Glow
    isContent: true,
    youtube: '#',
  },
  {
    title: 'Sistem Informasi Sekolah',
    description: 'Website manajemen data sekolah sederhana untuk mempermudah administrasi siswa dan guru.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    image: '🏫',
    color: 'from-red-500/20 to-orange-500/20',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(239,68,68,0.4)]', // Merah Glow
    github: '#',
  },
  {
    title: 'Creative Presentation Slide',
    description: 'Desain slide presentasi yang estetik dan informatif untuk keperluan akademis maupun profesional.',
    tags: ['Canva', 'PPT', 'Visual Storytelling'],
    image: '📊',
    color: 'from-cyan-500/20 to-blue-500/20',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]', // Cyan Glow
    isContent: true,
    demo: '#',
  },
];

export default function ProjectsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="projects" className="py-20 md:py-32 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block uppercase tracking-tighter">My Works</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Projects & Karya Kreatif</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Main Carousel Wrapper */}
        <div className="relative max-w-7xl mx-auto group/carousel">
          
          <div className="overflow-hidden px-4" ref={emblaRef}>
            <div className="flex -ml-4 md:-ml-6">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4 md:pl-6"
                >
                  {/* CARD WITH HOVER EFFECT */}
                  <motion.div 
                    whileHover={{ y: -10 }} // Card naik saat hover
                    className={`group h-full p-6 glass rounded-3xl border border-white/10 transition-all duration-500 
                               hover:border-primary/50 ${project.glowColor} relative overflow-hidden`}
                  >
                    {/* Background Soft Glow (Muncul saat hover) */}
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 flex flex-col h-full">
                      {/* Icon/Image Placeholder */}
                      <div className={`aspect-video rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${project.color} 
                                      group-hover:scale-105 transition-transform duration-700`}>
                        <span className="text-7xl filter drop-shadow-lg">{project.image}</span>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          {project.isContent && (
                            <span className="px-2 py-0.5 text-[10px] rounded-full bg-white/10 text-primary border border-primary/20 font-bold uppercase">
                              Creative
                            </span>
                          )}
                          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                        </div>
                        
                        <p className="text-sm text-slate-400 mb-6 line-clamp-2">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 text-[10px] rounded-full bg-white/5 text-slate-300 border border-white/10">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-3 mt-auto">
                        {project.github && (
                          <Button variant="outline" size="sm" className="rounded-full border-white/10 text-white hover:bg-white/10" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" /> Code
                            </a>
                          </Button>
                        )}
                        {project.demo && (
                          <Button size="sm" className="rounded-full bg-primary hover:bg-primary/80 shadow-glow" asChild>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" /> Visit
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigasi Panah (Manual) */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity z-20 hover:bg-primary"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity z-20 hover:bg-primary"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}