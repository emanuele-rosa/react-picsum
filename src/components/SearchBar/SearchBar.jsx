import { Box, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useImageContext } from '../../contexts/imageContext';
import { useDebounce } from '../../hooks/UseDebounce';
import { styles } from './styles';

const SearchBar = () => {
  const { setSearchTerm } = useImageContext();

  const debouncedSearch = useDebounce((value) => {
    setSearchTerm(value);
  }, 300);

  const handleSearch = (event) => {
    const value = event.target.value;
    debouncedSearch(value);
  };

  return (
    <Box sx={styles.container}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Buscar por autor..."
        onChange={handleSearch}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="primary" />
            </InputAdornment>
          ),
        }}
        sx={styles.input}
      />
    </Box>
  );
};

export default SearchBar;