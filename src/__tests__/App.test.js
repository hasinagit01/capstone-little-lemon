

import { render, screen } from '@testing-library/react';
import App from '../App'; 


jest.mock('../components/Layout/MainLayout', () => () => <div>MainLayout</div>);

describe('App component', () => {
  it('should render MainLayout component', () => {
    render(<App />);
    
    
    expect(screen.getByText('MainLayout')).toBeInTheDocument();
  });
});
