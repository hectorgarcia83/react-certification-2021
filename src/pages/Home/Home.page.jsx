import React, { useEffect, useState, useCallback } from 'react';
import useFetchVideos from '../../hooks/useFetchVideos';
import ListVideos from '../../components/Videos/ListVideos';
import VideoDetail from '../../components/Videos/VideoDetail';
import Header from '../../components/Header';

import { Title, TitleWrapper, Loading } from './Home.styles';

function HomePage() {
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
    searchVideos('Wizeline').catch(null);
  }, [searchVideos, handleSelectVideo]);

  const handleSearchChangeText = (search) => {
    if (videoIdSelected) {
      setVideoIdSelected('');
    }
    searchVideos(search).catch(null);
  };

  return (
    <section>
      <Header onSearch={handleSearchChangeText} />
      {(loading || typeof loading === 'undefined') && (
        <Loading data-testid="loading">
          <img
            src="https://www.tmogroup.asia/wp-content/uploads/2018/05/001gif.gif?x96783"
            alt="loading"
            width="250"
          />
        </Loading>
      )}
      {!loading && !videoIdSelected && videos.length > 0 && (
        <>
          <TitleWrapper>
            <Title data-testid="home-title">Welcome to the Challenge!</Title>
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
    </section>
  );
}

export default HomePage;
