import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from './VideoCard.styles';

function VideoCard({ id, title, description, image, onClick }) {
  return (
    <Card onClick={() => onClick(id)} data-testid={`card_${id}`}>
      <CardHeader image={image} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
