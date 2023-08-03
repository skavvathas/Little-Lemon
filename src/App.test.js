import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ReservationsPage from './pages/ReservationsPage';

// Mocking emailjs so that it does not send an actual email during testing
jest.mock('emailjs-com', () => ({
  send: jest.fn().mockResolvedValue({ text: 'Email sent successfully!' }),
}));

describe('ReservationsPage', () => {
  test('should show error alert if required fields are missing in first step', () => {
    render(<ReservationsPage />);

    // Click on the submit button without filling in any fields
    fireEvent.click(screen.getByText('Next'));

    // Assert that an alert for checking the fields is displayed
    expect(window.alert).toHaveBeenCalledWith('Check the fields!');
  });

  test('should show error alerts if required fields are missing in second step', () => {
    render(<ReservationsPage />);

    // Move to the second step by clicking on the submit button in the first step
    fireEvent.click(screen.getByText('Next'));

    // Click on the submit button without filling in any fields in the second step
    fireEvent.click(screen.getByText('Confirm Booking'));

    // Assert that error alerts for each field are displayed
    expect(window.alert).toHaveBeenCalledWith('Check the fields!');
    expect(window.alert).toHaveBeenCalledWith('The email must conclude \'@\'');
    expect(window.alert).toHaveBeenCalledWith('The length of phoneNumber must be > 8');
    expect(window.alert).toHaveBeenCalledWith('Add a request');
  });

  test('should submit the form with valid data', async () => {
    render(<ReservationsPage />);

    // Fill in required fields in the first step
    fireEvent.change(screen.getByLabelText('Date'), { target: { value: '2023-08-03' } });
    fireEvent.change(screen.getByLabelText('Time'), { target: { value: '12:00 PM' } });
    fireEvent.change(screen.getByLabelText('Number of Guests'), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText('Occasion'), { target: { value: 'Birthday' } });

    // Move to the second step by clicking on the submit button in the first step
    fireEvent.click(screen.getByText('Next'));

    // Fill in required fields in the second step
    fireEvent.change(screen.getByLabelText('First Name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText('Last Name'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText('Phone Number'), { target: { value: '12345678' } });
    fireEvent.change(screen.getByLabelText('Special Requests'), { target: { value: 'No onions' } });

    // Click on the submit button in the second step
    fireEvent.click(screen.getByText('Confirm Booking'));

    // Assert that emailjs.send was called with the correct parameters
    expect(require('emailjs-com').send).toHaveBeenCalledWith(
      'service_2b7ywx4',
      'template_ixr3fcl',
      expect.objectContaining({
        from_name: 'Spiros',
        to_email: 'john.doe@example.com',
        reply_to: 'john.doe@example.com',
        firstName: 'John',
        time: '12:00 PM',
        date: '2023-08-03',
        occasion: 'Birthday',
        numberOfGuests: '4',
        radioGroup: '',
      }),
      'hQrK0Y2d4VCdTh6jT'
    );

    // Assert that success alert is displayed
    await screen.findByText('Email sent successfully, check your email!');
  });
});
