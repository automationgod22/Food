'use client';

import React from 'react';

export default function HeritageSection() {
  return (
    <section id="heritage" className="kp-heritage-section" aria-label="Our Heritage">
      <div className="kp-container">
        <div className="kp-heritage-grid">
          {/* Left Column: Story & Milestones */}
          <div className="kp-heritage-content">
            <div className="kp-section-tag">
              <span className="kp-tag-line">SINCE 1952</span>
              <span className="kp-tag-pill">THE LEGENDARY ODYSSEY</span>
            </div>

            <h2 className="kp-section-title">
              From the Streets of Old Bombay to <br />
              <span className="kp-gold-text">Panampilly Nagar, Kochi</span>
            </h2>

            <p className="kp-lead-text">
              Seven decades ago, in 1952, the Mulchandani brothers embarked on a timeless culinary journey.
              Armed with ancestral Sindhi secret recipes and an unyielding reverence for pure vegetarian gastronomy,
              they set up what would become an enduring Indian cultural icon: <strong>Kailash Parbat</strong>.
            </p>

            <p className="kp-body-text">
              What began with piping-hot samosas, crisp spiced puris, and delicate tamarind chutneys has today
              blossomed into a globally celebrated institution. Today, at our flagship restaurant in Panampilly Nagar,
              we bring the same authentic Mumbai street soul, charcoal-fired Mughlai kebabs, rich North Indian handis,
              and sweet halwai traditions to Kochi.
            </p>

            {/* Heritage Values Grid */}
            <div className="kp-values-grid">
              <div className="kp-value-card">
                <span className="kp-value-icon">🌱</span>
                <div>
                  <h4>100% Pure Vegetarian</h4>
                  <p>Strictly vegetarian kitchen with extensive Jain-safe preparations without onion or garlic.</p>
                </div>
              </div>

              <div className="kp-value-card">
                <span className="kp-value-icon">🏺</span>
                <div>
                  <h4>Secret 1952 Spice Blends</h4>
                  <p>Hand-roasted spices, churned artisanal yogurts, and tangy chutneys made fresh everyday.</p>
                </div>
              </div>

              <div className="kp-value-card">
                <span className="kp-value-icon">💎</span>
                <div>
                  <h4>Royal Kochi Ambience</h4>
                  <p>Plush contemporary interior, wheelchair accessible, with free dedicated valet parking.</p>
                </div>
              </div>
            </div>

            {/* Heritage Stats Strip */}
            <div className="kp-stats-row">
              <div className="kp-stat-item">
                <span className="kp-stat-num">1952</span>
                <span className="kp-stat-label">Inception Year</span>
              </div>
              <div className="kp-stat-sep"></div>
              <div className="kp-stat-item">
                <span className="kp-stat-num">70+</span>
                <span className="kp-stat-label">Years Legacy</span>
              </div>
              <div className="kp-stat-sep"></div>
              <div className="kp-stat-item">
                <span className="kp-stat-num">140+</span>
                <span className="kp-stat-label">Authentic Dishes</span>
              </div>
              <div className="kp-stat-sep"></div>
              <div className="kp-stat-item">
                <span className="kp-stat-num">4.6★</span>
                <span className="kp-stat-label">Google Rating (373+ Reviews)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Imagery Collage from verified Assets */}
          <div className="kp-heritage-visual">
            <div className="kp-collage-wrap">
              <div className="kp-collage-main">
                <img
                  src="/kp/dishes/paneer_tikka_brass.jpg"
                  alt="Kailash Parbat Signature Paneer Tikka on Brass Platter"
                  className="kp-collage-img-1"
                />
                <div className="kp-collage-tag">
                  <strong>Signature Tandoor</strong>
                  <span>Charcoal Roasted Malai Paneer</span>
                </div>
              </div>

              <div className="kp-collage-sub">
                <img
                  src="/kp/dishes/chaat_platter.jpg"
                  alt="Authentic Grand KP Chaat Platter"
                  className="kp-collage-img-2"
                />
                <div className="kp-floating-stamp">
                  <span className="kp-stamp-yr">1952</span>
                  <span className="kp-stamp-txt">TRADITION</span>
                </div>
              </div>

              <div className="kp-collage-mini">
                <img
                  src="/kp/dishes/interior_mural.jpg"
                  alt="Kailash Parbat The Gateway Bombay Mural"
                  className="kp-collage-img-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
