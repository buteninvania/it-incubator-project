import React from 'react';
import { render, screen } from '@testing-library/react';
import Rating from './Rating';

test('renders Star', () => {
  render(<Rating />);
  // const linkElement = screen.getByText(/Star/i);
  // expect(linkElement).toBeInTheDocument();
});
