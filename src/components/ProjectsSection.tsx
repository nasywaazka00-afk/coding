import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, Palette, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Personal Portfolio Web',
    description: 'Website portofolio interaktif yang dibangun dengan React dan Framer Motion untuk menampilkan karya secara profesional.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    image: '🌐',
    color: 'from-blue-500/20 to-cyan-500/20',
    github: '#', // Ganti dengan link githubmu
    demo: '#',   // Ganti dengan link live websitemu
  },
  {
    title: 'Desain Poster Digital Canva',
    description: 'Koleksi desain poster promosi dan event yang dibuat menggunakan Canva dengan prinsip tipografi dan tata letak yang menarik.',
    tags: ['Canva', 'Graphic Design', 'Branding'],
    image: '🎨',
    color: 'from-purple-500/20 to-pink-500/20',
    isContent: true,
    demo: '#', // Bisa diisi link ke linktree/drive hasil karya
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
    youtube: '#', // Link jika ada video behind the scenes
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
  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">Portfolio</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Projects & Karya Kreatif
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 glass rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
                <div className={`aspect-video rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${project.color}`}>
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-500">
                    {project.image}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    {project.isContent && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary font-medium">
                        Creative
                      </span>
                    )}
                    <h3 className="font-display text-lg font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    {project.github && (
                      <Button variant="outline" size="sm" className="rounded-full" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" className="rounded-full" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Lihat Karya
                        </a>
                      </Button>
                    )}
                    {project.youtube && (
                      <Button size="sm" className="rounded-full" asChild>
                        <a href={project.youtube} target="_blank" rel="noopener noreferrer">
                          <Play className="h-4 w-4 mr-1" />
                          Tonton
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}