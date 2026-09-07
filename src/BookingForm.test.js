import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import { initializeTimes, updateTimes } from './Main';

describe('BookingForm and Reducer State Tests', () => {
  const mockTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // 1. Static Text & Element Rendering
  test('Renders the BookingForm static labels and button', () => {
    render(
      <BookingForm
        availableTimes={mockTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const nameLabel = screen.getByLabelText(/Full Name \*/i);
    expect(nameLabel).toBeInTheDocument();

    const emailLabel = screen.getByLabelText(/Email Address \*/i);
    expect(emailLabel).toBeInTheDocument();

    const dateLabel = screen.getByLabelText(/Choose Date \*/i);
    expect(dateLabel).toBeInTheDocument();

    const timeLabel = screen.getByLabelText(/Choose Time \*/i);
    expect(timeLabel).toBeInTheDocument();

    const guestsLabel = screen.getByLabelText(/Number of Guests/i);
    expect(guestsLabel).toBeInTheDocument();

    const submitButton = screen.getByRole('button', { name: /On Click/i });
    expect(submitButton).toBeInTheDocument();
  });

  // 2. initializeTimes function test
  test('initializeTimes returns a non-empty array of available times', () => {
    const times = initializeTimes();
    expect(Array.isArray(times)).toBe(true);
    expect(times.length).toBeGreaterThan(0);
  });

  // 3. updateTimes reducer test
  test('updateTimes returns updated times when UPDATE_TIMES action is dispatched', () => {
    const initialState = ['17:00', '18:00'];
    const action = { type: 'UPDATE_TIMES', date: '2026-10-15' };
    const updatedState = updateTimes(initialState, action);

    expect(Array.isArray(updatedState)).toBe(true);
    expect(updatedState.length).toBeGreaterThan(0);
  });

  test('updateTimes returns default state if unknown action is provided', () => {
    const initialState = ['17:00', '18:00'];
    const action = { type: 'UNKNOWN_ACTION' };
    const updatedState = updateTimes(initialState, action);

    expect(updatedState).toEqual(initialState);
  });

  // 4. HTML5 Validation Attributes
  test('Input fields have correct HTML5 validation attributes', () => {
    render(
      <BookingForm
        availableTimes={mockTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const nameInput = screen.getByLabelText(/Full Name \*/i);
    expect(nameInput).toHaveAttribute('type', 'text');
    expect(nameInput).toHaveAttribute('required');
    expect(nameInput).toHaveAttribute('minLength', '2');

    const emailInput = screen.getByLabelText(/Email Address \*/i);
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(emailInput).toHaveAttribute('required');

    const dateInput = screen.getByLabelText(/Choose Date \*/i);
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('required');

    const guestsInput = screen.getByLabelText(/Number of Guests/i);
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toHaveAttribute('required');
  });

  // 5. Client-side Validation (Valid and Invalid States)
  test('Submit button is disabled initially when required fields are empty', () => {
    render(
      <BookingForm
        availableTimes={mockTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const submitButton = screen.getByRole('button', { name: /On Click/i });
    expect(submitButton).toBeDisabled();
  });

  test('Submit button enables and form submits when all fields are valid', () => {
    render(
      <BookingForm
        availableTimes={mockTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const nameInput = screen.getByLabelText(/Full Name \*/i);
    const emailInput = screen.getByLabelText(/Email Address \*/i);
    const timeSelect = screen.getByLabelText(/Choose Time \*/i);
    const submitButton = screen.getByRole('button', { name: /On Click/i });

    // Fill valid data
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(timeSelect, { target: { value: '18:00' } });

    expect(submitButton).not.toBeDisabled();

    fireEvent.click(submitButton);
    expect(mockSubmitForm).toHaveBeenCalledTimes(1);
    expect(mockSubmitForm).toHaveBeenCalledWith(
      expect.objectContaining({
        fullName: 'John Doe',
        email: 'john@example.com',
        time: '18:00',
        guests: 2,
      })
    );
  });
});
