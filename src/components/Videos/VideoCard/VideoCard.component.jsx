import React, { useContext } from 'react';
import ThemeContext from '../../../state/Theme/ThemeContext';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from './VideoCard.styles';

function VideoCard({ id, title, description, image, onClick }) {
  const { state } = useContext(ThemeContext);
  return (
    <Card onClick={() => onClick(id)} data-testid={`card_${id}`} theme={state.theme}>
      <CardHeader image={image} />
      <CardContent>
        <CardTitle theme={state.theme}>{title}</CardTitle>
        <CardDescription theme={state.theme}>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
