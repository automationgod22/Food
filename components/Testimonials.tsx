'use client';

import React from 'react';

const starIcon = (
  <svg viewBox="0 0 24 24">
    <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z" />
  </svg>
);

const googleLogo = (
  <svg className="g-mark" viewBox="0 0 48 48">
    <path
      fill="#4285F4"
      d="M45 24c0-1.6-.1-2.7-.4-4H24v7.5h12c-.2 2-1.5 5-4.4 7l6.7 5.2C42.2 36 45 30.6 45 24z"
    />
    <path
      fill="#34A853"
      d="M24 46c5.9 0 10.9-2 14.5-5.3l-6.9-5.4c-1.9 1.3-4.4 2.2-7.6 2.2-5.8 0-10.7-3.8-12.5-9.1l-7.1 5.5C8 41 15.4 46 24 46z"
    />
    <path
      fill="#FBBC05"
      d="M11.5 28.4c-.5-1.4-.7-2.9-.7-4.4s.3-3 .7-4.4l-7.1-5.5C2.9 17 2 20.4 2 24s.9 7 2.4 9.9l7.1-5.5z"
    />
    <path
      fill="#EA4335"
      d="M24 9.5c4.1 0 6.9 1.8 8.5 3.3l6.2-6C34.9 3.4 29.9 1 24 1 15.4 1 8 6 4.4 14.1l7.1 5.5C13.3 14.3 18.2 9.5 24 9.5z"
    />
  </svg>
);

const ratingsData = [
  {
    score: '4.8',
    reviews: '4820',
    badge: googleLogo,
    source: 'Google',
  },
  {
    score: '4.7',
    reviews: '2150',
    badge: <span className="brand-mark zomato">Z</span>,
    source: 'Zomato',
  },
  {
    score: '4.8',
    reviews: '1320',
    badge: <span className="brand-mark dineout">D</span>,
    source: 'Dineout',
  },
  {
    score: '4.6',
    reviews: '940',
    badge: <span className="brand-mark tripadvisor">TA</span>,
    source: 'TripAdvisor',
  },
];

const reviews = [
  {
    quote:
      'Khana Khajana is hands down the best royal Indian dining experience. The Galouti Kebabs and Dal Bukhara melted in our mouths!',
    name: 'Priya Sharma',
  },
  {
    quote:
      'The palace ambiance with the live chandeliers is breathtaking. Outstanding staff, royal hospitality, and five-star quality food.',
    name: 'Vikramaditya Roy',
  },
  {
    quote:
      'Celebrated my parents anniversary here. The Shahi Gosht Biryani and garlic butter naan are unforgettable. Truly a treasure of flavors!',
    name: 'Ananya Deshmukh',
  },
  {
    quote:
      'Our go-to restaurant for authentic Mughlai and North Indian cuisine. Every single dish feels like a royal banquet prepared with love.',
    name: 'Rajesh & Chhaya Kapoor',
  },
  {
    quote:
      'From the royal Namaste greeting at the entrance to the signature saffron phirni dessert, the attention to detail is remarkable!',
    name: 'Dr. Siddharth Verma',
  },
];

export default function Testimonials() {
  return (
    <section className="says" id="says">
      <img
        src="/img/kk_cart_art.jpg"
        className="cart-bg"
        alt="Vintage royal spice cart illustration"
      />

      <div className="says-head">
        <h2 className="dsp d2">
          What Our <br />
          Guests are saying
          <br />
          <span className="test-b">
            Treasured Memories, Unfiltered Love from Our Tables.
          </span>
        </h2>

        <div className="rate-row">
          {ratingsData.map((r, idx) => (
            <div className="rate" key={idx}>
              <div className="rate-top">
                <div className="stars">
                  {starIcon}
                  {starIcon}
                  {starIcon}
                  {starIcon}
                  {starIcon}
                </div>
                {r.badge}
              </div>
              <div className="rate-bot">
                <div className="rate-num">
                  {r.score}
                  <sup>/5</sup>
                </div>
                <div className="rate-meta">
                  <b>Excellent</b>Based on {r.reviews} reviews
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite scrolling marquee of quote cards */}
      <div className="mq">
        <div className="mq-in">
          {[...reviews, ...reviews].map((rev, idx) => (
            <article className="qcard" key={idx}>
              <div className="qcard-top">
                <div className="stars">
                  {starIcon}
                  {starIcon}
                  {starIcon}
                  {starIcon}
                  {starIcon}
                </div>
                <span className="src">Verified Diner</span>
              </div>
              <blockquote>{rev.quote}</blockquote>
              <div className="who">
                <small>Guest</small>
                {rev.name}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="says-foot">
        <p>
          Have you dined with us at Khana Khajana and left
          <br />
          with treasured memories?
        </p>
        <a
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
        >
          Share your review with us!
        </a>
      </div>
    </section>
  );
}
