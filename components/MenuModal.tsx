'use client';

import React, { useState, useMemo } from 'react';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: string;
  desc: string;
  badge?: string;
  isJain?: boolean;
  image?: string;
}

const menuCategories = [
  { id: 'all', label: 'All Items' },
  { id: 'combos', label: 'Meal Combos' },
  { id: 'chaats', label: 'Famous Chaats' },
  { id: 'specials', label: '1952 Specials' },
  { id: 'tandoor', label: 'Tandoor & Starters' },
  { id: 'curries', label: 'Royal Curries & Dal' },
  { id: 'biryani', label: 'Biryani & Breads' },
  { id: 'desserts', label: 'Desserts & Drinks' },
];

const menuData: MenuItem[] = [
  // Combos
  {
    id: 'c1',
    name: 'Amritsari Combo',
    category: 'combos',
    price: '₹449.00',
    desc: 'Butter Milk, Amritsari aloo paratha, chole, dahi & dessert. Complete hearty meal for one.',
    badge: 'Popular',
    image: '/kp/dishes/paneer_lababdar_curry.jpg',
  },
  {
    id: 'c2',
    name: 'Bombay Street Food Combo',
    category: 'combos',
    price: '₹449.00',
    desc: 'Famous chaat, cold beverage, Chole Bhature or Pav Bhaji & royal dessert.',
    badge: 'Bestseller',
    image: '/kp/dishes/pav_bhaji.jpg',
  },
  {
    id: 'c3',
    name: 'Paneer Tikka Lababdar Combo',
    category: 'combos',
    price: '₹499.00',
    desc: 'Served with choice of 2 tandoori rotis or fragrant basmati rice, green salad & dessert.',
    badge: 'Chef Choice',
    image: '/kp/dishes/paneer_tikka_plate.jpg',
  },
  {
    id: 'c4',
    name: 'North Indian Royal Combo',
    category: 'combos',
    price: '₹449.00',
    desc: 'Veg of the day, Punjabi chole, slow-simmered dal, tandoor roti, rice preparation & beverage.',
    image: '/kp/dishes/royal_curries_handi.jpg',
  },
  {
    id: 'c5',
    name: 'Dal Makhani Combo',
    category: 'combos',
    price: '₹419.00',
    desc: 'Authentic 12-hour slow-cooked black lentils in butter sauce served with 2 rotis/rice, salad & dessert.',
    image: '/kp/dishes/royal_curries_handi.jpg',
  },
  {
    id: 'c6',
    name: 'Meal For Two (Super Saver)',
    category: 'combos',
    price: '₹1,299.00',
    desc: 'Paneer Tikka Lababdar, Aloo Capsicum, Dal Tadka, Jeera Rice, 4 Butter Rotis, pickle & onion.',
    badge: 'Great Value',
    image: '/kp/dishes/paneer_lababdar_curry.jpg',
  },
  {
    id: 'c7',
    name: 'Family Meal For Four',
    category: 'combos',
    price: '₹1,649.00',
    desc: 'Paneer Tikka Lababdar, Aloo Capsicum, Dal Tadka, Jeera Rice, 8 Butter Rotis, pickle & onion feast.',
    badge: 'Family Favorite',
    image: '/kp/dishes/royal_curries_handi.jpg',
  },

  // Chaats
  {
    id: 'ch1',
    name: 'Crispy Pani Puri (6 Pcs)',
    category: 'chaats',
    price: '₹129.00',
    desc: 'Fried puff-pastry balls filled with spiced potato served with chilled spiced mint water & tamarind sauce.',
    badge: '1952 Classic',
    isJain: true,
  },
  {
    id: 'ch2',
    name: 'Royal Dahi Puri',
    category: 'chaats',
    price: '₹229.00',
    desc: 'Fried puff balls filled with potatoes, sweet & sour sauces, chilled spiced yogurt, sev & cumin sprinkle.',
    badge: 'Legendary',
    isJain: true,
    image: '/kp/dishes/dahi_vada.jpg',
  },
  {
    id: 'ch3',
    name: 'Classic Bhel Puri',
    category: 'chaats',
    price: '₹219.00',
    desc: 'Puffed rice, crisp sev, fresh chopped veggies, and tangy tamarind chutney with sweet-spicy notes.',
    isJain: true,
  },
  {
    id: 'ch4',
    name: 'Royal Dahi Wada',
    category: 'chaats',
    price: '₹229.00',
    desc: 'Soft fried lentil dumplings dipped in sweet & sour sauces topped with yogurt, pomegranate & blended spices.',
    badge: 'Bestseller',
    isJain: true,
    image: '/kp/dishes/dahi_vada.jpg',
  },
  {
    id: 'ch5',
    name: 'Papdi Chaat',
    category: 'chaats',
    price: '₹229.00',
    desc: 'Crispy flat fried puff, boiled potatoes, sweet & sour sauces and spicy mint sauce topped with yogurt.',
    isJain: true,
    image: '/kp/dishes/chaat_platter.jpg',
  },
  {
    id: 'ch6',
    name: 'Samosa Chaat',
    category: 'chaats',
    price: '₹259.00',
    desc: 'Crushed golden samosas with spiced chickpeas, onions, tomatoes, sweet & sour tamarind sauce & sev.',
  },
  {
    id: 'ch7',
    name: 'Crispy Corn Basket',
    category: 'chaats',
    price: '₹229.00',
    desc: 'Crisp edible flour baskets loaded with golden sweet corn, chopped tomatoes, onion & tangy spice drizzle.',
    isJain: true,
    image: '/kp/dishes/chaat_platter.jpg',
  },
  {
    id: 'ch8',
    name: 'Sev Puri',
    category: 'chaats',
    price: '₹229.00',
    desc: 'Flat fried pooris loaded with potatoes, fiery chilli sauce, sweet imli chutney, and generous crunchy sev.',
    isJain: true,
    image: '/kp/dishes/chaat_platter.jpg',
  },
  {
    id: 'ch9',
    name: 'Grand KP Chaat Platter',
    category: 'chaats',
    price: '₹459.00',
    desc: 'An exciting platter of Dahi Wada, Bhel Puri, 3 pcs Sev Puri & 3 pcs Crispy Corn Baskets.',
    badge: 'Signature Platter',
    isJain: true,
    image: '/kp/dishes/chaat_platter.jpg',
  },

  // 1952 Specials
  {
    id: 'sp1',
    name: 'KP Chole Bhatura',
    category: 'specials',
    price: '₹459.00',
    desc: 'Fermented puffed Indian bread served with KP special dark aromatic black chole, pickle & onions.',
    badge: 'Famous Since 1952',
  },
  {
    id: 'sp2',
    name: 'Bhatura Platter (4 Flavours)',
    category: 'specials',
    price: '₹599.00',
    desc: 'Fried fermented bread in 4 distinct craft flavours served with special KP chole and onion salad.',
    badge: 'House Specialty',
  },
  {
    id: 'sp3',
    name: 'Bombay Butter Pav Bhaji',
    category: 'specials',
    price: '₹329.00',
    desc: 'Our 1952 vegetable blend curry mashed on tawa, loaded with pure butter curls, served with 4 buttered pav buns.',
    badge: 'Must Try',
    isJain: true,
    image: '/kp/dishes/pav_bhaji.jpg',
  },
  {
    id: 'sp4',
    name: 'Cheese Pav Bhaji',
    category: 'specials',
    price: '₹349.00',
    desc: 'Signature tawa bhaji generously smothered with grated cheese, served with hot buttered pavs.',
    isJain: true,
    image: '/kp/dishes/pav_bhaji.jpg',
  },
  {
    id: 'sp5',
    name: 'Bombay Wada Pav (2 Pcs)',
    category: 'specials',
    price: '₹199.00',
    desc: 'Mumbai street legend: 2 crispy spiced potato dumplings tucked inside soft buns with roasted garlic chutney.',
    badge: 'Street Hero',
    image: '/kp/dishes/vada_pav_brass.jpg',
  },
  {
    id: 'sp6',
    name: 'Borivali Ki Dabeli (2 Pcs)',
    category: 'specials',
    price: '₹209.00',
    desc: 'Classic spiced potato filling in buttered pav, stuffed with roasted peanuts, pomegranate and sev.',
  },
  {
    id: 'sp7',
    name: 'Juhu Chowpaty Tawa Pulav',
    category: 'specials',
    price: '₹409.00',
    desc: 'Long grain rice cooked on a street-style cast tawa with vegetables, Pav Bhaji masala, served with raita.',
    isJain: true,
  },
  {
    id: 'sp8',
    name: 'Ragda Pattice (2 Pcs)',
    category: 'specials',
    price: '₹289.00',
    desc: 'Pan-seared potato patties served in rich white pea gravy (ragda), dressed with tangy chutneys & onions.',
  },

  // Tandoor & Starters
  {
    id: 't1',
    name: 'Paneer Tikka Charcoal Roast',
    category: 'tandoor',
    price: '₹439.00',
    desc: 'Marinated cottage cheese cubes grilled to smoky perfection in clay tandoor, served with mint chutney and lemon.',
    badge: 'Tandoor Hero',
    isJain: true,
    image: '/kp/dishes/paneer_tikka_brass.jpg',
  },
  {
    id: 't2',
    name: 'Hariyali Paneer Tikka (Green Marinade)',
    category: 'tandoor',
    price: '₹459.00',
    desc: 'Tandoor-grilled cottage cheese cubes coated in fresh mint, coriander, ginger and aromatic green spices.',
    badge: 'Special Green Marinade',
    isJain: true,
    image: '/kp/dishes/hariyali_paneer_tikka.jpg',
  },
  {
    id: 't3',
    name: 'Paneer Tikka Duo (Red & Green)',
    category: 'tandoor',
    price: '₹459.00',
    desc: 'Two styles in one platter: fiery Rajasthani red masala & fragrant Hyderabadi green marinade.',
    isJain: true,
    image: '/kp/dishes/paneer_tikka_plate.jpg',
  },
  {
    id: 't4',
    name: 'Crispy Paneer Bites',
    category: 'tandoor',
    price: '₹379.00',
    desc: 'Golden crumb-coated spiced paneer cubes fried to a delicate crisp, served with zesty dip.',
    badge: 'Snack Favorite',
    image: '/kp/dishes/crispy_paneer_bites.jpg',
  },
  {
    id: 't5',
    name: 'Crispy Honey Chilli Lotus Stem',
    category: 'tandoor',
    price: '₹419.00',
    desc: 'Sliced lotus root tossed in wok with sweet chili glaze, garlic, and fresh curry leaves.',
    badge: 'Chef Specialty',
    image: '/kp/dishes/lotus_stem_chilli.jpg',
  },
  {
    id: 't6',
    name: 'Veg Seekh Kebab',
    category: 'tandoor',
    price: '₹459.00',
    desc: 'Minced seasonal garden vegetables seasoned with garam masala, skewered and flame-grilled.',
    image: '/kp/dishes/paneer_tikka_brass.jpg',
  },
  {
    id: 't7',
    name: 'Veg Manchurian Gravy',
    category: 'tandoor',
    price: '₹379.00',
    desc: 'Crisp fried cabbage dumplings cooked in savory ginger-garlic soy sauce with scallions.',
    image: '/kp/dishes/veg_manchurian.jpg',
  },

  // Royal Curries & Dal
  {
    id: 'm1',
    name: 'Paneer Tikka Lababdar',
    category: 'curries',
    price: '₹449.00',
    desc: 'Charcoal-grilled paneer tikka simmered in our signature rich, creamy tomato gravy with crushed spices.',
    badge: 'Bestseller Curry',
    isJain: true,
    image: '/kp/dishes/paneer_lababdar_curry.jpg',
  },
  {
    id: 'm2',
    name: 'Royal Handi Curries Duo',
    category: 'curries',
    price: '₹499.00',
    desc: 'Pair of brass handis: rich Methi Malai Korma and spicy Paneer curry tempered with crisp curry leaves.',
    badge: 'Royal Handi',
    isJain: true,
    image: '/kp/dishes/royal_curries_handi.jpg',
  },
  {
    id: 'm3',
    name: 'Paneer Makhanwala',
    category: 'curries',
    price: '₹449.00',
    desc: 'Silky paneer cubes simmered in buttery tomato-makhani gravy, topped with fresh cream & kasoori methi.',
    isJain: true,
    image: '/kp/dishes/paneer_lababdar_curry.jpg',
  },
  {
    id: 'm4',
    name: 'Dal Makhani Heritage',
    category: 'curries',
    price: '₹359.00',
    desc: 'Black urad lentils and kidney beans slow-simmered overnight over smoldering coals with butter & cream.',
    badge: '12-Hr Simmered',
    isJain: true,
    image: '/kp/dishes/royal_curries_handi.jpg',
  },
  {
    id: 'm5',
    name: 'Palak Paneer',
    category: 'curries',
    price: '₹449.00',
    desc: 'Fresh farm spinach pureed and tempered with garlic and cumin, gently folded with fresh cottage cheese.',
    isJain: true,
    image: '/kp/dishes/paneer_lababdar_curry.jpg',
  },
  {
    id: 'm6',
    name: 'Pindi Chole Masala',
    category: 'curries',
    price: '₹439.00',
    desc: 'Classic Rawalpindi recipe of dark chickpeas stewed in anar dana (dried pomegranate) and hand-ground spices.',
    badge: 'Authentic Punjabi',
  },
  {
    id: 'm7',
    name: 'Dal Tadka Desi Ghee',
    category: 'curries',
    price: '₹339.00',
    desc: 'Yellow lentils finished with a sizzling crackle of cumin, dried red chillies, and aromatic pure desi ghee.',
    isJain: true,
  },

  // Biryani & Breads
  {
    id: 'b1',
    name: 'Hyderabadi Dum Biryani',
    category: 'biryani',
    price: '₹449.00',
    desc: 'Fragrant basmati rice layered with spiced vegetables, saffron milk, and herbs, sealed in handi with raita.',
    badge: 'Nizami Specialty',
  },
  {
    id: 'b2',
    name: 'Paneer Tikka Biryani',
    category: 'biryani',
    price: '₹449.00',
    desc: 'Smoky grilled paneer cubes layered with aromatic basmati rice and golden brown onions, served with cooling raita.',
    isJain: true,
    image: '/kp/dishes/paneer_tikka_brass.jpg',
  },
  {
    id: 'b3',
    name: 'Dal Khichdi With Desi Ghee',
    category: 'biryani',
    price: '₹369.00',
    desc: 'Wholesome comforting blend of rice and lentils cooked with mild spices, served with raita, pickle & papad.',
    isJain: true,
  },
  {
    id: 'b4',
    name: 'Amritsari Aloo Kulcha',
    category: 'biryani',
    price: '₹239.00',
    desc: 'Crisp layered tandoor bread stuffed with spiced mashed potatoes and pomegranate seeds, served with raita.',
  },
  {
    id: 'b5',
    name: 'Garlic Butter Naan',
    category: 'biryani',
    price: '₹119.00',
    desc: 'Tandoori leavened flatbread brushed with garlic butter and fresh cilantro.',
  },
  {
    id: 'b6',
    name: 'Cheese Garlic Naan',
    category: 'biryani',
    price: '₹129.00',
    desc: 'Tandoor baked naan infused with molten cheese and crushed garlic.',
  },
  {
    id: 'b7',
    name: 'Tandoori Butter Roti',
    category: 'biryani',
    price: '₹79.00',
    desc: '100% whole wheat unleavened bread baked in the clay tandoor with fresh butter.',
  },

  // Desserts & Drinks
  {
    id: 'd1',
    name: 'Malai Rabdi (100 Gms)',
    category: 'desserts',
    price: '₹209.00',
    desc: 'Slowly thickened condensed milk flavored with cardamom, saffron threads, and slivered pistachios.',
    badge: 'Heritage Sweet',
    isJain: true,
  },
  {
    id: 'd2',
    name: 'Gulab Jamun With Rabdi (2 Pcs)',
    category: 'desserts',
    price: '₹299.00',
    desc: 'Warm khoya dumplings steeped in rose syrup, paired lavishly with chilled thick artisanal rabdi.',
    badge: 'Heavenly Pair',
    isJain: true,
  },
  {
    id: 'd3',
    name: 'Royal Falooda',
    category: 'desserts',
    price: '₹299.00',
    desc: 'Regal layered dessert of vermicelli, basil seeds (sabza), rose milk, rich rabdi, and vanilla ice cream.',
    isJain: true,
  },
  {
    id: 'd4',
    name: 'Masala Chaas (200 Ml)',
    category: 'desserts',
    price: '₹159.00',
    desc: 'Traditional churned buttermilk tempered with roasted cumin, ginger, mint, and rock salt.',
    isJain: true,
  },
  {
    id: 'd5',
    name: 'Sweet Punjabi Lassi (200 Ml)',
    category: 'desserts',
    price: '₹199.00',
    desc: 'Thick, creamy churned sweet yogurt topped with a layer of fresh malai and crushed nuts.',
    isJain: true,
  },
  {
    id: 'd6',
    name: 'Desi Kala Khatta (200 Ml)',
    category: 'desserts',
    price: '₹199.00',
    desc: 'Nostalgic sweet and tangy Indian jamun cooler seasoned with black salt and lemon.',
    isJain: true,
  },
];

