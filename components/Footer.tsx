'use client';

import React from 'react';
import Link from 'next/link';

interface FooterProps {
  onOpenReservation?: () => void;
  onOpenMenu?: () => void;
}

export default function Footer({ onOpenReservation, onOpenMenu }: FooterProps) {
  return (
    <footer className="foot" id="footer" aria-label="Website Footer">
      <div className="foot-main">
        {/* Left: Brand block with heritage badges */}
        <div className="foot-brand">
          <div className="foot-logos">
            {/* Logo 1: Kailash Parbat Wordmark */}
            <div className="fl">
              <div className="fl-kp-wordmark">
                <span className="kp-foot-title">Kailash Parbat</span>
                <span className="kp-foot-sub">TASTE OF TRADITION • ESTD 1952</span>
              </div>
            </div>

            <span className="fl-div"></span>

            {/* Logo 2: 70+ Years Heritage Badge */}
            <div className="fl">
              <span className="fl-legacy">
                <span className="yr">70+</span>
                <span className="lbl">Years</span>
                <span className="sub">Of Legacy</span>
              </span>
            </div>

            <span className="fl-div"></span>

            {/* Logo 3: Pure Veg Badge */}
            <div className="fl">
              <div className="kp-foot-veg-badge">
                <span className="veg-icon">🌱</span>
                <span className="veg-txt">100% PURE VEG</span>
              </div>
            </div>
          </div>

          <h2 className="foot-tag">
            <span className="sp">70+</span> Years of timeless tradition <br />
            <span className="sp">4.6★</span> Rated by 370+ Kochi diners <br />
            <span className="sp">100%</span> Pure vegetarian devotion
          </h2>

          <div className="kp-foot-order-badges">
            <a
              href="https://www.zomato.com/kochi/kailash-parbat-panampilly-nagar/order"
              target="_blank"
              rel="noreferrer"
              className="kp-foot-app-badge zomato"
            >
              Order on Zomato
            </a>
            <a
              href="https://www.swiggy.com/city/kochi/kailash-parbat-panampilly-nagar-panampilly-nagar-rest1420901?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder"
              target="_blank"
              rel="noreferrer"
              className="kp-foot-app-badge swiggy"
            >
              Order on Swiggy
            </a>
          </div>
        </div>

        {/* Right: Discover + Timings + Panampilly Nagar columns */}
        <div className="foot-right">
          <div>
            <h6>Explore</h6>
            <Link href="#heritage">Our Heritage</Link>
            <Link href="#chaats">Legendary Chaats</Link>
            {onOpenMenu ? (
              <button onClick={onOpenMenu} className="kp-foot-res-btn">
                Digital Menu (140+ Items)
              </button>
            ) : (
              <Link href="#menu">Digital Menu</Link>
            )}
            <Link href="#hospitality">Ambience & Host</Link>
            <Link href="#reviews">Verified Reviews</Link>
            <Link href="#visit">Location & Map</Link>
            {onOpenReservation && (
              <button
                onClick={onOpenReservation}
                className="kp-foot-res-btn"
              >
                Book a Table
              </button>
            )}
          </div>

          <div>
            <h6>Kochi Restaurant</h6>
            <p className="kp-foot-address">
              Panampilly Nagar, Kochi, <br />
              Ernakulam, Kerala 682036
            </p>
            <p className="kp-foot-hours">
              <strong>Timings:</strong> <br />
              Open Daily: 11:30 AM – 11:00 PM
            </p>
            <div className="kp-foot-amenities">
              <span>🚗 Free Car Park</span>
              <span>♿ Wheelchair Friendly</span>
              <span>🍲 Jain Friendly</span>
            </div>
          </div>

          <div>
            <h6>Order Direct</h6>
            <a
              href="https://www.zomato.com/kochi/kailash-parbat-panampilly-nagar/order"
              target="_blank"
              rel="noreferrer"
            >
              Zomato Delivery
            </a>
            <a
              href="https://www.swiggy.com/city/kochi/kailash-parbat-panampilly-nagar-panampilly-nagar-rest1420901?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder"
              target="_blank"
              rel="noreferrer"
            >
              Swiggy Delivery
            </a>
            <a
              href="https://maps.google.com/?q=Kailash+Parbat+Panampilly+Nagar+Kochi"
              target="_blank"
              rel="noreferrer"
            >
              Google Maps Route
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              Instagram @kailashparbat
            </a>
          </div>
        </div>
      </div>

      <div className="foot-base">
        <span>© 1952–2026 Kailash Parbat. Panampilly Nagar, Kochi. All Rights Reserved.</span>
        <span>Crafted for Pure Vegetarian Excellence • 100% Pure Veg</span>
      </div>
    </footer>
  );
}
