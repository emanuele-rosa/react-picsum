export const styles = {
    container: {
      width: '100%',
      maxWidth: '600px',
      margin: '0 auto',
    },
    input: {
      '& .MuiOutlinedInput-root': {
        backgroundColor: 'background.paper',
        borderRadius: '12px',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-2px)',
        },
        '& fieldset': {
          borderColor: 'primary.light',
        },
        '&:hover fieldset': {
          borderColor: 'primary.main',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'primary.main',
        },
      },
    },
  };