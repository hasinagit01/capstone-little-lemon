import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('Button', () => {
  it('should render with default className', () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toHaveClass('btn-primary');
  });

  it('should call onClick when clicked', () => {
    const mockOnClick = jest.fn();
    render(<Button onClick={mockOnClick}>Click me</Button>);
    fireEvent.click(screen.getByText(/Click me/i));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
