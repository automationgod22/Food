'use client';

import React from 'react';

interface VisitSectionProps {
  onOpenReservation: () => void;
}

export default function VisitSection({ onOpenReservation }: VisitSectionProps) {
  return (
    <section id="visit" className="kp-visit-section" aria-label="Visit and Location">
      <div className="kp-container">
        <div className="kp-visit-grid">
          {/* Left Column: Address, Hours, Delivery Cards */}
          <div className="kp-visit-details">
            <div className="kp-section-tag">
              <span className="kp-tag-line">PLAN YOUR VISIT</span>
              <span className="kp-tag-pill">FLAGSHIP RESTAURANT</span>
            </div>

            <h2 className="kp-section-title">
              Visit Kailash Parbat in <br />
              <span className="kp-gold-text">Panampilly Nagar, Kochi</span>
            </h2>

            <div className="kp-info-cards">
              {/* Address Card */}
              <div className="kp-info-card">
                <span className="kp-info-icon">📍</span>
                <div>
                  <h4>Restaurant Address</h4>
                  <p>Panampilly Nagar, Kochi, Ernakulam, Kerala 682036</p>
                  <small>Located in the heart of Kochi with plenty of dedicated free car parking.</small>
                </div>
              </div>

              {/* Hours Card */}
              <div className="kp-info-card">
                <span className="kp-info-icon">🕒</span>
                <div>
                  <h4>Dining & Delivery Timings</h4>
                  <p>Monday – Sunday: <strong>11:30 AM – 11:00 PM</strong></p>
                  <span className="kp-open-status">● Open Today • Serving Lunch, Chaat & Dinner</span>
                </div>
              </div>

              {/* Service Options */}
              <div className="kp-info-card">
                <span className="kp-info-icon">✨</span>
                <div>
                  <h4>Services & Dining Options</h4>
                  <p>Dine-In • Kerbside Pickup • Takeaway • No-Contact Delivery</p>
                  <small>Jain Preparations Available • Wheelchair Accessible Throughout</small>
                </div>
              </div>
            </div>

            {/* Actions: Book Table & Order Delivery */}
            <div className="kp-visit-actions">
              <button onClick={onOpenReservation} className="kp-btn-gold">
                Book a Table Now
              </button>

              <div className="kp-delivery-pair">
                <a
                  href="https://www.zomato.com/kochi/kailash-parbat-panampilly-nagar/order"
                  target="_blank"
                  rel="noreferrer"
                  className="kp-app-btn zomato"
                >
                  <span className="app-dot">●</span> Order on Zomato
                </a>
                <a
                  href="https://www.swiggy.com/city/kochi/kailash-parbat-panampilly-nagar-panampilly-nagar-rest1420901?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder"
                  target="_blank"
                  rel="noreferrer"
                  className="kp-app-btn swiggy"
                >
                  <span className="app-dot">●</span> Order on Swiggy
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Location Frame & Route */}
          <div className="kp-map-card">
            <div className="kp-map-frame">
              <iframe
                title="Kailash Parbat Panampilly Nagar Kochi Map"
                src="https://maps.google.com/maps?q=Kailash%20Parbat%20Panampilly%20Nagar%20Kochi%20Kerala%20682036&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="380"
                style={{ border: 0, borderRadius: '16px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="kp-map-footer">
              <div className="kp-map-badges">
                <span className="kp-mbadge">🚗 Free Parking Lot</span>
                <span className="kp-mbadge">♿ Wheelchair Car Park & Entrance</span>
                <span className="kp-mbadge">🌱 100% Pure Veg</span>
              </div>
              <a
                href="https://maps.google.com/?q=Kailash+Parbat+Panampilly+Nagar+Kochi"
                target="_blank"
                rel="noreferrer"
                className="kp-directions-btn"
              >
                Open Google Maps Directions ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
