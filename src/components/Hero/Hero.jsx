import React from 'react';
import { Box, Typography } from '@mui/material';
import SearchBar from '../SearchBar/SearchBar';

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'secondary.light',
        padding: 4,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: '2rem', md: '3rem' },
          marginBottom: 4,
          color: 'primary.main',
          textAlign: 'center',
        }}
      >
        Galeria de Imagens
      </Typography>
      <Box sx={{ width: '100%', maxWidth: '600px' }}>
        <SearchBar />
      </Box>
    </Box>
  );
};

export default Hero;