import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FEATURED_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4';

export default function FeaturedSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-black pt-6 pb-16 md:pb-32 px-4 md:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.9 }}
          className="rounded-2xl md:rounded-3xl overflow-hidden relative"
          style={{ aspectRatio: '4/3' }}
        >
          <video
            src={FEATURED_VIDEO}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-10 flex flex-col md:flex-row md:items-end justify-between gap-3 md:gap-4">
            <div className="liquid-glass rounded-xl md:rounded-2xl p-4 md:p-8 max-w-md">
              <p className="text-white/50 text-xs tracking-widest uppercase mb-2">
                Featured Work
              </p>
              <p className="text-white text-xs md:text-base leading-relaxed">
                Each collage is a small world assembled from fragments — images torn,
                cut, and rearranged until something new speaks back.
              </p>
            </div>
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="liquid-glass rounded-full px-6 py-2.5 md:px-8 md:py-3 text-white text-sm font-medium whitespace-nowrap self-start md:self-auto"
            >
              See all work
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
