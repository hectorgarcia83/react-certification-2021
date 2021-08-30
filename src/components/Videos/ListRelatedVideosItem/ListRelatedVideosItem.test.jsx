import React from 'react';
import { screen, render } from '@testing-library/react';
import ListRelatedVideosItem from './ListRelatedVideos.component';
import ThemeProvider from '../../../state/Theme/ThemeProvider';

const mockData = {
  id: '12344',
  title: 'Title',
  description: 'Description',
  image: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
};

beforeEach(() => {
  render(
    <ThemeProvider>
      <ListRelatedVideosItem
        id={mockData.id}
        title={mockData.title}
        image={mockData.image}
      />
    </ThemeProvider>
  );
});

describe('ListRelatedVideoItem', () => {
  test('Render related video item', () => {
    const titleElement = screen.queryByText('Title');
    expect(titleElement).toBeInTheDocument();

    const thumbnail = screen.queryByRole('img');
    expect(thumbnail).toBeInTheDocument();
  });
});
