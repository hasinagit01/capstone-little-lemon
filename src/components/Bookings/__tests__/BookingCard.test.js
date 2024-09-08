import { render, screen, fireEvent } from '@testing-library/react';
import BookingCard from '../BookingCard';

describe('BookingCard', () => {
  const mockItem = {
    occasion: 'Anniversary',
    date: '2023-09-01',
    time: '19:00',
    people: 4,
    seating: 'Outdoor'
  };

  it('should display booking details', () => {
    render(<BookingCard item={mockItem} index={0} onCancel={jest.fn()} />);

    // Vérifier que les détails de réservation sont affichés correctement
    expect(screen.getByText(/Your booking for/i)).toBeInTheDocument();
    expect(screen.getByText(/Anniversary/i)).toBeInTheDocument();
    expect(screen.getByText(/Date/i)).toBeInTheDocument();
    expect(screen.getByText(/2023-09-01 19:00/i)).toBeInTheDocument();
    expect(screen.getByText(/Place/i)).toBeInTheDocument();
    expect(screen.getByText(/4/i)).toBeInTheDocument();
    expect(screen.getByText(/Seating/i)).toBeInTheDocument();
    expect(screen.getByText(/Outdoor/i)).toBeInTheDocument();
  });

  it('should call onCancel when the cancel button is clicked', () => {
    const mockCancel = jest.fn();
    render(<BookingCard item={mockItem} index={0} onCancel={mockCancel} />);

    // Simuler un clic sur le bouton Cancel
    fireEvent.click(screen.getByText(/Cancel/i));

    // Vérifier que la fonction onCancel a été appelée avec l'index approprié
    expect(mockCancel).toHaveBeenCalledWith(0);
  });
});
