import { useState, useEffect, useRef } from 'react';
import { company } from '@/config/company.config';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import emergencyImg from '@/assets/services/emergency.jpg';
import sewerImg from '@/assets/services/sewer-drain.jpg';
import waterImg from '@/assets/services/water-pipes.jpg';
import fixturesImg from '@/assets/services/fixtures.jpg';
import remodelingImg from '@/assets/services/remodeling.jpg';

// Per-service detail images
import imgGasLeak from '@/assets/services/detail/gas-leak.jpg';
import imgFrozenPipe from '@/assets/services/detail/frozen-pipe.jpg';
import imgEmergency from '@/assets/services/detail/emergency.jpg';
import imgDrainCleaning from '@/assets/services/detail/drain-cleaning.jpg';
import imgCameraInspection from '@/assets/services/detail/camera-inspection.jpg';
import imgSewerReplacement from '@/assets/services/detail/sewer-replacement.jpg';
import imgSewerJetting from '@/assets/services/detail/sewer-jetting.jpg';
import imgOverheadSewer from '@/assets/services/detail/overhead-sewer.jpg';
import imgUndergroundSewer from '@/assets/services/detail/underground-sewer.jpg';
import imgCatchBasin from '@/assets/services/detail/catch-basin.jpg';
import imgWaterMain from '@/assets/services/detail/water-main.jpg';
import imgWaterPressure from '@/assets/services/detail/water-pressure.jpg';
import imgWaterLine from '@/assets/services/detail/water-line.jpg';
import imgViolation from '@/assets/services/detail/violation.jpg';
import imgFaucet from '@/assets/services/detail/faucet.jpg';
import imgToilet from '@/assets/services/detail/toilet.jpg';
import imgWaterHeater from '@/assets/services/detail/water-heater.jpg';
import imgTankless from '@/assets/services/detail/tankless.jpg';
import imgSumpPump from '@/assets/services/detail/sump-pump.jpg';
import imgKitchenRemodel from '@/assets/services/detail/kitchen-remodel.jpg';
import imgBathroomRemodel from '@/assets/services/detail/bathroom-remodel.jpg';
import imgGreaseTrap from '@/assets/services/detail/grease-trap.jpg';
import imgSeptic from '@/assets/services/detail/septic.jpg';
import imgLiftStation from '@/assets/services/detail/lift-station.jpg';
import imgSprinkler from '@/assets/services/detail/sprinkler.jpg';
import imgCleanup from '@/assets/services/detail/cleanup.jpg';
import imgFreeEstimate from '@/assets/services/detail/free-estimate.jpg';

type Service = {
  name: string;
  desc: string;
  icon: string;
  detail: string;
  image: string;
  imageAlt: string;
};

