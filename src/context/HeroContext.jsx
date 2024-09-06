import React, { createContext, useContext, useState } from 'react';

const HeroContext = createContext();

export const HeroProvider = ({ children }) => {
  const [heroParams, setHeroParams] = useState(null);

  return (
    <HeroContext.Provider value={{ heroParams, setHeroParams }}>
      {children}
    </HeroContext.Provider>
  );
};

export const useHero = () => useContext(HeroContext);

export default HeroContext; 