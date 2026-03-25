const serviceGroups = [
  {
    title: '🔴 Emergency Services',
    services: [
      { name: 'Gas Leak Detection & Repair', desc: 'Immediate response for dangerous gas leaks to keep your family safe.', icon: '🔥' },
      { name: 'Frozen Pipe Repair', desc: 'Fast thawing and repair to prevent pipe bursts during Chicago winters.', icon: '❄️' },
      { name: 'Emergency Plumbing', desc: '24/7 emergency response for burst pipes, flooding, and critical failures.', icon: '🚨' },
    ],
  },
  {
    title: '🔵 Sewer & Drain',
    services: [
      { name: 'Drain Cleaning & Power Rodding', desc: 'Industrial-grade rodding to clear even the toughest clogs.', icon: '🔧' },
      { name: 'Video Camera Sewer Inspection', desc: 'High-tech camera inspection to pinpoint issues without digging.', icon: '📹' },
      { name: 'Full Sewer Line Replacement', desc: 'Complete sewer line replacement with minimal disruption to your property.', icon: '🏗️' },
      { name: 'Sewer Line Jetting', desc: 'High-pressure water jetting to blast away grease and debris buildup.', icon: '💦' },
      { name: 'Overhead Sewer Installation', desc: 'Prevent basement flooding with professional overhead sewer conversion.', icon: '⬆️' },
      { name: 'Underground Sewer Repair', desc: 'Expert underground repair using trenchless and traditional methods.', icon: '⛏️' },
      { name: 'Catch Basin Repair & Cleaning', desc: 'Keep drainage systems flowing with professional catch basin service.', icon: '🕳️' },
    ],
  },
  {
    title: '💧 Water & Pipes',
    services: [
      { name: 'Underground Water Main Repair & Installation', desc: 'Full water main service from repair to complete new installations.', icon: '💧' },
      { name: 'Water Pressure Boost', desc: 'Restore strong water pressure throughout your home or building.', icon: '📈' },
      { name: 'Water Line Installation', desc: 'New water line installation for renovations and new construction.', icon: '🔌' },
      { name: 'Violation Correcting', desc: 'Bring your plumbing up to Chicago code and clear city violations.', icon: '📋' },
    ],
  },
  {
    title: '🔧 Fixtures & Water Heaters',
    services: [
      { name: 'Faucet Repair & Replacement', desc: 'Fix leaky faucets or upgrade to modern, efficient fixtures.', icon: '🚰' },
      { name: 'Toilet Repair & Replacement', desc: 'From running toilets to full replacements — quick and clean.', icon: '🚽' },
      { name: 'Water Heater Repair & Installation', desc: 'Tank and tankless water heater service for reliable hot water.', icon: '🌡️' },
      { name: 'Tankless Water Heater Installation', desc: 'Upgrade to energy-efficient tankless systems for endless hot water.', icon: '♨️' },
      { name: 'Sump Pump & Ejector Pump Installation', desc: 'Protect your basement from flooding with professional pump systems.', icon: '⚙️' },
    ],
  },
  {
    title: '🏗️ Remodeling & Other',
    services: [
      { name: 'Kitchen Remodeling (Plumbing)', desc: 'Complete plumbing for kitchen renovations — gas, water, and drain.', icon: '🍳' },
      { name: 'Bathroom Remodeling (Plumbing)', desc: 'Expert bathroom plumbing for tubs, showers, vanities, and more.', icon: '🛁' },
      { name: 'Grease Trap Service', desc: 'Commercial grease trap cleaning and maintenance for restaurants.', icon: '🍔' },
      { name: 'Septic Tank Services', desc: 'Full septic system service, pumping, and maintenance.', icon: '🏠' },
      { name: 'Lift Stations', desc: 'Installation and repair of lift station pump systems.', icon: '🔄' },
      { name: 'Sprinkler & Irrigation Repair', desc: 'Keep your landscaping irrigated with professional sprinkler repair.', icon: '🌿' },
      { name: 'Clean-Up Services', desc: 'Post-plumbing clean-up so your space is left spotless.', icon: '🧹' },
      { name: 'Free Estimates', desc: 'No-obligation estimates for any plumbing project, big or small.', icon: '📝' },
    ],
  },
];

const ServicesSection = () => (
  <section id="services" className="py-16 md:py-24 bg-background">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-2">
          Our Plumbing Services
        </h2>
        <div className="w-16 h-1 bg-orange mx-auto mb-4" />
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Full-service residential, commercial, and industrial plumbing across Chicago
        </p>
      </div>

      {serviceGroups.map((group) => (
        <div key={group.title} className="mb-12">
          <h3 className="font-heading font-semibold text-xl md:text-[22px] text-foreground mb-6">
            {group.title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {group.services.map((s) => (
              <div
                key={s.name}
                className="group bg-card border border-border rounded-lg p-5 hover:bg-primary hover:border-primary transition-all duration-300 cursor-default"
              >
                <div className="text-2xl mb-2">{s.icon}</div>
                <h4 className="font-heading font-bold text-foreground group-hover:text-primary-foreground transition-colors mb-1">
                  {s.name}
                </h4>
                <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="text-center mt-8 p-6 bg-secondary rounded-lg">
        <p className="text-lg font-heading font-semibold text-foreground mb-2">
          Not sure what you need? Call us for a FREE estimate
        </p>
        <a href="tel:7736192730" className="text-orange font-heading font-bold text-2xl hover:underline">
          → (773) 619-2730
        </a>
      </div>
    </div>
  </section>
);

export default ServicesSection;
