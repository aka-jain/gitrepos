import { render } from '@testing-library/react';
import React from 'react';
import { RepoDetail } from '.';

it('renders correctly when there are no items', () => {
  const tree = render(<RepoDetail />);
  expect(tree).toMatchSnapshot();
});