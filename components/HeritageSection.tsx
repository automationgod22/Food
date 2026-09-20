'use client';

import React from 'react';

// Counter animation component for heritage stats
function StatCounter({
  target,
  suffix = '',
  decimals = 0,
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
}) {
  const [count, setCount] = React.useState(0);
  const [hasStarted, setHasStarted] = React.useState(false);
  const elementRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  React.useEffect(() => {
    if (!hasStarted) return;
    let startTime: number | null = null;
    let animId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo curve for silky smooth deceleration
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(ease * target);

      if (progress < 1) {
        animId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [hasStarted, target, duration]);

  const display = decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toString();

  return (
    <span ref={elementRef} className="kp-stat-num">
      {display}{suffix}
    </span>
  );
}

export default function HeritageSection() {
  return (
    <section id="heritage" className="kp-heritage-section" aria-label="Our Heritage">
      <div className="kp-container">
        <div className="kp-heritage-grid">
          {/* Left Column: Story & Milestones */}
          <div className="kp-heritage-content">
            <div className="kp-section-tag">
              <span className="kp-tag-line">Since 1952</span>
              <span className="kp-tag-pill">The Legendary Odyssey</span>
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

            {/* SVG Gradients for Bespoke Crests */}
            <svg width="0" height="0" className="kp-hidden-defs" aria-hidden="true">
              <defs>
                <linearGradient id="kpGoldMedal" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fde68a" />
                  <stop offset="50%" stopColor="#e77819" />
                  <stop offset="100%" stopColor="#9a3412" />
                </linearGradient>
                <linearGradient id="kpLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6ee7b7" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
                <linearGradient id="kpUrnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
              </defs>
            </svg>

            {/* Heritage Values Grid - Ultra-Luxury Bespoke Medallion Cards */}
            <div className="kp-values-grid">
              {/* Card 1: 100% Pure Vegetarian */}
              <div className="kp-value-card kp-royal-card">
                <div className="kp-card-emblem-wrap">
                  <div className="kp-emblem-glow green-glow"></div>
                  <svg viewBox="0 0 48 48" fill="none" className="kp-royal-svg" aria-hidden="true">
                    <circle cx="24" cy="24" r="22" stroke="url(#kpGoldMedal)" strokeWidth="1.5" strokeDasharray="3 2" />
                    <circle cx="24" cy="24" r="18" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" strokeWidth="1.2" />
                    <path d="M24 11C24 11 29 17 29 23C29 27 26 29.5 24 34C22 29.5 19 27 19 23C19 17 24 11 24 11Z" fill="url(#kpLeafGrad)" />
                    <path d="M24 18V29M24 22L27 19M24 25L21 23" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
                    <circle cx="24" cy="36" r="2" fill="#fbbf24" />
                  </svg>
                </div>
                <div className="kp-value-info">
                  <div className="kp-value-kicker">✦ SATTVIK &amp; JAIN SANCTUARY</div>
                  <h4 className="kp-value-head">100% Pure Vegetarian</h4>
                  <p className="kp-value-desc">
                    Strictly pure vegetarian kitchen with extensive <strong>Jain-safe</strong> delicacies prepared without onion or garlic in dedicated traditional cookware.
                  </p>
                  <div className="kp-card-pills">
                    <span className="kp-micro-pill">100% Meat &amp; Egg Free</span>
                    <span className="kp-micro-pill gold">Jain Specialties</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Secret 1952 Spice Blends */}
              <div className="kp-value-card kp-royal-card">
                <div className="kp-card-emblem-wrap">
                  <div className="kp-emblem-glow amber-glow"></div>
                  <svg viewBox="0 0 48 48" fill="none" className="kp-royal-svg" aria-hidden="true">
                    <circle cx="24" cy="24" r="22" stroke="url(#kpGoldMedal)" strokeWidth="1.5" strokeDasharray="3 2" />
                    <circle cx="24" cy="24" r="18" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" strokeWidth="1.2" />
                    <path d="M19 18H29M20 18L18 29C18 32.5 20.5 35 24 35C27.5 35 30 32.5 30 29L28 18" stroke="url(#kpGoldMedal)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="rgba(217, 119, 6, 0.18)" />
                    <path d="M22 12C22 12 23.5 14 22 15M26 10C26 10 27.5 12.5 26 14.5" stroke="#f59e0b" strokeWidth="1.4" strokeLinecap="round" />
                    <path d="M21 26H27" stroke="#fde68a" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="24" cy="26" r="1.5" fill="#fde68a" />
                  </svg>
                </div>
                <div className="kp-value-info">
                  <div className="kp-value-kicker">✦ ANCESTRAL SINDHI FORMULAS</div>
                  <h4 className="kp-value-head">Secret 1952 Spice Blends</h4>
                  <p className="kp-value-desc">
                    Hand-roasted whole spices, slow-churned artisanal yogurts, and proprietary tamarind-date chutneys made fresh everyday according to original Bombay recipes.
                  </p>
                  <div className="kp-card-pills">
                    <span className="kp-micro-pill">Hand-Roasted Daily</span>
                    <span className="kp-micro-pill gold">Authentic 1952 Taste</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Royal Kochi Ambience */}
              <div className="kp-value-card kp-royal-card">
                <div className="kp-card-emblem-wrap">
                  <div className="kp-emblem-glow gold-glow"></div>
                  <svg viewBox="0 0 48 48" fill="none" className="kp-royal-svg" aria-hidden="true">
                    <circle cx="24" cy="24" r="22" stroke="url(#kpGoldMedal)" strokeWidth="1.5" strokeDasharray="3 2" />
                    <circle cx="24" cy="24" r="18" fill="rgba(231, 120, 25, 0.15)" stroke="#e77819" strokeWidth="1.2" />
                    <path d="M17 34V23C17 19.5 20 17 24 17C28 17 31 19.5 31 23V34" stroke="url(#kpGoldMedal)" strokeWidth="1.8" strokeLinecap="round" fill="rgba(231, 120, 25, 0.12)" />
                    <path d="M15 34H33" stroke="url(#kpGoldMedal)" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M24 11L25.2 13.8L28.2 14.1L26 16.1L26.6 19.1L24 17.5L21.4 19.1L22 16.1L19.8 14.1L22.8 13.8L24 11Z" fill="#fbbf24" />
                  </svg>
                </div>
                <div className="kp-value-info">
                  <div className="kp-value-kicker">✦ FIVE-STAR HOSPITALITY &amp; ACCESSIBILITY</div>
                  <h4 className="kp-value-head">Royal Kochi Ambience</h4>
                  <p className="kp-value-desc">
                    Plush contemporary interior dining hall in Panampilly Nagar, fully wheelchair accessible, with free dedicated valet parking and attentive royal service.
                  </p>
                  <div className="kp-card-pills">
                    <span className="kp-micro-pill">Complimentary Valet</span>
                    <span className="kp-micro-pill gold">Wheelchair Friendly</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Heritage Stats Strip with Increasing Number count-up animation */}
            <div className="kp-stats-row" role="region" aria-label="Heritage Statistics">
              <div className="kp-stat-item">
                <StatCounter target={1952} duration={1800} />
                <span className="kp-stat-label">Inception Year</span>
              </div>
              <div className="kp-stat-sep"></div>
              <div className="kp-stat-item">
                <StatCounter target={70} suffix="+" duration={1600} />
                <span className="kp-stat-label">Years Legacy</span>
              </div>
              <div className="kp-stat-sep"></div>
              <div className="kp-stat-item">
                <StatCounter target={140} suffix="+" duration={1900} />
                <span className="kp-stat-label">Authentic Dishes</span>
              </div>
              <div className="kp-stat-sep"></div>
              <div className="kp-stat-item">
                <StatCounter target={4.6} decimals={1} suffix="★" duration={1700} />
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
