import React, { useEffect, useState, useCallback, useContext } from 'react';
import ThemeContext from '../../state/Theme/ThemeContext';
import VideoContext from '../../state/Videos/VideoContext';
import useFetchVideos from '../../hooks/useFetchVideos';
import ListVideos from '../../components/Videos/ListVideos';
import VideoDetail from '../../components/Videos/VideoDetail';
import Header from '../../components/Header';

import { Body, Title, TitleWrapper, Loading } from './Home.styles';

function HomePage() {
  const { state } = useContext(ThemeContext);
  const { state: stateVideo } = useContext(VideoContext);
  const [videoIdSelected, setVideoIdSelected] = useState();
  const { searchVideos, videos, getVideoDetail, videoDetail, loading } = useFetchVideos();

  const handleSelectVideo = useCallback(
    (videoId) => {
      setVideoIdSelected(videoId);
      getVideoDetail(videoId).catch(null);
    },
    [getVideoDetail]
  );

  useEffect(() => {
    searchVideos('').catch(null);
  }, [searchVideos, handleSelectVideo]);

  useEffect(() => {
    searchVideos(stateVideo.searchText).catch(null);
  }, [stateVideo.searchText, searchVideos]);

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
        {!loading && !videoIdSelected && videos.length > 0 && (
          <>
            <TitleWrapper>
              <Title data-testid="home-title" theme={state.theme}>
                Welcome to the Challenge!
              </Title>
            </TitleWrapper>
            <ListVideos
              videos={videos}
              onSelectVideo={(videoId) => handleSelectVideo(videoId)}
            />
          </>
        )}
        {!loading && videoIdSelected && videoDetail && (
          <VideoDetail
            video={videoDetail}
            relatedVideos={videos}
            onSelectVideo={(videoId) => handleSelectVideo(videoId)}
          />
        )}
      </Body>
    </section>
  );
}

export default HomePage;
