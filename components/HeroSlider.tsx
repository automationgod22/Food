'use client';

import React, { useState, useEffect, useRef } from 'react';

interface HeroSliderProps {
  onOpenMenu?: () => void;
}

interface Slide {
  id: number;
  tagline: string;
  title: string;
  highlight: string;
  subtitle: string;
  badge: string;
  priceTag: string;
  image: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  isMenuAction?: boolean;
}

const slides: Slide[] = [
  {
    id: 1,
    tagline: 'Since 1952 • Iconic Bombay Street Food',
    title: 'World-Famous',
    highlight: 'Butter Pav Bhaji',
    subtitle:
      'Slow-simmered spiced vegetable medley finished with pure dollops of butter curls, accompanied by warm, fluffy buttered pav rolls. A recipe perfected over 70 years.',
    badge: 'Signature House Special',
    priceTag: '₹329.00',
    image: '/kp/dishes/pav_bhaji.jpg',
    primaryCtaText: 'Order on Zomato',
    primaryCtaLink: 'https://www.zomato.com/kochi/kailash-parbat-panampilly-nagar/order',
    secondaryCtaText: 'Explore Menu',
    isMenuAction: true,
  },
  {
    id: 2,
    tagline: 'Royal Tandoor & Mughlai Heritage',
    title: 'Sizzling Charcoal',
    highlight: 'Paneer Tikka',
    subtitle:
      'Tender malai cottage cheese marinated in crushed whole spices and Greek-style curd, roasted in clay tandoors to smoky perfection with tangy mint-coriander chutney.',
    badge: 'Chef Recommended',
    priceTag: '₹439.00',
    image: '/kp/dishes/paneer_tikka_brass.jpg',
    primaryCtaText: 'Order on Swiggy',
    primaryCtaLink:
      'https://www.swiggy.com/city/kochi/kailash-parbat-panampilly-nagar-panampilly-nagar-rest1420901?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder',
    secondaryCtaText: 'View Tandoor Starters',
    isMenuAction: true,
  },
  {
    id: 3,
    tagline: 'Legendary Sindhi & Bombay Chaat',
    title: 'Grand Royal',
    highlight: 'KP Chaat Platter',
    subtitle:
      'An exciting platter of silky Dahi Wada, tangy Bhel Puri, 3 pcs Sev Puri & 3 pcs Crispy Corn Baskets topped with sweet and sour chutneys and fine sev.',
    badge: '1952 Classic',
    priceTag: '₹459.00',
    image: '/kp/dishes/chaat_platter.jpg',
    primaryCtaText: 'Order on Zomato',
    primaryCtaLink: 'https://www.zomato.com/kochi/kailash-parbat-panampilly-nagar/order',
    secondaryCtaText: 'Discover Chaat Bar',
    isMenuAction: false,
  },
  {
    id: 4,
    tagline: 'The Original Mumbai Soul Food',
    title: 'Authentic Street',
    highlight: 'Bombay Wada Pav (2 Pcs)',
    subtitle:
      'Golden spiced batata fritters hugged by pillowy pav buns, coated with fiery roasted garlic chutney and served with blistered salted green chilies.',
    badge: 'Mumbai Legend',
    priceTag: '2 Pcs • ₹199',
    image: '/kp/dishes/vada_pav_brass.jpg',
    primaryCtaText: 'Order on Swiggy',
    primaryCtaLink:
      'https://www.swiggy.com/city/kochi/kailash-parbat-panampilly-nagar-panampilly-nagar-rest1420901?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder',
    secondaryCtaText: 'View Street Specials',
    isMenuAction: true,
  },
  {
    id: 5,
    tagline: 'North Indian Majestic Curries',
    title: 'Rich & Velvety',
    highlight: 'Paneer Tikka Lababdar',
    subtitle:
      'Grilled cottage cheese cubes simmered in our signature simmered tomato-cashew satin gravy, enriched with aromatic dried fenugreek leaves and saffron butter.',
    badge: 'All-Time Favorite',
    priceTag: '₹449.00',
    image: '/kp/dishes/paneer_lababdar_curry.jpg',
    primaryCtaText: 'Order on Zomato',
    primaryCtaLink: 'https://www.zomato.com/kochi/kailash-parbat-panampilly-nagar/order',
    secondaryCtaText: 'Full Menu',
    isMenuAction: true,
  },
];

