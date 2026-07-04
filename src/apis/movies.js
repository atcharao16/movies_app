import axios from "axios";
import { setMovies } from "../slices/movieslice";

const BaseURL = 'http://localhost:5000/api/movies';

export const getMovies = () => async dispatch => {
    const url = BaseURL;
    try {
        const { data } = await axios.get(url);
        dispatch(setMovies(data));
        return data;
    }
    catch (error) {
        return error;
    }
}
export const getMoviesBySearch = (value) => async dispatch => {
    const url = BaseURL + '/search/title';
    try {
        const { data } = await axios.get(url, {
            params: {
                title: value
            }
        });
        dispatch(setMovies(data));
    }
    catch (error) {
        return error;
    }

}

export const getMoviesByGenres = (value) => async dispatch => {
    const url = BaseURL + '/filter/genre';
    try {
        const { data } = await axios.get(url, {
            params: {
                genre: value
            }
        });
        dispatch(setMovies(data));
    }
    catch (error) {
        return error;
    }
}