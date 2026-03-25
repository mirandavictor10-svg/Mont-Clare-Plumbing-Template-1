import heroImage from '@/assets/hero-plumber.jpg';

const HeroSection = () => (
  <section
    id="home"
    className="relative pt-16 md:pt-20 overflow-hidden"
  >
    {/* Background image with overlay */}
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="Professional plumber working on kitchen pipes"
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-primary/85" />
      {/* Blueprint grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, white 40px, white 41px),
            repeating-linear-gradient(90deg, transparent, transparent 40px, white 40px, white 41px)`,
        }}
      />
    </div>

    <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-28 text-center">
      <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-[48px] text-primary-foreground leading-tight mb-6 animate-fade-in-up">
        Chicago's Trusted Plumbers — Over 50 Years of Reliable Service
      </h1>
      <p className="text-primary-foreground/80 text-lg md:text-xl max-w-3xl mx-auto mb-10">
        Licensed, Bonded & Insured. Serving Residential, Commercial & Industrial Clients Across Chicago and Suburbs.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        <a
          href="tel:7736192730"
          className="w-full sm:w-auto bg-orange text-accent-foreground font-heading font-bold text-lg uppercase px-8 py-4 rounded-md hover:brightness-110 transition"
        >
          📞 Call (773) 619-2730
        </a>
        <a
          href="#contact"
          className="w-full sm:w-auto border-2 border-primary-foreground text-primary-foreground font-heading font-bold text-lg uppercase px-8 py-4 rounded-md hover:bg-primary-foreground hover:text-primary transition"
        >
          Get a Free Estimate →
        </a>
      </div>

      {/* Trust bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {[
          '✅ Licensed & Insured',
          '✅ 50+ Years Experience',
          '✅ Residential & Commercial',
          '✅ Free Estimates',
        ].map((badge) => (
          <div
            key={badge}
            className="bg-primary-foreground/10 text-primary-foreground text-sm font-semibold py-3 px-4 rounded-md backdrop-blur-sm"
          >
            {badge}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
