import Logo from './Logo';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
  { label: 'Free Estimate', href: '#contact' },
];

const Footer = () => (
  <footer className="bg-navy-dark text-primary-foreground">
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <Logo light />
          <p className="mt-4 text-primary-foreground/70 text-sm">
            Chicago's Trusted Plumbing Experts — Serving the City for Over 50 Years
          </p>
        </div>

        <div>
          <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-primary-foreground/70 hover:text-orange transition text-sm">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-lg mb-4">Contact</h4>
          <div className="space-y-2 text-sm text-primary-foreground/70">
            <p>
              <a href="tel:7736192730" className="text-orange font-bold hover:underline">
                (773) 619-2730
              </a>
            </p>
            <p>
              <a href="mailto:zunigaplumbing@yahoo.com" className="hover:underline">
                zunigaplumbing@yahoo.com
              </a>
            </p>
            <p>7253 S. Green St, Chicago, IL 60621</p>
            <p>Mon–Fri: 8:00 AM – 5:00 PM</p>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10 py-4">
      <p className="text-center text-xs text-primary-foreground/50">
        © 2025 Zuniga's Plumbing Inc. All rights reserved. | Licensed, Bonded & Insured | Chicago, IL
      </p>
    </div>
  </footer>
);

export default Footer;
