import React from 'react';
import { Item, Thumbnail, Title } from './ListRelatedVideos.styles';

function ListRelatedVideos({ id, title, image, onClick }) {
  return (
    <Item onClick={() => onClick(id)}>
      <Thumbnail src={image} />
      <Title>{title}</Title>
    </Item>
  );
}

export default ListRelatedVideos;
