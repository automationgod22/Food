'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isStuck, setIsStuck] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [waveCx, setWaveCx] = useState(925);
  const targetCxRef = useRef(925);
  const currentCxRef = useRef(925);
  const animFrameRef = useRef<number | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  const VB = 1850;
  const BASE = 7;
  const DEEP = 31;
  const HW = 165;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
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
      <header
        id="hdr"
        ref={headerRef}
        className={`hdr ${isStuck ? 'stuck' : ''}`}
        onMouseLeave={handleMouseLeaveNav}
      >
        <nav className="nav">
          <ul className="l">
            <li>
              <Link href="#catering" onMouseEnter={handleMouseEnterItem}>
                ABOUT US
              </Link>
            </li>
            <li>
              <Link href="#rooted" onMouseEnter={handleMouseEnterItem}>
                MENU
              </Link>
            </li>
            <li>
              <Link href="#spirit" onMouseEnter={handleMouseEnterItem}>
                GALLERY
              </Link>
            </li>
            <li>
              <Link href="#says" onMouseEnter={handleMouseEnterItem}>
                AWARDS & MEDIA
              </Link>
            </li>
          </ul>

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

          <Link
            href="/"
            className="brand"
            onMouseEnter={handleMouseEnterItem}
            aria-label="Khana Khajana Home"
          >
            <div className="kk-brand-wrap">
              <span className="kk-brand-name">Khana Khajana</span>
              <span className="kk-brand-sub">ROYAL INDIAN CUISINE</span>
            </div>
          </Link>

          <ul className="r">
            <li>
              <Link href="#locations" onMouseEnter={handleMouseEnterItem}>
                OUR LOCATIONS
              </Link>
            </li>
            <li>
              <Link href="#locations" onMouseEnter={handleMouseEnterItem}>
                GROW WITH US
              </Link>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                className="acct"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={handleMouseEnterItem}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="insta-svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </li>
          </ul>

          <a
            href="https://www.instagram.com"
            className="m-cta"
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              viewBox="0 0 24 24"
              className="insta-svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </nav>

        <div className="nav-wave" id="navWave" aria-hidden="true">
          <svg viewBox="0 0 1850 36" preserveAspectRatio="none">
            <path d={getWavePath(waveCx)} />
          </svg>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div className={`ovl ${isMenuOpen ? 'open' : ''}`} id="ovl">
        <ul>
          <li>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#catering" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="#rooted" onClick={() => setIsMenuOpen(false)}>
              Menu
            </Link>
          </li>
          <li>
            <Link href="#spirit" onClick={() => setIsMenuOpen(false)}>
              Gallery
            </Link>
          </li>
          <li>
            <Link href="#says" onClick={() => setIsMenuOpen(false)}>
              Awards & Media
            </Link>
          </li>
          <li>
            <Link href="#locations" onClick={() => setIsMenuOpen(false)}>
              Our Locations
            </Link>
          </li>
          <li>
            <Link href="#locations" onClick={() => setIsMenuOpen(false)}>
              Grow With Us
            </Link>
          </li>
        </ul>

        <a
          href="#locations"
          className="btn-x"
          onClick={() => setIsMenuOpen(false)}
        >
          Reserve a Table
        </a>
      </div>
    </>
  );
}
