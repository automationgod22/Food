'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface KochiDiningGuideProps {
  onOpenMenu: () => void;
  onOpenReservation: () => void;
}

const faqs = [
  {
    q: 'Which are the best restaurants in Kochi for dinner with family?',
    a: 'Kailash Parbat in Panampilly Nagar is widely celebrated as one of the best restaurants in Kochi for dinner. Offering a luxurious contemporary ambience, private valet parking, and an expansive menu of over 140 dishes ranging from charcoal-roasted Paneer Tikka to 12-hour slow-cooked Dal Makhani and royal biryanis, it is the premier choice for family celebrations and dinner gatherings.',
  },
  {
    q: 'Where can I find the best North Indian food and authentic chaat in Kochi?',
    a: 'Since 1952, Kailash Parbat has been the benchmark for authentic North Indian curries and legendary Bombay chaats. Visitors in Kochi can indulge in handcrafted Crispy Pani Puri, Royal Dahi Wada, buttery Pav Bhaji, and Amritsari Chole Bhature, prepared with proprietary spice formulas hand-roasted daily.',
  },
  {
    q: 'Is Kailash Parbat Kochi 100% pure vegetarian with Jain options?',
    a: 'Yes, Kailash Parbat is strictly 100% pure vegetarian, completely free of meat, fish, and eggs. We feature an extensive dedicated Jain-safe menu crafted without onions, garlic, or root vegetables, prepared using segregated traditional cookware to guarantee zero cross-contamination.',
  },
  {
    q: 'How far is Kailash Parbat from Fort Kochi and Cochin International Airport?',
    a: 'Located centrally in posh Panampilly Nagar (Ernakulam), Kailash Parbat is approximately 25 minutes from Fort Kochi via the harbor link and easily accessible from Cochin International Airport (COK) via the NH bypass and Kochi Metro (Kadavanthra station is 3 minutes away).',
  },
  {
    q: 'Does Kailash Parbat offer online food delivery in Kochi?',
    a: 'Yes, our entire culinary menu is available for online ordering with rapid 30-minute doorstep delivery across Panampilly Nagar, Kadavanthra, MG Road, Marine Drive, Kaloor, and wider Ernakulam through Zomato and Swiggy.',
  },
];

