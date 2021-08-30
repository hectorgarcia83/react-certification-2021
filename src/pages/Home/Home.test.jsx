import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import HomePage from './Home.page';
import ThemeProvider from '../../state/Theme/ThemeProvider';
import VideoProvider from '../../state/Videos/VideoProvider';
import AuthProvider from '../../state/Auth/AuthProvider';

beforeEach(() => {
  render(
    <AuthProvider>
      <ThemeProvider>
        <VideoProvider>
          <HomePage />
        </VideoProvider>
      </ThemeProvider>
    </AuthProvider>
  );
});

describe('Home page', () => {
  test('Should contain Title and List of Videos after load videos from Youtube', async () => {
    expect(screen.queryByTestId('loading')).toBeInTheDocument();

    await waitFor(() => screen.getByTestId('home-title'), { timeout: 2000 });

    expect(screen.queryByTestId('loading')).not.toBeInTheDocument();

    expect(screen.queryByTestId('home-title')).toHaveTextContent(
      'Welcome to the Challenge!'
    );

    const previewListElement = screen.queryByTestId(/list-videos/i);
    expect(previewListElement).toBeInTheDocument();

    const detailElement = screen.queryByTestId(/video_detail/i);
    expect(detailElement).not.toBeInTheDocument();
  });
});
