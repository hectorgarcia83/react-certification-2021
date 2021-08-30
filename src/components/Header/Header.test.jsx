import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header.component';
import ThemeProvider from '../../state/Theme/ThemeProvider';
import VideoProvider from '../../state/Videos/VideoProvider';
import AuthProvider from '../../state/Auth/AuthProvider';

beforeEach(() => {
  render(
    <AuthProvider>
      <ThemeProvider>
        <VideoProvider>
          <Header />
        </VideoProvider>
      </ThemeProvider>
    </AuthProvider>
  );
});

describe('Header Component', () => {
  test('Render searchfield component', () => {
    const searchField = screen.getByRole('textbox');
    expect(searchField).toBeInTheDocument();
  });

  test('Render Switch component', () => {
    const switchToggle = screen.getByTestId('toggle');
    expect(switchToggle).toBeInTheDocument();
  });

  test('Render Image avatar', () => {
    const avatar = screen.getByTestId('avatar');
    expect(avatar).toBeInTheDocument();
  });
});
