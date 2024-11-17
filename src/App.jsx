import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './assets/styles/theme';
import Layout from './components/Layout/Layout';
import Hero from './components/Hero/Hero';
import ImageGrid from './components/ImageGrid/ImageGrid';
import { ImageContextProvider } from './contexts/imageContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ImageContextProvider>
        <Layout>
          <Hero />
          <ImageGrid />
        </Layout>
      </ImageContextProvider>
    </ThemeProvider>
  );
}

export default App;