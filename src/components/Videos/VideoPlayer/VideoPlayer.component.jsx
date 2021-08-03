import React from 'react';
import { MdThumbUp, MdThumbDown } from 'react-icons/md';
import useWindowResize from '../../../hooks/useWindowResize';
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
  const { height } = useWindowResize();

  return (
    <div>
      <iframe
        width="100%"
        height={height - VIDEO_PLAYER_MARGIN_BOTTOM}
        src={`//www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title={video.snippet.title}
      />
      <div>
        <Title>{video.snippet.title}</Title>
        <Description>{video.snippet.description}</Description>
        <Statistics>
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
