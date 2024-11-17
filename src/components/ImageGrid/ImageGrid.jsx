import React from 'react';
import { Box, Grid, CircularProgress, Typography } from '@mui/material';
import ImageCard from '../ImageCard/ImageCard';
import { useImageContext } from '../../contexts/imageContext';

const ImageGrid = () => {
  const { images, loading, error } = useImageContext();

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
        <CircularProgress sx={{ color: 'primary.main' }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: 'center', color: 'error.main', p: 4 }}>
        <Typography>{error}</Typography>
      </Box>
    );
  }

  if (images.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', p: 4 }}>
        <Typography>Nenhuma imagem encontrada.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Grid container spacing={3}>
        {images.map((image) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={image.id}>
            <ImageCard image={image} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ImageGrid;