// BookingForm.test.js

import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookingForm from '../BookingForm';
import { BookingContext } from '../../../context/BookingContext';

// Mock function for addBooking
const mockAddBooking = jest.fn();

it('should display validation errors when fields are empty', () => {
  render(
    <MemoryRouter>
      <BookingContext.Provider value={{ addBooking: mockAddBooking }}>
        <BookingForm />
      </BookingContext.Provider>
    </MemoryRouter>
  );

  fireEvent.click(screen.getByText(/Make your reservation/i));

  expect(screen.getByText(/First Name is required/i)).toBeInTheDocument();
  expect(screen.getByText(/Last Name is required/i)).toBeInTheDocument();
  expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
  expect(screen.getByText(/Phone number is required/i)).toBeInTheDocument();
  expect(screen.getByText(/Date is required/i)).toBeInTheDocument();
  expect(screen.getByText(/Time is required/i)).toBeInTheDocument();
  expect(screen.getByText(/Occasion is required/i)).toBeInTheDocument();
  expect(screen.getByText(/Seating preference is required/i)).toBeInTheDocument();
});
