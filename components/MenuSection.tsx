'use client';

import React, { useState, useMemo } from 'react';

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
    image: '/kp/menu/1.jpg',
  },
  {
    id: 'c2',
    name: 'Bombay Street Food Combo',
    category: 'combos',
    price: '₹449.00',
    desc: 'Famous chaat, chilled beverage, Chole Bhature or Pav Bhaji & royal dessert.',
    badge: 'Bestseller',
    image: '/kp/menu/2.jpg',
  },
  {
    id: 'c3',
    name: 'Paneer Tikka Lababdar Combo',
    category: 'combos',
    price: '₹499.00',
    desc: 'Served with choice of 2 tandoori rotis or fragrant basmati rice, green salad & dessert.',
    badge: 'Chef Choice',
    image: '/kp/menu/3.jpg',
  },
  {
    id: 'c4',
    name: 'North Indian Royal Combo',
    category: 'combos',
    price: '₹449.00',
    desc: 'Veg of the day, Punjabi chole, slow-simmered dal, tandoor roti, rice preparation & beverage.',
    image: '/kp/menu/4.jpg',
  },
  {
    id: 'c5',
    name: 'Dal Makhani Combo',
    category: 'combos',
    price: '₹419.00',
    desc: 'Authentic 12-hour slow-cooked black lentils in butter sauce served with 2 rotis/rice, salad & dessert.',
    image: '/kp/menu/5.jpg',
  },
  {
    id: 'c6',
    name: 'Meal For Two (Super Saver)',
    category: 'combos',
    price: '₹1,299.00',
    desc: 'Paneer Tikka Lababdar, Aloo Capsicum, Dal Tadka, Jeera Rice, 4 Butter Rotis, pickle & onion.',
    badge: 'Great Value',
    image: '/kp/menu/6.jpg',
  },
  {
    id: 'c7',
    name: 'Family Meal For Four',
    category: 'combos',
    price: '₹1,649.00',
    desc: 'Paneer Tikka Lababdar, Aloo Capsicum, Dal Tadka, Jeera Rice, 8 Butter Rotis, pickle & onion feast.',
    badge: 'Family Favorite',
    image: '/kp/menu/7.jpg',
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
    image: '/kp/photos/4.jpg',
  },
  {
    id: 'ch2',
    name: 'Royal Dahi Puri',
    category: 'chaats',
    price: '₹229.00',
    desc: 'Fried puff balls filled with potatoes, sweet & sour sauces, chilled spiced yogurt, sev & cumin sprinkle.',
    badge: 'Legendary',
    isJain: true,
    image: '/kp/photos/8.jpg',
  },
  {
    id: 'ch3',
    name: 'Classic Bhel Puri',
    category: 'chaats',
    price: '₹219.00',
    desc: 'Puffed rice, crisp sev, fresh chopped veggies, and tangy tamarind chutney with sweet-spicy notes.',
    isJain: true,
    image: '/kp/photos/3.jpg',
  },
  {
    id: 'ch4',
    name: 'Dahi Wada',
    category: 'chaats',
    price: '₹229.00',
    desc: 'Soft fried lentil dumplings dipped in sweet & sour sauces topped with yogurt, pomegranate & blended spices.',
    isJain: true,
    image: '/kp/menu/8.jpg',
  },
  {
    id: 'ch5',
    name: 'Papdi Chaat',
    category: 'chaats',
    price: '₹229.00',
    desc: 'Crispy flat fried puff, boiled potatoes, sweet & sour sauces and spicy mint sauce topped with yogurt.',
    isJain: true,
    image: '/kp/photos/8.jpg',
  },
  {
    id: 'ch6',
    name: 'Samosa Chaat',
    category: 'chaats',
    price: '₹259.00',
    desc: 'Crushed golden samosas with spiced chickpeas, onions, tomatoes, sweet & sour tamarind sauce & sev.',
    image: '/kp/photos/3.jpg',
  },
  {
    id: 'ch7',
    name: 'Crispy Corn Basket',
    category: 'chaats',
    price: '₹229.00',
    desc: 'Crisp edible flour baskets loaded with golden sweet corn, chopped tomatoes, onion & tangy spice drizzle.',
    isJain: true,
    image: '/kp/menu/9.jpg',
  },
  {
    id: 'ch8',
    name: 'Sev Puri',
    category: 'chaats',
    price: '₹229.00',
    desc: 'Flat fried pooris loaded with potatoes, fiery chilli sauce, sweet imli chutney, and generous crunchy sev.',
    isJain: true,
    image: '/kp/photos/3.jpg',
  },
  {
    id: 'ch9',
    name: 'Grand KP Chaat Platter',
    category: 'chaats',
    price: '₹459.00',
    desc: 'An exciting platter of Dahi Wada, Bhel Puri, 3 pcs Sev Puri & 3 pcs Crispy Corn Baskets.',
    badge: 'Signature',
    isJain: true,
    image: '/kp/photos/8.jpg',
  },

  // 1952 Specials
  {
    id: 'sp1',
    name: 'KP Chole Bhatura',
    category: 'specials',
    price: '₹459.00',
    desc: 'Fermented puffed Indian bread served with KP special dark aromatic black chole, pickle & onions.',
    badge: 'Famous',
    image: '/kp/photos/6.jpg',
  },
  {
    id: 'sp2',
    name: 'Bhatura Platter (4 Flavours)',
    category: 'specials',
    price: '₹599.00',
    desc: 'Fried fermented bread in 4 distinct craft flavours served with special KP chole and onion salad.',
    badge: 'House Specialty',
    image: '/kp/menu/10.jpg',
  },
  {
    id: 'sp3',
    name: 'Bombay Pav Bhaji',
    category: 'specials',
    price: '₹329.00',
    desc: 'Our 1952 vegetable blend curry mashed on tawa, loaded with butter, served with soft toasted pav buns.',
    badge: 'Must Try',
    isJain: true,
    image: '/kp/photos/5.png',
  },
  {
    id: 'sp4',
    name: 'Cheese Pav Bhaji',
    category: 'specials',
    price: '₹349.00',
    desc: 'Signature tawa bhaji generously smothered with grated cheddar cheese, served with hot buttered pavs.',
    isJain: true,
    image: '/kp/photos/5.png',
  },
  {
    id: 'sp5',
    name: 'Bombay Wada Pav (2 Pcs)',
    category: 'specials',
    price: '₹199.00',
    desc: 'Mumbai street legend: crispy spiced potato dumpling tucked inside a soft bun with dry garlic chutney.',
    badge: 'Street Hero',
    image: '/kp/photos/7.jpg',
  },
  {
    id: 'sp6',
    name: 'Borivali Ki Dabeli (2 Pcs)',
    category: 'specials',
    price: '₹209.00',
    desc: 'Classic spiced potato filling in buttered pav, stuffed with peanuts, pomegranate and sev.',
    image: '/kp/menu/2.jpg',
  },
  {
    id: 'sp7',
    name: 'Juhu Chowpaty Tawa Pulav',
    category: 'specials',
    price: '₹409.00',
    desc: 'Long grain rice cooked on a street-style cast tawa with vegetables, Pav Bhaji masala, served with raita.',
    isJain: true,
    image: '/kp/menu/1.jpg',
  },
  {
    id: 'sp8',
    name: 'Ragda Pattice (2 Pcs)',
    category: 'specials',
    price: '₹289.00',
    desc: 'Pan-seared potato patties served in rich white pea gravy (ragda), dressed with tangy chutneys & onions.',
    image: '/kp/photos/3.jpg',
  },

  // Tandoor & Starters
  {
    id: 't1',
    name: 'Paneer Tikka Charcoal Roast',
    category: 'tandoor',
    price: '₹439.00',
    desc: 'Marinated paneer cubes grilled to smoky perfection in clay tandoor, served with mint chutney and lemon.',
    badge: 'Tandoor Hero',
    isJain: true,
    image: '/kp/photos/14.jpg',
  },
  {
    id: 't2',
    name: 'Paneer Tikka Duo (Red & Green)',
    category: 'tandoor',
    price: '₹459.00',
    desc: 'Tandoor-grilled cottage cheese cubes in two marinades: fiery Rajasthani red masala & fragrant mint green.',
    isJain: true,
    image: '/kp/photos/16.jpg',
  },
  {
    id: 't3',
    name: 'Malai Paneer Tikka',
    category: 'tandoor',
    price: '₹469.00',
    desc: 'Creamy paneer cubes marinated in rich cashew paste, hung curd and green cardamom, gently charred.',
    badge: 'Royal Melt',
    isJain: true,
    image: '/kp/photos/14.jpg',
  },
  {
    id: 't4',
    name: 'Achari Aloo Tikka',
    category: 'tandoor',
    price: '₹359.00',
    desc: 'Baby potato cubes infused with tangy pickling spices and slow-roasted for a crisp, smoky bite.',
    image: '/kp/photos/17.jpg',
  },
  {
    id: 't5',
    name: 'Mushroom Makhmali',
    category: 'tandoor',
    price: '₹439.00',
    desc: 'Fresh button mushrooms marinated in velvety spiced yogurt cream and grilled on long skewers.',
    image: '/kp/photos/16.jpg',
  },
  {
    id: 't6',
    name: 'Veg Seekh Kebab',
    category: 'tandoor',
    price: '₹459.00',
    desc: 'Minced seasonal garden vegetables seasoned with garam masala, skewered and flame-grilled.',
    image: '/kp/photos/14.jpg',
  },
  {
    id: 't7',
    name: 'Paneer Chilli Dry',
    category: 'tandoor',
    price: '₹439.00',
    desc: 'Crisp batter-fried paneer cubes tossed in high-heat wok with bell peppers, spring onion & dark soy.',
    image: '/kp/menu/3.jpg',
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
    image: '/kp/photos/2.jpg',
  },
  {
    id: 'm2',
    name: 'Paneer Makhanwala',
    category: 'curries',
    price: '₹449.00',
    desc: 'Silky paneer cubes simmered in buttery tomato-makhani gravy, topped with fresh cream & kasoori methi.',
    isJain: true,
    image: '/kp/photos/2.jpg',
  },
  {
    id: 'm3',
    name: 'Dal Makhani Heritage',
    category: 'curries',
    price: '₹359.00',
    desc: 'Black urad lentils and kidney beans slow-simmered overnight over smoldering coals with butter & cream.',
    badge: '12-Hr Simmered',
    isJain: true,
    image: '/kp/menu/5.jpg',
  },
  {
    id: 'm4',
    name: 'Palak Paneer',
    category: 'curries',
    price: '₹449.00',
    desc: 'Fresh farm spinach pureed and tempered with garlic and cumin, gently folded with fresh cottage cheese.',
    isJain: true,
    image: '/kp/photos/2.jpg',
  },
  {
    id: 'm5',
    name: 'Pindi Chole Masala',
    category: 'curries',
    price: '₹439.00',
    desc: 'Classic Rawalpindi recipe of dark chickpeas stewed in anar dana (dried pomegranate) and hand-ground spices.',
    badge: 'Authentic Punjabi',
    image: '/kp/photos/6.jpg',
  },
  {
    id: 'm6',
    name: 'Dal Tadka Desi Ghee',
    category: 'curries',
    price: '₹339.00',
    desc: 'Yellow lentils finished with a sizzling crackle of cumin, dried red chillies, and aromatic pure desi ghee.',
    isJain: true,
    image: '/kp/menu/4.jpg',
  },
  {
    id: 'm7',
    name: 'Paneer Kadai',
    category: 'curries',
    price: '₹449.00',
    desc: 'Paneer cooked with bell peppers and roasted coriander seeds in a robust onion-tomato masala gravy.',
    image: '/kp/photos/2.jpg',
  },
  {
    id: 'm8',
    name: 'Dum Aloo Punjabi',
    category: 'curries',
    price: '₹419.00',
    desc: 'Deep-fried baby potatoes simmered in a spiced Kashmiri fennel yogurt sauce on low dum.',
    image: '/kp/photos/17.jpg',
  },

  // Biryani & Breads
  {
    id: 'b1',
    name: 'Hyderabadi Dum Biryani',
    category: 'biryani',
    price: '₹449.00',
    desc: 'Fragrant basmati rice layered with spiced vegetables, saffron milk, and herbs, sealed in handi with raita.',
    badge: 'Nizami Specialty',
    image: '/kp/menu/1.jpg',
  },
  {
    id: 'b2',
    name: 'Paneer Tikka Biryani',
    category: 'biryani',
    price: '₹449.00',
    desc: 'Smoky grilled paneer cubes layered with aromatic basmati rice and golden brown onions, served with cooling raita.',
    isJain: true,
    image: '/kp/photos/14.jpg',
  },
  {
    id: 'b3',
    name: 'Dal Khichdi With Desi Ghee',
    category: 'biryani',
    price: '₹369.00',
    desc: 'Wholesome comforting blend of rice and lentils cooked with mild spices, served with raita, pickle & papad.',
    isJain: true,
    image: '/kp/menu/5.jpg',
  },
  {
    id: 'b4',
    name: 'Amritsari Aloo Kulcha',
    category: 'biryani',
    price: '₹239.00',
    desc: 'Crisp layered tandoor bread stuffed with spiced mashed potatoes and pomegranate seeds, served with raita.',
    image: '/kp/menu/7.jpg',
  },
  {
    id: 'b5',
    name: 'Garlic Butter Naan',
    category: 'biryani',
    price: '₹119.00',
    desc: 'Tandoori leavened flatbread brushed with garlic butter and fresh cilantro.',
    image: '/kp/menu/6.jpg',
  },
  {
    id: 'b6',
    name: 'Cheese Garlic Naan',
    category: 'biryani',
    price: '₹129.00',
    desc: 'Tandoor baked naan infused with molten cheese and crushed garlic.',
    image: '/kp/menu/6.jpg',
  },
  {
    id: 'b7',
    name: 'Tandoori Butter Roti',
    category: 'biryani',
    price: '₹79.00',
    desc: '100% whole wheat unleavened bread baked in the clay tandoor with fresh butter.',
    image: '/kp/menu/4.jpg',
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
    image: '/kp/photos/8.jpg',
  },
  {
    id: 'd2',
    name: 'Gulab Jamun With Rabdi (2 Pcs)',
    category: 'desserts',
    price: '₹299.00',
    desc: 'Warm khoya dumplings steeped in rose syrup, paired lavishly with chilled thick artisanal rabdi.',
    badge: 'Heavenly Pair',
    isJain: true,
    image: '/kp/menu/10.jpg',
  },
  {
    id: 'd3',
    name: 'Royal Falooda',
    category: 'desserts',
    price: '₹299.00',
    desc: 'Regal layered dessert of vermicelli, basil seeds (sabza), rose milk, rich rabdi, and vanilla ice cream.',
    isJain: true,
    image: '/kp/photos/4.jpg',
  },
  {
    id: 'd4',
    name: 'Masala Chaas (200 Ml)',
    category: 'desserts',
    price: '₹159.00',
    desc: 'Traditional churned buttermilk tempered with roasted cumin, ginger, mint, and rock salt.',
    isJain: true,
    image: '/kp/photos/2.jpg',
  },
  {
    id: 'd5',
    name: 'Sweet Punjabi Lassi (200 Ml)',
    category: 'desserts',
    price: '₹199.00',
    desc: 'Thick, creamy churned sweet yogurt topped with a layer of fresh malai and crushed nuts.',
    isJain: true,
    image: '/kp/photos/4.jpg',
  },
  {
    id: 'd6',
    name: 'Desi Kala Khatta (200 Ml)',
    category: 'desserts',
    price: '₹199.00',
    desc: 'Nostalgic sweet and tangy Indian jamun cooler seasoned with black salt and lemon.',
    isJain: true,
    image: '/kp/photos/4.jpg',
  },
];

