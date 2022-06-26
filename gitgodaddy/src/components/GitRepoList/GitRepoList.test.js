import { render, screen } from '@testing-library/react';
import React from 'react';
import GitRepoList from '.';

it('renders correctly when there are no items', () => {
  const tree = render(<GitRepoList />);
  expect(tree).toMatchSnapshot();
});

it('by default page is home page', () => {
    render(
        <GitRepoList/>
    );
    expect(screen.getByText(/Godaddy/)).toBeInTheDocument();
  })