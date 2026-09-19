'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="foot" id="locations">
      <div className="foot-main">
        {/* Left: Brand block with 3 emblems + serif tagline */}
        <div className="foot-brand">
          <div className="foot-logos">
            {/* Logo 1: Khana Khajana wordmark */}
            <div className="fl">
              <div className="fl-kk-wordmark">
                <span className="kk-foot-title">Khana Khajana</span>
                <span className="kk-foot-sub">INDIAN HERITAGE CUISINE</span>
              </div>
            </div>

            <span className="fl-div"></span>

            {/* Logo 2: Royal Gold Crest Emblem */}
            <div className="fl">
              <img
                src="/img/kk_brand_crest.jpg"
                className="kk-crest-img"
                alt="Khana Khajana Royal Crest"
              />
            </div>

            <span className="fl-div"></span>

            {/* Logo 3: 25 Years badge */}
            <div className="fl">
              <span className="fl-legacy">
                <span className="yr">25</span>
                <span className="lbl">Years</span>
                <span className="sub">of Excellence</span>
              </span>
            </div>
          </div>

          <h2 className="foot-tag">
            <span className="sp">25</span> Years of royal service <br />
            <span className="sp">25</span> Years of trust <br />
            <span className="sp">25</span> Years of culinary love
          </h2>
        </div>

        {/* Right: Discover + Socials + Locations columns */}
        <div className="foot-right">
          <div>
            <h6>Discover</h6>
            <Link href="#catering">About Us</Link>
            <Link href="#rooted">Royal Menu</Link>
            <Link href="#spirit">Gallery</Link>
            <Link href="#says">Awards & Press</Link>
            <Link href="#locations">Our Locations</Link>
            <Link href="#locations">Private Banquets</Link>
            <a href="#locations">Reserve a Table</a>
          </div>

          <div>
            <h6>Socials</h6>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
            >
              YouTube
            </a>
          </div>

          <div>
            <h6>Palace Locations</h6>
            <a
              href="https://google.com"
              target="_blank"
              rel="noreferrer"
            >
              Delhi • Connaught Place
            </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noreferrer"
            >
              Noida • Sector 18
            </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noreferrer"
            >
              Gurugram • Golf Course Road
            </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noreferrer"
            >
              Jaipur • C-Scheme Heritage
            </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noreferrer"
            >
              Agra • Taj East Gate
            </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noreferrer"
            >
              Mumbai • Colaba Waterfront
            </a>
          </div>
        </div>
      </div>

      <div className="foot-base">
        <span>© 2026 Khana Khajana. All Rights Reserved.</span>
        <span>Crafted for Royalty • Timeless Indian Cuisine</span>
      </div>
    </footer>
  );
}
