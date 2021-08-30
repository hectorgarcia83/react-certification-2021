import React from 'react';
import { Body, Title } from './NotFound.styles';

function NotFoundPage() {
  return (
    <section>
      <Body>
        <Title data-testid="title">Not Found</Title>
      </Body>
    </section>
  );
}

export default NotFoundPage;
