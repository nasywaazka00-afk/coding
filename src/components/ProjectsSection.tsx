import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const projects = [
  {
    title: 'Personal Portfolio Web',
    description: 'Website portofolio interaktif dengan React dan Framer Motion untuk menampilkan karya secara profesional.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: '🌐',
    color: 'from-blue-500/20 to-cyan-500/20',
    glow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]',
    github: '#',
    demo: '#',
  },
  {
    title: 'Desain Poster Canva',
    description: 'Koleksi desain poster promosi yang dibuat menggunakan Canva dengan prinsip tipografi yang menarik.',
    tags: ['Canva', 'Graphic Design'],
    image: '🎨',
    color: 'from-purple-500/20 to-pink-500/20',
    glow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]',
    isContent: true,
    demo: '#',
  },
  {
    title: 'Redesign UI Landing Page',
    description: 'Eksplorasi desain antarmuka pengguna (UI) untuk meningkatkan pengalaman user pada web edukasi.',
    tags: ['Figma', 'UI/UX'],
    image: '📱',
    color: 'from-orange-500/20 to-red-500/20',
    glow: 'hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]',
    demo: '#',
  },
  {
    title: 'Social Media Kit',
    description: 'Paket konten Instagram yang dirancang untuk meningkatkan engagement secara visual.',
    tags: ['Canva', 'Social Media'],
    image: '✨',
    color: 'from-green-500/20 to-teal-500/20',
    glow: 'hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]',
    isContent: true,
    youtube: '#',
  }
];

export default function ProjectsSection() {
  // Konfigurasi Carousel: Loop Aktif & Autoplay 3 detik
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="projects" className="py-20 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Judul Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Projects & Karya</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Wrapper Carousel */}
        <div className="relative group">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {projects.map((project, index) => (
                <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 py-4">
                  
                  {/* CARD UTAMA */}
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    className={`h-full p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md 
                               transition-all duration-500 cursor-grab active:cursor-grabbing
                               ${project.glow} hover:border-primary/50 group/card`}
                  >
                    {/* Header Image (Emoji) */}
                    <div className={`aspect-video rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${project.color}`}>
                      <span className="text-7xl group-hover/card:scale-110 transition-transform duration-500">
                        {project.image}
                      </span>
                    </div>

                    {/* Konten Teks */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        {project.isContent && (
                          <span className="px-2 py-0.5 text-[10px] bg-primary/20 text-primary rounded-full font-bold uppercase">Creative</span>
                        )}
                        <h3 className="text-xl font-bold text-white group-hover/card:text-primary transition-colors">{project.title}</h3>
                      </div>
                      <p className="text-sm text-slate-400 line-clamp-2">{project.description}</p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-2 py-1 text-[10px] bg-white/5 border border-white/10 text-slate-300 rounded-md">{tag}</span>
                        ))}
                      </div>
                    </div>

                    {/* Link Buttons */}
                    <div className="flex gap-2 pt-6 mt-auto">
                      {project.github && (
                        <Button variant="outline" size="sm" className="rounded-full border-white/10 text-white" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer"><Github className="h-4 w-4 mr-1"/> Code</a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button size="sm" className="rounded-full bg-primary hover:bg-primary/80" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer"><ExternalLink className="h-4 w-4 mr-1"/> Visit</a>
                        </Button>
                      )}
                    </div>
                  </motion.div>

                </div>
              ))}
            </div>
          </div>

          {/* Navigasi Panah Manual */}
          <button onClick={scrollPrev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-20">
            <ChevronLeft size={24} />
          </button>
          <button onClick={scrollNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-20">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}