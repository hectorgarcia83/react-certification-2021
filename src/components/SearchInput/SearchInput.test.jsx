import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchInput from './SearchInput.component';
import VideoProvider from '../../state/Videos/VideoProvider';
import AuthProvider from '../../state/Auth/AuthProvider';

describe('SearchField Component', () => {
  test('Render Searchfield component', () => {
    render(
      <AuthProvider>
        <VideoProvider>
          <SearchInput />
        </VideoProvider>
      </AuthProvider>
    );

    const searchField = screen.getByPlaceholderText('Search');
    expect(searchField).toBeInTheDocument();
  });
});
