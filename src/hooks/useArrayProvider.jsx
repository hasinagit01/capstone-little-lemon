import { useState } from 'react';

const useArrayProvider = (initialValue = []) => {
  const [items, setItems] = useState(initialValue);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return { items, addItem, removeItem };
};

export default useArrayProvider;
