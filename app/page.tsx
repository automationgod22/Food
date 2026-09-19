import React from 'react';
import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import SpiritSection from '@/components/SpiritSection';
import CateringSection from '@/components/CateringSection';
import RootedSection from '@/components/RootedSection';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="top">
        <HeroSlider />
        <SpiritSection />
        <CateringSection />
        <RootedSection />
        <Testimonials />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
