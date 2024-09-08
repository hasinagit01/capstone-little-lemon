
import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeroProvider } from '../../../context/HeroContext';
import MainLayout from '../MainLayout';
import { useHero } from '../../../context/HeroContext';

// Mocks des composants enfants
jest.mock('../Header/Header', () => () => <div>Header</div>);
jest.mock('../Footer/Footer', () => () => <div>Footer</div>);
jest.mock('../../Sections/Hero', () => ({ paramsHero }) => <div>{paramsHero.heading}</div>);
jest.mock('../../../routes/MainRoutes', () => () => <div>MainRoutes</div>);

describe('MainLayout component', () => {
    it('should render Header, MainRoutes, and Footer', () => {
      render(
        <HeroProvider>
          <MainLayout />
        </HeroProvider>
      );
  
      expect(screen.getByText('Header')).toBeInTheDocument();
      expect(screen.getByText('MainRoutes')).toBeInTheDocument();
      expect(screen.getByText('Footer')).toBeInTheDocument();
    });
  
    it('should render Hero component if heroParams are present', () => {
      // Créez un composant wrapper pour modifier le contexte directement
      const Wrapper = ({ heroParams }) => {
        const { setHeroParams } = useHero();
        React.useEffect(() => {
          setHeroParams(heroParams);
        }, [heroParams, setHeroParams]);
  
        return <MainLayout />;
      };
  
      const testHeroParams = {
        heading: 'Welcome to Little Lemon',
        sub_heading: 'Chicago',
        sub_text: 'Enjoy our dishes...',
        image: { heroImage: '/path/to/image.jpg' },
        type_for_sub_text: 'p',
        button_text: 'Reserve a Table',
        button_path: './booking',
      };
  
      render(
        <HeroProvider>
          <Wrapper heroParams={testHeroParams} />
        </HeroProvider>
      );
  
      expect(screen.getByText(testHeroParams.heading)).toBeInTheDocument();
    });
  });
