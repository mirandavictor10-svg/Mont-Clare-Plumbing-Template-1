import { useCountUp } from '@/hooks/useCountUp';
import { company } from '@/config/company.config';

interface StatCardProps {
  value: string;
  label: string;
  numeric?: number;
  suffix?: string;
  featured?: boolean;
}

const StatCard = ({ value, label, numeric, suffix = '', featured = false }: StatCardProps) => {
  const { count, ref } = useCountUp({ target: numeric ?? 0, duration: 1600 });

  return (
    <div
      ref={ref}
      className={`rounded-lg overflow-hidden shadow-md transition-colors duration-300 border ${
        featured
          ? 'bg-white/20 border-white/30 hover:bg-white/25'
          : 'bg-white/10 border-white/20 hover:bg-white/15'
      }`}
    >
      <div className="h-1 bg-orange" />
      <div className="p-6 text-center">
        <div className={`font-heading font-bold text-3xl mb-1 ${featured ? 'text-orange' : 'text-primary-foreground'}`}>
          {numeric !== undefined ? `${count}${suffix}` : value}
        </div>
        <div className="text-sm text-primary-foreground/70 font-semibold">{label}</div>
      </div>
    </div>
  );
};

const stats: StatCardProps[] = [
  { value: `${company.yearsInBusiness}+`, label: 'Years in Business', numeric: company.yearsInBusiness, suffix: '+' },
  { value: 'Licensed', label: 'Bonded & Insured' },
  { value: 'All Types', label: 'Residential + Commercial' },
  { value: 'Free', label: 'Estimates Always' },
];

const WhyChooseUs = () => (
  <section id="about" className="py-16 md:py-24 bg-primary">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground text-center mb-2">
        {company.about.heading}
      </h2>
      <div className="mb-12" />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <p className="text-primary-foreground/85 text-lg leading-relaxed">
            {company.about.paragraph1}
          </p>
          <p className="text-primary-foreground/85 text-lg leading-relaxed">
            {company.about.paragraph2}
          </p>
          <p className="text-primary-foreground/85 text-lg leading-relaxed">
            {company.about.paragraph3}
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            {company.about.credentials.map((badge) => (
              <span
                key={badge}
                className="bg-white text-primary px-4 py-2 rounded-md text-sm font-heading font-semibold flex items-center gap-2 shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="hsl(24,86%,41%)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <StatCard key={s.label} value={s.value} label={s.label} numeric={s.numeric} suffix={s.suffix} featured={s.featured} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
