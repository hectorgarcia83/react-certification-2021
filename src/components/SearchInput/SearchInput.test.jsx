import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchInput from './SearchInput.component';
import VideoProvider from '../../state/Videos/VideoProvider';

describe('SearchField Component', () => {
  test('Render Searchfield component', () => {
    render(
      <VideoProvider>
        <SearchInput />
      </VideoProvider>
    );

    const searchField = screen.getByPlaceholderText('Search');
    expect(searchField).toBeInTheDocument();
  });
});
