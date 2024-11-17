import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const ImageContext = createContext();

export const useImageContext = () => useContext(ImageContext);

export const ImageContextProvider = ({ children }) => {
  const [allImages, setAllImages] = useState([]); 
  const [filteredImages, setFilteredImages] = useState([]); 
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://picsum.photos/v2/list?limit=30');
        setAllImages(response.data);
        setFilteredImages(response.data);
      } catch (err) {
        setError('Erro ao carregar imagens.');
        console.error('Erro:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredImages(allImages);
    } else {
      const filtered = allImages.filter(image =>
        image.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredImages(filtered);
    }
  }, [searchTerm, allImages]);

  const value = {
    images: filteredImages,
    loading,
    error,
    searchTerm,
    setSearchTerm,
  };

  return (
    <ImageContext.Provider value={value}>
      {children}
    </ImageContext.Provider>
  );
};

export default ImageContext;