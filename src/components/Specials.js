import React from 'react';

const specialsData = [
  {
    id: 1,
    title: 'Greek Salad',
    price: 12.99,
    formattedPrice: '$12.99',
    description:
      'The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image:
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: 'Bruschetta',
    price: 7.99,
    formattedPrice: '$7.99',
    description:
      'Our Bruschetta is made from grilled sourdough bread rubbed with garlic and seasoned with salt, fresh extra virgin olive oil, and vine-ripened tomatoes.',
    image:
      'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    title: 'Lemon Dessert',
    price: 6.99,
    formattedPrice: '$6.99',
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined, with a delicate lemon zest.",
    image:
      'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80',
  },
];

const Specials = ({ navigateTo, onAddToCart }) => {
  return (
    <section id="specials" className="specials-section" aria-labelledby="specials-heading">
      <div className="specials-container">
        <div className="specials-header">
          <h2 id="specials-heading" className="section-title">This weeks specials!</h2>
          <button
            className="btn btn-primary"
            onClick={() => navigateTo && navigateTo('menu')}
            aria-label="View our full online menu"
          >
            Online Menu
          </button>
        </div>

        <div className="specials-grid">
          {specialsData.map((dish) => (
            <article key={dish.id} className="dish-card">
              <div className="dish-image-wrapper">
                <img src={dish.image} alt={dish.title} className="dish-image" />
              </div>
              <div className="dish-body">
                <div className="dish-header">
                  <h3 className="dish-title">{dish.title}</h3>
                  <span className="dish-price">{dish.formattedPrice}</span>
                </div>
                <p className="dish-description">{dish.description}</p>
                <div className="dish-footer">
                  <button
                    className="order-delivery-btn"
                    onClick={() => onAddToCart && onAddToCart(dish)}
                    aria-label={`Order a delivery for ${dish.title}`}
                  >
                    Order a delivery <span className="delivery-icon">🛵</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;
