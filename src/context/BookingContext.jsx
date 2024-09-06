import React, { createContext } from 'react';

import useArrayProvider from '../hooks/useArrayProvider';

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const {
    items: bookings,
    addItem: addBooking,
    removeItem: cancelBooking
  } = useArrayProvider();

  return (
    <BookingContext.Provider value={{ bookings, addBooking, cancelBooking }}>
      {children}
    </BookingContext.Provider>
  );
};