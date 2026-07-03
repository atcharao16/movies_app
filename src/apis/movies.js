import axios from "axios";
import { setMovies } from "../slices/movieslice";
export const getMovies = () => async dispatch =>{
    const url = 'http://localhost:5000/api/movies';
    try{
        const {data} = await axios.get(url);
        dispatch(setMovies(data));
        return data;
    }
    catch(error){
        return error;
    }
}