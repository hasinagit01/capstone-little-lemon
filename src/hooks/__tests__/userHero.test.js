// __tests__/useHero.test.js

import { render, screen, act, fireEvent } from '@testing-library/react';
import React from 'react';
import { HeroProvider } from '../../context/HeroContext';
import { useHero } from '../useHero';

// Composant de test pour utiliser le hook useHero
const TestComponent = () => {
  const { heroParams, setHeroParams } = useHero();
  
  return (
    <div>
      <span data-testid="heading">{heroParams?.heading}</span>
      <span data-testid="sub-heading">{heroParams?.sub_heading}</span>
      <button onClick={() => setHeroParams({ heading: 'New Heading' })}>Change Heading</button>
    </div>
  );
};

// Fonction de rendu personnalisé pour les tests
const renderWithHeroProvider = (ui) => {
  return render(<HeroProvider>{ui}</HeroProvider>);
};

describe('useHero hook', () => {
  it('should provide initial context values', () => {
    renderWithHeroProvider(<TestComponent />);

    // Vérifiez que les valeurs initiales sont présentes dans le document
    expect(screen.getByTestId('heading')).toBeEmptyDOMElement();
    expect(screen.getByTestId('sub-heading')).toBeEmptyDOMElement();
  });

  it('should update context values', () => {
    renderWithHeroProvider(<TestComponent />);

    // Utilisez act pour gérer les mises à jour du contexte
    act(() => {
      fireEvent.click(screen.getByText(/Change Heading/i));
    });

    // Vérifiez que les valeurs du contexte ont été mises à jour
    expect(screen.getByTestId('heading')).toHaveTextContent('New Heading');
  });
});
