import React from 'react';
import { render, screen } from '@testing-library/react';
import Accordion from './Accordion';

test('renders Star', () => {
  render(<Accordion title={"Меню"}/>);
  const linkElement = screen.getByText(/Меню/i);
  expect(linkElement).toBeInTheDocument();
});
