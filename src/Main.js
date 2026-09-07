import React, { useReducer, useState, useEffect } from 'react';
import Hero from './components/Hero';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';
import About from './components/About';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import MenuPage from './components/MenuPage';
import MyReservations from './components/MyReservations';
import Toast from './components/Toast';
import { fetchAPI, submitAPI } from './api';

/**
 * Initializes available reservation times for today's date
 * @returns {Array<string>} List of available times
 */
export const initializeTimes = () => {
  const today = new Date();
  try {
    return fetchAPI(today);
  } catch (err) {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  }
};

/**
 * Reducer function to update available times based on chosen date
 * @param {Array<string>} state Current available times
 * @param {Object} action Action object containing type and optional date
 * @returns {Array<string>} Updated available times
 */
export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES': {
      if (!action.date) {
        return state;
      }
      try {
        const dateObj = new Date(action.date);
        return fetchAPI(dateObj);
      } catch (err) {
        return state;
      }
    }
    default:
      return state;
  }
};

const Main = ({ currentPage, navigateTo, onCartUpdate }) => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const [bookingData, setBookingData] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');

  // Load saved reservations from localStorage
  const [reservations, setReservations] = useState(() => {
    try {
      const saved = localStorage.getItem('little_lemon_reservations');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Keep localStorage updated with reservations
  useEffect(() => {
    try {
      localStorage.setItem('little_lemon_reservations', JSON.stringify(reservations));
    } catch (e) {
      // ignore
    }
  }, [reservations]);

  // Initialize available times on mount if empty
  useEffect(() => {
    if (!availableTimes || availableTimes.length === 0) {
      dispatch({ type: 'UPDATE_TIMES', date: new Date().toISOString().split('T')[0] });
    }
  }, [availableTimes]);

  const showToast = (message, type = 'success') => {
    setToastMessage(message);
    setToastType(type);
  };

  /**
   * Adds food item to delivery order
   */
  const handleAddToCart = (dish) => {
    if (onCartUpdate) {
      onCartUpdate();
    }
    showToast(`🛵 "${dish.title}" added to your online order!`, 'success');
  };

  /**
   * Submits booking form data via API simulation and routes to confirmation
   */
  const submitForm = (formData) => {
    const isSuccess = submitAPI(formData);
    if (isSuccess) {
      const confirmationNumber = Math.floor(100000 + Math.random() * 900000);
      const newBooking = {
        ...formData,
        confirmationNumber: `LL-${confirmationNumber}`,
        createdAt: new Date().toISOString(),
      };

      setBookingData(newBooking);
      setReservations((prev) => [newBooking, ...prev]);
      showToast('🎉 Reservation confirmed successfully!', 'success');
      navigateTo('confirmed');
    } else {
      showToast('⚠️ Could not process your reservation. Please check your details.', 'error');
    }
  };

  /**
   * Cancels a stored reservation
   */
  const handleCancelBooking = (bookingId) => {
    setReservations((prev) =>
      prev.filter(
        (b) => (b.id && b.id !== bookingId) && (b.confirmationNumber && b.confirmationNumber !== bookingId)
      )
    );
    showToast('Reservation has been cancelled.', 'info');
  };

  return (
    <main className="main-content" id="main-content">
      <Toast
        message={toastMessage}
        type={toastType}
        onClose={() => setToastMessage('')}
      />

      {currentPage === 'home' && (
        <>
          <Hero navigateTo={navigateTo} />
          <Specials navigateTo={navigateTo} onAddToCart={handleAddToCart} />
          <Testimonials />
          <About />
        </>
      )}

      {currentPage === 'booking' && (
        <BookingPage
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      )}

      {currentPage === 'confirmed' && (
        <ConfirmedBooking bookingData={bookingData} navigateTo={navigateTo} />
      )}

      {currentPage === 'menu' && (
        <MenuPage onAddToCart={handleAddToCart} navigateTo={navigateTo} />
      )}

      {currentPage === 'my-bookings' && (
        <MyReservations
          reservations={reservations}
          onCancelBooking={handleCancelBooking}
          navigateTo={navigateTo}
        />
      )}
    </main>
  );
};

export default Main;
