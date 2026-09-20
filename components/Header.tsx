'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import ReservationModal from '@/components/ReservationModal';

interface HeaderProps {
  onOpenMenu?: () => void;
  onOpenReservation?: () => void;
}

export default function Header({ onOpenMenu, onOpenReservation }: HeaderProps) {
  const [isStuck, setIsStuck] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResOpen, setIsResOpen] = useState(false);
  const [isOrderDropdown, setIsOrderDropdown] = useState(false);
  const [waveCx, setWaveCx] = useState(925);
  const targetCxRef = useRef(925);
  const currentCxRef = useRef(925);
  const animFrameRef = useRef<number | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  const VB = 1850;
  const BASE = 7;
  const DEEP = 31;
  const HW = 165;

  const triggerReservation = () => {
    if (onOpenReservation) {
      onOpenReservation();
    } else {
      setIsResOpen(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsStuck(true);
      } else {
        setIsStuck(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth wave interpolation
  useEffect(() => {
    const updateWave = () => {
      const diff = targetCxRef.current - currentCxRef.current;
      if (Math.abs(diff) > 0.5) {
        currentCxRef.current += diff * 0.12;
        setWaveCx(currentCxRef.current);
      }
      animFrameRef.current = requestAnimationFrame(updateWave);
    };

    animFrameRef.current = requestAnimationFrame(updateWave);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const handleMouseEnterItem = (e: React.MouseEvent<HTMLElement>) => {
    if (window.innerWidth < 992 || !headerRef.current) return;
    const hRect = headerRef.current.getBoundingClientRect();
    const itemRect = e.currentTarget.getBoundingClientRect();
    const center = itemRect.left - hRect.left + itemRect.width / 2;
    targetCxRef.current = (center / hRect.width) * VB;
  };

  const handleMouseLeaveNav = () => {
    targetCxRef.current = VB / 2;
  };

  const getWavePath = (cx: number) => {
    const clampedCx = Math.max(HW, Math.min(VB - HW, cx));
    const l = clampedCx - HW;
    const r = clampedCx + HW;
    return `M0 0 H${VB} V${BASE} L${r} ${BASE} C${clampedCx + HW * 0.58} ${BASE},${clampedCx + HW * 0.42} ${DEEP},${clampedCx} ${DEEP} C${clampedCx - HW * 0.42} ${DEEP},${clampedCx - HW * 0.58} ${BASE},${l} ${BASE} L0 ${BASE} Z`;
  };

  return (
    <>
      <div className={`kp-master-header ${isStuck ? 'is-stuck' : ''}`}>
      {/* Top Address & Information Ribbon */}
      <div className="kp-top-bar">
        <div className="kp-top-bar-inner">
          {/* Left Segment: Heritage, Address & Operating Hours */}
          <div className="kp-top-left">
            <span className="kp-top-badge hide-mobile">Estd 1952</span>

            <a
              href="https://maps.google.com/?q=Kailash+Parbat+Panampilly+Nagar+Kochi"
              target="_blank"
              rel="noreferrer"
              className="kp-top-address-pill"
              title="View on Google Maps"
            >
              <span className="kp-top-pin">📍</span>
              <span className="kp-top-addr-text">Panampilly Nagar, Kochi</span>
              <span className="kp-top-map-tag">Map ↗</span>
            </a>

            <div className="kp-top-time-pill hide-mobile" title="Current Restaurant Hours">
              <span className="kp-live-pulse" aria-hidden="true"></span>
              <span className="kp-top-time-text">Open Daily 11:30 AM – 11:00 PM</span>
            </div>
          </div>

          {/* Center Segment: Pure Vegetarian & Jain Kitchen */}
          <div className="kp-top-center">
            <div className="kp-pure-veg-pill">
              <span className="kp-veg-symbol">🌱</span>
              <strong className="kp-veg-title">100% Pure Vegetarian</strong>
              <span className="kp-veg-divider">•</span>
              <span className="kp-veg-jain">Jain Specialties</span>
            </div>
          </div>

          {/* Right Segment: Google Rating & Quick Order / Call */}
          <div className="kp-top-right">
            <a
              href="#reviews"
              className="kp-google-badge"
              title="Google Reviews Rating"
            >
              <span className="kp-google-star">★</span>
              <span className="kp-google-score">4.6</span>
              <span className="kp-google-count">(373+ Reviews)</span>
            </a>

            <a
              href="tel:04844024444"
              className="kp-top-call-pill show-mobile-flex"
              title="Call Kailash Parbat Kochi"
            >
              📞 <span>Call</span>
            </a>

            <div className="kp-top-order-pills hide-mobile">
              <span className="kp-order-label-mini">Quick Order:</span>
              <a
                href="https://www.zomato.com/kochi/kailash-parbat-panampilly-nagar/order"
                target="_blank"
                rel="noreferrer"
                className="kp-top-pill-btn zomato"
                title="Order on Zomato"
              >
                Zomato
              </a>
              <a
                href="https://www.swiggy.com/city/kochi/kailash-parbat-panampilly-nagar-panampilly-nagar-rest1420901?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder"
                target="_blank"
                rel="noreferrer"
                className="kp-top-pill-btn swiggy"
                title="Order on Swiggy"
              >
                Swiggy
              </a>
              <a
                href="tel:04844024444"
                className="kp-top-call-pill"
                title="Call 0484 402 4444"
              >
                📞 0484 402 4444
              </a>
            </div>
          </div>
        </div>
      </div>

      <header
        id="hdr"
        ref={headerRef}
        className={`hdr ${isStuck ? 'stuck' : ''}`}
        onMouseLeave={handleMouseLeaveNav}
      >
        <nav className="nav">
          {/* Left navigation links */}
          <ul className="l">
            <li>
              <Link href="#heritage" onMouseEnter={handleMouseEnterItem}>
                Our Heritage
              </Link>
            </li>
            <li>
              <Link href="#chaats" onMouseEnter={handleMouseEnterItem}>
                Legendary Chaat
              </Link>
            </li>
            <li>
              {onOpenMenu ? (
                <button
                  onClick={onOpenMenu}
                  className="kp-nav-menu-btn"
                  onMouseEnter={handleMouseEnterItem}
                >
                  Explore Menu
                </button>
              ) : (
                <Link href="#menu" onMouseEnter={handleMouseEnterItem}>
                  Explore Menu
                </Link>
              )}
            </li>
          </ul>

          {/* Mobile hamburger button */}
          <button
            className={`burger ${isMenuOpen ? 'open' : ''}`}
            id="burger"
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i></i>
            <i></i>
            <i></i>
          </button>

          {/* Center Brand Logo */}
          <Link
            href="/"
            className="brand"
            onMouseEnter={handleMouseEnterItem}
            aria-label="Kailash Parbat Home"
          >
            <div className="kp-brand-wrap">
              <div className="kp-brand-crest">
                <span className="kp-crest-crown">⚜</span>
                <span className="kp-crest-yr">1952</span>
              </div>
              <span className="kp-brand-name">Kailash Parbat</span>
              <span className="kp-brand-sub kp-script-accent">Taste of Tradition • Kochi</span>
            </div>
          </Link>

          {/* Right navigation links */}
          <ul className="r">
            <li>
              <Link href="#hospitality" onMouseEnter={handleMouseEnterItem}>
                Hospitality
              </Link>
            </li>
            <li>
              <Link href="#reviews" onMouseEnter={handleMouseEnterItem}>
                Reviews
              </Link>
            </li>
            <li className="kp-nav-cta-item">
              <button
                onClick={triggerReservation}
                className="kp-header-reserve-btn"
                onMouseEnter={handleMouseEnterItem}
              >
                Book a Table
              </button>
            </li>
            <li className="kp-order-rel">
              <button
                onClick={() => setIsOrderDropdown(!isOrderDropdown)}
                className="kp-order-now-btn"
                onMouseEnter={handleMouseEnterItem}
              >
                Order Online ▾
              </button>
              {isOrderDropdown && (
                <div className="kp-order-popover">
                  <a
                    href="https://www.zomato.com/kochi/kailash-parbat-panampilly-nagar/order"
                    target="_blank"
                    rel="noreferrer"
                    className="kp-pop-link zomato"
                    onClick={() => setIsOrderDropdown(false)}
                  >
                    <span className="kp-pop-badge red">Zomato</span>
                    <span className="kp-pop-desc">Order to Panampilly Nagar & Kochi</span>
                  </a>
                  <a
                    href="https://www.swiggy.com/city/kochi/kailash-parbat-panampilly-nagar-panampilly-nagar-rest1420901?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder"
                    target="_blank"
                    rel="noreferrer"
                    className="kp-pop-link swiggy"
                    onClick={() => setIsOrderDropdown(false)}
                  >
                    <span className="kp-pop-badge orange">Swiggy</span>
                    <span className="kp-pop-desc">Fast 30-min Delivery to your door</span>
                  </a>
                </div>
              )}
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>

          {/* Mobile direct reservation CTA */}
          <div className="m-cta-group">
            <button
              onClick={triggerReservation}
              className="m-book-btn"
              aria-label="Book Table"
            >
              Book Table
            </button>
          </div>
        </nav>

        <div className="nav-wave" id="navWave" aria-hidden="true">
          <svg viewBox="0 0 1850 36" preserveAspectRatio="none">
            <path d={getWavePath(waveCx)} />
          </svg>
        </div>
      </header>
    </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`ovl ${isMenuOpen ? 'open' : ''}`}
        id="ovl"
        aria-hidden={!isMenuOpen}
      >
        <div className="ovl-header">
          <div className="ovl-brand-bar">
            <div className="ovl-crest">
              <span className="ovl-crest-crown">⚜</span>
              <span className="ovl-crest-yr">1952</span>
            </div>
            <span className="ovl-brand-title">Kailash Parbat</span>
            <span className="ovl-brand-sub">Panampilly Nagar, Kochi</span>
          </div>
          <button
            className="ovl-close-btn"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <div className="ovl-scroll-body">
          {/* Featured Menu AI Visual Showcase Card */}
          <div
            className="ovl-menu-ai-card"
            onClick={() => {
              setIsMenuOpen(false);
              if (onOpenMenu) onOpenMenu();
            }}
            role="button"
            tabIndex={0}
          >
            <div className="ovl-menu-ai-img-wrap">
              <img
                src="/kp/menu_sidebar_feature.jpg"
                alt="Kailash Parbat Royal Vegetarian Feast Menu"
                className="ovl-menu-ai-img"
              />
              <div className="ovl-menu-ai-overlay"></div>
              <span className="ovl-menu-ai-badge">✦ Chef&apos;s Royal Selection</span>
              <div className="ovl-menu-ai-details">
                <span className="ovl-menu-ai-kicker">Signature Chaat &amp; Delicacies</span>
                <h3 className="ovl-menu-ai-title">Explore 140+ Dishes</h3>
                <span className="ovl-menu-ai-cta">
                  Open Digital Menu <span>→</span>
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <ul className="ovl-nav-list">
            <li>
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <span className="ovl-nav-icon">🏠</span>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="#heritage" onClick={() => setIsMenuOpen(false)}>
                <span className="ovl-nav-icon">🏛️</span>
                <span>Our Heritage (Since 1952)</span>
              </Link>
            </li>
            <li>
              <Link href="#chaats" onClick={() => setIsMenuOpen(false)}>
                <span className="ovl-nav-icon">🍲</span>
                <span>Legendary Chaat Bar</span>
              </Link>
            </li>
            <li>
              {onOpenMenu ? (
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    onOpenMenu();
                  }}
                  className="ovl-menu-link-btn"
                >
                  <span className="ovl-nav-icon">📜</span>
                  <span>Full Menu &amp; Combos (140+ Dishes)</span>
                </button>
              ) : (
                <Link href="#menu" onClick={() => setIsMenuOpen(false)}>
                  <span className="ovl-nav-icon">📜</span>
                  <span>Full Menu &amp; Combos</span>
                </Link>
              )}
            </li>
            <li>
              <Link href="#hospitality" onClick={() => setIsMenuOpen(false)}>
                <span className="ovl-nav-icon">✨</span>
                <span>Ambience &amp; Hospitality</span>
              </Link>
            </li>
            <li>
              <Link href="#reviews" onClick={() => setIsMenuOpen(false)}>
                <span className="ovl-nav-icon">⭐</span>
                <span>Guest Reviews (4.6★)</span>
              </Link>
            </li>
            <li>
              <Link href="#visit" onClick={() => setIsMenuOpen(false)}>
                <span className="ovl-nav-icon">📍</span>
                <span>Location &amp; Timings</span>
              </Link>
            </li>
          </ul>

          {/* Direct Delivery Orders */}
          <div className="ovl-delivery-links">
            <p className="ovl-del-title">Order Direct to Your Doorstep:</p>
            <div className="ovl-del-btns">
              <a
                href="https://www.zomato.com/kochi/kailash-parbat-panampilly-nagar/order"
                target="_blank"
                rel="noreferrer"
                className="ovl-app-btn zomato"
              >
                Order on Zomato
              </a>
              <a
                href="https://www.swiggy.com/city/kochi/kailash-parbat-panampilly-nagar-panampilly-nagar-rest1420901?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder"
                target="_blank"
                rel="noreferrer"
                className="ovl-app-btn swiggy"
              >
                Order on Swiggy
              </a>
            </div>
          </div>

          {/* Actions: Reservation & Theme */}
          <div className="ovl-actions">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                triggerReservation();
              }}
              className="ovl-reserve-btn"
            >
              📅 Reserve a Table
            </button>
            <div className="ovl-theme-wrap">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Reservation Modal fallback */}
      {!onOpenReservation && (
        <ReservationModal
          isOpen={isResOpen}
          onClose={() => setIsResOpen(false)}
        />
      )}
    </>
  );
}
