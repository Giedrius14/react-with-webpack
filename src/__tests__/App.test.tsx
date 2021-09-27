import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('should render App', () => {
  render(<App />);
  const component = screen.getByTestId('app');
  expect(component).toBeTruthy();
});
