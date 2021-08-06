import React from 'react';
import { Item, Thumbnail, Title } from './ListRelatedVideos.styles';

function ListRelatedVideos({ id, title, image, onClick }) {
  return (
    <Item onClick={() => onClick(id)} data-testid="list_related_video_item">
      <Thumbnail src={image} role="img" />
      <Title>{title}</Title>
    </Item>
  );
}

export default ListRelatedVideos;
