import React from 'react';
import Nav from './Nav';

const Header = ({ navigateTo, currentPage, cartCount }) => {
  return (
    <header className="site-header">
      <div className="header-container">
        <a
          href="#home"
          className="logo-link"
          onClick={(e) => {
            e.preventDefault();
            navigateTo('home');
          }}
          aria-label="Little Lemon Home"
        >
          <div className="brand-logo">
            <span className="brand-lemon">🍋</span>
            <div className="brand-text">
              <span className="brand-title">LITTLE LEMON</span>
              <span className="brand-subtitle">MEDITERRANEAN</span>
            </div>
          </div>
        </a>
        <Nav navigateTo={navigateTo} currentPage={currentPage} cartCount={cartCount} />
      </div>
    </header>
  );
};

export default Header;
