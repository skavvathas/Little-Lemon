import { render, screen } from '@testing-library/react';
import App from './App';
import BookingFirstStep from './components/BookingFirstStep';


test('Renders the BookingForm heading', () => {
    render(<BookingFirstStep />);
    const headingElement = screen.getByText("Reservations");
    expect(headingElement).toBeInTheDocument();
})
