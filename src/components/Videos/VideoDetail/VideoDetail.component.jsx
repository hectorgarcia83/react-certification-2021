import React from 'react';
import useWindowResize from '../../../hooks/useWindowResize';
import VideoPlayer from '../VideoPlayer';
import ListRelatedVideos from '../ListRelatedVideos';
import { Wrapper, VideoPlayerSection, ListSection } from './VideoDetail.styles';

const HEADER_HEIGHT = 75;

function VideoDetail({ video, relatedVideos, onSelectVideo, favorites = false }) {
  const { height } = useWindowResize();
  return (
    <Wrapper height={`${height - HEADER_HEIGHT}px`} data-testid="video_detail">
      <VideoPlayerSection>
        <VideoPlayer video={video} />
      </VideoPlayerSection>
      <ListSection>
        <ListRelatedVideos
          videos={relatedVideos}
          onSelectVideo={onSelectVideo}
          favorites={favorites}
        />
      </ListSection>
    </Wrapper>
  );
}

export default VideoDetail;