const menuBookPages = [
  { page: 1, title: 'House Specials Since 1952', src: '/kp/menu/1.jpg' },
  { page: 2, title: 'Pizzas, Pastas & Soups', src: '/kp/menu/2.jpg' },
  { page: 3, title: 'Tandoori Appetizers & Kebabs', src: '/kp/menu/3.jpg' },
  { page: 4, title: 'Mughlai & North Indian Curries', src: '/kp/menu/4.jpg' },
  { page: 5, title: 'Dal Handis & Tandoor Breads', src: '/kp/menu/5.jpg' },
  { page: 6, title: 'Fragrant Rice, Biryani & Pulao', src: '/kp/menu/6.jpg' },
  { page: 7, title: 'Oriental Wok & Sizzlers', src: '/kp/menu/7.jpg' },
  { page: 8, title: 'Sindhi Snacks & Street Chaats', src: '/kp/menu/8.jpg' },
  { page: 9, title: 'Beverages, Shakes & Coolers', src: '/kp/menu/9.jpg' },
  { page: 10, title: 'Artisanal Halwai Desserts', src: '/kp/menu/10.jpg' },
];

export default function MenuModal({ isOpen, onClose }: MenuModalProps) {
  const [viewMode, setViewMode] = useState<'digital' | 'book'>('digital');
  const [selectedCat, setSelectedCat] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeBookPage, setActiveBookPage] = useState(0);

  const filteredItems = useMemo(() => {
    return menuData.filter((item) => {
      const matchesCat = selectedCat === 'all' || item.category === selectedCat;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCat, searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="kp-menu-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="kp-menu-modal-sheet" onClick={(e) => e.stopPropagation()}>
        {/* Sticky Modal Header */}
        <div className="kp-menu-modal-top">
          <div className="kp-modal-brand-info">
            <span className="kp-modal-estd">KAILASH PARBAT • ESTD 1952</span>
            <h2 className="kp-menu-modal-heading">The Royal Culinary Menu</h2>
          </div>

          {/* View Mode Switcher: Digital Menu vs Official Menu Booklet */}
          <div className="kp-menu-mode-toggle">
            <button
              onClick={() => setViewMode('digital')}
              className={`kp-mode-btn ${viewMode === 'digital' ? 'active' : ''}`}
            >
              📋 Digital Interactive Menu
            </button>
            <button
              onClick={() => setViewMode('book')}
              className={`kp-mode-btn ${viewMode === 'book' ? 'active' : ''}`}
            >
              📖 Printed Menu Book (10 Pages)
            </button>
          </div>

          <button
            onClick={onClose}
            className="kp-menu-modal-close"
            aria-label="Close Menu"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="kp-menu-modal-content">
          {viewMode === 'digital' ? (
            <div>
              {/* Search & Category Pills */}
              <div className="kp-menu-controls-bar">
                <div className="kp-search-wrap">
                  <span className="kp-search-icon">🔍</span>
                  <input
                    type="text"
                    className="kp-search-input"
                    placeholder="Search dishes (e.g. Paneer, Pav Bhaji, Biryani, Chaat)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button
                      className="kp-search-clear"
                      onClick={() => setSearchQuery('')}
                      aria-label="Clear search"
                    >
                      ✕
                    </button>
                  )}
                </div>

                <div className="kp-cat-tabs">
                  {menuCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCat(cat.id)}
                      className={`kp-cat-tab ${selectedCat === cat.id ? 'active' : ''}`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Delivery CTA strip */}
              <div className="kp-menu-sub-bar">
                <span className="kp-results-count">
                  Showing <strong>{filteredItems.length}</strong> authentic vegetarian dishes
                </span>
                <div className="kp-direct-order-reminder">
                  <span>Order Direct to Panampilly Nagar:</span>
                  <a
                    href="https://www.zomato.com/kochi/kailash-parbat-panampilly-nagar/order"
                    target="_blank"
                    rel="noreferrer"
                    className="kp-micro-order zomato"
                  >
                    Zomato
                  </a>
                  <a
                    href="https://www.swiggy.com/city/kochi/kailash-parbat-panampilly-nagar-panampilly-nagar-rest1420901?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder"
                    target="_blank"
                    rel="noreferrer"
                    className="kp-micro-order swiggy"
                  >
                    Swiggy
                  </a>
                </div>
              </div>

              {/* Dish Cards Grid */}
              <div className="kp-menu-cards-grid">
                {filteredItems.map((item) => (
                  <div key={item.id} className="kp-menu-item-card">
                    {item.image && (
                      <div className="kp-menu-thumb-wrap">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="kp-menu-thumb"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="kp-menu-item-info">
                      <div className="kp-item-header">
                        <div className="kp-item-title-row">
                          <span className="kp-veg-dot" title="100% Pure Vegetarian">
                            ●
                          </span>
                          <h3 className="kp-item-name">{item.name}</h3>
                        </div>
                        <span className="kp-item-price">{item.price}</span>
                      </div>

                      <div className="kp-item-badges">
                        {item.badge && <span className="kp-pill gold">{item.badge}</span>}
                        {item.isJain && (
                          <span className="kp-pill green" title="Jain Preparation Available">
                            Jain Option
                          </span>
                        )}
                      </div>

                      <p className="kp-item-desc">{item.desc}</p>

                      <div className="kp-item-order-strip">
                        <span className="kp-order-label">Order:</span>
                        <a
                          href="https://www.zomato.com/kochi/kailash-parbat-panampilly-nagar/order"
                          target="_blank"
                          rel="noreferrer"
                          className="kp-dish-order-btn zomato"
                        >
                          Zomato
                        </a>
                        <a
                          href="https://www.swiggy.com/city/kochi/kailash-parbat-panampilly-nagar-panampilly-nagar-rest1420901?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder"
                          target="_blank"
                          rel="noreferrer"
                          className="kp-dish-order-btn swiggy"
                        >
                          Swiggy
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Printed Menu Booklet Viewer (10 pages) */
            <div className="kp-book-viewer-wrap">
              <div className="kp-book-top-ctrls">
                <button
                  onClick={() => setActiveBookPage((prev) => Math.max(0, prev - 1))}
                  disabled={activeBookPage === 0}
                  className="kp-book-nav-btn"
                >
                  ◀ Previous Page
                </button>
                <div className="kp-book-page-indicator">
                  <strong>Page {activeBookPage + 1} of {menuBookPages.length}</strong>
                  <span>{menuBookPages[activeBookPage].title}</span>
                </div>
                <button
                  onClick={() =>
                    setActiveBookPage((prev) => Math.min(menuBookPages.length - 1, prev + 1))
                  }
                  disabled={activeBookPage === menuBookPages.length - 1}
                  className="kp-book-nav-btn"
                >
                  Next Page ▶
                </button>
              </div>

              {/* High-res scanned page image */}
              <div className="kp-book-page-display">
                <img
                  src={menuBookPages[activeBookPage].src}
                  alt={menuBookPages[activeBookPage].title}
                  className="kp-scanned-page-img"
                />
              </div>

              {/* Thumbnails strip */}
              <div className="kp-book-thumbs-strip">
                {menuBookPages.map((pg, idx) => (
                  <button
                    key={pg.page}
                    onClick={() => setActiveBookPage(idx)}
                    className={`kp-book-thumb-btn ${idx === activeBookPage ? 'active' : ''}`}
                  >
                    <img src={pg.src} alt={`Page ${pg.page}`} />
                    <span>P.{pg.page}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
