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
import KochiDiningGuide from '@/components/KochiDiningGuide';
import VisitSection from '@/components/VisitSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import MobileStickyBar from '@/components/MobileStickyBar';
import ReservationModal from '@/components/ReservationModal';
import MenuModal from '@/components/MenuModal';

export default function HomePage() {
  const [isResOpen, setIsResOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenReservation={() => setIsResOpen(true)}
      />
      <main id="top">
        <HeroSlider onOpenMenu={() => setIsMenuOpen(true)} />
        <QuickHighlights
          onOpenMenu={() => setIsMenuOpen(true)}
          onOpenReservation={() => setIsResOpen(true)}
        />
        <HeritageSection />
        <SignatureChaats />
        <MenuSection onOpenMenu={() => setIsMenuOpen(true)} />
        <HospitalitySection onOpenReservation={() => setIsResOpen(true)} />
        <Testimonials />
        <KochiDiningGuide
          onOpenMenu={() => setIsMenuOpen(true)}
          onOpenReservation={() => setIsResOpen(true)}
        />
        <VisitSection onOpenReservation={() => setIsResOpen(true)} />
      </main>
      <Footer
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenReservation={() => setIsResOpen(true)}
      />
      <FloatingWhatsApp />
      <MobileStickyBar
        onOpenReservation={() => setIsResOpen(true)}
        onOpenMenu={() => setIsMenuOpen(true)}
      />
      <ReservationModal isOpen={isResOpen} onClose={() => setIsResOpen(false)} />
      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
