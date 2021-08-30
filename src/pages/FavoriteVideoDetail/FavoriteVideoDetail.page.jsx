import React, { useEffect, useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ThemeContext from '../../state/Theme/ThemeContext';
import VideoContext from '../../state/Videos/VideoContext';
import useFavorites from '../../hooks/useFavorites';
import VideoDetail from '../../components/Videos/VideoDetail';
import Header from '../../components/Header';

import { Body } from './FavoriteVideoDetail.styles';

function VideoDetailPage() {
  const history = useHistory();
  const { videoId } = useParams();
  const { state } = useContext(ThemeContext);
  const {
    state: { favoriteVideos },
  } = useContext(VideoContext);
  const { getVideo } = useFavorites();
  const [videoDetail, setVideoDetail] = useState();

  const handleSelectVideo = (id) => {
    history.push(`/favorites/${id}`);
  };

  useEffect(() => {
    const video = getVideo(videoId);
    setVideoDetail(video);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

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
