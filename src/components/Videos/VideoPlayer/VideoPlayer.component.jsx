import React, { useContext } from 'react';
import { MdThumbUp, MdThumbDown } from 'react-icons/md';
import useWindowResize from '../../../hooks/useWindowResize';
import ThemeContext from '../../../state/Theme/ThemeContext';
import {
  Title,
  Description,
  Statistics,
  Views,
  Likes,
  Dislikes,
} from './VideoPlayer.styles';

const VIDEO_PLAYER_MARGIN_BOTTOM = 200;

function VideoDetail({ video }) {
  const { state } = useContext(ThemeContext);
  const { height } = useWindowResize();

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
        <Title data-testid="title" theme={state.theme}>
          {video.snippet.title}
        </Title>
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
