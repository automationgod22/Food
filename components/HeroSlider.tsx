'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Slide {
  image: string;
  title: React.ReactNode;
  copy: string;
  alt: string;
}

const slides: Slide[] = [
  {
    image: '/img/kk_banner_palace.jpg',
    title: (
      <>
        Royal Flavors
        <br />
        Timeless Heritage
      </>
    ),
    copy: 'Step into an atmosphere that celebrates the opulent soul of India — a harmonious blend of royal palace architecture, soothing amber ambience, and heartfelt hospitality that treats every guest like royalty.',
    alt: 'Khana Khajana royal dining hall',
  },
  {
    image: '/img/kk_banner_feast.jpg',
    title: (
      <>
        <span style={{ fontFamily: 'inherit' }}>25 </span>Years of Culinary
        <br />
        Majesty
      </>
    ),
    copy: 'From slow-cooked saffron biryanis to copper handis simmering with rich gravies, every recipe is a time-honored treasure from royal Indian kitchens.',
    alt: 'Royal Indian culinary feast',
  },
  {
    image: '/img/kk_banner_lounge.jpg',
    title: (
      <>
        One Table.
        <br />
        Countless Treasures.
      </>
    ),
    copy: 'An authentic royal dining journey. Succulent charcoal-grilled kebabs, artisanal naans, and botanical infusions crafted to delight your senses and create timeless memories.',
    alt: 'Khana Khajana lounge experience',
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      className="hslide-stage"
      id="heroSlides"
      aria-label="Featured"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`hslide ${idx === currentIndex ? 'on' : ''}`}
          data-slide
        >
          <img
            className="hslide-bg"
            src={slide.image}
            alt={slide.alt}
          />
          <div className="hslide-veil"></div>
          <div className="hslide-content">
            <div className="hslide-head">
              <h1 className="dsp d1">{slide.title}</h1>
            </div>
            <div className="hslide-bottom-right">
              <p className="hslide-copy">{slide.copy}</p>
              <div className="hslide-dots" id="hsDots">
                {slides.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    className={`hslide-dot ${dotIdx === currentIndex ? 'on' : ''}`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                    onClick={() => setCurrentIndex(dotIdx)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="hslide-nav">
        <button
          className="hslide-arrow"
          id="hsPrev"
          aria-label="Previous slide"
          onClick={handlePrev}
        >
          <svg viewBox="0 0 24 24">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>
        <button
          className="hslide-arrow"
          id="hsNext"
          aria-label="Next slide"
          onClick={handleNext}
        >
          <svg viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
