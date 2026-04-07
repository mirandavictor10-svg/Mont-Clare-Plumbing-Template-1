import Logo from './Logo';
import { company } from '@/config/company.config';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
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
            {company.footerTagline}
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
              <a href={`tel:${company.phoneRaw}`} className="text-orange font-bold hover:underline">
                {company.phone}
              </a>
            </p>
            {company.secondaryPhone && <p>{company.secondaryPhoneLabel}: {company.secondaryPhone}</p>}
            {company.email && (
              <p>
                <a href={`mailto:${company.email}`} className="hover:underline">
                  {company.email}
                </a>
              </p>
            )}
            <p>{company.address.full}</p>
            <p>{company.hours}</p>
            <p>{company.licenseNumber}</p>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10 py-4">
      <p className="text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} {company.name}. All rights reserved. | Licensed, Bonded & Insured | {company.address.city}, {company.address.state}
      </p>
    </div>
  </footer>
);

export default Footer;
