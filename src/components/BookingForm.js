import React, { useState } from 'react';

const BookingForm = ({ availableTimes = [], dispatch, submitForm }) => {
  // Today's date for minimum selectable date
  const today = new Date().toISOString().split('T')[0];

  // Form State
  const [date, setDate] = useState(today);
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState('Birthday');
  const [seating, setSeating] = useState('Standard');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  // Touched state for client-side validation hints
  const [touched, setTouched] = useState({
    date: false,
    time: false,
    guests: false,
    fullName: false,
    email: false,
  });

  // Validation checks
  const isDateValid = Boolean(date && date >= today);
  const isTimeValid = Boolean(time && time.length > 0);
  const isGuestsValid = Boolean(guests >= 1 && guests <= 10);
  const isFullNameValid = Boolean(fullName.trim().length >= 2);
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFormValid = isDateValid && isTimeValid && isGuestsValid && isFullNameValid && isEmailValid;

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    if (dispatch) {
      dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      setTouched({
        date: true,
        time: true,
        guests: true,
        fullName: true,
        email: true,
      });
      return;
    }

    const formData = {
      date,
      time,
      guests: Number(guests),
      occasion,
      seating,
      fullName,
      email,
      specialRequests,
    };

    if (submitForm) {
      submitForm(formData);
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate aria-label="Table reservation form">
      {/* Full Name */}
      <div className="form-field">
        <label htmlFor="full-name">Full Name *</label>
        <input
          type="text"
          id="full-name"
          name="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          onBlur={() => handleBlur('fullName')}
          placeholder="e.g. John Doe"
          required
          minLength={2}
          aria-required="true"
          aria-invalid={touched.fullName && !isFullNameValid}
          aria-describedby={touched.fullName && !isFullNameValid ? 'name-error' : undefined}
          className={touched.fullName && !isFullNameValid ? 'input-error' : ''}
        />
        {touched.fullName && !isFullNameValid && (
          <span id="name-error" className="error-message" role="alert">
            Please enter your name (minimum 2 characters).
          </span>
        )}
      </div>

      {/* Email Address */}
      <div className="form-field">
        <label htmlFor="email">Email Address *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => handleBlur('email')}
          placeholder="e.g. john@example.com"
          required
          aria-required="true"
          aria-invalid={touched.email && !isEmailValid}
          aria-describedby={touched.email && !isEmailValid ? 'email-error' : undefined}
          className={touched.email && !isEmailValid ? 'input-error' : ''}
        />
        {touched.email && !isEmailValid && (
          <span id="email-error" className="error-message" role="alert">
            Please enter a valid email address.
          </span>
        )}
      </div>

      {/* Date */}
      <div className="form-field">
        <label htmlFor="res-date">Choose Date *</label>
        <input
          type="date"
          id="res-date"
          name="resDate"
          value={date}
          min={today}
          onChange={handleDateChange}
          onBlur={() => handleBlur('date')}
          required
          aria-required="true"
          aria-invalid={touched.date && !isDateValid}
          aria-describedby={touched.date && !isDateValid ? 'date-error' : undefined}
          className={touched.date && !isDateValid ? 'input-error' : ''}
        />
        {touched.date && !isDateValid && (
          <span id="date-error" className="error-message" role="alert">
            Please select a valid date (today or later).
          </span>
        )}
      </div>

      {/* Time */}
      <div className="form-field">
        <label htmlFor="res-time">Choose Time *</label>
        <select
          id="res-time"
          name="resTime"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          onBlur={() => handleBlur('time')}
          required
          aria-required="true"
          aria-invalid={touched.time && !isTimeValid}
          aria-describedby={touched.time && !isTimeValid ? 'time-error' : undefined}
          className={touched.time && !isTimeValid ? 'input-error' : ''}
        >
          <option value="">-- Select an available time slot --</option>
          {availableTimes.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
        {touched.time && !isTimeValid && (
          <span id="time-error" className="error-message" role="alert">
            Please select a reservation time.
          </span>
        )}
      </div>

      {/* Number of Guests */}
      <div className="form-field">
        <label htmlFor="guests">Number of Guests (1 - 10) *</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={guests}
          min="1"
          max="10"
          onChange={(e) => setGuests(e.target.value)}
          onBlur={() => handleBlur('guests')}
          required
          aria-required="true"
          aria-invalid={touched.guests && !isGuestsValid}
          aria-describedby={touched.guests && !isGuestsValid ? 'guests-error' : undefined}
          className={touched.guests && !isGuestsValid ? 'input-error' : ''}
        />
        {touched.guests && !isGuestsValid && (
          <span id="guests-error" className="error-message" role="alert">
            Please choose between 1 and 10 guests.
          </span>
        )}
      </div>

      {/* Occasion */}
      <div className="form-field">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Engagement">Engagement</option>
          <option value="Business">Business Dinner</option>
          <option value="Other">Other Occasion</option>
        </select>
      </div>

      {/* Seating Preference */}
      <div className="form-field">
        <label htmlFor="seating">Seating Preference</label>
        <select
          id="seating"
          name="seating"
          value={seating}
          onChange={(e) => setSeating(e.target.value)}
        >
          <option value="Standard">Standard (Indoor)</option>
          <option value="Outdoor">Outdoor Patio</option>
          <option value="Booth">Cozy Booth</option>
        </select>
      </div>

      {/* Special Requests */}
      <div className="form-field full-width">
        <label htmlFor="special-requests">Special Requests (Optional)</label>
        <textarea
          id="special-requests"
          name="specialRequests"
          value={specialRequests}
          onChange={(e) => setSpecialRequests(e.target.value)}
          rows="3"
          placeholder="Let us know about dietary restrictions, high chairs, or celebratory arrangements..."
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="form-action full-width">
        <button
          type="submit"
          className="btn btn-primary submit-btn"
          disabled={!isFormValid}
          aria-label="On Click"
        >
          Make Your Reservation
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
