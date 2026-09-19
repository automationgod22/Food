'use client';

import React from 'react';

export default function SpiritSection() {
  return (
    <section className="spirit" id="spirit">
      <div className="spirit-frame" id="spiritFrame">
        <img
          className="spirit-video"
          src="/img/kk_spirit_dish.jpg"
          alt="Sizzling tandoori kebabs and rich copper handi curry"
        />
        <div className="veil"></div>

        <div className="spirit-in">
          <h2 className="dsp d2">
            WHERE TRADITION <br />
            MEETS THE TABLE
          </h2>
          <p>
            Sizzling charcoal-fired kebabs, aromatic copper handis, and authentic
            Mughlai flavours prepared from royal recipes passed down through generations.
          </p>
        </div>
      </div>
    </section>
  );
}
