import { Box } from '@mui/material';
import { styles } from './styles';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <Box sx={styles.root}>
      <main style={styles.main}>{children}</main>
    </Box>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;