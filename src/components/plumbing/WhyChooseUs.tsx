import { useCountUp } from '@/hooks/useCountUp';

interface StatCardProps {
  value: string;
  label: string;
  numeric?: number;
  suffix?: string;
}

const StatCard = ({ value, label, numeric, suffix = '' }: StatCardProps) => {
  const { count, ref } = useCountUp({ target: numeric ?? 0, duration: 1600 });

  return (
    <div
      ref={ref}
      className="bg-white/10 border border-white/20 rounded-lg p-6 text-center shadow-md hover:bg-white/15 transition-colors duration-300"
    >
      <div className="font-heading font-bold text-3xl text-primary-foreground mb-1">
        {numeric !== undefined ? `${count}${suffix}` : value}
      </div>
      <div className="text-sm text-primary-foreground/75 font-semibold">{label}</div>
    </div>
  );
};

const stats: StatCardProps[] = [
  { value: '50+', label: 'Years in Business', numeric: 50, suffix: '+' },
  { value: 'Licensed', label: 'Bonded & Insured' },
  { value: 'All Types', label: 'Residential + Commercial' },
  { value: 'Free', label: 'Estimates Always' },
];

const WhyChooseUs = () => (
  <section id="about" className="py-16 md:py-24 bg-primary">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground text-center mb-2">
        Why Chicago Trusts Zuniga's Plumbing
      </h2>
      <div className="w-16 h-1 bg-orange mx-auto mb-12" />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            Founded and led by Walter Zuniga, Zuniga's Plumbing Inc. has been serving Chicago homeowners,
            businesses, and industrial clients for over 50 years. We're not a call center — we're your neighbors.
          </p>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            Whether it's a kitchen remodel, a burst pipe at 2am, or a full commercial sewer line replacement,
            our licensed team shows up on time, explains every step, and delivers work that passes city
            inspection the first time.
          </p>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            We serve the entire Chicago area and surrounding suburbs — residential, commercial, industrial,
            and high-rise properties.
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            {['BBB Accredited', 'Yelp Verified', 'Angi Certified'].map((badge) => (
              <span
                key={badge}
                className="bg-orange/15 border border-orange text-orange px-4 py-2 rounded-md text-sm font-heading font-semibold flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <StatCard key={s.label} value={s.value} label={s.label} numeric={s.numeric} suffix={s.suffix} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
