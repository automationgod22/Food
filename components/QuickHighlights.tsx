'use client';

import React from 'react';
import Link from 'next/link';

interface QuickHighlightsProps {
  onOpenReservation?: () => void;
}

export default function QuickHighlights({ onOpenReservation }: QuickHighlightsProps) {
  return (
    <section className="kp-highlights-bar" aria-label="Restaurant Highlights">
      <div className="kp-container">
        <div className="kp-highlights-grid">
          {/* Card 1: Chaats */}
          <Link href="#chaats" className="kp-highlight-card">
            <div className="kp-hl-icon-wrap chaat">
              <span>🥟</span>
            </div>
            <div className="kp-hl-content">
              <h4>Legendary Chaat Bar</h4>
              <p>Pani Puri, Dahi Puri, Sev Puri & Bhel made with 70-year secret spice recipes.</p>
              <span className="kp-hl-link">Explore Chaats →</span>
            </div>
          </Link>

          {/* Card 2: Pav Bhaji & Street Food */}
          <Link href="#menu" className="kp-highlight-card">
            <div className="kp-hl-icon-wrap butter">
              <span>🧈</span>
            </div>
            <div className="kp-hl-content">
              <h4>Bombay Butter Pav Bhaji</h4>
              <p>Slow-simmered spiced bhaji topped with golden butter curls and warm pav rolls.</p>
              <span className="kp-hl-link">View Menu →</span>
            </div>
          </Link>

          {/* Card 3: 100% Pure Veg & Jain */}
          <div className="kp-highlight-card">
            <div className="kp-hl-icon-wrap veg">
              <span>🌱</span>
            </div>
            <div className="kp-hl-content">
              <h4>100% Pure Veg & Jain Safe</h4>
              <p>Specialized kitchen section for authentic Jain preparations without onion or garlic.</p>
              <span className="kp-hl-tag">Jain Friendly</span>
            </div>
          </div>

          {/* Card 4: Express Delivery & Booking */}
          <div className="kp-highlight-card cta-card">
            <div className="kp-hl-icon-wrap delivery">
              <span>⚡</span>
            </div>
            <div className="kp-hl-content">
              <h4>Order Direct or Dine In</h4>
              <p>Fast 30-min delivery via Zomato & Swiggy, or reserve your table in Panampilly Nagar.</p>
              <div className="kp-hl-btns">
                <a
                  href="https://www.zomato.com/kochi/kailash-parbat-panampilly-nagar/order"
                  target="_blank"
                  rel="noreferrer"
                  className="kp-hl-mini-btn zomato"
                >
                  Zomato
                </a>
                <a
                  href="https://www.swiggy.com/city/kochi/kailash-parbat-panampilly-nagar-panampilly-nagar-rest1420901?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder"
                  target="_blank"
                  rel="noreferrer"
                  className="kp-hl-mini-btn swiggy"
                >
                  Swiggy
                </a>
                {onOpenReservation && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenReservation();
                    }}
                    className="kp-hl-mini-btn book"
                  >
                    Book
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
