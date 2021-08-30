import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ThemeContext from '../../state/Theme/ThemeContext';
import VideoContext from '../../state/Videos/VideoContext';
import ListVideos from '../../components/Videos/ListVideos';
import Header from '../../components/Header';

import { Body, Message } from './Favorites.styles';

function FavoritesPage() {
  const history = useHistory();
  const { state } = useContext(ThemeContext);
  const {
    state: { favoriteVideos },
  } = useContext(VideoContext);

  const handleSelectVideo = (videoId) => {
    history.push(`/favorites/${videoId}`);
  };

  return (
    <section>
      <Header />
      <Body theme={state.theme}>
        {favoriteVideos.length > 0 ? (
          <>
            <ListVideos
              videos={favoriteVideos}
              onSelectVideo={(videoId) => handleSelectVideo(videoId)}
              favorites
            />
          </>
        ) : (
          <Message data-testid="message" theme={state.theme}>
            You haven&apos;t added any video to your favorites yet
          </Message>
        )}
      </Body>
    </section>
  );
}

export default FavoritesPage;
