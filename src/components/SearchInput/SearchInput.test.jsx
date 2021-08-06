import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchInput from './SearchInput.component';

describe('SearchField Component', () => {
  test('Render Searchfield component', () => {
    render(<SearchInput />);

    const searchField = screen.getByPlaceholderText('Search');
    expect(searchField).toBeInTheDocument();
  });
});
