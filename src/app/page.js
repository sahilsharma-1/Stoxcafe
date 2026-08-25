import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustTicker from '@/components/TrustTicker';
import ServicesMenu from '@/components/ServicesMenu';
import HowItWorks from '@/components/HowItWorks';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import OrderCTA from '@/components/OrderCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-noise">
      <Navbar />
      <Hero />
      <TrustTicker />
      <ServicesMenu />
      <HowItWorks />
      <WhyUs />
      <Testimonials />
      <OrderCTA />
      <Footer />
    </main>
  );
}
