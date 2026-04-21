import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="bg-black pt-20 md:pt-44 pb-10 md:pb-14 px-6 overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at top, rgba(255,255,255,0.03) 0%, transparent 70%), #000',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.p
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-white/40 text-xs tracking-widest uppercase mb-5"
        >
          About
        </motion.p>
        <motion.h2
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white leading-[1.15] tracking-tight"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Making things{' '}
          <em className="italic text-white/60">by hand,</em>
          <br />
          with feeling.
        </motion.h2>
        <motion.p
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-white/50 text-sm md:text-lg leading-relaxed mt-6 max-w-xl"
          style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic' }}
        >
          Justine works across collage, drawing, ceramic, and jewelry — each medium an exploration
          of texture, form, and quiet narrative. Her practice is rooted in the pleasure of making:
          slow, tactile, and deeply personal.
        </motion.p>
      </div>
    </section>
  );
}
