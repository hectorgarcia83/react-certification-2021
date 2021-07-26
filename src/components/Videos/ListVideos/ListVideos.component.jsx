import React from 'react';
import VideoCard from '../VideoCard/VideoCard.component';
import { videosData } from '../../../mock/youtube-videos-mock';

import { List } from './ListVideos.styles';

function ListVideos() {
  return (
    <div>
      <List>
        {videosData.items
          .filter((item) => item.id.kind === 'youtube#video')
          .map((video) => (
            <VideoCard video={video} />
          ))}
      </List>
    </div>
  );
}

export default ListVideos;
