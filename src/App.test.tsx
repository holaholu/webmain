import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i); // this is a regex that matches the text "learn react"
  expect(linkElement).toBeInTheDocument(); // this is a matcher that checks if the text is present in the document
});
