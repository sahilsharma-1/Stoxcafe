import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import ServicesSection from '@/components/ServicesSection';
import HowItWorks from '@/components/HowItWorks';
import Credibility from '@/components/Credibility';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import GetStarted from '@/components/GetStarted';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-paper">
      <Navbar />
      <Hero />
      <TrustBar />
      <ServicesSection />
      <HowItWorks />
      <Credibility />
      <WhyUs />
      <Testimonials />
      <GetStarted />
      <Footer />
    </main>
  );
}
