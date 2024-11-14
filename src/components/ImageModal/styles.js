export const styles = {
    modal: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '90%',
      maxWidth: '1000px',
      bgcolor: 'background.paper',
      borderRadius: 2,
      boxShadow: 24,
      p: 4,
    },
    closeButton: {
      position: 'absolute',
      right: 8,
      top: 8,
      color: 'primary.main',
    },
    imageContainer: {
      width: '100%',
      height: 'auto',
      maxHeight: '70vh',
      overflow: 'hidden',
      borderRadius: 1,
      mb: 2,
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    },
    details: {
      mt: 2,
    },
    author: {
      color: 'primary.main',
      mb: 1,
    },
    info: {
      color: 'text.secondary',
      mb: 1,
    },
    link: {
      color: 'primary.main',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  };