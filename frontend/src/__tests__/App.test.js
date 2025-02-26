import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Short Link & QR Code Generator heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Short Link & QR Code Generator/i);
  expect(headingElement).toBeInTheDocument();
});