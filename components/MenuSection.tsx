'use client';

import React from 'react';

interface MenuSectionProps {
  onOpenMenu: () => void;
}

export default function MenuSection({ onOpenMenu }: MenuSectionProps) {
  const highlights = [
    {
      category: 'Legendary Chaats',
      count: '15+ Varieties',
      desc: 'Pani Puri with chilled spiced mint water, Royal Dahi Puri, Sev Puri, Bhel Puri, and Crispy Corn Baskets.',
      image: '/kp/dishes/chaat_platter.jpg',
      tag: 'Estd 1952',
    },
    {
      category: 'Bombay Soul Food',
      count: 'House Specials',
      desc: 'Signature Tawa Butter Pav Bhaji with golden butter curls, Bombay Wada Pav (2 Pcs), and Chole Bhature.',
      image: '/kp/dishes/pav_bhaji.jpg',
      tag: 'Bestsellers',
    },
    {
      category: 'Tandoor & Royal Curries',
      count: 'Clay Oven Recipes',
      desc: 'Charcoal Paneer Tikka on banana leaf, Hariyali Green Tikka, Paneer Tikka Lababdar, and 12-Hr Dal Makhani.',
      image: '/kp/dishes/paneer_tikka_brass.jpg',
      tag: 'Chef Specials',
    },
    {
      category: 'Biryanis & Artisanal Sweets',
      count: 'Royal Feast',
      desc: 'Dum Hyderabadi Biryani, Tandoori Garlic Naans, thickened Malai Rabdi, and Warm Gulab Jamun.',
      image: '/kp/dishes/royal_curries_handi.jpg',
      tag: 'Desserts & Mains',
    },
  ];

  return (
    <section id="menu" className="kp-menu-preview-section" aria-label="Menu Showcase">
      <div className="kp-container">
        {/* Section Header */}
        <div className="kp-center-header">
          <div className="kp-section-tag">
            <span className="kp-tag-line">THE CULINARY REPERTOIRE</span>
            <span className="kp-tag-pill">140+ DISHES • 100% PURE VEG</span>
          </div>
          <h2 className="kp-section-title">
            Explore the World of <span className="kp-gold-text">Kailash Parbat Flavors</span>
          </h2>
          <p className="kp-section-subtitle">
            From the sizzling clay ovens and bubbling copper handis to our world-renowned chaat counters,
            explore our complete menu with authentic pricing and instant delivery.
          </p>
        </div>

        {/* 4 Culinary Highlight Pillars */}
        <div className="kp-menu-preview-grid">
          {highlights.map((h, i) => (
            <div key={i} className="kp-preview-card" onClick={onOpenMenu} role="button" tabIndex={0}>
              <div className="kp-preview-media">
                <img src={h.image} alt={h.category} className="kp-preview-img" loading="lazy" />
                <span className="kp-preview-badge">{h.tag}</span>
                <span className="kp-preview-count">{h.count}</span>
              </div>
              <div className="kp-preview-body">
                <h3 className="kp-preview-title">{h.category}</h3>
                <p className="kp-preview-desc">{h.desc}</p>
                <button className="kp-preview-explore-btn" onClick={onOpenMenu}>
                  View Items & Prices →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Big Organized Menu Trigger Banner */}
        <div className="kp-menu-cta-box">
          <div className="kp-cta-box-left">
            <span className="kp-box-pill">CLICK TO EXPAND</span>
            <h3>Ready to Discover All 140+ Recipes?</h3>
            <p>
              Open our interactive digital menu with category filtering, instant search, Jain options,
              or browse the original printed 10-page Kailash Parbat menu booklet.
            </p>
          </div>

          <div className="kp-cta-box-actions">
            <button onClick={onOpenMenu} className="kp-btn-gold">
              <span>📖</span> Open Full Menu & Prices
            </button>
            <div className="kp-direct-delivery-strip">
              <span>Order Direct to Kochi:</span>
              <a
                href="https://www.zomato.com/kochi/kailash-parbat-panampilly-nagar/order"
                target="_blank"
                rel="noreferrer"
                className="kp-micro-order zomato"
              >
                Zomato
              </a>
              <a
                href="https://www.swiggy.com/city/kochi/kailash-parbat-panampilly-nagar-panampilly-nagar-rest1420901?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder"
                target="_blank"
                rel="noreferrer"
                className="kp-micro-order swiggy"
              >
                Swiggy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
