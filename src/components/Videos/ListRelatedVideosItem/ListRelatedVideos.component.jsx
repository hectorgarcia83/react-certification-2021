import React, { useContext } from 'react';
import ThemeContext from '../../../state/Theme/ThemeContext';
import { Item, Thumbnail, Title } from './ListRelatedVideos.styles';

function ListRelatedVideos({ id, title, image, onClick }) {
  const { state } = useContext(ThemeContext);
  return (
    <Item
      onClick={() => onClick(id)}
      data-testid="list_related_video_item"
      theme={state.theme}
    >
      <Thumbnail src={image} role="img" />
      <Title theme={state.theme}>{title}</Title>
    </Item>
  );
}

export default ListRelatedVideos;
