import React from 'react';

const MyReservations = ({ reservations = [], onCancelBooking, navigateTo }) => {
  return (
    <div className="reservations-page">
      <section className="reservations-hero">
        <div className="reservations-hero-content">
          <h1 className="reservations-page-title">My Table Reservations</h1>
          <p className="reservations-page-subtitle">
            View, track, or manage your upcoming dining reservations at Little Lemon Chicago.
          </p>
        </div>
      </section>

      <section className="reservations-body-container">
        {reservations.length === 0 ? (
          <div className="no-reservations-box">
            <span className="empty-icon">📅</span>
            <h2>No Active Reservations Found</h2>
            <p>You haven't made any table reservations yet. Book your table now for a delicious Mediterranean experience!</p>
            <button
              className="btn btn-primary"
              onClick={() => navigateTo('booking')}
              aria-label="Book a table now"
            >
              Book a Table Now
            </button>
          </div>
        ) : (
          <div className="reservations-list">
            {reservations.map((booking, index) => (
              <article key={booking.id || index} className="reservation-item-card">
                <div className="res-card-header">
                  <div className="res-badge-confirmed">✓ Confirmed</div>
                  <span className="res-ref-id">Ref: {booking.confirmationNumber || `LL-${100000 + index}`}</span>
                </div>

                <div className="res-card-details">
                  <div className="res-detail-item">
                    <span className="res-label">👤 Guest Name:</span>
                    <span className="res-value">{booking.fullName}</span>
                  </div>
                  <div className="res-detail-item">
                    <span className="res-label">✉️ Email:</span>
                    <span className="res-value">{booking.email}</span>
                  </div>
                  <div className="res-detail-item">
                    <span className="res-label">📅 Date:</span>
                    <span className="res-value">{booking.date}</span>
                  </div>
                  <div className="res-detail-item">
                    <span className="res-label">⏰ Time:</span>
                    <span className="res-value">{booking.time}</span>
                  </div>
                  <div className="res-detail-item">
                    <span className="res-label">👥 Party Size:</span>
                    <span className="res-value">{booking.guests} Guest(s)</span>
                  </div>
                  <div className="res-detail-item">
                    <span className="res-label">🎉 Occasion:</span>
                    <span className="res-value">{booking.occasion || 'Standard'}</span>
                  </div>
                  <div className="res-detail-item">
                    <span className="res-label">🪑 Seating:</span>
                    <span className="res-value">{booking.seating || 'Standard'}</span>
                  </div>
                </div>

                {booking.specialRequests && (
                  <p className="res-special-req">
                    <strong>Special Request:</strong> "{booking.specialRequests}"
                  </p>
                )}

                <div className="res-card-actions">
                  <button
                    className="btn btn-secondary cancel-res-btn"
                    onClick={() => {
                      if (window.confirm('Are you sure you want to cancel this reservation?')) {
                        onCancelBooking(booking.id || booking.confirmationNumber);
                      }
                    }}
                    aria-label={`Cancel reservation for ${booking.date}`}
                  >
                    Cancel Reservation
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default MyReservations;
