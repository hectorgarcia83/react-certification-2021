import React from 'react';
import ListVideos from '../../components/ListVideos';
import { Title, TitleWrapper } from './Home.styles';

function HomePage() {
  return (
    <section>
      <TitleWrapper>
        <Title>Welcome to the Challenge!</Title>
      </TitleWrapper>
      <ListVideos />
    </section>
  );
}

export default HomePage;
