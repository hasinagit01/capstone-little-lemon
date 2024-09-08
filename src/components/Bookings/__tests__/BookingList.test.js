import { render, screen } from '@testing-library/react';
import BookingList from '../BookingList';
import { BookingContext } from '../../../context/BookingContext';

describe('BookingList', () => {
  it('should display "ShowEmptyForProfile" when no bookings are present', () => {
    const mockContext = { bookings: [], cancelBooking: jest.fn() };

    render(
      <BookingContext.Provider value={mockContext}>
        <BookingList />
      </BookingContext.Provider>
    );

    expect(screen.getByText(/reservations/i)).toBeInTheDocument();
  });

  it('should display bookings when bookings are present', () => {
    const mockContext = { 
      bookings: [{ occasion: 'Birthday', date: '2023-09-01', time: '18:00', people: 2, seating: 'Indoor' }],
      cancelBooking: jest.fn() 
    };

    render(
      <BookingContext.Provider value={mockContext}>
        <BookingList />
      </BookingContext.Provider>
    );

    expect(screen.getByText(/Birthday/i)).toBeInTheDocument();
    expect(screen.getByText(/2023-09-01 18:00/i)).toBeInTheDocument();
  });
});
