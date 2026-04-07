import Header from '@/components/plumbing/Header';
import HeroSection from '@/components/plumbing/HeroSection';
import TrustStrip from '@/components/plumbing/TrustStrip';
import UrgencyBanner from '@/components/plumbing/UrgencyBanner';
import ServicesSection from '@/components/plumbing/ServicesSection';
import HowItWorks from '@/components/plumbing/HowItWorks';
import WhyChooseUs from '@/components/plumbing/WhyChooseUs';
import ServiceArea from '@/components/plumbing/ServiceArea';
import Testimonials from '@/components/plumbing/Testimonials';
import FAQSection from '@/components/plumbing/FAQSection';
import ContactSection from '@/components/plumbing/ContactSection';
import Footer from '@/components/plumbing/Footer';
import MobileCTABar from '@/components/plumbing/MobileCTABar';
import StructuredData from '@/components/plumbing/StructuredData';

const Index = () => (
  <div className="pb-14 md:pb-0">
    <StructuredData />
    <Header />
    <HeroSection />
    <TrustStrip />
    <UrgencyBanner />
    <ServicesSection />
    <HowItWorks />
    <WhyChooseUs />
    <ServiceArea />
    <Testimonials />
    <FAQSection />
    <ContactSection />
    <Footer />
    <MobileCTABar />
  </div>
);

export default Index;
