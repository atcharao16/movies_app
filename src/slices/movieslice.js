import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    searchValue: ''
}
const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        }
    },
})

export const { setMovies } = movieSlice.actions;
export default movieSlice.reducer;