import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  // Data Stats
  const stats = [
    { label: "Tahun Pengalaman", value: "1+" },
    { label: "Proyek Selesai", value: "10+" },
    { label: "Desain Canva", value: "50+" },
    { label: "Kepuasan Klien", value: "100%" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-12"
          >
            {/* Judul dan Deskripsi Utama */}
            <div className="text-center space-y-4">
              <motion.h2 
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold text-white"
              >
                Mengenal Lebih Dekat
              </motion.h2>
              <motion.div 
                variants={itemVariants}
                className="w-20 h-1 bg-primary mx-auto rounded-full"
              />
              <motion.p 
                variants={itemVariants}
                className="text-lg text-slate-300 leading-relaxed"
              >
                Saya adalah seorang kreatif yang berfokus pada pengembangan web dan desain visual. 
                saya suka mencari tau hal baru dalam dunia coding dan desain, serta mengubah ide-ide kreatif menjadi solusi digital yang menarik.
                selain mempelajari coding, saya juga suka bermain badminton, jogging, dan mendengar musik.
              </motion.p>
            </div>

            {/* Bagian Stats yang tadi diperbaiki */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center"
                  whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                >
                  <div className="text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <p className="text-sm text-slate-400 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}