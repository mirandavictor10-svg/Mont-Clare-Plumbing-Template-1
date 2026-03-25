import Header from '@/components/plumbing/Header';
import HeroSection from '@/components/plumbing/HeroSection';
import UrgencyBanner from '@/components/plumbing/UrgencyBanner';
import ServicesSection from '@/components/plumbing/ServicesSection';
import WhyChooseUs from '@/components/plumbing/WhyChooseUs';
import ServiceArea from '@/components/plumbing/ServiceArea';
import Testimonials from '@/components/plumbing/Testimonials';
import ContactSection from '@/components/plumbing/ContactSection';
import Footer from '@/components/plumbing/Footer';
import MobileCTABar from '@/components/plumbing/MobileCTABar';

const Index = () => (
  <div className="pb-14 md:pb-0">
    <Header />
    <HeroSection />
    <UrgencyBanner />
    <ServicesSection />
    <WhyChooseUs />
    <ServiceArea />
    <Testimonials />
    <ContactSection />
    <Footer />
    <MobileCTABar />
  </div>
);

export default Index;
