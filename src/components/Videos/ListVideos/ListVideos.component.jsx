import React from 'react';
import VideoCard from '../VideoCard/VideoCard.component';

import { List } from './ListVideos.styles';

function ListVideos({ videos, onSelectVideo }) {
  return (
    <List data-testid="list-videos">
      {videos.map((video) => (
        <VideoCard
          onClick={onSelectVideo}
          key={video.id.videoId}
          id={video.id.videoId}
          title={video.snippet.title}
          description={video.snippet.description}
          image={video.snippet.thumbnails.medium.url}
        />
      ))}
    </List>
  );
}

export default ListVideos;
