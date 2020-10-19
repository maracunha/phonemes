import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Success from '../Success';

test('renders back link', () => {
  const { getByText } = render(
    <Router>
      <Success />)
    </Router>
    );
  const linkElement = getByText(/Voltar/i);
  expect(linkElement).toBeInTheDocument();
});
