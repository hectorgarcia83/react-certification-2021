import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ThemeContext from '../../state/Theme/ThemeContext';
import useFavorites from '../../hooks/useFavorites';
import ListVideos from '../../components/Videos/ListVideos';
import Header from '../../components/Header';

import { Body, Message } from './Favorites.styles';

function FavoritesPage() {
  const history = useHistory();
  const { state } = useContext(ThemeContext);
  const { list } = useFavorites();
  const [favoriteVideos, setFavoriteVideos] = useState([]);

  useEffect(() => {
    const videos = list();
    setFavoriteVideos(videos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <Message>You haven&apos;t added any video to your favorites yet</Message>
        )}
      </Body>
    </section>
  );
}

export default FavoritesPage;
