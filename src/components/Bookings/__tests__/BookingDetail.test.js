import { render, screen } from '@testing-library/react';
import BookingDetail from '../BookingDetail';

describe('BookingDetail', () => {
  it('should display label and value', () => {
    render(<BookingDetail label="Date" value="2023-09-01" />);
    expect(screen.getByText(/Date/i)).toBeInTheDocument();
    expect(screen.getByText(/2023-09-01/i)).toBeInTheDocument();
  });
});
