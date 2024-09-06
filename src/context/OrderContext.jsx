import React, { createContext } from 'react';

import useArrayProvider from '../hooks/useArrayProvider';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const {
    items: orders,
    addItem: addOrder,
    removeItem: cancelOrder
  } = useArrayProvider();

  return (
    <OrderContext.Provider value={{ orders, addOrder, cancelOrder }}>
      {children}
    </OrderContext.Provider>
  );
};