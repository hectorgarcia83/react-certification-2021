import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ThemeContext from '../../state/Theme/ThemeContext';
import VideoContext from '../../state/Videos/VideoContext';
import useFetchVideos from '../../hooks/useFetchVideos';
import ListVideos from '../../components/Videos/ListVideos';
import Header from '../../components/Header';

import { Body, Title, TitleWrapper, Loading } from './Home.styles';

function HomePage() {
  const history = useHistory();
  const { state } = useContext(ThemeContext);
  const { state: stateVideo } = useContext(VideoContext);
  const { searchVideos, loading } = useFetchVideos();

  const handleSelectVideo = (videoId) => {
    history.push(`/video/${videoId}`);
  };

  useEffect(() => {
    searchVideos(stateVideo.searchText).catch(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateVideo.searchText]);

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
        {!loading && stateVideo.videos.length > 0 && (
          <>
            <TitleWrapper>
              <Title data-testid="home-title" theme={state.theme}>
                Welcome to the Challenge!
              </Title>
            </TitleWrapper>
            <ListVideos
              videos={stateVideo.videos}
              onSelectVideo={(videoId) => handleSelectVideo(videoId)}
            />
          </>
        )}
      </Body>
    </section>
  );
}

export default HomePage;
