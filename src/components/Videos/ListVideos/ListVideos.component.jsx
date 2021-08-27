import React from 'react';
import VideoCard from '../VideoCard/VideoCard.component';

import { List } from './ListVideos.styles';

function ListVideos({ videos, onSelectVideo, favorites = false }) {
  return (
    <List data-testid="list-videos">
      {videos.map((video) => (
        <VideoCard
          onClick={onSelectVideo}
          key={!favorites ? video.id.videoId : video.id}
          id={!favorites ? video.id.videoId : video.id}
          title={video.snippet.title}
          description={
            favorites
              ? video.snippet.description.substring(0, 163)
              : video.snippet.description
          }
          image={video.snippet.thumbnails.medium.url}
        />
      ))}
    </List>
  );
}

export default ListVideos;
