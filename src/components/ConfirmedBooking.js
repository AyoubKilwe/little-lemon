import React from 'react';

const ConfirmedBooking = ({ bookingData, navigateTo }) => {
  const confirmationNumber = Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="confirmation-page" aria-labelledby="confirmation-title">
      <div className="confirmation-card">
        <div className="confirmation-badge" role="img" aria-label="Success checkmark">
          ✓
        </div>
        <h1 id="confirmation-title" className="confirmation-title">
          Reservation Confirmed!
        </h1>
        <p className="confirmation-subtitle">
          We look forward to welcoming you to Little Lemon.
        </p>

        <div className="booking-summary-box">
          <div className="summary-row">
            <span className="summary-label">Confirmation #:</span>
            <span className="summary-value">LL-{confirmationNumber}</span>
          </div>
          {bookingData?.fullName && (
            <div className="summary-row">
              <span className="summary-label">Guest Name:</span>
              <span className="summary-value">{bookingData.fullName}</span>
            </div>
          )}
          {bookingData?.email && (
            <div className="summary-row">
              <span className="summary-label">Email:</span>
              <span className="summary-value">{bookingData.email}</span>
            </div>
          )}
          {bookingData?.date && (
            <div className="summary-row">
              <span className="summary-label">Date:</span>
              <span className="summary-value">{bookingData.date}</span>
            </div>
          )}
          {bookingData?.time && (
            <div className="summary-row">
              <span className="summary-label">Time:</span>
              <span className="summary-value">{bookingData.time}</span>
            </div>
          )}
          {bookingData?.guests && (
            <div className="summary-row">
              <span className="summary-label">Party Size:</span>
              <span className="summary-value">{bookingData.guests} Guest(s)</span>
            </div>
          )}
          {bookingData?.occasion && (
            <div className="summary-row">
              <span className="summary-label">Occasion:</span>
              <span className="summary-value">{bookingData.occasion}</span>
            </div>
          )}
          {bookingData?.seating && (
            <div className="summary-row">
              <span className="summary-label">Seating:</span>
              <span className="summary-value">{bookingData.seating}</span>
            </div>
          )}
        </div>

        <p className="confirmation-note">
          A confirmation email has been sent to your inbox. If you need to make adjustments to your reservation, please contact us at (312) 555-0199.
        </p>

        <div className="confirmation-actions">
          <button
            className="btn btn-primary"
            onClick={() => navigateTo('home')}
            aria-label="Return to Homepage"
          >
            Return to Home
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => navigateTo('booking')}
            aria-label="Book another reservation"
          >
            Book Another Table
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmedBooking;
