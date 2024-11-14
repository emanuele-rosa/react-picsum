import { useMemo, useContext } from 'react';
import { ImageContext } from '../contexts/imageContext';

export const useImageSearch = () => {
  const { images, searchTerm } = useContext(ImageContext);

  const filteredImages = useMemo(() => {
    if (!searchTerm) return images;
    
    return images.filter((image) =>
      image.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [images, searchTerm]);

  return filteredImages;
};