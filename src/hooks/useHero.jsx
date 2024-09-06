import { useContext } from 'react';
import HeroContext from '../context/HeroContext';

export const useHero = () => useContext(HeroContext);
