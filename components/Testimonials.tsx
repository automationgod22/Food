'use client';

import React, { useState } from 'react';

interface Review {
  id: number;
  author: string;
  badge: string;
  rating: number;
  date: string;
  content: string;
  tags: string[];
}

const reviews: Review[] = [
  {
    id: 1,
    author: 'Abhishek Katriar',
    badge: 'Local Guide • 221 reviews • 111 photos',
    rating: 5,
    date: 'Recent',
    content:
      'Been to a number of Kailash Parbat outlets across India, but this Panampilly Nagar restaurant look and feel is completely extraordinary! The interior is superbly done, clean and comfortable. Loved the food authenticity.',
    tags: ['Ambience', 'Interior', 'Authentic Taste'],
  },
  {
    id: 2,
    author: 'Mohandas Poyilath Variath',
    badge: 'Verified Google Reviewer',
    rating: 5,
    date: 'Recent',
    content:
      'The service and recommendations from UDHAV NAYAK was extremely helpful and I strongly recommend Kailash Parbat to those who look for quality food, great service and cosy atmosphere.',
    tags: ['Udhav Nayak Host', 'Hospitality', 'Cosy Atmosphere'],
  },
  {
    id: 3,
    author: 'Dev Nair',
    badge: 'Local Guide • 253 reviews • 732 photos',
    rating: 5,
    date: 'Recent',
    content:
      'Ample parking space is available which is rare in Panampilly Nagar. The food is hygienic and exceptionally tasty. The atmosphere is pleasant, and the location is excellent. Overall, a great place to visit with family.',
    tags: ['Free Parking', 'Hygiene', 'Family Dining'],
  },
  {
    id: 4,
    author: 'Teena Bhandari',
    badge: 'Verified Diner',
    rating: 5,
    date: 'Recent',
    content:
      'Kailash Parbat was such a nice surprise! Loved that they have Jain options — sooo good to find that in Kochi. Paneer tikka and paneer butter masala were super tasty. Service was really warm and quick too. Definitely going back!',
    tags: ['Jain Options', 'Paneer Tikka', 'Quick Service'],
  },
  {
    id: 5,
    author: 'Manju Lakshminarayanan',
    badge: 'Google Reviewer • 10 reviews',
    rating: 5,
    date: 'Recent',
    content:
      'Had been for the first time to this place. Very friendly atmosphere. Extremely tasty food! We opted for authentic chaats and hot soups. The staff took wonderful care of us.',
    tags: ['Authentic Chaat', 'Hot Soups', 'Friendly Atmosphere'],
  },
  {
    id: 6,
    author: 'Adarsh Kishor',
    badge: 'Local Guide • 16 reviews',
    rating: 5,
    date: 'Recent',
    content:
      'Great place, fantastic pure vegetarian food. Nice ambiance too. Portions are generous and satisfying. Highly recommend for pure veg lovers in Kochi.',
    tags: ['Pure Veg', 'Generous Portions', 'Great Ambiance'],
  },
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="reviews" className="kp-reviews-section" aria-label="Guest Reviews">
      <div className="kp-container">
        {/* Rating Banner */}
        <div className="kp-rating-banner">
          <div className="kp-rating-left">
            <div className="kp-rating-score">
              <span className="score-num">4.6</span>
              <div className="score-stars">
                <span>★★★★★</span>
                <small>373+ Verified Google Reviews</small>
              </div>
            </div>
            <div className="kp-rating-vibe">
              <span className="vibe-title">Google Verified Dining Destination</span>
              <p className="vibe-summary">
                &ldquo;Diners like this restaurant&apos;s authentic vegetarian food, including chaat items, and appreciate
                the wide variety of dishes available. They also highlight the clean and welcoming ambiance, along with the
                quick and attentive service from host Udhav Nayak and staff. Many mention the ample parking space.&rdquo;
              </p>
            </div>
          </div>

          <div className="kp-rating-right">
            <div className="kp-tags-cloud">
              <span className="kp-tag-chip active">Chaats (24+)</span>
              <span className="kp-tag-chip">Authentic North Indian (6+)</span>
              <span className="kp-tag-chip">Ambience (16+)</span>
              <span className="kp-tag-chip">Hospitality (10+)</span>
              <span className="kp-tag-chip">Polite Staff (8+)</span>
              <span className="kp-tag-chip">Dahi Puri (4+)</span>
              <span className="kp-tag-chip">Rabri (2+)</span>
            </div>
          </div>
        </div>

        {/* Section Heading */}
        <div className="kp-center-header">
          <div className="kp-section-tag">
            <span className="kp-tag-line">VOICES OF KOCHI</span>
            <span className="kp-tag-pill">REAL EXPERIENCES</span>
          </div>
          <h2 className="kp-section-title">
            Loved by Diners Across <span className="kp-gold-text">Kerala & Beyond</span>
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="kp-reviews-grid">
          {reviews.map((rev, i) => (
            <div
              key={rev.id}
              className={`kp-review-card ${i === activeIdx ? 'highlight' : ''}`}
              onMouseEnter={() => setActiveIdx(i)}
            >
              <div className="kp-card-top">
                <div className="kp-author-avatar">
                  {rev.author.charAt(0)}
                </div>
                <div className="kp-author-info">
                  <h4 className="kp-author-name">{rev.author}</h4>
                  <span className="kp-author-badge">{rev.badge}</span>
                </div>
                <div className="kp-card-stars">★★★★★</div>
              </div>

              <p className="kp-review-text">&ldquo;{rev.content}&rdquo;</p>

              <div className="kp-review-chips">
                {rev.tags.map((t, idx) => (
                  <span key={idx} className="kp-chip">
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
