import { useRef } from 'react';

const reviews = [
  {
    text: "Walter and his team were responsible for all plumbing related to a kitchen remodel in our condo. They consulted with us before, during and after demo, laid out a plan of attack, contacted the city to confirm the plan, executed it, and worked with the city afterwards to ensure first-time code compliance. It was AMAZING. I have never worked with a plumber as good as Walter and his team.",
    source: 'Verified Customer, Angi',
  },
  {
    text: "Walter came out to check a potential issue I had and he was prompt, patient and extremely knowledgeable.",
    source: 'Verified Yelp Review',
  },
  {
    text: "Sal, Jamie and Juan did a terrific job repairing three broken pipes and installing a new toilet.",
    source: 'Verified Yelp Review',
  },
  {
    text: "Walter himself values customer satisfaction higher than any contractor I have ever worked with. He stayed on-site to personally meet with the city inspector after the plumbing work was done to ensure everything went well.",
    source: 'Verified Customer, Angi',
  },
  {
    text: "Zuniga's Plumbing will always get my business. Zuniga arrived at the property at the time agreed upon and was VERY professional during the entire furnace repair process.",
    source: 'BBB Review',
  },
  {
    text: "They showed up on time and did the work quickly. Mr. Zuniga explained what was going on, and showed me the final results before closing up each catch basin.",
    source: 'Verified Customer, Angi',
  },
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="reviews" className="py-16 md:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-2">
            What Our Customers Say
          </h2>
          <div className="w-16 h-1 bg-orange mx-auto mb-4" />
          <p className="text-muted-foreground text-lg">
            Trusted by hundreds of Chicago homeowners and businesses
          </p>
        </div>

        {/* Mobile: horizontal scroll, Desktop: grid */}
        <div
          ref={scrollRef}
          className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0"
        >
          {reviews.map((r, i) => (
            <div
              key={i}
              className="min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-start bg-card rounded-lg p-6 border-l-4 border-orange shadow-sm flex flex-col"
            >
              <div className="text-orange text-4xl font-serif leading-none mb-3">"</div>
              <p className="text-foreground text-sm flex-1 mb-4">{r.text}</p>
              <div>
                <div className="text-orange text-sm mb-1">⭐⭐⭐⭐⭐</div>
                <div className="text-xs text-muted-foreground font-semibold">— {r.source}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-muted-foreground">
            Read more reviews on{' '}
            <span className="font-semibold text-foreground">Google</span>,{' '}
            <span className="font-semibold text-foreground">Yelp</span> &{' '}
            <span className="font-semibold text-foreground">Angi</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
