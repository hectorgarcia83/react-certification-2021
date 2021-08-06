import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoDetail from './VideoDetail.component';

const mockVideo = {
  id: 'nmXMgqjQzls',
  snippet: {
    title: 'Video Tour | Welcome to Wizeline Guadalajara',
    description:
      "Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office.\n\nIn 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, Mexico, home to over 400 employees. Wizeline has drawn attention for designing an office and culture focused on employee wellness and cultivating talent, earning a Super Espacios award by WeWork, Expansion Mexico, and Top Companies.\n\nRead more about the office here: https://www.wizeline.com/creating-first-class-facilities/\n\nIf you're interested in working with Wizeline and want to experience the culture and tour our offices live, contact us at www.wizeline.com/contact/",
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
        width: 480,
        height: 360,
      },
      standard: {
        url: 'https://i.ytimg.com/vi/nmXMgqjQzls/sddefault.jpg',
        width: 640,
        height: 480,
      },
      maxres: {
        url: 'https://i.ytimg.com/vi/nmXMgqjQzls/maxresdefault.jpg',
        width: 1280,
        height: 720,
      },
    },
  },
  statistics: {
    viewCount: '15138',
    likeCount: '283',
    dislikeCount: '5',
    favoriteCount: '0',
  },
};
const mockRelatedVideos = [];

beforeEach(() => {
  render(<VideoDetail video={mockVideo} relatedVideos={mockRelatedVideos} />);
});

describe('Video Detail', () => {
  test('Should Contain VideoPlayer and List Related Videos', () => {
    const videoPlayer = screen.queryByTestId(/video_player/i);
    expect(videoPlayer).toBeInTheDocument();

    const relatedVideos = screen.queryByTestId(/list_related_videos/i);
    expect(relatedVideos).toBeInTheDocument();
  });
});
