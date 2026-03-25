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
    github: '#',
    demo: '#',
  },
  {
    title: 'Desain Poster Digital Canva',
    description: 'Koleksi desain poster promosi dan event yang dibuat menggunakan Canva dengan prinsip tipografi dan tata letak yang menarik.',
    tags: ['Canva', 'Graphic Design', 'Branding'],
    image: '🎨',
    color: 'from-purple-500/20 to-pink-500/20',
    isContent: true,
    demo: '#',
  },
  {
    title: 'Redesign UI Landing Page',
    description: 'Proyek eksplorasi desain antarmuka pengguna (UI) untuk meningkatkan pengalaman user pada website edukasi.',
    tags: ['Figma', 'UI/UX', 'Web Design'],
    image: '📱',
    color: 'from-orange-500/20 to-red-500/20',
    demo: '#',
  },
  {
    title: 'Social Media Content Kit',
    description: 'Paket konten Instagram (Feed & Stories) yang dirancang untuk meningkatkan engagement audience secara visual.',
    tags: ['Canva', 'Social Media', 'Content Creator'],
    image: '✨',
    color: 'from-green-500/20 to-teal-500/20',
    isContent: true,
    youtube: '#',
  },
  {
    title: 'Sistem Informasi Sekolah',
    description: 'Website manajemen data sekolah sederhana untuk mempermudah administrasi siswa dan guru.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    image: '🏫',
    color: 'from-red-500/20 to-orange-500/20',
    github: '#',
  },
  {
    title: 'Creative Presentation Slide',
    description: 'Desain slide presentasi yang estetik dan informatif untuk keperluan akademis maupun profesional.',
    tags: ['Canva', 'PPT', 'Visual Storytelling'],
    image: '📊',
    color: 'from-cyan-500/20 to-blue-500/20',
    isContent: true,
    demo: '#',
  },
];

export default function ProjectsSection() {
  // Konfigurasi Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', skipSnaps: false },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="projects" className="py-20 md:py-32 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium mb-2 block uppercase tracking-wider text-sm">Portfolio</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-white">
            Projects & Karya Kreatif
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto group">
          
          {/* Viewport Embla */}
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4 md:pl-6"
                >
                  <div className="h-full p-6 glass rounded-2xl border border-white/10 shadow-xl transition-all duration-500 hover:border-primary/30 flex flex-col justify-between">
                    <div>
                      {/* Gradient Image Header */}
                      <div className={`aspect-video rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${project.color}`}>
                        <span className="text-6xl">{project.image}</span>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          {project.isContent && (
                            <span className="px-2 py-0.5 text-[10px] uppercase rounded-full bg-primary/20 text-primary font-bold">
                              Creative
                            </span>
                          )}
                          <h3 className="font-display text-lg font-bold text-white">
                            {project.title}
                          </h3>
                        </div>
                        
                        <p className="text-sm text-slate-400 line-clamp-2">
                          {project.description}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 py-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 text-[10px] rounded bg-white/5 text-slate-300 border border-white/5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-4 mt-auto">
                      {project.github && (
                        <Button variant="outline" size="sm" className="rounded-full bg-transparent border-white/10 text-white hover:bg-white/5" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-3.5 w-3.5 mr-1" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button size="sm" className="rounded-full shadow-glow" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3.5 w-3.5 mr-1" />
                            Visit
                          </a>
                        </Button>
                      )}
                      {project.youtube && (
                        <Button size="sm" variant="secondary" className="rounded-full" asChild>
                          <a href={project.youtube} target="_blank" rel="noopener noreferrer">
                            <Play className="h-3.5 w-3.5 mr-1 fill-current" />
                            Watch
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons (Manual) */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 hover:bg-primary/20"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 hover:bg-primary/20"
            aria-label="Next Slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Footer info for touch screen */}
        <p className="text-center text-slate-500 text-[10px] mt-8 uppercase tracking-widest">
          Drag or swipe to explore
        </p>
      </div>
    </section>
  );
}