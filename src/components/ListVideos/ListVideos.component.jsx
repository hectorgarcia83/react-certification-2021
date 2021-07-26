import React from 'react';
import ListVideoCard from '../ListVideosCard/ListVideosCard.component';
import { videosData } from '../../mock/youtube-videos-mock';

import { List } from './ListVideos.styles';

function ListVideos() {
  return (
    <List>
      {videosData.items
        .filter((item) => item.id.kind === 'youtube#video')
        .map((video) => (
          <ListVideoCard video={video} />
        ))}
    </List>
  );
}

export default ListVideos;
