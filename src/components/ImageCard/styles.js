export const styles = {
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      cursor: 'pointer',
      transition: 'all 0.3s ease-in-out',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: 8,
      },
    },
    media: {
      height: 200,
      objectFit: 'cover',
    },
    content: {
      padding: 2,
      backgroundColor: 'background.paper',
    },
    author: {
      color: 'primary.main',
      fontWeight: 500,
    },
  };