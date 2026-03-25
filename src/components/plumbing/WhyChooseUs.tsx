const stats = [
  { value: '50+', label: 'Years in Business' },
  { value: 'Licensed', label: 'Bonded & Insured' },
  { value: 'All Types', label: 'Residential + Commercial' },
  { value: 'Free', label: 'Estimates Always' },
];

const WhyChooseUs = () => (
  <section id="about" className="py-16 md:py-24 bg-secondary">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-2">
        Why Chicago Trusts Zuniga's Plumbing
      </h2>
      <div className="w-16 h-1 bg-orange mx-auto mb-12" />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <p className="text-foreground text-lg">
            Founded and led by Walter Zuniga, Zuniga's Plumbing Inc. has been serving Chicago homeowners,
            businesses, and industrial clients for over 50 years. We're not a call center — we're your neighbors.
          </p>
          <p className="text-foreground text-lg">
            Whether it's a kitchen remodel, a burst pipe at 2am, or a full commercial sewer line replacement,
            our licensed team shows up on time, explains every step, and delivers work that passes city
            inspection the first time.
          </p>
          <p className="text-foreground text-lg">
            We serve the entire Chicago area and surrounding suburbs — residential, commercial, industrial,
            and high-rise properties.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            {['BBB Accredited', 'Yelp Verified', 'Angi Certified'].map((badge) => (
              <span
                key={badge}
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-heading font-semibold"
              >
                ✅ {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-card border border-border rounded-lg p-6 text-center shadow-sm"
            >
              <div className="font-heading font-bold text-3xl text-orange mb-1">{s.value}</div>
              <div className="text-sm text-muted-foreground font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
