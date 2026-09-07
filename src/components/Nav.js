import React, { useState } from 'react';

const Nav = ({ navigateTo, currentPage, cartCount = 0 }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    navigateTo(page);
    setMenuOpen(false);
  };

  return (
    <nav className="main-nav" aria-label="Main Navigation">
      <button
        className="hamburger-btn"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </button>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li>
          <a
            href="#home"
            className={currentPage === 'home' ? 'nav-active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
              setTimeout(() => {
                const el = document.getElementById('about');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#menu"
            className={currentPage === 'menu' ? 'nav-active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('menu');
            }}
          >
            Menu
          </a>
        </li>
        <li>
          <a
            href="#reservations"
            className={currentPage === 'booking' ? 'nav-active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('booking');
            }}
          >
            Reservations
          </a>
        </li>
        <li>
          <a
            href="#my-bookings"
            className={currentPage === 'my-bookings' ? 'nav-active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('my-bookings');
            }}
          >
            My Bookings
          </a>
        </li>
        <li>
          <a
            href="#order-online"
            className={`order-nav-btn ${currentPage === 'menu' ? 'nav-active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('menu');
            }}
          >
            Order Online {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
