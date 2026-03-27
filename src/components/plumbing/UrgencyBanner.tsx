const UrgencyBanner = () => (
  <section id="emergency" className="bg-orange py-8 md:py-10">
    <div className="max-w-5xl mx-auto px-4 text-center">
      <h2 className="font-heading font-bold text-2xl md:text-3xl text-accent-foreground mb-2 flex items-center justify-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        EMERGENCY PLUMBING ISSUE? WE RESPOND FAST.
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
