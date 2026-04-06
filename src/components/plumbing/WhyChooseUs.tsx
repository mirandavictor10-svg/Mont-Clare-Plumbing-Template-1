import { motion } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';

interface StatRailItem {
  value: string;
  label: string;
  numeric?: number;
  suffix?: string;
}

const StatNumber = ({ value, label, numeric, suffix = '' }: StatRailItem) => {
  const { count, ref } = useCountUp({ target: numeric ?? 0, duration: 1800 });

  return (
    <div ref={ref} className="text-center px-8 py-2 border-r border-primary-foreground/10 last:border-r-0">
      <div className="font-heading font-black text-5xl md:text-6xl text-primary-foreground tracking-tight leading-none mb-2">
        {numeric !== undefined ? (
          <>
            <span className="text-orange">{count}</span>
            <span className="text-orange">{suffix}</span>
          </>
        ) : (
          <span className="text-orange">{value}</span>
        )}
      </div>
      <div className="text-primary-foreground/55 text-xs font-semibold uppercase tracking-widest">{label}</div>
    </div>
  );
};

const stats: StatRailItem[] = [
  { value: '50+', label: 'Years in Chicago', numeric: 50, suffix: '+' },
  { value: 'A+', label: 'BBB Rating' },
  { value: '200+', label: 'Five-Star Reviews', numeric: 200, suffix: '+' },
  { value: 'Free', label: 'Estimates Always' },
];

const trustItems = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="hsl(24,86%,41%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    title: 'Licensed & Bonded',
    text: 'City of Chicago License: 058170465 · Illinois State License: 055031744',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="hsl(24,86%,41%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Same-Day Service',
    text: 'Trucks stocked daily. Most jobs completed in a single visit.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="hsl(24,86%,41%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: 'Honest Pricing',
    text: 'Free quotes, no hidden fees, no surprise charges.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="hsl(24,86%,41%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
      </svg>
    ),
    title: 'Owner-Operated',
    text: 'Walter Zuniga personally oversees every job — every time.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const WhyChooseUs = () => (
  <section id="about" className="py-20 md:py-28 bg-primary overflow-hidden">
    <div className="max-w-6xl mx-auto px-6">
      {/* Section header */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="text-orange text-xs font-semibold uppercase tracking-widest mb-4">Why Zuniga's</div>
        <h2 className="font-heading font-black text-4xl md:text-5xl text-primary-foreground tracking-tight leading-tight max-w-lg">
          Built on 50 Years<br />of Chicago Trust.
        </h2>
      </motion.div>

      {/* Two-column layout */}
      <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start">
        {/* Left — editorial copy */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          {/* Pull quote */}
          <blockquote className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground/90 italic leading-snug mb-8 border-l-2 border-orange pl-6">
            "Not because of marketing —<br />because of results."
          </blockquote>
          <p className="text-primary-foreground/65 text-base leading-relaxed mb-6">
            Founded and led by Walter Zuniga, we've served Chicago homeowners, businesses, and industrial clients for over five decades. We're not a call center — we're your neighbors.
          </p>
          <p className="text-primary-foreground/65 text-base leading-relaxed mb-8">
            Every job, from a kitchen remodel to a full commercial sewer line replacement, is handled by our licensed team — on time, on budget, and built to pass city inspection the first time.
          </p>
          <div className="flex flex-wrap gap-3">
            {['BBB Accredited', 'Yelp Verified', 'Angi Certified'].map((badge) => (
              <span
                key={badge}
                className="bg-primary-foreground/10 text-primary-foreground text-xs px-4 py-2 rounded-lg font-semibold border border-primary-foreground/15 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="hsl(24,86%,41%)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                {badge}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right — trust items */}
        <motion.div
          className="space-y-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {trustItems.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="flex gap-4 items-start p-5 rounded-xl hover:bg-primary-foreground/5 transition-colors duration-200 group"
            >
              <div className="w-10 h-10 bg-primary-foreground/8 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange/15 transition-colors duration-200">
                {item.icon}
              </div>
              <div>
                <div className="font-heading font-semibold text-primary-foreground text-sm mb-1">{item.title}</div>
                <div className="text-primary-foreground/50 text-xs leading-relaxed">{item.text}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Stat rail */}
      <motion.div
        className="mt-20 pt-10 border-t border-primary-foreground/10 grid grid-cols-2 md:grid-cols-4"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {stats.map((s) => (
          <StatNumber key={s.label} {...s} />
        ))}
      </motion.div>
    </div>
  </section>
);

export default WhyChooseUs;
