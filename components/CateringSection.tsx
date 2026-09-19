'use client';

import React from 'react';

const trioItems = [
  {
    image: '/img/kk_culinary_card.jpg',
    title: 'Authentic Culinary Heritage',
    description:
      'Hand-ground spices, simmering copper handis, and tandoori mastery crafted from centuries-old royal Mughlai and Awadhi recipes.',
    alt: 'Master chef garnishing aromatic curry with ghee and whole spices',
  },
  {
    image: '/img/kk_ambience_card.jpg',
    title: 'Rustic Palace Ambience',
    description:
      'Hand-carved sandstone pillars, delicate jharokha arches, and glowing crystal chandeliers creating an intimate royal dining atmosphere.',
    alt: 'Traditional haveli interior with warm chandeliers and ornate archways',
  },
  {
    image: '/img/kk_hospitality_card.jpg',
    title: 'Royal Indian Hospitality',
    description:
      'Guided by the timeless Indian tradition of Atithi Devo Bhava, our attentive team welcomes you with signature infusions and royal care.',
    alt: 'Traditional royal welcome greeting in embroidered sherwani',
  },
];

export default function CateringSection() {
  return (
    <section className="catering" id="catering">
      <div className="band">
        <div className="side l lbl">ROYAL HERITAGE&emsp;</div>
        <h2 className="dsp d2 mid">
          WHERE MEMORIES
          <br />
          ARE KEPT WARM
        </h2>
        <div className="side r lbl">TIMELESS TRADITIONS</div>
      </div>

      <p className="cat-lead">
        For over 25 years, our dining halls have welcomed families, friends,
        and dignitaries for grand celebrations and intimate feasts. At Khana Khajana,
        every meal is prepared as an unforgettable royal offering.
      </p>

      <div className="trio">
        {trioItems.map((item, idx) => (
          <figure key={idx}>
            <div className="shot">
              <img
                src={item.image}
                alt={item.alt}
              />
            </div>
            <figcaption>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
