import React from 'react';
import ListRelatedVideoItem from '../ListRelatedVideosItem';

function ListRelatedVideos({ videos, onSelectVideo, favorites = false }) {
  return (
    <div data-testid="list_related_videos">
      {videos.map((video) => (
        <ListRelatedVideoItem
          onClick={onSelectVideo}
          title={video.snippet.title}
          image={video.snippet.thumbnails.default.url}
          key={!favorites ? video.id.videoId : video.id}
          id={!favorites ? video.id.videoId : video.id}
        />
      ))}
    </div>
  );
}

export default ListRelatedVideos;
