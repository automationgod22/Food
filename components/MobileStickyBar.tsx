'use client';

import React from 'react';

interface MobileStickyBarProps {
  onOpenReservation: () => void;
}

export default function MobileStickyBar({ onOpenReservation }: MobileStickyBarProps) {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=919847000000&text=${encodeURIComponent(
    'Hello Kailash Parbat Panampilly Nagar! I would like to book a table or order food.'
  )}`;

  return (
    <div className="kp-mobile-bar" role="navigation" aria-label="Quick Mobile Actions">
      <div className="kp-mobile-bar-inner">
        <a
          href="https://www.zomato.com/kochi/kailash-parbat-panampilly-nagar/order"
          target="_blank"
          rel="noreferrer"
          className="kp-mbar-btn zomato"
          aria-label="Order on Zomato"
        >
          <span className="kp-mbar-dot">●</span>
          <span className="kp-mbar-text">Zomato</span>
        </a>

        <a
          href="https://www.swiggy.com/city/kochi/kailash-parbat-panampilly-nagar-panampilly-nagar-rest1420901?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder"
          target="_blank"
          rel="noreferrer"
          className="kp-mbar-btn swiggy"
          aria-label="Order on Swiggy"
        >
          <span className="kp-mbar-dot">●</span>
          <span className="kp-mbar-text">Swiggy</span>
        </a>

        <button
          onClick={onOpenReservation}
          className="kp-mbar-btn reserve"
          aria-label="Book Table"
        >
          <span className="kp-mbar-icon">📅</span>
          <span className="kp-mbar-text">Book Table</span>
        </button>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="kp-mbar-btn whatsapp"
          aria-label="Chat on WhatsApp"
        >
          <span className="kp-mbar-icon">💬</span>
          <span className="kp-mbar-text">Chat</span>
        </a>
      </div>
    </div>
  );
}
