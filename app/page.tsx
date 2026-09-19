'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import QuickHighlights from '@/components/QuickHighlights';
import HeritageSection from '@/components/HeritageSection';
import SignatureChaats from '@/components/SignatureChaats';
import MenuSection from '@/components/MenuSection';
import HospitalitySection from '@/components/HospitalitySection';
import Testimonials from '@/components/Testimonials';
import VisitSection from '@/components/VisitSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import MobileStickyBar from '@/components/MobileStickyBar';
import ReservationModal from '@/components/ReservationModal';

export default function HomePage() {
  const [isResOpen, setIsResOpen] = useState(false);

  return (
    <>
      <Header />
      <main id="top">
        <HeroSlider />
        <QuickHighlights onOpenReservation={() => setIsResOpen(true)} />
        <HeritageSection />
        <SignatureChaats />
        <MenuSection />
        <HospitalitySection onOpenReservation={() => setIsResOpen(true)} />
        <Testimonials />
        <VisitSection onOpenReservation={() => setIsResOpen(true)} />
      </main>
      <Footer onOpenReservation={() => setIsResOpen(true)} />
      <FloatingWhatsApp />
      <MobileStickyBar onOpenReservation={() => setIsResOpen(true)} />
      <ReservationModal isOpen={isResOpen} onClose={() => setIsResOpen(false)} />
    </>
  );
}
