'use client';

import React, { useState } from 'react';

interface ChaatItem {
  id: string;
  name: string;
  price: string;
  tag: string;
  desc: string;
  image: string;
  isJainAvailable: boolean;
  orderZomato: string;
  orderSwiggy: string;
}

const chaatItems: ChaatItem[] = [
  {
    id: 'dahi-puri',
    name: 'Royal Dahi Puri',
    price: '₹229.00',
    tag: 'Bestseller Since 1952',
    desc: 'Fried puff-pastry balls filled with spiced potatoes, sweet & sour sauces, blanketed in creamy chilled yogurt, crispy sev, and crushed roasted cumin.',
    image: '/kp/photos/8.jpg',
    isJainAvailable: true,
    orderZomato: 'https://www.zomato.com/kochi/kailash-parbat-panampilly-nagar/order',
    orderSwiggy:
      'https://www.swiggy.com/city/kochi/kailash-parbat-panampilly-nagar-panampilly-nagar-rest1420901?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder',
  },
  {
    id: 'pav-bhaji',
    name: 'Bombay Butter Pav Bhaji',
    price: '₹329.00',
    tag: 'Chef Special',
    desc: 'Our world-famous vegetable mash simmered on a colossal tawa with proprietary KP spices, loaded with golden butter curls and served with 2 warm toasted pav buns.',
    image: '/kp/photos/5.png',
    isJainAvailable: true,
    orderZomato: 'https://www.zomato.com/kochi/kailash-parbat-panampilly-nagar/order',
    orderSwiggy:
      'https://www.swiggy.com/city/kochi/kailash-parbat-panampilly-nagar-panampilly-nagar-rest1420901?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder',
  },
  {
    id: 'wada-pav',
    name: 'Bombay Wada Pav (2 Pcs)',
    price: '₹199.00',
    tag: 'Mumbai Soul Food',
    desc: 'Two spiced golden potato fritters tucked into soft buttery buns, smeared with tangy mint spread and fiery roasted dry garlic chutney, served with blistered chilies.',
    image: '/kp/photos/7.jpg',
    isJainAvailable: false,
    orderZomato: 'https://www.zomato.com/kochi/kailash-parbat-panampilly-nagar/order',
    orderSwiggy:
      'https://www.swiggy.com/city/kochi/kailash-parbat-panampilly-nagar-panampilly-nagar-rest1420901?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder',
  },
  {
    id: 'kp-platter',
    name: 'Grand KP Chaat Platter',
    price: '₹459.00',
    tag: 'All-in-One Feast',
    desc: 'An exciting tasting platter featuring silky Dahi Wada, tangy Bhel Puri, 3 pcs Sev Puri, and 3 pcs Crispy Corn Baskets with artisanal sweet and spicy chutneys.',
    image: '/kp/photos/3.jpg',
    isJainAvailable: true,
    orderZomato: 'https://www.zomato.com/kochi/kailash-parbat-panampilly-nagar/order',
    orderSwiggy:
      'https://www.swiggy.com/city/kochi/kailash-parbat-panampilly-nagar-panampilly-nagar-rest1420901?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder',
  },
  {
    id: 'pani-puri',
    name: 'Crispy Pani Puri (6 Pcs)',
    price: '₹129.00',
    tag: 'Iconic Classic',
    desc: 'Crispy fried hollow shells filled with spiced ragda or mashed potato, dunked into chilled tangy mint-asafoetida herbal water and luscious date-tamarind chutney.',
    image: '/kp/photos/4.jpg',
    isJainAvailable: true,
    orderZomato: 'https://www.zomato.com/kochi/kailash-parbat-panampilly-nagar/order',
    orderSwiggy:
      'https://www.swiggy.com/city/kochi/kailash-parbat-panampilly-nagar-panampilly-nagar-rest1420901?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder',
  },
  {
    id: 'chole-bhatura',
    name: 'KP Signature Chole Bhatura',
    price: '₹459.00',
    tag: 'Legendary Punjabi',
    desc: 'Two golden, puffed fermented Indian bhaturas served alongside KP’s signature dark-spiced pindi chole, pickled ginger juliennes, and spicy green chillies.',
    image: '/kp/photos/6.jpg',
    isJainAvailable: false,
    orderZomato: 'https://www.zomato.com/kochi/kailash-parbat-panampilly-nagar/order',
    orderSwiggy:
      'https://www.swiggy.com/city/kochi/kailash-parbat-panampilly-nagar-panampilly-nagar-rest1420901?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder',
  },
];

export default function SignatureChaats() {
  const [activeItem, setActiveItem] = useState(chaatItems[0]);

  return (
    <section id="chaats" className="kp-chaats-section" aria-label="Legendary Chaats">
      <div className="kp-container">
        {/* Section Header */}
        <div className="kp-center-header">
          <div className="kp-section-tag">
            <span className="kp-tag-line">THE WORLD-FAMOUS CHAAT BAR</span>
            <span className="kp-tag-pill">CRISPY • TANGY • ROYAL</span>
          </div>
          <h2 className="kp-section-title">
            The Legendary Chaat of <span className="kp-gold-text">Kailash Parbat</span>
          </h2>
          <p className="kp-section-subtitle">
            Authentic Mumbai street gastronomy reimagined with regal hygiene, pure ingredients,
            and 70 years of perfected seasoning right here in Panampilly Nagar, Kochi.
          </p>
        </div>

        {/* Chaat Grid */}
        <div className="kp-chaats-grid">
          {chaatItems.map((item) => (
            <div
              key={item.id}
              className={`kp-chaat-card ${activeItem.id === item.id ? 'featured' : ''}`}
              onMouseEnter={() => setActiveItem(item)}
            >
              <div className="kp-chaat-img-wrap">
                <img
                  src={item.image}
                  alt={item.name}
                  className="kp-chaat-img"
                  loading="lazy"
                />
                <span className="kp-chaat-badge">{item.tag}</span>
                {item.isJainAvailable && (
                  <span className="kp-jain-pill" title="Jain Option Available">
                    Jain Available
                  </span>
                )}
              </div>

              <div className="kp-chaat-body">
                <div className="kp-chaat-top">
                  <h3 className="kp-chaat-name">{item.name}</h3>
                  <span className="kp-chaat-price">{item.price}</span>
                </div>

                <p className="kp-chaat-desc">{item.desc}</p>

                <div className="kp-chaat-actions">
                  <a
                    href={item.orderZomato}
                    target="_blank"
                    rel="noreferrer"
                    className="kp-order-pill zomato"
                  >
                    Order on Zomato
                  </a>
                  <a
                    href={item.orderSwiggy}
                    target="_blank"
                    rel="noreferrer"
                    className="kp-order-pill swiggy"
                  >
                    Swiggy
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="kp-chaat-cta-banner">
          <div className="kp-cta-text">
            <h3>Craving Authentic Mumbai Chaat Right Now?</h3>
            <p>
              Delivered hot and crispy to Panampilly Nagar, Kadavanthra, Ravipuram, MG Road, and Kochi
              within 30–45 minutes.
            </p>
          </div>
          <div className="kp-cta-buttons">
            <a
              href="https://www.zomato.com/kochi/kailash-parbat-panampilly-nagar/order"
              target="_blank"
              rel="noreferrer"
              className="kp-btn-gold"
            >
              Order on Zomato
            </a>
            <a
              href="https://www.swiggy.com/city/kochi/kailash-parbat-panampilly-nagar-panampilly-nagar-rest1420901?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder"
              target="_blank"
              rel="noreferrer"
              className="kp-btn-outline"
            >
              Order on Swiggy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
