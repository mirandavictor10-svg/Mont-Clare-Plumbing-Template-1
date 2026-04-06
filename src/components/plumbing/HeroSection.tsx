import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImage from '@/assets/hero-plumber.jpg';

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative pt-16 md:pt-20 overflow-hidden min-h-[92vh] flex items-center">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src={heroImage}
          alt="Professional plumber working on kitchen pipes"
          className="w-full h-full object-cover scale-[1.12]"
          width={1920}
          height={1080}
        />
        {/* Reduced overlay — let photo breathe */}
        <div className="absolute inset-0 bg-primary/72" />
        {/* Subtle gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-primary to-transparent" />
        {/* Blueprint grid — very subtle */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, white 40px, white 41px),
              repeating-linear-gradient(90deg, transparent, transparent 40px, white 40px, white 41px)`,
          }}
        />
        {/* Flow lines */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-[200px] left-0 w-full h-[1px] bg-cyan-400 animate-flow-horizontal" />
          <div className="absolute top-[450px] left-0 w-full h-[1px] bg-orange-400 animate-flow-horizontal" style={{ animationDelay: '2s' }} />
          <div className="absolute top-0 left-[20%] w-[1px] h-full bg-cyan-400 animate-flow-vertical" style={{ animationDelay: '1s' }} />
          <div className="absolute top-0 left-[75%] w-[1px] h-full bg-orange-400 animate-flow-vertical" style={{ animationDelay: '4s' }} />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative w-full max-w-5xl mx-auto px-6 py-20 md:py-32 text-center"
        style={{ opacity }}
      >
        {/* Eyebrow */}
        <motion.div
          className="inline-flex items-center gap-2 bg-orange/15 border border-orange/30 text-orange px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-orange inline-block animate-pulse" />
          Serving Chicago Since 1975
        </motion.div>

        {/* Giant headline */}
        <motion.h1
          className="font-heading font-black text-5xl md:text-7xl lg:text-[84px] text-primary-foreground leading-[1.0] tracking-tight mb-6 text-balance"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          Chicago's Trusted<br />
          <span className="text-orange">Plumber.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-primary-foreground/75 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
        >
          Licensed, Bonded &amp; Insured. Over 50 years serving residential, commercial &amp; industrial clients across Chicago and suburbs.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        >
          <a
            href="tel:7736192730"
            className="w-full sm:w-auto bg-orange text-white font-heading font-bold text-base uppercase px-8 py-4 rounded-lg hover:brightness-110 transition-all duration-200 flex items-center justify-center gap-3 shadow-lg shadow-orange/30 animate-pulse-glow"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Call (773) 619-2730
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto border border-primary-foreground/30 text-primary-foreground font-heading font-semibold text-base px-8 py-4 rounded-lg hover:bg-primary-foreground/10 hover:border-primary-foreground/60 transition-all duration-200"
          >
            Free Estimate →
          </a>
        </motion.div>

        {/* Trust pills — horizontal */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          {['Licensed & Insured', '50+ Years Experience', 'Same-Day Service', 'Free Estimates'].map((badge) => (
            <span
              key={badge}
              className="flex items-center gap-1.5 text-primary-foreground/70 text-xs font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="hsl(24,86%,41%)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
              {badge}
            </span>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
