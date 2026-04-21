import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Camera, Mail, ArrowUpRight } from 'lucide-react';

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-black py-16 md:py-40 px-4 md:px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.p
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-white/40 text-xs tracking-widest uppercase mb-5"
        >
          Contact
        </motion.p>

        <motion.h2
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white leading-[1.15] tracking-tight mb-10 md:mb-12"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Let's{' '}
          <em className="italic text-white/60">talk</em>
        </motion.h2>

        <motion.div
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          <a
            href="mailto:justine@example.com"
            className="liquid-glass rounded-2xl md:rounded-3xl p-6 md:p-8 group flex items-center justify-between hover:bg-white/5 transition-colors"
          >
            <div>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-1.5">Email</p>
              <p className="text-white text-base md:text-lg" style={{ fontFamily: "'Instrument Serif', serif" }}>
                justine@example.com
              </p>
            </div>
            <div className="liquid-glass rounded-full p-3 group-hover:bg-white/10 transition-colors flex-shrink-0 ml-4">
              <Mail size={18} className="text-white" />
            </div>
          </a>

          <a
            href="https://www.instagram.com/justine_tartyne"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass rounded-2xl md:rounded-3xl p-6 md:p-8 group flex items-center justify-between hover:bg-white/5 transition-colors"
          >
            <div>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-1.5">Instagram</p>
              <p className="text-white text-base md:text-lg" style={{ fontFamily: "'Instrument Serif', serif" }}>
                @justine_tartyne
              </p>
            </div>
            <div className="liquid-glass rounded-full p-3 group-hover:bg-white/10 transition-colors flex-shrink-0 ml-4">
              <Camera size={18} className="text-white" />
            </div>
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 md:mt-24 pt-6 md:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <span
            className="text-white/30 text-xs md:text-sm text-center sm:text-left"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            © 2026 Justine — All rights reserved
          </span>
          <a
            href="#top"
            className="liquid-glass rounded-full px-5 py-2 text-white/50 text-sm hover:text-white hover:bg-white/5 transition-all flex items-center gap-2"
          >
            Back to top <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
