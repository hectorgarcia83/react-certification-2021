import React, { useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ThemeContext from '../../state/Theme/ThemeContext';
import VideoContext from '../../state/Videos/VideoContext';
import useFetchVideos from '../../hooks/useFetchVideos';
import VideoDetail from '../../components/Videos/VideoDetail';
import Header from '../../components/Header';

import { Body, Loading } from './VideoDetail.styles';

function VideoDetailPage() {
  const history = useHistory();
  const { videoId } = useParams();
  const { state } = useContext(ThemeContext);
  const { state: stateVideo } = useContext(VideoContext);
  const { getVideoDetail, videoDetail, loading } = useFetchVideos();

  const handleSelectVideo = (id) => {
    history.push(`/video/${id}`);
  };

  useEffect(() => {
    getVideoDetail(videoId).catch(null);
  }, [videoId, getVideoDetail]);

  return (
    <section>
      <Header />
      {(loading || typeof loading === 'undefined') && (
        <Loading data-testid="loading">
          <img
            src="https://www.tmogroup.asia/wp-content/uploads/2018/05/001gif.gif?x96783"
            alt="loading"
            width="250"
          />
        </Loading>
      )}
      <Body theme={state.theme}>
        {videoDetail && (
          <VideoDetail
            video={videoDetail}
            relatedVideos={stateVideo.videos}
            onSelectVideo={(id) => handleSelectVideo(id)}
          />
        )}
      </Body>
    </section>
  );
}

export default VideoDetailPage;
