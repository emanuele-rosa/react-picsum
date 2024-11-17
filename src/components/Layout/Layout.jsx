import React from 'react';
import { Box } from '@mui/material';
import { styles } from './styles';

const Layout = ({ children }) => {
  return (
    <Box sx={styles.root}>
      <main style={styles.main}>{children}</main>
    </Box>
  );
};

export default Layout;