const serviceGroups = [
  {
    title: '🔴 Emergency Services',
    bannerImage: emergencyImg,
    bannerAlt: 'Emergency plumber repairing a burst pipe',
    services: [
      { name: 'Gas Leak Detection & Repair', desc: 'Immediate response for dangerous gas leaks to keep your family safe.', icon: '🔥', detail: 'Our licensed technicians use advanced gas detection equipment to quickly locate and repair gas leaks in your home or business. We work with the gas company and city inspectors to ensure your system is safe and code-compliant. Available 24/7 for emergency calls.', image: imgGasLeak, imageAlt: 'Plumber using gas leak detection equipment on pipes' },
      { name: 'Frozen Pipe Repair', desc: 'Fast thawing and repair to prevent pipe bursts during Chicago winters.', icon: '❄️', detail: 'Chicago winters are brutal on pipes. We safely thaw frozen pipes using professional-grade equipment and repair any burst sections. We also insulate vulnerable pipes to prevent future freeze damage. Don\'t wait — frozen pipes can burst within hours.', image: imgFrozenPipe, imageAlt: 'Plumber thawing frozen copper pipes with heat gun' },
      { name: 'Emergency Plumbing', desc: '24/7 emergency response for burst pipes, flooding, and critical failures.', icon: '🚨', detail: 'When disaster strikes — burst pipes, sewage backups, or major leaks — we respond fast, day or night. Our emergency team arrives equipped to stop the damage, make repairs, and restore your plumbing. Over 50 years of handling Chicago\'s toughest emergencies.', image: imgEmergency, imageAlt: 'Emergency plumber repairing burst pipe with water spraying' },
    ],
  },
  {
    title: '🔵 Sewer & Drain',
    bannerImage: sewerImg,
    bannerAlt: 'Professional sewer drain cleaning equipment inside a pipe',
    services: [
      { name: 'Drain Cleaning & Power Rodding', desc: 'Industrial-grade rodding to clear even the toughest clogs.', icon: '🔧', detail: 'We use commercial-grade power rodding machines to cut through tree roots, grease buildup, and stubborn clogs that consumer products can\'t touch. Our drain cleaning service restores full flow and we\'ll camera-inspect the line afterward to confirm it\'s clear.', image: imgDrainCleaning, imageAlt: 'Plumber operating power rodding machine in basement' },
      { name: 'Video Camera Sewer Inspection', desc: 'High-tech camera inspection to pinpoint issues without digging.', icon: '📹', detail: 'Our waterproof sewer cameras let us see exactly what\'s happening inside your pipes — cracks, root intrusion, bellied sections, or blockages. We record the footage and walk you through the findings so you can make informed decisions before any work begins.', image: imgCameraInspection, imageAlt: 'Sewer camera inspection with monitor showing pipe interior' },
      { name: 'Full Sewer Line Replacement', desc: 'Complete sewer line replacement with minimal disruption to your property.', icon: '🏗️', detail: 'When repair isn\'t enough, we handle full sewer line replacement from your home to the city main. We coordinate permits, city inspections, excavation, and backfill. Our team minimizes disruption to your yard and restores the area after work is complete.', image: imgSewerReplacement, imageAlt: 'Construction crew replacing sewer line in trench' },
      { name: 'Sewer Line Jetting', desc: 'High-pressure water jetting to blast away grease and debris buildup.', icon: '💦', detail: 'Hydro jetting uses high-pressure water (up to 4,000 PSI) to scour the inside of your sewer pipes clean. It\'s the most effective way to remove grease, scale, and debris buildup. Ideal for restaurants, older homes, and preventive maintenance.', image: imgSewerJetting, imageAlt: 'High-pressure water jetting inside sewer pipe' },
      { name: 'Overhead Sewer Installation', desc: 'Prevent basement flooding with professional overhead sewer conversion.', icon: '⬆️', detail: 'An overhead sewer conversion routes your waste line above the basement floor, preventing sewage backups during heavy rain. It\'s one of the most effective ways to protect your Chicago basement. We handle the full installation including permits and inspections.', image: imgOverheadSewer, imageAlt: 'Plumber installing overhead sewer pipes in basement ceiling' },
      { name: 'Underground Sewer Repair', desc: 'Expert underground repair using trenchless and traditional methods.', icon: '⛏️', detail: 'Whether it\'s a collapsed line, root damage, or offset joints, we repair underground sewer lines using both trenchless (pipe lining/bursting) and traditional excavation methods. We assess your situation and recommend the most cost-effective solution.', image: imgUndergroundSewer, imageAlt: 'Worker repairing underground clay sewer pipe in trench' },
      { name: 'Catch Basin Repair & Cleaning', desc: 'Keep drainage systems flowing with professional catch basin service.', icon: '🕳️', detail: 'Catch basins collect debris before it enters your sewer system. We clean, repair, and rebuild catch basins to prevent flooding and backups on your property. Regular maintenance extends the life of your entire drainage system.', image: imgCatchBasin, imageAlt: 'Worker cleaning and repairing concrete catch basin' },
    ],
  },
  {
    title: '💧 Water & Pipes',
    bannerImage: waterImg,
    bannerAlt: 'Copper and PVC water pipes installation',
    services: [
      { name: 'Underground Water Main Repair & Installation', desc: 'Full water main service from repair to complete new installations.', icon: '💧', detail: 'We repair and replace underground water mains from the city connection to your building. Whether you have a leak, low pressure, or need a new installation, our team handles excavation, pipe work, city coordination, and restoration.', image: imgWaterMain, imageAlt: 'Plumber working on underground copper water main in trench' },
      { name: 'Water Pressure Boost', desc: 'Restore strong water pressure throughout your home or building.', icon: '📈', detail: 'Low water pressure can be caused by corroded pipes, undersized mains, or faulty pressure regulators. We diagnose the root cause and implement solutions — from booster pumps to pipe replacement — to restore full, consistent pressure throughout your building.', image: imgWaterPressure, imageAlt: 'Plumber installing water pressure booster pump system' },
      { name: 'Water Line Installation', desc: 'New water line installation for renovations and new construction.', icon: '🔌', detail: 'Whether you\'re adding a bathroom, renovating a kitchen, or building new, we install water supply lines to code. We work with copper, PEX, and PVC depending on your needs and local requirements. All work is inspected and guaranteed.', image: imgWaterLine, imageAlt: 'Plumber installing copper water supply lines in wall framing' },
      { name: 'Violation Correcting', desc: 'Bring your plumbing up to Chicago code and clear city violations.', icon: '📋', detail: 'Got a city violation notice? We specialize in correcting plumbing code violations in Chicago. We review the violation, develop a plan to bring your system into compliance, complete the work, and schedule the city re-inspection. We handle it all so you don\'t have to.', image: imgViolation, imageAlt: 'Plumber and city inspector reviewing plumbing code compliance' },
    ],
  },
  {
    title: '🔧 Fixtures & Water Heaters',
    bannerImage: fixturesImg,
    bannerAlt: 'Tankless water heater being installed on wall',
    services: [
      { name: 'Faucet Repair & Replacement', desc: 'Fix leaky faucets or upgrade to modern, efficient fixtures.', icon: '🚰', detail: 'From dripping kitchen faucets to complete bathroom fixture upgrades, we repair and install all brands and styles. A leaky faucet can waste thousands of gallons per year — let us fix it right the first time and save you money on your water bill.', image: imgFaucet, imageAlt: 'Modern chrome kitchen faucet being installed' },
      { name: 'Toilet Repair & Replacement', desc: 'From running toilets to full replacements — quick and clean.', icon: '🚽', detail: 'Running toilets, weak flushes, leaks at the base — we fix them all. If your toilet is beyond repair, we\'ll help you choose an efficient replacement and install it the same day. We remove and dispose of the old unit and leave your bathroom clean.', image: imgToilet, imageAlt: 'Plumber installing a new toilet in a bathroom' },
      { name: 'Water Heater Repair & Installation', desc: 'Tank and tankless water heater service for reliable hot water.', icon: '🌡️', detail: 'We service all types and brands of water heaters — gas, electric, tank, and tankless. Whether you need a repair, a new installation, or an upgrade to a more efficient unit, our licensed plumbers ensure safe installation with proper venting and code compliance.', image: imgWaterHeater, imageAlt: 'Plumber servicing a tank water heater in utility room' },
      { name: 'Tankless Water Heater Installation', desc: 'Upgrade to energy-efficient tankless systems for endless hot water.', icon: '♨️', detail: 'Tankless water heaters provide hot water on demand and can reduce energy costs by up to 30%. We install top brands like Rinnai, Navien, and Noritz. Our installation includes gas line sizing, venting, and all necessary permits.', image: imgTankless, imageAlt: 'Plumber installing tankless water heater on wall' },
      { name: 'Sump Pump & Ejector Pump Installation', desc: 'Protect your basement from flooding with professional pump systems.', icon: '⚙️', detail: 'Chicago basements need protection. We install and service sump pumps, ejector pumps, and battery backup systems. Don\'t wait for a flood — proactive pump installation and maintenance keeps your basement dry year-round.', image: imgSumpPump, imageAlt: 'Plumber installing sump pump system in basement pit' },
    ],
  },
  {
    title: '🏗️ Remodeling & Other',
    bannerImage: remodelingImg,
    bannerAlt: 'Modern kitchen with new plumbing fixtures and faucet',
    services: [
      { name: 'Kitchen Remodeling (Plumbing)', desc: 'Complete plumbing for kitchen renovations — gas, water, and drain.', icon: '🍳', detail: 'We handle all plumbing aspects of kitchen remodels: relocating gas and water lines, installing sinks and dishwashers, adding pot fillers, and connecting ice makers. We coordinate with your contractor and ensure all work passes city inspection the first time.', image: imgKitchenRemodel, imageAlt: 'Plumber connecting sink drain under kitchen counter' },
      { name: 'Bathroom Remodeling (Plumbing)', desc: 'Expert bathroom plumbing for tubs, showers, vanities, and more.', icon: '🛁', detail: 'From moving drain lines for a new shower to installing double vanities, we handle the full plumbing scope of bathroom remodels. We rough-in new fixtures, install finish plumbing, and ensure everything meets code before your tile and finish work begins.', image: imgBathroomRemodel, imageAlt: 'Plumber installing shower valve and pipes in bathroom wall' },
      { name: 'Grease Trap Service', desc: 'Commercial grease trap cleaning and maintenance for restaurants.', icon: '🍔', detail: 'Chicago restaurants are required to maintain clean grease traps. We provide scheduled cleaning, repair, and replacement services to keep you compliant with health codes and prevent costly sewer backups in your commercial kitchen.', image: imgGreaseTrap, imageAlt: 'Commercial kitchen grease trap being cleaned' },
      { name: 'Septic Tank Services', desc: 'Full septic system service, pumping, and maintenance.', icon: '🏠', detail: 'We provide complete septic system services including pumping, inspection, repair, and installation. Regular maintenance prevents costly failures and extends the life of your septic system. We service residential and commercial properties throughout the Chicago suburbs.', image: imgSeptic, imageAlt: 'Septic tank being pumped by service truck' },
      { name: 'Lift Stations', desc: 'Installation and repair of lift station pump systems.', icon: '🔄', detail: 'Lift stations move wastewater from lower to higher elevations when gravity flow isn\'t possible. We install, repair, and maintain lift station pump systems for commercial and industrial properties. Our preventive maintenance plans keep your system running reliably.', image: imgLiftStation, imageAlt: 'Industrial lift station pump system' },
      { name: 'Sprinkler & Irrigation Repair', desc: 'Keep your landscaping irrigated with professional sprinkler repair.', icon: '🌿', detail: 'We repair and maintain sprinkler and irrigation systems — broken heads, leaking valves, controller issues, and winterization. Proper irrigation saves water and keeps your landscape healthy throughout the growing season.', image: imgSprinkler, imageAlt: 'Technician repairing sprinkler irrigation system head' },
      { name: 'Clean-Up Services', desc: 'Post-plumbing clean-up so your space is left spotless.', icon: '🧹', detail: 'We don\'t just fix the plumbing — we clean up after ourselves. Our team removes debris, cleans work areas, and restores your space so it looks like we were never there. It\'s part of our commitment to treating your home with respect.', image: imgCleanup, imageAlt: 'Professional cleaning up after plumbing work' },
      { name: 'Free Estimates', desc: 'No-obligation estimates for any plumbing project, big or small.', icon: '📝', detail: 'We provide honest, no-obligation estimates for any plumbing project. Our experienced team will assess your situation, explain your options, and give you a fair price — no hidden fees, no pressure. Call us or fill out our contact form to get started.', image: imgFreeEstimate, imageAlt: 'Friendly plumber giving free estimate to homeowner' },
    ],
  },
];

