import heroImage from '@/assets/hero-plumber.jpg';
import { company } from '@/config/company.config';

const HeroSection = () => (
  <section
    id="home"
    className="relative pt-16 md:pt-20 overflow-hidden"
  >
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="Professional plumber working on kitchen pipes"
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-primary/85" />
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, white 40px, white 41px),
              repeating-linear-gradient(90deg, transparent, transparent 40px, white 40px, white 41px)`,
          }}
        />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-[200px] left-0 w-full h-[1px] bg-cyan-400 animate-flow-horizontal" style={{ boxShadow: '0 0 8px 1px inset-cyan-400' }} />
          <div className="absolute top-[400px] left-0 w-full h-[1px] bg-orange-400 animate-flow-horizontal" style={{ animationDelay: '2s', boxShadow: '0 0 8px 1px inset-orange-400' }} />
          <div className="absolute top-[600px] left-0 w-full h-[1px] bg-cyan-400 animate-flow-horizontal" style={{ animationDelay: '5s', boxShadow: '0 0 8px 1px inset-cyan-400' }} />
          <div className="absolute top-0 left-[20%] w-[1px] h-full bg-cyan-400 animate-flow-vertical" style={{ animationDelay: '1s', boxShadow: '0 0 8px 1px inset-cyan-400' }} />
          <div className="absolute top-0 left-[60%] w-[1px] h-full bg-orange-400 animate-flow-vertical" style={{ animationDelay: '4s', boxShadow: '0 0 8px 1px inset-orange-400' }} />
          <div className="absolute top-0 left-[85%] w-[1px] h-full bg-cyan-400 animate-flow-vertical" style={{ animationDelay: '7s', boxShadow: '0 0 8px 1px inset-cyan-400' }} />
        </div>
      </div>
    </div>

    <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-28 text-center">
      <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-[48px] text-primary-foreground leading-tight mb-6 animate-fade-in-up animation-delay-100">
        {company.hero.headline}
      </h1>

      <p className="text-primary-foreground/80 text-lg md:text-xl max-w-3xl mx-auto mb-10 animate-fade-in-up animation-delay-200">
        {company.hero.subtext}
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up animation-delay-300">
        <a
          href={`tel:${company.phoneRaw}`}
          className="w-full sm:w-auto bg-orange text-accent-foreground font-heading font-bold text-lg uppercase px-8 py-4 rounded-md hover:brightness-110 transition flex items-center justify-center gap-2 animate-pulse-glow"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Call {company.phone}
        </a>
        <a
          href="#contact"
          className="w-full sm:w-auto border-2 border-primary-foreground text-primary-foreground font-heading font-bold text-lg uppercase px-8 py-4 rounded-md hover:bg-primary-foreground hover:text-primary transition"
        >
          Get a Free Estimate
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-in-up animation-delay-500">
        {company.hero.badges.map((badge) => (
          <div
            key={badge}
            className="bg-primary-foreground/10 text-primary-foreground text-sm font-semibold py-3 px-4 rounded-md backdrop-blur-sm flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
            {badge}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
