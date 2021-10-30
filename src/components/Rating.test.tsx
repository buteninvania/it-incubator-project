import React from 'react';
import { render, screen } from '@testing-library/react';
import Rating from './Rating';

test('renders Star', () => {
  render(<Rating value={3}/>);
  // const linkElement = screen.getByText(/Star/i);
  // expect(linkElement).toBeInTheDocument();
});
