import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './Main';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartCount, setCartCount] = useState(0);

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCartUpdate = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="app-layout">
      <Header navigateTo={navigateTo} currentPage={currentPage} cartCount={cartCount} />
      <Main
        currentPage={currentPage}
        navigateTo={navigateTo}
        onCartUpdate={handleCartUpdate}
      />
      <Footer navigateTo={navigateTo} />
    </div>
  );
}

export default App;
