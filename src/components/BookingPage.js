import React from 'react';
import BookingForm from './BookingForm';

const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
  return (
    <div className="booking-page-container">
      <section className="booking-hero" aria-labelledby="booking-heading">
        <div className="booking-hero-content">
          <h1 id="booking-heading" className="booking-title">Reserve a Table</h1>
          <p className="booking-subtitle">
            Experience exceptional Mediterranean dining at Little Lemon Chicago. Fill out the details below to secure your table.
          </p>
        </div>
      </section>

      <section className="booking-form-section" aria-label="Reservation details">
        <div className="booking-card">
          <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
          />
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