export default function HeroSlider({ onOpenMenu }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const goToSlide = (idx: number) => {
    setCurrent(idx);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setTouchStartX(null);
  };

  return (
    <section
      className="kp-hero-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Kailash Parbat Showcase"
    >
      {/* Background Ambience Layers */}
      <div className="kp-hero-glow glow-1"></div>
      <div className="kp-hero-glow glow-2"></div>

      <div className="kp-hero-container">
        {slides.map((slide, idx) => {
          const isActive = idx === current;
          return (
            <div
              key={slide.id}
              className={`kp-hero-slide ${isActive ? 'active' : ''}`}
              aria-hidden={!isActive}
            >
              {/* Left Content Column */}
              <div className="kp-hero-text-col">
                <div className="kp-hero-tag-wrap">
                  <span className="kp-hero-tag-line">{slide.tagline}</span>
                  {slide.badge && <span className="kp-hero-badge-pill">{slide.badge}</span>}
                </div>

                <h1 className="kp-hero-title">
                  {slide.title} <br />
                  <span className="kp-hero-highlight">{slide.highlight}</span>
                </h1>

                {/* Mobile-only featured dish image */}
                <div className="kp-mobile-dish-preview">
                  <img
                    src={slide.image}
                    alt={`${slide.title} ${slide.highlight}`}
                    className="kp-mobile-hero-img"
                  />
                  <div className="kp-mobile-img-badge">
                    <span>{slide.priceTag}</span>
                  </div>
                </div>

                <p className="kp-hero-desc">{slide.subtitle}</p>

                {slide.priceTag && (
                  <div className="kp-hero-pricing">
                    <span className="kp-price-label">Authentic Recipe:</span>
                    <span className="kp-price-value">{slide.priceTag}</span>
                    <span className="kp-price-note">100% Pure Veg</span>
                  </div>
                )}

                <div className="kp-hero-ctas">
                  <a
                    href={slide.primaryCtaLink}
                    target="_blank"
                    rel="noreferrer"
                    className="kp-btn-gold"
                  >
                    {slide.primaryCtaText}
                    <svg viewBox="0 0 20 20" fill="currentColor" className="kp-btn-arrow">
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>

                  {slide.isMenuAction && onOpenMenu ? (
                    <button onClick={onOpenMenu} className="kp-btn-outline">
                      {slide.secondaryCtaText}
                    </button>
                  ) : (
                    <a href="#chaats" className="kp-btn-outline">
                      {slide.secondaryCtaText}
                    </a>
                  )}
                </div>

                {/* Trust Badges */}
                <div className="kp-hero-trust-strip">
                  <div className="kp-trust-item">
                    <span className="kp-trust-icon">★</span>
                    <div>
                      <strong>4.6 / 5.0 Rating</strong>
                      <small>373+ Verified Google Reviews</small>
                    </div>
                  </div>
                  <div className="kp-trust-sep"></div>
                  <div className="kp-trust-item">
                    <span className="kp-trust-icon">🌿</span>
                    <div>
                      <strong>100% Pure Vegetarian</strong>
                      <small>Dedicated Jain Kitchen Section</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Right Visual Column */}
              <div className="kp-hero-visual-col">
                <div className="kp-visual-frame">
                  <div className="kp-frame-decor"></div>
                  <img
                    src={slide.image}
                    alt={`${slide.title} ${slide.highlight} - Kailash Parbat`}
                    className="kp-hero-img"
                    loading={idx === 0 ? 'eager' : 'lazy'}
                  />
                  <div className="kp-img-overlay-card">
                    <span className="kp-overlay-sparkle">✨</span>
                    <div>
                      <strong>Panampilly Nagar, Kochi</strong>
                      <span>Freshly made to order</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Slider Controls */}
      <div className="kp-slider-controls">
        <button
          onClick={prevSlide}
          className="kp-ctrl-btn prev"
          aria-label="Previous Slide"
        >
          ‹
        </button>

        <div className="kp-dots-track">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goToSlide(i)}
              className={`kp-dot ${i === current ? 'active' : ''}`}
              aria-label={`Go to slide ${i + 1}`}
            >
              <span className="kp-dot-fill"></span>
            </button>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="kp-ctrl-btn next"
          aria-label="Next Slide"
        >
          ›
        </button>
      </div>
    </section>
  );
}
