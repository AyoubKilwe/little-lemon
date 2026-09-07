import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    comment: 'The Greek Salad was extraordinarily fresh! Best dining experience in Chicago.',
  },
  {
    id: 2,
    name: 'David K.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    comment: 'Great atmosphere, friendly staff, and the Lemon Dessert is out of this world.',
  },
  {
    id: 3,
    name: 'Elena R.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    comment: 'Authentic Mediterranean flavors that remind me of my travels to Greece and Italy.',
  },
  {
    id: 4,
    name: 'Michael B.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    comment: 'Booking a table was seamless. We had a wonderful anniversary dinner.',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" aria-labelledby="testimonials-heading">
      <div className="testimonials-container">
        <h2 id="testimonials-heading" className="testimonials-title">
          What our customers say!
        </h2>
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <article key={item.id} className="testimonial-card">
              <div className="rating" aria-label={`Rating: ${item.rating} out of 5 stars`}>
                {'★'.repeat(item.rating)}
              </div>
              <div className="customer-info">
                <img
                  src={item.avatar}
                  alt={`Portrait of ${item.name}`}
                  className="customer-avatar"
                />
                <h3 className="customer-name">{item.name}</h3>
              </div>
              <p className="testimonial-comment">"{item.comment}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
