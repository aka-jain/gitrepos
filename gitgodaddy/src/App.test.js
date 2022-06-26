import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './app';

it('renders correctly when there are no items', () => {
  const tree = render(<App />);
  expect(tree).toMatchSnapshot();
});
