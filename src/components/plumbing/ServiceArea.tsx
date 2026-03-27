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
  <section id="service-area" className="py-16 md:py-24 bg-secondary">
    <div className="max-w-7xl mx-auto px-4">

      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
          Serving Chicago & Surrounding Suburbs
        </h2>
        <div className="w-16 h-1 bg-orange mx-auto mt-3 mb-4" />
        <p className="text-muted-foreground max-w-xl mx-auto text-base">
          From the heart of Chicago to Cook County suburbs — we're your local, licensed plumbing experts.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* Map Card */}
        <div className="rounded-xl overflow-hidden shadow-lg border-2 border-primary">
          {/* Map header bar */}
          <div className="bg-primary px-4 py-3 flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-orange flex-shrink-0"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.083 3.204-4.512 3.204-7.327a8.5 8.5 0 10-17 0c0 2.815 1.26 5.244 3.204 7.327a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <div className="font-heading font-bold text-primary-foreground text-sm leading-tight">
                Zuniga's Plumbing Inc.
              </div>
              <div className="text-primary-foreground/60 text-xs">
                7253 S. Green St, Chicago, IL 60621
              </div>
            </div>
          </div>

          {/* Google Maps iframe */}
          <iframe
            src="https://maps.google.com/maps?q=7253+S.+Green+St,+Chicago,+IL+60621&hl=en&z=14&output=embed"
            width="100%"
            height="320"
            style={{ border: 0, display: 'block' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Zuniga's Plumbing Inc. location"
          />

          {/* Orange accent bottom bar */}
          <div className="bg-orange px-4 py-2 text-center">
            <span className="text-accent-foreground text-xs font-heading font-semibold uppercase tracking-widest">
              Licensed &amp; Insured · Serving Greater Chicago
            </span>
          </div>
        </div>

        {/* Areas + CTA */}
        <div className="flex flex-col gap-6">

          {/* Areas We Serve */}
          <div>
            <h3 className="font-heading font-semibold text-xl text-foreground mb-5 flex items-center gap-3">
              <span className="w-1 h-6 bg-orange rounded-full inline-block" />
              Areas We Serve
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {areas.map((a) => (
                <div
                  key={a}
                  className="flex items-start gap-2 bg-card border border-border rounded-lg px-4 py-3 shadow-sm"
                >
                  <span className="text-orange font-bold mt-0.5 text-sm flex-shrink-0">✓</span>
                  <span className="text-foreground text-sm font-medium leading-snug">{a}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-primary rounded-xl px-6 py-6">
            <p className="text-primary-foreground/70 text-sm mb-1">
              Not sure if we cover your area?
            </p>
            <p className="font-heading font-bold text-primary-foreground text-lg mb-4">
              Give us a call — we'll come to you.
            </p>
            <a
              href="tel:7736192730"
              className="inline-flex items-center gap-2 bg-orange text-accent-foreground font-heading font-bold px-6 py-3 rounded-md hover:brightness-110 transition text-base animate-pulse-glow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              (773) 619-2730
            </a>
          </div>

        </div>
      </div>
    </div>
  </section>
);

export default ServiceArea;
