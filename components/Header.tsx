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
      {/* Top Heritage Info Bar */}
      <div className="kp-top-bar">
        <div className="kp-top-bar-inner">
          <div className="kp-top-left">
            <span className="kp-top-badge">Estd 1952</span>
            <span className="kp-top-text">
              📍 Panampilly Nagar, Kochi • Open Daily 11:30 AM – 11:00 PM
            </span>
          </div>
          <div className="kp-top-center">
            <span className="kp-pure-veg-pill">🌱 100% Pure Vegetarian & Jain Specialties</span>
          </div>
          <div className="kp-top-right">
            <span className="kp-google-badge">★ 4.6 (373+ Google Reviews)</span>
            <div className="kp-top-order-links">
              <a
                href="https://www.zomato.com/kochi/kailash-parbat-panampilly-nagar/order"
                target="_blank"
                rel="noreferrer"
                className="kp-top-link zomato"
              >
                Zomato
              </a>
              <span className="kp-top-sep">•</span>
              <a
                href="https://www.swiggy.com/city/kochi/kailash-parbat-panampilly-nagar-panampilly-nagar-rest1420901?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder"
                target="_blank"
                rel="noreferrer"
                className="kp-top-link swiggy"
              >
                Swiggy
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

          {/* Mobile direct order button */}
          <div className="m-cta-group">
            {onOpenMenu && (
              <button
                onClick={onOpenMenu}
                className="m-menu-quick-btn"
                aria-label="Open Menu"
              >
                Menu
              </button>
            )}
            <button
              onClick={triggerReservation}
              className="m-book-btn"
              aria-label="Book Table"
            >
              Book
            </button>
          </div>
        </nav>

        <div className="nav-wave" id="navWave" aria-hidden="true">
          <svg viewBox="0 0 1850 36" preserveAspectRatio="none">
            <path d={getWavePath(waveCx)} />
          </svg>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div className={`ovl ${isMenuOpen ? 'open' : ''}`} id="ovl">
        <div className="ovl-brand-bar">
          <span className="ovl-brand-title">Kailash Parbat</span>
          <span className="ovl-brand-sub">Panampilly Nagar, Kochi</span>
        </div>
        <ul>
          <li>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#heritage" onClick={() => setIsMenuOpen(false)}>
              Our Heritage (Since 1952)
            </Link>
          </li>
          <li>
            <Link href="#chaats" onClick={() => setIsMenuOpen(false)}>
              Legendary Chaat Bar
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
                Full Menu & Combos (140+ Dishes)
              </button>
            ) : (
              <Link href="#menu" onClick={() => setIsMenuOpen(false)}>
                Full Menu & Combos
              </Link>
            )}
          </li>
          <li>
            <Link href="#hospitality" onClick={() => setIsMenuOpen(false)}>
              Ambience & Hospitality
            </Link>
          </li>
          <li>
            <Link href="#reviews" onClick={() => setIsMenuOpen(false)}>
              Guest Reviews (4.6★)
            </Link>
          </li>
          <li>
            <Link href="#visit" onClick={() => setIsMenuOpen(false)}>
              Location & Timings
            </Link>
          </li>
        </ul>

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

        <div className="ovl-actions">
          <button
            onClick={() => {
              setIsMenuOpen(false);
              triggerReservation();
            }}
            className="btn-x"
          >
            Reserve a Table
          </button>
          <ThemeToggle />
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
