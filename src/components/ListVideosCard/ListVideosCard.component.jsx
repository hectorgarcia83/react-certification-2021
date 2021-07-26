import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from './ListVideosCard.styles';

function ListVideoCard({ video }) {
  const {
    snippet: { title, description, thumbnails },
  } = video;
  return (
    <Card>
      <CardHeader image={thumbnails.medium.url} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

export default ListVideoCard;
