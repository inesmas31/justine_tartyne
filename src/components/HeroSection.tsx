import { useRef, useEffect } from 'react';
import { Camera, Mail, ArrowDown } from 'lucide-react';

const HERO_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadingRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.style.opacity = '0';

    function animateOpacity(from: number, to: number, duration: number, onDone?: () => void) {
      const start = performance.now();
      function step(now: number) {
        const t = Math.min((now - start) / duration, 1);
        video!.style.opacity = String(from + (to - from) * t);
        if (t < 1) requestAnimationFrame(step);
        else onDone?.();
      }
      requestAnimationFrame(step);
    }

    function onCanPlay() {
      video!.play();
      animateOpacity(0, 1, 500);
    }

    function onTimeUpdate() {
      if (!video) return;
      const remaining = video.duration - video.currentTime;
      if (remaining <= 0.55 && !fadingRef.current) {
        fadingRef.current = true;
        const currentOpacity = parseFloat(video.style.opacity || '1');
        animateOpacity(currentOpacity, 0, 500);
      }
    }

    function onEnded() {
      if (!video) return;
      video.style.opacity = '0';
      fadingRef.current = false;
      setTimeout(() => {
        video.currentTime = 0;
        video.play();
        animateOpacity(0, 1, 500);
      }, 100);
    }

    video.addEventListener('canplay', onCanPlay);
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('ended', onEnded);

    return () => {
      video.removeEventListener('canplay', onCanPlay);
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('ended', onEnded);
    };
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden flex flex-col bg-black">
      {/* Background video */}
      <video
        ref={videoRef}
        src={HERO_VIDEO}
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ opacity: 0 }}
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Navbar */}
      <div className="relative z-20 px-4 py-4 md:px-6 md:py-6">
        <div className="liquid-glass rounded-full max-w-5xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <span
              className="text-white font-semibold text-lg tracking-wide"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Justine
            </span>
            <nav className="hidden md:flex items-center gap-8 ml-8">
              {['Work', 'About', 'Contact'].map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-white/80 hover:text-white text-sm font-medium transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
          <a
            href="#contact"
            className="liquid-glass rounded-full px-4 md:px-6 py-2 text-white text-xs md:text-sm font-medium hover:bg-white/5 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center">
        <p
          className="text-white/50 text-xs tracking-widest uppercase mb-5"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Artist & Creator
        </p>
        <h1
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-white tracking-tight mb-6 leading-tight"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Justine
          <br className="sm:hidden" />
          <em className="italic text-white/70"> creates</em>
        </h1>
        <p className="text-white/60 text-sm leading-relaxed max-w-xs md:max-w-md mb-8">
          Collages, drawings, jewelry & pottery — handcrafted works born from curiosity and intuition.
        </p>
        <a
          href="#work"
          className="liquid-glass rounded-full px-7 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors"
        >
          Explore her work
        </a>
      </div>

      {/* Social footer */}
      <div className="relative z-10 flex justify-center gap-3 pb-8 md:pb-12">
        <a
          href="https://www.instagram.com/justine_tartyne"
          target="_blank"
          rel="noopener noreferrer"
          className="liquid-glass rounded-full p-3 md:p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
        >
          <Camera size={18} />
        </a>
        <a
          href="#contact"
          className="liquid-glass rounded-full p-3 md:p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
        >
          <Mail size={18} />
        </a>
        <a
          href="#work"
          className="liquid-glass rounded-full p-3 md:p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
        >
          <ArrowDown size={18} />
        </a>
      </div>
    </section>
  );
}
