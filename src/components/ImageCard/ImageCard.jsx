import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import ImageModal from '../ImageModal/ImageModal';
import { styles } from './styles';

const ImageCard = ({ image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card sx={styles.card} onClick={() => setIsModalOpen(true)}>
        <CardMedia
          component="img"
          height="200"
          image={`https://picsum.photos/id/${image.id}/400/300`}
          alt={`Photo by ${image.author}`}
          sx={styles.media}
          loading="lazy"
        />
        <CardContent sx={styles.content}>
          <Typography variant="subtitle1" sx={styles.author}>
            {image.author}
          </Typography>
        </CardContent>
      </Card>
      <ImageModal 
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        image={image}
      />
    </>
  );
};

export default ImageCard;