export default function MenuSection() {
  const [selectedCat, setSelectedCat] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return menuData.filter((item) => {
      const matchesCat = selectedCat === 'all' || item.category === selectedCat;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCat, searchQuery]);

  return (
    <section id="menu" className="kp-menu-section" aria-label="Digital Menu">
      <div className="kp-container">
        {/* Header */}
        <div className="kp-center-header">
          <div className="kp-section-tag">
            <span className="kp-tag-line">140+ AUTHENTIC PREPARATIONS</span>
            <span className="kp-tag-pill">100% PURE VEGETARIAN</span>
          </div>
          <h2 className="kp-section-title">
            The Complete <span className="kp-gold-text">Kailash Parbat Menu</span>
          </h2>
          <p className="kp-section-subtitle">
            From quick solo combos and spicy street delights to lavish North Indian curries and regal
            halwai desserts. All prices in INR inclusive of all culinary finesse.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="kp-menu-toolbar">
          <div className="kp-search-wrap">
            <span className="kp-search-icon">🔍</span>
            <input
              type="text"
              className="kp-search-input"
              placeholder="Search dishes (e.g. Paneer, Pav Bhaji, Biryani, Chaat, Rabdi)..."
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

        {/* Results Count & Delivery Links Bar */}
        <div className="kp-menu-meta-bar">
          <span className="kp-results-count">
            Showing <strong>{filteredItems.length}</strong> delicious preparations
          </span>
          <div className="kp-direct-order-reminder">
            <span>Direct Delivery to Your Door:</span>
            <a
              href="https://www.zomato.com/kochi/kailash-parbat-panampilly-nagar/order"
              target="_blank"
              rel="noreferrer"
              className="kp-micro-order zomato"
            >
              Zomato Order
            </a>
            <a
              href="https://www.swiggy.com/city/kochi/kailash-parbat-panampilly-nagar-panampilly-nagar-rest1420901?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder"
              target="_blank"
              rel="noreferrer"
              className="kp-micro-order swiggy"
            >
              Swiggy Order
            </a>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="kp-menu-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
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
                      <span className="kp-pill green" title="Can be prepared without onion/garlic">
                        Jain Option
                      </span>
                    )}
                  </div>

                  <p className="kp-item-desc">{item.desc}</p>

                  <div className="kp-item-order-strip">
                    <span className="kp-order-label">Order Online:</span>
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
            ))
          ) : (
            <div className="kp-no-results">
              <span className="kp-no-results-icon">🍽</span>
              <h3>No dishes found matching &quot;{searchQuery}&quot;</h3>
              <p>Try searching for popular items like Paneer, Pav Bhaji, Biryani, Chaat, or Lassi.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCat('all');
                }}
                className="kp-btn-gold"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
