import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoCard from './VideoCard.component';
// import VideoProvider from '../../../state/Videos/VideoProvider';
import ThemeProvider from '../../../state/Theme/ThemeProvider';
// import Theme from '../../../theme';

const mockData = {
  id: '12344',
  title: 'Title',
  description: 'Description',
  image: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
};

beforeEach(() => {
  render(
    <ThemeProvider>
      <VideoCard
        key={mockData.id}
        title={mockData.title}
        description={mockData.description}
        image={mockData.image}
      />
    </ThemeProvider>
  );
});

describe('VideoCard', () => {
  test('Render Video values on card', () => {
    const titleElement = screen.queryByText('Title');
    expect(titleElement).toBeInTheDocument();

    const descriptionElement = screen.queryByText('Description');
    expect(descriptionElement).toBeInTheDocument();
  });
});
