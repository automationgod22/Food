'use client';

import React, { useState, useEffect, useRef } from 'react';

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
    id: 'pav-bhaji',
    name: 'Bombay Butter Pav Bhaji',
    price: '₹329.00',
    tag: 'Chef Special Since 1952',
    desc: 'Our world-famous vegetable mash simmered on a tawa with proprietary KP spices, loaded with golden butter curls and served with warm buttered pav buns.',
    image: '/kp/dishes/pav_bhaji.jpg',
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
    desc: 'Two spiced golden potato fritters tucked into soft buttery buns, smeared with mint spread and fiery roasted dry garlic chutney, served with blistered chilies.',
    image: '/kp/dishes/vada_pav_brass.jpg',
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
    desc: 'An exciting tasting platter featuring silky Dahi Wada, tangy Bhel Puri, 3 pcs Sev Puri, and 3 pcs Crispy Corn Baskets with sweet and spicy chutneys and fine sev.',
    image: '/kp/dishes/chaat_platter.jpg',
    isJainAvailable: true,
    orderZomato: 'https://www.zomato.com/kochi/kailash-parbat-panampilly-nagar/order',
    orderSwiggy:
      'https://www.swiggy.com/city/kochi/kailash-parbat-panampilly-nagar-panampilly-nagar-rest1420901?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder',
  },
  {
    id: 'dahi-vada',
    name: 'Royal Dahi Vada / Chaat',
    price: '₹229.00',
    tag: 'Bestseller Classic',
    desc: 'Golden fried lentil dumplings soaked in chilled sweet curd, laced with date-tamarind chutney, fresh mint spread, crunchy sev, and roasted cumin powder.',
    image: '/kp/dishes/dahi_vada.jpg',
    isJainAvailable: true,
    orderZomato: 'https://www.zomato.com/kochi/kailash-parbat-panampilly-nagar/order',
    orderSwiggy:
      'https://www.swiggy.com/city/kochi/kailash-parbat-panampilly-nagar-panampilly-nagar-rest1420901?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder',
  },
  {
    id: 'paneer-tikka',
    name: 'Charcoal Roasted Paneer Tikka',
    price: '₹439.00',
    tag: 'Tandoori Favorite',
    desc: 'Malai cottage cheese marinated in hung curd and crushed whole spices, roasted in clay tandoor on banana leaf, served with mint chutney and lemon.',
    image: '/kp/dishes/paneer_tikka_brass.jpg',
    isJainAvailable: true,
    orderZomato: 'https://www.zomato.com/kochi/kailash-parbat-panampilly-nagar/order',
    orderSwiggy:
      'https://www.swiggy.com/city/kochi/kailash-parbat-panampilly-nagar-panampilly-nagar-rest1420901?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder',
  },
  {
    id: 'hariyali-tikka',
    name: 'Hariyali Paneer Tikka',
    price: '₹449.00',
    tag: 'Herb Infused Delight',
    desc: 'Cottage cheese marinated in aromatic freshly pounded garden mint, coriander, ginger, and green chilies, char-grilled to juicy perfection.',
    image: '/kp/dishes/hariyali_paneer_tikka.jpg',
    isJainAvailable: true,
    orderZomato: 'https://www.zomato.com/kochi/kailash-parbat-panampilly-nagar/order',
    orderSwiggy:
      'https://www.swiggy.com/city/kochi/kailash-parbat-panampilly-nagar-panampilly-nagar-rest1420901?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder',
  },
];

export default function SignatureChaats() {
  const [activeItem, setActiveItem] = useState(chaatItems[0]);
  const [inViewIds, setInViewIds] = useState<string[]>([]);
  const cardElementsRef = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('data-id') || '';
          if (entry.isIntersecting) {
            setInViewIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
          } else {
            setInViewIds((prev) => prev.filter((i) => i !== id));
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    cardElementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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

        {/* Chaat Grid with Scroll-Zoom Effect */}
        <div className="kp-chaats-grid">
          {chaatItems.map((item) => (
            <div
              key={item.id}
              ref={(el) => {
                if (el) cardElementsRef.current.set(item.id, el);
                else cardElementsRef.current.delete(item.id);
              }}
              data-id={item.id}
              className={`kp-chaat-card kp-scroll-zoom-card ${
                inViewIds.includes(item.id) ? 'in-view' : ''
              } ${activeItem.id === item.id ? 'featured' : ''}`}
              onMouseEnter={() => setActiveItem(item)}
            >
              <div className="kp-chaat-img-wrap kp-scroll-zoom-media">
                <img
                  src={item.image}
                  alt={item.name}
                  className="kp-chaat-img kp-scroll-zoom-img"
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
