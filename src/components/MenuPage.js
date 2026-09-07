import React, { useState } from 'react';

export const fullMenuItems = [
  {
    id: 1,
    title: 'Greek Salad',
    category: 'Starters',
    price: 12.99,
    calories: '450 kcal',
    description: 'Crispy lettuce, peppers, kalamata olives, Chicago-style feta, and crunchy garlic-rosemary croutons.',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80',
    popular: true,
  },
  {
    id: 2,
    title: 'Bruschetta',
    category: 'Starters',
    price: 7.99,
    calories: '280 kcal',
    description: 'Grilled sourdough bread rubbed with garlic and seasoned with salt, olive oil, and vine-ripened tomatoes.',
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=600&q=80',
    popular: true,
  },
  {
    id: 3,
    title: 'Mediterranean Hummus Platter',
    category: 'Starters',
    price: 9.50,
    calories: '380 kcal',
    description: 'Silky smooth chickpea dip with tahini, extra virgin olive oil, paprika, and warm pita bread.',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80',
    popular: false,
  },
  {
    id: 4,
    title: 'Grilled Salmon with Lemon Herb Butter',
    category: 'Mains',
    price: 22.99,
    calories: '620 kcal',
    description: 'Wild-caught salmon filet seared to perfection, served with asparagus, roasted potatoes, and zesty lemon herb butter.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80',
    popular: true,
  },
  {
    id: 5,
    title: 'Traditional Lamb Souvlaki',
    category: 'Mains',
    price: 18.50,
    calories: '580 kcal',
    description: 'Tender marinated lamb skewers flame-grilled with bell peppers, served with tzatziki sauce and pilaf rice.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
    popular: true,
  },
  {
    id: 6,
    title: 'Lemon Herb Roasted Chicken',
    category: 'Mains',
    price: 16.99,
    calories: '540 kcal',
    description: 'Half chicken marinated in Mediterranean citrus & herbs, slow-roasted with crisp skin and juicy center.',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=600&q=80',
    popular: false,
  },
  {
    id: 7,
    title: 'Lemon Dessert',
    category: 'Desserts',
    price: 6.99,
    calories: '320 kcal',
    description: 'Authentic grandma recipe lemon cake with light citrus glaze, fresh mint, and vanilla bean infusion.',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80',
    popular: true,
  },
  {
    id: 8,
    title: 'Honey & Pistachio Baklava',
    category: 'Desserts',
    price: 8.50,
    calories: '410 kcal',
    description: 'Flaky filo pastry layers filled with chopped pistachios, sweetened and held together with wildflower honey syrup.',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=600&q=80',
    popular: false,
  },
  {
    id: 9,
    title: 'Artisan Lemonade & Mint Cooler',
    category: 'Beverages',
    price: 4.50,
    calories: '110 kcal',
    description: 'Freshly squeezed lemons, organic cane sugar, crushed ice, and garden mint sprigs.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
    popular: true,
  },
];

const categories = ['All', 'Starters', 'Mains', 'Desserts', 'Beverages'];

const MenuPage = ({ onAddToCart, navigateTo }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = fullMenuItems.filter((dish) => {
    const matchesCategory =
      selectedCategory === 'All' || dish.category === selectedCategory;
    const matchesSearch =
      dish.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dish.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="menu-page">
      <section className="menu-hero">
        <div className="menu-hero-content">
          <h1 className="menu-page-title">Little Lemon Menu</h1>
          <p className="menu-page-subtitle">
            Explore authentic Mediterranean flavors prepared daily with locally sourced ingredients.
          </p>
        </div>
      </section>

      <section className="menu-body-container">
        {/* Search & Category Filter Bar */}
        <div className="menu-controls">
          <div className="category-chips" role="tablist" aria-label="Menu categories">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={selectedCategory === cat}
                className={`category-chip ${selectedCategory === cat ? 'chip-active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="search-bar-wrapper">
            <input
              type="search"
              placeholder="🔍 Search dishes, ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="menu-search-input"
              aria-label="Search menu items"
            />
          </div>
        </div>

        {/* Menu Grid */}
        <div className="menu-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map((dish) => (
              <article key={dish.id} className="menu-card">
                <div className="menu-card-image-wrap">
                  <img src={dish.image} alt={dish.title} className="menu-card-img" />
                  {dish.popular && <span className="popular-badge">⭐ Popular</span>}
                  <span className="category-tag">{dish.category}</span>
                </div>
                <div className="menu-card-body">
                  <div className="menu-card-top">
                    <h3 className="menu-card-title">{dish.title}</h3>
                    <span className="menu-card-price">${dish.price.toFixed(2)}</span>
                  </div>
                  <span className="menu-calories">{dish.calories}</span>
                  <p className="menu-card-desc">{dish.description}</p>
                  <button
                    className="btn btn-primary menu-add-btn"
                    onClick={() => onAddToCart(dish)}
                    aria-label={`Add ${dish.title} to order`}
                  >
                    Add to Order 🛵
                  </button>
                </div>
              </article>
            ))
          ) : (
            <div className="no-menu-results">
              <h3>No items found matching "{searchQuery}"</h3>
              <p>Try searching for Greek Salad, Salmon, Lemonade, or select "All".</p>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
