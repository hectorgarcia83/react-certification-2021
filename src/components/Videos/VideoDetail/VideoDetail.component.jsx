import React from 'react';
import useWindowResize from '../../../hooks/useWindowResize';
import VideoPlayer from '../VideoPlayer';
import ListRelatedVideos from '../ListRelatedVideos';
import { Wrapper, VideoPlayerSection, ListSection } from './VideoDetail.styles';

const HEADER_HEIGHT = 75;

function VideoDetail({ video, relatedVideos, onSelectVideo }) {
  const { height } = useWindowResize();
  return (
    <Wrapper height={`${height - HEADER_HEIGHT}px`}>
      <VideoPlayerSection>
        <VideoPlayer video={video} />
      </VideoPlayerSection>
      <ListSection>
        <ListRelatedVideos videos={relatedVideos} onSelectVideo={onSelectVideo} />
      </ListSection>
    </Wrapper>
  );
}

export default VideoDetail;
