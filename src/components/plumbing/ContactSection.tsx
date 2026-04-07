import { useState, type FormEvent } from 'react';
import { company } from '@/config/company.config';

const allServices = [
  'Gas Leak Detection & Repair', 'Frozen Pipe Repair', 'Emergency Plumbing',
  'Drain Cleaning & Power Rodding', 'Video Camera Sewer Inspection', 'Full Sewer Line Replacement',
  'Sewer Line Jetting', 'Overhead Sewer Installation', 'Underground Sewer Repair',
  'Catch Basin Repair & Cleaning', 'Underground Water Main Repair & Installation',
  'Water Pressure Boost', 'Water Line Installation', 'Violation Correcting',
  'Faucet Repair & Replacement', 'Toilet Repair & Replacement',
  'Water Heater Repair & Installation', 'Tankless Water Heater Installation',
  'Sump Pump & Ejector Pump Installation', 'Kitchen Remodeling', 'Bathroom Remodeling',
  'Grease Trap Service', 'Septic Tank Services', 'Lift Stations',
  'Sprinkler & Irrigation Repair', 'Clean-Up Services', 'Other',
];

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const newErrors: Record<string, string> = {};

    if (!data.get('name')) newErrors.name = 'Name is required';
    if (!data.get('phone')) newErrors.phone = 'Phone number is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const inputClass =
    'w-full px-4 py-3 rounded-md border border-border bg-card text-foreground font-body focus:outline-none focus:ring-2 focus:ring-orange';

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-2">
          Get Your Free Estimate
        </h2>
        <div className="w-16 h-1 bg-orange mx-auto mb-12" />

        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="bg-green-50 border border-green-300 text-green-800 rounded-lg p-8 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="font-heading font-bold text-xl mb-2">Thank you!</h3>
                <p>We'll call you back shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input name="name" placeholder="Full Name *" className={inputClass} />
                  {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input name="phone" type="tel" placeholder="Phone Number *" className={inputClass} />
                  {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
                </div>
                <input name="email" type="email" placeholder="Email Address" className={inputClass} />
                <select name="service" className={inputClass} defaultValue="">
                  <option value="" disabled>Service Needed</option>
                  {allServices.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <select name="property" className={inputClass} defaultValue="">
                  <option value="" disabled>Property Type</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Industrial</option>
                </select>
                <textarea
                  name="description"
                  rows={4}
                  placeholder="Brief Description of Issue"
                  className={inputClass}
                />
                <button
                  type="submit"
                  className="w-full bg-orange text-accent-foreground font-heading font-bold text-lg uppercase py-4 rounded-md hover:brightness-110 transition"
                >
                  Send My Request →
                </button>
                <p className="text-center text-sm text-muted-foreground">🔒 Secure Form</p>
              </form>
            )}
          </div>

          {/* Contact info card */}
          <div className="bg-primary rounded-xl p-8 text-primary-foreground">
            <h3 className="font-heading font-bold text-2xl mb-6">Contact Us Directly</h3>
            <div className="space-y-5">
              <div>
                <div className="text-sm text-primary-foreground/60 mb-1">📞 Phone</div>
                <a href={`tel:${company.phoneRaw}`} className="text-2xl font-heading font-bold text-orange hover:underline">
                  {company.phone}
                </a>
              </div>
              <div>
                <div className="text-sm text-primary-foreground/60 mb-1">📧 Email</div>
                <a href={`mailto:${company.email}`} className="hover:underline text-primary-foreground">
                  {company.email}
                </a>
              </div>
              <div>
                <div className="text-sm text-primary-foreground/60 mb-1">📍 Address</div>
                <p>{company.address.full}</p>
              </div>
              <div>
                <div className="text-sm text-primary-foreground/60 mb-1">🕐 Hours</div>
                <p>{company.hours}</p>
              </div>

              <div className="border-t border-primary-foreground/20 pt-5 mt-5">
                <p className="font-heading font-bold text-xl text-orange mb-1">
                  Emergency? Call any time.
                </p>
                <p className="text-sm text-primary-foreground/70">Licensed | Bonded | Insured</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
