const areas = [
  'Chicago (all neighborhoods)',
  'Bridgeport, Pilsen, Back of the Yards',
  'South Shore, Hyde Park, Englewood',
  'Oak Lawn, Evergreen Park',
  'Cicero, Berwyn',
  'Calumet City, Harvey, Dolton',
  'Blue Island',
  'Suburbs throughout Cook County',
];

const ServiceArea = () => (
  <section id="service-area" className="py-16 md:py-24 bg-background">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-2">
        Serving Chicago & Surrounding Suburbs
      </h2>
      <div className="w-16 h-1 bg-orange mx-auto mb-12" />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Decorative map */}
        <div className="relative bg-primary rounded-xl p-8 min-h-[300px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 20px, hsl(0 0% 100%) 20px, hsl(0 0% 100%) 21px),
                repeating-linear-gradient(90deg, transparent, transparent 20px, hsl(0 0% 100%) 20px, hsl(0 0% 100%) 21px)`,
            }}
          />
          <div className="text-center z-10">
            <div className="text-6xl mb-4">📍</div>
            <div className="font-heading font-bold text-2xl text-primary-foreground">Chicago, IL</div>
            <div className="text-primary-foreground/70 mt-1">& Surrounding Suburbs</div>
            <div className="mt-4 text-primary-foreground/60 text-sm">7253 S. Green St, 60621</div>
          </div>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-xl text-foreground mb-4">Areas We Serve</h3>
          <ul className="space-y-3">
            {areas.map((a) => (
              <li key={a} className="flex items-start gap-3">
                <span className="text-orange font-bold mt-0.5">✓</span>
                <span className="text-foreground">{a}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 p-4 bg-secondary rounded-lg">
            <p className="text-foreground font-semibold mb-1">Not sure if we cover your area?</p>
            <a href="tel:7736192730" className="text-orange font-heading font-bold text-xl hover:underline">
              Call us → (773) 619-2730
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ServiceArea;