export default function KochiDiningGuide({
  onOpenMenu,
  onOpenReservation,
}: KochiDiningGuideProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section
      id="kochi-guide"
      className="kp-dining-guide-section"
      aria-label="Kochi Dining & Food Spot Guide"
    >
      <div className="kp-container">
        {/* Section Header */}
        <div className="kp-center-header">
          <div className="kp-section-tag">
            <span className="kp-tag-line">Kochi Gastronomy Guide</span>
            <span className="kp-tag-pill">Panampilly Nagar • Ernakulam</span>
          </div>
          <h2 className="kp-section-title">
            The Definitive Guide to the <br />
            <span className="kp-gold-text">Best Restaurants &amp; Food Spots in Kochi</span>
          </h2>
          <p className="kp-section-subtitle">
            From leisurely executive lunches to magnificent royal family dinners, discover why
            food connoisseurs rank Kailash Parbat among the top fine dining spots in Kochi, Kerala.
          </p>
        </div>

        {/* 4 Editorial Highlights Grid */}
        <div className="kp-guide-grid">
          {/* Card 1 */}
          <article className="kp-guide-card">
            <div className="kp-guide-card-header">
              <span className="kp-guide-num">01</span>
              <span className="kp-guide-tag">Dinner &amp; Celebrations</span>
            </div>
            <h3 className="kp-guide-title">
              Best Restaurants in Kochi for Dinner
            </h3>
            <p className="kp-guide-body">
              Evening dining in Kochi reaches its peak at Kailash Parbat. Bask under warm crystal
              chandeliers while savoring clay tandoor sizzling kebabs, silky Paneer Tikka Lababdar,
              and rich saffron biryanis. Ideal for anniversaries, birthdays, and relaxing dinners.
            </p>
            <div className="kp-guide-footer">
              <span className="kp-guide-highlight">★ 4.6 Rated • Valet Parking</span>
            </div>
          </article>

          {/* Card 2 */}
          <article className="kp-guide-card">
            <div className="kp-guide-card-header">
              <span className="kp-guide-num">02</span>
              <span className="kp-guide-tag">North Indian Heritage</span>
            </div>
            <h3 className="kp-guide-title">
              Best North Indian Restaurant in Kochi
            </h3>
            <p className="kp-guide-body">
              Longing for the genuine soul of Old Bombay and North India? Our 70-year legacy brings
              slow-simmered 12-hour Dal Makhani, puffy golden Bhaturas, and stuffed Amritsari
              kulchas directly to Panampilly Nagar with unmatched authenticity.
            </p>
            <div className="kp-guide-footer">
              <span className="kp-guide-highlight">Secret 1952 Spices</span>
            </div>
          </article>

          {/* Card 3 */}
          <article className="kp-guide-card">
            <div className="kp-guide-card-header">
              <span className="kp-guide-num">03</span>
              <span className="kp-guide-tag">Lunch &amp; Quick Bites</span>
            </div>
            <h3 className="kp-guide-title">
              Best Restaurants in Kochi for Lunch
            </h3>
            <p className="kp-guide-body">
              Whether you are an executive in central Ernakulam or a traveler exploring Fort Kochi
              and Marine Drive, our royal lunch combos and Punjabi thalis provide wholesome,
              fast, and gourmet dining at unbeatable affordability.
            </p>
            <div className="kp-guide-footer">
              <span className="kp-guide-highlight">Express Combos from ₹419</span>
            </div>
          </article>

          {/* Card 4 */}
          <article className="kp-guide-card">
            <div className="kp-guide-card-header">
              <span className="kp-guide-num">04</span>
              <span className="kp-guide-tag">Pure Veg &amp; Jain Safe</span>
            </div>
            <h3 className="kp-guide-title">
              100% Pure Vegetarian &amp; Jain Sanctum
            </h3>
            <p className="kp-guide-body">
              The gold standard for pure vegetarian dining in Ernakulam. Enjoy total peace of mind
              with our zero egg, zero meat, and specialized Jain preparations (made without onion or
              garlic) crafted in strictly disciplined, clean kitchens.
            </p>
            <div className="kp-guide-footer">
              <span className="kp-guide-highlight">100% Sattvik Certified</span>
            </div>
          </article>
        </div>

        {/* Popular Search Keywords & Kochi Dining Tags */}
        <div className="kp-seo-keywords-banner">
          <span className="kp-seo-keywords-title">Popular Kochi Dining Searches:</span>
          <div className="kp-seo-tags-list">
            <span className="kp-seo-pill">best restaurants in kochi</span>
            <span className="kp-seo-pill">best food spot kochi</span>
            <span className="kp-seo-pill">best restaurants in kochi for dinner</span>
            <span className="kp-seo-pill">best north indian restaurants in kochi</span>
            <span className="kp-seo-pill">best fine dining restaurants in kochi</span>
            <span className="kp-seo-pill">best restaurants in fort kochi for lunch</span>
            <span className="kp-seo-pill">best dinner spots kochi</span>
            <span className="kp-seo-pill">best pure vegetarian restaurant kochi</span>
            <span className="kp-seo-pill">best restaurants in panampilly nagar</span>
            <span className="kp-seo-pill">best affordable restaurants in kochi</span>
            <span className="kp-seo-pill">best dine in restaurants in kochi</span>
            <span className="kp-seo-pill">best restaurants near cochin international airport</span>
          </div>
        </div>

        {/* Interactive FAQ Accordion */}
        <div className="kp-faq-container">
          <div className="kp-faq-header-wrap">
            <span className="kp-faq-kicker">✦ Got Questions?</span>
            <h3 className="kp-faq-title">Frequently Asked Questions About Dining in Kochi</h3>
          </div>

          <div className="kp-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`kp-faq-item ${isOpen ? 'active' : ''}`}
                >
                  <button
                    className="kp-faq-question-btn"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className="kp-faq-arrow" aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="kp-faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Banner */}
        <div className="kp-guide-cta-card">
          <div className="kp-guide-cta-content">
            <h3 className="kp-guide-cta-head">
              Reserve Your Table at Kochi&apos;s Leading Food Spot Today
            </h3>
            <p className="kp-guide-cta-sub">
              Experience the 1952 legacy in Panampilly Nagar. Walk-ins welcomed or book ahead for priority royal seating.
            </p>
          </div>
          <div className="kp-guide-cta-actions">
            <button onClick={onOpenReservation} className="kp-btn-gold">
              Book a Table <span>→</span>
            </button>
            <button onClick={onOpenMenu} className="kp-btn-outline">
              Explore 140+ Dishes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
