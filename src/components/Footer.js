import React from 'react';

const Footer = ({ navigateTo }) => {
  return (
    <footer className="site-footer" aria-label="Site Footer">
      <div className="footer-container">
        {/* Brand Column */}
        <div className="footer-col footer-brand">
          <div className="brand-logo footer-logo">
            <span className="brand-lemon">🍋</span>
            <div className="brand-text">
              <span className="brand-title">LITTLE LEMON</span>
              <span className="brand-subtitle">MEDITERRANEAN</span>
            </div>
          </div>
          <p className="footer-tagline">
            Bringing the authentic taste of the Mediterranean to Chicago with love, tradition, and freshness.
          </p>
        </div>

        {/* Doormat Navigation */}
        <div className="footer-col">
          <h4 className="footer-heading">Navigation</h4>
          <ul className="footer-links">
            <li>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('home');
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
                  navigateTo('home');
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
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('home');
                  setTimeout(() => {
                    const el = document.getElementById('specials');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#reservations"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('booking');
                }}
              >
                Reservations
              </a>
            </li>
            <li>
              <a
                href="#order"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('home');
                }}
              >
                Order Online
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-col">
          <h4 className="footer-heading">Contact Us</h4>
          <address className="footer-contact">
            <p>📍 123 Mediterranean Way, Chicago, IL 60601</p>
            <p>📞 (312) 555-0199</p>
            <p>✉️ contact@littlelemonchicago.com</p>
            <p>⏰ Mon - Sun: 11:00 AM - 11:00 PM</p>
          </address>
        </div>

        {/* Social Media Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Connect With Us</h4>
          <ul className="footer-links social-links">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter / X
              </a>
            </li>
            <li>
              <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer">
                TripAdvisor
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Little Lemon Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