// Hook: observe a grid container and stagger-reveal its card children
function useScrollRevealGrid(groupCount: number) {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    refs.current.forEach((grid) => {
      if (!grid) return;
      const cards = Array.from(grid.querySelectorAll<HTMLElement>('.service-card'));
      // Start hidden
      cards.forEach((card) => card.classList.add('card-hidden'));

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              cards.forEach((card, i) => {
                setTimeout(() => {
                  card.classList.remove('card-hidden');
                  card.classList.add('card-visible');
                }, i * 80);
              });
              observer.disconnect();
            }
          });
        },
        { threshold: 0.08 }
      );

      observer.observe(grid);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupCount]);

  return refs;
}

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const gridRefs = useScrollRevealGrid(serviceGroups.length);

  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-orange text-xs font-semibold uppercase tracking-widest mb-3">What We Do</div>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-foreground tracking-tight mb-4">
            Full-Service Plumbing
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            Residential, commercial, and industrial plumbing across Chicago and suburbs — done right the first time.
          </p>
        </motion.div>

        {serviceGroups.map((group, groupIdx) => (
          <div key={group.title} className="mb-16">
            <div className="relative rounded-2xl overflow-hidden mb-6 h-44 md:h-52">
              <img
                src={group.bannerImage}
                alt={group.bannerAlt}
                loading="lazy"
                width={640}
                height={512}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/70" />
              <div className="absolute inset-0 flex items-center px-6 md:px-10">
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground drop-shadow-lg">
                  {group.title}
                </h3>
              </div>
            </div>

            <div
              ref={(el) => { gridRefs.current[groupIdx] = el; }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {group.services.map((s) => (
                <button
                  key={s.name}
                  onClick={() => setSelectedService(s)}
                  className="service-card group bg-card border border-border/60 rounded-2xl p-6 hover:border-orange/30 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 cursor-pointer text-left"
                >
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <h4 className="font-heading font-bold text-foreground group-hover:text-primary transition-colors mb-2 text-sm leading-snug">
                    {s.name}
                  </h4>
                  <p className="text-xs text-muted-foreground group-hover:text-muted-foreground transition-colors leading-relaxed">
                    {s.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-3 text-xs font-heading font-semibold text-orange group-hover:text-orange transition-colors">
                    Learn more
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-10 p-8 bg-secondary rounded-2xl border border-border/50">
          <p className="text-base font-heading font-semibold text-foreground mb-2">
            Not sure what you need?
          </p>
          <p className="text-muted-foreground text-sm mb-4">Call us for a free, no-pressure estimate.</p>
          <a href={`tel:${company.phoneRaw}`} className="inline-flex items-center gap-2 bg-orange text-white font-heading font-bold text-sm uppercase px-6 py-3 rounded-lg hover:brightness-110 transition-all shadow-md shadow-orange/20">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            {company.phone} — Call Now
          </a>
        </div>
      </div>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="sm:max-w-lg p-0 overflow-hidden">
          {selectedService && (
            <>
              <div className="relative h-52 w-full">
                <img
                  src={selectedService.image}
                  alt={selectedService.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <DialogHeader>
                  <DialogTitle className="font-heading text-xl text-foreground flex items-center gap-2">
                    <span className="text-2xl">{selectedService.icon}</span>
                    {selectedService.name}
                  </DialogTitle>
                </DialogHeader>
                <DialogDescription className="mt-3 text-muted-foreground text-sm leading-relaxed">
                  {selectedService.detail}
                </DialogDescription>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${company.phoneRaw}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-heading font-bold text-sm py-3 px-4 rounded-md hover:bg-accent/90 transition-colors"
                  >
                    📞 Call {company.phone}
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setSelectedService(null)}
                    className="flex-1 inline-flex items-center justify-center gap-2 border border-primary text-primary font-heading font-bold text-sm py-3 px-4 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Get Free Estimate
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ServicesSection;
