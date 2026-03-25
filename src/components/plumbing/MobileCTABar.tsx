const MobileCTABar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex border-t border-border shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
    <a
      href="tel:7736192730"
      className="flex-1 bg-orange text-accent-foreground font-heading font-bold text-center py-3.5 uppercase text-sm"
    >
      📞 Call Now
    </a>
    <a
      href="#contact"
      className="flex-1 bg-primary text-primary-foreground font-heading font-bold text-center py-3.5 uppercase text-sm border-l border-primary-foreground/20"
    >
      Get Estimate
    </a>
  </div>
);

export default MobileCTABar;
