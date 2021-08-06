import React from 'react';
import ListRelatedVideoItem from '../ListRelatedVideosItem';

function ListRelatedVideos({ videos, onSelectVideo }) {
  return (
    <div data-testid="list_related_videos">
      {videos.map((video) => (
        <ListRelatedVideoItem
          onClick={onSelectVideo}
          key={video.id.videoId}
          id={video.id.videoId}
          title={video.snippet.title}
          image={video.snippet.thumbnails.default.url}
        />
      ))}
    </div>
  );
}

export default ListRelatedVideos;
