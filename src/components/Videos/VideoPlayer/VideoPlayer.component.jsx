import React, { useContext, useState, useEffect } from 'react';
import { MdThumbUp, MdThumbDown } from 'react-icons/md';
import useFavorites from '../../../hooks/useFavorites';
import useWindowResize from '../../../hooks/useWindowResize';
import ThemeContext from '../../../state/Theme/ThemeContext';
import AuthContext from '../../../state/Auth/AuthContext';

import {
  Title,
  Description,
  Statistics,
  Views,
  Likes,
  Dislikes,
  FavoriteButton,
  TitleRow,
} from './VideoPlayer.styles';

const VIDEO_PLAYER_MARGIN_BOTTOM = 200;

function VideoDetail({ video }) {
  const [inFavoriteList, setInFavoreList] = useState(false);
  const { state } = useContext(ThemeContext);
  const { state: stateAuth } = useContext(AuthContext);
  const { height } = useWindowResize();
  const { add: addFavorite, remove: removeVideo, exist } = useFavorites();

  useEffect(() => {
    setInFavoreList(exist(video.id));
  }, [exist, video.id]);

  const handleAddFavorite = () => {
    addFavorite(video);
    setInFavoreList(true);
  };

  const handleRemoveVideo = () => {
    removeVideo(video.id);
    setInFavoreList(false);
  };

  return (
    <div data-testid="video_player">
      <iframe
        data-testid="iframe"
        width="100%"
        height={height - VIDEO_PLAYER_MARGIN_BOTTOM}
        src={`//www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title={video.snippet.title}
      />
      <div>
        <TitleRow>
          <Title data-testid="title" theme={state.theme}>
            {video.snippet.title}
          </Title>
          {!inFavoriteList && stateAuth.user && (
            <FavoriteButton onClick={handleAddFavorite}>Add to Favorite</FavoriteButton>
          )}
          {inFavoriteList && stateAuth.user && (
            <FavoriteButton onClick={handleRemoveVideo}>
              Remove from Favorite
            </FavoriteButton>
          )}
        </TitleRow>
        <Description theme={state.theme} data-testid="description">
          {video.snippet.description}
        </Description>
        <Statistics data-testid="statistics" theme={state.theme}>
          <Views>{video.statistics.viewCount} views</Views>
          <Likes>
            <MdThumbUp size={24} style={{ marginRight: 5 }} />
            {video.statistics.likeCount}
          </Likes>
          <Dislikes>
            <MdThumbDown size={24} style={{ marginRight: 5 }} />
            {video.statistics.dislikeCount}
          </Dislikes>
        </Statistics>
      </div>
    </div>
  );
}

export default VideoDetail;
