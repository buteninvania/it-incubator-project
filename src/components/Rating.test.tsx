import React from 'react';
import { render, screen } from '@testing-library/react';
import {Star} from './Rating';

test('renders Star', () => {
  render(<Star selected={true}/>);
  const linkElement = screen.getByText(/Star/i);
  expect(linkElement).toBeInTheDocument();
});
