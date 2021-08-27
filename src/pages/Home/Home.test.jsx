import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import HomePage from './Home.page';
import ThemeProvider from '../../state/Theme/ThemeProvider';
import VideoProvider from '../../state/Videos/VideoProvider';

beforeEach(() => {
  render(
    <ThemeProvider>
      <VideoProvider>
        <HomePage />
      </VideoProvider>
    </ThemeProvider>
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

  test('Click on video and render video detail', async () => {
    await waitFor(() => screen.getByTestId('home-title'), { timeout: 2000 });

    fireEvent.click(screen.queryByTestId(/card_nmXMgqjQzls/i));
    expect(screen.queryByTestId('loading')).toBeInTheDocument();

    await waitFor(() => screen.getByTestId('video_detail'), { timeout: 2000 });

    expect(screen.queryByTestId('loading')).not.toBeInTheDocument();

    const titleElement = screen.queryByTestId('home-title');
    expect(titleElement).not.toBeInTheDocument();

    const previewListElement = screen.queryByTestId(/list-videos/i);
    expect(previewListElement).not.toBeInTheDocument();
  });
});
