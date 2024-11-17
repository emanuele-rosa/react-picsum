import React from 'react';
import { 
  Modal, 
  Box, 
  Typography, 
  IconButton,
  Link 
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styles } from './styles';

const ImageModal = ({ open, onClose, image }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="image-modal"
    >
      <Box sx={styles.modal}>
        <IconButton 
          onClick={onClose}
          sx={styles.closeButton}
        >
          <CloseIcon />
        </IconButton>
        
        <Box sx={styles.imageContainer}>
          <img
            src={`https://picsum.photos/id/${image.id}/800/600`}
            alt={`Photo by ${image.author}`}
            style={styles.image}
          />
        </Box>

        <Box sx={styles.details}>
          <Typography variant="h5" sx={styles.author}>
            {image.author}
          </Typography>
          
          <Typography variant="body1" sx={styles.info}>
            Dimensões: {image.width} x {image.height}
          </Typography>
          
          <Link 
            href={image.download_url} 
            target="_blank" 
            rel="noopener noreferrer"
            sx={styles.link}
          >
            Ver Imagem Original
          </Link>
        </Box>
      </Box>
    </Modal>
  );
};

export default ImageModal;

