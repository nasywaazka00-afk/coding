import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
  // --- BAGIAN DATA MANUAL (ISI DI SINI) ---
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'nasywaazka00@gmail.com', // Ganti dengan emailmu
      href: 'mailto:nasywaazka00@gmail.com',
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+62 85275577275', // Ganti dengan nomor WA mu
      href: 'https://wa.me/6285275577275', // Format: https://wa.me/62...
    },
    {
      icon: MapPin,
      label: 'Lokasi',
      value: 'Banda Aceh, Indonesia', // Ganti dengan lokasimu
      href: 'https://maps.google.com/?q=Banda+Aceh', // Bisa diisi link Google Maps
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">Hubungi Saya</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Mari Berkolaborasi</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* SISI KIRI: INFO KONTAK */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ayo Ngobrol!</h3>
              <p className="text-muted-foreground">
                Saya selalu terbuka untuk diskusi proyek baru, ide kreatif, atau peluang untuk menjadi bagian dari visi Anda.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"           // Membuka di tab baru
                  rel="noopener noreferrer" // Keamanan tambahan untuk tab baru
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl glass hover:bg-primary/5 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* SISI KANAN: FORM PESAN */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-8 rounded-3xl glass border border-white/10 shadow-xl"
          >
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-medium">Nama</label>
                <input type="text" className="w-full p-3 rounded-xl bg-secondary/50 border border-white/10 focus:border-primary outline-none transition-all" placeholder="Nama Anda" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input type="email" className="w-full p-3 rounded-xl bg-secondary/50 border border-white/10 focus:border-primary outline-none transition-all" placeholder="email@contoh.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Pesan</label>
                <textarea className="w-full p-3 rounded-xl bg-secondary/50 border border-white/10 focus:border-primary outline-none transition-all h-32" placeholder="Halo Nasywa, saya ingin..." />
              </div>
              <Button className="w-full rounded-xl py-6 text-lg shadow-glow">
                <Send className="mr-2 h-5 w-5" /> Kirim Pesan
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}