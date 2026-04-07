import { company } from '@/config/company.config';

const MobileCTABar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex border-t border-border shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
    <a
      href={`tel:${company.phoneRaw}`}
      aria-label={`Call ${company.shortName} at ${company.phone}`}
      className="flex-1 bg-orange text-accent-foreground font-heading font-bold text-center py-3.5 uppercase text-sm flex items-center justify-center gap-2"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      Call Now
    </a>
    <a
      href="#contact"
      aria-label="Get a free estimate"
      className="flex-1 bg-primary text-primary-foreground font-heading font-bold text-center py-3.5 uppercase text-sm border-l border-primary-foreground/20 flex items-center justify-center"
    >
      Get Estimate
    </a>
  </div>
);

export default MobileCTABar;
