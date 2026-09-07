import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Integration and Navigation Tests', () => {
  test('renders header logo and navigation links', () => {
    render(<App />);
    const logoTitle = screen.getByText(/LITTLE LEMON/i);
    expect(logoTitle).toBeInTheDocument();

    const reservationsNav = screen.getByRole('link', { name: /Reservations/i });
    expect(reservationsNav).toBeInTheDocument();
  });

  test('navigates to booking page when clicking Reserve a Table', () => {
    render(<App />);
    const reserveButton = screen.getByRole('button', { name: /Reserve a table at Little Lemon/i });
    fireEvent.click(reserveButton);

    const bookingHeading = screen.getByRole('heading', { name: /Reserve a Table/i, level: 1 });
    expect(bookingHeading).toBeInTheDocument();
  });
});
