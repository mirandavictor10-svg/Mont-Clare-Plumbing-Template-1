import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    text: "Walter and his team were amazing for our kitchen remodel. They handled everything from planning to code compliance flawlessly. Best plumbers I've worked with!",
    source: 'Verified Customer, Angi',
  },
  {
    text: "Walter came out to check a potential issue I had and he was prompt, patient and extremely knowledgeable. Highly recommend for any plumbing needs.",
    source: 'Verified Yelp Review',
  },
  {
    text: "Sal, Jamie and Juan did a terrific job repairing three broken pipes and installing a new toilet. Super professional and efficient team.",
    source: 'Verified Yelp Review',
  },
  {
    text: "Walter values customer satisfaction higher than any contractor I have worked with. He stayed on-site to ensure everything went perfectly. A true professional.",
    source: 'Verified Customer, Angi',
  },
  {
    text: "Zuniga's Plumbing will always get my business. They arrived right on time and were very professional during the entire furnace repair process.",
    source: 'BBB Review',
  },
  {
    text: "They showed up on time and did the work quickly. Explained what was going on and showed me the results before finishing. Very transparent service.",
    source: 'Verified Customer, Angi',
  },
];

const Testimonials = () => {
  return (
    <section id="reviews" className="py-24 bg-secondary overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 mb-16">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-orange/10 px-4 py-2 rounded-full mb-4">
            <Star className="size-3.5 text-orange fill-orange" aria-hidden="true" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-orange">Verified Excellence</span>
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-6xl text-foreground tracking-tight">
            What Chicago Says
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by hundreds of Chicago homeowners. Five-star service, guaranteed.
          </p>
        </div>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative flex flex-col gap-8 max-w-full">
        <div className="flex overflow-hidden border-y border-border/50 bg-card/30 py-16">
          <motion.div 
            className="flex gap-8 whitespace-nowrap px-4 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 35, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {[...reviews, ...reviews, ...reviews, ...reviews].map((review, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.02, y: -5 }}
                className="w-[350px] md:w-[450px] shrink-0 bg-card/40 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border border-border flex flex-col justify-between whitespace-normal group shadow-sm hover:shadow-xl transition-all"
              >
                <div>
                  <div className="flex gap-0.5 mb-8">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={16} className="fill-orange text-orange" />
                    ))}
                  </div>
                  <p className="text-lg leading-relaxed text-foreground italic opacity-90 group-hover:opacity-100 transition-opacity">
                    "{review.text}"
                  </p>
                </div>
                <div className="flex items-center justify-between pt-8 mt-8 border-t border-border/50">
                  <div className="flex items-center gap-4">
                    <div className="bg-orange/10 size-12 rounded-2xl flex items-center justify-center text-orange font-bold text-lg">
                      {review.source.includes('Angi') ? 'A' : review.source.includes('Yelp') ? 'Y' : 'B'}
                    </div>
                    <div>
                      <h5 className="font-bold text-sm leading-tight text-foreground uppercase tracking-wider">Verified Review</h5>
                      <p className="text-xs text-muted-foreground font-medium">{review.source}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="text-center mt-16 px-4">
        <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
          Read more reviews on{' '}
          <span className="font-semibold text-foreground">Google</span>,{' '}
          <span className="font-semibold text-foreground">Yelp</span> &{' '}
          <span className="font-semibold text-foreground">Angi</span>
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
