'use client';

import React from 'react';

export default function RootedSection() {
  return (
    <section className="rooted" id="rooted">
      <img
        className="bg-media"
        src="/img/kk_heritage_stair.jpg"
        alt="Royal palace grand staircase and peacock murals"
      />
      <div className="veil"></div>
      <div className="rooted-in">
        <h2 className="dsp d2">
          MORE THAN A RESTAURANT.
          <br />
          A CULINARY TREASURE.
        </h2>
        <p>
          Khana Khajana is a celebration of India&apos;s richest culinary heritage.
          From charcoal-fired clay tandoors to simmering dum gravies and artisanal
          butter naans, every creation reflects our quarter-century promise of
          culinary perfection, paired with royal interiors and heartfelt hospitality.
        </p>
      </div>
    </section>
  );
}
