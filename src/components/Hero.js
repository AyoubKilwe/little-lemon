import React from 'react';

const Hero = ({ navigateTo }) => {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-container">
        <div className="hero-content">
          <h1 id="hero-title" className="hero-title">Little Lemon</h1>
          <h2 className="hero-subtitle">Chicago</h2>
          <p className="hero-description">
            We are a family-owned Mediterranean restaurant, focused on traditional recipes
            served with a modern twist. Enjoy the freshest seasonal ingredients in an elegant
            and vibrant atmosphere.
          </p>
          <button
            className="btn btn-primary hero-btn"
            onClick={() => navigateTo('booking')}
            aria-label="Reserve a table at Little Lemon"
          >
            Reserve a Table
          </button>
        </div>
        <div className="hero-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
            alt="Little Lemon restaurant dishes and restaurant ambiance"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
