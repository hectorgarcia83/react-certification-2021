import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from './NotFound.page';
import ThemeProvider from '../../state/Theme/ThemeProvider';
import VideoProvider from '../../state/Videos/VideoProvider';
import AuthProvider from '../../state/Auth/AuthProvider';

beforeEach(() => {
  render(
    <AuthProvider>
      <ThemeProvider>
        <VideoProvider>
          <NotFound />
        </VideoProvider>
      </ThemeProvider>
    </AuthProvider>
  );
});

describe('NotFound page', () => {
  test('Should contain Title', async () => {
    expect(screen.queryByTestId('title')).toHaveTextContent('Not Found');
  });
});
