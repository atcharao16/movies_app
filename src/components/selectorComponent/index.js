import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getMoviesByGenres } from '../../apis/movies';
import { useDispatch } from 'react-redux';

export default function SelectorComponent() {
  const [genre, setGenre] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setGenre(event.target.value);
    dispatch(getMoviesByGenres(event.target.value));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Genres</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={genre}
          label="Genres"
          onChange={handleChange}
        >
          <MenuItem value="Action">Action</MenuItem>
          <MenuItem value="Drama">Drama</MenuItem>
          <MenuItem value="Crime">Crime</MenuItem>
          <MenuItem value="Romance">Romance</MenuItem>
          <MenuItem value="Thriller">Thriller</MenuItem>
          <MenuItem value="Sci-Fi">Sci-Fi</MenuItem>
          <MenuItem value="Biography">Biography</MenuItem>
          <MenuItem value="History">History</MenuItem>
          <MenuItem value="Adventure">Adventure</MenuItem>
          <MenuItem value="Fantasy">Fantasy</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
