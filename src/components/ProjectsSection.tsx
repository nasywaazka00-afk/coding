import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const projects = [
  {
    title: 'Personal Portfolio Web',
    description: 'Website portofolio interaktif dengan React dan Framer Motion.',
    tags: ['React', 'Tailwind'],
    image: '🌐',
    color: 'from-blue-500/20 to-cyan-500/20',
    glow: 'group-hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]',
    github: '#',
    demo: '#',
  },
  {
    title: 'Desain Poster Canva',
    description: 'Koleksi desain poster promosi yang dibuat menggunakan Canva.',
    tags: ['Canva', 'Design'],
    image: '🎨',
    color: 'from-purple-500/20 to-pink-500/20',
    glow: 'group-hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]',
    isContent: true,
    demo: '#',
  },
  // Tambahkan data lainnya di sini...
];

export default function ProjectsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="projects" className="py-20 bg-transparent relative z-20">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full" />
        </div>

        <div className="relative group/nav max-w-7xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {projects.map((project, index) => (
                <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 py-6">
                  
                  {/* CARD DENGAN HOVER */}
                  <motion.div
                    whileHover={{ 
                      y: -15, 
                      scale: 1.02,
                      transition: { duration: 0.3 } 
                    }}
                    className={`group relative h-full p-8 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl 
                               transition-all duration-300 cursor-pointer overflow-hidden
                               ${project.glow} hover:border-purple-500/50`}
                  >
                    {/* Background Light Effect on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10 flex flex-col h-full">
                      <div className={`aspect-video rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${project.color}`}>
                        <span className="text-7xl group-hover:scale-110 transition-transform duration-500">{project.image}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-6 flex-1">{project.description}</p>
                      
                      <div className="flex gap-3 pt-4">
                        <Button size="sm" className="rounded-full bg-purple-600 hover:bg-purple-500 shadow-lg shadow-purple-500/20">
                          Lihat Karya
                        </Button>
                      </div>
                    </div>
                  </motion.div>

                </div>
              ))}
            </div>
          </div>

          {/* Navigasi Manual */}
          <button onClick={scrollPrev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-purple-600 transition-all opacity-0 group-hover/nav:opacity-100">
            <ChevronLeft size={28} />
          </button>
          <button onClick={scrollNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-purple-600 transition-all opacity-0 group-hover/nav:opacity-100">
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
}