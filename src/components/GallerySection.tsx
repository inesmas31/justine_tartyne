import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { collages, drawings, jewelry, poterie } from '../data/images';

type Category = 'All' | 'Collages' | 'Drawings' | 'Jewelry' | 'Poterie';

const categories: Category[] = ['All', 'Collages', 'Drawings', 'Jewelry', 'Poterie'];

const allImages: { src: string; category: Exclude<Category, 'All'> }[] = [
  ...collages.map(src => ({ src, category: 'Collages' as const })),
  ...drawings.map(src => ({ src, category: 'Drawings' as const })),
  ...jewelry.map(src => ({ src, category: 'Jewelry' as const })),
  ...poterie.map(src => ({ src, category: 'Poterie' as const })),
];

function LightboxModal({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
      onClick={onClose}
    >
      <motion.img
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        src={src}
        alt=""
        className="max-w-full max-h-[90svh] object-contain rounded-xl md:rounded-2xl"
        onClick={e => e.stopPropagation()}
      />
      <button
        onClick={onClose}
        className="absolute top-4 right-4 liquid-glass rounded-full w-10 h-10 flex items-center justify-center text-white/70 hover:text-white text-xl"
      >
        ×
      </button>
    </motion.div>
  );
}

export default function GallerySection() {
  const [active, setActive] = useState<Category>('All');
  const [lightbox, setLightbox] = useState<string | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const filtered =
    active === 'All' ? allImages : allImages.filter(img => img.category === active);

  return (
    <section id="work" className="bg-black py-16 md:py-40 px-4 md:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* Header */}
        <motion.div
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-6 md:mb-12"
        >
          <h2
            className="text-2xl md:text-5xl text-white tracking-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Selected works
          </h2>
          <span className="text-white/40 text-xs md:text-sm">
            {filtered.length} pieces
          </span>
        </motion.div>

        {/* Filter tabs — horizontal scroll on mobile */}
        <motion.div
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex gap-2 mb-8 md:mb-12 overflow-x-auto pb-1 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`liquid-glass rounded-full px-5 py-2 text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                active === cat
                  ? 'bg-white/10 text-white'
                  : 'text-white/50 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-2 md:gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.02, 0.4) }}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg md:rounded-xl mb-2 md:mb-3"
                onClick={() => setLightbox(item.src)}
              >
                <img
                  src={item.src}
                  alt=""
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <LightboxModal src={lightbox} onClose={() => setLightbox(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
