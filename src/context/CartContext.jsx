import React, { createContext } from 'react';

import useArrayProvider from '../hooks/useArrayProvider';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const {
    items: carts,
    addItem: addCart,
    removeItem: cancelCart
  } = useArrayProvider();

  return (
    <CartContext.Provider value={{ carts, addCart, cancelCart }}>
      {children}
    </CartContext.Provider>
  );
};