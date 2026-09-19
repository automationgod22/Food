'use client';

import React from 'react';

interface HospitalitySectionProps {
  onOpenReservation?: () => void;
}

export default function HospitalitySection({ onOpenReservation }: HospitalitySectionProps) {
  return (
    <section id="hospitality" className="kp-hosp-section" aria-label="Hospitality and Ambience">
      <div className="kp-container">
        {/* Section Header */}
        <div className="kp-center-header">
          <div className="kp-section-tag">
            <span className="kp-tag-line">PANAMPILLY NAGAR, KOCHI</span>
            <span className="kp-tag-pill">WORLD-CLASS COMFORT</span>
          </div>
          <h2 className="kp-section-title">
            Exceptional Hospitality & <span className="kp-gold-text">Luxury Ambience</span>
          </h2>
          <p className="kp-section-subtitle">
            Crafted for royal family gatherings, leisurely business lunches, and romantic dinners.
            Immerse yourself in our plush dining room with personalized recommendations from our host.
          </p>
        </div>

        {/* Manager / Host Spotlight & Interior Cards */}
        <div className="kp-hosp-grid">
          {/* Host Card: Udhav Nayak */}
          <div className="kp-host-card">
            <div className="kp-host-media">
              <img
                src="/kp/dishes/udhav_nayak_host.jpg"
                alt="Udhav Nayak - Restaurant Host & Manager at Kailash Parbat Panampilly Nagar"
                className="kp-host-img"
              />
              <div className="kp-host-badge">
                <span>⭐ Hospitality Lead</span>
              </div>
            </div>

            <div className="kp-host-info">
              <span className="kp-host-role">RESTAURANT MANAGER & HOST</span>
              <h3 className="kp-host-name">Udhav Nayak</h3>
              <blockquote className="kp-host-quote">
                &ldquo;At Kailash Parbat Panampilly Nagar, our greatest joy is welcoming every guest as family.
                From tailoring Jain dishes to curating the perfect chaat tasting journey, your delight is our
                passion.&rdquo;
              </blockquote>

              <div className="kp-host-testimonial">
                <div className="kp-review-stars">★★★★★</div>
                <p className="kp-guest-words">
                  &ldquo;The service and recommendations from <strong>UDHAV NAYAK</strong> was extremely helpful
                  and I strongly recommend Kailash Parbat to those who look for quality food, great service and cosy
                  atmosphere.&rdquo;
                </p>
                <span className="kp-guest-author">— Mohandas Poyilath Variath (Google Verified Diner)</span>
              </div>
            </div>
          </div>

          {/* Ambience & Interiors Showcase: AI Regal Dining Experience */}
          <div className="kp-ambience-card kp-scroll-zoom-card in-view">
            <div className="kp-ambience-img-wrap kp-scroll-zoom-media">
              <img
                src="/kp/dishes/regal_dining_hall.jpg"
                alt="Regal Fine Dining Experience at Kailash Parbat Panampilly Nagar Kochi"
                className="kp-ambience-img kp-scroll-zoom-img"
                loading="lazy"
              />
              <div className="kp-ambience-overlay">
                <span className="kp-ambience-pill">✨ Imperial Dining Halls & Crystal Chandeliers</span>
              </div>
            </div>

            <div className="kp-ambience-body">
              <div className="kp-regal-badge-row">
                <span className="kp-regal-badge">ROYAL COMFORT</span>
                <span className="kp-regal-stars">★★★★★ 4.6/5 Diner Rating</span>
              </div>
              <h3 className="kp-ambience-title">The Regal Dining Experience</h3>
              <p className="kp-ambience-text">
                &ldquo;Been to a number of Kailash Parbat locations across the country, but this Panampilly Nagar
                restaurant look and feel is completely extraordinary. The interior is superbly done with warm
                golden chandeliers, plush velvet banquettes, acoustic balance, and spotless five-star hygiene.&rdquo;
              </p>
              <span className="kp-guest-author">— Abhishek Katriar (Local Guide • 221 Reviews)</span>

              {onOpenReservation && (
                <button onClick={onOpenReservation} className="kp-btn-gold mt-4">
                  <span>📅</span> Reserve Your Regal Table
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Restaurant Amenities Checklist (from Details.txt) */}
        <div className="kp-amenities-strip">
          <div className="kp-amenity-col">
            <span className="kp-amenity-icon">🚗</span>
            <div className="kp-amenity-text">
              <strong>Free Parking & Valet</strong>
              <small>Dedicated car park with ample spacious parking slots</small>
            </div>
          </div>

          <div className="kp-amenity-col">
            <span className="kp-amenity-icon">♿</span>
            <div className="kp-amenity-text">
              <strong>Wheelchair Accessible</strong>
              <small>Accessible parking, entrance, seating & clean restrooms</small>
            </div>
          </div>

          <div className="kp-amenity-col">
            <span className="kp-amenity-icon">👶</span>
            <div className="kp-amenity-text">
              <strong>Family & Kids Friendly</strong>
              <small>High chairs, customized mild spices & kids menu</small>
            </div>
          </div>

          <div className="kp-amenity-col">
            <span className="kp-amenity-icon">💳</span>
            <div className="kp-amenity-text">
              <strong>Contactless Digital Pay</strong>
              <small>NFC, Credit/Debit cards, UPI & fast table service</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
