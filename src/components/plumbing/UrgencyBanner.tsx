const UrgencyBanner = () => (
  <section id="emergency" className="bg-orange py-8 md:py-10">
    <div className="max-w-5xl mx-auto px-4 text-center">
      <h2 className="font-heading font-bold text-2xl md:text-3xl text-accent-foreground mb-2">
        🚨 EMERGENCY PLUMBING ISSUE? WE RESPOND FAST.
      </h2>
      <p className="text-accent-foreground/90 text-lg mb-4">
        Gas leaks, burst pipes, frozen pipes — don't wait. Call us now.
      </p>
      <a
        href="tel:7736192730"
        className="inline-block animate-pulse-glow font-heading font-bold text-3xl md:text-4xl text-accent-foreground hover:underline"
      >
        (773) 619-2730
      </a>
    </div>
  </section>
);

export default UrgencyBanner;
