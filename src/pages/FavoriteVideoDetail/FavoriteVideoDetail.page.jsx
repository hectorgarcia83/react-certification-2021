import React, { useEffect, useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ThemeContext from '../../state/Theme/ThemeContext';
import useFavorites from '../../hooks/useFavorites';
import VideoDetail from '../../components/Videos/VideoDetail';
import Header from '../../components/Header';

import { Body } from './FavoriteVideoDetail.styles';

function VideoDetailPage() {
  const history = useHistory();
  const { videoId } = useParams();
  const { state } = useContext(ThemeContext);
  const { getVideo, list } = useFavorites();
  const [videoDetail, setVideoDetail] = useState();
  const [favoriteVideos, setFavoriteVideos] = useState([]);

  const handleSelectVideo = (id) => {
    history.push(`/favorites/${id}`);
  };

  useEffect(() => {
    const video = getVideo(videoId);
    setVideoDetail(video);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  useEffect(() => {
    const videos = list();
    setFavoriteVideos(videos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <Header />
      <Body theme={state.theme}>
        {videoDetail && (
          <VideoDetail
            video={videoDetail}
            relatedVideos={favoriteVideos}
            onSelectVideo={(id) => handleSelectVideo(id)}
            favorites
          />
        )}
      </Body>
    </section>
  );
}

export default VideoDetailPage;
